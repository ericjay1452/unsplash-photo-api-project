import React from 'react'

const Photo = ({photo}) => {
    console.log({photo})
    // Destructuring of photo object
const {
    urls:{regular,thumb}, 
    alt_description,
    user:{name, bio, portfolio_url, profile_image:{medium}, social:{instagram_username, twitter_username}},
    likes} = photo;

  return (
    <article>
       <main>
        <img src={regular} alt = {name}/>
       </main>
          
          {/* user Profile detail*/}
       <div className=''>
          
          <div>
            <h4>{name}</h4>
            <p>likes {likes}</p>
          </div>

          <footer>
            <a href={portfolio_url}> 
             <img src = {medium} alt = {name} />
            </a>
          </footer>
       </div>
    </article>
  )
}

export default Photo