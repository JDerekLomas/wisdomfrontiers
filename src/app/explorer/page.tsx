import Image from "next/image";
import { Archivo } from "next/font/google";

// NatGeo "Geograph" stand-in: a geometric grotesque with heavy display weights.
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const YELLOW = "#FFCB05"; // National Geographic-style signal yellow

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

function Caption({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-stone-500">
      <span
        className="inline-block h-3 w-[3px]"
        style={{ backgroundColor: YELLOW }}
      />
      {children}
    </p>
  );
}

export default function Explorer() {
  return (
    <div
      className={`${archivo.variable} min-h-screen bg-[#faf9f7] text-stone-900`}
      style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
    >
      {/* Compare toggle */}
      <a
        href="/"
        className="fixed top-4 right-4 z-50 rounded-full border border-stone-300 bg-white/90 px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-stone-700 shadow-sm backdrop-blur hover:border-stone-900 hover:text-stone-900 transition-colors"
      >
        ↔ View current design
      </a>

      {/* ============ HERO ============ */}
      <section className="relative h-[92vh] min-h-[620px] w-full overflow-hidden bg-stone-900">
        <Image
          src="/explorer/ottoman-celestial.jpg"
          alt="Ottoman celestial map, 1583"
          fill
          priority
          className="object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-950/30" />

        {/* NatGeo signature frame */}
        <div
          className="pointer-events-none absolute inset-4 sm:inset-6 border-2"
          style={{ borderColor: YELLOW }}
        />

        <div className="relative z-10 flex h-full flex-col justify-between px-8 py-10 sm:px-14 sm:py-14">
          {/* Wordmark */}
          <div className="flex items-center gap-3">
            <span
              className="h-6 w-6"
              style={{ backgroundColor: YELLOW }}
              aria-hidden
            />
            <span
              className={`${archivo.className} text-sm font-800 uppercase tracking-[0.28em] text-white`}
              style={{ fontWeight: 800 }}
            >
              Wisdom Frontiers
            </span>
          </div>

          {/* Headline */}
          <div className="max-w-4xl">
            <p
              className="mb-5 text-xs uppercase tracking-[0.3em]"
              style={{ color: YELLOW }}
            >
              A society of explorers
            </p>
            <h1
              className={`${archivo.className} text-5xl font-900 leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl`}
              style={{ fontWeight: 900 }}
            >
              The frontier where
              <br />
              wisdom meets
              <br />
              <span style={{ color: YELLOW }}>intelligence.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-stone-200 sm:text-lg">
              Explorers, scientists, and artists asking how intelligence — human
              and artificial — can serve the flourishing of all life.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="px-6 py-3 text-sm font-700 uppercase tracking-[0.12em] text-stone-950 transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: YELLOW, fontWeight: 700 }}
              >
                The Work
              </a>
              <a
                href="#circle"
                className="px-6 py-3 text-sm font-700 uppercase tracking-[0.12em] text-white ring-1 ring-white/40 transition-colors hover:bg-white/10"
                style={{ fontWeight: 700 }}
              >
                The Circle
              </a>
            </div>
          </div>

          <div className="hidden sm:block">
            <Caption>
              <span className="text-stone-400">
                Ottoman celestial map, 1583 · from Source Library
              </span>
            </Caption>
          </div>
        </div>
      </section>

      {/* ============ MISSION ============ */}
      <section className="px-8 py-24 sm:px-14 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <Caption>Why this exists</Caption>
          <h2
            className={`${archivo.className} mt-6 max-w-4xl text-3xl font-800 leading-[1.08] tracking-tight sm:text-5xl`}
            style={{ fontWeight: 800 }}
          >
            We are living through the arrival of intelligence as capable as our
            own. The question is whether the wisdom to use it well arrives with
            it.
          </h2>

          <div className="mt-14 grid gap-12 md:grid-cols-5">
            <div className="md:col-span-3 space-y-6 text-lg leading-relaxed text-stone-700">
              <p>
                Wisdom Frontiers began as a circle of explorers, scientists,
                artists, and builders who kept returning to one question: how do
                we carry humanity&apos;s hardest-won wisdom into the age of
                artificial intelligence? Our first answer is{" "}
                <a
                  href="https://sourcelibrary.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline decoration-2 underline-offset-4"
                  style={{ textDecorationColor: YELLOW }}
                >
                  Source Library
                </a>{" "}
                — a living archive of thousands of years of human insight, made
                readable and citable for people and legible to machines.
              </p>
              <p>
                The knowledge already exists. Across every civilization, humans
                have thought carefully about what it takes to live well — to
                become wiser, freer, and more whole. Our work is to bring it
                forward, so that the intelligent systems now being built help
                each of us define our own purpose, not someone else&apos;s. We
                do this for the generation that will inherit it. For the
                children.
              </p>
            </div>

            {/* Pull-quote */}
            <div className="md:col-span-2">
              <a
                href="https://sourcelibrary.org/q/BejoAexWSSxTh76zhkm"
                target="_blank"
                rel="noopener noreferrer"
                className="block pl-6"
                style={{ borderLeft: `3px solid ${YELLOW}` }}
              >
                <blockquote
                  className={`${archivo.className} text-xl font-600 leading-snug text-stone-900`}
                  style={{ fontWeight: 600 }}
                >
                  &ldquo;O the highest and wonderful happiness of man! To whom it
                  is granted to have what he chooses, to be what he wills.&rdquo;
                </blockquote>
                <cite className="mt-4 block text-xs uppercase not-italic tracking-[0.18em] text-stone-500">
                  Pico della Mirandola
                  <br />
                  <span className="text-stone-400">
                    Oration on the Dignity of Man, 1486
                  </span>
                </cite>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FLAGSHIP: SOURCE LIBRARY ============ */}
      <section id="work" className="relative h-[80vh] min-h-[560px] w-full overflow-hidden bg-stone-900">
        <Image
          src="/explorer/argo-navis.jpg"
          alt="Celestial chart of Argo Navis, the ship among the stars, 1602"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/55 to-transparent" />
        <div className="relative z-10 flex h-full items-center px-8 sm:px-14">
          <div className="max-w-xl">
            <p
              className="mb-4 text-xs uppercase tracking-[0.3em]"
              style={{ color: YELLOW }}
            >
              The flagship
            </p>
            <h2
              className={`${archivo.className} text-4xl font-900 tracking-tight text-white sm:text-6xl`}
              style={{ fontWeight: 900 }}
            >
              Source Library
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-stone-200">
              Thousands of primary sources across more than 100 languages — on
              medicine, ethics, the mind, and the natural world — many
              translated into English for the first time. Digitized, searchable,
              and structured for both human readers and AI. The foundation
              everything else is built on.
            </p>
            <a
              href="https://sourcelibrary.org"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 text-sm font-700 uppercase tracking-[0.12em] text-stone-950 transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: YELLOW, fontWeight: 700 }}
            >
              Enter the library →
            </a>
            <div className="mt-8">
              <Caption>
                <span className="text-stone-400">
                  Argo Navis, the ship among the stars · Blaeu, 1602
                </span>
              </Caption>
            </div>
          </div>
        </div>
      </section>

      {/* ============ THE CIRCLE ============ */}
      <section id="circle" className="px-8 py-24 sm:px-14 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <Caption>The circle</Caption>
          <h2
            className={`${archivo.className} mt-6 max-w-3xl text-3xl font-800 leading-tight tracking-tight sm:text-5xl`}
            style={{ fontWeight: 800 }}
          >
            Explorers, neuroscientists, physicians, designers, and AI
            researchers.
          </h2>

          {/* Jamie memorial */}
          <div className="mt-14 flex flex-col gap-6 border-t border-stone-200 pt-10 sm:flex-row sm:items-start">
            <div className="relative aspect-[4/5] w-full flex-shrink-0 overflow-hidden bg-stone-200 sm:w-48">
              <Image
                src="/team/jamie-shadowlight.jpg"
                alt="Jamie Shadowlight"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="pl-1 sm:border-l-[3px] sm:pl-6" style={{ borderColor: YELLOW }}>
              <Caption>In memory · the central axis</Caption>
              <h3
                className={`${archivo.className} mt-3 text-2xl font-800 tracking-tight`}
                style={{ fontWeight: 800 }}
              >
                Jamie Shadowlight
              </h3>
              <p className="mt-3 max-w-xl leading-relaxed text-stone-600">
                A violinist and cymatics artist who made the invisible visible —
                moving water with sound. The harmonic center of our circle, and
                the light by which we navigate.
              </p>
            </div>
          </div>

          {/* Founders grid */}
          <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((person) => (
              <a
                key={person.name}
                href={person.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative mb-5 aspect-[3/4] w-full overflow-hidden bg-stone-200">
                  <Image
                    src={person.photo}
                    alt={person.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span
                    className="absolute bottom-0 left-0 h-1 w-12 transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: YELLOW }}
                  />
                </div>
                <h3
                  className={`${archivo.className} text-xl font-700 tracking-tight`}
                  style={{ fontWeight: 700 }}
                >
                  {person.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-stone-500">
                  {person.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  {person.bio}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-stone-200 px-8 py-12 sm:px-14">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="h-5 w-5" style={{ backgroundColor: YELLOW }} aria-hidden />
            <span
              className={`${archivo.className} text-sm font-800 uppercase tracking-[0.2em]`}
              style={{ fontWeight: 800 }}
            >
              Wisdom Frontiers
            </span>
            <span className="text-sm text-stone-400">· Nonprofit</span>
          </div>
          <div className="flex gap-6 text-sm text-stone-500">
            <a href="https://sourcelibrary.org" className="hover:text-stone-900">
              Source Library
            </a>
            <a href="https://impact-edu.ai" className="hover:text-stone-900">
              Impact Edu
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
