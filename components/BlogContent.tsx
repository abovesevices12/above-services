import React from 'react';
import Link from 'next/link';
import { ContentBlock } from '@/lib/blog-posts';

function renderText(text: string): React.ReactNode {
  const parts = text.split(/(\[\[.*?\|.*?\]\])/g);
  return parts.map((part, i) => {
    const match = part.match(/^\[\[(.*?)\|(.*?)\]\]$/);
    if (match) {
      return (
        <Link
          key={i}
          href={match[2]}
          className="text-amber-600 hover:text-amber-700 font-medium underline underline-offset-2 decoration-amber-300"
        >
          {match[1]}
        </Link>
      );
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

export default function BlogContent({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-1">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'h2':
            return (
              <h2
                key={i}
                className="text-2xl font-bold text-navy-950 mt-10 mb-4 first:mt-0"
              >
                {renderText(block.text)}
              </h2>
            );

          case 'h3':
            return (
              <h3
                key={i}
                className="text-xl font-bold text-navy-950 mt-7 mb-3"
              >
                {block.text}
              </h3>
            );

          case 'p':
            return (
              <p key={i} className="text-gray-700 leading-relaxed mb-5 text-[1.0625rem]">
                {renderText(block.text)}
              </p>
            );

          case 'ul':
            return (
              <ul key={i} className="mb-5 space-y-2.5 pl-1">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-gray-700 text-[1.0625rem] leading-relaxed">
                    <svg
                      className="w-4 h-4 text-amber-500 flex-shrink-0 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{renderText(item)}</span>
                  </li>
                ))}
              </ul>
            );

          case 'ol':
            return (
              <ol key={i} className="mb-5 space-y-2.5 list-decimal list-inside pl-1">
                {block.items.map((item, j) => (
                  <li key={j} className="text-gray-700 text-[1.0625rem] leading-relaxed">
                    {renderText(item)}
                  </li>
                ))}
              </ol>
            );

          case 'callout':
            return (
              <div
                key={i}
                className="my-8 flex gap-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-5"
              >
                <svg
                  className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-navy-950 font-medium leading-relaxed">
                  {renderText(block.text)}
                </p>
              </div>
            );

          case 'cta':
            return (
              <div
                key={i}
                className="my-10 bg-navy-950 text-white rounded-2xl p-7"
              >
                <h3 className="text-xl font-bold mb-2">{block.heading}</h3>
                <p className="text-blue-200 mb-5 text-sm leading-relaxed">{block.body}</p>
                <Link
                  href={block.href}
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-semibold py-2.5 px-5 rounded-lg transition-colors text-sm"
                >
                  {block.btnText}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
