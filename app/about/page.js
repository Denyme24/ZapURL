"use client";
import React from "react";

const AboutUs = () => {
  return (
    <div className="flex justify-center items-center h-[80vh] overflow-hidden">
      <div className="max-w-2xl w-[50vw] p-6 overflow-hidden">
        <h1 className="text-4xl font-extrabold text-center mb-6">About Us</h1>
        <p className="text-lg mb-4">
          Welcome to ZapURL, your number one source for shortening URLs. We're dedicated to providing you the very best of URL shortening services, with an emphasis on ease of use, reliability, and efficiency.
        </p>
        <p className="text-lg mb-4">
          Founded in 2024, ZapURL has come a long way from its beginnings. When we first started out, our passion for making the web a more accessible place drove us to start our own business.
        </p>
        <p className="text-lg mb-4">
          We hope you enjoy our service as much as we enjoy offering it to you. If you have any questions or comments, please don't hesitate to contact us.
        </p>
        <p className="text-lg mb-4">
          Sincerely,
          <br />
          The ZapURL Team
        </p>
      </div>
    </div>
  );
};

export default AboutUs;