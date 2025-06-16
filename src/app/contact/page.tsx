"use client";
import React, { useState } from "react";
import { MapPin, Phone } from "lucide-react";
import Link from "next/link";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  // const [formStatus, _setFormStatus] = useState("");
  // const [isLoading, _setIsLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   setFormStatus("");

  //   // Simulate form submission
  //   try {
  //     await new Promise((resolve) => setTimeout(resolve, 2000));
  //     setFormStatus("success");
  //     setFormData({ name: "", email: "", subject: "", message: "" });
  //   } catch (error) {
  //     setFormStatus("error");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <main className="main">
      {/* Page Title */}
      <div className="page-title">
        <div className="container mx-auto px-4  max-w-screen-xl lg:flex lg:justify-between lg:items-center">
          <h1 className="mb-2 lg:mb-0">Contact</h1>
          <nav className="breadcrumbs">
            <ol className="">
              <li>
                  <Link href="/" className="">
                  Home
                </Link>
              </li>
              <li className="current ">Contact</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="contact section">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <iframe
              className="w-full h-64 border-0 rounded-lg shadow-sm"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-4 space-y-6">
              <div
                className="info-item flex"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="i">
                  <MapPin size={22} className="flex-shrink-0" />
                </div>
                <div>
                  <h3>Address</h3>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </div>
              <div
                className="info-item flex"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="i">
                  <Phone size={22} className="flex-shrink-0" />
                </div>
                <div>
                  <h3> Call Us</h3>
                  <p className="">+1 5589 55488 55</p>
                </div>
              </div>
              <div
                className="info-item flex"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="i">
                  <Phone size={22} className="flex-shrink-0" />
                </div>
                <div>
                  <h3> Email Us</h3>
                  <p className="">info@example.com</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-8">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="Subject"
                    required
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-vertical"
                    placeholder="Message"
                    required
                  />
                </div>

                <div className="text-center">
                  {/* Status Messages */}
                  {/* {isLoading && (
                    <div className="mb-4 text-blue-600 font-medium">
                      Loading...
                    </div>
                  )} */}

                  {/* {formStatus === "error" && (
                    <div className="mb-4 text-red-600 font-medium">
                      There was an error sending your message. Please try again.
                    </div>
                  )}

                  {formStatus === "success" && (
                    <div className="mb-4 text-green-600 font-medium">
                      Your message has been sent. Thank you!
                    </div>
                  )} */}

                  <button
                    type="submit"
                    // disabled={isLoading}
                    className="form-submit"
                  >
                    {"Send Message"}
                    {/* {isLoading ? "Sending..." : "Send Message"} */}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
