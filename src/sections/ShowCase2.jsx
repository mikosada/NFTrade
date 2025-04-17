import { useState } from "react";
import { nfts } from "../constants";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const ShowCase = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedNft, setSelectedNft] = useState(null);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(
    nfts.filter((nft) => nft.category === "art").length / itemsPerPage
  );

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const closeModal = () => setSelectedNft(null);

  return (
    <div id="showcase" className="app-showcase md:mt-0">
      {/* Modal Overlay */}
      {selectedNft && (
        <div className="fixed inset-0 bg-black/80 z-[150] flex items-center justify-center p-4">
          <div
            className="bg-zinc-900 rounded-2xl max-w-4xl w-full overflow-hidden flex flex-col md:flex-row animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 md:top-24 md:right-24 text-white hover:text-purple-400 transition-colors z-50"
            >
              <IoClose className="w-8 h-8" />
            </button>

            {/* Image Section */}
            <div className="md:w-1/2 relative">
              <img
                src={selectedNft.imageUrl}
                alt={selectedNft.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90">
                <h2 className="text-2xl font-bold text-white">
                  {selectedNft.title}
                </h2>
                <p className="text-purple-300">{selectedNft.artist}</p>
              </div>
            </div>

            {/* Detail Section */}
            <div className="md:w-1/2 p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-800 p-4 rounded-xl">
                  <p className="text-gray-400 text-sm">Floor Price</p>
                  <p className="text-xl font-bold text-white">
                    {selectedNft.floorPrice.toFixed(2)} ETH
                  </p>
                </div>
                <div className="bg-zinc-800 p-4 rounded-xl">
                  <p className="text-gray-400 text-sm">Total Volume</p>
                  <p className="text-xl font-bold text-white">
                    {selectedNft.totalVolume.toFixed(1)} ETH
                  </p>
                </div>
              </div>

              <div className="bg-zinc-800 p-4 rounded-xl">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Description
                </h3>
                <p className="text-gray-400 text-sm">
                  A unique digital collectible from the {selectedNft.title}
                  collection. Created by {selectedNft.artist}, this piece
                  represents...
                </p>
              </div>

              <button
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition-colors"
                onClick={() => alert("Purchase Completed")}
              >
                Purchase Now
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="w-full relative">
        <div className="showcaselayout">
          <h1 className="text-xl md:text-2xl font-bold mb-6 text-center md:text-start">
            Trending in Art
          </h1>
          {/* Navigation Buttons */}
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between">
            <button
              onClick={handlePrev}
              disabled={currentPage === 0}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-700 hover:bg-purple-800 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors -translate-x-20"
            >
              <MdKeyboardArrowLeft className="font-bold size-10" />
            </button>

            <button
              onClick={handleNext}
              disabled={currentPage >= totalPages - 1}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-700 hover:bg-purple-800 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors translate-x-20"
            >
              <MdKeyboardArrowRight className="font-bold size-10" />
            </button>
          </div>

          {/* NFT Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-6 w-full">
            {nfts
              .filter((nft) => nft.category === "art")
              .slice(
                currentPage * itemsPerPage,
                (currentPage + 1) * itemsPerPage
              )
              .map((nft) => (
                <div
                  key={nft.id}
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedNft(nft)}
                >
                  <div className="image-wrapper aspect-square rounded-xl overflow-hidden transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={nft.imageUrl}
                      alt={nft.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-black/20">
                      <div className="flex justify-between text-sm">
                        <div className="text-white">
                          <span className="text-white font-bold">Floor</span>
                          <div className="font-semibold text-lg">
                            {nft.floorPrice.toFixed(2)} ETH
                          </div>
                        </div>
                        <div className="text-white">
                          <span className="text-white font-bold">Volume</span>
                          <div className="font-semibold text-lg">
                            {nft.totalVolume.toFixed(1)} ETH
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h2 className="text-lg font-bold text-white truncate">
                      {nft.title}
                    </h2>
                    <p className="text-gray-400 text-sm">{nft.artist}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
