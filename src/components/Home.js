import React from "react";
// import Teacherdata from "../components/Teacherdata";
import Teacherdata from '../components/Teacherdata';

const Home = () => {

  return (
    <div className=" text-center">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="img d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/5088022/pexels-photo-5088022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="img d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/4778662/pexels-photo-4778662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="img d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container mt-4">
      <div className="jumbotron position-relative">
  <div className="row">
    <div className="col-md-6">
      <img
        className="img img-fluid img-responsive about"
        src="https://img.freepik.com/free-photo/clever-korean-schoolgirl-has-serious-sullen-look-folds-lips-holds-pencil-notepad-head_273609-34064.jpg?w=740&t=st=1658752514~exp=1658753114~hmac=b6bf11fa09334d373a261bd25f1a2d8bfaff7ac136bffe4746313a42d265fc4d"
      ></img>
      <button type="button" className="btn btn-secondary btn-lg position-absolute start-50 top-50 translate-middle" id="video-btn">
        <i className="bi bi-play-circle"></i>
      </button>
    </div>
    <div className="col-md-6 mt-5">
      <div className="text">
        <h1 className="mt-4">About us</h1>
        <span>
          <h3>what We offer</h3>
          We offer a range of services related to freelancing and student consultancy to help individuals and businesses achieve their goals. Our team of experienced professionals provides personalized solutions to meet your specific needs and deliver high-quality results.
        </span>
        <span>
          <h3>what We offer to clients</h3>
          For freelancers, we offer a variety of services to help you succeed in your businesses.For businesses, we offer a range of consulting services to help you improve your operations and achieve your goals. We can provide guidance on a variety of topics, including business strategy, marketing, and finance. We can also help you find the right freelancers to meet your needs and manage your projects to ensure successful outcomes.
        </span>
        <button type="button" className="btn btn-secondary btn-lg mt-3" id="btn-color">
          Large button
        </button>
      </div>
    </div>
  </div>
</div>

      </div>
      <Teacherdata/>

{/* <Teacherdata/> */}
    
    </div>
  );
};

export default Home;
