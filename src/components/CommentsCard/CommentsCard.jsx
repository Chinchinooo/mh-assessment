import React from "react";

const CommentsCard = ({comment}) => {
     if (!comment) {
    return <p>Loading...</p>;
    }

    return(
         <div>
<div key={comment.id}>
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
                                <img className="inline-block h-10 w-10 rounded-full" src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />
                              </div>
                              <div className="ml-3">
                                <p className="text-lg leading-6 font-medium text-black">
                                  {comment.name}
                                </p>
                              </div>
                            </div>
                          </a>
                        </div>

                        <div className="pl-16">
                          <p className="text-sm text-justify width-auto font-medium text-gray-600 flex-shrink pb-2">
                            {comment.email}
                          </p>
                          <p className="text-justify width-auto font-medium text-gray-600 flex-shrink">
                            {comment.body}
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div> 
        </div>
    )
}

export default CommentsCard;

 