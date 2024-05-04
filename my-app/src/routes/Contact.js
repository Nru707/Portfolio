import React, {useRef} from 'react';
import Form from '../components/Form';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';


const Contact = () => {
  return (
    <div>
       <Navbar />
       <HeroImg2 heading="CONTACT." text="Lets have a chat" />
       <Form />
       <Footer />
     </div>
  );
};

export default Contact;