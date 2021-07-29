import React, {useState, useEffect} from 'react';
import Divider from '../components/Divider';
import TweetBox from '../components/TweetBox';
import { PopulerIcon } from '../icons/Icon';
import db from '../firebase';
import FeedList from '../components/FeedList';
const Content = () => {
const[tweets, setTweets] = useState([]);
    useEffect(()=>{
db.collection('feed')
.orderBy('timestamp', 'desc')
.onSnapshot(snapshot => setTweets(snapshot.docs.map(doc => doc.data())))
    }, [] )

    console.log(tweets);
    return (
        <main className="flex-1 flex flex-col border-r border-l border-gray-extralight">
            <header className="sticky top-0 z-10 flex justify-between items-center p-4 border-b border-gray-extralight bg-white">
                <span className="font-bold text-xl text-gray-900">Anasayfa</span>
                <PopulerIcon className="w-6 h-6 text-primary-base" />
            </header>
            <div className="flex px-4 py-3 space-x-4">
            <img src="https://media-exp3.licdn.com/dms/image/C5603AQFu25h7pSmwLw/profile-displayphoto-shrink_800_800/0/1622726850563?e=1631750400&v=beta&t=nUrQEGkbbXqQUPmoiOcsOlWC_8FVBN2uGlFOWX0lWUk" 
            alt="Profile"
            className="w-11 h-11 rounded-full"/>
               <TweetBox />
            </div>
            <Divider />


            <FeedList tweets={tweets} />
        </main>
    )
}

export default Content
