import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation.jsx';
import ProfilePage from './components/ProfilePage/ProfilePage.jsx';
import Users from './pages/Users.jsx';
import PostWithComments from './pages/PostWithComments.jsx';
import DashboardChart from './pages/DashboardChart.jsx';
import Posts from './pages/Posts.jsx';

const App = () => {
  return (
    <div>
    <Navigation/>
    <Routes>
        <Route path='/mh-assessment' element={<Posts/>} />
        <Route path='/mh-assessment/posts' element={<Posts/>} />
        <Route path='/mh-assessment/posts/:id/comments' element={<PostWithComments/>} />
        <Route path='/mh-assessment/users' element={<Users/>} />
        <Route path='/mh-assessment/users/:id' element={<ProfilePage/>} />
        <Route path='/mh-assessment/dashboard' element={<DashboardChart/>} />
    </Routes>
    </div>
  );
}

export default App;
