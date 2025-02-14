import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-white py-12 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-[#D84B6B] opacity-90"></div>
        <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-[#7CC5F3] opacity-90"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-[#F4B251] opacity-90"></div>
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#7CC5F3] opacity-90"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-[#9B6DE9] opacity-90"></div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Zippty</h2>
            <p className="text-gray-600 mb-6">
              At Zippty, we know your pets are more than just animals—they're
              family. Whether you have a curious kitten or an energetic dog,
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Cart
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Shop
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  New products
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Best sellers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Discount
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Home
                </a>
              </li>
            </ul>
          </div>

          {/* Store Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Store</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">
                JP Colony, Shastri Nagar, Jaipur, Rajasthan - 302016
              </li>
              <li className="text-gray-600">+91-XXXXX XXXXX</li>
              <li className="text-gray-600">info@domain.com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
