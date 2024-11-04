"use client";
import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-black mb-6">About Us</h1>
        <p className="text-gray-700 text-lg mb-4">
          Welcome to ZapURL, your number one source for shortening URLs. We're dedicated to providing you the very best of URL shortening services, with an emphasis on ease of use, reliability, and efficiency.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          Founded in 2023, ZapURL has come a long way from its beginnings. When we first started out, our passion for making the web a more accessible place drove us to start our own business.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          We hope you enjoy our service as much as we enjoy offering it to you. If you have any questions or comments, please don't hesitate to contact us.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          Sincerely,
          <br />
          The ZapURL Team
        </p>
      </div>
    </div>
  );
};

export default AboutUs;