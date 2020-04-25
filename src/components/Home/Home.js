import React,{Component} from 'react'
import logo from './logo.svg'
import './home.css'
import { FaGithub, FaInstagram, FaTwitter,FaFacebookF, FaLinkedin,FaGripLinesVertical,FaArrowRight } from 'react-icons/fa';
import { UncontrolledCollapse, Button, CardBody, Card,CardTitle,Jumbotron } from 'reactstrap';
import {MdExpandMore,MdMail} from 'react-icons/md'



class Home extends Component{
    render(){
        return(
            <div>
            <section id="home-intro">
                    <div class="container  mt-5 p-5">
                
                <div className="row ">
                    
                    <div className="col-md-4 justify-content-start">
                            <div class="hello justify-content-start">
                                <img id="logo-img" src={logo} alt="logo" />
                                <img alt="logo" src="https://github-atom-io-herokuapp-com.freetls.fastly.net/assets/index-portal-blue-50996d0762fb6d9ee13d6a52404dd01327fc542cc729777d532c9b633103c835.svg" class="image " />
                                <img alt="logo" src="https://github-atom-io-herokuapp-com.freetls.fastly.net/assets/index-portal-green-semi-6b12059c6aea11bf60e8f3c89afdffb6b817913541a1ce72cbca29f733224984.svg" class="image " />
                                <img alt="logo" src="https://github-atom-io-herokuapp-com.freetls.fastly.net/assets/index-portal-yellow-bf8ec5927e343b3a804448d37a799c9c346af320f30b3cdc019297938fe00300.svg" class="imagew " />
                                {/* <img alt="logo" src="https://github-atom-io-herokuapp-com.freetls.fastly.net/assets/index-portal-orange-235189ed438049f084ca873f6ed2055c4127ddef84a55fa464053f34c10157e6.svg" class="imagew" /> */}

                            </div>
                    </div>
                        <div className="col-md-2">
                        
                        </div> 

                        <div className="col-md-6 justify-content-center">
                            <div className="text-center ">
                                                        <h1 className="home-header mb-3 centered">I'm Ayush</h1>
                                                        <h6 className="mt-4 header-p" >Student < FaGripLinesVertical/> Web Developer</h6>
                                                       
                                                       
                                                        <div className="col-md-12">

                                                             <ul className="nav justify-content-center ul-social ">
                                                            <li className="nav-item">
                                                                <a className=" social-links btn btn-round" href="/"><FaGithub /></a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="social-links btn btn-round" href="/"><FaInstagram /></a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="social-links btn btn-round " href="/"><FaLinkedin /></a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="social-links btn btn-round" href="/"><FaFacebookF /></a>
                                                            </li>
                                                            <li clasNames="nav-item">
                                                                <a className="social-links btn btn-round" href="/"><FaTwitter /></a>
                                                            </li>
                                                            </ul>
                                                        </div>
                                                        <p className="my-4 header-intro">Hi.<br />
                                                            I'm a Full Stack Web Developer. I have a passion for web design and love to create for web and mobile devices
                                                            </p>
                                                            <div className="header-btn">
                                                                <a href="#about-me" className="btn btn-outline-secondary  btn-lg">About Me <span><FaArrowRight/></span></a>
                                                            </div>
                                                        

                            </div>
                            
                        </div> 
                    </div>
                    
                </div>
            </section>
    

            <section id="about-me">
                <div className="container p-5 ">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2 className="pt-5 what-header">What i can do for you.</h2>
                            <div className="spacer"></div>
                        </div>
                        <div  className="container p-5 what-main">
                                    <div className="col-12">
                                    <div className="about-toogle">
                                        <Button  className="tooglebtn ripple btn-lg" id="webdev" style={{ marginBottom: '1rem' }}>
                                        Web Development <MdExpandMore />
                                        </Button>
                                        <UncontrolledCollapse toggler="#webdev">
                                        <Card className="tooglecard">
                                            <CardBody className="toogle-content">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                                            similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                                            dignissimos esse fuga! Minus, alias.
                                            </CardBody>
                                        </Card>
                                        </UncontrolledCollapse>
                                    </div>

                        </div>

                        <div className="col-12 justify-content-end">
                                    <div className="about-toogle">
                                        <Button  className="tooglebtn ripple btn-lg" id="app" style={{ marginBottom: '1rem' }}>
                                        App Development <MdExpandMore />
                                        </Button>
                                        <UncontrolledCollapse toggler="#app">
                                        <Card className="tooglecard">
                                            <CardBody className="toogle-content">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                                            similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                                            dignissimos esse fuga! Minus, alias.
                                            </CardBody>
                                        </Card>
                                        </UncontrolledCollapse>
                                    </div>

                        </div>

                        <div className="col-12 justify-content-end">
                                    <div className="about-toogle">
                                        <Button  className="tooglebtn ripple btn-lg" id="something" style={{ marginBottom: '1rem' }}>
                                        RESTful API <MdExpandMore />
                                        </Button>
                                        <UncontrolledCollapse toggler="#something">
                                        <Card className="tooglecard">
                                            <CardBody className="toogle-content">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                                            similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                                            dignissimos esse fuga! Minus, alias.
                                            </CardBody>
                                        </Card>
                                        </UncontrolledCollapse>
                                    </div>

                        </div>
                        
                        </div>
                    

                    </div>

            </div>
            </section>
   

            <section className="education">
                <div className="container p-5">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h1 className="edu-header">My Education</h1>
                            <div class="spacer"></div>
                        </div>
                        <div className="col-12">
                           <div id="edu-main" className="container p-4">
                               <div className="row">
                                   <div className="col-12  cv">
                                        <Button href="/" className="btn-lg cvbtn ripple">
                                           Download cv
                                        </Button>
                                   </div>
                                <div className="col-md-6">
                                <Card className="edu-card">
                                    <CardBody>
                                    <CardTitle className="title-edu">Schooling</CardTitle>
                                    <h5 clasNames="info-edu">Subodh Public Shcool</h5>
                                    <p className="edu-p">I completed my primary schooling with PCM in my senior secondary from here.</p>
                                  
                                    </CardBody>
                                </Card>

                                </div>
                                <div className="col-md-6">
                                <Card className="edu-card">
                                    <CardBody>
                                    <CardTitle className="title-edu">Bachelor of Computer Science</CardTitle>
                                    <h5 clasNames="info-edu">Manipal University Jaipur</h5>
                                    <p>I am currently pursuing this course and i am in 2nd year.</p>
                                  
                                    </CardBody>
                                </Card>

                                </div>
                               </div>

                                
                           </div>
                        </div>
                    </div>
                </div>
            </section>
            <div>
      <Jumbotron className="jumbo">
          <div className="container">
              <h1 className="display-3 contact">I can help!</h1>
        <p className="lead contact">I’m currently available for freelance work.</p>
        <hr className="my-2" />
        <p className="lead">
        If you have a project that you want to get started, think you need my help with something<br /> or just fancy saying hey, then get in touch.

          
        </p>
        <Button className="btn-lg cvbtn ripple"><MdMail/> Message me</Button>
        <div className="row">
        <div className="col-md-12">

                <ul className="nav justify-content-center  ">
                <li className="nav-item">
                <a className=" social-links btn btn-round" href="/"><FaGithub /></a>
                </li>
                <li className="nav-item">
                <a className="social-links btn btn-round" href="/"><FaInstagram /></a>
                </li>
                <li className="nav-item">
                <a className="social-links btn btn-round " href="/"><FaLinkedin /></a>
                </li>
                <li className="nav-item">
                <a className="social-links btn btn-round" href="/"><FaFacebookF /></a>
                </li>
                <li clasNames="nav-item">
                <a className="social-links btn btn-round" href="/"><FaTwitter /></a>
                </li>
                </ul>
            </div>
        </div>
          </div>
        
      </Jumbotron>
    </div>

    </div> 
        )
    }
}




export default Home