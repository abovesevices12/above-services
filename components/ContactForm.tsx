'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('https://formspree.io/f/mkoyvnbl', {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please call us at (781) 921-6228.');
      }
    } catch {
      setError('Something went wrong. Please call us at (781) 921-6228.');
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div role="status" aria-live="polite" className="flex flex-col items-center justify-center h-64 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-navy-950 mb-2">Message Sent!</h3>
        <p className="text-gray-600 text-sm">
          Thank you for reaching out. We'll call you back within 2 hours during business hours.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            autoComplete="given-name"
            placeholder="John"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            autoComplete="family-name"
            placeholder="Smith"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="john@example.com"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          autoComplete="tel"
          placeholder="(617) 000-0000"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
        />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
          Service Needed
        </label>
        <select
          id="service"
          name="service"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-gray-700"
        >
          <option value="">Select a service...</option>
          <option value="chimney-inspection">Chimney Inspection</option>
          <option value="chimney-cleaning">Chimney Cleaning</option>
          <option value="chimney-repair">Chimney Repair</option>
          <option value="chimney-rebuilds">Chimney Rebuilds</option>
          <option value="chimney-liner-installation">Chimney Liner Installation</option>
          <option value="chimney-cap-installation">Chimney Cap Installation</option>
          <option value="chimney-crown-repair">Chimney Crown Repair</option>
          <option value="smoke-chamber-repair">Smoke Chamber Repair</option>
          <option value="fireplace-repair">Fireplace Repair</option>
          <option value="other">Other / Not Sure</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your service needs..."
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
        />
      </div>

      {error && (
        <p className="text-red-600 text-sm" role="alert">{error}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-amber-500 hover:bg-amber-600 disabled:opacity-60 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
      >
        {submitting ? 'Sending…' : 'Request Service'}
      </button>
      <p className="text-xs text-gray-500 text-center">
        By submitting, you agree to be contacted about your service request.
      </p>
    </form>
  );
}
