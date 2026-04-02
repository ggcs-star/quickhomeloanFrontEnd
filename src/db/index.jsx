

import img1Hero from '../assets/home/HeroSection/slide1.jpg'
import img2Hero from '../assets/home/HeroSection/slide2.jpg'
import img3Hero from '../assets/home/HeroSection/slide3.jpg'

import { Home, Briefcase, Info, HelpCircle, Phone, DollarSign, User } from 'lucide-react';

import mediaimg from '../assets/media.webp'

import smFB from "../assets/socialMedia/facebook.svg";
import smlinkedin from "../assets/socialMedia/linkedin.svg";
import smInsta from "../assets/socialMedia/instagram.svg";
import smX from "../assets/socialMedia/x-twitter.svg";

// import banner1 from '../assets/banner/banner1.png'
import banner2 from '../assets/banner/banner2.png'
import banner3 from '../assets/banner/banner3.png'
import banner4 from '../assets/banner/banner4.png'
import banner5 from '../assets/banner/banner5.png'

import mobilebanner2 from '../assets/banner/mobilebanner2.png'
import mobilebanner3 from '../assets/banner/mobilebanner3.png'
import mobilebanner4 from '../assets/banner/mobilebanner4.png'
import mobilebanner5 from '../assets/banner/mobilebanner5.png'

// export const navMenu = [
//     {
//         id: 1, label: "Loans", submenu: [
//             { id: 1, label: "ABC1", slug: "/pharmretail" },
//             { id: 2, label: "ABC2", slug: "/pharmconnect" },
//             { id: 3, label: "ABC3", slug: "/pharmanalytics" },
//             { id: 4, label: "ABC4", slug: "/publichealth" },
//         ]
//     },
//     {
//         id: 2, label: "Credit Cards", submenu: [
//             { id: 1, label: "ABC1", slug: "/pharmretail" },
//             { id: 2, label: "ABC2", slug: "/pharmconnect" },
//             { id: 3, label: "ABC3", slug: "/pharmanalytics" },
//             { id: 4, label: "ABC4", slug: "/publichealth" },
//         ]
//     },
//     {
//         id: 3, label: "Investments", submenu: [
//             { id: 1, label: "ABC1", slug: "/pharmretail" },
//             { id: 2, label: "ABC2", slug: "/pharmconnect" },
//             { id: 3, label: "ABC3", slug: "/pharmanalytics" },
//             { id: 4, label: "ABC4", slug: "/publichealth" },
//         ]
//     },
//     {
//         id: 4, label: "Banks In India", submenu: [
//             { id: 1, label: "ABC1", slug: "/pharmretail" },
//             { id: 2, label: "ABC2", slug: "/pharmconnect" },
//             { id: 3, label: "ABC3", slug: "/pharmanalytics" },
//             { id: 4, label: "ABC4", slug: "/publichealth" },
//         ]
//     },
//     {
//         id: 5, label: "Calculators", submenu: [
//             { id: 1, label: "ABC1", slug: "/pharmretail" },
//             { id: 2, label: "ABC2", slug: "/pharmconnect" },
//             { id: 3, label: "ABC3", slug: "/pharmanalytics" },
//             { id: 4, label: "ABC4", slug: "/publichealth" },
//         ]
//     },
//     {
//         id: 6, label: "Resources", submenu: [
//             { id: 1, label: "ABC1", slug: "/pharmretail" },
//             { id: 2, label: "ABC2", slug: "/pharmconnect" },
//             { id: 3, label: "ABC3", slug: "/pharmanalytics" },
//             { id: 4, label: "ABC4", slug: "/publichealth" },
//         ]
//     },
//     {
//         id: 7, label: "Credit Score", submenu: [
//             { id: 1, label: "ABC1", slug: "/pharmretail" },
//             { id: 2, label: "ABC2", slug: "/pharmconnect" },
//             { id: 3, label: "ABC3", slug: "/pharmanalytics" },
//             { id: 4, label: "ABC4", slug: "/publichealth" },
//         ]
//     },
// ];


