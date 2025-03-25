
import React from "react";

const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-flytbase-primary flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-flytbase-secondary mx-auto"></div>
        <p className="text-white mt-4">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
