"use client";
import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    setTimeout(() => {
      setStatus('Message sent successfully!');
      setTimeout(() => setStatus(''), 2500);
      // In a real app, you would also clear the form.
      // e.target.reset();
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 bg-white dark:bg-white/5 p-6 rounded-2xl border border-gray-200/70 dark:border-white/10">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-gray-800 dark:text-gray-200">Full name</label>
        <input id="name" required className="mt-1 w-full bg-white dark:bg-transparent border border-gray-300 dark:border-white/15 text-gray-900 dark:text-gray-100 rounded-xl p-3 focus:ring-2 focus:ring-gblue focus:border-gblue outline-none" />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium text-gray-800 dark:text-gray-200">Email address</label>
        <input id="email" type="email" required className="mt-1 w-full bg-white dark:bg-transparent border border-gray-300 dark:border-white/15 text-gray-900 dark:text-gray-100 rounded-xl p-3 focus:ring-2 focus:ring-gblue focus:border-gblue outline-none" />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-gray-800 dark:text-gray-200">Project description</label>
        <textarea id="message" rows={4} required className="mt-1 w-full bg-white dark:bg-transparent border border-gray-300 dark:border-white/15 text-gray-900 dark:text-gray-100 rounded-xl p-3 focus:ring-2 focus:ring-gblue focus:border-gblue outline-none"></textarea>
      </div>
      <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-gblue hover:bg-gblue-hover text-white font-medium py-2.5 px-5 rounded-pill shadow-google">
        <span className="material-symbols-rounded text-[20px]">send</span> Send message
      </button>
      {status && <p className="text-center text-green-600 dark:text-green-400">{status}</p>}
    </form>
  );
}