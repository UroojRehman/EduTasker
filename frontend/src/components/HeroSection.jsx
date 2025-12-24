import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-primary via-secondary to-accent text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Manage Assignments. <br />
            Track Deadlines. <br />
            <span className="text-textLight">Learn Smarter.</span>
          </h1>

          <p className="text-lg text-white/90 mb-8 max-w-xl">
            EduTasker is a smart platform for students, teachers, and admins to
            organize assignments, track progress, and collaborate efficiently
            with AI-powered insights.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-5">
            <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition">
              Get Started
            </button>

            <button className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition">
              Login
            </button>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative">
          <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/20">
            <h3 className="text-xl font-semibold mb-4">
              Your Academic Dashboard
            </h3>

            <div className="space-y-4">
              <div className="bg-white/30 p-4 rounded-xl">
                📘 Assignment: Web Engineering
                <span className="block text-sm text-white/80">
                  Deadline: 2 days left
                </span>
              </div>

              <div className="bg-white/30 p-4 rounded-xl">
                🧠 AI Suggestion
                <span className="block text-sm text-white/80">
                  Improve structure & formatting
                </span>
              </div>

              <div className="bg-white/30 p-4 rounded-xl">
                ✅ Submission Status
                <span className="block text-sm text-white/80">
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
