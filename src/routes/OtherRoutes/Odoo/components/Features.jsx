import React, { useState } from 'react'
import "./features.css"
import { Container } from '../../../../components/Layout'
import corner from '../../../../assets/detail/corner_4.svg'
import { productDetailPages } from '../../../../db/assets'
import { useLocation } from 'react-router-dom'
import icon1 from '../../../../assets/detail/icons/icon1.svg'
import icon2 from '../../../../assets/detail/icons/icon2.svg'
import icon3 from '../../../../assets/detail/icons/icon3.svg'
import icon4 from '../../../../assets/detail/icons/icon4.svg'
import icon5 from '../../../../assets/detail/icons/icon5.svg'
import icon6 from '../../../../assets/detail/icons/icon6.svg'
import logo1 from '../../../../assets/detail/icons/logo1.png'
import logo2 from '../../../../assets/detail/icons/logo2.png'
import logo3 from '../../../../assets/detail/icons/logo3.png'
import logo4 from '../../../../assets/detail/icons/logo4.png'

const iconMap = {
  'assets/detail/icons/icon1.svg': icon1,
  'assets/detail/icons/icon2.svg': icon2,
  'assets/detail/icons/icon3.svg': icon3,
  'assets/detail/icons/icon4.svg': icon4,
  'assets/detail/icons/icon5.svg': icon5,
  'assets/detail/icons/icon6.svg': icon6,
  'assets/detail/icons/logo1.png': logo1,
  'assets/detail/icons/logo2.png': logo2,
  'assets/detail/icons/logo3.png': logo3,
  'assets/detail/icons/logo4.png': logo4,
};

const defaultFeatures = [
  // fallback features if not found in productDetailPages
  {
    title: "All-in-One Platform",
    description: "Manage your entire business with a single, integrated solution",
    icon: 'assets/detail/icons/icon1.svg'
  },
  {
    title: "Easy to Use",
    description: "Intuitive interface designed for business users",
    icon: 'assets/detail/icons/icon2.svg'
  },
  {
    title: "Affordable",
    description: "Start with what you need, grow as you go",
    icon: 'assets/detail/icons/icon3.svg'
  },
  {
    title: "Always Available",
    description: "Access your business anywhere, anytime",
    icon: 'assets/detail/icons/icon4.svg'
  },
  {
    title: "Always Available",
    description: "Access your business anywhere, anytime",
    icon: 'assets/detail/icons/icon5.svg'
  },
  {
    title: "Always Available",
    description: "Access your business anywhere, anytime",
    icon: 'assets/detail/icons/icon6.svg'
  }
];

