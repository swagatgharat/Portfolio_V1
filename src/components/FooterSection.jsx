import React from 'react';
import { footer_assets } from '../assets/footer/footer_assets.js';

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center select-none">
        <img
          src={footer_assets.profile_logo}
          alt="Profile Logo"
          className="w-36 mx-auto mb-2 pointer-events-none"
        />

        <div className="w-max flex items-center gap-2 mx-auto cursor-default select-none">
          <img
            src={footer_assets.mail_icon}
            alt="Mail Icon"
            className="w-6 pointer-events-none"
          />
          <span>johndoe@gmail.com</span>
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p className="cursor-default select-none">
          © 2025 John Doe. All rights reserved.
        </p>

        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">

          <li>
            <div className="w-max flex items-center gap-2 mx-auto cursor-default select-none">
              <img
                src={footer_assets.github}
                alt="Mail Icon"
                className="w-6 pointer-events-none"
              />
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline cursor-pointer hover:underline select-none"
                style={{ userSelect: 'none', cursor: 'pointer' }}
              >
                Github
              </a>
            </div>
          </li>

          <li>
            <div className="w-max flex items-center gap-2 mx-auto cursor-default select-none">
              <img
                src={footer_assets.linkedin}
                alt="Mail Icon"
                className="w-6 pointer-events-none"
              />
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline cursor-pointer hover:underline select-none"
                style={{ userSelect: 'none', cursor: 'pointer' }}
              >
                LinkedIn
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
