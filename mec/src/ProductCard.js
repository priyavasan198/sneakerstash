function ProductCard(props) {

  return (
    <div style={{ border: "1px solid black",
        margin: "10px",
        padding: "10px",
        width: "200px",              
        display: "flex",
        flexDirection: "column",     
        alignItems: "center",
        backgroundColor: "#f5f5f5"     
         }}>
      <img 
        src={props.product.thumbnail} 
        width="100" 
        alt="product"
      />
      

      <h3>{props.product.title}</h3><br/>
      <p>Price: ${props.product.price}</p><br/>
      <p>Rating: {props.product.rating}</p><br/>
      <p>{props.product.availabilityStatus}</p><br/>

      <button style={{backgroundColor:"skyblue"}}>Add to Cart</button><br/>

    </div>
  );
}

export default ProductCard;