// export const heroSectionData = [
//     {
//         img: "https://www.urbanmoney.com/assets/images/homeSlider/img_personal-loan.svg",
//         heading: 'Simple & Secure Payment Banking',
//         title: 'Connect with Audiences',
//         caption: 'Boost engagement using targeted content.',
//     },
//     {
//         img: "https://www.urbanmoney.com/assets/images/homeSlider/img_l&t.svg",
//         heading: 'Simple & Secure Payment Banking',
//         title: 'Drive Sales Growth',
//         caption: 'Transform your media presence into revenue.',
//     },
//     {
//         img: "https://www.urbanmoney.com/assets/images/homeSlider/img_l&t.svg",
//         heading: 'Simple & Secure Payment Banking',
//         title: 'Maximize Insights',
//         caption: 'Leverage data to make smarter decisions.',
//     },
//     {
//         img: "https://www.urbanmoney.com/assets/images/homeSlider/img_home-loan.svg",
//         heading: 'Simple & Secure Payment Banking',
//         title: 'Maximize Insights',
//         caption: 'Leverage data to make smarter decisions.',
//     },
//     {
//         img: "https://www.urbanmoney.com/assets/images/homeSlider/img_personal-loan.svg", // Add image for Personal Loan
//         heading: 'Simple & Secure Payment Banking',
//         title: 'Get Personal Loan Fast',
//         caption: 'Access quick and easy loans with low interest rates.',
//     }
// ];


