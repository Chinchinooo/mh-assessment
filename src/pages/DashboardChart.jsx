import React, { useContext, useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import { AppContext } from "../AppContext";
import { Chart } from "chart.js/auto";
import DataCard from "../components/DataCard/DataCard";

const DashboardChart = () => {
    const { comments } = useContext(AppContext);

    const [averageComments, setAverageComments] = useState(0);
    const [averageCommentsPerUser, setAverageCommentsPerUser] = useState(0);
    const [commentData, setCommentData] = useState({
        labels: [],
        datasets: [
            {
                label: "",
                data: [],
                type: 'line'
            },
            {
                label: "",
                data: [],
                type: 'bar'
            }
        ]
    });

    useEffect(() => {
        const totalComments = comments.length;
        const uniquePosts = new Set(comments.map(comment => comment.postId)).size;
        const averageCommentsPerPost = uniquePosts > 0 ? totalComments / uniquePosts : 0;
        setAverageComments(averageCommentsPerPost);
        console.log('comment', averageCommentsPerPost)

        const commentCounts = {}; // To count comments per post
        const userCommentCounts = {}; // To count comments per user per post
        const postIds = new Set(); // To keep track of unique post IDs


        // Count comments per post and comments per user per post
        comments.forEach(comment => {
            if (!commentCounts[comment.postId]) {
                commentCounts[comment.postId] = 0;
                userCommentCounts[comment.postId] = {};
                postIds.add(comment.postId);
            }
            commentCounts[comment.postId]++;

            if (userCommentCounts[comment.postId][comment.name]) {
                userCommentCounts[comment.postId][comment.name]++;
            } else {
                userCommentCounts[comment.postId][comment.name] = 1;
            }
        });

        // Calculate average comments per user per post
        const averagesPerUser = Array.from(postIds).map(postId => {
            const uniqueUsers = Object.keys(userCommentCounts[postId]).length;
            return commentCounts[postId] / uniqueUsers;
        });

        const totalAveragePerUser = averagesPerUser.reduce((sum, avg) => sum + avg, 0);

        const averagePerUser = totalAveragePerUser / postIds.size;
        setAverageCommentsPerUser(averagePerUser);

        console.log('user', averagesPerUser)
        // Update state
        setCommentData({
            labels: Array.from(postIds),
            datasets: [
                {
                    label: "Comment Per Post",
                    data: Array.from(postIds).map(() => averageCommentsPerPost),
                    type: 'line'
                },
                {
                    label: "Comment Per User Per Post",
                    data: averagesPerUser,
                    type: 'bar'
                }
            ]
        });
    }, [comments]);

    return (
        <div className="flex flex-col items-center w-full">
        <div className="w-full flex justify-center" style={{maxWidth: "1000px"}}>
            <DataCard
            averageComments={averageComments}
            averageCommentsPerUser={averageCommentsPerUser}
            />
        </div>
        <div className="w-full flex justify-center">
            <div className="w-full lg:w-8/12 p-5 ">
                 <div className="bg-white shadow-md mb-2 rounded-xl hover:bg-slate-100 transition duration-350 ease-in-out p-5">
                    <Line data={commentData} />
                </div>
            </div>
        </div>
    </div>
    );
};

export default DashboardChart;
