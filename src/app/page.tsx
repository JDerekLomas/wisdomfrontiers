import Image from "next/image";

const team = [
  {
    name: "Albert Lin",
    photo: "/team/albert-lin.jpg",
    title: "National Geographic Explorer & Archaeologist",
    bio: "Research scientist at UC San Diego and founding director of the Center for Human Frontiers. Uses LIDAR, satellite imaging, and AI to reveal lost civilizations — from the tomb of Genghis Khan to buried Maya cities. Hosts Lost Cities with Albert Lin on National Geographic. After losing his leg in 2016, returned to the field and launched Project Lim[b]itless to make prosthetics accessible worldwide.",
    url: "https://exploreralbert.com",
  },
  {
    name: "Leo Trottier",
    photo: "/team/leo-trottier.webp",
    title: "Cognitive Scientist & Founder, FluentPet",
    bio: "Founded CleverPet and FluentPet, pioneering technology for studying and enhancing animal cognition and interspecies communication. Co-directs the They Can Talk Research Initiative, the world's largest study of button-based communication in animals. Trained in cognitive science and AI at the University of Toronto and UC San Diego.",
    url: "https://fluent.pet",
  },
  {
    name: "Tim Mullen",
    photo: "/team/tim-mullen.jpg",
    title: "Computational Neuroscientist & Entrepreneur",
    bio: "Founded Intheon, the first platform for real-time brain-computer interface analytics, and co-founded Sanmai, developing non-invasive focused ultrasound treatments for mental health. Holds a Ph.D. from UC San Diego's Swartz Center for Computational Neuroscience. Created widely-used open-source neurotech tools including SIFT and the Lab Streaming Layer.",
    url: "https://intheon.io",
  },
  {
    name: "Eli Spencer",
    photo: "/team/eli-spencer.webp",
    title: "Physician-Scientist, UC San Diego",
    bio: "Associate Professor of Medicine at UC San Diego, directing the Center for Health Design at the Design Lab and the Distributed Health Lab at the Qualcomm Institute. Focuses on democratizing diagnostics and digital health tools in resource-limited settings across the Americas, Africa, and beyond. Board-certified in internal medicine and infectious diseases.",
    url: "https://profiles.ucsd.edu/eliah.aronoff-spencer",
  },
  {
    name: "Qasim Anwar",
    photo: "/team/qasim-anwar.png",
    title: "Fashion Designer & Cultural Archaeologist",
    bio: "Los Angeles-based designer and creative director working at the intersection of fashion and cultural preservation through a practice he calls Fashion Archeology. Founded Morni, a bespoke clothing platform bridging South Asian artisan craft with contemporary design. Co-created Color Coded Crime, a sustainable fashion label reviving Mughal-era textile traditions.",
    url: "https://mymorni.com",
  },
  {
    name: "Derek Lomas",
    photo: "/team/derek-lomas.webp",
    title: "Professor of Positive AI, TU Delft",
    bio: "Researches AI systems designed to maximize wellbeing in education and healthcare at Delft University of Technology. Co-founded Playpower Labs and NeuroUX, creating AI-based educational software and cognitive assessments reaching millions of learners. Degrees from Yale, UC San Diego, and Carnegie Mellon.",
    url: "https://www.derek-lomas.com",
  },
  {
    name: "Luke Barrington",
    photo: "/team/luke-barrington.jpg",
    title: "Director, Google Earth AI",
    bio: "Leads geospatial AI at Google, building models that turn satellite imagery into actionable intelligence for weather forecasting, disaster response, and environmental monitoring. Co-founded Tomnod, a citizen science platform that engaged millions of volunteers to analyze satellite images — from searching for Genghis Khan's tomb to mapping disaster zones. Ph.D. from UC San Diego.",
    url: "https://www.linkedin.com/in/lukebarrington/",
  },
];

const projects = [
  {
    name: "Source Library",
    url: "https://sourcelibrary.org",
    tagline: "Ancient texts, digitally alive",
    description:
      "A living digital archive making foundational texts from ancient traditions accessible, searchable, and citable — from Renaissance herbals to alchemical manuscripts to classical philosophy.",
  },
  {
    name: "Impact Edu",
    url: "https://impact-edu.ai",
    tagline: "AI-powered open education",
    description:
      "Educational tools built on open learning standards, connecting modern AI assessment with deeper traditions of understanding how knowledge develops in learners.",
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
              href="#mission"
              className="hover:text-amber-500 transition-colors"
            >
              Mission
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
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Subtle gradient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-600 mb-8">
            501(c)(3) Nonprofit
          </p>
          <h1 className="font-[family-name:var(--font-garamond)] text-5xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-stone-100 mb-10">
            Ancient knowledge.
            <br />
            <span className="text-amber-500">Human frontiers.</span>
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed text-stone-400 max-w-2xl mx-auto">
            We ensure that the deep knowledge of past civilizations not only
            survives, but actively shapes the design of future technologies,
            environments, and human connection.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-stone-800/60" />
      </div>

      {/* Mission */}
      <section id="mission" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-stone-600 mb-10">
            The Mission
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <blockquote className="font-[family-name:var(--font-garamond)] text-2xl sm:text-3xl leading-snug text-stone-200 border-l-2 border-amber-600 pl-6">
                To ensure that ancient knowledge not only survives, but actively
                shapes the design of future technologies, environments, and
                human connection.
              </blockquote>
            </div>
            <div className="space-y-5 text-stone-400 leading-relaxed">
              <p>
                Across every culture and era, humans have built systems of
                knowledge — about medicine, materials, the mind, the cosmos.
                Most of it remains buried in archives, untranslated, unsearchable,
                disconnected from the tools we build today.
              </p>
              <p>
                We build open-source infrastructure to surface this knowledge
                and connect it to modern science, education, and technology
                design. Our team spans exploration, neuroscience, AI, medicine,
                and design — united by the conviction that the frontier ahead
                requires the wisdom behind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6">
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
      <section id="team" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-stone-600 mb-4">
            The Team
          </p>
          <p className="font-[family-name:var(--font-garamond)] text-2xl text-stone-300 mb-16 max-w-xl">
            Explorers, scientists, designers, and builders working at the edge
            of what&apos;s known.
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
            &middot; 501(c)(3) Nonprofit Public Benefit Corporation &middot;
            San Francisco, CA
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
