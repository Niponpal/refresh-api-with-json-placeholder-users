import React from "react";

const Hero = () => {
  return (
    <div className="hero bg-gray-50 text-gray-800 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello Users edited</h1>
          <p className="py-6">
            Discover amazing users, explore profiles, and see their
            contributions. This is a simple React + Tailwind + DaisyUI example
            to get you started!
          </p>
          <button className="btn btn-primary">Users</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