// export const navMenu = [
//   {
//     id: 1,
//     label: "Loans",
//     slug: "/loans",
//     isMegaMenu: true,
//     submenu: [
//         {
//             id: 1,
//             label: "Home Loan",
//             slug: "",
//             submenu: [
//                 {
//                     id: 1,
//                     label: "Home Loan By Banks",
//                     slug: "",
//                     submenu: [
//                         { id: 1, label: "HDFC Ltd Home Loan", slug: "/home-loan/hdfc-ltd" },
//                         { id: 2, label: "SBI Home Loan", slug: "/home-loan/sbi" },
//                         { id: 3, label: "LIC Housing Finance Home Loan", slug: "/home-loan/lic" },
//                         { id: 4, label: "Bank of Baroda Home Loan", slug: "/home-loan/bob" },
//                         { id: 5, label: "Axis Bank Home Loan", slug: "/home-loan/axis" },
//                         { id: 6, label: "HDFC Home Loan", slug: "/home-loan/hdfc" },
//                     ]
//                 },
//                 {
//                     id: 2,
//                     label: "Home Loan By Cities",
//                     slug: "",
//                     submenu: [
//                         { id: 1, label: "Home Loan in Gurgaon", slug: "/home-loan/gurgaon" },
//                         { id: 2, label: "Home Loan in Delhi", slug: "/home-loan/delhi" },
//                         { id: 3, label: "Home Loan in Bangalore", slug: "/home-loan/bangalore" },
//                         { id: 4, label: "Home Loans in Hyderabad", slug: "/home-loan/hyderabad" },
//                         { id: 5, label: "Home Loans in Chennai", slug: "/home-loan/chennai" },
//                         { id: 6, label: "Home Loans in Dehradun", slug: "/home-loan/dehradun" },
//                     ]
//                 },
//                 {
//                     id: 3,
//                     label: "Home Loan By Professions",
//                     slug: "",
//                     submenu: [
//                         { id: 1, label: "Home Loan for Women", slug: "/home-loan/women" },
//                         { id: 2, label: "Home Loan for Government Employees", slug: "/home-loan/government-employees" },
//                         { id: 3, label: "Home Loan for Self Employed", slug: "/home-loan/self-employed" },
//                         { id: 4, label: "Home Loan for Senior Citizens", slug: "/home-loan/senior-citizens" },
//                         { id: 5, label: "Home Loan for Salaried Person", slug: "/home-loan/salaried" },
//                         { id: 6, label: "Home Loan for Bank Employees", slug: "/home-loan/bank-employees" },
//                     ]
//                 },
//                 {
//                     id: 4,
//                     label: "Home Loan By Amount",
//                     slug: "",
//                     submenu: [
//                         { id: 1, label: "20 Lakh Home Loan EMI", slug: "/home-loan/20-lakh-emi" },
//                         { id: 2, label: "25 Lakh Home Loan EMI", slug: "/home-loan/25-lakh-emi" },
//                         { id: 3, label: "30 Lakh Home Loan EMI", slug: "/home-loan/30-lakh-emi" },
//                         { id: 4, label: "40 Lakh Home Loan EMI", slug: "/home-loan/40-lakh-emi" },
//                         { id: 5, label: "50 Lakh Home Loan EMI", slug: "/home-loan/50-lakh-emi" },
//                         { id: 6, label: "1 Crore Home Loan EMI", slug: "/home-loan/1-crore-emi" },
//                     ]
//                 },
//                 {
//                     id: 5,
//                     label: "Home Loan By Property",
//                     slug: "",
//                     submenu: [
//                         { id: 1, label: "Home Loan for Plot", slug: "/home-loan/plot" },
//                         { id: 2, label: "Home Loan for Renovation", slug: "/home-loan/renovation" },
//                         { id: 3, label: "Home Loan for Construction", slug: "/home-loan/construction" },
//                         { id: 4, label: "Commercial Property Loan", slug: "/home-loan/commercial" },
//                     ]
//                 },
//                 {
//                     id: 6,
//                     label: "Home Loan By CIBIL Score",
//                     slug: "",
//                     submenu: [
//                         { id: 1, label: "CIBIL Score 550", slug: "/home-loan/cibil-550" },
//                         { id: 2, label: "CIBIL Score 600", slug: "/home-loan/cibil-600" },
//                         { id: 3, label: "CIBIL Score 650", slug: "/home-loan/cibil-650" },
//                         { id: 4, label: "CIBIL Score 700", slug: "/home-loan/cibil-700" },
//                         { id: 5, label: "CIBIL Score 750", slug: "/home-loan/cibil-750" },
//                         { id: 6, label: "CIBIL Score 800", slug: "/home-loan/cibil-800" },
//                     ]
//                 },
//                 {
//                     id: 7,
//                     label: "Home Loan By Salary",
//                     slug: "",
//                     submenu: [
//                         { id: 1, label: "Salary 20000", slug: "/home-loan/20000-salary" },
//                         { id: 2, label: "Salary 30000", slug: "/home-loan/30000-salary" },
//                         { id: 3, label: "Salary 40000", slug: "/home-loan/40000-salary" },
//                         { id: 4, label: "Salary 50000", slug: "/home-loan/50000-salary" },
//                         { id: 5, label: "Salary 60000", slug: "/home-loan/60000-salary" },
//                         { id: 6, label: "Salary 70000", slug: "/home-loan/70000-salary" },
//                     ]
//                 },
//                 {
//                     id: 8,
//                     label: "Home Loan By Other",
//                     slug: "",
//                     submenu: [
//                         { id: 1, label: "NRI Home Loan", slug: "/home-loan/nri" },
//                         { id: 2, label: "Home Loan without Income Proof", slug: "/home-loan/without-income-proof" },
//                         { id: 3, label: "Home Loan for Low CIBIL Score", slug: "/home-loan/low-cibil" },
//                         { id: 4, label: "Home Loan without Documents", slug: "/home-loan/without-documents" },
//                         { id: 5, label: "Home Loan without Salary Slip", slug: "/home-loan/without-salary-slip" },
//                     ]
//                 },
//                 {
//                     id: 9,
//                     label: "Home Loan Calculators",
//                     slug: "",
//                     submenu: [
//                         { id: 1, label: "Home Loan EMI Calculator", slug: "/home-loan/emi-calculator" },
//                         { id: 2, label: "Home Loan Eligibility Calculator", slug: "/home-loan/eligibility-calculator" },
//                         { id: 3, label: "Home Loan Prepayment Calculator", slug: "/home-loan/prepayment-calculator" },
//                         { id: 4, label: "Home Loan Balance Transfer Calculator", slug: "/home-loan/balance-transfer-calculator" },
//                         { id: 5, label: "Home Loan Tax Benefit Calculator", slug: "/home-loan/tax-benefit-calculator" },
//                     ]
//                 },
//             ]
//         }
//     ]
// },

