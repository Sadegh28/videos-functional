import React, { useEffect, useState } from 'react'
import YoutubeAPI from './api/YoutubeAPI';
import SearchBar from './components/SearchBar'
import VideoDetails from './components/VideoDetails';
import VideoList from './components/VideoList';

function App() {
  const [searchTerm, setSearchTerm] = useState('turkey');
  const [videos, setVidoes] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(videos[0])


  useEffect(() => {
    getVideos(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
  }, [selectedVideo]);

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  const getVideos = async (term) => {
    const response = await YoutubeAPI.get('/search', { params: { q: term } })
    setVidoes(response.data.items)
  }



  return (
    <div className='container'>
      <div className=" mt-2 pt-2 pb-2 border-bottom">
        <SearchBar label='Search a Video' setSearchTerm={setSearchTerm} />
      </div>
      <div className="row">
        <div className="col-8">
          <VideoDetails video={selectedVideo} />
        </div>
        <div className="col-4">
          <VideoList videos={videos} setSelectedVideo={setSelectedVideo} />
        </div>


      </div>



    </div>
  )
}

export default App