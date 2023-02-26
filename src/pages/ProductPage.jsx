import { useParams } from "react-router-dom";
import Jenson from "../assets/components/products/Jenson";
import Deon from "../assets/components/products/Deon";
import Krisha from "../assets/components/products/Krisha";
import Footer from "../assets/components/footer/Footer";
import PageNameBorder from "../assets/components/pageNameBorder/PageNameBorder";

const ProductPage = () => {
    
    const params = useParams()
    
    if(params.name === "Jenson"){
        return (
            <>
                <PageNameBorder 
                pageText={"Jenson"}
                pageTitle={"PRODUCTS"}
                />
                <Jenson />
                <Footer />
            </>
        );
    }else if(params.name === "Deon"){
        return (
            <>
                <PageNameBorder
                pageText={"Deon"} 
                pageTitle={"PRODUCTS"} />
                <Deon />
                <Footer />
            </>
        );
    }else if(params.name === "Krisha"){
        return (
            <>
                <PageNameBorder
                pageText={"Krisha"}
                pageTitle={"PRODUCTS"} />
                <Krisha />
                <Footer />
            </>
        );
    }
}

export default ProductPage;