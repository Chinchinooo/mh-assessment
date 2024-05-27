import React, { useContext, useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import { AppContext } from "../../AppContext";
import { Chart } from "chart.js/auto";

const LineChart = () => {
    const { comments } = useContext(AppContext);

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
            return uniqueUsers > 0 ? commentCounts[postId] / uniqueUsers : 0;
        });

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
        <div className="w-8/12">
            <Line data={commentData} />
        </div>
    );
};

export default LineChart;
