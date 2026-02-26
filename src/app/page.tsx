import Image from "next/image";

const team = [
  {
    name: "Albert Lin",
    photo: "/team/albert-lin.jpg",
    title: "National Geographic Explorer",
    bio: "Founding director of the Center for Human Frontiers at UC San Diego. Uses LIDAR, satellite imaging, and AI to reveal lost civilizations. Returned to the field after losing his leg in 2016 and launched Project Lim[b]itless to make prosthetics accessible worldwide.",
    url: "https://exploreralbert.com",
  },
  {
    name: "Leo Trottier",
    photo: "/team/leo-trottier.webp",
    title: "Cognitive Scientist & Founder, FluentPet",
    bio: "Founded CleverPet and FluentPet, pioneering technology for interspecies communication. Co-directs the They Can Talk Research Initiative, the world's largest study of augmented animal communication.",
    url: "https://fluent.pet",
  },
  {
    name: "Tim Mullen",
    photo: "/team/tim-mullen.jpg",
    title: "Neuroscientist & Entrepreneur",
    bio: "Founded Intheon, the first real-time brain-computer interface platform, and co-founded Sanmai for non-invasive focused ultrasound therapies. Created open-source neurotech tools used worldwide. Ph.D. from UC San Diego.",
    url: "https://intheon.io",
  },
  {
    name: "Eli Spencer",
    photo: "/team/eli-spencer.webp",
    title: "Physician-Scientist, UC San Diego",
    bio: "Directs the Center for Health Design and the Distributed Health Lab at UC San Diego. Builds diagnostic and digital health tools for resource-limited settings across the Americas and Africa.",
    url: "https://profiles.ucsd.edu/eliah.aronoff-spencer",
  },
  {
    name: "Qasim Anwar",
    photo: "/team/qasim-anwar.png",
    title: "Designer & Cultural Archaeologist",
    bio: "Works at the intersection of fashion and cultural preservation through Fashion Archeology. Founded Morni, bridging South Asian artisan craft with contemporary design. Co-created Color Coded Crime, reviving Mughal-era textile traditions.",
    url: "https://mymorni.com",
  },
  {
    name: "Derek Lomas",
    photo: "/team/derek-lomas.webp",
    title: "Professor of Positive AI, TU Delft",
    bio: "Researches AI systems that maximize wellbeing in education and healthcare at Delft University of Technology. Co-founded Playpower Labs and NeuroUX, building educational tools reaching millions of learners.",
    url: "https://www.derek-lomas.com",
  },
  {
    name: "Luke Barrington",
    photo: "/team/luke-barrington.jpg",
    title: "Director, Google Earth AI",
    bio: "Leads geospatial AI at Google — weather forecasting, disaster response, environmental monitoring. Co-founded Tomnod, engaging millions of citizen scientists to map the world. Ph.D. from UC San Diego.",
    url: "https://www.linkedin.com/in/lukebarrington/",
  },
];

