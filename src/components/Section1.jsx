import React from 'react'

function Section1() {
  return (
    <div>
      <div>
        <img src="./public/images/fondo-pagina-baogan.png" className="img-fluid mx-auto d-block p-5" alt="evito-world" />
      </div>
      <div id="baogan" className="container-fluid p-0 my-5">
        <div className="row">
          <div className="d-flex flex-column align-items-center bg-texture-bgn">
            <h1 className="text-danger l-china mt-3">¿Qué es Baogan?</h1>
            <p className="fs-5 texto-justificado mb-3">Baogan es el prototipo de un videojuego que quiere mostrarles a los jovenes y niños desde un punto de vista diferente el uso de la pólvora y sus derivados, teniendo en cuenta el riesgo que tiene este metodo de entretenimiento y todos los daños que causa en los seres humanos, animales y el medio ambiente</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1