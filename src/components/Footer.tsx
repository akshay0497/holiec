import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center"><Phone size={20} className="mr-2" /> +91 7355923271</p>
              <p className="flex items-center"><Mail size={20} className="mr-2" /> akdwivedi7355@gmail.com</p>
              <p className="flex items-center"><MapPin size={20} className="mr-2" /> kanpur</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Facebook className="cursor-pointer hover:text-purple-400" />
              <Twitter className="cursor-pointer hover:text-purple-400" />
              <Instagram className="cursor-pointer hover:text-purple-400" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;