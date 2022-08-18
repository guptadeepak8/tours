import React,{useState,useEffect} from "react";
import Tours from "./componets/tours";
import Loading from "./componets/loading";
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading,setloading]=useState(true)
  const [tours,setTours]=useState([])

 const removeTour=(id)=>{
    const newtour=tours.filter((tour)=>tour.id !==  id)
    setTours(newtour)
 } 

 const fetchData =async()=>{
  setloading(true)
  try {
      const response =await fetch(url)
      const tours =await response.json()
      setTours(tours)
      setloading(false)
  } catch (error) {
      setloading(false)  
      console.log(error); 
   } 
 }
   useEffect(()=>{
    fetchData();
   }, [])

   if(loading){
    return(
      <main>
        <Loading />
      </main>
    )
  }

  if(tours.length===0){
    return (
      <main>
        <div className="title">
          <h2>GOAN JA BSDK</h2>
          <button className="btn" onClick={()=>fetchData()}>REFRESH</button>
        </div>
      </main>
    )
  }
   
  return (
    <main >
       <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );
}

export default App;
