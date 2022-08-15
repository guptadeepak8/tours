import React,{useState} from "react"

export default function Tour({id,image,name,info,price,removeTour}){
 const [readmore,setReadmore]=useState(false)
  return(
    <article className="single-tour">
    <img src={image} alt="" />
    <footer>
      <div className="tour-info">
      <h4>{name}</h4>
      <h4 className="tour-price">${price}</h4>
      </div>
    <p>{ readmore?info:`${info.substring(0,200)}...`}
     <button onClick={()=>setReadmore(!readmore)}>{readmore?`show less`:`read more`}</button>
    </p>
   <button onClick={()=>removeTour(id)} className="delete-btn">not intersted</button>
    </footer>
    
    </article>
  )
}