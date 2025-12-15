import React from "react";

const DashboardPreview = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            One Platform. <span className="text-indigo-600">Multiple Dashboards.</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            EduTasker provides role-based dashboards for Students, Teachers,
            and Admins — all optimized for productivity.
          </p>
        </div>

        {/* Preview Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Student Dashboard */}
          <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">
              🎓 Student Dashboard
            </h3>

            <div className="space-y-4">
              <div className="bg-indigo-50 p-4 rounded-lg">
                📘 Pending Assignments
                <span className="block text-sm text-gray-600">
                  3 assignments due this week
                </span>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                ✅ Completed Tasks
                <span className="block text-sm text-gray-600">
                  8 assignments submitted
                </span>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                🤖 AI Suggestions
                <span className="block text-sm text-gray-600">
                  Improve formatting & clarity
                </span>
              </div>
            </div>
          </div>

          {/* Teacher Dashboard */}
          <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">
              👨‍🏫 Teacher Dashboard
            </h3>

            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                📝 Active Assignments
                <span className="block text-sm text-gray-600">
                  5 assignments ongoing
                </span>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                📥 Submissions
                <span className="block text-sm text-gray-600">
                  24 pending reviews
                </span>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg">
                💬 Feedback
                <span className="block text-sm text-gray-600">
                  Provide remarks & grades
                </span>
              </div>
            </div>
          </div>

          {/* Admin Dashboard */}
          <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-600 mb-4">
              🛡 Admin Dashboard
            </h3>

            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                👥 User Management
                <span className="block text-sm text-gray-600">
                  Manage students & teachers
                </span>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                📊 Platform Analytics
                <span className="block text-sm text-gray-600">
                  Track system performance
                </span>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                ⚙ System Controls
                <span className="block text-sm text-gray-600">
                  Roles & permissions
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default DashboardPreview;
