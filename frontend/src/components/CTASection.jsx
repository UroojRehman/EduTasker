import React from "react";

const CTASection = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 py-20 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Ready to Simplify Assignment Management?
        </h2>

        {/* Sub Text */}
        <p className="text-lg text-indigo-100 max-w-2xl mx-auto mb-10">
          Join EduTasker today and manage assignments, deadlines, and learning
          workflows smarter — whether you are a student, teacher, or admin.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-indigo-700 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-100 transition">
            Create Free Account
          </button>

          <button className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-700 transition">
            Login
          </button>
        </div>

      </div>
    </section>
  );
};

export default CTASection;
