import { Link } from "react-router-dom";
import Footer from "../assets/components/footer/Footer"
import PageNameBorder from "../assets/components/pageNameBorder/PageNameBorder";
import NavBar from "../assets/components/navbar/NavBar"


const Products = () => {
    return (
        <div className="flex flex-col justify-between h-screen">
            <div>
                <NavBar />
                <PageNameBorder
                    pageText={"What we have"}
                    pageTitle={"PRODUCTS"}
                />
            </div>
            <main className="flex justify-around flex-wrap h-[25rem] px-36">
                <div className="pb-6 flex justify-center bg-center w-1/3 bg-no-repeat bg-[url('https://ik.imagekit.io/6sicju8qu/Tisch.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677445729799')]">
                    <h1 className="pt-4 pr-24 font-bold text-lg">Jenson</h1>
                    <Link
                        className="p-2 bg-[#DAA520] mt-auto text-white rounded-md"
                        to="/products/jenson"
                    >
                        Shop now
                    </Link>
                </div>
                <div className="pb-6 flex justify-center bg-center w-1/3  bg-no-repeat bg-[url('https://ik.imagekit.io/6sicju8qu/Stuhl.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677445730425')]">
                    <h1 className="pt-4 pr-24 font-bold text-lg">Deon</h1>
                    <Link
                        className="p-2 bg-[#DAA520] mt-auto text-white rounded-md"
                        to="/products/deon"
                    >
                        Shop now
                    </Link>
                </div>
                <div className="pb-6 flex justify-center bg-center w-1/3  bg-no-repeat bg-[url('https://ik.imagekit.io/6sicju8qu/Schuesseln.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677445731781')]">
                    <h1 className="pt-4 pr-24 font-bold text-lg">Krisha</h1>
                    <Link
                        className="p-2 bg-[#DAA520] mt-auto text-white rounded-md"
                        to="/products/krisha"
                    >
                        Shop now
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
}
 
export default Products;