import NavBar from "../assets/components/navbar/NavBar";
import image from "../images/Home.png"
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <section id="homeBackground" className=" h-screen">
            <NavBar />
            <main className="flex pt-44">
                <article className="pl-20 pt-10">
                    <p className="text-2xl">
                        Are you looking for woodden furniture for your place?
                    </p>
                    <h2 className="text-7xl leading-tight mb-10">
                        This is the Right Place
                    </h2>
                    <Link
                        className="p-3 text-lg rounded-md bg-[#DAA520] hover:bg-[#daa5207c] text-white"
                        to={"/products"}
                    >
                        Explore Categories
                    </Link>
                </article>
                <img className="w-1/2" src={image} alt="" />
            </main>
        </section>
    );
}

export default Home;