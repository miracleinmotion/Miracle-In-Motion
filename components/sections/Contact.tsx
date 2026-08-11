import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-8 py-28">
      <div className="grid sm:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[4/5] w-full">
          <Image
            src="/images/bts.jpg"
            alt="Behind the scenes"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <p className="font-sans text-xs uppercase tracking-widest2 text-brass mb-4">
            Contact
          </p>
          <h2 className="font-display text-4xl mb-8">
            Let&apos;s talk about your next project.
          </h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
