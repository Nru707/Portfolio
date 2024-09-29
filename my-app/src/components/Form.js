import './FormStyle.css';

import React from 'react';

const Form = () => {
  //const [result, setResult] = React.useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    //setResult('Sending....');
    const formData = new FormData(event.target);

    // Ensure the access key is correct
    const accessKey = '8fa57ebf-2f35-46bf-8f9d-fdf89a913ae1';
    formData.append('access_key', accessKey);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        alert('Form Submitted Successfully');
        event.target.reset();
      } else {
        console.error('Error', data);
        alert('An error occurred while submitting the form.');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <label>Your Name</label>
        <input type="text" name="name" required></input>
        <label>Email</label>
        <input type="email" name="email" required></input>
        <label>Subject</label>
        <input type="text" name="subject" required></input>
        <label>Message</label>
        <textarea rows="6" name='message' placeholder="Type Your Message Here" required></textarea>
        <button className="btn" type="submit"> Submit</button>
      </form>
    
    </div>
  );
};

export default Form;
