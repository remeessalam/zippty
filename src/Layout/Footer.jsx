import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

// Add this CSS to your global stylesheet or CSS module
const styles = `
@keyframes moveCircle1 {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(-8rem, 4rem); }
  50% { transform: translate(-12rem, 8rem); }
  75% { transform: translate(-8rem, 4rem); }
  100% { transform: translate(0, 0) scale(1.1); }
}

@keyframes moveCircle2 {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(6rem, -5rem); }
  50% { transform: translate(10rem, -8rem); }
  75% { transform: translate(6rem, -5rem); }
  100% { transform: translate(0, 0) scale(1.1); }
}

@keyframes moveCircle3 {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(5rem, 4rem); }
  50% { transform: translate(8rem, 6rem); }
  75% { transform: translate(5rem, 4rem); }
  100% { transform: translate(0, 0) scale(1.1); }
}

@keyframes moveCircle4 {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(-6rem, -5rem); }
  50% { transform: translate(-10rem, -8rem); }
  75% { transform: translate(-6rem, -5rem); }
  100% { transform: translate(0, 0) scale(1.1); }
}

@keyframes moveCircle5 {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(7rem, -4rem); }
  50% { transform: translate(12rem, -6rem); }
  75% { transform: translate(7rem, -4rem); }
  100% { transform: translate(0, 0) scale(1.1); }
}

@keyframes moveCircle6 {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(-5rem, 5rem); }
  50% { transform: translate(-8rem, 8rem); }
  75% { transform: translate(-5rem, 5rem); }
  100% { transform: translate(0, 0) scale(1.1); }
}

@keyframes moveCircle7 {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(4rem, 5rem); }
  50% { transform: translate(6rem, 8rem); }
  75% { transform: translate(4rem, 5rem); }
  100% { transform: translate(0, 0) scale(1.1); }
}

.animate-move1 { animation: moveCircle1 1s infinite ease-in-out; }
.animate-move2 { animation: moveCircle2 1s infinite ease-in-out; }
.animate-move3 { animation: moveCircle3 1s infinite ease-in-out; }
.animate-move4 { animation: moveCircle4 1.5s infinite ease-in-out; }
.animate-move5 { animation: moveCircle5 1.5s infinite ease-in-out; }
.animate-move6 { animation: moveCircle6 1s infinite ease-in-out; }
.animate-move7 { animation: moveCircle7 1s infinite ease-in-out; }
`;

const Footer = () => {
  return (
    <footer className="relative bg-white py-[7rem] overflow-hidden">
      <style>{styles}</style>

      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Circles with different animations */}
        <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-[#D84B6B] opacity-90 animate-move1"></div>
        <div className="absolute top-0 left-[20%] w-32 h-32 rounded-full bg-[#7CC5F3] opacity-90 animate-move2"></div>
        <div className="absolute top-[30%] right-[15%] w-32 h-32 rounded-full bg-[#F4B251] opacity-90 animate-move3"></div>
        <div className="absolute top-[10%] right-0 w-32 h-32 rounded-full bg-[#7CC5F3] opacity-90 animate-move4"></div>
        <div className="absolute bottom-0 left-[10%] w-32 h-32 rounded-full bg-[#9B6DE9] opacity-90 animate-move5"></div>
        <div className="absolute bottom-[15%] right-[5%] w-32 h-32 rounded-full bg-[#D84B6B] opacity-90 animate-move6"></div>
        <div className="absolute bottom-[20%] left-[35%] w-32 h-32 rounded-full bg-[#F4B251] opacity-90 animate-move7"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="">
            <h2 className="text-2xl font-bold mb-4">Zippty</h2>
            <p className="text-gray-600 mb-6 max-w-[18rem]">
              At Zippty, we know your pets are more than just animals—they're
              family. Whether you have a curious kitten or an energetic dog,
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-600 hover:text-gray-900">
                <FaFacebook size={20} />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-gray-900">
                <FaInstagram size={20} />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-gray-900">
                <FaTwitter size={20} />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-gray-900">
                <FaYoutube size={20} />
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div className="flex flex-col items-start">
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about-us"
                  className="text-gray-600 hover:text-gray-900"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-600 hover:text-gray-900">
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/cartitems"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-600 hover:text-gray-900">
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          {/* <div>
            <h3 className="font-semibold text-lg mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-900">
                  New products
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-900">
                  Best sellers
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-900">
                  Discount
                </Link>
              </li>
              <li>
                <aLink to="#" className="text-gray-600 hover:text-gray-900">
                  Home
                </aLink>
              </li>
            </ul>
          </div> */}
          {/* <div>
            <h3 className="font-semibold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-900">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-900">
                  Check out
                </Link>
              </li>
            </ul>
          </div> */}

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
