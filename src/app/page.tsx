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
    name: "Jamie Shadowlight",
    photo: "/team/jamie-shadowlight.jpg",
    title: "In memory · Violinist & Cymatics Artist",
    bio: "A pioneering electric violinist who made the invisible visible — moving water with sound through her live cymatics performances. The harmonic center of our circle, and the light by which we navigate.",
    url: "https://jamieshadowlight.org",
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

const frontiers = [
  {
    title: "Ancient wisdom",
    body: "Digitizing and translating the world's primary sources so people and AI can read them.",
    who: "Live as Source Library",
    live: true,
  },
  {
    title: "Expeditions",
    body: "Finding the sources no one has read yet, from cave art in Borneo to manuscript libraries in Rajasthan.",
    who: "Albert Lin",
  },
  {
    title: "Interfaces to animals & ecosystems",
    body: "Technology that lets us listen to, and talk with, the rest of the living world.",
    who: "Leo Trottier",
  },
  {
    title: "Ecoscanning",
    body: "Sensing and mapping ecological wellbeing from the ground to orbit.",
    who: "Luke Barrington",
  },
  {
    title: "Human potential neurotech",
    body: "Tools for the inner frontier: attention, insight, and contact with nature.",
    who: "Tim Mullen",
  },
  {
    title: "New mythologies",
    body: "Films, art, and stories that give the age of AI a meaning worth living into.",
    who: "Albert Lin & Qasim Anwar",
  },
  {
    title: "Living memory",
    body: "The Hundred Hours Project: recording the memories of human lives in depth, before they are lost.",
  },
];

const gatherings = [
  "Joshua Tree, California · 2022",
  "Black Rock Desert, Nevada · 2023",
  "Roatán, Honduras · 2025",
];

function Triangle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden style={{ display: "block" }}>
      <polygon points="50,6 95,94 5,94" fill={YELLOW} />
    </svg>
  );
}

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

