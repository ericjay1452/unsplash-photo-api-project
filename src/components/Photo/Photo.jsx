import React from 'react'
import { FaInstagram, FaTwitter } from 'react-icons/fa';

const Photo = ({photo}) => {
    console.log({photo})
    // Destructuring of photo object
const {
    urls:{regular,thumb}, 
    alt_description,
    user:{name, bio, portfolio_url, profile_image:{medium}, social:{instagram_username, twitter_username}},
    likes} = photo;

  return (
    <div>
    <article className='photo'>
        <img src={regular} alt = {name} className="rounded"/>

          
          {/* user Profile detail*/}
       <div className='photo-info'>
          <div>
            <h4>{name}</h4>
            <p>likes {likes}</p>
          </div>

          <div className = "relative">
            <a href={portfolio_url}> 
             <img src = {medium} alt = {name} className="user-image rounded-full"/>
            </a>
            </div>
       </div>
    </article>

    <footer className='block relativ w-full overflow-hidden' style={{fontFamily : "sans-serif"}}>
        <p className='text-center p-1'>{bio.length > 100 ? bio.slice(0, 100) : bio}</p>
        <div className='flex justify-between items-center'>
            <div className='flex items-center'>
            <FaInstagram className='block' style={{marginBottom : "1.3em",  marginRight : "5px"}}/>
            <p> {instagram_username}</p>
            </div>
            
            <div className='flex items-center'>
            <FaTwitter className='block' style={{marginBottom : "1.3em", marginRight : "5px"}}/>
            <p> {twitter_username}</p>
            </div>
            
        </div>
       </footer>

    </div>
  )
}

export default Photo