import React, { useState, useEffect } from 'react';
import './App.css';
import Profile from './components/Profile/Profile.jsx'
import ProfileList from './components/ProfileList/ProfileList.jsx';
import Pagination from './components/Pagination/Pagination.jsx';


function App() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(2);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    };
    fetchData();
  }, []);

  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;
  const currentUsers = users.slice(firstUserIndex, lastUserIndex);


  return (
    <div className="App">
{/*       <Profile user={users[0]}/> */}
      <ProfileList currentUsers={currentUsers}/>
      <Pagination
        totalUsers={users.length}
        userPerPage={usersPerPage}
        setCurrentPage={setCurrentPage} 
      />
    </div>
  );
}

export default App;


//profile show the info
// fetch the info from API
// setInitialState - first profile