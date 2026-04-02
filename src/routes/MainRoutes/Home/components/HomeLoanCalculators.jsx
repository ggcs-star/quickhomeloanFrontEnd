import React from "react"
import {
  Calculator,
  Wallet,
  Percent,
  Scale,
  ArrowRight,
  CircleCheckBig,
  CalendarClock,
  ChartPie,
  Stamp
} from "lucide-react"

import { Container } from "../../../../components/Layout"
import { href, Link } from "react-router-dom"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

/* ------------------------------------------------------------------
   STATIC DB (SINGLE SOURCE OF TRUTH)
------------------------------------------------------------------- */

const HOME_LOAN_CALCULATORS = [
  {
    id: 1,
    title: "EMI Calculator",
    description: "Estimate your monthly EMIs effortlessly.",
    icon: Calculator,
    href: "/calculators/loan-basic"
  },
  {
    id: 2,
    title: "Loan Eligibility Calculator",
    description: "Find the maximum loan you qualify for.",
    icon: CircleCheckBig,
    href: "/calculators/home-loan-eligibility"
  },
  {
    id: 3,
    title: "Loan Amount Calculator",
    description: "Discover how much you can borrow.",
    icon: Wallet,
    href: "/calculators/loan-basic"
  },
  {
    id: 4,
    title: "Interest Rate Calculator",
    description: "Compare interest rates easily.",
    icon: Percent,
    href: "/calculators/emi-interest-rate-finder"
  },
  {
    id: 5,
    title: "Loan Tenure Calculator",
    description: "Adjust tenure to match your budget.",
    icon: CalendarClock,
    href: "/calculators/loan-tenure"
  },
  {
    id: 6,
    title: "Prepayment Impact Calculator",
    description: "See how prepayments reduce loan cost.",
    icon: ChartPie,
    href: "/calculators/home-loan-prepay"
  },
  {
    id: 7,
    title: "Comparison Calculator",
    description: "Pick the best deal among loan offers.",
    icon: Scale,
    href: "/calculators/loan-vs-fd-mf-sip"
  },
  {
    id: 8,
    title: "Stamp Duty Calculator",
    description: "Estimate stamp duty charges quickly.",
    icon: Stamp,
    href: "/calculators/stamp-duty",
  }
]

/* ------------------------------------------------------------------
   COMPONENT
------------------------------------------------------------------- */

const HomeLoanCalculators = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 2500,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1.5 } }
    ]
  }

  const CTA = ({ item, children }) => {
    if (item.disableNavigation) {
      return (
        <span className="inline-flex items-center text-sm font-semibold text-slate-400 cursor-default">
          {children}
        </span>
      )
    }

    return (
      <Link
        to={item.href}
        className="inline-flex items-center text-sm font-semibold hover:gap-2 transition-all"
      >
        {children}
      </Link>
    )
  }

  return (
    <section id="calculators" className="py-20 bg-slate-900 text-white">
      <Container>
        {/* HEADER */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Home Loan Calculators
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Simplify your home loan journey with smart calculators.
          </p>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {HOME_LOAN_CALCULATORS.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.id}
                className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:bg-slate-700/50 transition flex flex-col"
              >
                <Icon className="h-8 w-8 mb-4 opacity-80" />

                <h3 className="text-xl font-bold mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm mb-6 flex-grow">
                  {item.description}
                </p>

                <CTA item={item}>
                  Calculate Now
                  <ArrowRight className="ml-1 h-4 w-4" />
                </CTA>
              </div>
            )
          })}
        </div>

        {/* MOBILE + TABLET SLIDER */}
        <div className="lg:hidden">
          <Slider {...sliderSettings}>
            {HOME_LOAN_CALCULATORS.map((item) => {
              const Icon = item.icon

              return (
                <div key={item.id} className="px-2">
                  <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 flex flex-col h-full">
                    <Icon className="h-8 w-8 mb-4 opacity-80" />

                    <h3 className="text-lg font-bold mb-1">
                      {item.title}
                    </h3>

                    <p className="text-slate-400 text-xs mb-4 flex-grow">
                      {item.description}
                    </p>

                    <CTA item={item}>
                      Calculate Now
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </CTA>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </Container>
    </section>
  )
}

export default HomeLoanCalculators
