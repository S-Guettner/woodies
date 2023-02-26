import footerImg from '../../../images/Footer.png';
import logo from '../../../images/Logo.png';

const Footer = () => {
    return (
        <footer className="bg-[#F1F1F1] relative">
            <div className="absolute left-20 top-12 h-[.1rem] bg-neutral-300 w-2/3 text-[#8D8D8D]" />
            <section className="flex justify-between h-[25vh] pt-12 pl-20 ">
                <div className="h-[.1rem] w-1/3 text-[#8D8D8D]">
                    <img className="pt-6 w-40 mb-3" src={logo} alt="logo" />
                    <p className="mb-1">(012 8967453)</p>
                    <p className="mb-1">woodies@gmail.com</p>
                    <p className="mb-1">Jakarta, Indonesia</p>
                </div>
                <div className="flex justify-center items-end w-full text-[#8D8D8D]">
                    <p className="w-32 pb-2 text-center">© 2020 Woodies</p>
                </div>
                <img src={footerImg} alt="desk" />
            </section>
        </footer>
    );
}

export default Footer;