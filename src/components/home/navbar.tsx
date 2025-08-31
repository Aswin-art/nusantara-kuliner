/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Tentang Kami", href: "#tentang" },
  { name: "Katalog", href: "#katalog" },
  { name: "Testimoni", href: "#testimoni" },
  { name: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-white shadow-sm sticky top-0 z-40">
        <div className="w-full bg-white p-3">
          <div className="bg-red-600 p-3 rounded-md text-white text-center text-xs md:text-sm">
            Gratis ongkir min. pesanan Rp100.000 | Kode <b>NUSANTARAKU10</b>{" "}
            untuk diskon 10% pesanan pertama
          </div>
        </div>
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
          {/* Logo - Always on left */}
          <div className="flex-shrink-0">
            <a href="/">
              <img
                src="/img/logo.png"
                alt="Nusantara Kuliner Logo"
                className="w-16 bg-black rounded-full p-1"
              />
            </a>
          </div>

          {/* Desktop Navigation Links - Center */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-orange-600 text-base font-medium transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - WhatsApp Button & Hamburger */}
          <div className="flex items-center gap-3">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/628123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-xl text-white shadow hover:scale-105 transition-transform duration-200"
              style={{
                background:
                  "linear-gradient(to right, var(--primary-300), var(--primary-600))",
              }}
            >
              {/* <Phone className="w-4 h-4 md:w-5 md:h-5" /> */}
              <Image
                src="/icons/whatsapp.png"
                alt="WhatsApp"
                width={20}
                height={20}
              />
              <p className="text-sm md:text-base">Pesan via Whatsapp</p>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 md:hidden transition-opacity duration-300"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Sidebar Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gradient-to-r from-orange-50 to-red-50">
          <div className="flex items-center gap-3">
            <img
              src="/img/logo.png"
              alt="Nusantara Kuliner"
              className="w-10 h-8"
            />
            <span className="text-lg font-semibold text-gray-800">
              Nusantara Kuliner
            </span>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-full hover:bg-white/70 transition-colors duration-200"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="px-6 py-8">
          <div className="space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center py-3 px-4 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg text-lg font-medium transition-all duration-200 group"
                onClick={() => setOpen(false)}
              >
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile WhatsApp Button */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <a
              href="https://wa.me/628123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-xl text-white shadow-lg hover:scale-105 transition-transform duration-200"
              style={{
                background:
                  "linear-gradient(to right, var(--primary-300), var(--primary-600))",
              }}
              onClick={() => setOpen(false)}
            >
              <Phone className="w-5 h-5" />
              Pesan via Whatsapp
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <h3 className="text-sm font-semibold text-gray-800 mb-3">
              Hubungi Kami
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>📧 info@nusantarakuliner.com</p>
              <p>📱 +62 812-3456-7890</p>
              <p>📍 Jakarta, Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
