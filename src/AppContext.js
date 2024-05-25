import React, {createContext, useState, useEffect} from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage, setUsersPerPage] = useState(2);

    console.log('fromapiuser',users)


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

const value = {
    users,
    posts,
    comments,
    currentPage,
    setCurrentPage,
    usersPerPage,
    setUsersPerPage,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;

};

export { AppContext, AppProvider };