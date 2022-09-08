import React, {useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa"
import { Photo } from "./components/Photo/Photo"

const mainUriSearch = `https://api.unsplash.com/photos/`
const searchUri = `https://api.unsplash.com/search/photos`

function App() {

  const [photos, setPhotos ] = useState([])
  const [loading, setLoading ] = useState(false)
    
  const fetchUnsplashImage = async () => {
    setLoading(true)
    let Uri;
    Uri = `${mainUriSearch}?client_id=Ij9mh00Zxa0lMx_h9eNf3ltdVO2m0CYpxYfilNT0vCA`
       
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
