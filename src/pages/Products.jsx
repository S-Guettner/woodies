import { Link } from "react-router-dom";
import Footer from "../assets/components/footer/Footer"
import PageNameBorder from "../assets/components/pageNameBorder/PageNameBorder";

const Products = () => {
    return (
        <div>
            <PageNameBorder 
            pageText={"What we have"}
            pageTitle={"PRODUCTS"}
            />
            <h1>Jenson</h1>
            <Link to='/products/Jenson'>Shop now</Link>
            <h1>Deon</h1>
            <Link to='/products/Deon'>Shop now</Link>
            <h1>Krisha</h1>
            <Link to='/products/Krisha'>Shop now</Link>
            <Footer />
        </div>
    );
}
 
export default Products;