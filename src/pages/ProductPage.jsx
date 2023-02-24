import { useParams } from "react-router-dom";
import Jenson from "../assets/components/products/Jenson";
import Deon from "../assets/components/products/Deon";
import Krisha from "../assets/components/products/Krisha";


const ProductPage = () => {
    
    const params = useParams()
    
    if(params.name === "Jenson"){
        return ( 
            <Jenson />
        )
    }else if(params.name === "Deon"){
        return(
            <Deon />
        )
    }else if(params.name === "Krisha"){
        return(
            <Krisha />
        )
    }
}

export default ProductPage;