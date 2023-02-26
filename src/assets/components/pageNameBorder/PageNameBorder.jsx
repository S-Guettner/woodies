import logoSmall from '../../../images/logo_small.png'

const PageNameBorder = (props) => {
    return (
        <section className="flex justify-center items-center">
            <img src={logoSmall} alt="logo" />
            <p className='mr-4 ml-1 text-lg font-semibold'>{props.pageText}</p>
            <div className="h-1 bg-[#dfdfdf] w-3/6"></div>
            <h2 className="ml-2 text-6xl font-semibold text-[#e9e9e9]">
                {props.pageTitle}
            </h2>
        </section>
    );
}

export default PageNameBorder;