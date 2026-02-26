import Image from "next/image";

const team = [
  {
    name: "Albert Lin",
    photo: "/team/albert-lin.jpg",
    title: "National Geographic Explorer & Scientist",
    bio: "Founding director of the Center for Human Frontiers at UC San Diego. Uses LIDAR, satellite imaging, and AI to reveal lost civilizations. After losing his leg in 2016, returned to the field and launched Project Lim[b]itless to make prosthetics accessible worldwide.",
    url: "https://exploreralbert.com",
  },
  {
    name: "Leo Trottier",
    photo: "/team/leo-trottier.webp",
    title: "Cognitive Scientist & Founder, FluentPet",
    bio: "Founded CleverPet and FluentPet, pioneering technology for studying animal cognition and interspecies communication. Co-directs the They Can Talk Research Initiative, the world's largest study of augmented animal communication.",
    url: "https://fluent.pet",
  },
  {
    name: "Tim Mullen",
    photo: "/team/tim-mullen.jpg",
    title: "Computational Neuroscientist & Entrepreneur",
    bio: "Founded Intheon, the first platform for real-time brain-computer interface analytics, and co-founded Sanmai for non-invasive focused ultrasound treatments. Created widely-used open-source neurotech tools. Ph.D. from UC San Diego.",
    url: "https://intheon.io",
  },
  {
    name: "Eli Spencer",
    photo: "/team/eli-spencer.webp",
    title: "Physician-Scientist, UC San Diego",
    bio: "Associate Professor of Medicine at UC San Diego. Directs the Center for Health Design and the Distributed Health Lab at the Qualcomm Institute. Builds diagnostic and digital health tools for resource-limited settings across the Americas and Africa.",
    url: "https://profiles.ucsd.edu/eliah.aronoff-spencer",
  },
  {
    name: "Qasim Anwar",
    photo: "/team/qasim-anwar.png",
    title: "Designer & Cultural Archaeologist",
    bio: "Works at the intersection of fashion and cultural preservation through a practice he calls Fashion Archeology. Founded Morni, a platform bridging South Asian artisan craft with contemporary design. Co-created Color Coded Crime, reviving Mughal-era textile traditions.",
    url: "https://mymorni.com",
  },
  {
    name: "Derek Lomas",
    photo: "/team/derek-lomas.webp",
    title: "Professor of Positive AI, TU Delft",
    bio: "Researches AI systems designed to maximize wellbeing in education and healthcare at Delft University of Technology. Co-founded Playpower Labs and NeuroUX, building educational software and cognitive assessments reaching millions of learners.",
    url: "https://www.derek-lomas.com",
  },
  {
    name: "Luke Barrington",
    photo: "/team/luke-barrington.jpg",
    title: "Director, Google Earth AI",
    bio: "Leads geospatial AI at Google, turning satellite imagery into actionable intelligence for weather, disaster response, and environmental monitoring. Co-founded Tomnod, engaging millions of citizen scientists. Ph.D. from UC San Diego.",
    url: "https://www.linkedin.com/in/lukebarrington/",
  },
];

const projects = [
  {
    name: "Source Library",
    url: "https://sourcelibrary.org",
    tagline: "Wisdom infrastructure for the AI age",
    description:
      "Making humanity's deepest thinking — on medicine, ethics, the mind, the cosmos — machine-readable and citable. A knowledge base that gives AI systems access to thousands of years of insight, not just the last ten.",
  },
  {
    name: "Impact Edu",
    url: "https://impact-edu.ai",
    tagline: "Measuring what matters in learning",
    description:
      "Open-source AI tools built on learning science, not engagement metrics. Designed to support the development of capable, curious, ethical humans — not just higher test scores.",
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-600 mb-8">
            501(c)(3) Nonprofit
          </p>
          <h1 className="font-[family-name:var(--font-garamond)] text-5xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-stone-100 mb-10">
            AI is transforming
            <br />
            everything.{" "}
            <span className="text-amber-500">
              Who&apos;s asking
              <br />
              what for?
            </span>
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed text-stone-400 max-w-2xl mx-auto">
            We&apos;re building faster than we&apos;re thinking. Wisdom
            Frontiers supports human development and flourishing in an age of
            AI — grounded in the deepest traditions of knowledge about what it
            means to live well.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-stone-800/60" />
      </div>

      {/* Urgency / Mission */}
      <section id="mission" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-stone-600 mb-10">
            The Problem
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <p className="font-[family-name:var(--font-garamond)] text-2xl sm:text-3xl leading-snug text-stone-200">
                AI systems are being designed to optimize engagement, productivity,
                and profit. Almost none are designed to support human flourishing.
              </p>
              <p className="text-stone-400 leading-relaxed">
                The question isn&apos;t whether AI will reshape education, healthcare,
                and how we relate to each other. It&apos;s whether anyone building
                these systems is drawing on humanity&apos;s accumulated wisdom about
                what actually makes people thrive.
              </p>
            </div>
            <div className="space-y-8">
              <blockquote className="border-l-2 border-amber-600 pl-6">
                <p className="font-[family-name:var(--font-garamond)] text-xl text-stone-300 italic leading-relaxed">
                  &ldquo;Educating the mind without educating the heart is no
                  education at all.&rdquo;
                </p>
                <cite className="block mt-3 text-sm text-stone-500 not-italic">
                  Aristotle
                </cite>
              </blockquote>
              <p className="text-stone-400 leading-relaxed">
                For thousands of years, thinkers across every civilization have
                studied what it means to develop fully as a human being — how to
                cultivate judgment, character, and purpose. That knowledge exists.
                It&apos;s just not connected to the systems being built right now.
              </p>
              <p className="text-stone-400 leading-relaxed font-medium text-stone-300">
                We connect it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote break */}
      <div className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="font-[family-name:var(--font-garamond)] text-2xl sm:text-3xl text-stone-300 italic leading-relaxed">
            &ldquo;Begin at once to live, and count each separate day as a
            separate life.&rdquo;
          </blockquote>
          <cite className="block mt-4 text-sm text-stone-600 not-italic">
            Seneca, <span className="italic">Letters to Lucilius</span>
          </cite>
        </div>
      </div>

      {/* Projects */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-stone-600 mb-4">
            What We Build
          </p>
          <p className="font-[family-name:var(--font-garamond)] text-2xl text-stone-300 mb-12 max-w-xl">
            Open-source tools that put wisdom traditions in conversation with
            AI systems.
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
            Scientists, explorers, designers, and builders — united by the
            conviction that what we optimize for matters.
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

      {/* Closing quote */}
      <div className="py-16 px-6 border-t border-stone-800/60">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="font-[family-name:var(--font-garamond)] text-2xl sm:text-3xl text-stone-300 italic leading-relaxed">
            &ldquo;The habits we form from childhood make no small difference,
            but rather they make all the difference.&rdquo;
          </blockquote>
          <cite className="block mt-4 text-sm text-stone-600 not-italic">
            Aristotle, <span className="italic">Nicomachean Ethics</span>
          </cite>
        </div>
      </div>

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
