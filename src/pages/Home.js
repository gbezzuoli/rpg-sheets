import React from 'react'
import { Link } from 'react-router-dom'
import ddlogo from '/home/gbezzuoli/rpg-sheets/src/img/dd.png'
import vmlogo from '/home/gbezzuoli/rpg-sheets/src/img/vampire.png'
import cylogo from '/home/gbezzuoli/rpg-sheets/src/img/cyberpunk.png'

const Home = () => {
    return (
        <div className="principal">
            <h1 className="title">Bem vindo ao RPG-Sheets</h1>
            <div className="container">
                <div className="cards">
                    <Link to="/Vampyr">
                    <div className="card-1">
                    <img className="img-1" src={vmlogo} alt="D&D" />
                    1. Vampiro 5e
                    </div>
                    </Link>
                    <Link to="/DnD">
                    <div className="card-2">
                        <img className="img-2" src={ddlogo} alt="D&D" />
                        2. D&D 5e
                    </div>
                    </Link>
                    <Link to="/Cyberpunk">
                    <div className="card-3">
                    <img className="img-3" src={cylogo} alt="D&D" />
                    3. Cyberpunk 2020
                    </div>
                    </Link>
                </div>
            </div>
            <div className="footer">
                <p>Desenvolvido por: <a href="https://linktr.ee/gbezzuoli" className="linkout1">Guilherme Bezzuoli</a> e <a href="" className="linkout2">Henrique Carvalho dos Santos</a></p>
                <p>Feito em React</p>
                </div>
        </div>
    )
}

export default Home