//     {
//         id: 2, 
//         label: "Credit Cards", 
//         slug: "/credit-cards",
//         // isMegaMenu: true,
//         submenu: [
//             { 
//                 id: 1, 
//                 label: "Premium Cards", 
//                 slug: "/premium-cards",
//                 submenu: [
//                     { id: 1, label: "Travel Cards", slug: "/cards/travel" },
//                     { id: 2, label: "Rewards Cards", slug: "/cards/rewards" },
//                 ]
//             },
//             { 
//                 id: 2, 
//                 label: "Cashback Cards", 
//                 slug: "/cashback-cards",
//                 submenu: [
//                     { id: 1, label: "Shopping Cards", slug: "/cards/shopping" },
//                     { id: 2, label: "Fuel Cards", slug: "/cards/fuel" },
//                 ]
//             },
//         ]
//     },
//     {
//         id: 3, 
//         label: "Investments", 
//         slug: "/investments",
//         isMegaMenu: false, // Regular dropdown
//         submenu: [
//             { id: 1, label: "Mutual Funds", slug: "/mutual-funds" },
//             { id: 2, label: "Stocks", slug: "/stocks" },
//             { id: 3, label: "Bonds", slug: "/bonds" },
//         ]
//     },
//     {
//         id: 4, 
//         label: "Banks In India", 
//         slug: "/banks",
//         isMegaMenu: false, // Regular dropdown
//         submenu: [
//             { id: 1, label: "Public Sector Banks", slug: "/banks/public" },
//             { id: 2, label: "Private Banks", slug: "/banks/private" },
//         ]
//     },
//     {
//         id: 5, 
//         label: "Calculators", 
//         slug: "/calculators",
//         isMegaMenu: false, // Regular dropdown
//         submenu: [
//             { id: 1, label: "EMI Calculator", slug: "/calculators/emi" },
//             { id: 2, label: "Eligibility Calculator", slug: "/calculators/eligibility" },
//         ]
//     },
//     {
//         id: 6, 
//         label: "Resources", 
//         slug: "/resources",
//         isMegaMenu: false, // Regular dropdown
//         submenu: [
//             { id: 1, label: "Blog", slug: "/blog" },
//             { id: 2, label: "Guides", slug: "/guides" },
//         ]
//     },
//     {
//         id: 7, 
//         label: "Credit Score", 
//         slug: "/credit-score",
//         isMegaMenu: false, // Regular dropdown
//         submenu: [
//             { id: 1, label: "Check Score", slug: "/credit-score/check" },
//             { id: 2, label: "Improve Score", slug: "/credit-score/improve" },
//         ]
//     },
// ];


