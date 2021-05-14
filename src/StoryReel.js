import React from 'react'
import './StoryReel.css'
import Story from './Story'

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story 
                // image='https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/How-Often-to-Post-to-Facebook-Stories.png' 
                image='https://oyster.ignimgs.com/mediawiki/apis.ign.com/shin-megami-tensei-persona-5/0/05/Screenshot_%28299%29.png?width=1280' 
                // profileSrc='https://avatars2.githubusercontent.com/u/24712956?s=400&u=b715217e605ae1b748fc2d4157a842e57e427ad44&v=4'
                profileSrc='https://i.pinimg.com/474x/18/05/bf/1805bf115bf88fab41d6dc186c6dc4db.jpg'
                title='Joker'
            />
            <Story 
                image='https://oyster.ignimgs.com/mediawiki/apis.ign.com/shin-megami-tensei-persona-5/2/2d/Screenshot_%28323%29.png' 
                profileSrc='https://i.pinimg.com/736x/18/1a/15/181a15dda9a28bc998444955b8f82ee1.jpg'
                title='Ryuji'
            />
            <Story 
                image='http://oyster.ignimgs.com/mediawiki/apis.ign.com/shin-megami-tensei-persona-5/d/d3/Screenshot_%28340%29.png' 
                profileSrc='https://i.pinimg.com/originals/6a/02/9e/6a029eaa05c9e12f97153886c2635208.jpg'
                title='Ann'
            />
            <Story 
                image='https://oyster.ignimgs.com/mediawiki/apis.ign.com/shin-megami-tensei-persona-5/a/ac/Screenshot_%28374%29.png' 
                profileSrc='http://getdrawings.com/free-icon/persona-5-icon-53.jpg'
                title='Yusuke'
            />
            <Story 
                image='https://oyster.ignimgs.com/mediawiki/apis.ign.com/shin-megami-tensei-persona-5/d/da/Screenshot_%28413%29.png?width=640' 
                profileSrc='https://i.pinimg.com/564x/e5/ae/c0/e5aec0caa6849dd4c1d69f3b894a8a21.jpg'
                title='Makoto'
            />
        </div>
    )
}

export default StoryReel
