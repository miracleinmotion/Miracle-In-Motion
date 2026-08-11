import Image from "next/image";

const facts = ["Film Student", "Greater Brisbane Area", "Filipino"];

const skills = [
  "Cinematography",
  "Editing",
  "Colour Grading",
  "Sound Design",
  "Drone Operation",
  "Premiere Pro",
  "DaVinci Resolve",
];

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-8 py-28">
      <div className="grid sm:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col items-start">
          <div className="relative w-40 h-40 rounded-full overflow-hidden mb-6">
            <Image
              src="/images/pfp.jpg"
              alt="Profile photo"
              fill
              className="object-cover"
            />
          </div>
          <ul className="font-sans text-sm text-muted space-y-1">
            {facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-sans text-xs uppercase tracking-widest2 text-brass mb-4">
            About
          </p>
          <h2 className="font-display text-4xl mb-6">
            Brisbane based Creator
          </h2>
          <div className="font-sans text-muted leading-relaxed space-y-4 mb-10">
            <p>
              I&apos;m Angelo, a videographer, photographer and video editor
              based in Brisbane. Through &quot;Miracle in Motion&quot;, I
              capture and create cinematic photo and video content for
              individuals, events and businesses. 
            </p>
            <p>
              Whether you&apos;re looking to remember a meaningful moment
              and create professional imagery to producing engaging videos,
              I&apos;m here to help bring your vision to life.
            </p>
            <p>
              Feel free to{" "}
              <a href="#contact" className="text-brass hover:underline">
                request a quote
              </a>{" "}
              to plan your next project.
            </p>
          </div>

          <p className="font-sans text-xs uppercase tracking-widest2 text-muted mb-4">
            Skills
          </p>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="font-sans text-xs uppercase tracking-widest2 border border-line px-4 py-2 text-ink/70"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
