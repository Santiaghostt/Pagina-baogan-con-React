import React from 'react'

function Footer() {
    return (
        <div>
            <footer>
                <div className="row bg-white p-4">
                    <h3 className="text-danger d-flex justify-content-center mb-4 l-china">Contáctanos</h3>
                    <div className="d-flex justify-content-center gap-5">
                        <img src="./public/images/youtube-logo.png" alt="youtube" width="50px" height="50px" />
                        <img src="./public/images/instagram-logo.png" alt="instagram" width="50px" height="50px" />
                        <img src="./public/images/facebook-logo.png" alt="facebook" width="50px" height="50px" />
                        <img src="./public/images/twitter-logo.png" alt="twitter" width="50px" height="50px" />
                        <img src="./public/images/whatsapp-logo.png" alt="whatsapp" width="50px" height="50px" />
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer