import React, { useState, useEffect } from 'react';
import './App.css';
import Profile from './components/Profile/Profile.jsx'


function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Profile user={users[0]}/>
    </div>
  );
}

export default App;


//profile show the info
// fetch the info from API
// setInitialState - first profile