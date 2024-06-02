import React from 'react';

const Modal = ({ isOpen, onClose, imageUrl }) => {
  const modalClasses = isOpen
    ? 'pointer-events-auto visible opacity-100 translate-y-0 scale-100'
    : 'pointer-events-none invisible opacity-0 scale-90';

  return (
    <div>
      <input
        type="checkbox"
        id="tw-modal"
        className="peer fixed appearance-none opacity-0"
        checked={isOpen}
        onChange={onClose}
      />

      <label
        htmlFor="tw-modal"
        className={`fixed inset-0 flex items-center justify-center overflow-hidden bg-black/90 transition-all duration-200 ease-in-out ${modalClasses}`}
        onClick={onClose}
      >
        <label
          className="max-h-[calc(100vh - 5em)] h-fit max-w-lg overflow-y-auto rounded-md bg-white p-6 text-black shadow-2xl"
          htmlFor=""
          onClick={(e) => e.stopPropagation()}
        >
          <img src={imageUrl} alt="Diploma" className="max-w-full h-auto" />
        </label>
      </label>
    </div>
  );
};

export default Modal;
