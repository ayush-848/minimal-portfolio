// src/pages/Home.jsx
import React from "react";
import NavMenu from "../components/main/NavMenu";
import PageWrapper from "../components/main/PageWrapper";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Home = () => {
  const githubUsername = "ayush-848";
  const avatarUrl = `https://github.com/${githubUsername}.png`;

  return (
    <div className="relative bg-[#FFF9DB] dark:bg-[#20294B] min-h-screen">
      <NavMenu />

      <PageWrapper>
        <main className="flex flex-col items-center justify-center text-center gap-6">
          {/* Profile Image */}
          <img
            src={avatarUrl}
            alt="Ayush Deb"
            className="w-32 h-32 rounded-full border-2 border-border shadow-md"
          />

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl font-bold text-main-foreground">
            Ayush Deb
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-main-foreground/80 max-w-md">
            Full-stack Developer
          </p>
          <p className="text-base sm:text-sm text-main-foreground/80 max-w-md">
            If it’s broken, I probably deployed it. Fixing now…
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-2">
            <a
              href="/minimal-portfolio/projects"
              className="bg-main text-main-foreground border border-black px-5 py-2 rounded-md shadow-[3px_3px_0px_black] hover:brightness-95 transition"
            >
              View Projects
            </a>
            <a
              href="/minimal-portfolio/resume"
              className="bg-transparent text-main-foreground border border-black px-5 py-2 rounded-md shadow-[3px_3px_0px_black] hover:bg-main transition"
            >
              View Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-6 text-2xl text-main-foreground">
            <a
              href="https://github.com/ayushdeb"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/ayushdeb"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:hello@ayushdeb.com">
              <FaEnvelope />
            </a>
          </div>
        </main>
      </PageWrapper>
    </div>
  );
};

export default Home;
