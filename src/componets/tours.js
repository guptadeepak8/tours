import Tour from "./tour" 

export default function Tours({tours,removeTour}){
  return(
    <section>
      <div className="title">
        <h2>OUR TOURS</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour)=>{
          return (
           <Tour key={tour.id} {...tour} removeTour={removeTour}/>
          )
        })}
      </div>
    </section>
  )
}