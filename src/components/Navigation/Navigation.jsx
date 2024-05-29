import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navigation.css';
import home from './home.png';
import dashboard from './dashboard.png'
import usersimage from './usersimage.png'
import { AppContext } from '../../AppContext';

const Navigation = () => {
  const { users, setFilteredUsers, setFilteredPosts, posts } = useContext(AppContext);
  const [searchBox, setSearchBox] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const showSearchBar = location.pathname === '/posts' || location.pathname === '/users' || location.pathname === '/' ;

  useEffect(() => {
    if (searchBox.trim() === '') {
      setFilteredUsers(users);
      setFilteredPosts(posts);
    } else {
      const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(searchBox.toLowerCase())
      );
      const filteredPosts = posts.filter(post => 
        post.title.toLowerCase().includes(searchBox.toLowerCase())
      );

      setFilteredUsers(filteredUsers);
      setFilteredPosts(filteredPosts);

      if (filteredUsers.length === 0) {
        console.log("No user results found");
      }
      if (filteredPosts.length === 0) {
        console.log("No post results found");
      }
    }
  }, [searchBox, users, posts]);

  useEffect(() => {
    if (location.pathname === '/posts' || location.pathname === '/users') {
      setSearchBox('');
    }
  }, [location.pathname]);

  const onSearchChange = (event) => {
    setSearchBox(event.target.value);
  };

  return (
    <div>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Loopple/loopple-public-assets@main/riva-dashboard-tailwind/riva-dashboard.css"/>
      <div className="flex flex-wrap mx-3 mb-2">
        <div className="px-3 mx-auto w-full bg-white rounded-xl">
          <div className="sm:flex items-stretch justify-between grow lg:mb-0 py-5 px-5">
            <div className="flex flex-col flex-wrap justify-center mb-5 mr-3 lg:mb-0">
              <span className="my-0 flex text-dark font-semibold text-[1.35rem]/[1.2] flex-col justify-center">
                Insta Linked
              </span>
            </div>
            <div className="flex items-center lg:shrink-0 lg:flex-nowrap">
              {showSearchBar && (
                <div className="relative flex items-center lg:ml-4 sm:mr-0 mr-2">
                  <span className="absolute ml-4 leading-none -translate-y-1/2 top-1/2 text-muted">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                    </svg>
                  </span>
                  <input 
                    className="block w-full min-w-[70px] py-3 pl-12 pr-4 text-base font-medium leading-normal bg-white border border-solid outline-none appearance-none placeholder:text-secondary-dark peer text-stone-500 border-stone-200 bg-clip-padding rounded-2xl" 
                    placeholder="Search..." 
                    type="text"
                    value={searchBox}
                    onChange={onSearchChange}
                  />
                </div>
              )}
              <div className="relative flex items-center ml-2 lg:ml-4">
                <button 
                  type="button" 
                  onClick={() => navigate('/posts')}
                  className="flex items-center justify-center w-12 h-12 text-base font-medium leading-normal text-center align-middle transition-colors duration-150 ease-in-out bg-transparent border border-solid shadow-none cursor-pointer rounded-2xl text-stone-500 border-stone-200 hover:bg-gray-300 active:bg-gray-300 focus:bg-gray-300"
                >
                  <img src={home} alt="home" className="w-6 h-6"/>
                </button>
              </div>
              <div className="relative flex items-center ml-2 lg:ml-4">
                <button 
                  type="button" 
                  onClick={() => navigate('/users')}
                  className="flex items-center justify-center w-12 h-12 text-base font-medium leading-normal text-center align-middle transition-colors duration-150 ease-in-out bg-transparent border border-solid shadow-none cursor-pointer rounded-2xl text-stone-500 border-stone-200 hover:bg-gray-300 active:bg-gray-300 focus:bg-gray-300">
                  <img src={usersimage} alt="users" className="w-6 h-6"/>
                </button>
              </div>
              <div className="relative flex items-center ml-2 lg:ml-4">
                <button 
                  type="button" 
                  onClick={() => navigate('/dashboard')}
                  className="flex items-center justify-center w-12 h-12 text-base font-medium leading-normal text-center align-middle transition-colors duration-150 ease-in-out bg-transparent border border-solid shadow-none cursor-pointer rounded-2xl text-stone-500 border-stone-200 hover:bg-gray-300 active:bg-gray-300 focus:bg-gray-300">
                  <img src={dashboard} alt="dashboard" className="w-6 h-6"/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
