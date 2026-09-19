
const footerSections = [
  {
    title: "Services",
    links: ["Branding", "Design", "Marketing", "Advertisement"],
  },
  {
    title: "Company",
    links: ["About us", "Contact", "Jobs", "Press kit"],
  },
  {
    title: "Legal",
    links: ["Terms of use", "Privacy policy", "Cookie policy"],
  },
];

const Footer2 = () => {
  return (
    <footer
      className="bg-indigo-900 text-neutral-content p-10"
      aria-label="Site footer"
    >
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-4">
        <div className="md:col-span-1">
          <h2 className="text-lg font-semibold mb-4">studyFlow</h2>
          <p className="text-sm opacity-80">
            Learn smarter, stay organized, and build better habits.
          </p>
        </div>

        {footerSections.map((section) => (
          <nav key={section.title} aria-label={section.title}>
            <h6 className="footer-title text-base font-semibold mb-3">
              {section.title}
            </h6>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link}>
                  <a href="#" className="link link-hover">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="mt-8 border-t border-indigo-700 pt-4 text-sm opacity-80">
        © {new Date().getFullYear()} studyFlow. All rights reserved. 2026 ||
      </div>
    </footer>
  );
};

export default Footer2;