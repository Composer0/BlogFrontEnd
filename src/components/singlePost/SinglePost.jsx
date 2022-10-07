import './singlePost.css'

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img 
        src="https://wallpaperaccess.com/full/5287561.jpg" 
        alt=""
        className="singlePostImg"
        />
        <h1 className="singlePostTitle">
        Break It To Me (Sam de Jong Remix)
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>Orion Palmer</b></span>
            <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDescription">
        Even being a remix, the song is included as an official Muse track, in the Super Deluxe version.
            The remix is, as opposed to the RnB nature of the original, made as a Trap song and more prominently features strings and the Kitara bass as lead instruments instead of the guitar.
        </p>
      </div>
    </div>
  )
}