const projects = [
  {
    name: "Source Library",
    url: "https://sourcelibrary.org",
    tagline: "The knowledge base",
    description:
      "Thousands of years of human insight into medicine, ethics, the mind, and the natural world — digitized, searchable, and structured for both human readers and AI systems. The foundation everything else builds on.",
  },
  {
    name: "Impact Edu",
    url: "https://impact-edu.ai",
    tagline: "The tools",
    description:
      "Open-source AI for education grounded in learning science. Designed to develop capable, curious, whole human beings — and to measure whether that's actually happening.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-950">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-950/80 backdrop-blur-md border-b border-stone-800/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-[family-name:var(--font-garamond)] text-lg tracking-wide text-stone-200">
            Wisdom Frontiers
          </span>
          <div className="flex gap-6 text-sm text-stone-500">
            <a
              href="#about"
              className="hover:text-amber-500 transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-amber-500 transition-colors"
            >
              Projects
            </a>
            <a href="#team" className="hover:text-amber-500 transition-colors">
              Team
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto">
          <h1 className="font-[family-name:var(--font-garamond)] text-5xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-stone-100 mb-10">
            Using ancient wisdom
            <br />
            for a{" "}
            <span className="text-amber-500">humanistic future.</span>
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed text-stone-400 max-w-2xl">
            Wisdom Frontiers builds open knowledge infrastructure and AI tools
            for human development — grounded in the deepest traditions of
            understanding what it means to flourish.
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 border-t border-stone-800/60">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-stone-600 mb-6">
                Why This Exists
              </p>
              <a
                href="https://sourcelibrary.org/q/BejYYaJPyv8qBuoAqAs"
                target="_blank"
                rel="noopener noreferrer"
                className="block border-l-2 border-amber-600 pl-5 hover:border-amber-400 transition-colors group"
              >
                <blockquote className="font-[family-name:var(--font-garamond)] text-xl text-stone-300 italic leading-relaxed group-hover:text-stone-200 transition-colors">
                  &ldquo;O, the highest and most wonderful happiness of man,
                  to whom it is granted to possess what he chooses and to be
                  what he wants!&rdquo;
                </blockquote>
                <cite className="block mt-3 text-sm text-stone-600 not-italic group-hover:text-amber-600 transition-colors">
                  Giovanni Pico della Mirandola
                  <br />
                  <span className="text-stone-700 group-hover:text-stone-500">
                    Oration on the Dignity of Man, 1486 — sourcelibrary.org
                  </span>
                </cite>
              </a>
            </div>
            <div className="md:col-span-3 space-y-6 text-stone-400 leading-relaxed">
              <p className="text-stone-200 text-lg">
                Every generation faces the question of how to raise its children,
                care for its people, and build a good society. Ours faces it at
                a moment when the tools are changing faster than our understanding
                of what they should be used for.
              </p>
              <p>
                Wisdom Frontiers is a 501(c)(3) nonprofit that supports the
                people and projects working to ensure technology serves human
                development. We digitize and structure humanity&apos;s deepest
                knowledge about flourishing. We build AI tools grounded in
                learning science. We fund work at the intersection of ancient
                insight and modern capability.
              </p>
              <p>
                Our conviction is simple: the knowledge already exists. Across
                thousands of years and every civilization, humans have thought
                carefully about what it takes to develop well — as individuals,
                as communities, as a species. That knowledge should be shaping
                the systems we build today. We make sure it does.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="py-24 px-6 border-t border-stone-800/60"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-stone-600 mb-12">
            Projects
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg border border-stone-800 bg-stone-900/50 p-8 hover:border-amber-700/50 hover:bg-stone-900 transition-all duration-300"
              >
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber-600 mb-3">
                  {project.tagline}
                </p>
                <h3 className="font-[family-name:var(--font-garamond)] text-3xl text-stone-100 mb-4 group-hover:text-amber-400 transition-colors">
                  {project.name}
                  <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                    &rarr;
                  </span>
                </h3>
                <p className="text-stone-400 leading-relaxed">
                  {project.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-24 px-6 border-t border-stone-800/60">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-stone-600 mb-4">
            Board of Directors
          </p>
          <p className="font-[family-name:var(--font-garamond)] text-2xl text-stone-300 mb-16 max-w-2xl">
            Explorers, neuroscientists, physicians, designers, and AI
            researchers — each building technology that expands what humans
            can do and be.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {team.map((person) => (
              <a
                key={person.name}
                href={person.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative w-full aspect-[3/4] mb-5 rounded-lg overflow-hidden bg-stone-900">
                  <Image
                    src={person.photo}
                    alt={person.name}
                    fill
                    className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                </div>
                <h3 className="font-[family-name:var(--font-garamond)] text-xl text-stone-100 group-hover:text-amber-400 transition-colors">
                  {person.name}
                </h3>
                <p className="text-sm text-amber-600 mt-1">{person.title}</p>
                <p className="text-sm text-stone-500 mt-3 leading-relaxed">
                  {person.bio}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-800/60 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-stone-600">
            <span className="font-[family-name:var(--font-garamond)] text-stone-400">
              Wisdom Frontiers
            </span>{" "}
            &middot; 501(c)(3) Nonprofit &middot; San Francisco
          </div>
          <div className="flex gap-4 text-sm text-stone-600">
            <a
              href="https://sourcelibrary.org"
              className="hover:text-amber-500 transition-colors"
            >
              Source Library
            </a>
            <a
              href="https://impact-edu.ai"
              className="hover:text-amber-500 transition-colors"
            >
              Impact Edu
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
