import React, { useContext, useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { AppContext } from "../../AppContext";
import { Chart } from "chart.js/auto";

const LineChart = () => {
    const { comments } = useContext(AppContext);

    const [commentData, setCommentData] = useState({
        labels: [],
        datasets: [{
            label: "Average Comment Per Post",
            data: []
        }]
    });

    useEffect(() => {
    const totalComments = comments.length;
    const uniquePosts = new Set(comments.map(comment => comment.postId)).size;
    const averageCommentsPerPost = totalComments / uniquePosts;

    const commentCounts = {}; // Initialize commentCounts as an empty object
    const postIds = []; // Initialize postIds as an empty array

    // Count comments per post
    comments.forEach(comment => {
        if (commentCounts[comment.postId]) {
            commentCounts[comment.postId].push(comment.commentId);
        } else {
            commentCounts[comment.postId] = [comment.commentId];
            postIds.push(comment.postId);
        }
    });

        // Calculate average comments per post
    const averages = postIds.map(postId => commentCounts[postId].length);

        // Update state
        setCommentData({
        labels: Array.from(new Set(comments.map(comment => comment.postId))),
        datasets: [{
            label: "Average Comment Per Post",
            data: Array(uniquePosts).fill(averageCommentsPerPost)
        }]
        });
        }, [comments]); // Recalculate when comments change
            console.log('commentData', commentData)

    return (
        <div className=" w-8/12">
            <Line data={commentData} />
        </div>
    );
};

export default LineChart;