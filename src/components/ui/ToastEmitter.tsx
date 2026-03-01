import React from 'react';
import { Toaster } from 'react-hot-toast';

const ToastEmitter: React.FC = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 5000,
        style: {
          background: '#fff',
          color: '#363636',
        },
      }}
    />
  );
};

export default ToastEmitter;