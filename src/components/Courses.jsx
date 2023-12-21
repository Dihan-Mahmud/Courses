import { useState } from "react";
import Card from "./Card";


function Courses({courses,category,saved,setSaved}) {

    const [likedCourses, setLikedCourses] = useState([]);
    
    let allCourses = [];
    const getCourses = () => {
        if(category === "All"){
            Object.values(courses).forEach((course) => {
                course.forEach((item) => {
                    allCourses.push(item)
                })
            })
            // console.log(allCourses);
            return allCourses
        }
        else{
            // console.log(allCourses);
            // console.log(courses[category]);
            return (courses[category])
        }
    } 

    
    return(
        <div className="courses">
            {getCourses().map((element) => {
                return <Card info={element} key={element.id} setLikedCourses={setLikedCourses} likedCourses={likedCourses} saved={saved} setSaved={setSaved}></Card>
            })}
        </div>
    )
}

export default Courses;