export const navMenu = [
       {
        id: 1,
        label: "Bank Rates",
        slug: "/bank-rates",
        icon: <User />,
    },
        {
        id: 2,
        label: "Home Loans",
        slug: "",
        isMegaMenu: true,
        icon: <DollarSign />,
        submenu: [
            {
                id: 1,
                label: "Home Loan",
                slug: "",
                submenu: [
                    {
                        id: 1,
                        label: "Home Loan By Banks",
                        slug: "",
                        submenu: [
                            { id: 1, label: "SBI Home Loan", slug: "/home-loan/details/sbi" },
                            { id: 2, label: "HDFC Ltd Home Loan", slug: "/home-loan/details/hdfc-ltd" },
                            { id: 3, label: "LIC Housing Finance Home Loan", slug: "/home-loan/details/lic" },
                            { id: 4, label: "Bank of Baroda Home Loan", slug: "/home-loan/details/bob" },
                            { id: 5, label: "Axis Bank Home Loan", slug: "/home-loan/details/axis" },
                            { id: 6, label: "HDFC Home Loan", slug: "/home-loan/details/hdfc" },
                        ]
                    },
                    // {
                    //     id: 2,
                    //     label: "Home Loan By Cities",
                    //     slug: "",
                    //     submenu: [
                    //         { id: 1, label: "Home Loan in Gurgaon", slug: "/home-loan/gurgaon" },
                    //         { id: 2, label: "Home Loan in Delhi", slug: "/home-loan/delhi" },
                    //         { id: 3, label: "Home Loan in Bangalore", slug: "/home-loan/bangalore" },
                    //         { id: 4, label: "Home Loans in Hyderabad", slug: "/home-loan/hyderabad" },
                    //         { id: 5, label: "Home Loans in Chennai", slug: "/home-loan/chennai" },
                    //         { id: 6, label: "Home Loans in Dehradun", slug: "/home-loan/dehradun" },
                    //     ]
                    // },
                    {
                        id: 3,
                        label: "Home Loan By Professions",
                        slug: "",
                        submenu: [
                            { id: 1, label: "Home Loan for Doctors", slug: "/home-loan/profession/doctor" },
                            { id: 2, label: "Home Loan for Chartered Accountants (CA)", slug: "/home-loan/profession/chartered-accountants" },
                            { id: 3, label: "Home Loan for Engineers", slug: "/home-loan/profession/engineer" },
                            { id: 4, label: "Home Loan for Teachers", slug: "/home-loan/profession/teacher" },
                            { id: 5, label: "Home Loan for Lawyers", slug: "/home-loan/profession/lawyer" },
                            { id: 6, label: "Home Loan for IT Professionals", slug: "/home-loan/profession/it-professionals" },
                            { id: 7, label: "Home Loan for Influencers", slug: "/home-loan/profession/influencers" },
                            { id: 8, label: "Home Loan for NRI'S", slug: "/home-loan/profession/nris" },
                            { id: 9, label: "Home Loan for Business Owners", slug: "/home-loan/profession/business-owners" },
                            { id: 10, label: "Home Loan for Defense Personnel", slug: "/home-loan/profession/defense-personnel" },
                            { id: 11, label: "Home Loan for Private Sector", slug: "/home-loan/profession/private-sector" },
                            { id: 12, label: "Home Loan for Retired", slug: "/home-loan/profession/retired" }
                            
                        ]
                    },

                    {
                        id: 4,
                        label: "Home Loan By Amount",
                        slug: "",
                        submenu: [
                            { id: 1, label: "20 Lakh Home Loan EMI", slug: "/home-loan/amount/20-lakh-emi" },
                            { id: 2, label: "25 Lakh Home Loan EMI", slug: "/home-loan/amount/25-lakh-emi" },
                            { id: 3, label: "30 Lakh Home Loan EMI", slug: "/home-loan/amount/30-lakh-emi" },
                            { id: 4, label: "40 Lakh Home Loan EMI", slug: "/home-loan/amount/40-lakh-emi" },
                            { id: 5, label: "50 Lakh Home Loan EMI", slug: "/home-loan/amount/50-lakh-emi" },
                            { id: 6, label: "1 Crore Home Loan EMI", slug: "/home-loan/amount/1-crore-emi" },
                        ]
                    },
                    {
                        id: 6,
                        label: "Home Loan By BHK Types",
                        slug: "",
                        submenu: [
                            { id: 1, label: "Home Loan for Plot", slug: "/home-loan/bhktype/plot" },
                            { id: 2, label: "Home Loan for Renovation", slug: "/home-loan/bhktype/renovation" },
                            { id: 3, label: "Home Loan for Construction", slug: "/home-loan/bhktype/construction" },
                            { id: 4, label: "Commercial Property Loan", slug: "/home-loan/bhktype/commercial" },
                        ]
                    },
                    {
                        id: 7,
                        label: "Home Loan By Property",
                        slug: "",
                        submenu: [
                            { id: 1, label: "Home Loan for Apartment / Flat", slug: "/home-loan/property/apartment" },
                            { id: 2, label: "Home Loan for Independent House / Villa", slug: "/home-loan/property/independent-house" },
                            { id: 3, label: "Home Loan for Plot / Land Purchase", slug: "/home-loan/property/plot" },
                            { id: 4, label: "Home Loan for Under-Construction Property", slug: "/home-loan/property/under-construction" },
                            { id: 5, label: "Home Loan for Ready-to-Move Property", slug: "/home-loan/property/ready-to-move" },
                        ]
                    },
                    {
                        id: 8,
                        label: "Home Loan By CIBIL Score",
                        slug: "",
                        submenu: [
                            // { id: 1, label: "CIBIL Score 550", slug: "/home-loan/cibil/cibil-550" },
                            // { id: 2, label: "CIBIL Score 600", slug: "/home-loan/cibil/cibil-600" },
                            { id: 3, label: "CIBIL Score 650", slug: "/home-loan/cibil/cibil-650" },
                            { id: 4, label: "CIBIL Score 700", slug: "/home-loan/cibil/cibil-700" },
                            { id: 5, label: "CIBIL Score 750", slug: "/home-loan/cibil/cibil-750" },
                            { id: 6, label: "CIBIL Score 800", slug: "/home-loan/cibil/cibil-800" },
                        ]
                    },
                    {
                        id: 9,
                        label: "Home Loan By Salary",
                        slug: "",
                        submenu: [
                            { id: 1, label: "Salary 50000", slug: "/home-loan/salary/50000-salary" },
                            { id: 2, label: "Salary 80000", slug: "/home-loan/salary/80000-salary" },
                            { id: 3, label: "Salary 110000", slug: "/home-loan/salary/110000-salary" },
                            { id: 4, label: "Salary 150000", slug: "/home-loan/salary/150000-salary" },
                            { id: 5, label: "Salary 200000", slug: "/home-loan/salary/200000-salary" },
                            { id: 6, label: "Salary 210000 + ", slug: "/home-loan/salary/210000-plus-salary" },
                        ]
                    },
                    // {
                    //     id: 8,
                    //     label: "Home Loan By Other",
                    //     slug: "",
                    //     submenu: [
                    //         { id: 1, label: "NRI Home Loan", slug: "/home-loan/nri" },
                    //         { id: 2, label: "Home Loan without Income Proof", slug: "/home-loan/without-income-proof" },
                    //         { id: 3, label: "Home Loan for Low CIBIL Score", slug: "/home-loan/low-cibil" },
                    //         { id: 4, label: "Home Loan without Documents", slug: "/home-loan/without-documents" },
                    //         { id: 5, label: "Home Loan without Salary Slip", slug: "/home-loan/without-salary-slip" },
                    //     ]
                    // },
                    // {
                    //     id: 9,
                    //     label: "Home Loan Calculators",
                    //     slug: "",
                    //     submenu: [
                    //         { id: 1, label: "Home Loan EMI Calculator", slug: "/home-loan/emi-calculator" },
                    //         { id: 2, label: "Home Loan Eligibility Calculator", slug: "/home-loan/eligibility-calculator" },
                    //         { id: 3, label: "Home Loan Prepayment Calculator", slug: "/home-loan/prepayment-calculator" },
                    //         { id: 4, label: "Home Loan Balance Transfer Calculator", slug: "/home-loan/balance-transfer-calculator" },
                    //         { id: 5, label: "Home Loan Tax Benefit Calculator", slug: "/home-loan/tax-benefit-calculator" },
                    //     ]
                    // },
                ]
            },
            {
                id: 2,
                label: "Top-Up Home Loan",
                slug: "top-up-home-loan",
            },
            {
                id: 3,
                label: "Transfer Home Loan",
                slug: "transfer-home-loan",
            }
        ]
    },
    {
        id: 3,
        label: "Calculators",
        slug: "/calculators",
        icon: <Info />,
    },
    //     {
    //     id: 1,
    //     label: "About Us",
    //     slug: "/about-us",
    //     icon: <Info />,
    // },
 

    {
        id: 4,
        label: "Instant Apply",
        slug: "/apply-loan",
        icon: <User />,
    },
    {
        id: 5,
        label: "FAQ",
        slug: "/faq",
        icon: <HelpCircle />,
    },
    {
        id: 6,
        label: "Contact",
        slug: "/contact-us",
        icon: <Phone />,
    }



];

