import React, { useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  const generateFakeWallet = () => {
    const chars = "0123456789abcdef";
    const address = Array.from(
      { length: 40 },
      () => chars[Math.floor(Math.random() * chars.length)]
    ).join("");
    return `0x1d${address.slice(0, 3)}...${address.slice(-4)}`;
  };

  const handleLogin = () => {
    if (!isLoggedIn) {
      const fakeWallet = generateFakeWallet();
      setWalletAddress(fakeWallet);
      setIsLoggedIn(true);
    } else {
      setWalletAddress("");
      setIsLoggedIn(false);
    }
  };

  return (
    <header className="navbar">
      <div className="inner">
        <a href="#hero" className="logo text-2xl font-bold">
          NFTrade
        </a>

        <nav className="desktop gap-8">
          <a
            href="#collections"
            className="text-gray-300 hover:text-purple-800 transition-colors"
          >
            Collections
          </a>
          <a
            href="#marketplace"
            className="text-gray-300 hover:text-purple-800 transition-colors"
          >
            Marketplace
          </a>
        </nav>

        <button
          onClick={handleLogin}
          className={`contact-btn group px-2 sm:px-4 lg:px-6 py-2 rounded-lg transition-all `}
          aria-label={isLoggedIn ? "Connected wallet" : "Connect wallet"}
        >
          <div className="inner flex items-center">
            <span className=" font-medium">
              {isLoggedIn ? (
                <>
                  <span className="text-green-400 ">●</span>{" "}
                  <span className="hover:text-white-50">{walletAddress}</span>
                </>
              ) : (
                <span className="hover:text-white-50">Connect Wallet</span>
              )}
            </span>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
