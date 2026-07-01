import { useState } from "react";

function Navbar(){
  const [isLiked , setisLiked]=useState(true);

function toggleLike(){
  // let newVal =! isLiked;
  // console.log(newVal);
  setisLiked(!isLiked);
}

let likeStyle = {color : "red"}

return (
  <> 
  <p onClick={toggleLike} style={likeStyle}>{isLiked ? (<i className="fa-regular fa-heart"></i>) : (<i className="fa-solid fa-heart"></i>)}

     
  </p>
  </>
)
}

export default Navbar;