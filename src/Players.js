function Players ({onDel, id, image}) {
    return(
     <div className="names">
        <button onClick={()=>onDel(id)}>remove</button>
        <img src={image} alt=""></img>
     </div>
    )
    
}

export default Players