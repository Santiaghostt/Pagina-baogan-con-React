import React from 'react'

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light p-4">
                <div className="container-fluid">
                    <div className="d-flex flex-column justify-content-start">
                        <img src="./public/images/Logo-baogan.png" alt="Logo" className="d-inline-block align-text-top me-3" />
                        <a className="navbar-brand ms-2 mb-0 h1 l-china fs-2 text-center" href="#">Baogan</a>
                    </div>
                    <nav className="navbar navbar-expand-lg bg-light">
                        <div className="container-fluid">
                            <button className="navbar-toggler mx-auto mb-3" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <ul className="navbar-nav m-auto mb-2 mb-lg-0 fs-5">
                                    <li className="nav-item">
                                        <a className="nav-link text-dark hover-rojo l-china text-center text-lg-start" href="#baogan">¿Que es
                                            Baogan?</a>
                                    </li>
                                    <li className="nav-item px-5">
                                        <a className="nav-link text-dark hover-rojo l-china text-center text-lg-start" href="#proyecto">Nuestro
                                            proyecto</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-dark hover-rojo l-china text-center text-lg-start" href="#nosotros">Un poco de
                                            nosotros</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="d-flex justify-content-start">
                        <button className="btn btn-red-bgn btn-lg px-5 baloo fs-3">Jugar</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header