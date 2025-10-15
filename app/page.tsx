"use client"

import { useState } from "react"
import ClickSpark from "@/components/click-spark"
import LogoLoop from "@/components/logo-loop"
import ASCIIText from "@/components/ascii-text"
import ProfileCard from "@/components/profile-card"
import PillNav from "@/components/pill-nav"
import PixelBlast from "@/components/PixelBlast"

export default function Home() {
  const [showCard, setShowCard] = useState(false)

  const techLogos = [
    {
      node: (
        <div className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <span className="font-mono text-sm">GitHub</span>
        </div>
      ),
      href: "https://github.com",
      ariaLabel: "GitHub",
    },
    {
      node: (
        <div className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L1.75 6v12L12 24l10.25-6V6L12 0zm-1.775 18.55v-6.3L4.85 9.05v6.3l5.375 3.2zm0-7.45L4.85 7.9 10.225 4.7 15.6 7.9l-5.375 3.2zm7.125 4.25l-5.375 3.2v-6.3l5.375-3.2v6.3z" />
          </svg>
          <span className="font-mono text-sm">Render</span>
        </div>
      ),
      href: "https://render.com",
      ariaLabel: "Render",
    },
    {
      node: (
        <div className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.998 0C5.366 0 0 5.367 0 12c0 6.633 5.366 12 11.998 12C18.629 24 24 18.633 24 12c0-6.633-5.371-12-12.002-12zm.255 3.855c4.466 0 8.09 3.624 8.09 8.09s-3.624 8.09-8.09 8.09-8.09-3.624-8.09-8.09 3.624-8.09 8.09-8.09zm-4.045 1.545l2.182 2.182-2.182 2.182 2.182 2.182 2.182-2.182 2.182 2.182 2.182-2.182-2.182-2.182 2.182-2.182-2.182-2.182-2.182 2.182-2.182-2.182z" />
          </svg>
          <span className="font-mono text-sm">Pycord</span>
        </div>
      ),
      href: "https://pycord.dev",
      ariaLabel: "Pycord",
    },
    {
      node: (
        <div className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.13-.64-.09-.71-.07-.77-.04-.84-.01-1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
          </svg>
          <span className="font-mono text-sm">Python</span>
        </div>
      ),
      href: "https://python.org",
      ariaLabel: "Python",
    },
  ]

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Setup", href: "#setup" },
    { label: "About", href: "#about" },
    { label: "GitHub", href: "https://github.com/chersbobers" },
  ]

  return (
    <ClickSpark sparkColor="#00ff88" sparkSize={12} sparkRadius={20} sparkCount={12} duration={500}>
      <main className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0f]">
        {/* Modern Bayer Dithering PixelBlast Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <PixelBlast
            variant="circle"
            pixelSize={6}
            color="#B19EEF"
            patternScale={3}
            patternDensity={1.2}
            pixelSizeJitter={0.5}
            enableRipples
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            liquid
            liquidStrength={0.12}
            liquidRadius={1.2}
            liquidWobbleSpeed={5}
            speed={0.6}
            edgeFade={0.25}
            transparent
          />
        </div>

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* ASCII Text Hero */}
        <div id="home" className="relative h-[50vh] w-full">
          <ASCIIText
            text="Tooly Bot"
            asciiFontSize={6}
            textFontSize={120}
            textColor="#00ff88"
            planeBaseHeight={8}
            enableWaves={false}
          />
        </div>

        {/* Tooly Bot Header Section */}
        <div className="relative z-10 text-center px-4 py-8">
          <h1 className="text-5xl md:text-6xl font-bold text-[#9b59b6] mb-4">Tooly Bot</h1>
          <p className="text-xl text-white/70 font-mono">A perfect Discord bot for the perfect user!</p>
        </div>

        {/* Setup Sections */}
        <div id="setup" className="relative z-10 max-w-5xl mx-auto px-4 py-12 space-y-8">
          {/* Code Setup Section */}
          <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-8">
            <h2 className="text-3xl font-bold text-[#9b59b6] mb-6">Code Setup</h2>
            <div className="space-y-4">
              <div className="bg-[#0f0f0f] border-l-4 border-[#9b59b6] p-4 rounded">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-[#9b59b6] text-white rounded-full font-bold mr-3">
                  1
                </span>
                <span className="text-white/90">Fork the repo or clone</span>
              </div>
              <div className="bg-[#0f0f0f] border-l-4 border-[#9b59b6] p-4 rounded">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-[#9b59b6] text-white rounded-full font-bold mr-3">
                  2
                </span>
                <span className="text-white/90">
                  Upload to GitHub then Render and set the{" "}
                  <code className="bg-[#0f0f0f] px-2 py-1 rounded text-[#b19cd9] border border-[#333] font-mono">
                    .env
                  </code>{" "}
                  up you will need the token from the next section
                </span>
              </div>
              <div className="bg-[#0f0f0f] border-l-4 border-[#9b59b6] p-4 rounded">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-[#9b59b6] text-white rounded-full font-bold mr-3">
                  3
                </span>
                <span className="text-white/90">Edit the code a bit if you don't want stock Tooly</span>
              </div>
              <div className="bg-[#0f0f0f] border-l-4 border-[#9b59b6] p-4 rounded">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-[#9b59b6] text-white rounded-full font-bold mr-3">
                  4
                </span>
                <span className="text-white/90">Do the Discord bot setup below</span>
              </div>
            </div>
          </div>

          {/* Discord Bot Setup Section */}
          <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-8">
            <h2 className="text-3xl font-bold text-[#9b59b6] mb-6">Discord Bot Setup</h2>
            <div className="space-y-4">
              <div className="bg-[#0f0f0f] border-l-4 border-[#9b59b6] p-4 rounded">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-[#9b59b6] text-white rounded-full font-bold mr-3">
                  1
                </span>
                <span className="text-white/90">
                  Go to{" "}
                  <a
                    href="https://discord.com/developers/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9b59b6] hover:underline"
                  >
                    discord.com/developers
                  </a>{" "}
                  and sign in
                </span>
              </div>
              <div className="bg-[#0f0f0f] border-l-4 border-[#9b59b6] p-4 rounded">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-[#9b59b6] text-white rounded-full font-bold mr-3">
                  2
                </span>
                <span className="text-white/90">Make a new app and name it</span>
              </div>
              <div className="bg-[#0f0f0f] border-l-4 border-[#9b59b6] p-4 rounded">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-[#9b59b6] text-white rounded-full font-bold mr-3">
                  3
                </span>
                <span className="text-white/90">
                  Go to bot and enable Presence Intent, Server Members Intent and Message Content Intent
                </span>
              </div>
              <div className="bg-[#0f0f0f] border-l-4 border-[#9b59b6] p-4 rounded">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-[#9b59b6] text-white rounded-full font-bold mr-3">
                  4
                </span>
                <span className="text-white/90">
                  Click reset token in the bot page and then copy that and set that as environment variable{" "}
                  <code className="bg-[#0f0f0f] px-2 py-1 rounded text-[#b19cd9] border border-[#333] font-mono">
                    TOKEN
                  </code>{" "}
                  which its value is the token you copied
                </span>
              </div>
            </div>
          </div>

          {/* Success Banner */}
          <div className="bg-[#9b59b6] rounded-lg p-6 text-center">
            <p className="text-xl font-bold text-white">
              BOOM your done have fun (commands can take up to 1hr to cache)
            </p>
          </div>
        </div>

        {/* Profile Card Section */}
        <div id="about" className="relative z-10 flex flex-col items-center justify-center gap-8 px-4 py-12">
          <button
            onClick={() => setShowCard(!showCard)}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-mono font-bold rounded-lg hover:scale-105 transition-transform shadow-lg shadow-purple-500/50"
          >
            {showCard ? "Hide Profile" : "Show Profile"}
          </button>

          {showCard && (
            <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-500">
              <ProfileCard
                avatarUrl="/pixel-art-avatar-developer.jpg"
                miniAvatarUrl="/pixel-art-avatar-small.jpg"
                name="chersbobers"
                title="Discord Bot Developer"
                handle="chersbobers"
                status="🟢 Online"
                contactText="Contact"
                showUserInfo={true}
                enableTilt={true}
                behindGradient="radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y), hsla(280,100%,70%,var(--card-opacity)) 4%, hsla(280,50%,60%,calc(var(--card-opacity)*0.75)) 10%, hsla(280,25%,50%,calc(var(--card-opacity)*0.5)) 50%, hsla(280,0%,40%,0) 100%), radial-gradient(35% 52% at 55% 20%, #00ff88c4 0%, #073aff00 100%), radial-gradient(100% 100% at 50% 50%, #00c1ffff 1%, #073aff00 76%), conic-gradient(from 124deg at 50% 50%, #8b5cf6ff 0%, #06b6d4ff 40%, #06b6d4ff 60%, #8b5cf6ff 100%)"
                innerGradient="linear-gradient(145deg, #1a1a2e8c 0%, #16213e44 100%)"
                onContactClick={() => alert("Contact chersbobers!")}
              />
            </div>
          )}
        </div>

        {/* Tech Stack Logo Loop */}
        <div className="relative z-10 py-16">
          <h2 className="text-center text-2xl font-mono font-bold text-white/90 mb-8 tracking-wider">
            {"<"} TECH STACK {">"}
          </h2>
          <LogoLoop
            logos={techLogos}
            speed={80}
            direction="left"
            logoHeight={40}
            gap={48}
            pauseOnHover={true}
            fadeOut={true}
            fadeOutColor="#0a0a0f"
            scaleOnHover={true}
          />
        </div>

        {/* Footer */}
        <footer className="relative z-10 py-8 text-center border-t border-[#333] mt-16">
          <p className="text-white/60 font-mono text-sm mb-2">
            Click anywhere for sparks ✨ | Built with Next.js & Three.js
          </p>
          <p className="text-white/40 text-xs">Tooly Bot</p>
        </footer>
      </main>
    </ClickSpark>
  )
}
