import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation.jsx';
import PostCard from './components/PostCard/PostCard.jsx';
import PostCardList from './components/PostCardList/PostCardList.jsx';
import CommentsCard from './components/CommentsCard/CommentsCard.jsx';
import ProfilePage from './components/ProfilePage/ProfilePage.jsx';
import Users from './pages/Users.jsx';
import { AppProvider } from './AppContext.js';

const App = () => {
  return (
    <div>
    <Navigation/>
    <Routes>
        <Route path='/' element={<PostCardList/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/users/:id' element={<ProfilePage/>} />
    </Routes>
    </div>
  );
}

export default App;


//profile show the info
// fetch the info from API
// setInitialState - first profile