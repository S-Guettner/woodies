import Footer from "../assets/components/footer/Footer";
import PageNameBorder from "../assets/components/pageNameBorder/PageNameBorder";

const About = () => {
    return ( 
        <section>
            <PageNameBorder 
            pageText = {"Who we are"}
            pageTitle = {"ABOUT US"}
            />
            <h1>ABOUT</h1>
            <Footer />
        </section>
     );
}
 
export default About;