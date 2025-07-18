import { useState } from "react";
import logo from "../assets/hehe.png";
import Navigate from "../components/nevigate";
import { Link } from "react-router-dom";


function Badge({ children, className }) {
  return (
    <span
      className={
        "inline-block rounded-full px-4 py-2 font-semibold text-sm " + className
      }
    >
      {children}
    </span>
  );
}

function Button({ children, className, variant = "solid", size = "md", ...props }) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded focus:outline-none transition ";
  const sizes = {
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-xl",
    
  };
  const variants = {
    solid:
      "bg-amber-600 text-white hover:bg-amber-700 focus:ring-4 focus:ring-amber-300",
    outline:
      "border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white focus:ring-4 focus:ring-amber-300",
  };
  return (
    <button
      {...props}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className || ""}`}
    >
      {children}
    </button>
  );
}

function StarIcon({ className }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.286 3.966c.3.922-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.176 0l-3.39 2.462c-.784.57-1.838-.196-1.54-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.037 9.393c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.966z" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
             
              <img src={logo} alt="Logo" className="h-8 w-8 object-cover" />
              <span className="text-2xl font-bold text-gray-900">CreatorMarket</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
                <Link to="/login">
              <Button variant="outline">Sign In</Button></Link>
              <Link to="/login">
              <Button>Join the Story</Button></Link>
              
            </div>
          </div>
        </div>
      </nav>

    
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-white text-gray-900 overflow-hidden">
        {/* Background Image with Opacity */}
        <img
            src={logo}
            alt="Logo"
            className="absolute inset-0 w-full h-full object-contain opacity-10 z-0 mx-auto"
            style={{ pointerEvents: "none" }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="mb-6 bg-gray-700 text-gray-300 border border-gray-600 text-lg px-4 py-2 inline-block rounded">
            Chapter 1: The Shadow
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            For <span className="text-amber-400">Generations</span>,<br />
            A Shadow Lingered...
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 mb-12 leading-relaxed">
            Over the world of unique and luxury goods, doubt cast its long shadow.
            <br />
            <em className="text-amber-600">Is this really handmade? Is it truly one of a kind?</em>
            </p>
            <div className="flex justify-center">
            <svg
                className="h-8 w-8 text-amber-400 animate-bounce"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            </div>
        </div>
        </section>

      {/* Chapter 2: The Crisis */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-red-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-red-100 text-red-800 border-red-200 text-lg px-4 py-2">
              Chapter 2: The Crisis
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              This Mistrust Didn't Come From <span className="text-red-600">Nowhere</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              It was born from years of pain, deception, and broken promises...
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="border-2 border-red-200 bg-white shadow-lg transform hover:scale-105 transition-transform p-8 text-center rounded-lg">
              <svg
                className="h-16 w-16 text-red-500 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4m0 4h.01M21 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z"
                ></path>
              </svg>
              <h3 className="text-2xl font-bold text-red-800 mb-4">Counterfeit Floods</h3>
              <p className="text-gray-700 text-lg">
                Fake products drowning the market, making every purchase feel like a gamble
              </p>
            </div>

            <div className="border-2 border-orange-200 bg-white shadow-lg transform hover:scale-105 transition-transform p-8 text-center rounded-lg">
              <svg
                className="h-16 w-16 text-orange-500 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11c.828 0 1.5-.672 1.5-1.5S12.828 8 12 8s-1.5.672-1.5 1.5S11.172 11 12 11zM12 12v5m0 4a9 9 0 100-18 9 9 0 000 18z"
                ></path>
              </svg>
              <h3 className="text-2xl font-bold text-orange-800 mb-4">False Claims</h3>
              <p className="text-gray-700 text-lg">
                Empty promises of "handmade" and "exclusive" without proof or verification
              </p>
            </div>

            <div className="border-2 border-yellow-200 bg-white shadow-lg transform hover:scale-105 transition-transform p-8 text-center rounded-lg">
              <svg
                className="h-16 w-16 text-yellow-500 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.354a4 4 0 014 0v7.292a4 4 0 11-8 0V4.354a4 4 0 014 0z"
                ></path>
              </svg>
              <h3 className="text-2xl font-bold text-yellow-800 mb-4">Broken Dreams</h3>
              <p className="text-gray-700 text-lg">
                Passionate creators unable to protect their work or prove their authenticity
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-gray-800 mb-4">The result?</p>
            <p className="text-3xl font-bold text-red-600">A Growing Divide</p>
            <p className="text-xl text-gray-600 mt-4">Between passionate creators and cautious buyers</p>
          </div>
        </div>
      </section>

      {/* Chapter 3: The Turning Point */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-green-600/20"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-amber-600 text-white text-lg px-4 py-2">Chapter 3: The Change</Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            But Now, <span className="text-amber-400">That's Changing</span>
          </h2>
          <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
            A new dawn breaks over the creator economy...
            <br />
            <span className="text-amber-200">Hope emerges from the shadows.</span>
          </p>
          <div className="flex justify-center">
            <svg
              className="h-12 w-12 text-amber-400 animate-pulse"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16h-1v-4h-1m1-4h.01M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z"
              ></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Chapter 4: The Solution */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 via-white to-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-amber-600 text-white text-lg px-4 py-2">Chapter 4: The Solution</Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Welcome to <span className="text-amber-600">CreatorMarket</span>
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12">
              A dynamic web API-based platform built to restore confidence and connection in the creator economy.
              Where artists and makers showcase their original physical products—hand-stitched jackets, custom-crafted rings,
              canvases painted with soul.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">What Sets Us Apart?</h3>
              <div className="bg-gradient-to-br from-amber-100 to-green-100 p-8 rounded-2xl border-2 border-amber-200">
                <div className="flex items-center mb-6">
                  <svg
                    className="h-12 w-12 text-amber-600 mr-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <h4 className="text-3xl font-bold text-gray-900">The Creator Stamp</h4>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  Our revolutionary certification system goes beyond traditional verification. By embedding
                  steganographic markers into the product itself, we offer a secure and invisible stamp of authenticity
                  that links each creation back to its verified origin.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  CreatorMarket is a dedicated marketplace where only these verified, original goods are showcased and
                  traded—ensuring unmatched trust between creators and buyers.
                </p>
                <p className="text-xl font-semibold text-amber-800">
                  It's not just about a stamp—it's about reclaiming trust, protecting creativity, and empowering both
                  artists and buyers with transparency through cutting-edge technology.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="p-12 bg-gradient-to-br from-white to-amber-50 border-4 border-amber-300 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform rounded-xl text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg
                    className="h-16 w-16 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">CREATOR VERIFIED</h3>
                <p className="text-gray-700 mb-6 text-lg">
                  This product is officially certified as authentic and original
                </p>
                <Badge className="bg-amber-600 text-white text-lg px-4 py-2">Stamp #CM-2024-001</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 5: Our Promise */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-green-600 text-white text-lg px-4 py-2">Chapter 5: Our Promise</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            On CreatorMarket, <span className="text-green-400">Integrity</span> Isn't Optional
          </h2>
          <p className="text-2xl text-gray-300 mb-12 leading-relaxed">It's embedded in the system.</p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <svg
                className="h-16 w-16 text-green-400 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4m0 4h.01M21 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z"
                ></path>
              </svg>
              <h3 className="text-xl font-bold mb-2">Trust</h3>
              <p className="text-gray-400">Every transaction backed by verification</p>
            </div>
            <div className="text-center">
              <svg
                className="h-16 w-16 text-green-400 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
                ></path>
              </svg>
              <h3 className="text-xl font-bold mb-2">Creativity</h3>
              <p className="text-gray-400">Protecting and celebrating original work</p>
            </div>
            <div className="text-center">
              <svg
                className="h-16 w-16 text-green-400 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5v-2a8 8 0 00-16 0v2h5m-1-10a4 4 0 118 0 4 4 0 01-8 0z"
                ></path>
              </svg>
              <h3 className="text-xl font-bold mb-2">Connection</h3>
              <p className="text-gray-400">Bridging creators and buyers with confidence</p>
            </div>
          </div>

          <p className="text-3xl font-bold text-green-400 mb-8">Because in a world where originality matters,</p>
          <p className="text-4xl font-bold text-white">Authenticity should never be in question.</p>
        </div>
      </section>

      {/* Chapter 6: The Voices */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-green-600 text-white text-lg px-4 py-2">Chapter 6: The Voices</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Stories of <span className="text-green-600">Transformation</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Testimonial 1 */}
            <div className="p-8 bg-white shadow-xl border-l-4 border-amber-500 rounded">
              <div className="flex items-center mb-6 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="text-lg text-gray-700 mb-6 italic">
                "For years, I watched my handcrafted jewelry get lost in a sea of mass-produced imitations.
                CreatorMarket didn't just give me a platform—it gave me my voice back. The Creator Stamp means my
                customers know they're getting something truly special, made with love and skill."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-amber-800 font-bold text-lg">SM</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">Sarah Martinez</p>
                  <p className="text-gray-600">Jewelry Artist & Creator</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="p-8 bg-white shadow-xl border-l-4 border-green-500 rounded">
              <div className="flex items-center mb-6 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 fill-green-400 text-green-400" />
                ))}
              </div>
              <blockquote className="text-lg text-gray-700 mb-6 italic">
                "I've been burned by counterfeits too many times to count. When I found CreatorMarket, I finally felt
                safe investing in unique pieces again. Knowing each item is verified gives me the confidence to support
                real artists and their incredible work."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-800 font-bold text-lg">DJ</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">David Johnson</p>
                  <p className="text-gray-600">Art Collector & Buyer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Epilogue: Your Story Begins */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-white/20 text-white text-lg px-4 py-2 backdrop-blur-sm">
            Epilogue: Your Story Begins
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Ready to Write Your <span className="text-yellow-200">Chapter</span>?
          </h2>
          <p className="text-2xl mb-12 leading-relaxed">
            Whether you're a creator with a story to tell through your craft,
            <br />
            or a buyer seeking authentic treasures with real stories...
          </p>
          <p className="text-3xl font-bold mb-12 text-yellow-200">
            Your journey in the authentic creator economy starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/login">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 bg-transparent text-xl px-8 py-4"
            >
              Start Your Journey
            </Button></Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              
              <img src={logo} alt="Logo" className="h-8 w-8 object-cover" />

              <span className="text-3xl font-bold">CreatorMarket</span>
            </div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Where every product has a story, every creator has a voice, and every buyer finds authenticity.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12 text-gray-400">
            <div>
              <h3 className="font-bold mb-4 text-lg text-white">For Creators</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-amber-400">
                    Join the Marketplace
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400">
                    Creator Stamp Certification
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400">
                    FAQ & Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-lg text-white">For Buyers</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-amber-400">
                    Browse Collections
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400">
                    Authenticity Guarantee
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-lg text-white">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-amber-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-lg text-white">Connect</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-amber-400">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} CreatorMarket. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
