import React from "react";
import {
  FaRobot,
  FaGlobeAfrica,
  FaGraduationCap,
  FaLocationArrow,
  FaUsers,
  FaPlane,
  FaBook,
  FaArrowRight,
  FaMapMarkedAlt,
  FaMicrophone,
  FaLightbulb,
  FaUniversity,
} from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <header className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Explore Kenya's Rich Culture
            <br />
            With Your AI Avatar Guide
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-orange-100">
            Experience an interactive 3D journey through Kenya's heritage,
            history, and tourism
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-orange-500 hover:bg-orange-400 px-8 py-3 rounded-full text-lg transition flex items-center justify-center gap-2">
              Start Exploring <FaArrowRight />
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-full text-lg transition">
              Watch Demo
            </button>
          </div>
        </div>
      </header>
      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Experience Kenya Like Never Before
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaGlobeAfrica className="text-4xl text-orange-600" />,
                title: "Interactive 3D Experience",
                description:
                  "Engage with a lifelike AI avatar that brings Kenya's culture to life through natural conversations and personalized interactions",
              },
              {
                icon: <FaBook className="text-4xl text-orange-600" />,
                title: "Rich Cultural Knowledge",
                description:
                  "Access comprehensive information about Kenya's traditions, customs, and historical significance",
              },
              {
                icon: <FaLocationArrow className="text-4xl text-orange-600" />,
                title: "Smart Location Features",
                description:
                  "Receive region-specific insights and recommendations based on your location or interests",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section id="audiences" className="py-20 bg-orange-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Who It's For</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-6">
              <FaPlane className="text-5xl text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Tourists</h3>
              <p className="text-gray-600">
                Get personalized travel recommendations and cultural insights
                for an authentic Kenyan experience
              </p>
            </div>
            <div className="text-center p-6">
              <FaGraduationCap className="text-5xl text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">
                Students & Educators
              </h3>
              <p className="text-gray-600">
                Access an innovative tool for learning about Kenyan culture and
                history
              </p>
            </div>
            <div className="text-center p-6">
              <FaUsers className="text-5xl text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Global Enthusiasts</h3>
              <p className="text-gray-600">
                Discover and connect with Kenya's rich cultural heritage from
                anywhere in the world
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <FaMicrophone className="text-3xl text-orange-600" />,
                title: "Voice or Text Input",
                description: "Interact naturally with your AI guide",
              },
              {
                icon: <FaLightbulb className="text-3xl text-orange-600" />,
                title: "AI Processing",
                description: "Get intelligent responses based on your queries",
              },
              {
                icon: <FaMapMarkedAlt className="text-3xl text-orange-600" />,
                title: "Location Awareness",
                description: "Receive region-specific information",
              },
              {
                icon: <FaUniversity className="text-3xl text-orange-600" />,
                title: "Cultural Insights",
                description: "Learn about traditions and customs",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Explore Kenya?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Join us on a journey through Kenya's rich cultural heritage with
            your personal AI guide
          </p>
          <button className="bg-white text-orange-600 hover:bg-orange-100 px-8 py-3 rounded-full text-lg transition">
            Get Early Access
          </button>
        </div>
      </section>



    </div>
  );
};

export default LandingPage;
