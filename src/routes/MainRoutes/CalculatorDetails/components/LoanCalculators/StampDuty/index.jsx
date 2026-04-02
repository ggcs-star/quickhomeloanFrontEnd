
import CalculatorHeader from "../../../../../../components/CalculatorHeader"
import { Container } from "../../../../../../components/Layout"
import ExampleScenarios from "./components/ExampleScenarios"
import FaqSection from "./components/FaqSection"
import HowCalculatorWorks from "./components/HowCalculatorWorks"
import HowToUseCalculator from "./components/HowToUseCalculator"
import PracticalApplications from "./components/PracticalApplications"
import StampDutyCalculator from "./components/StampDutyCalculator"
import StampDutyHeader from "./components/StampDutyHeader"
import UnderstandingResults from "./components/UnderstandingResults"
import WhatThisCalculatorDoes from "./components/WhatThisCalculatorDoes"
import WhenToUseCalculator from "./components/WhenToUseCalculator.JSX"


export default function StampDuty() {
    return (
        <main className="container mx-auto pt-8 ">
<CalculatorHeader
  title="Stamp Duty & Registration Calculator"
  subtitle="Estimate stamp duty, registration charges, and total upfront costs involved in a property purchase."
  description="Enter property value, state, and buyer details to get an instant, itemized breakdown of statutory charges."
/>
            <Container className='my-8'>
                <StampDutyCalculator />
                <WhatThisCalculatorDoes/>
                <WhenToUseCalculator/>
                <HowToUseCalculator/>
                <ExampleScenarios/>
                <UnderstandingResults/>
                <HowCalculatorWorks/>
                <PracticalApplications/>
                <FaqSection/>
            </Container>
        </main>
    )
}
