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
        <Route path='/' element={<Posts/>} />
        <Route path='/posts' element={<Posts/>} />
        <Route path='/posts/:id/comments' element={<PostWithComments/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/users/:id' element={<ProfilePage/>} />
        <Route path='/dashboard' element={<DashboardChart/>} />
    </Routes>
    </div>
  );
}

export default App;
