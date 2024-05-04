import './FooterStyle.css';

import React from 'react';
import { FaHome, FaMailBulk, FaPhone,FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
    return (
     <div className='footer'>
         <div className='footer-container'>
             <div className='left'>
                 <div className='location'>
                      <FaHome  size={20} style={{color: '#fff', marginRight: '2rem'}} />
                     <div>
                          <p>Vill + Post = Karmi</p>
                          <p>Kapkot , Bageshwar</p>
                          <p>Uttarakhand (India)</p>
                       </div>
                   </div>
                   <div className='phone'>
                     <h4><FaPhone  size={20} style={{color: '#fff', marginRight: '2rem'}} />
                      +91-8630745126</h4>
                   </div>
                   <div className='email'>
                     <h4><FaMailBulk  size={20} style={{color: '#fff', marginRight: '2rem'}} />
                      nsdanu707@gmail.com</h4>
                   </div>
               </div>
               <div className='right'>
                  <h4>About the Learner. </h4>
                  <p>This  is me Narendra singh. I enjoy discussing  new projects and design challenges.</p>
                  <div className='social'>
                    <a href='www.facebook.com'><FaFacebook size={30} style={{color: '#fff', marginRight: '1rem'}} /></a> 
                     <a href='www.twitter.com'><FaTwitter size={30} style={{color: '#fff', marginRight: '1rem'}} /></a>
                     <a href='www.linkedin.com'><FaLinkedin size={30} style={{color: '#fff', marginRight: '1rem'}} /></a>
                  </div>
               </div>
         </div>
     </div>
   );
};

export default Footer;