import {Link} from "react-router-dom";
import "./navbar.css"

export default function NavBar() {
    const user = true;
  return (
    <div className="nav">
        <div className="navLeft">
                <a href="https://www.facebook.com/D27.Eternal/" target="_blank">
            <i className="navIcon fab fa-facebook-square">

            </i>
                </a>
            <i className="navIcon fab fa-github-square"></i>
            <i className="navIcon fab fa-linkedin"></i>
            <i className="navIcon fa-brands fa-hashnode"></i>
        </div>
        <div className="navCenter">
            <ul className="navList">
                <li className="navListItem">
                    <Link className="link" to="/">HOME</Link>
                </li>
                <li className="navListItem">
                    <Link className="link" to="/">ABOUT</Link>
                </li>
                <li className="navListItem">
                    <Link className="link" to="/">CONTACT</Link>
                </li>
                <li className="navListItem">
                    <Link className="link" to="/write">WRITE</Link>
                </li>
                <li className="navListItem">
                {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className="navRight">
            {
                user ? (

                    <Link to="/settings">
                    <img 
                        className="navImg" src="https://www.orionpalmer.com/static/media/orionpalmer.ba51d754.webp" alt="user">
                    </img>
                    </Link>
                ) : (
                    <ul className="navListItem">

                        <Link className="link" to="/login">LOGIN</Link>
                        <Link className="link" to="/register">REGISTER</Link>
                    </ul>
                )

            }

            <i className="navSearchIcon fas fa-search"></i>
        </div>
    </div>
  )
}
