import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Profile from './components/Profile/Profile.jsx'
import ProfileList from './components/ProfileList/ProfileList.jsx';
import Pagination from './components/Pagination/Pagination.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import PostCard from './components/PostCard/PostCard.jsx';
import PostCardList from './components/PostCardList/PostCardList.jsx';
import PostwithComment from './components/PostwithComment/PostwithComment.jsx';
import CommentsCard from './components/CommentsCard/CommentsCard.jsx';

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(2);

   useEffect(() => {
    fetchUsers();
    fetchPosts();
    fetchComments();
  }, []);

  const fetchComments = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchPosts = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };


  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;
  const currentUsers = users.slice(firstUserIndex, lastUserIndex);


  return (
    <div className="App">
      <Navigation/>
{/*   <Profile user={users[0]}/> 
   
      <PostComment
        posts={posts}
        users={users}/>
        

      <ProfileList currentUsers={currentUsers}/>
      <Pagination
        totalUsers={users.length}
        userPerPage={usersPerPage}
        setCurrentPage={setCurrentPage}/>*/}
   <PostCardList
        posts={posts}
        users={users}
      />
    </div>
  );
}

export default App;


//profile show the info
// fetch the info from API
// setInitialState - first profile