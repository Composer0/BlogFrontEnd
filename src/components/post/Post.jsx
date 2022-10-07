import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img 
      className="postImg"
        src="https://wallpaperaccess.com/full/5287561.jpg"
        alt="post img"
      />
      <div className="postInfo">
        <div className="postCategories">
            <span className="postCategory">Music</span>
            <span className="postCategory">Life</span>
        </div>
            <span className="postTitle">Break It To Me (Sam de Jong Remix)
            </span>
            <hr/>
            <span className="postDate">1 Hour Ago</span>
      </div>
        <p className="postDescription">
            Even being a remix, the song is included as an official Muse track, in the Super Deluxe version.
            The remix is, as opposed to the RnB nature of the original, made as a Trap song and more prominently features strings and the Kitara bass as lead instruments instead of the guitar.
        </p>
    </div>
  )
}
