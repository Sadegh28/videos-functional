import React from 'react'

function VideoDetails({ video }) {

  if (video) {
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}? &autoplay=1`;
    return (
      <div>
        <div className='ratio ratio-16x9'>
          <iframe src={videoSrc} title="Youtube Video Player" className=''></iframe>
        </div>
        <div className='w-100 mt-3 border p-3'>
          <h6>{video.snippet.title}</h6>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    )
  }

}

export default VideoDetails