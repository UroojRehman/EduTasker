import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-primary via-secondary to-primary text-textDark">
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Manage Assignments. <br />
            Track Deadlines. <br />
            <span className="text-accent">Learn Smarter.</span>
          </h1>

          <p className="text-lg mb-8 text-textDark/90">
            EduTasker is a smart platform for students, teachers, and admins to
            organize assignments, monitor progress, and collaborate effectively
            with AI-powered suggestions.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition">
              Get Started
            </button>

            <button className="border border-textDark px-6 py-3 rounded-lg font-semibold hover:bg-textDark hover:text-white transition">
              Login
            </button>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative">
          <div className="bg-background/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-textDark">
              Your Academic Dashboard
            </h3>

            <div className="space-y-4">
              <div className="bg-white/70 p-4 rounded-lg">
                📘 Assignment: Web Engineering  
                <span className="block text-sm text-textDark/70">
                  Deadline: 2 days left
                </span>
              </div>

              <div className="bg-white/70 p-4 rounded-lg">
                🧠 AI Suggestion  
                <span className="block text-sm text-textDark/70">
                  Improve structure & formatting
                </span>
              </div>

              <div className="bg-white/70 p-4 rounded-lg">
                ✅ Submission Status  
                <span className="block text-sm text-textDark/70">
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
