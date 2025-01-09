import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-2 text-lg">
            Learn more about our mission, vision, and values.
          </p>
        </div>
      </header>
      <main className="container mx-auto py-10 px-6">
        <section className="text-center">
          <p className="text-lg leading-relaxed">
            We are a team of passionate individuals dedicated to delivering the
            best service possible. Our mission is to create impactful solutions
            for everyday challenges, and our vision is a world where technology
            seamlessly integrates into every aspect of life.
          </p>
        </section>
      </main>
    </div>
  );
}
