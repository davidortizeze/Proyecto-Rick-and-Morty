import './style.css'
import {Link} from 'react-router-dom';

export default function Home(){
    return(
        <header className="principal-search container-fluid d-flex flex-column justify-content-center align-items-center header-rick">
            <div className="container-header d-flex flex-column justify-content-center stilo-css">
                <h1 className="row justify-content-center titulo-rick">Proyecto - Rick & Morty</h1>
                    <nav className="row navbar align-items-center">
                        <ul className="nav nav-pills justify-content-center style-ul">
                            <Link to='components/Characters/Characters'className="nav-item active m-2 p-3 botones style-container border-line">Characters</Link>
                            <Link to='components/Contact/Contact' className="nav-item active m-2 p-3 botones style-container border-line">Contact</Link>
                        </ul>
                    </nav>
            </div>
        </header>
    )
}