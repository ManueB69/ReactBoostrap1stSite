import {NavLink} from 'react-router-dom'

const Header = ()=> (
    <header className="mb-3">
      
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={require('../assets/social-instagram.png').default} alt="logo menu"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink activeClassName="active" exact className="nav-link" aria-current="page" to="/">Home</NavLink>
                        <NavLink activeClassName="active" exact className="nav-link" to="/gallery">Gallery</NavLink>
                        <NavLink activeClassName="active" exact className="nav-link" to="/contact">Contact</NavLink>
                    </div>
                </div>
            </div>
        </nav>
        
    </header>
)

export default Header