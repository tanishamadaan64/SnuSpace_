import { MailIcon, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container px-4 py-12 mx-auto text-white">
      <h1 className="text-3xl font-bold mb-8 text-white">Contact Us</h1>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">Get in Touch</h2>
          <p className="text-white/80 mb-6">
            Have questions, suggestions, or want to contribute to SNU Space? We'd love to hear from you.
            Fill out the form or reach out to us through the contact information provided.
          </p>

          <div className="space-y-6">
            {/* Email Info */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1 p-2 bg-primary/10 rounded-full">
                <MailIcon className="w-5 h-5 text-primary" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-white">Email</h3>
                <p className="text-white/80">snuspace123@gmail.com</p>
              </div>
            </div>

            {/* Mailto Button */}
            <a
              href="mailto:snuspace123@gmail.com"
              className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}