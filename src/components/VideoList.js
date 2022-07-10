import React from 'react'
import VideoItem from './VideoItem';

function VideoList({ videos, setSelectedVideo }) {

  const renderedVideos = videos.map((video) => {
    return < VideoItem key={video.id.videoId} video={video} setSelectedVideo={setSelectedVideo}></VideoItem>
  });

  return (
    <div>{renderedVideos} </div>
  )
}

export default VideoList