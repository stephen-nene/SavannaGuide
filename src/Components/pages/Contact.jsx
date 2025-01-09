import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-2 text-lg">
            We'd love to hear from you! Get in touch with us.
          </p>
        </div>
      </header>
      <main className="container mx-auto py-10 px-6">
        <section className="text-center">
          <form className="bg-white p-8 shadow-lg rounded-lg max-w-lg mx-auto">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-left font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border rounded-md p-3 focus:border-orange-600 focus:ring focus:ring-orange-200"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-left font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border rounded-md p-3 focus:border-orange-600 focus:ring focus:ring-orange-200"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-left font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full border rounded-md p-3 focus:border-orange-600 focus:ring focus:ring-orange-200"
                rows="4"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
