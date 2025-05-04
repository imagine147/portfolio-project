import React, { useState } from 'react';

const Contact = () => {
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();
    const message = form.message.value.trim();
    const termsAccepted = form.terms.checked;

    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!firstName) newErrors.firstName = 'First name is required.';
    if (!lastName) newErrors.lastName = 'Last name is required.';
    if (!email) newErrors.email = 'Email is required.';
    else if (!emailRegex.test(email)) newErrors.email = 'Invalid email format.';
    if (!password) newErrors.password = 'Password is required.';
    else if (!passwordRegex.test(password)) {
      newErrors.password = 'Password must be at least 8 characters and include a letter and a number.';
    }
    if (!message) newErrors.message = 'Message is required.';
    if (!termsAccepted) newErrors.terms = 'You must accept the terms.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear form, show confirmation
    setErrors({});
    setFormSubmitted(true);
    form.reset();

    // You can also send the form data to a backend or API here
    console.log({ firstName, lastName, email, password, message, termsAccepted });

    // Optional: Hide success message after a delay
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className='w-full container mx-auto px-6 lg:px-10 py-16'>
      <div className='flex flex-col gap-4 text-center'>
        <p className='text-sm font-bold text-[#282938]'>Get in Touch</p>
        <h1 className='lg:text-4xl text-3xl font-bold text-[#282938]'>Contact me</h1>
        <p className='text-[#1C1E53]'>Feel free to reach out by filling the form below.</p>
      </div>

      <form className='border border-gray-200 rounded-md p-6 mt-10' onSubmit={handleSubmit} noValidate>
        <div className='flex flex-col gap-4 text-left text-[#282938]'>
          <div className='flex flex-col lg:flex-row gap-6'>
            <div className='lg:w-1/2 flex flex-col gap-2'>
              <label htmlFor="firstName">First name</label>
              <input name="firstName" id="firstName" className='py-2 px-2 border border-gray-200 rounded-md' type="text" />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>

            <div className='lg:w-1/2 flex flex-col gap-2'>
              <label htmlFor="lastName">Last name</label>
              <input name="lastName" id="lastName" className='py-2 px-2 border border-gray-200 rounded-md' type="text" />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>
          </div>

          <div className='flex flex-col lg:flex-row gap-6'>
            <div className='lg:w-1/2 flex flex-col gap-2'>
              <label htmlFor="email">Email</label>
              <input name="email" id="email" className='py-2 px-2 border border-gray-200 rounded-md' type="email" />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div className='lg:w-1/2 flex flex-col gap-2'>
              <label htmlFor="password">Password</label>
              <input name="password" id="password" className='py-2 px-2 border border-gray-200 rounded-md' type="password" />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
          </div>
        </div>

        <div className='w-full flex flex-col text-left gap-2 py-4'>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            className='py-2 px-2 border border-gray-200 rounded-md h-32 resize-none'
            placeholder='Type your message...'
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

          <div className='flex items-center gap-2 py-4'>
            <input name="terms" id="terms" type="checkbox" />
            <label htmlFor="terms">I accept the terms</label>
          </div>
          {errors.terms && <p className="text-red-500 text-sm">{errors.terms}</p>}

          <button type="submit" className='bg-[#5E3BEE] text-white py-2 rounded-md'>
            Submit
          </button>

          {formSubmitted && (
            <p className="text-green-600 text-sm mt-3">Thank you! Your message has been sent.</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Contact;

