import React, { useState } from "react";
import {
  FaMicrophone,
  FaStop,
  FaPaperPlane,
  FaRegKeyboard,
  FaHistory,
  FaSyncAlt,
  FaInfoCircle,
} from "react-icons/fa";
import { Button, Modal, Typography } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
const { Text,Title } = Typography;

import {FcCamera} from "react-icons/fc"
import SavaGuide  from "../../assets/images/savaguide1.png";

const TryAI = () => {
  const [message, setMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [selectedOption, setSelectedOption] = useState("cultural");

  // Sample chat history
  const sampleHistory = [
    { type: "user", text: "Tell me about Kenyan wedding traditions" },
    {
      type: "ai",
      text: 'Traditional Kenyan weddings are rich in cultural symbolism. For example, in many communities, the dowry ceremony called "Ruracio" is an essential part where...',
    },
    { type: "user", text: "What languages are spoken in Kenya?" },
    {
      type: "ai",
      text: "Kenya has two official languages: English and Swahili. However, there are over 40 indigenous languages spoken across different communities...",
    },
  ];

  // Sample interaction categories
  const categories = [
    { id: "cultural", label: "Cultural Guide" },
    { id: "tourist", label: "Tourist Info" },
    { id: "educational", label: "Learn History" },
    { id: "customs", label: "Local Customs" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Left Sidebar - Options */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-semibold mb-4 text-gray-700">Select Mode</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedOption(category.id)}
                    className={`w-full text-left px-4 py-2 rounded-md transition ${
                      selectedOption === category.id
                        ? "bg-indigo-100 text-indigo-700"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4">
              <button
                onClick={() => setShowHistory(!showHistory)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
              >
                <FaHistory />
                <span>Chat History</span>
              </button>
            </div>
          </div>

                  {/* Main Content Area */}
                  
          <div className="md:col-span-3 bg-white rounded-lg shadow-sm min-h-[600px] flex flex-col">
            <LocationModal />
            {/* 3D Avatar Display Area */}
            <div className="h-96 bg-gray-800 rounded-t-lg relative">
              {/* Placeholder for 3D model - replace with actual implementation */}
              <img
                src={SavaGuide}
                alt="3D Avatar"
                className="w-full h-full object-contain rounded-t-lg opacity-50"
              />
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70">
                  <FaSyncAlt />
                </button>
                <button className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70">
                  <FaInfoCircle title="ask me about kenyan culture" />
                </button>
              </div>
            </div>

            {/* Chat Interface */}
            <div className="flex-1 p-4 flex flex-col">
              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto mb-4">
                <div className={`mb-4 text-right`}>
                  <div
                    className={`inline-block p-3 rounded-lg max-w-[80%] bg-indigo-100 text-indigo-900 
                      `}
                  >
                    Hello, My Name is Biggie. Your guide to having and
                    exerinecing kenyan culture like you have never before. Try
                    asking me something about the keyan culture
                  </div>
                </div>
                {showHistory &&
                  sampleHistory.map((msg, index) => (
                    <div
                      key={index}
                      className={`mb-4 ${
                        msg.type === "user" ? "text-right" : "text-left"
                      }`}
                    >
                      <div
                        className={`inline-block p-3 rounded-lg max-w-[80%] ${
                          msg.type === "user"
                            ? "bg-indigo-100 text-indigo-900"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
              </div>

              {/* Input Area */}
              <div className="border-t pt-4">
                <div className="flex flex-wrap gap-2 items-center">
                  {/* Microphone/Stop Recording Button */}
                  <button
                    onClick={() => setIsRecording(!isRecording)}
                    className={`p-3 rounded-full transition ${
                      isRecording
                        ? "bg-red-500 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                    aria-label={
                      isRecording ? "Stop Recording" : "Start Recording"
                    }
                  >
                    {isRecording ? (
                      <FaStop size={20} />
                    ) : (
                      <FaMicrophone size={20} />
                    )}
                  </button>

                  {/* Camera Button */}
                  <button
                    onClick={() => console.log("Open Camera Functionality")}
                    className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
                    aria-label="Open Camera"
                  >
                    <FcCamera size={25} />
                  </button>

                  {/* Text Input */}
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ask your question..."
                      className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-indigo-500"
                    />
                    <button
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      aria-label="Open Keyboard"
                    >
                      <FaRegKeyboard size={20} />
                    </button>
                  </div>

                  {/* Send Button */}
                  <button
                    onClick={() => {
                      console.log("Sending Message:", message);
                      setMessage("");
                    }}
                    disabled={!message}
                    className={`p-3 rounded-full transition ${
                      message
                        ? "bg-indigo-500 text-white hover:bg-indigo-600"
                        : "bg-gray-100 text-gray-400"
                    }`}
                    aria-label="Send Message"
                  >
                    <FaPaperPlane size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Context */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-semibold mb-4 text-gray-700">
                Suggested Topics
              </h3>
              <div className="space-y-2">
                <button className="w-full text-left p-2 text-sm rounded hover:bg-gray-100">
                  Traditional ceremonies
                </button>
                <button className="w-full text-left p-2 text-sm rounded hover:bg-gray-100">
                  Popular tourist sites
                </button>
                <button className="w-full text-left p-2 text-sm rounded hover:bg-gray-100">
                  Local cuisine
                </button>
                <button className="w-full text-left p-2 text-sm rounded hover:bg-gray-100">
                  Cultural etiquette
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TryAI;



function LocationModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGetLocation = async () => {
    setLoading(true);
    setError(null);

    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await fetch(
            `https://geocode.xyz/${latitude},${longitude}?geoit=json`
          );
          const data = await response.json();

          if (data.error) {
            throw new Error(
              data.error.description || "Unable to fetch location details."
            );
          }

          setLocation({
            city: data.city || "Unknown city",
            state: data.state || "Unknown state",
            country: data.country || "Unknown country",
            staddress: data.staddress || "Unknown Address",
            geocode: data.geocode || "Unknown Location",
            timezone: data.timezone || "Unknown Timezone",
            latitude,
            longitude,
          });
        } catch (fetchError) {
          setError("Failed to retrieve location details.");
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError(
          "Unable to fetch location. Make sure location access is enabled."
        );
        setLoading(false);
      }
    );
  };

  return (
    <div className="flex justify-center items-center my-4">
      {/* Button to Trigger Modal */}
      <Button
        type="primary"
        icon={<EnvironmentOutlined />}
        onClick={() => setIsModalOpen(true)}
      >
        Share Your Location
      </Button>

      {/* Ant Design Modal */}
      <Modal
        title="Allow Location Access"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={[
          <Button key="cancel" onClick={() => setIsModalOpen(false)}>
            Cancel
          </Button>,
          <Button
            key="confirm"
            type="primary"
            loading={loading}
            onClick={handleGetLocation}
          >
            {loading ? "Fetching Location..." : "Share Location"}
          </Button>,
        ]}
      >
        <div className="text-center">
          {!location && !error && (
            <p className="text-gray-600">
              Please allow access to your location to find out where you are.
            </p>
          )}
          {error && <p className="text-red-600">{error}</p>}
          {location && (
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-gray-700">
                Location Details
              </h3>
              <p>
                <strong>City:</strong> {location.city}
              </p>
              <p>
                <strong>State:</strong> {location.state}
              </p>
              <p>
                <strong>Country:</strong> {location.country}
              </p>
              <p>
                <strong>Address:</strong> {location.staddress}
              </p>
              <p>
                <strong>Coordinates:</strong> {location.latitude},{" "}
                {location.longitude}
              </p>
              <p>
                <strong>Timezone:</strong> {location.timezone}
              </p>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}