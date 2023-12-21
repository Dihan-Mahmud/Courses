import './App.css'
import Nav from './components/Nav'
import Courses from './components/Courses'
import {data, apiUrl} from './data'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Loading from './components/Loading'

function App() {
  const [saved,setSaved] = useState([]);
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState(null);
  const [category, setCategory] = useState("All");

  const fetchData = async() => {
    setLoading(true)
    try {
      const res = await fetch(apiUrl);
      const apiData = await res.json();
      setCourses(apiData.data)
      // console.log(apiData.data);
      // console.log(apiData.data[category]);
    } catch (error) {
      toast.error("Something went wrong.")
    }
    setLoading(false)
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div className="container">
      <h1>Courses</h1>
      <Nav data={data} category={category} setCategory={setCategory} saved={saved} setSaved={setSaved}></Nav>
      {loading ? (<Loading></Loading>) : (<Courses courses={courses} category={category} saved={saved} setSaved={setSaved}></Courses>)}
      
    </div>
  )
}

export default App
