import React from 'react'

const Vampyr = () => {
    return (
        <div>
            <div className="container-vp">
                <div className="title-vp">
                    <img src="http://gamepress.com.br/wp-content/uploads/2019/10/VampireMasqueradeV5Logo.png" className="logo" alt="Vampyr" />
                </div>
                <form className="vp-form">
                    <h1 className='title-vp'>Caracteristicas</h1>
                    <div className="resume">
                        <label for="nome">
                            Nome:
                            <input type="text" className="input-vp" placeholder="Nome" />
                        </label>
                        <label for="conceito">
                            Conceito:
                            <input type="text" className="input-vp" placeholder="Conceito" />
                        </label>
                        <label for="predador">
                            Predador:
                            <select type="text" className="predador" placeholder="Predador">
                                <option value="Gatuno">Gatuno</option>
                            </select>
                        </label>

                        <label for="nome">
                            Historia:
                            <input type="text" className="input-vp" placeholder="Historia" />
                        </label>
                        <label for="conceito">
                            Ambição:
                            <input type="text" className="input-vp" placeholder="Ambição" />
                        </label>
                        <label for="predador">
                            Clã:
                            <select type="text" className="predador" placeholder="Clã">
                                <option value="Lasombra">Lasombra</option>
                            </select>
                        </label>

                        <label for="nome">
                            Mestre:
                            <input type="text" className="input-vp" placeholder="Mestre" />
                        </label>
                        <label for="conceito">
                            Desejo:
                            <input type="text" className="input-vp" placeholder="Desejo" />
                        </label>
                        <label for="predador">
                            Geração:
                            <select type="text" className="predador" placeholder="Geração">
                                <option value="Gatuno">Gatuno</option>
                            </select>
                        </label>

                    </div>
                    <h1 className='title-vp'>Atributos</h1>
                    <div className="att">
                        <div classname='card-vp'>
                            <p>Fisico</p>
                            <label for="forca"> Força:
                            <input type="radio" name="forca" value="1" />
                            <input type="radio" name="forca" value="2" />
                            <input type="radio" name="forca" value="3" />
                            <input type="radio" name="forca" value="4" />
                            <input type="radio" name="forca" value="5" />
                            </label>
                            <label for="forca"> Força:
                            <input type="radio" name="forca" value="1" />
                            <input type="radio" name="forca" value="2" />
                            <input type="radio" name="forca" value="3" />
                            <input type="radio" name="forca" value="4" />
                            <input type="radio" name="forca" value="5" />
                            </label>
                            <label for="forca"> Força:
                            <input type="radio" name="forca" value="1" />
                            <input type="radio" name="forca" value="2" />
                            <input type="radio" name="forca" value="3" />
                            <input type="radio" name="forca" value="4" />
                            <input type="radio" name="forca" value="5" />
                            </label>
                        </div>
                        <div classname='card-vp'>
                            <p>Social</p>
                        </div>
                        <div classname='card-vp'>
                            <p>Mental</p>
                        </div>
                    </div>
                    <h1 className='title-vp'>Habilidades</h1>
                    <div className="skills">
                        a
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Vampyr
