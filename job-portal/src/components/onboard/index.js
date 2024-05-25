import React from "react";

function OnBoard() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-200 rounded-lg p-2 lg:p-4">
      <div className="border-b-2 pb-4 border-gray-700">
        <h1 className="font-bold text-gray-700 text-xl tracking-wider">
          Welcome to onboarding page.
        </h1>
        <p className="tracking-wide font-light text-sm">
          You need to fill this form after just signup.
        </p>
      </div>
    </div>
  );
}

export default OnBoard;
