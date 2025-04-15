import Link from "next/link";
import { BackgroundBeams } from "./ui/background-beams";

export default function Footer() {
  return (
    <footer className="relative antialiased text-gray-300 py-10 px-6 bg-neutral-950">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-8">
        <div>
          <div className="flex items-center space-x-2">
            <div className="bg-green-500 p-2 rounded-full">
              <span className="text-white text-lg font-bold">💊</span>
            </div>
            <span className="text-xl font-semibold text-white">INcure</span>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            Your trusted partner for medicine delivery
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Browser Medicines
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                How It Works
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Delivery & Support</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-white">
                Fast & Secure Delivery
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Order via WhatsApp
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Payment Methods
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Service Areas
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Refund & Cancellation Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <p className="text-green-400 font-semibold text-lg mb-4">
            1-800-MEDIDOOR
          </p>
          <div className="flex space-x-4 text-gray-400">
            <Link href="#">
              <i className="fab fa-facebook-f hover:text-white"></i>
            </Link>
            <Link href="#">
              <i className="fab fa-twitter hover:text-white"></i>
            </Link>
            <Link href="#">
              <i className="fab fa-instagram hover:text-white"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 flex justify-between items-center text-sm text-gray-500">
        <p>© 2025 INcure. All rights reserved.</p>

        <Link
          href="https://wa.me/1234567890"
          className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.52 3.48A12.29 12.29 0 0012.04 0C5.39 0 .14 5.18.14 11.62c0 2.04.54 4.04 1.56 5.79L0 24l6.82-1.78a12.32 12.32 0 005.22 1.24h.01c6.64 0 12.04-5.38 12.04-12.01 0-3.2-1.27-6.21-3.61-8.48zM12.04 22.2c-1.59 0-3.15-.42-4.52-1.2l-.32-.18-4.04 1.05 1.07-3.95-.21-.33a9.93 9.93 0 01-1.51-5.36c0-5.47 4.52-9.93 10.1-9.93 2.66 0 5.16 1.03 7.04 2.9a9.87 9.87 0 012.92 7.03c0 5.47-4.52 9.97-10.03 9.97z" />
            <path d="M17.04 14.31c-.27-.13-1.6-.79-1.84-.88-.25-.09-.43-.13-.6.13-.17.26-.69.88-.84 1.06-.15.17-.31.2-.58.07-.27-.13-1.13-.42-2.15-1.34-.79-.71-1.31-1.59-1.47-1.86-.15-.27-.02-.41.11-.54.11-.11.26-.29.4-.43.14-.14.18-.23.26-.38.08-.15.04-.28-.02-.4-.06-.13-.6-1.44-.83-1.97-.22-.52-.44-.45-.6-.45-.15 0-.33-.02-.5-.02-.17 0-.45.06-.69.29-.24.23-.91.89-.91 2.17s.93 2.52 1.06 2.69c.13.17 1.83 2.84 4.44 3.98.62.27 1.11.43 1.49.55.62.2 1.18.17 1.62.1.49-.07 1.6-.66 1.83-1.3.23-.64.23-1.2.17-1.3-.07-.1-.25-.15-.52-.28z" />
          </svg>
        </Link>
      </div>
      <BackgroundBeams />
    </footer>
  );
}
