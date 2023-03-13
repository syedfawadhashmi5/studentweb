import React from 'react';
import circleMap from '../img/circle-map.png'
import Bounce from 'react-reveal/Zoom';

const Footer = () => {
    return (
<div className="footer animate__animated animate__bounce">
  <div className='container'>
  <div className='row'>
      <div className="col-md-3 col-sm-12">
        <div className="single_footer_widged">
          <Bounce>
          <div className="logo">
              <span>
              <h3>what We offer</h3>
                We offer a range of services related to freelancing and student consultancy to help individuals and businesses achieve their goals. Our team of experienced professionals provides personalized solutions to meet your specific needs and deliver high-quality results.</span>
          </div>
          </Bounce>
        </div>
      </div>
      <div className="col-md-3 col-sm-12">
        <div className="single_footer_widged">
        <Bounce>
          <div className="logo">
              <span>
              <h3>what We offer to clients</h3>
                For freelancers, we offer a variety of services to help you succeed in your businesses.For businesses, we offer a range of consulting services to help you improve your operations and achieve your goals. We can provide guidance on a variety of topics, including business strategy, marketing, and finance. We can also help you find the right freelancers to meet your needs and manage your projects to ensure successful outcomes.</span>
          </div>
          </Bounce>
        </div>
      </div>
      <div className="col-md-3 col-sm-12">
        <div className="single_footer_widged">
        <Bounce>
          <div className="logo">
              <span>
              <h3>what We offer to student</h3>
                For students, we provide consultancy services to help you make the right decisions about your Skills and career. We can help you identify your strengths and interests, explore different career options, and develop a plan to achieve your goals. We can also provide advice on freelacning and get a job process.</span>
          </div>
          </Bounce>
        </div>
      </div>
      <div className="col-md-3 col-sm-12">
        <div className="single_footer_widged">
        <Bounce>
          <div className="logo">
              <span>
              <h3>Overall our goal</h3>
                Overall, our goal is to provide high-quality services that help individuals and businesses achieve their objectives. Whether you're a freelancer looking to grow your business or a student looking to launch your career, we're here to help. Contact us today to learn more about our services and how we can help you achieve your goals.</span>
          </div>
          </Bounce>
        </div>
      </div>
    </div>
  </div>

  <div className="circle-map"><img src={circleMap} alt="image" /></div>

<div className='container'>
<Bounce>
<div className="row">
    <div className="col-md-4 col-sm-12">
      <div className="single_footer_widged">
        <h3>Services</h3>
        <ul className="footer-services-list">
          <li><a href="#">Graphic Designing / UIUX / Logo / Card / Flyer Etc..</a></li>
          <li><a href="#">Web development / React.js / WebApp / Wordpres</a></li>
          <li><a href="#">Digital Marketing</a></li>
          <li><a href="#">Amazon A-Z account handling</a></li>
          <li><a href="#">Content Writing</a></li>
        </ul>
      </div>
    </div>
    <div className="col-md-4 col-sm-12">
      <div className="single_footer_widged">
        <h3>Contacts</h3>
        <ul className="footer-contact-list">
          <li><span>Email:</span> <a href="#">syedfawadhashmi5@gmail.com</a></li>
          <li><span>Phone:</span> <a href="#">03123865844</a></li>
        </ul>
      </div>
    </div>
    <div className="col-md-4 col-sm-12">
      <div className="single_footer_widged">
        <h3>Quick Links</h3>
        <ul className="quick-links-list">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Protfolio</a></li>
          <li><a href="#">Support</a></li>
        </ul>
      </div>
    </div>
</div>
</Bounce>
</div>

  <div className="copyright-area">
    <div className="container">
    </div>
  </div>
</div>
    );
};

export default Footer;