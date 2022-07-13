import {Link} from "react-router-dom";

import {useSelector} from "react-redux";

function Navbar(){

    const language = useSelector((state)=>state.langCompine.lang)
    console.log("from Navbar", language);




    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/" > Add User </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/function" >
                        Function </Link>
                    </li>

                    <li className="nav-item">
                    <Link className="nav-link" to="/class">Class </Link>
                    </li>

                    <li className="nav-item">
                    <Link className="nav-link" to="/users">Users </Link>
                    </li>
                   

                    <li className="nav-item">
                    <Link className="nav-link" to="/blogs">Blogs </Link>
                    </li>
                    

                    <li className="nav-item">
                        <p className="nav-link"> {language} </p>
                    </li>
                </ul>
                
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar;