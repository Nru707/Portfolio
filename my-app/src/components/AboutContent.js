import { Link } from 'react-router-dom';
import './AboutContentStyles.css';
import image1 from '../Assets/image1.jpg';
import image2 from '../Assets/image2.jpg';


import React from 'react';

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who Am I ?</h1>
            <p>I'm a fresher. And I trying to learn new thing in Peogramming  for future development </p>
            <Link to='/contact'>
                <button className='btn'>Contact</button>
            </Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={image2} className='img' alt='true'/>
                    
                </div>
                <div className='img-stack bottom'>
                    <img src={image1} className='img' alt='true'/>
                    
                </div>
            </div>
        </div>

    </div>
  );
};

export default AboutContent;