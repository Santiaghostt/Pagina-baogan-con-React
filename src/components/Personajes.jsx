import React from 'react'

function Personajes(props) {
    return (
        <div className='d-flex justify-content-center pt-4 pb-4'>
                <div className="container card bg-danger pt-3 img-transform-s1" style={{ width: "18rem" }}>
                    <section className="bg-card-dark rounded-2 p-1">
                        <img src={`../public/images/${props.imagenes}.png`} className="tamaño-baogan img-fluid card-img-top d-flex mx-auto" alt="baogan" />
                    </section>
                    <div className="card-body">
                        <h5 className="card-title l-china text-center">{props.titulo}</h5>
                        <p className="card-text texto-justificado">{props.texto}</p>
                    </div>
                </div>
            </div>
    )
}

export default Personajes