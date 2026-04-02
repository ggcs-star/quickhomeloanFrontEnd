import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import yellow from '../../../../assets/detail/yellow_highlight.svg'
import blue from '../../../../assets/detail/blue_highlight.svg'
import { Container } from '../../../../components/Layout'
// import { reelVideos, productDetailPages } from '../../../../db/assets'

const HeroSection = () => {
  const location = useLocation();
  
  // Extract the last segment of the path (e.g., 'vendostream-pro' from '/details/vendostream-pro')
  const pathParts = location.pathname.split('/');
  const currentSlug = pathParts.includes('details') ? pathParts[pathParts.length - 1] : null;

  // Match the video by slug
  const currentVideo = reelVideos.find(video => video.slug === currentSlug);
  
  // Get product detail page data
  const productDetail = productDetailPages[currentSlug];

  // Default content if no video is found
  const defaultContent = {
    title: "All your business on one platform.",
    subtitle: "Simple, efficient, yet affordable!",
    price: "580.00",
    currency: "Rs",
    period: "month",
    description: "for ALL apps",
    cta: {
      primary: "Start now - It's free",
      secondary: "Meet an advisor"
    }
  };

  // Use product detail page data, then video data, then default content
  const content = productDetail?.hero ? {
    title: productDetail.hero.title,
    subtitle: productDetail.hero.subtitle,
    price: productDetail.hero.price,
    currency: productDetail.hero.currency,
    period: productDetail.hero.period,
    description: productDetail.hero.description,
    features: productDetail.hero.features,
    cta: productDetail.hero.cta
  } : currentVideo ? {
    title: currentVideo.productDetails?.name || defaultContent.title,
    subtitle: currentVideo.shortDescription || defaultContent.subtitle,
    price: currentVideo.price || defaultContent.price,
    currency: "$",
    period: "month",
    description: `for ${currentVideo.productDetails?.name || "ALL apps"}`,
    cta: defaultContent.cta
  } : defaultContent;

  return (
    <Container className="py-8 text-center">
      <div className="container mx-auto px-4 mt-20">
        <h1 className="text-5xl lg:text-8xl font-bold mb-4 font-caveatBold">
          {(() => {
            // Dynamic title highlighting logic
            const words = content.title.split(' ');
            
            // Define keywords that should be highlighted
            const highlightKeywords = ['platform', 'pro', '360', 'creator', 'build', 'manage', 'monetize', 'solution', 'software', 'system'];
            
            // Find the word to highlight (last word that matches keywords, or last word if none match)
            let highlightIndex = words.length - 1;
            for (let i = words.length - 1; i >= 0; i--) {
              const word = words[i].toLowerCase().replace(/[^a-z]/g, '');
              if (highlightKeywords.includes(word)) {
                highlightIndex = i;
                break;
              }
            }
            
            // If it's the default platform title, use the original logic
            if (content.title === "All your business on one platform.") {
              return (
                <>
                  All your business on{' '}
                  <span className="relative inline-block">
                    <span className="relative inline-block">
                      one platform.
                      <span
                        className="absolute inset-0 -z-10 transform -rotate-1"
                        style={{
                          backgroundImage: `url(${yellow})`,
                          backgroundSize: '100% 100%',
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center'
                        }}
                      ></span>
                    </span>
                  </span>
                </>
              );
            }
            
            // For other titles, highlight the selected word
            return (
              <>
                {words.slice(0, highlightIndex).join(' ')}{' '}
                <span className="relative inline-block">
                  <span className="relative inline-block">
                    {words[highlightIndex]}
                    <span
                      className="absolute inset-0 -z-10 transform -rotate-1"
                      style={{
                        backgroundImage: `url(${yellow})`,
                        backgroundSize: '100% 100%',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                      }}
                    ></span>
                  </span>
                </span>
                {highlightIndex < words.length - 1 && ` ${words.slice(highlightIndex + 1).join(' ')}`}
              </>
            );
          })()}
        </h1>

        <h2 className="text-4xl lg:text-5xl font-bold mb-5 relative font-caveatRegular">
          {content.subtitle.includes('affordable') ? (
            <>
              Simple, efficient, yet{' '}
              <span className="relative inline-block">
                affordable!
                <span
                  className="absolute inset-0 -z-10 transform -rotate-1"
                  style={{
                    backgroundImage: `url(${blue})`,
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                  }}
                ></span>

                {/* <div className="absolute top-full right-0 hidden lg:inline-block transform -rotate-10 mt-[0.25rem] mr-[-30rem] z-10">
                  <img
                    src="https://odoocdn.com/openerp_website/static/src/img/graphics/arrow_doodle_1.svg"
                    className="block mb-3"
                    alt="arrow doodle"
                    loading="lazy"
                  />
                  <span className="block text-3xl font-caveatSemiBold text-pink-900 -rotate-6 relative z-20">
                    <span className="font-bold">{content.price}</span> {content.currency} / {content.period} <br />
                    {content.description}
                  </span>
                </div> */}
              </span>
            </>
          ) : (
            <>
              {content.subtitle.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="relative inline-block">
                {content.subtitle.split(' ').slice(-1)[0]}
                <span
                  className="absolute inset-0 -z-10 transform -rotate-1"
                  style={{
                    backgroundImage: `url(${blue})`,
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                  }}
                ></span>

                {/* <div className="absolute top-full right-0 hidden lg:inline-block transform -rotate-10 mt-[0.25rem] mr-[-10.5rem] z-10">
                  <img
                    src="https://odoocdn.com/openerp_website/static/src/img/graphics/arrow_doodle_1.svg"
                    className="block mb-3"
                    alt="arrow doodle"
                    loading="lazy"
                  />
                  <span className="block text-3xl font-caveatSemiBold text-pink-900 -rotate-6 relative z-20">
                    <span className="font-bold">{content.price}</span> {content.currency} / {content.period} <br />
                    {content.description}
                  </span>
                </div> */}
              </span>
            </>
          )}
        </h2>

        {/* Features section - only show if features are available */}
        {content.features && (
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {content.features.map((feature, index) => (
                <div key={index} className="bg-gray-50 px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                  {feature}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-center gap-3 py-6">
          <Link
            to="/trial"
            className="text-sm lg:text-2xl bg-pink-900 text-white px-6 py-3 rounded-md lg:font-medium hover:bg-pink-800 transition-colors"
          >
            {content.cta.primary}
          </Link>

          <div className="relative">
            <button
              className="text-sm lg:text-2xl bg-gray-100 text-pink-900 px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors"
            >
              {content.cta.secondary}
            </button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default HeroSection