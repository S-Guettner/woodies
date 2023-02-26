import { useParams } from "react-router-dom";
import Jenson from "../assets/components/products/Jenson";
import Deon from "../assets/components/products/Deon";
import Krisha from "../assets/components/products/Krisha";
import NavBar from "../assets/components/navbar/NavBar";
import PageNameBorder from "../assets/components/pageNameBorder/PageNameBorder";
import Footer from "../assets/components/footer/Footer";

const ProductPage = () => {
    
    const params = useParams()
    
    if(params.name === "Jenson"){
        return (
            <div className="flex flex-col justify-between h-screen">
                <NavBar />
                <PageNameBorder pageText={"Jenson"} pageTitle={"PRODUCTS"} />
                <Jenson />
                <Footer />
            </div>
        );
    }else if(params.name === "Deon"){
        return (
            <div className="flex flex-col justify-between h-screen">
                <NavBar />
                <PageNameBorder pageText={"Deon"} pageTitle={"PRODUCTS"} />
                <Deon />
                <Footer />
            </div>
        );
    }else if(params.name === "Krisha"){
        return (
            <div className="flex flex-col justify-between h-screen">
                <NavBar />
                <PageNameBorder pageText={"Krisha"} pageTitle={"PRODUCTS"} />
                <Krisha />
                <Footer />
            </div>
        );
    }
}

export default ProductPage;