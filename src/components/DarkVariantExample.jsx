import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components.css'
import carouselImage1 from '../assets/images/1.jpg'
import carouselImage2 from '../assets/images/2.jpg'
import carouselImage3 from '../assets/images/3.jpg'
import carouselImage4 from '../assets/images/4.jpg'

function DarkVariantExample() {
  return (
    <>
      <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carouselImage1} className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={carouselImage2} className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={carouselImage3} className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={carouselImage4} className="d-block w-100" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default DarkVariantExample;