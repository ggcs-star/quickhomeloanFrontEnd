import { Container } from "../../../../components/Layout"

const HeroSection = () => {
  return (
    <header className="bg-light-card dark:bg-dark-card mt-32 py-8">
        <Container>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-black">
          Complete Guide to Home Loan Interest Rates in India
        </h1>

        <p className="mt-2 text-lg text-gray-500">
          Compare, Choose &amp; Save on Your Dream Home
        </p>

        {/* <p className="mt-2 text-sm text-gray-400 dark:text-gray-500">
          Last Updated: December 15, 2025
        </p> */}
        </Container>
    </header>
  )
}

export default HeroSection
