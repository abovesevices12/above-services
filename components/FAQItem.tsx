import React from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <details className="group border border-gray-200 rounded-2xl overflow-hidden bg-white hover:border-amber-300 transition-colors duration-200">
      <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer select-none">
        <span className="font-semibold text-navy-950 text-base md:text-lg leading-snug pr-2">
          {question}
        </span>
        {/* Plus icon that rotates 45deg to become X when open */}
        <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-amber-100 text-amber-600 transition-colors duration-200 group-open:bg-amber-500 group-open:text-white">
          <svg
            className="w-4 h-4 transition-transform duration-300 group-open:rotate-45"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </summary>
      <div className="px-6 pb-6 border-t border-gray-100">
        <p className="text-gray-600 leading-relaxed text-sm md:text-base pt-4">{answer}</p>
      </div>
    </details>
  );
}
