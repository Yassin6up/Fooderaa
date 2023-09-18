
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
function Section() {
  const form = useRef();
  const x =useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lk5unn7', 'template_wc3poom', form.current, '0mlezP-FExwBHDb9A')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });  
    x.current.value=""
    }
  return (
    <>
    <div className='end-s'>
      <div className='end-text'>    <h1>Hurry up! Subscribe our newsletter
and get 25% Off</h1>
<p>Limited time offer for this month. No credit card required.</p>
<form  className='form' ref={form} onSubmit={sendEmail}>
  
  <input ref={x} type='text'placeholder='email address here' name='from_name'/>
<button >Subscribe</button>

</form>


</div>


    </div>
 
  </>
  )
}

export default Section