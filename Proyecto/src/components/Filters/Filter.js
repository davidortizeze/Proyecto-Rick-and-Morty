import './Filters.css'

export default function Filters({nombreFiltro,datoFiltro,muestraValor}) {
    
    return(
        <div className="filters d-flex justify-content-between flex-wrap form-check form-switch px-5 py-2">
            <input className="form-check-input style-check-on" type="checkbox" role="switch" id={datoFiltro} value={datoFiltro} onChange={muestraValor}/>
            <label className="form-check-label check-box style-check-off" htmlFor={nombreFiltro}>{nombreFiltro}</label>
        </div>
    )    
} 