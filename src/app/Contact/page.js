"use client"
import React, { useRef } from 'react';

export default function Home() {

  const formRef = useRef(null);


  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = {
      email: formData.get('email'),
      phone: formData.get('phone'),
      first: formData.get('first'),
      last: formData.get('last'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/Contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Failed to submit form: ${response.status}`);
      }


      if (formRef.current) {
        formRef.current.reset();
      }

      alert('Thanks for contacting us, we will get back to you soon!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(`Error submitting form: ${error.message}`);
    }
  }

  return (
    <div className="bg-white flex justify-center items-center h-screen bg-brown">
      <form className="container max-w-md mx-auto p-6 bg-PinkGrey rounded-lg shadow-lg" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mb-6 text-center text-Black">Get in touch</h1>
        <div className="email block mb-4">
          <label htmlFor="frm-email">Email</label>
          <input
            id="frm-email"
            type="email"
            name="email"
            autoComplete="email"
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-Black-500"
          />
        </div>
        <div className="block phone mb-4">
          <label htmlFor="frm-phone">Phone</label>
          <input
            id="frm-phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-Brown-500"
          />
        </div>
        <div className="name block mb-4 flex">
          <div className="w-1/2 pr-2">
            <label htmlFor="frm-first">First Name</label>
            <input
              id="frm-first"
              type="text"
              name="first"
              autoComplete="given-name"
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 mr-2"
            />
          </div>
          <div className="w-1/2 pl-2">
            <label htmlFor="frm-last">Last Name</label>
            <input
              id="frm-last"
              type="text"
              name="last"
              autoComplete="family-name"
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div className="message block mb-6">
          <label htmlFor="frm-message">Message</label>
          <textarea
            id="frm-message"
            rows="6"
            name="message"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <div className="button block text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-LightGrey text-black rounded-lg hover:bg-LightBrown focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
