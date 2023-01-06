import Navegacion from "../Navigation/Navigation"
import Filters from "../Filters/Filter"
import SectionCards from "../SectionCards/SectionCards"
import{useEffect, useState} from 'react';
import './Characters.css';


export default function Characters(){
    let [datos,setDatos]=useState([]);
    let [infoCompleta,setInfoCompleta]=useState([])

    const mostrarValor=(event)=>{
        if(event.target.checked){    
            let datoFiltro=event.target.value;
            if (datoFiltro === "Alive" || datoFiltro === "Dead") {
                let resultado=datos.filter((ch) => ch.status === datoFiltro)
                setDatos(resultado)
            }
            if (datoFiltro === "Female" || datoFiltro === "Male") {
                let resultado=datos.filter((ch) => ch.gender === datoFiltro)
                setDatos(resultado)
            }
            if (datoFiltro === "Unknown") {
                let resultado=datos.filter((ch) => ch.origin.name === datoFiltro)
                setDatos(resultado)
            }
        }else{
            setDatos(infoCompleta) 
        }
    }
    const traerInfo=async()=>{
        let info= await fetch("https://rickandmortyapi.com/api/character")
                        .then(respuesta => respuesta.json())
                        .catch(error => console.log ("HAY UN ERROR!!"+error))
        return info
    }

    const mostrarInfo =async ()=>{
        let dato= await traerInfo()
        let infoPersonajes= dato.results
        console.log(infoPersonajes)
        setDatos(infoPersonajes)
        setInfoCompleta(infoPersonajes)
    }  
    
    useEffect(()=>{
        mostrarInfo()
    },[])
    
    return(
        <div>
            <Navegacion/>
            <section className="row section-filters py-5 navegacion">
            <h2 className="Filters">Filters</h2>
                <div className="filters d-flex justify-content-between flex-wrap form-check form-switch px-5 py-2">
                    <div className="stilo-seccion">
                        <Filters nombreFiltro="Character Alive" datoFiltro="Alive" muestraValor={mostrarValor}/>
                    </div>
                    <div className="stilo-seccion">
                        <Filters nombreFiltro="Character Dead" datoFiltro="Dead" muestraValor={mostrarValor}/>
                    </div>
                    <div className="stilo-seccion">
                        <Filters nombreFiltro="Female" datoFiltro="Female" muestraValor={mostrarValor}/>
                    </div>
                    <div className="stilo-seccion">
                        <Filters nombreFiltro="Male" datoFiltro="Male" muestraValor={mostrarValor}/>
                    </div>
                    <div className="stilo-seccion">
                        <Filters nombreFiltro="Origin Unknow" datoFiltro="Unknown" muestraValor={mostrarValor}/>
                    </div>
                </div>
            </section>
            <SectionCards datos={datos}/>
        </div>
    )
}