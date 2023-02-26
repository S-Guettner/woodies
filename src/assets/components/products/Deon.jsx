import DeonImg from "../../../images/Stuhl.png";

const Deon = () => {
    return (

        
        <section className="flex justify-center items-center px-40">
            <div className="mr-8 flex justify-center w-64">
                <img src={DeonImg} alt="Stuhl" />
            </div>
            <div className="ml-8 w-80 flex items-center justify-center">
                <p className=" text-xl font-semibold">
                    Deon demonstrates what designer Tim Fenby does best. Clean
                    lines, subtle curves and an oak finish nail this season's
                    trends. Boomerang legs add serious style points – not that
                    this dining chair needs it. Nordic retro? You got it.
                </p>
            </div>
        </section>
    );
};

export default Deon;
