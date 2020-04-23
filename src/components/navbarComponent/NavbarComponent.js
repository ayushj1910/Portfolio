import React,{Component} from 'react'
import './navbar.css'
import { Navbar, NavbarBrand,NavItem , Nav } from 'reactstrap';
import { FaHome,FaPencilRuler,FaLaptopCode,FaCode } from 'react-icons/fa';
 import {NavLink} from 'react-router-dom'



class NavbarComponent extends Component{
    render(){
        return(
            <div div>
            <Navbar dark className="bg-nav fixed-top mb-4" >
              <div className="container pl-0">
                <NavbarBrand className="brand-logo" href="/"><FaCode /> theCypherExalt</NavbarBrand>
                 <Nav className="mr-0 d-none d-md-inline-flex" >
                
                  <NavLink to="/" activeClassName="up-active"  className="navlink-color" >HOME</NavLink>
               
               
                  <NavLink to="/skills" activeClassName="up-active" className="navlink-color">SKILLS</NavLink>
               
               
                  <NavLink to="/portfolio" activeClassName="up-active" className="navlink-color" >PORTFOLIO</NavLink>
                
                </Nav>
              </div>
             
            </Navbar>
            <div className="container bottom-nav">
    <div className="row">
                 <Nav className="fixed-bottom align-self-center  d-xs-inline-flex d-md-none">
                     
                         <div className="col-4">
                             <NavItem>
                                 
                                       <NavLink to="/" exact activeClassName="active" className="bottom-nav-links ripple align-self-center" > <FaHome fa-5x /> </NavLink>
                                 
                              
                                </NavItem>
                         </div>
                         <div className="col-4">
                         <NavItem>
                              
                                 <NavLink to="/skills" activeClassName="active" className="bottom-nav-links ripple align-self-center" ><FaPencilRuler /></NavLink>
    
                              
                                </NavItem>
                         </div>
                         <div className="col-4">
                         <NavItem>
                             
                               <NavLink to="/portfolio" activeClassName="active" className="bottom-nav-links  ripple  align-self-center" ><FaLaptopCode /></NavLink>
    
                          </NavItem>
                         </div>
                </Nav>
            
             </div>
            </div>
           
           
    </div>  
        )
    }
}





export default NavbarComponent