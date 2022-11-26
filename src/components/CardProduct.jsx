function CardProduct(props){

    return(
    <div > 
        <img src={props.image} alt={props.title}/>
        <br/>{props.price}
        <br/> <button>add to cart</button>
        <br/>{props.title}

    </div>
    )
}

export default CardProduct