import React from 'react'
import {Link} from 'react-router-dom'

function Nav () {
    return (
        <div className="nav">

        <Link to="/business" className="nav-link"> Negocios</Link>
        <Link to="/entertainment" className="nav-link"> Entretenimento</Link>
        <Link to="/general" className="nav-link"> Geral</Link>
        <Link to="/health" className="nav-link"> Saude</Link>
        <Link to="/science" className="nav-link"> Ciencias</Link>
        <Link to="/sports" className="nav-link"> Esportes</Link>
        <Link to="/technology" className="nav-link"> Tecnologia</Link>

    </div>
    )
}

export default Nav