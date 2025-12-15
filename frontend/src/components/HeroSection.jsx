import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Manage Assignments. <br />
            Track Deadlines. <br />
            <span className="text-yellow-300">Learn Smarter.</span>
          </h1>

          <p className="text-lg text-indigo-100 mb-8">
            EduTasker is a smart platform for students, teachers, and admins to
            organize assignments, monitor progress, and collaborate effectively
            with AI-powered suggestions.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-100 transition">
              Get Started
            </button>

            <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-700 transition">
              Login
            </button>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
            <h3 className="text-xl font-semibold mb-4">
              Your Academic Dashboard
            </h3>

            <div className="space-y-4">
              <div className="bg-white/20 p-4 rounded-lg">
                📘 Assignment: Web Engineering  
                <span className="block text-sm text-indigo-200">
                  Deadline: 2 days left
                </span>
              </div>

              <div className="bg-white/20 p-4 rounded-lg">
                🧠 AI Suggestion  
                <span className="block text-sm text-indigo-200">
                  Improve structure & formatting
                </span>
              </div>

              <div className="bg-white/20 p-4 rounded-lg">
                ✅ Submission Status  
                <span className="block text-sm text-indigo-200">
                  3/5 assignments completed
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
