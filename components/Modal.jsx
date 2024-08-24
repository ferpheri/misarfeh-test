import React from "react";

const Modal = ({ show, onClose, title, message, isError }) => {
  if (!show) {
    return null;
  }
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-sm w-full">
        <div
          className={`p-4 ${isError ? "bg-red-500" : "bg-emerald-900"} text-white`}
          style={{ direction: "rtl"  }}
        >
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>
        <div
          className="p-4 text-primary"
          style={{ direction: "rtl"  }}
        >
          <p className="text-black">{message}</p>
        </div>
        <div
          className="flex justify-end p-4"
          style={{ direction: "rtl"  }}
        >
          <button
            onClick={onClose}
            className={`${isError ? "bg-red-500 text-white" : "bg-green-700 hover:bg-green-800 text-white"} font-primary px-3 py-2 rounded-md`}
          >
            {"بستن"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
