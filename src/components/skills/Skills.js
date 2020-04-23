import React,{Component} from 'react'
import './skills.css'
import $ from  'jquery'
import 'easy-pie-chart/dist/jquery.easypiechart'
import { DiJqueryLogo } from 'react-icons/di';
import { FaHtml5,FaCss3Alt,FaBootstrap,FaReact,FaNode,FaGitAlt, FaGithub, FaInstagram, FaTwitter,FaFacebookF, FaLinkedin} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import {  Button,Jumbotron } from 'reactstrap';
import {MdMail} from 'react-icons/md'





class Skills extends Component{
    componentDidMount(){
        $(function() {
            $('.chart').easyPieChart({
                barColor: '#6C63FF',
    	   size: '220',
            easing: 'easeOutBounce',
            scaleLength: 6,
            lineWidth: 8,
            trackColor: "#555555",

            animate: { duration: 5000, enabled: true },
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
            });
        });
    }
    render(){
        return(
            <section id="skills-section"  className="mt-5 ">
                 <div className="container  mt-5 p-5">
                     <div className="row">
                         <div className="col-12">
                              <h1 className="header-skill">What i know</h1>
                              <div className="spacers"> </div>
                         </div>
                         <div id="skill-main" className="container p-4">
                             <div className="row">
                                <div class="col-md-6 col-lg-4 text-center">
                                    <span class="chart" data-percent="100">
                                            <span class="percent"></span>
                                                <h5>
                                                     <div style={{color: '#F16529'}} className="skill-icon">
                                                         <FaHtml5/>
                                                      </div>
                                                                            
                                                     HTML
                                                </h5>
                                            </span>
                                                                                       
                                 </div>

                                 <div class="col-md-6 col-lg-4 text-center">
                                    <span class="chart" data-percent="100">
                                            <span class="percent"></span>
                                                <h5>
                                                     <div style={{color: '#87BEE3'}} className="skill-icon">
                                                         <FaCss3Alt/>
                                                      </div>
                                                                            
                                                     CSS
                                                </h5>
                                            </span>
                                                                                       
                                 </div>

                                 <div class="col-md-6 col-lg-4 text-center">
                                    <span class="chart" data-percent="40">
                                            <span class="percent"></span>
                                                <h5>
                                                     <div style={{color: '#F2E16A'}} className="skill-icon">
                                                         <IoLogoJavascript/>
                                                      </div>
                                                                            
                                                     javaScript
                                                </h5>
                                            </span>
                                                                                       
                                 </div>
                                 <div class="col-md-6 col-lg-4 text-center">
                                    <span class="chart" data-percent="70">
                                            <span class="percent"></span>
                                                <h5>
                                                     <div style={{color: '#78CFF5'}} className="skill-icon">
                                                         <DiJqueryLogo/>
                                                      </div>
                                                                            
                                                     jQuery
                                                </h5>
                                            </span>
                                                                                       
                                 </div>
                                 <div class="col-md-6 col-lg-4 text-center">
                                    <span class="chart" data-percent="100">
                                            <span class="percent"></span>
                                                <h5>
                                                     <div style={{color: '#563D7C'}} className="skill-icon">
                                                         <FaBootstrap/>
                                                      </div>
                                                                            
                                                     Bootstrap
                                                </h5>
                                            </span>
                                                                                       
                                 </div>
                                 <div class="col-md-6 col-lg-4 text-center">
                                    <span class="chart" data-percent="80">
                                            <span class="percent"></span>
                                                <h5>
                                                     <div style={{color: '#61DAFB'}} className="skill-icon">
                                                         <FaReact/>
                                                      </div>
                                                                            
                                                     React js
                                                </h5>
                                            </span>
                                                                                       
                                 </div>
                                 <div class="col-md-6 col-lg-4 text-center">
                                    <span class="chart" data-percent="60">
                                            <span class="percent"></span>
                                                <h5>
                                                     <div style={{color: '#72A962'}} className="skill-icon">
                                                         <FaNode/>
                                                      </div>
                                                                            
                                                     Node js
                                                </h5>
                                            </span>
                                                                                       
                                 </div>
                                 <div class="col-md-6 col-lg-4 text-center">
                                    <span class="chart" data-percent="80">
                                            <span class="percent"></span>
                                                <h5>
                                                     <div style={{color: '#F05033'}} className="skill-icon">
                                                         <FaGitAlt/>
                                                      </div>
                                                                            
                                                     Git
                                                </h5>
                                            </span>
                                                                                       
                                 </div>

                             </div>
                         </div>
                         
                
                     </div>
                  
            </div>
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
            </section>
           
           
        )
    }
}




export default Skills