import React from 'react'

const GifList = (props) => {
  console.log(props.gifs)
  return(
    <ul>
      {props.gifs.map((gif)=>{
        return (<li>{gif.embed_url}</li>)
      })}
    </ul>
  )
}

export default GifList