export const heroSectionData = [
    {
        title: "Your Dream Home is Just a Click Away",
        description: "Get instant home loan approval with competitive interest rates starting from 6.5% p.a.",
        interestRate: "6.5%",
        approvalTime: "24hrs",
        maxLoan: "₹5Cr",
        img: banner4,
        img1: banner4,
        imageUrl: banner4,
    },
    //   {
    //     img: banner4,
    //     img1: mobilebanner4,
    //     heading: 'Simple & Secure Home Loan Solutions',
    //     title: 'Get Your Dream Home Today',
    //     caption: 'Low interest rates and flexible terms to make home ownership easier.',
    //   },
    //   {
    //     img: banner5,
    //     img1: mobilebanner5,
    //     heading: 'Affordable Home Loans',
    //     title: 'Easy Loan Approval Process',
    //     caption: 'Fast approvals to get you into your new home quickly and effortlessly.',
    //   },
    //   {
    //     img: "https://www.urbanmoney.com/assets/images/homeSlider/img_home-loan.svg",
    //     heading: 'Home Loan Options for Everyone',
    //     title: 'Tailored Plans for Your Needs',
    //     caption: 'Choose from a variety of flexible home loan options to suit your lifestyle.',
    //   },
    //   {
    //     img: banner3,
    //     img1: mobilebanner3,
    //     heading: 'Reliable Home Loan Services',
    //     title: 'Low EMI Plans for Your Comfort',
    //     caption: 'Pay less every month with our affordable EMI options.',
    //   },
    //   {
    //     img: banner2,
    //     img1: mobilebanner2,
    //     heading: 'Trusted Home Loan Providers',
    //     title: 'Expert Guidance Every Step of the Way',
    //     caption: 'From application to approval, we guide you through the entire process.',
    //   },
    //    {
    //     img: banner1,
    //     heading: 'Trusted Home Loan Providers',
    //     title: 'Expert Guidance Every Step of the Way',
    //     caption: 'From application to approval, we guide you through the entire process.',
    //   },
];


