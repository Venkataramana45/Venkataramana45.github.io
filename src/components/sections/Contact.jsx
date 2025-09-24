import Section from './Section'
import emailjs from 'emailjs-com';
import React, { useState } from 'react';

export default function Contact({theme}) {

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_subject: '',
    user_message: ''
  });

  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const [warning, setWarning] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.user_name || !formData.user_email || !formData.user_message) {
      setWarning(true);
      setTimeout(() => setWarning(false), 2000);
      return;
    }

    try {
      const response = await emailjs.send(
        'service_wddym1k',
        'template_ib2vhyg',
        formData,
        'iISHKgtfn8kce9fT-'
      );

      console.log('SUCCESS!', response.status, response.text);

      setSuccess(true);

      setFormData({
        user_name: '',
        user_email: '',
        user_subject: '',
        user_message: ''
      });

      setTimeout(() => setSuccess(false), 2000);

    } catch (err) {
      console.error('FAILED...', err);
      setFail(true);
      setTimeout(() => setFail(false), 2000);
    }
  };


  return (
    <Section id="contact" title="Reach out me" className={theme === 'dark' ? 'bg-neutral-900' : 'bg-white'} theme={theme}>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className={`text-2xl font-extrabold mb-4 ${theme === 'dark' ? 'text-white' : ''}`}>+91 8247435986</div>
          <div className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : ''}`}>mvr06apr@gmail.com</div>
          <div className={`mt-8 text-sm max-w-md ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'}`}>Sri nagar colony, Ramanthapur, Hyderabad, Telangana, India.</div>
        </div>
        <form className="p-6 rounded-2xl bg-gradient-to-br  from-fuchsia-500 via-purple-500 to-amber-300" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input placeholder="Name" name='user_name' onChange={handleChange} value={formData.user_name} className="contact-input text-black" />
            <input placeholder="Email" type='email' name='user_email' onChange={handleChange} value={formData.user_email} className="contact-input text-black" />
          </div>
          <textarea placeholder="Message" name='user_message'  value={formData.user_message} onChange={handleChange} className="contact-input mt-4 h-32 text-black resize-none" />
          <button type="button" onClick={handleSubmit} className="mt-6 bg-neutral-900 text-white px-5 py-2 rounded-md">Submit now</button>
        </form>
        
        {success && (
        <div class="bg-green-200 border-green-600 fixed right-0 top-10 text-green-600 border-r-4 p-3 px-10 transition-transform delay-2000" role="alert">
    <p class="font-bold">
        Success
    </p>
    <p>
        Message Sent Successfully!
    </p>
</div>
      )}


      {fail && (
        <div class="bg-red-200 border-red-600 text-red-600 fixed right-0 top-10 border-r-4 p-3 px-10 transition-transform delay-2000" role="alert">
    <p class="font-bold">
        Failed
    </p>
    <p>
        Failed to send Message. Try again.
    </p>
</div>
      )}

      {warning && (
        <div class="bg-yellow-200 border-yellow-600 text-yellow-600 fixed right-0 top-10 border-r-4 p-3 px-10 transition-transform delay-2000" role="alert">
    <p class="font-bold">
        Warning
    </p>
    <p>
        Please fill in all the fields.
    </p>
</div>
      )}

      </div>
      
    </Section>
  )
}


