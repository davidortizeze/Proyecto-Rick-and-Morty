import {Link} from 'react-router-dom';
import './navigation.css';

export default function Navegacion(){
    return(
        <header className="header-nav">
            <nav className="navbar navbar-expand-lg  w-100 bg-blue">
                <div className='container-fluid' >
                    <h1 className='navbar-brand'>Rick & Morty</h1>
                    <ul className="navbar-nav nav-pills">
                        <li className="nav-item">
                            <Link to='/' className="nav-link boton color-fuente" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/components/Characters/Characters" className="nav-link boton color-fuente" aria-current="page">Characters</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/components/Contact/Contact" className="nav-link boton color-fuente" aria-current="page">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}