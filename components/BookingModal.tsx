'use client';

import { useEffect, useState } from 'react';

export default function BookingModal() {
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [phone, setPhone] = useState('');
  const [zip, setZip] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    function handleOpen() { setOpen(true); }
    window.addEventListener('openBookingModal', handleOpen);
    return () => window.removeEventListener('openBookingModal', handleOpen);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  function close() {
    setOpen(false);
    setSubmitted(false);
    setError('');
    setFirstName('');
    setPhone('');
    setZip('');
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const formData = new FormData();
      formData.append('firstName', firstName);
      formData.append('phone', phone);
      formData.append('zip', zip);
      const res = await fetch('https://formspree.io/f/mkoyvnbl', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please call us directly at (781) 921-6228.');
      }
    } catch {
      setError('Something went wrong. Please call us directly at (781) 921-6228.');
    } finally {
      setSubmitting(false);
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Book a service"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={close} aria-hidden="true" />

      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        <button
          onClick={close}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close booking form"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="text-center py-4" role="status" aria-live="polite">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy-950 mb-2">We'll be in touch!</h3>
            <p className="text-gray-600 mb-6">Expect a call or text within a few hours. For urgent service, call us directly.</p>
            <a
              href="tel:+17819216228"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold py-3 px-6 rounded-xl transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (781) 921-6228
            </a>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy-950">Book a Service</h3>
              <p className="text-gray-500 text-sm mt-1">We'll reach out to confirm your appointment.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="bm-firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  id="bm-firstName"
                  type="text"
                  required
                  autoComplete="given-name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                  placeholder="John"
                />
              </div>

              <div>
                <label htmlFor="bm-phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  id="bm-phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                  placeholder="(617) 555-0190"
                />
              </div>

              <div>
                <label htmlFor="bm-zip" className="block text-sm font-medium text-gray-700 mb-1">
                  ZIP Code
                </label>
                <input
                  id="bm-zip"
                  type="text"
                  required
                  inputMode="numeric"
                  pattern="[0-9]{5}"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                  placeholder="02134"
                />
              </div>

              {error && (
                <p className="text-red-600 text-sm" role="alert">{error}</p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-60 text-white font-bold py-3.5 rounded-xl transition-colors text-base"
              >
                {submitting ? 'Sending…' : 'Request Service'}
              </button>
            </form>

            <p className="text-center text-xs text-gray-400 mt-4">
              Or call us directly:{' '}
              <a href="tel:+17819216228" className="text-amber-600 font-semibold hover:underline">
                (781) 921-6228
              </a>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
