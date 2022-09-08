import React, {useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa"
import Photo from "./components/Photo/Photo"

const mainUriSearch = `https://api.unsplash.com/photos/`;
const searchUri = `https://api.unsplash.com/search/photos`;
const clientId =`?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`

function App() {

  const [photos, setPhotos ] = useState([])
  const [loading, setLoading ] = useState(false)
    
  const fetchUnsplashImage = async () => {
    setLoading(true)
    let Uri;
    Uri = `${mainUriSearch}${clientId}`
       
    try {
      const response = await fetch(Uri);
     setPhotos(await response.json())
     setLoading(false)
      } 
      catch (error) {
      setLoading(false)
      console.log(error)
    }

  }

  const handleChange = (e) => {

  }

  const handleSubmit = (e) => {
   e.preventDefault()
   console.log("Hello word")
  }

  useEffect ( () => {
    fetchUnsplashImage()
  }, [])

	return (
    <main className="block w-full relative bg-slate-300">

      <section className="w-6/12 m-auto p-3 block relative h-full">
       <form className="w-full relative">
          <div className="relative block">
           <label htmlFor="search"></label>
           <input name="search"
            id="search" 
            placeholder="Search ..." 
            value={""} 
            onChange={handleChange}
            className = "relative py-2 px-2 rounded-full border-0 text-center w-full hover:border-0 focus:border-0"/>

              <button type="submit" aria-label="submit button" className="" onClick={handleSubmit}>
                 <FaSearch className="absolute right-3 top-3 text-orange-400"/> 
                 </button>
                 </div>
       </form>
      </section>

      <section>
          <div>
            {photos.map((photo) =>{
              const {id} = photo
              return (
                <Photo key={id} photo={photo}/>
              )
            })}
          </div>
      </section>
    </main>
  );
}

export default App;
