import React from 'react'

function VideoItem({ video, setSelectedVideo }) {
  return (
    <div className='d-flex mt-2 pb-1 border-bottom' onClick={(e) => setSelectedVideo(video)}>
      <img src={video.snippet.thumbnails.medium.url} alt="" style={{ width: "180px" }} />
      <h6 className='align-self-center p-2'> {video.snippet.title} </h6>
    </div>
  )
}

export default VideoItem