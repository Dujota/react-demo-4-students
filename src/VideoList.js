import React from 'react'
/**
 * @prop videos (Required) type: [array]
 */


const VideoList = ({videos})=>{

  return <div>Videos {

    // loop thru the props object thats an array
    videos.map(video => <div>
    Video ID: {video.id}

    <ul>{video.snippet.title}</ul>
  </div>)



}
  </div>

}


export default VideoList;