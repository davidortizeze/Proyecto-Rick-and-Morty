import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from '../components/Home/Home';
import Characters from '../components/Characters/Characters';
import Contact from '../components/Contact/Contact';


export default function Routeo(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/components/Characters/Characters' element={<Characters/>}/>
                <Route path='/components/Contact/Contact' element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    )
} 