const Features = () => {
    const [isOdooEnabled, setIsOdooEnabled] = useState(false);
    const location = useLocation();
    const pathParts = location.pathname.split('/');
    const currentSlug = pathParts.includes('details') ? pathParts[pathParts.length - 1] : 'localpulse';
    const product = productDetailPages[currentSlug];
    const features = product?.features || defaultFeatures;
    const notification = product?.notification || {
      flag: "https://odoocdn.com/base/static/img/country_flags/in.png",
      text: "Features",
      date: "Jun 26, 2025",
      link: "https://odoo.com/event/odoo-x-ppsu-fdp-8100/register",
      linkText: "Register ⟶"
    };

    // Get the product name for the switch label
    const productName = product?.navbar?.title || 'odoo';

    const handleSwitchChange = () => {
        setIsOdooEnabled(!isOdooEnabled);
    };

    const featureParagraphs = product?.featureParagraphs || [];

    return (
        <section className="relative mt-16">
            {/* Wave Divider */}
            <div className="hidden lg:block custom-shape-divider-top-1749563539">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1600 143"
                    preserveAspectRatio="none"
                    style={{
                        width: '100%',
                        height: 'auto',
                        transform: 'rotate(180deg)',
                        display: 'block'
                    }}
                >
                    <path fill="#ffffff" d="M800,3c281,0,550.4,49.6,800,140.4V0H0v143.4C249.6,52.6,519,3,800,3z" />
                </svg>
            </div>

            {/* Features Section */}
            <div className="bg-gray-200 pt-4 lg:pt-32 pb-20">
                <Container>
                    <div className="w-full flex justify-center">
                        <div className="flex flex-col lg:flex-row mb-8 items-start lg:items-center">
                            <div className="flex flex-col lg:flex-row w-full lg:w-fit x_wd_notification_box position-relative rounded-3xl bg-white p-2 px-4">

                                <div className="flex w-full items-center lg:items-center">
                                    {/* <img
                                        className="rounded-lg size-6 ms-md-2 me-1 me-md-3"
                                        height="16px"
                                        src={notification.flag}
                                        alt="flag"
                                        loading="lazy"
                                    /> */}
                                    <span className="text-sm lg:text-xl font-bold text-start mx-2">
                                        {notification.text}
                                    </span>
                                </div>

                               
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-transparent p-4 transition-transform duration-300 flex flex-col text-center items-center mx-auto max-w-[250px]">
                                <div className="bg-white p-4 rounded-lg flex mb-4 w-20 justify-center">
                                    <img
                                        src={typeof feature.icon === 'string' ? (iconMap[feature.icon] || feature.icon) : feature.icon}
                                        alt={feature.title}
                                        className=""
                                    />
                                </div>
                                <p className="text-gray-600 font-axiformaRegular font-bold">
                                    {feature.title}
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className='flex justify-between pt-8 mx-14'>
                        <div className="hidden lg:block col-lg-6">
                            <div className="hidden lg:block relative ps-3 x_wd_corner_highlight_04">
                                {/* Absolute image inside relative parent */}
                                <img
                                    src={corner}
                                    alt="corner"
                                    className="h-12 w-12 absolute bottom-2 -left-7"
                                />

                                {/* Leave space so text doesn't overlap image */}
                                <div className="checkbox-wrapper-35 pt-2">
                                    <input
                                        value="private"
                                        name="switch"
                                        id="odooSwitch"
                                        type="checkbox"
                                        className="switch text-2xl"
                                        checked={isOdooEnabled}
                                        onChange={handleSwitchChange}
                                    />
                                    <label htmlFor="odooSwitch" className="font-axiformaLight">
                                        <span className="switch-x-text text-pink-900">Imagine </span>
                                        <span className={`switch-x-toggletext ${isOdooEnabled ? 'w-[47px]' : 'w-[80px]'} inline-block transition-all duration-300`}>
                                            <span className="switch-x-unchecked !w-fit">
                                                <span className="switch-x-hiddenlabel text-pink-900">Unchecked: </span>without
                                            </span>
                                            <span className="switch-x-checked !w-fit">
                                                <span className="switch-x-hiddenlabel text-pink-900">Checked: </span>with
                                            </span>
                                        </span>
                                        <span className="switch-x-text text-pink-900"> {productName}</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 text-end">
                            <a href="/page/all-apps" className="flex items-center justify-end pt-6 text-green-700 font-bold hover:text-black">
                                View all Apps
                                <div>
                                    <img
                                        src="https://odoocdn.com/openerp_website/static/src/img/arrows/secondary_arrow_sm_03.svg"
                                        width="40px"
                                        className="align-top o_rtl_flip ms-2 me-3 mb-2"
                                        alt=""
                                        loading="lazy"
                                    />
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="text-lg lg:text-2xl mt-28 text-center">
                        {featureParagraphs[0] && (
                            <p className="lead mb-5"><strong>{featureParagraphs[0].text}</strong></p>
                        )}
                        {featureParagraphs[1] && (
                            <p className="lead mb-5">
                                {featureParagraphs[1].text.split('\n').map((line, idx) => (
                                    <React.Fragment key={idx}>
                                        {line}
                                        {idx < featureParagraphs[1].text.split('\n').length - 1 && <br className="d-none d-lg-block" />}
                                    </React.Fragment>
                                ))}
                            </p>
                        )}
                        {featureParagraphs[2] && (
                            <p className="lead">
                                {featureParagraphs[2].text.split('. ').map((line, idx, arr) => (
                                    <React.Fragment key={idx}>
                                        {line}{(idx < arr.length - 1) ? '. ' : ''}
                                        <br className="d-none d-lg-block" />
                                    </React.Fragment>
                                ))}
                            </p>
                        )}
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Features