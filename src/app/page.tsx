const team = [
  {
    name: "Albert Lin",
    role: "Board Member",
    bio: "National Geographic Explorer, technologist, and storyteller uncovering lost civilizations through cutting-edge science.",
  },
  {
    name: "Leo Trottier",
    role: "Board Member",
    bio: "Cognitive scientist and entrepreneur bridging animal cognition research with technology design.",
  },
  {
    name: "Tim Mullen",
    role: "Board Member",
    bio: "Neuroscientist and AI researcher building brain-computer interfaces and adaptive learning systems.",
  },
  {
    name: "Eli Spencer",
    role: "Board Member",
    bio: "Educator and curriculum designer focused on transforming how students engage with foundational knowledge.",
  },
  {
    name: "Qasim Anwar",
    role: "Board Member",
    bio: "Technologist and systems thinker working at the intersection of AI, education, and cultural preservation.",
  },
  {
    name: "Derek Lomas",
    role: "Board Member",
    bio: "Positive computing researcher and interaction designer building tools for human flourishing and open education.",
  },
  {
    name: "Luke Barrington",
    role: "Board Member",
    bio: "Machine learning scientist applying AI to large-scale problems in science, music, and citizen engagement.",
  },
];

const projects = [
  {
    name: "Source Library",
    url: "https://sourcelibrary.org",
    description:
      "A living digital archive making foundational texts from ancient traditions accessible, searchable, and citable — from Renaissance herbals to alchemical manuscripts to classical philosophy.",
  },
  {
    name: "Impact Edu",
    url: "https://impact-edu.ai",
    description:
      "AI-powered educational tools built on open learning standards, connecting modern assessment with deeper traditions of understanding how knowledge develops.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/80 backdrop-blur-sm border-b border-stone-200/60">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-[family-name:var(--font-garamond)] text-xl tracking-tight text-stone-900">
            Wisdom Frontiers
          </span>
          <div className="flex gap-6 text-sm text-stone-500">
            <a href="#mission" className="hover:text-stone-900 transition-colors">
              Mission
            </a>
            <a href="#projects" className="hover:text-stone-900 transition-colors">
              Projects
            </a>
            <a href="#team" className="hover:text-stone-900 transition-colors">
              Team
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-[family-name:var(--font-garamond)] text-5xl sm:text-6xl leading-[1.1] tracking-tight text-stone-900 mb-8">
            Ancient knowledge,
            <br />
            <span className="text-amber-700">future frontiers.</span>
          </h1>
          <p className="text-xl leading-relaxed text-stone-600 max-w-2xl">
            Wisdom Frontiers is a nonprofit public benefit corporation ensuring
            that the deep knowledge of past civilizations not only survives, but
            actively shapes the design of future technologies, environments, and
            human connection.
          </p>
        </div>
      </section>

      {/* Divider line */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-stone-200" />
      </div>

      {/* Mission */}
      <section id="mission" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-widest text-stone-400 mb-6">
            Our Purpose
          </p>
          <blockquote className="font-[family-name:var(--font-garamond)] text-3xl sm:text-4xl leading-snug text-stone-800 border-l-2 border-amber-600 pl-6">
            To ensure that ancient knowledge not only survives, but actively
            shapes the design of future technologies, environments, and human
            connection.
          </blockquote>
          <p className="mt-8 text-lg leading-relaxed text-stone-600">
            We build open-source tools and public resources that make
            humanity&apos;s intellectual heritage accessible, connected, and
            actionable. Our work spans digital archives of foundational texts,
            AI-powered education systems grounded in learning science, and
            research into how traditional knowledge can inform modern design.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 bg-stone-100/50">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-widest text-stone-400 mb-12">
            Projects
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-lg p-8 border border-stone-200 hover:border-stone-300 hover:shadow-sm transition-all"
              >
                <h3 className="font-[family-name:var(--font-garamond)] text-2xl text-stone-900 mb-3 group-hover:text-amber-700 transition-colors">
                  {project.name}
                  <span className="inline-block ml-2 text-stone-300 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all">
                    &rarr;
                  </span>
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  {project.description}
                </p>
                <p className="mt-4 text-sm text-stone-400">{project.url}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-widest text-stone-400 mb-12">
            Board of Directors
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {team.map((person) => (
              <div key={person.name}>
                <h3 className="font-[family-name:var(--font-garamond)] text-xl text-stone-900">
                  {person.name}
                </h3>
                <p className="text-sm text-amber-700 mt-1">{person.role}</p>
                <p className="text-sm text-stone-500 mt-2 leading-relaxed">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-stone-400">
            <span className="font-[family-name:var(--font-garamond)] text-stone-600">
              Wisdom Frontiers
            </span>{" "}
            &middot; 501(c)(3) Nonprofit Public Benefit Corporation &middot;
            San Francisco, CA
          </div>
          <div className="flex gap-4 text-sm text-stone-400">
            <a
              href="https://sourcelibrary.org"
              className="hover:text-stone-600 transition-colors"
            >
              Source Library
            </a>
            <a
              href="https://impact-edu.ai"
              className="hover:text-stone-600 transition-colors"
            >
              Impact Edu
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
