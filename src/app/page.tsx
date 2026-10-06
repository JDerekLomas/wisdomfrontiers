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

const projects = [
  {
    title: "Source Library",
    body: "The world's largest library of translated primary sources: more than 50,000 works in over 100 languages, readable by people and AI.",
    url: "https://sourcelibrary.org",
    live: true,
  },
  {
    title: "Earthlove",
    body: "Live satellite imagery of the whole Earth, every ten minutes: a way to watch the planet breathe.",
    url: "https://earthlove.live",
    who: "Luke Barrington",
    live: true,
  },
  {
    title: "Lost Cities",
    body: "Lidar, satellites, and AI to find what history lost, and expeditions to scan manuscripts no one has read.",
    who: "Albert Lin",
  },
  {
    title: "Talking to animals",
    body: "The largest study of augmented animal communication: learning what other minds have to say.",
    who: "Leo Trottier",
  },
  {
    title: "Ecoscanning coral reefs",
    body: "Measuring the wellbeing of living ecosystems, starting with the reefs.",
    who: "Eli Spencer",
  },
  {
    title: "The inner frontier",
    body: "Brain-computer interfaces and focused ultrasound: technology that works with the mind rather than on it.",
    who: "Tim Mullen",
  },
  {
    title: "Fashion archaeology",
    body: "Recovering lost craft traditions and the knowledge carried in them.",
    who: "Qasim Anwar",
  },
  {
    title: "Positive AI",
    body: "Designing AI systems that measure and support human wellbeing.",
    who: "Derek Lomas",
  },
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
  const h2 = `${archivo.className} mt-6 max-w-4xl text-3xl font-800 leading-[1.08] tracking-tight sm:text-5xl`;
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
          <div className="flex items-center gap-3">
            <Triangle className="h-6 w-6" />
            <span
              className={`${archivo.className} text-sm uppercase tracking-[0.28em] text-white`}
              style={{ fontWeight: 800 }}
            >
              Wisdom Frontiers
            </span>
          </div>

          <h1
            className={`${archivo.className} max-w-4xl text-5xl leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl`}
            style={{ fontWeight: 900 }}
          >
            What is <span style={{ color: YELLOW }}>wisdom</span>
            <br />
            for artificial
            <br />
            intelligence?
          </h1>

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

      {/* ============ THESIS ============ */}
      <section className="px-8 pt-24 sm:px-14 sm:pt-32">
        <div className="mx-auto max-w-4xl">
          <h2 className={h2} style={{ fontWeight: 800 }}>
            We are living through the arrival of superintelligence. We need
            wisdom.
          </h2>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-stone-700">
            Within our lifetimes, machines may exceed us at everything we know
            how to measure. Whether that becomes an apocalypse or a renaissance
            depends less on how capable they are than on what they understand
            about living well.
          </p>
        </div>
      </section>

      {/* ============ ALIGNMENT ============ */}
      <section className="px-8 pt-24 sm:px-14 sm:pt-32">
        <div className="mx-auto max-w-4xl">
          <Caption>Alignment has three parties</Caption>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-700">
            AI alignment is usually framed as a problem between machines and the
            people who build them. We think there are three parties: artificial
            systems, human beings, and the natural world. Each is a form of
            intelligence, and AI is fast becoming part of our nature. The work
            is to bring all three into alignment, so that AI serves human
            flourishing and both serve the living world that made them.
          </p>
        </div>
      </section>

      {/* ============ INHERITANCE ============ */}
      <section className="px-8 py-24 sm:px-14 sm:py-32">
        <div className="mx-auto max-w-4xl">
          <Caption>What AI doesn&apos;t know yet</Caption>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-700">
            Every civilization has asked what it takes to live well. Most of
            their answers were never translated, so a machine trained on the
            modern internet inherits a thin slice of human thought. We want the
            intelligences now being built to know the whole inheritance. We
            also want people to grow wiser, not just more capable, as those
            intelligences grow.
          </p>
          <p
            className={`${archivo.className} mt-10 text-2xl tracking-tight`}
            style={{ fontWeight: 800 }}
          >
            For the children.
          </p>
        </div>
      </section>

      {/* ============ SOURCE LIBRARY BAND ============ */}
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden bg-stone-900">
        <Image
          src="/explorer/argo-navis.jpg"
          alt="Celestial chart of Argo Navis, the ship among the stars, 1602"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-950/40 to-transparent" />
        <div className="relative z-10 flex h-full flex-col justify-between px-8 py-10 sm:px-14 sm:py-14">
          <div />
          <a
            href="https://sourcelibrary.org"
            target="_blank"
            rel="noopener noreferrer"
            className={`${archivo.className} max-w-xl text-4xl tracking-tight text-white hover:underline sm:text-6xl`}
            style={{ fontWeight: 900, textDecorationColor: YELLOW }}
          >
            Source Library ↗
          </a>
          <div className="hidden sm:block">
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
      </section>

      {/* ============ WHAT WE'RE DOING ============ */}
      <section id="work" className="px-8 py-24 sm:px-14 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <Caption>What we&apos;re doing</Caption>
          <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((p) => {
              const title = (
                <h3
                  className={`${archivo.className} flex items-center gap-3 text-xl tracking-tight`}
                  style={{ fontWeight: 700 }}
                >
                  {p.title}
                  {p.live && (
                    <span
                      className="px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] text-stone-950"
                      style={{ backgroundColor: YELLOW }}
                    >
                      Live
                    </span>
                  )}
                </h3>
              );
              return (
                <div key={p.title} className="pt-5" style={{ borderTop: `3px solid ${YELLOW}` }}>
                  {p.url ? (
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {title}
                    </a>
                  ) : (
                    title
                  )}
                  <p className="mt-3 text-base leading-relaxed text-stone-600">{p.body}</p>
                  {p.who && (
                    <p className="mt-3 text-xs uppercase tracking-[0.14em] text-stone-400">{p.who}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ THE CIRCLE ============ */}
      <section id="circle" className="px-8 pb-24 sm:px-14 sm:pb-32">
        <div className="mx-auto max-w-6xl">
          <Caption>The circle</Caption>
          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {team.map((person) => (
              <a
                key={person.name}
                href={person.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative mb-4 aspect-[3/4] w-full overflow-hidden bg-stone-200">
                  <Image
                    src={person.photo}
                    alt={person.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                  <span
                    className="absolute bottom-0 left-0 h-1 w-10 transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: YELLOW }}
                  />
                </div>
                <h3
                  className={`${archivo.className} text-lg tracking-tight`}
                  style={{ fontWeight: 700 }}
                >
                  {person.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-stone-500">
                  {person.title}
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
            <Triangle className="h-5 w-5" />
            <span
              className={`${archivo.className} text-sm uppercase tracking-[0.2em]`}
              style={{ fontWeight: 800 }}
            >
              Wisdom Frontiers
            </span>
            <span className="text-sm text-stone-400">· Nonprofit</span>
          </div>
          <a
            href="mailto:hello@wisdom-frontiers.com"
            className="text-sm text-stone-600 underline decoration-2 underline-offset-4 hover:text-stone-900"
            style={{ textDecorationColor: YELLOW }}
          >
            hello@wisdom-frontiers.com
          </a>
        </div>
      </footer>
    </div>
  );
}
