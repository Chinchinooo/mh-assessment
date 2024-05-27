import React, { useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import CommentsList from '../components/CommentsList/CommentList';
import { AppContext } from '../AppContext';

const PostWithComments = () => {
  const { users } = useContext(AppContext);
  const { id } = useParams();
  const [selectedPost, setSelectedPost] = useState([]);
  const [selectedComment, setSelectedComment] = useState([]);

  const fetchSelectedPost = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`);
      const data = await response.json();
      setSelectedPost(data[0]);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const fetchSelectedComment = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
      const data = await response.json();
      setSelectedComment(data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  useEffect(() => {
    fetchSelectedPost();
    fetchSelectedComment();
  }, [id]);

  const getUser = (post) => {
    return users.find((user) => user.id === post.userId);
  };

  const user = selectedPost ? getUser(selectedPost) : null;

  return (
    <div>
      <div key={selectedPost.id}>
        <div className="mx-3 flex justify-center items-center">
          <section className="w-full" style={{ maxWidth: '1000px' }}>
            <div className="bg-white shadow-md mb-2 rounded-xl p-4 hover:bg-slate-100 transition duration-350 ease-in-out">
              <div className="flex-none lg:flex">
                <ul className="list-none">
                  <li className="list-none">
                    <div className="flex flex-shrink-0 p-4 pb-0">
                      <a href="#" className="flex-shrink-0 group block">
                        <div className="flex items-center">
                          <div>
                            <img className="inline-block h-10 w-10 rounded-full shadow-lg" src={user ? `https://robohash.org/${user.name}` : 'https://robohash.org/unknownuser'} alt="" />
                          </div>
                          <div className="ml-3">
                            <p className="text-lg leading-6 font-medium text-black">
                              {user ? user.name : 'Unknown User'}
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div className="pl-16">
                      <p className="text-2xl text-justify width-auto font-medium text-gray-800 flex-shrink pb-2">
                        {selectedPost.title}
                      </p>
                      <p className="text-justify width-auto font-medium text-gray-600 flex-shrink">
                        {selectedPost.body}
                      </p>
                      <div class="flex items-center py-4">
                        <div class="flex-1 text-xs text-gray-500 hover:text-blue-400 transition duration-350 ease-in-out">
                          <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2">
                            <g>
                              <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
      <CommentsList selectedComment={selectedComment} />
    </div>
  );
};
export default PostWithComments;
