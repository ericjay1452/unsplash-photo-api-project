import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import Photo from './components/Photo/Photo';

const mainUriSearch = `https://api.unsplash.com/photos/`;
const searchUri = `https://api.unsplash.com/search/photos`;
const clientId = `?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`;

function App() {
	const [ photos, setPhotos ] = useState([]);
	const [ loading, setLoading ] = useState(false);
  const [page, setPage ] = useState(1)
  const [searchQuery, setSearchQuery ] = useState("");


	const fetchUnsplashImage = async () => {
		setLoading(true);
		let Uri;
    const UriPage = `&page=${page}`
    const UriSearchquery = `&query=${searchQuery}`
		Uri = `${mainUriSearch}${clientId}${UriPage}`;


    // Created this conditional rendering of image because,
    // 1.The search uri is different from the normal uri
    // 2.the initial search does not require search term
    // 3.if we are on search term, dont render the first uri, instead, render uri with search

    if(UriSearchquery) {
      Uri = `${searchUri}${clientId}${UriPage}${UriSearchquery}`
    } else {
      Uri = `${mainUriSearch}${clientId}${UriPage}`
    }

		try {
			const response = await fetch(Uri);
      const data = await response.json()
      // passing images to photo state at the start
      console.log(data)
			// setPhotos((prevImage) =>{
      //   return [...prevImage,...data]
      // });
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.log(error);
      setSearchQuery("")
		}
	};


	const handleSubmit = (e) => {
		e.preventDefault();
		fetchUnsplashImage()
	};

	useEffect(() => {
		fetchUnsplashImage();
	}, [page]);

  // UseEffect for scroll event
  useEffect (() =>{
    const scrollEvent = window.addEventListener("scroll",() =>{

      // checking if we are at the bottom of the page and if loading is false, we fetch image data
     if( !loading && window.innerHeight + window.scrollY >= document.body.scrollHeight - 15) {

      // increase setPage by 1 when on meeting this condition
      setPage( (prevPage) =>{
        return prevPage + 1;
      })
     }
    });

    return () =>window.removeEventListener("scroll",scrollEvent)
  },[])

	return (
		<main className="block w-full relative bg-slate-300">
			<section className="w-6/12 m-auto p-3 block relative h-full" style={{ marginBottom: '2em' }}>
				<form className="w-full relative">
					<div className="relative block">
						<label htmlFor="search" />
						<input
							name="search"
							id="search"
							placeholder="Search ..."
							value={searchQuery}
							onChange={(e)=>setSearchQuery(e.target.value)}
							className="relative py-2 px-2 rounded-full border-0 text-center w-full hover:border-0 focus:border-0"
						/>

						<button type="submit" aria-label="submit button" className="" onClick={handleSubmit}>
							<FaSearch className="absolute right-3 top-3 text-orange-400" />
						</button>
					</div>
				</form>
			</section>

			<section style={{ width: '95%' }} className="m-auto">
				<div className="gridLayed">
					{photos.map((photo, index) => {
						return <Photo key={index} photo={photo} />;
					})}
				</div>
				{loading && <div className='loading' />}
			</section>
		</main>
	);
}

export default App;
