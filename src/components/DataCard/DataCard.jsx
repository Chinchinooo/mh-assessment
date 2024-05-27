import React from "react";

const DataCard = ({averageComments, averageCommentsPerUser}) => {
    return(
        <div className="flex justify-center items-center flex-wrap-nowrap w-full">
              <section className="w-full px-2 pt-2" style={{ maxWidth: '200px' }}>
                <div className="bg-white shadow-md mb-2 rounded-xl p-4 hover:bg-slate-100 transition duration-350 ease-in-out h-24 flex flex-col justify-between items-center">
                    <p className="text-xs text-center leading-6 font-medium text-gray-800">
                        Average Comment Per Post
                    </p>
                    <p className="text-center text-4xl leading-6 font-medium text-gray-800">
                        {averageComments}
                    </p>
                </div>
              </section>
              <section className="w-full p-2" style={{ maxWidth: '200px' }}>
                <div className="bg-white shadow-md mb-2 rounded-xl p-4 hover:bg-slate-100 transition duration-350 ease-in-out h-24 flex flex-col justify-between items-center">
                    <p className="text-xs text-center leading-6 font-medium text-gray-800">
                        Average Comment Per User / Post
                    </p>
                    <p className="text-center text-4xl leading-6 font-medium text-gray-800">
                        {averageCommentsPerUser}
                    </p>
                </div>
              </section>
          </div> 
    )    
};

export default DataCard;

