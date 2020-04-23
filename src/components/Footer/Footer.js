import React,{Component} from 'react'
import './footer.css'
import { FaCode,FaHeart } from 'react-icons/fa';



class Footer extends Component{
    render(){
        return(
            <section id="footer-section" className="text-center">
                 <p>— Copyright © 2020 theCypherExalt. All Rights Reserved. —</p>
                 <p>
                     <span className="coded"><FaCode /></span> 
                     with 
                     <span className="heart"><FaHeart /> </span>
                     by Ayush
                     </p>
            </section>
        )
    }
}




export default Footer