export const productLinks = {
    localPulse: "https://gglocalpulse.ggconsultancy.services/",
    educore360: "https://ggeducore360.ggconsultancy.services/",
    prepmaster: "https://ggprepmaster.ggconsultancy.services/",
    edusphere: "https://ggedusphere.ggconsultancy.services/",
    pharmasphere360: "https://ggpharmasphere360.ggconsultancy.services/",
    vendostream: "https://vendostream.com/",
    franchiseBuilder360: "https://franchisebuilder360.com/"
};

export const socialMedias = [
    {
        icon: smFB,
        name: "facebook",
        link: "https://www.facebook.com/people/Global-Garner-Consultancy-Services/61552984453919/",
    },
    {
        icon: smX,
        name: "twitter",
        link: "https://twitter.com/ggconsultancy",
    },
    {
        icon: smlinkedin,
        name: "linkedin",
        link: "https://www.linkedin.com/in/global-garner-consultancy-services-49b40529a/",
    },
    {
        icon: smInsta,
        name: "instagram",
        link: "https://www.instagram.com/ggconsultancyservice/",
    },
];

export const servicesData = [
    {
        id: 1,
        heading: "GG Edusphere",
        link: productLinks.edusphere,
        // icon: edusphere,
        slug: "/details/gg-edusphere",

    },
    {
        id: 2,
        heading: "GG Educore 360",
        link: productLinks.educore360,
        // icon: educore,
        slug: "/details/gg-educore-360",

    },
    {
        id: 3,
        heading: "GG LocalPulse",
        // icon: localpulse,
        link: productLinks.localPulse,
        slug: "/details/localpulse",

    },
    {
        id: 4,
        heading: "PharmaSphere 360",
        // icon: pharmasphere,
        link: productLinks.pharmasphere360,
        slug: "/details/gg-pharmasphere-360",

    },
    {
        id: 5,
        heading: "PrepMaster Pro",
        // icon: prepmaster,
        link: productLinks.prepmaster,
        slug: "/details/gg-prepmaster",

    },
    {
        id: 6,
        heading: "Rapid Retail",
        // icon: rapid,
        link: productLinks.prepmaster,
        slug: "/details/gg-prepmaster",

    },
    {
        id: 1,
        heading: "GG Edusphere",
        link: productLinks.edusphere,
        // icon: edusphere,
        slug: "/details/gg-edusphere",

    },
    {
        id: 2,
        heading: "GG Educore 360",
        link: productLinks.educore360,
        // icon: educore,
        slug: "/details/gg-educore-360",

    },
    {
        id: 3,
        heading: "GG LocalPulse",
        // icon: localpulse,
        link: productLinks.localPulse,
        slug: "/details/localpulse",

    },
    {
        id: 4,
        heading: "PharmaSphere 360",
        // icon: pharmasphere,
        link: productLinks.pharmasphere360,
        slug: "/details/gg-pharmasphere-360",

    },
    {
        id: 5,
        heading: "PrepMaster Pro",
        // icon: prepmaster,
        link: productLinks.prepmaster,
        slug: "/details/gg-prepmaster",

    },
    {
        id: 6,
        heading: "Rapid Retail",
        // icon: rapid,
        link: productLinks.prepmaster,
        slug: "/details/gg-prepmaster",

    },

];











