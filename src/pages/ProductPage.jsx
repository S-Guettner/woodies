import { useParams } from "react-router-dom";
import Jenson from "../assets/components/products/Jenson";
import Deon from "../assets/components/products/Deon";
import Krisha from "../assets/components/products/Krisha";
import Footer from "../assets/components/footer/Footer";

const ProductPage = () => {
    
    const params = useParams()
    
    if(params.name === "Jenson"){
        return ( 
            <>
                <Jenson />
                <Footer />            
            </>
        )
    }else if(params.name === "Deon"){
        return (
            <>
                <Deon />
                <Footer />
            </>
        );
    }else if(params.name === "Krisha"){
        return(
            <>
                <Krisha />
                <Footer />
            </>
        )
    }
}

export default ProductPage;