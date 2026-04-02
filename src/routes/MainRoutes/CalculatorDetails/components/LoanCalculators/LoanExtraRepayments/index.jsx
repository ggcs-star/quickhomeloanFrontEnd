
import CalculatorHeader from "../../../../../../components/CalculatorHeader"
import { Container } from "../../../../../../components/Layout"
import LearnMorePrepayments from "./components/LearnMorePrepayments"
import PageHeader from "./components/PageHeader"
import PrepaymentCalculator from "./components/PrepaymentCalculator"

export default function LoanExtraRepayments() {
    return (
        <main className="container mx-auto pt-8 ">
<CalculatorHeader
  title="Home Loan Prepayment Calculator"
  subtitle="Reduce your EMI or loan tenure and save lakhs in interest by making smart prepayments."
  description="Analyze how part-prepayments impact your outstanding principal, total interest payable, and overall loan duration."
/>
            <Container className='my-8'>
                <PrepaymentCalculator />
                <LearnMorePrepayments />
            </Container>
        </main>
    )
}
