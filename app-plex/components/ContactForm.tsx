'use client';
import { useState } from 'react';

// Contact form component with TypeScript
export default function ContactForm() {
  // State for form fields
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  // State for form validation errors
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string; message?: string }>({});

  // State for form submission status and message
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [resultMessage, setResultMessage] = useState<string>('');
  
  // Access key for Web3Forms (replace with your actual key)
  const accessKey = "21ae30e5-1d52-499a-bee2-6d9916f9fd25";

  // Function to validate form fields
  const validateForm = () => {
    const newErrors: { name?: string; email?: string; phone?: string; message?: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 phone number format

    if (!name.trim()) {
      newErrors.name = 'Full name is required.';
    }

    if (!email.trim() || !emailRegex.test(email)) {
      newErrors.email = 'A valid email address is required.';
    }

    if (!phone.trim() || !phoneRegex.test(phone)) {
      newErrors.phone = 'Please enter a valid phone number (e.g., +1234567890).';
    }

    if (!message.trim()) {
      newErrors.message = 'Project description is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus('error');
      setResultMessage('Please correct the errors in the form.');
      return;
    }

    setStatus('submitting');
    setResultMessage('');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          phone,
          message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setResultMessage(result.message || 'Message sent successfully!');
        // Reset form fields
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setErrors({});
      } else {
        setStatus('error');
        setResultMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setResultMessage('Failed to connect to the server. Please check your network.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 bg-white dark:bg-white/5 p-6 rounded-2xl border border-gray-200/70 dark:border-white/10">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-gray-800 dark:text-gray-200">Full name</label>
        <input 
          id="name" 
          name="name"
          required 
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full bg-white dark:bg-transparent border border-gray-300 dark:border-white/15 text-gray-900 dark:text-gray-100 rounded-xl p-3 focus:ring-2 focus:ring-gblue focus:border-gblue outline-none" 
        />
        {errors.name && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium text-gray-800 dark:text-gray-200">Email address</label>
        <input 
          id="email" 
          type="email" 
          name="email"
          required 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full bg-white dark:bg-transparent border border-gray-300 dark:border-white/15 text-gray-900 dark:text-gray-100 rounded-xl p-3 focus:ring-2 focus:ring-gblue focus:border-gblue outline-none" 
        />
        {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="phone" className="text-sm font-medium text-gray-800 dark:text-gray-200">Phone number</label>
        <input 
          id="phone" 
          type="tel" 
          name="phone"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-1 w-full bg-white dark:bg-transparent border border-gray-300 dark:border-white/15 text-gray-900 dark:text-gray-100 rounded-xl p-3 focus:ring-2 focus:ring-gblue focus:border-gblue outline-none" 
        />
        {errors.phone && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.phone}</p>}
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-gray-800 dark:text-gray-200">Project description</label>
        <textarea 
          id="message" 
          name="message"
          rows={4} 
          required 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 w-full bg-white dark:bg-transparent border border-gray-300 dark:border-white/15 text-gray-900 dark:text-gray-100 rounded-xl p-3 focus:ring-2 focus:ring-gblue focus:border-gblue outline-none"
        ></textarea>
        {errors.message && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>}
      </div>
      <button 
        type="submit" 
        disabled={status === 'submitting'}
        className="w-full inline-flex items-center justify-center gap-2 bg-gblue hover:bg-gblue-hover text-white font-medium py-2.5 px-5 rounded-pill shadow-google"
      >
        <span className="material-symbols-rounded text-[20px]">send</span> 
        {status === 'submitting' ? 'Submitting...' : 'Send message'}
      </button>

      {resultMessage && (
        <p className={`text-center font-medium ${status === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
          {resultMessage}
        </p>
      )}
    </form>
  );
}