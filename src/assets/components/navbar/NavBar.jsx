import { Link } from "react-router-dom";
import logo from "../../../images/Logo.png";

const NavBar = () => {
    return ( 
        <nav className="p-8 px-16 flex justify-between align-baseline">
            <img src={logo} alt="" />
            <div className="w-72 text-lg flex justify-between items-center">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/products'>Products</Link>
            </div>
        </nav>
     );
}
 
export default NavBar;