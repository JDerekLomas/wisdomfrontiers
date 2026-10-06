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

// The three projects shown as full-width bands. Each is the circle's work;
// `who` names the member it most reflects.
const features = [
  {
    title: "Source Library",
    line: "The world's largest library of translated primary sources. More than 50,000 works in over 100 languages, readable by people and AI.",
    url: "https://sourcelibrary.org",
    cta: "Enter the library",
    image: "/work/source-library.jpg",
    alt: "A manuscript page in Arabic script, lit by candlelight",
    who: "Derek Lomas",
  },
  {
    title: "Earth Love",
    line: "Every cloud on Earth, as five weather satellites see it, ten minutes at a time, on a globe you can turn and play back.",
    url: "https://earthlove.live/globe/",
    cta: "Turn the globe",
    video: "/work/earthlove-globe.mp4",
    image: "/work/earthlove-globe.jpg",
    alt: "The Earth from space with live cloud cover",
    who: "Luke Barrington",
  },
  {
    title: "TEBO 1",
    line: "The genesis of compassion. Thirty-one thousand years ago, in a cave in Borneo, a community performed the oldest known successful major operation and cared a child back to life.",
    url: "https://tebo1.com",
    cta: "Visit TEBO 1",
    image: "/work/tebo1.jpg",
    alt: "People in a painted cave tending an injured child by firelight",
    who: "Albert Lin",
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
      <section className="px-8 py-24 sm:px-14 sm:py-32">
        <div className="mx-auto max-w-4xl">
          <h2 className={h2} style={{ fontWeight: 800 }}>
            We are living through the arrival of superintelligence. We need
            wisdom.
          </h2>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-stone-700">
            Alignment has three parties: artificial intelligence, human beings,
            and the living world. We build things that help them understand
            each other, starting with what people have learned, over thousands
            of years, about living well.
          </p>
          <p
            className={`${archivo.className} mt-8 text-2xl tracking-tight`}
            style={{ fontWeight: 800 }}
          >
            For the children.
          </p>
        </div>
      </section>

      {/* ============ WORK ============ */}
      <section id="work">
        {features.map((f) => (
          <a
            key={f.title}
            href={f.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-[78vh] min-h-[520px] w-full items-end overflow-hidden bg-black"
          >
            {f.video ? (
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={f.video}
                poster={f.image}
                autoPlay
                muted
                loop
                playsInline
                aria-label={f.alt}
              />
            ) : (
              <Image
                src={f.image}
                alt={f.alt}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-[1500ms] group-hover:scale-[1.03]"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <div className="relative z-10 w-full px-8 pb-12 sm:px-14 sm:pb-16">
              <div className="max-w-2xl">
                <h2
                  className={`${archivo.className} text-5xl tracking-tight text-white sm:text-7xl`}
                  style={{ fontWeight: 900 }}
                >
                  {f.title}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-stone-200">{f.line}</p>
                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <span
                    className="px-5 py-2.5 text-sm uppercase tracking-[0.12em] text-stone-950 transition-transform group-hover:-translate-y-0.5"
                    style={{ backgroundColor: YELLOW, fontWeight: 700 }}
                  >
                    {f.cta} →
                  </span>
                  <span className="text-xs uppercase tracking-[0.18em] text-stone-400">{f.who}</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </section>

      {/* ============ THE CIRCLE ============ */}
      <section id="circle" className="px-8 py-24 sm:px-14 sm:py-32">
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
