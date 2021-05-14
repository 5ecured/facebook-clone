import React, { useState, useEffect } from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import db from './firebase'

function Feed() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ))
    }, [])


    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />

            {posts.map(post => (
                <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))}
            {/* <Post
                profilePic='https://i.pinimg.com/474x/18/05/bf/1805bf115bf88fab41d6dc186c6dc4db.jpg'
                message='wow this works!'
                timestamp='timestamp here'
                username='joker'
                image='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/41/69/39/pool.jpg?w=900&h=-1&s=1'
            /> */}
        </div>
    )
}

export default Feed
