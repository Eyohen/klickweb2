import React from 'react';

const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-100">
            <div className="w-12 h-12 border-t-4 border-blue-500 rounded-full animate-spin"></div>
        </div>
    );
};

export default LoadingScreen;
