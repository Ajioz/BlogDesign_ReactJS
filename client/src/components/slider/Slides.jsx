import 'jquery'
import 'materialize-css';
import { Slider, Slide, Caption } from 'react-materialize'


//Import images
import cover from '../assets/plant.jpg'
import process_cassava from '../assets/Cassava_process.jpg'
import plant from '../assets/farm.jpg'
import farmers from '../assets/farmers.jpg'


export default function Slides(){

   return (
    <>
      <Slider style={{marginBottom: '-50px'}}>
         <Slide image={<img alt="" src={cover}/>}>
          <Caption placement="center">
            <h3>We are Nigeria's Pride</h3>
            <h5 className="light grey-text text-lighten-3">First of its kind</h5>
          </Caption>
        </Slide>

         <Slide image={<img alt="" src={process_cassava}/>}>
          <Caption placement="left">
            <h3>We Process Cassava</h3>
            <h5 className="light grey-text text-lighten-3">We feed the Nation</h5>
          </Caption>
        </Slide>

         <Slide image={<img alt="" src={plant}/>}>
          <Caption placement="right">
            <h3>With State of Art Equipment</h3>
            <h5 className="light grey-text text-lighten-3">Using the most Advance technologyin food cassava processing</h5>
          </Caption>
        </Slide>

         <Slide image={<img alt="" src={farmers}/>}>
          <Caption placement="center">
            <h3>We Empower Local Farmers</h3>
            <h5 className="light grey-text text-lighten-3">Together we are building a formidable economy</h5>
          </Caption>
        </Slide>
      </Slider>
    </>
     )
}

