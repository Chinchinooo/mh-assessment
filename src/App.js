import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation.jsx';
import PostCardList from './components/PostCardList/PostCardList.jsx';
import ProfilePage from './components/ProfilePage/ProfilePage.jsx';
import Users from './pages/Users.jsx';
import CommentsList from './components/CommentsList/CommentList.jsx';
import PostWithComments from './pages/PostWithComments.jsx';
import DataCard from './components/DataCard/DataCard.jsx';
import DashboardChart from './pages/DashboardChart.jsx';

const App = () => {
  return (
    <div>
    <Navigation/>
    <Routes>
        <Route path='/' element={<PostCardList/>} />
        <Route path='/posts' element={<PostCardList/>} />
        <Route path='/posts/:id/comments' element={<PostWithComments/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/users/:id' element={<ProfilePage/>} />
        <Route path='/dashboard' element={<DashboardChart/>} />
    </Routes>
    </div>
  );
}

export default App;


//profile show the info
// fetch the info from API
// setInitialState - first profile