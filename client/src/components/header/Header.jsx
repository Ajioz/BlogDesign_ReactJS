import { useEffect } from 'react';
import "./header.css"
import green from '../../components/assets/good.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Header() {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <>
            <div className="row header" data-aos="fade-left" data-aos-offset="100">
                <div className="head blue-grey lighten-5">
                    <div className="col s12 m7 l7 headerLeft">
                        <img className="bizIcon" src={green} className="headerMainLeft responsive-img" alt="content" data-aos="flip-left" data-aos-offset="100"/>
                        <span className="flow-text"></span>
                    </div>
                    <div className="col s12 m5 l5 blue-grey lighten-5 headerLeft">
                        <h1 className="headerRight center">Nigeria's Pride</h1>
                        <p className="headerRightCont center" data-aos="fade-up-right" data-aos-offset="100"> 
                            We are proudly Nigeria's foremost cassava processing company
                            UFIL has been leading the  initiative of Commercial Cassava Cultivation in Delta State and Environs. Partnering over Two Hundred Farmers in the Cultivation of Cassava.
                        </p>
                        <span className="flow-text"></span>
                    </div>
                </div>
            </div>
            <div className="blueStrip" data-aos="fade-up" data-aos-offset="100"></div>
            <div className="grayStrip" data-aos="fade-up" data-aos-offset="100"></div>
        </> 
    )
}
