import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
import { AppsDropdown, IndustriesDropdown, CommunityDropdown } from './NavDropdown';
// import { reelVideos, productDetailPages } from '../../../../db/assets';
import SocialMedias from '../../../../container/Navbar/SocialMedias';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Extract the last segment of the path (e.g., 'vendostream-pro' from '/details/vendostream-pro')
  const pathParts = location.pathname.split('/');
  const currentSlug = pathParts.includes('details') ? pathParts[pathParts.length - 1] : null;

  // Match the video by slug
  const normalizeSlug = (slug) => {
    if (!slug) return '';
    return slug.replace(/^(gg-)/, '').replace(/-pro$/, '').replace(/-360$/, '');
  };

  const currentVideo = reelVideos.find(video => {
    if (!currentSlug) return false;
    // Check both top-level slug and productDetails.slug
    const videoSlug = video.slug || video.productDetails?.slug;
    return normalizeSlug(videoSlug) === normalizeSlug(currentSlug);
  });

  return (
    <div className="bg-white fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo / Brand Title */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-pink-900">
              {currentVideo?.productDetails?.name || "GG Solutions"}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-900"
            >
              <span className="sr-only">Open main menu</span>
              <i className="fa fa-bars"></i>
            </button>
          </div>

          {/* Right side buttons */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <SocialMedias/>
            <Link to="/trial" className="flex items-center gap-2 bg-pink-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-pink-800">
              APK <FaDownload />
            </Link>
          </div>
        </div>
      </div>

      {/* Optional mobile menu - uncomment if needed */}
      {/* {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/apps" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-pink-900 hover:bg-gray-50">
              Apps
            </Link>
            ...
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Navbar;
