import React from "react";

const features = [
  {
    title: "Assignment Management",
    desc: "Create, assign, submit, and review assignments in one organized place.",
    icon: "📘",
  },
  {
    title: "Deadline Tracking",
    desc: "Stay ahead with smart deadline reminders and progress tracking.",
    icon: "⏰",
  },
  {
    title: "AI Smart Suggestions",
    desc: "Get AI-powered tips to improve assignment quality and structure.",
    icon: "🤖",
  },
  {
    title: "Collaborative Learning",
    desc: "Work on group tasks, share feedback, and learn together.",
    icon: "👥",
  },
  {
    title: "Role-Based Dashboards",
    desc: "Separate dashboards for Admin, Teacher, and Student roles.",
    icon: "🛡️",
  },
  {
    title: "Progress & Analytics",
    desc: "Visual insights to monitor submissions, performance, and growth.",
    icon: "📊",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose <span className="text-indigo-600">EduTasker?</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage assignments, track progress, and
            enhance learning — all in one smart platform.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
