import React,{Component} from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {  CardBody, Card } from 'reactstrap';
import './portfolio.css'
import { FaCode,FaGithub } from 'react-icons/fa';



class Portfolio extends Component{
    render(){
        return(
            <section id="skills-section"  className="mt-5 ">
                 <div className="container  mt-5 p-5">
                     <div className="row">
                         <div className="col-12">
                              <h1 className="header-skill">My work</h1>
                              <div className="spacers"> </div>
                         </div>
                         <div id="work-main" className="container p-4">
                             <div className="row">
                                <div class="col-md-12 text-center">
                                <OwlCarousel
                    className="owl-theme"
                    loop
                    margin={10}
                    autoplay={true}
                    autoplayTimeout={4000}
                    llazyContent={true}
                
                    items={1}
                >
                    <div class="item">
                        <div className="row">
                            <div className="col-12 work-header text-center ">
                                <h1>Portfolio</h1>
                                <p>My own portfolio website</p>
                            </div>
                            <div className="col-lg-4 col-md-12 order-2 order-lg-1">
                            <Card className="work-card ">
                                    <CardBody>
                                    <h5 clasNames="info-edu"><span><FaCode/></span> using <span>React js</span></h5>
                                    <p>A fully responsive portfolio website which shows everthing about me.<br/>
                                        Go on have a look
                                    </p>
                                    
                                  <a href="/portfolio" className="btn btn-outline-success">Visit Website</a>
                                  <a className=" social-links btn btn-round" href="/"><FaGithub /></a>

                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-lg-8 col-md-12  order-1 order-lg-2">
                        <img alt="project 1" height="500px" width="400px" src="/assets/images/project3.png"/></div>

                            </div>

                        </div>
                        <div class="item">
                        <div className="row">
                            <div className="col-12 work-header text-center ">
                                <h1>Portfolio</h1>
                                <p>My own portfolio website</p>
                            </div>
                            <div className="col-lg-4 col-md-12 order-2 order-lg-1">
                            <Card className="work-card ">
                                    <CardBody>
                                    <h5 clasNames="info-edu"><span><FaCode/></span> using <span>React js</span></h5>
                                    <p>A fully responsive portfolio website which shows everthing about me.<br/>
                                        Go on have a look
                                    </p>
                                    
                                  <a href="/portfolio" className="btn btn-outline-success">Visit Website</a>
                                  <a className=" social-links btn btn-round" href="/"><FaGithub /></a>

                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-lg-8 col-md-12  order-1 order-lg-2">
                            <img alt="project 1" height="500px" width="400px" src="/assets/images/project3.png"/></div>

                            </div>

                        </div>
                   
                </OwlCarousel>
                                                                                       
                                 </div>
                                 </div>
                                 </div>
                      </div>
                    </div>  
            </section>             
        )
    }
}




export default Portfolio