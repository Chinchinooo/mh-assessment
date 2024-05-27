import React, { useState, useEffect, useContext } from 'react';
import './Navigation.css'; // Import the CSS file for styling
import home from './home.png';
import dashboard from './dashboard.png'
import usersimage from './usersimage.png'
import { AppContext } from '../../AppContext';

const Navigation = () => {

  const { users, setFilteredUsers, filteredUsers } = useContext(AppContext)

  const [searchBox, setSearchBox] = useState('');

   useEffect(() => {
  if (searchBox.trim() === '') {
    setFilteredUsers(users);
  } else {
    const filteredCard = users.filter(user => {
      return user.name.toLocaleLowerCase().includes(searchBox.toLowerCase());
    });

    setFilteredUsers(filteredCard);
    console.log(filteredCard);

    if (filteredCard.length === 0) {
      console.log("No results found");
    }
  }
}, [searchBox, users]);


  const onSearchChange = (event) => {
    const searchInput = event.target.value;
    setSearchBox(searchInput);
  };

  return (
   <div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Loopple/loopple-public-assets@main/riva-dashboard-tailwind/riva-dashboard.css"/>
      <div class="flex flex-wrap mx-3 mb-2">
        <div class="px-3 mx-auto w-full bg-white rounded-xl">
            <div class="sm:flex items-stretch justify-between grow lg:mb-0  py-5 px-5">
          <div class="flex flex-col flex-wrap justify-center mb-5 mr-3 lg:mb-0">
          <span class="my-0 flex text-dark font-semibold text-[1.35rem]/[1.2] flex-col justify-center">
              Insta Linked
          </span>
          </div>
          <div class="flex items-center lg:shrink-0 lg:flex-nowrap">
          <div class="relative flex items-center lg:ml-4 sm:mr-0 mr-2">
              <span class="absolute ml-4 leading-none -translate-y-1/2 top-1/2 text-muted">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
              </svg>
              </span>
              <input 
                class="block w-full min-w-[70px] py-3 pl-12 pr-4 text-base font-medium leading-normal bg-white border border-solid outline-none appearance-none placeholder:text-secondary-dark peer text-stone-500 border-stone-200 bg-clip-padding rounded-2xl" 
                placeholder="Search..." 
                type="text"
                onChange={onSearchChange} /* supposedly is search but deal with the clear button first */
                />
          {/*     <span onClick="(() => { this.previousElementSibling.value=''})()" class="absolute right-0 left-auto mr-4 leading-none -translate-y-1/2 peer-placeholder-shown:hidden top-1/2 hover:text-primary text-muted">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
              </span> */}
          </div>
              <div class="relative flex items-center ml-2 lg:ml-4">
              <button 
                type="button" 
                class="flex items-center justify-center w-12 h-12 text-base font-medium leading-normal text-center align-middle transition-colors duration-150 ease-in-out bg-transparent border border-solid shadow-none cursor-pointer rounded-2xl text-stone-500 border-stone-200 hover:bg-gray-300 active:bg-gray-300 focus:bg-gray-300"
              >
                <img src={home} alt='home' class="w-6 h-6"/>
              </button>
          </div>
            <div class="relative flex items-center ml-2 lg:ml-4">
              <a href="javascript:void(0)" class="flex items-center justify-center w-12 h-12 text-base font-medium leading-normal text-center align-middle transition-colors duration-150 ease-in-out bg-transparent border border-solid shadow-none cursor-pointer rounded-2xl text-stone-500 border-stone-200 hover:bg-gray-300 active:bg-gray-300 focus:bg-gray-300">
              <img src={usersimage} alt='users' class="w-6 h-6"/>
              </a>
          </div>
          <div class="relative flex items-center ml-2 lg:ml-4">
              <a href="javascript:void(0)" class="flex items-center justify-center w-12 h-12 text-base font-medium leading-normal text-center align-middle transition-colors duration-150 ease-in-out bg-transparent border border-solid shadow-none cursor-pointer rounded-2xl text-stone-500 border-stone-200 hover:bg-gray-300 active:bg-gray-300 focus:bg-gray-300">
              <img src={dashboard} alt='dashboard' class="w-6 h-6"/>
              </a>
          </div>
          <div class="relative flex items-center ml-2 lg:ml-4">
              <a href="javascript:void(0)" class="flex items-center justify-center w-28 h-12 text-base font-semibold leading-normal text-center text-white align-middle transition-colors duration-150 ease-in-out shadow-none cursor-pointer rounded-2xl bg-primary hover:bg-primary-dark active:bg-primary-dark focus:bg-primary-dark ">
              <span class="text-[1.15rem]">Log out</span>
              </a>
          </div>
          </div>
      </div>
        </div>
      </div>
   </div>
  );
};

export default Navigation;


//userprofile
//user profile list
//Dashboard
//post listing page
    //sub//post listing page + comments
//searchbar