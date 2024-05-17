import React from 'react';
import ReactDOM from 'react-dom';
import "../styles/home.css";
import Navbar from './nav';
import First_img  from "../images/original.png";
import Second_image from  "../images/me.jpg";
import servicesdata from '../data/servicesdata';
import Register from './register';
import Footer from './footer';




export default function Home(){
    const myServices =  servicesdata.map(item =>(
        <div>
            <img src={item.img}/>
            <h1>{item.header}</h1>
            <p>{item.about}</p>
        </div>
    ))




    return(
        <div className='container-fluid p-0 m-0'>
            <Navbar/>
            <div  className='row intro mb-5'>
                <div className='col-sm-6 intro_wordings'>
                <h1>START LEARNING WITH US <span>NOW!</span></h1>
                <p>Embark on your learning journey with us and unlock new possibilities:</p>

                </div>
                <div className='col-sm-6 intro_image'>
                    <img src={First_img}/>

                </div>

            </div>
            
            <div className='about_us row' id='aboutus'>
                <div className='col-sm-6 about_us_image'>
                    <img src={Second_image}/>
                </div>
                <div className='col-sm-6 about_us_wordings'>
                    <h1 className='about_us_header'>About Us</h1>
                    <div className="p-2">
                        <h1 className='about_intro'>Welcome to PrinceJetro Web Development Training</h1>
                        <p>Embark on a journey to master web development with PrinceJetro Web Devevelopment Training. Our comprehensive courses and expert instructors will guide you through the intricacies of building modern and dynamic websites. Get ready to unlock your potential and bring your ideas to life on the web!</p>
                        <ul>
                            <li><strong>Comprehensive Curriculum:</strong> Our program covers HTML, CSS, and JavaScript from the basics to advanced concepts, ensuring you gain a thorough understanding of web development fundamentals.</li>
                            <li><strong>Interactive Learning Environment:</strong> Engage in hands-on learning through live coding sessions, group projects, and peer collaboration, fostering an interactive and immersive learning experience.</li>
                            <li><strong>Expert Guidance and Support:</strong> Learn from experienced instructors who are passionate about web development and dedicated to your success. Receive personalized support and career guidance throughout your learning journey.</li>
                        </ul>

                    </div>
                </div>

            </div>

            <div className='services_div row' id='services'>
                <div className='col-sm-4 services_wordings '>
                    <div className="p-2">
                    <h1 className='services_header'>Services</h1>
                    <h1 className='services_intro'>What We Provide To You</h1>
                    <p>Discover the exceptional services we offer to enhance your experience:</p>
                    </div>
                </div>
                <div className='col-sm-8 services_div services'>
                    {myServices}
                </div>

            </div>

            <h1 className='aboutcourseheader' id='aboutcourse'>About The Course</h1>

            <div className='row aboutcourse p-3'>

            <div className="row">
  <div className="column" >
    <h2><strong>Course Schedule:</strong></h2>
    <p>Saturdays, starting from the 1st of June, from 1:00 PM to 3:00 PM via Zoom/Google meet(2 hours per session,)</p>
  </div>
  <div className="column">
  <h2><strong>Who Should Attend:</strong></h2>
  <p>This class is suitable for both beginners and intermediates in HTML and CSS.</p>
</div>
  <div className="column" >
    <h2><strong>Teaching Approach:</strong></h2>
    <p>Project-driven classes with a focus on practical application</p>
  </div>
  <div className="column" >
    <h2><strong>Interactive Learning:</strong></h2>
    <p>Engage in interactive sessions with hands-on projects</p>
  </div>
  <div className="column" >
    <h2><strong>Free Trial:</strong></h2>
    <p>The first class is free of charge</p>
  </div>

  <div className="column" >
    <h2><strong>Course Fee:</strong></h2>
    <p>Subsequent classes are paid, at a token of N2,000 per class</p>
  </div>
  <div className="column" >
    <h2><strong>Duration:</strong></h2>
    <p>The course runs for 3 months</p>
  </div>
  <div className="column" >
    <h2><strong>Learning Resources:</strong></h2>
    <p>Access to shared resources and materials</p>
  </div>
  <div className="column" >
    <h2><strong>One-on-One Sessions:</strong></h2>
    <p>Personalized one-on-one sessions with instructors</p>
  </div>
  <div className="column" >
    <h2><strong>Additional Learning Materials:</strong></h2>
    <p>Links to YouTube videos for further learning</p>
  </div>

  <div className="column" >
    <h2><strong>Assignment Projects:</strong></h2>
    <p>Projects assigned after every class to reinforce learning</p>
  </div>
  <div className="column" >
    <h2><strong>And much more:</strong></h2>
    <p>Explore additional benefits and features of the course</p>
  </div>
  </div>

            </div>
            <Register/>

            <Footer/>
        </div>
    )
}
