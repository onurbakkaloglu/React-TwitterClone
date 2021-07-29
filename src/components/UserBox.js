import React from 'react'

const UserBox = () => {
    return (
        <div className="flex justify-between items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-200">
            <img src="https://media-exp3.licdn.com/dms/image/C5603AQFu25h7pSmwLw/profile-displayphoto-shrink_800_800/0/1622726850563?e=1631750400&v=beta&t=nUrQEGkbbXqQUPmoiOcsOlWC_8FVBN2uGlFOWX0lWUk" 
            alt="Profile"
            className="w-11 h-11 rounded-full"/>
            <div className="flex flex-col">
                <span className="font-bold text-md text-black">
                    Onur Bakkaloğlu
                </span>
                <span className="text-sm text-gray-dark">
                    @onurbakkaloglu
                </span>
            </div>
            <div className="flex space-x-2">
                <div className="w-1 h-1 bg-gray-900 rounded-full" />
                <div className="w-1 h-1 bg-gray-900 rounded-full"/>
                <div className="w-1 h-1 bg-gray-900 rounded-full" />
            </div>
        </div>
    )
}

export default UserBox
