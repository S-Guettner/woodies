import Footer from "../assets/components/footer/Footer";
import PageNameBorder from "../assets/components/pageNameBorder/PageNameBorder";
import image from "../images/About.png"
import NavBar from "../assets/components/navbar/NavBar";

const About = () => {
    return (
        <section className="flex flex-col justify-between h-screen">
            <NavBar />
            <PageNameBorder pageText={"Who we are"} pageTitle={"ABOUT US"} />
            <main className="mx-auto flex justify-between items-center w-[70%]">
                <img src={image} alt="" />
                <article className="max-w-lg">
                    <h3 className="text-4xl">
                        <span className="font-semibold">WOODIES</span> is the
                        <span className="font-semibold">
                            {" "}
                            home of modern wooden furniture
                        </span>
                    </h3>
                    <p className="text-xl">
                        the answer to your need for furniture with shapes, sizes
                        and colors.
                    </p>
                </article>
            </main>
            <Footer />
        </section>
    );
}
 
export default About;