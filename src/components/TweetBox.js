import React, {useState} from 'react'
import { EmojiIcon, GIFIcon, ImageIcon, PollIcon } from '../icons/Icon'
import db from '../firebase'
import firebase from 'firebase'
const TweetBox = () => {
    const [content, setContent] = useState('')

    const sendTweet = () => {
        if(content !== ''){
            db.collection('feed').add({
                displayName: "Onur Bakkaloğlu",
                username: "onurbakkaloglu",
                content,
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                image:"",
                avatar: "https://media-exp3.licdn.com/dms/image/C5603AQFu25h7pSmwLw/profile-displayphoto-shrink_800_800/0/1622726850563?e=1631750400&v=beta&t=nUrQEGkbbXqQUPmoiOcsOlWC_8FVBN2uGlFOWX0lWUk"
            })

            setContent("");
        }
    }
    return (
        <div className="flex flex-col flex-1 mt-2 px-2">
           <textarea className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none"
            placeholder="Neler Oluyor?"
            onChange={(e) => setContent(e.target.value)}
            value={content}/>
           <div className="flex items-center">
               
               <div className="flex -ml-3">
                   <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                   <ImageIcon className="w-6 h-6 text-primary-base"/>
                   </div>
                   <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                   <GIFIcon className="w-6 h-6 text-primary-base"/>
                   </div>
                   <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                   <PollIcon className="w-6 h-6 text-primary-base"/>
                   </div>
                   <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                   <EmojiIcon className="w-6 h-6 text-primary-base"/>
                   </div>
               </div>
               
               <button className="bg-primary-base text-white rounded-full px-4 py-2"
               onClick={sendTweet}>Tweet</button>
           </div>
        </div>
    )
}

export default TweetBox
