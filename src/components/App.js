import {useState} from "react"
import video from "../data/video.js";
import "../index.css";



function App() {
  // console.log("Here's your data:", video);

  // voting functionality
  const [upVote, setUpvote] = useState(video.upvotes);
  const [downVote, setDownvote] = useState(video.downvotes);

  const upVoteHandler = () => {
    setUpvote(upVote + 1);
  }
  const downVoteHandler = () => {
    setDownvote(downVote - 1);
  }

  //mounting/unmounting of comments functionality
  const [showComments, setShowComments] = useState(true);

  const handleClick = () => {
    setShowComments(!showComments);
  }

  const className = showComments ? "show" : "hide";


  // searchBar functionality
  const [search, setSearch] = useState(null);
  // console.log(search);


  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <h1>{video.title}</h1>
      <p>{video.views} views | Uploaded {video.createdAt}</p>

      <div className="video-votes">
      <button onClick={upVoteHandler}>{upVote} 👍 </button>
      <button onClick={downVoteHandler}>{downVote} 👎 </button>
      </div>
      <br />
      <button onClick={handleClick}>Hide Comments</button>
      <hr />

      
     


      <div className={className}>

      <form>
         <input style={{width:"250px"}}
         value={search}
         onChange={(e) => setSearch(e.target.value)}
         type="text" placeholder="Search comments by username.."></input>
      </form>

      <h2>{video.comments.length} Comments</h2>
      <div>

        { search === null ? video.comments.map((comment) => (
          <div key={comment.id}>
            <h3>{comment.user}</h3>
            <p>{comment.comment}</p>
          </div>)) 
          : 
          video.comments.filter((comment) => (
            comment.user.toLowerCase().includes(search.toLowerCase()))).map((comment) => (
               <div key={comment.id}>
            <h3>{comment.user}</h3>
            <p>{comment.comment}</p>
          </div>
          )
          )}
      </div>
      </div>
      
    </div>
  );
}

export default App;
