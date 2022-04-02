import React from "react";

function Landing() {
  return (
    <div>
      {/* BANNER */}
      <main className="max-w-screen-xl mt-10 mx-auto bg-primary text-white rounded-xl flex flex-col items-center justify-center  gap-5 h-96">
        <h1 className="font-bold text-4xl">
          Help house 100,000 refugees fleeing Ukraine
        </h1>
        <button className="border border-white rounded-md px-4 py-2">
          Learn more
        </button>
      </main>
    </div>
  );
}

export default Landing;
