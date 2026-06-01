import { useState } from "react"
export default function LikeButton(){
    let [isLiked , setisLiked] = useState(false)
    // function clicked(){
    //     console.log("LIKED")
    // }
    function toggleLike(){
        setisLiked(!isLiked)
        // let newVal = !isLiked
        // console.log("Toggle")
    }
    return(
        <div>
            <p onClick={toggleLike}>
                {
                    isLiked ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>
                }
                
            </p>
        </div>
    )
}