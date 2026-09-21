const AdminPanel = () => {
  const stats = [
    { title: "Total Students", value: "1,248" },
    { title: "Active Courses", value: "24" },
    { title: "Completed Tasks", value: "8,542" },
    { title: "Pending Tasks", value: "326" },
  ];

  return (
    <div className="min-h-screen bg-indigo-950 text-white">
      {/* Header */}
      <header className="border-b border-indigo-300/30 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">StudyFlow</h1>
            <p className="text-sm text-indigo-200">Admin Dashboard</p>
          </div>

          <button className="rounded-lg bg-indigo-600 px-4 py-2 font-medium transition hover:bg-indigo-500">
            Logout
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden min-h-[calc(100vh-73px)] w-64 border-r border-indigo-300/30 p-5 md:block">
          <nav className="space-y-2">
            <a
              href="#"
              className="block rounded-lg bg-indigo-600 px-4 py-3 font-medium"
            >
              Dashboard
            </a>

            <a
              href="#"
              className="block rounded-lg px-4 py-3 text-indigo-200 transition hover:bg-indigo-900"
            >
              Students
            </a>

            <a
              href="#"
              className="block rounded-lg px-4 py-3 text-indigo-200 transition hover:bg-indigo-900"
            >
              Courses
            </a>

            <a
              href="#"
              className="block rounded-lg px-4 py-3 text-indigo-200 transition hover:bg-indigo-900"
            >
              Tasks
            </a>

            <a
              href="#"
              className="block rounded-lg px-4 py-3 text-indigo-200 transition hover:bg-indigo-900"
            >
              Settings
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Welcome */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold">Dashboard</h2>
            <p className="mt-1 text-indigo-200">
              Manage your StudyFlow platform.
            </p>
          </div>

          {/* Stats */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="rounded-xl border border-indigo-300/40 bg-indigo-900/50 p-5"
              >
                <p className="text-sm text-indigo-200">{stat.title}</p>
                <h3 className="mt-2 text-3xl font-bold">{stat.value}</h3>
              </div>
            ))}
          </div>

          {/* Recent Students */}
          <section className="mt-8 rounded-xl border border-indigo-300/40 bg-indigo-900/50">
            <div className="flex items-center justify-between border-b border-indigo-300/30 p-5">
              <div>
                <h3 className="text-xl font-semibold">Recent Students</h3>
                <p className="text-sm text-indigo-200">
                  Recently registered students
                </p>
              </div>

              <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium hover:bg-indigo-500">
                View All
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-indigo-300/30 text-sm text-indigo-200">
                    <th className="px-5 py-4">Name</th>
                    <th className="px-5 py-4">Email</th>
                    <th className="px-5 py-4">Progress</th>
                    <th className="px-5 py-4">Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b border-indigo-300/20">
                    <td className="px-5 py-4 font-medium">Rahim Ahmed</td>
                    <td className="px-5 py-4 text-indigo-200">
                      rahim@example.com
                    </td>
                    <td className="px-5 py-4">78%</td>
                    <td className="px-5 py-4">
                      <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-300">
                        Active
                      </span>
                    </td>
                  </tr>

                  <tr className="border-b border-indigo-300/20">
                    <td className="px-5 py-4 font-medium">Karim Hasan</td>
                    <td className="px-5 py-4 text-indigo-200">
                      karim@example.com
                    </td>
                    <td className="px-5 py-4">54%</td>
                    <td className="px-5 py-4">
                      <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-300">
                        Active
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4 font-medium">Sadia Islam</td>
                    <td className="px-5 py-4 text-indigo-200">
                      sadia@example.com
                    </td>
                    <td className="px-5 py-4">32%</td>
                    <td className="px-5 py-4">
                      <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-xs text-yellow-300">
                        Pending
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;