import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';

const ProfilePage = () => {
    const { users } = useContext(AppContext);

    if (!users.length) {
    return <p>Loading...</p>;
    }

    const firstUser = users[0];

    return(
        <div>
            <html>
                <head>
                    <link rel="stylesheet" href="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/css/main.ad49aa9b.css" />
                </head>
                <body >
                    <div class="flex flex-col justify-center items-center h-[85vh]">
                        <div class="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3">
                            <div class="mt-2 mb-8 w-full">
                                <h4 class="px-2 text-xl font-bold text-navy-700 dark:text-white">
                                {firstUser.name}
                                </h4>
                                <p class="mt-2 px-2 text-base text-gray-600">Company : {firstUser.company.name}, <br></br> {firstUser.company.catchPhrase}, <br></br> {firstUser.company.bs}
                                </p>
                                <p class="mt-2 px-2 text-base text-gray-600">
                                Address : {firstUser.address.street}, {firstUser.address.suite}, {firstUser.address.city}, {firstUser.address.zipcode}, geo: lat{firstUser.address.geo.lat}, long{firstUser.address.geo.lng}</p>
                               
                                        </div> 
                            <div class="grid grid-cols-2 gap-4 px-2 w-full">
                                <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                                <p class="text-sm text-gray-600">Username</p>
                                <p class="text-base font-medium text-navy-700 dark:text-white">
                                    {firstUser.username}
                                </p>
                                </div>

                                <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                                <p class="text-sm text-gray-600">Email</p>
                                <p class="text-base font-medium text-navy-700 dark:text-white">
                                    {firstUser.email}
                                </p>
                                </div>
                                <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                                <p class="text-sm text-gray-600">Phone</p>
                                <p class="text-base font-medium text-navy-700 dark:text-white">
                                    {firstUser.phone}
                                </p>
                                </div>

                                <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                                <p class="text-sm text-gray-600">Website</p>
                                <p class="text-base font-medium text-navy-700 dark:text-white">
                                    {firstUser.website}
                                </p>
                                </div>

                                <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                                <p class="text-sm text-gray-600">Company</p>
                                <p class="text-base font-medium text-navy-700 dark:text-white">
                                    {firstUser.company.name}
                                </p>
                                </div>

                                <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                                <p class="text-sm text-gray-600">Birthday</p>
                                <p class="text-base font-medium text-navy-700 dark:text-white">
                                    20 July 1986
                                </p>
                                </div>
                            </div>
                        </div>  
                    </div>
                </body>
            </html>
        </div>
    )
}

export default ProfilePage;