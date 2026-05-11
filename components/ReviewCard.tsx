import React from 'react';

interface ReviewCardProps {
  name: string;
  location?: string;
  date: string;
  rating?: number;
  review: string;
}

export default function ReviewCard({
  name,
  location = 'Boston, MA',
  date,
  rating = 5,
  review,
}: ReviewCardProps) {
  const initials = name
    .split(' ')
    .map((n) => n.charAt(0).toUpperCase())
    .slice(0, 2)
    .join('');

  return (
    <div className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col">
      {/* Decorative quote mark */}
      <div className="text-5xl font-black leading-none opacity-20 select-none text-amber-500 mb-2">&ldquo;</div>

      {/* Review text */}
      <p className="text-gray-700 text-base leading-relaxed flex-1">{review}</p>

      {/* Divider + reviewer row */}
      <div className="border-t border-gray-100 pt-4 mt-4">
        {/* Stars */}
        <div className="flex items-center gap-0.5 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 fill-current ${i < rating ? 'text-amber-400' : 'text-gray-200'}`}
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Reviewer info row */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-navy-950 to-navy-800 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
              {initials}
            </div>
            <div>
              <p className="font-bold text-gray-900 text-sm">{name}</p>
              <p className="text-xs text-gray-500">
                {location} &bull; {date}
              </p>
            </div>
          </div>
          {/* Google badge */}
          <div className="flex items-center gap-1 text-xs text-gray-400 flex-shrink-0">
            <svg className="w-4 h-4" viewBox="0 0 24 24" aria-label="Google Review">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span>Google</span>
          </div>
        </div>
      </div>
    </div>
  );
}
