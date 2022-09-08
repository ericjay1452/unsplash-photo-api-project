import React, {useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa"
import { Photo } from "./components/Photo/Photo"

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
      const data = await response.json()
      console.log(data)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect ( () => {
    fetchUnsplashImage()
  }, [])

	return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export default App;
