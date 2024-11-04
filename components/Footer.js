import React from "react";

const Footer = () => {
    return (
        <footer className="footer bg-gray-800 text-white py-4 mt-auto">
            <div className="container mx-auto text-center">
                <p>&copy; 2023 Your Website. All rights reserved.</p>
                <div className="mt-2">
                    <a href="/" className="text-gray-400 hover:text-white mx-2">
                        Privacy Policy
                    </a>
                    <a href="/" className="text-gray-400 hover:text-white mx-2">
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
