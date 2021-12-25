import './about.css'
import 'jquery'
import 'materialize-css'

import green from '../../components/assets/good.jpg'
import logo from '../../components/assets/logo.png'
import car from '../../components/assets/nse_ugh2.jpg'
import secongImg from '../../components/assets/nse_ugh2.jpg'


export default function About() {

    return (
        <>
            <div className="row header">
                <div className="headerTitles">
                    <span className="headerTitleSm">Uzere Food & Industries</span>
                    <span className="logoLeft"><img src={logo} style={{width: '80px', height: '50px'}} /></span>
                </div>
                <div className="head blue-grey lighten-5">
                    <div className="col s12 m7 l7 headerLeft">
                        <img className="bizIcon" src={green} className="headerMainLeft responsive-img" alt="content" />
                        <span className="flow-text"></span>
                    </div>
                    <div className="col s12 m5 l5 blue-grey lighten-5 headerLeft">
                        <h1 className="headerRight center">Nigeria's Pride</h1>
                        <p className="headerRightCont center"> 
                            We are proudly Nigeria's foremost cassava processing company
                            UFIL has been leading the  initiative of Commercial Cassava Cultivation in Delta State and Environs. Partnering over Two Hundred Farmers in the Cultivation of Cassava.
                        </p>
                        <span className="flow-text"></span>
                    </div>
                </div>
            </div>
            <div className="blueStrip"></div><div className="grayStrip"></div>
            <div className="row">
                <div className="col s12 m4 l4 center centerz">
                    <h3 className="aboutLeft">MOTIVATION</h3>
                      <i className="aboutIcon fa fa-lightbulb-o"></i>
                    <p className="gridCont">UZERE FOODS AND INDUSTRIES LIMITED - NIGERIA FOREMOST CASSAVA PROCESSING COMPANY is a Leading Cassava Processing company since 2008.</p>
                </div>
                <div className="col s12 m4 l4 center centerz">
                    <h3 className="aboutRight">MISSION</h3>
                    <i className="aboutIcon fa fa-rocket"></i>
                    <p className="gridCont">UFIL is exploring an innovative approach to improve cassava value chain, agro-processing  and industrial utilisation of Cassava by product by implementing modern innovative technology.</p>
                </div>
                <div className="col s12 m4 l4 ">
                    <div className="row">
                        <div className="col s12 m10">
                            <div className="card">
                                <div className="card-image">
                                    <img className="gridImg" src={car} alt=" " style={{height: '330px'}} />
                                    <span className="card-title">Lambo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m4 l4 center centerz">
                    <h3 className="aboutLeft">SECURITY</h3>
                     <i className="aboutIcon fa fa-shield"></i>
                    <p className="gridCont">UZERE FOODS AND INDUSTRIES LIMITED - NIGERIA FOREMOST CASSAVA PROCESSING COMPANY is a Leading Cassava Processing company since 2008.</p>
                </div>
                <div className="col s12 m4 l4 center centerz">
                    <h3 className="aboutRight">EQUIPMENT</h3>
                    <i className="aboutIcon fa fa-cogs"></i>
                    <p className="gridCont">UFIL is exploring an innovative approach to improve cassava value chain, agro-processing  and industrial utilisation of Cassava by product by implementing modern innovative technology.</p>
                </div>
                <div className="col s12 m4 l4">
                    <div className="row">
                        <div className="col s12 m10">
                            <div className="card">
                                <div className="card-image">
                                    <img className="gridImg" src={car}  style={{height: '330px'}} alt="" />
                                    <span className="card-title">Lambo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m4 l4 center centerz">
                    <h3 className="aboutLeft">PROCESSING</h3>
                     <i className="aboutIcon fa fa-recycle"></i>
                    <p className="gridCont">UZERE FOODS AND INDUSTRIES LIMITED - NIGERIA FOREMOST CASSAVA PROCESSING COMPANY is a Leading Cassava Processing company since 2008.</p>
                </div>
                <div className="col s12 m4 l4 center centerz">
                    <h3 className="aboutRight">PARTNERSHIP</h3>
                     <i className="aboutIcon fa fa-handshake-o"></i>
                    <p className="gridCont">UFIL is exploring an innovative approach to improve cassava value chain, agro-processing  and industrial utilisation of Cassava by product by implementing modern innovative technology.</p>
                </div>
                <div className="col s12 m4 l4">
                    <div className="row">
                        <div className="col s12 m10">
                            <div className="card">
                                <div className="card-image">
                                    <img className="gridImg" src={car}  style={{height: '330px'}} alt=" " />
                                    <span className="card-title">Lambo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="secondHead green accent-4">
                    <div className="col s12 m12 l6">
                        <img src={secongImg} style={{height: '70vh'}} className="imgR responsive-img" alt="content" />
                        <span className="flow-text"></span>
                    </div>
                    <div className="col s12 m12 l6 headerLeft left">
                        <h1>UZERE Pride</h1>
                        <p> 
                            We are proudly Nigeria's foremost cassava processing company
                            UFIL has been leading the  initiative of Commercial Cassava Cultivation in Delta State and Environs. Partnering over Two Hundred Farmers in the Cultivation of Cassava.
                        </p>
                        <span className="flow-text"></span>
                    </div>
                </div>
            </div>

            <h1 id="connect">Subscribe to Our Newsletter</h1>
            <section id="newsletter">
                <div className="container">
                    <div className="row form">
                        <form id="contact-form" className="col s12"  >
                            <div className="row">
                                <div className="input-field col s6">
                                    <input  id="first_name" name="first_name" type="text" className="validate black-text" required />
                                <label for="first_name">First Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="last_name" name="last_name" type="text" className="validate black-text" required />
                                <label for="last_name">Last Name</label>
                                </div>
                            </div>
                        
                            <div className="row">
                                <div class="input-field col s12">
                                    <input id="email" type="email" name="email" className="validate black-text" required />
                                <label for="email">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <textarea id="textarea1" name="message" className="materialize-textarea black-text" required></textarea>
                                    <label for="textarea1">Message</label>
                                </div>
                            </div>
                            <button className="btn green accent-4 waves-effect waves-light" type="submit" name="action">Send
                                <i class="material-icons right">send</i>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}