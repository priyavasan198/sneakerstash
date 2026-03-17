import ProductCard from "./ProductCard";

function ProductList(props) {

  return (
    <div style={{
        display: "flex",     
             }}>
      {props.data.map(function(item) {
        return (
          <ProductCard key={item.id} product={item} />
        );
      })}
    </div>
  );
}

export default ProductList;