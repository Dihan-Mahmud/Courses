// import React from "react";
import {FcLike, FcLikePlaceholder} from "react-icons/fc"
import { toast } from "react-toastify";


function Card({info,setLikedCourses,likedCourses,saved,setSaved}) {

    let savedArr = saved

    const des = info.description;
    const descriptions = `${des.substring(0,80)}...`

    function clickHandler() {
        if(likedCourses.includes(info.id)){
            setLikedCourses((prev) => prev.filter((infoid) => (infoid !== info.id)));
            toast.warning("Like Removed.");
            // setSaved((info)=>([...savedArr , savedArr.splice(savedArr.indexOf(info),1)]))
            setSaved((info)=> savedArr.splice(savedArr.indexOf(info),1))
            console.log(setSaved((info)=> savedArr.splice(savedArr.indexOf(info),1)));
        }   
        else{
            if(likedCourses.length === 0){
                setLikedCourses([info.id])
                setSaved((pre) => [...pre, info])
                // savedArr.push(...savedArr,info)
                // console.log(savedArr);
            }
            else{
                setLikedCourses((prev) => [...prev, info.id])
                setSaved((pre) => [...pre, info])
                // savedArr.push(...savedArr,info)
            }
            toast.success("Liked Successfully.")
        }
        console.log(savedArr);
    }


    
    
    return(
        <div className="card">
            <div className="up">
                <img src={info.image.url} alt={info.image.alt} />
                <button onClick={clickHandler} className="love-btn">{
                    likedCourses.includes(info.id) ? (<FcLike></FcLike>) : (<FcLikePlaceholder></FcLikePlaceholder>)
                }</button>
            </div>
            <div className="down">
                <h3>{info.title}</h3>
                <p>{descriptions}</p>
            </div>
        </div>
    )
}

export default Card;