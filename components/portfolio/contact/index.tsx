"use client";

import { ContactInfo } from "./components/contact-info";
import { ContactForm } from "./components/contact-form";
import { QuickLinks } from "./components/quick-links";

/**
 * Component that represents the contact section.
 * @returns The contact section.
 */
export function Contact() {
  return (
    <section id="contact" className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <div>
            <ContactInfo />
            <QuickLinks />
          </div>

          {/* Right - Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}