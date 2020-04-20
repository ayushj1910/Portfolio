import React,{Component} from 'react'
import './navbar.css'
import { Navbar, NavbarBrand,NavItem , Nav } from 'reactstrap';
import { FaHome,FaPencilRuler,FaCode } from 'react-icons/fa';
 import {NavLink} from 'react-router-dom'



class NavbarComponent extends Component{
    render(){
        return(
            <div>
            <Navbar dark className="bg-nav fixed-top mb-4 " >
              <div className="container pl-0">
                <NavbarBrand href="/"> SID SUN // PORTFOLIO</NavbarBrand>
                 <Nav className="mr-0 d-none d-md-inline-flex" >
                
                  <NavLink to="/"  className="navlink-color" >HOME</NavLink>
               
               
                  <NavLink to="/skills" className="navlink-color">SKILL</NavLink>
               
               
                  <NavLink to="/projects" className="navlink-color" >PROJECTS</NavLink>
                
                </Nav>
              </div>
             
            </Navbar>
            <div className="container bottom-nav">
    <div className="row">
                 <Nav className="fixed-bottom align-self-center  d-xs-inline-flex d-md-none">
                     
                         <div className="col-4">
                             <NavItem>
                                 
                                       <NavLink to="/" exact activeClassName="active" className="bottom-nav-links  align-self-center" > <FaHome fa-5x /> </NavLink>
                                 
                              
                                </NavItem>
                         </div>
                         <div className="col-4">
                         <NavItem>
                              
                                 <NavLink to="/skills" activeClassName="active" className="bottom-nav-links  align-self-center" ><FaPencilRuler /></NavLink>
    
                              
                                </NavItem>
                         </div>
                         <div className="col-4">
                         <NavItem>
                             
                               <NavLink to="/projects" activeClassName="active" className="bottom-nav-links  align-self-center" ><FaCode /></NavLink>
    
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