import { FaTwitter, FaDiscord, FaInstagram, FaMedium } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo.svg" alt="logo" className="size-10" />
              <span className="text-2xl font-bold text-white">NFTrade</span>
            </div>
            <p className="text-zinc-400 text-sm">
              The premier marketplace for rare digital collectibles and crypto
              art.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-3">
              {["Collections", "Marketplace", "Rankings", "Create"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-zinc-400 hover:text-purple-400 text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {["Help Center", "Blog", "Docs", "Partners"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-zinc-400 hover:text-purple-400 text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-zinc-800 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-zinc-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-zinc-400 text-sm">
              © 2024 NFTrade. All rights reserved
            </div>

            <div className="flex gap-6">
              {[
                { icon: FaTwitter, color: "#1DA1F2" },
                { icon: FaDiscord, color: "#5865F2" },
                { icon: FaInstagram, color: "#E1306C" },
                { icon: FaMedium, color: "#00AB6C" },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-zinc-400 hover:text-white transition-colors"
                  style={{ color: social.color }}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
