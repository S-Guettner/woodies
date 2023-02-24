import { Link } from "react-router-dom";

const Products = () => {
    return (
        <div>
            <h1>PRODUCTS</h1>

            <h1>Jenson</h1>
            <Link to='/products/Jenson'>Shop now</Link>
            <h1>Deon</h1>
            <Link to='/products/Deon'>Shop now</Link>
            <h1>Krisha</h1>
            <Link to='/products/Krisha'>Shop now</Link>
        </div>
    );
}
 
export default Products;