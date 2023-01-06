import Navigation from '../Navigation/Navigation'
import {useState} from 'react'
import './Contact.css'

export default function Contact(){
    let [inputNombre,setInputNombre]=useState('')


    const registerData=(event)=>{
        setInputNombre(event.target.value)
        console.log(inputNombre)
    }
    return(
        <div>
            <div>
                <Navigation/>
                <div className='tarjeta-p  main-contact-div d-flex flex-column justify-content-center align-items-center m-auto mt-5 w-75 h-75'>
                    <h2 className="style-h2">Contact</h2>
                    <h3 className='style-h3'>Leave us your information so we can contact you</h3>
                    <form className="row g-3 mx-4">
                        <div className="col-md-6">
                            <label htmlFor="nombre" className="form-label">Name</label>
                            <input type="text" className="form-control" id="nombre" value={inputNombre} onChange={registerData}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="correo" className="form-label">Email</label>
                            <input type="email" className="form-control" id="correo"/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="mensaje" className="form-label">Mesage</label>
                            <textarea id="mensaje" className="form-control"></textarea>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary boton-sign">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}