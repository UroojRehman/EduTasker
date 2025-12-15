import React from "react";

const steps = [
  {
    step: "01",
    title: "Teacher Creates Assignment",
    desc: "Teachers create assignments with deadlines and instructions for students.",
    icon: "📝",
  },
  {
    step: "02",
    title: "Students Work & Submit",
    desc: "Students complete tasks, track deadlines, and submit their assignments.",
    icon: "🎓",
  },
  {
    step: "03",
    title: "AI Smart Suggestions",
    desc: "AI analyzes submissions and provides improvement suggestions.",
    icon: "🤖",
  },
  {
    step: "04",
    title: "Review & Feedback",
    desc: "Teachers review submissions, give feedback, and publish results.",
    icon: "✅",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How <span className="text-indigo-600">EduTasker</span> Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A simple 4-step process that makes assignment management easy,
            collaborative, and intelligent.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative bg-gray-50 rounded-2xl p-6 shadow hover:shadow-lg transition"
            >
              {/* Step Number */}
              <div className="absolute -top-5 left-6 bg-indigo-600 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold">
                {item.step}
              </div>

              {/* Icon */}
              <div className="text-4xl mb-4 mt-6">{item.icon}</div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
