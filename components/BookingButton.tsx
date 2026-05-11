'use client';

interface BookingButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function BookingButton({ children, className = '' }: BookingButtonProps) {
  function openModal() {
    window.dispatchEvent(new CustomEvent('openBookingModal'));
  }
  return (
    <button onClick={openModal} className={className}>
      {children}
    </button>
  );
}