export default function Home() {
  return (
    <div
      className={`${archivo.variable} min-h-screen bg-[#faf9f7] text-stone-900`}
      style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
    >
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

        <div className="relative z-10 flex h-full flex-col justify-between px-8 py-10 sm:px-14 sm:py-14">
          {/* Wordmark */}
          <div className="flex items-center gap-3">
            <Triangle className="h-6 w-6" />
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
              What is <span style={{ color: YELLOW }}>wisdom</span>
              <br />
              for artificial
              <br />
              intelligence?
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-stone-200 sm:text-lg">
              Explorers, scientists, and artists asking how wisdom can guide
              intelligence — human and artificial — toward the flourishing of
              all life.
            </p>
          </div>

          <div className="hidden sm:block">
            <Caption>
              <a
                href="https://sourcelibrary.org/book/art-ottoman-celestial-map"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 underline decoration-stone-600 underline-offset-2 hover:text-white"
              >
                Ottoman celestial map, 1583 · Source Library ↗
              </a>
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
            We are living through the arrival of superintelligence. We need
            wisdom.
          </h2>

          <div className="mt-14 grid gap-12 md:grid-cols-5">
            <div className="md:col-span-3 space-y-6 text-lg leading-relaxed text-stone-700">
              <p>
                Wisdom Frontiers is a circle of explorers, scientists, and
                builders asking the question: how do we carry humanity&apos;s
                hardest-won wisdom into the next age of our species?
              </p>
              <p>
                We conceived and built{" "}
                <a
                  href="https://sourcelibrary.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline decoration-2 underline-offset-4"
                  style={{ textDecorationColor: YELLOW }}
                >
                  Source Library
                </a>{" "}
                into the world&apos;s largest library of translated primary
                sources: thousands of years of human insight, made readable to
                people and AI.
              </p>
              <p>
                Across every civilization, humans have thought carefully about
                what it takes to live well.
              </p>
              <p className="font-medium text-stone-900">For the children.</p>
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

      {/* ============ HARMONY ============ */}
      <section id="harmony" className="px-8 pb-24 sm:px-14 sm:pb-32">
        <div className="mx-auto max-w-5xl">
          <Caption>The idea</Caption>
          <h2
            className={`${archivo.className} mt-6 max-w-4xl text-3xl font-800 leading-[1.08] tracking-tight sm:text-5xl`}
            style={{ fontWeight: 800 }}
          >
            Harmony is not sameness.
          </h2>
          <div className="mt-14 grid gap-12 md:grid-cols-5">
            <div className="md:col-span-3 space-y-6 text-lg leading-relaxed text-stone-700">
              <p>
                The idea is very old. Pythagoras found it in the ratios of
                music, Confucius in a well-governed state, Plato in the health
                of the soul: different parts, held together, become something
                none of them could be alone.
              </p>
              <p>
                It runs through our research on harmony in design, on resonance
                between minds, and on the rituals every culture invented to
                bring people into tune with each other. It also describes the
                circle: an explorer, a neuroscientist, a physician, an
                animal-communication researcher, an Earth-AI scientist, an
                artist, a design professor, and a violinist who made sound
                visible.
              </p>
              <p>
                Today&apos;s neural networks still optimize a function first
                developed to represent &ldquo;harmony.&rdquo; As AI becomes the
                most powerful technology of mind we have built, we want it to
                learn what that word has always meant: that our differences can
                be our strengths.
              </p>
            </div>
            <div className="md:col-span-2">
              <a
                href="https://dereklomas.me/papers/enigma-of-mind.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block pl-6"
                style={{ borderLeft: `3px solid ${YELLOW}` }}
              >
                <blockquote
                  className={`${archivo.className} text-xl font-600 leading-snug text-stone-900`}
                  style={{ fontWeight: 600 }}
                >
                  &ldquo;Do we also have the responsibility to imagine new
                  ceremonies, rituals, or technologies that could help bind
                  together our future societies?&rdquo;
                </blockquote>
                <cite className="mt-4 block text-xs uppercase not-italic tracking-[0.18em] text-stone-500">
                  Albert Lin &amp; Derek Lomas
                  <br />
                  <span className="text-stone-400">
                    The Enigma of Mind · Cambridge University Press
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
            <h2
              className={`${archivo.className} text-4xl font-900 tracking-tight text-white sm:text-6xl`}
              style={{ fontWeight: 900 }}
            >
              Source Library
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-stone-200">
              In Roatán in 2025 we talked about a future in which all human
              knowledge had been translated and could be felt around the world.
              Most of it never has been: about 3% of the Latin Renaissance
              exists in English, and what isn&apos;t in English isn&apos;t in
              AI&apos;s training data. So we built it, with the Embassy of the
              Free Mind in Amsterdam.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-stone-200">
              The corpus: more than 50,000 works across more than 100
              languages — medicine, ethics, the mind, the natural world — many
              in English for the first time. Searchable, citable, and open to
              both human readers and AI.
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
                <a
                  href="https://sourcelibrary.org/book/columba-and-argo-blaeu1602-gallica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-400 underline decoration-stone-600 underline-offset-2 hover:text-white"
                >
                  Argo Navis, the ship among the stars · Blaeu, 1602 · Source
                  Library ↗
                </a>
              </Caption>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FRONTIERS ============ */}
      <section id="frontiers" className="px-8 pt-24 sm:px-14 sm:pt-32">
        <div className="mx-auto max-w-6xl">
          <Caption>The frontiers</Caption>
          <h2
            className={`${archivo.className} mt-6 max-w-3xl text-3xl font-800 leading-tight tracking-tight sm:text-5xl`}
            style={{ fontWeight: 800 }}
          >
            At the dawn of AGI, what does AI need to learn that isn&apos;t in its
            training data?
          </h2>
          <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {frontiers.map((f) => (
              <div key={f.title}>
                <h3
                  className={`${archivo.className} flex items-center gap-3 text-lg font-700 tracking-tight`}
                  style={{ fontWeight: 700 }}
                >
                  {f.title}
                  {f.live && (
                    <span
                      className="px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] text-stone-950"
                      style={{ backgroundColor: YELLOW }}
                    >
                      Live
                    </span>
                  )}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-stone-600">{f.body}</p>
                {f.who && (
                  <p className="mt-2 text-xs uppercase tracking-[0.14em] text-stone-400">{f.who}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ GATHERINGS ============ */}
      <section id="gatherings" className="px-8 pt-24 sm:px-14 sm:pt-32">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-5">
          <div className="md:col-span-3">
            <Caption>Gatherings</Caption>
            <h2
              className={`${archivo.className} mt-6 text-3xl font-800 leading-tight tracking-tight sm:text-5xl`}
              style={{ fontWeight: 800 }}
            >
              The work starts in person.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-stone-700">
              Since 2022 the circle has met in deserts and on islands to ask
              what AI, and the generation that inherits it, will need from us.
              Source Library came out of one of those conversations.
            </p>
          </div>
          <ul className="md:col-span-2 md:pt-16 space-y-3">
            {gatherings.map((g) => (
              <li
                key={g}
                className={`${archivo.className} pl-4 text-lg font-700 tracking-tight`}
                style={{ fontWeight: 700, borderLeft: `3px solid ${YELLOW}` }}
              >
                {g}
              </li>
            ))}
          </ul>
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

          {/* The circle */}
          <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* ============ THE ASK ============ */}
      <section className="bg-stone-950 px-8 py-24 text-white sm:px-14 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <Caption>Patrons</Caption>
          <h2
            className={`${archivo.className} mt-6 max-w-3xl text-3xl font-800 leading-tight tracking-tight sm:text-5xl`}
            style={{ fontWeight: 800 }}
          >
            Be a patron of the next Renaissance.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-300">
            In fifteenth-century Florence, Cosimo de&apos; Medici paid Marsilio
            Ficino to translate Plato and the Hermetica, and a Renaissance
            followed. We are a nonprofit looking for the patrons of the next
            one: people who want their AI philanthropy to pay for translation,
            for expeditions that recover lost sources, and for the gatherings
            where new projects begin.
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.18em] text-stone-500">
            &ldquo;From existential risk to exponential hope.&rdquo; — Tim
            Mullen
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="https://sourcelibrary.org"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-sm font-700 uppercase tracking-[0.12em] text-stone-950 transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: YELLOW, fontWeight: 700 }}
            >
              Explore the library →
            </a>
            <a
              href="mailto:hello@wisdom-frontiers.com"
              className="px-6 py-3 text-sm font-700 uppercase tracking-[0.12em] text-white ring-1 ring-white/40 transition-colors hover:bg-white/10"
              style={{ fontWeight: 700 }}
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-stone-200 px-8 py-12 sm:px-14">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <Triangle className="h-5 w-5" />
            <span
              className={`${archivo.className} text-sm font-800 uppercase tracking-[0.2em]`}
              style={{ fontWeight: 800 }}
            >
              Wisdom Frontiers
            </span>
            <span className="text-sm text-stone-400">· Nonprofit</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
