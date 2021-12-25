import './footer.css'
import 'jquery'
import 'materialize-css'

export default function Footer() {
    return (
        <>
        <body>
            <footer id="service" className="page-footer  green accent-3" style={{marginTop: '120px'}}>
                <div className="container">
                    <div className="row">
                    <div className="sep"></div>
                    <div className="col l6 s12">
                        <h5 className="blue-grey-text">Visit us</h5><br />
                        <p className="grey-text text-lighten-4">
                            <h6 className="white-text">Head Office</h6>
                            <p>#33 Hospital/Jakpa Road, 
                                <p>Ekpan, Delta State,</p>
                                <p>Nigeria.</p>
                            </p>
                        </p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="blue-grey-text">Call Lines</h5><br />
                        <ul><br />
                        <li className="white-text">+234-9135396292</li>
                        <li className="white-text">+234-9074444140</li>
                        <li className="white-text">+234-8030689585</li>
                        <li className="white-text">+234-8064107055</li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div class="footer-copyright  green accent-4 center">
                    <div class="container">
                        Uzere Food & Industries Limited, Copyright &copy; 1995 - 2021
                    </div>
                </div>
            </footer> 
        </body>
        </>
    )
}
