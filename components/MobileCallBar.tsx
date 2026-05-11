'use client';

export default function MobileCallBar() {
  function openModal() {
    window.dispatchEvent(new CustomEvent('openBookingModal'));
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden" style={{ filter: 'drop-shadow(0 -4px 16px rgba(0,0,0,0.18))' }}>
      {/* Two-action bar */}
      <div className="grid grid-cols-2">
        <a
          href="tel:+17819216228"
          className="flex items-center justify-center gap-2 bg-amber-500 active:bg-amber-600 text-white py-4 transition-colors duration-100"
        >
          <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <div className="text-left">
            <div className="font-black text-sm leading-none">Call Now</div>
            <div className="text-amber-100 text-xs leading-none mt-0.5">Save 10%</div>
          </div>
        </a>
        <button
          onClick={openModal}
          className="flex items-center justify-center gap-2 bg-navy-950 active:bg-[#0f2440] text-white py-4 transition-colors duration-100"
        >
          <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <div className="text-left">
            <div className="font-black text-sm leading-none">Book Online</div>
            <div className="text-blue-300 text-xs leading-none mt-0.5">Save 10%</div>
          </div>
        </button>
      </div>
      {/* Trust strip */}
      <div className="bg-[#060d1a] text-center py-1.5 text-xs text-blue-400 font-medium tracking-wide">
        <span className="text-amber-400">★★★★★</span> 4.9 · 500+ Google Reviews · CSIA Certified · Licensed & Insured
      </div>
    </div>
  );
}
