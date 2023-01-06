import './Card.css';
import {useState} from 'react'; 

export default function Card({info}){
    const [ocultar,setOcultar]=useState(true);
    const mostrar=()=>{
        console.log(info)
        setOcultar(false)
    }
    const ocultarInfo=()=>{
        setOcultar(true)
    }

    return(
        <div className="fondo-targeta my-5 d-flex card m-2 p-2 d-flex flex-row justify-content-between align-items-center">
            <div className='d-flex flex-column justify-content-between align-items-center'>
                <img src={info.image} alt={info.name}/>
                <h2 className="color-letra">{info.name}</h2>
                {ocultar? <button className="btn btn-active align-self-end more style-button" id="b1" onClick={mostrar}>Now More..</button> :''}
            </div>
            {ocultar == false?
            <div className="more-info p-5 flex-column align-items-center ch1 tarjeta-more-info">
                <button className="button-x btn btn-active d-flex align-self-end m-2" id="x1" onClick={ocultarInfo}>X</button>
                <ul className="list-group tarjeta-info">
                    <li className="list-group-item p-3 item-1">
                        <div className='fw-bold'>Character Status {info.status}</div>
                    </li>
                    <li className="list-group-item p-3 item-2">
                        <div className='ms-2 me-auto'>Species <div className='fw-bold'>{info.species}</div>
                        </div>
                    </li>
                    <li className="list-group-item p-3 item-3">
                        <div className='ms-2 me-auto'>Origin <div className='fw-fold'>{info.origin.name}</div>
                        </div>
                    </li>
                    <li className="list-group-item p-3 item-4">
                        <div className='ms-2 me-auto'>Gender <div className='fw-bold'>{info.gender}</div>
                        </div>
                        </li>
                </ul>
            </div>:''}
        </div>
    )
}