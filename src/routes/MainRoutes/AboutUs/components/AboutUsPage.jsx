import { Container } from "../../../../components/Layout";

const AboutUsPage = () => {
  return (
    <Container>
      <main className="mx-auto pt-24 lg:pt-48 pb-10 text-neutral-900">
        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="font-semibold uppercase text-sm text-neutral-600">
              About QuickHomeLoan
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mt-2 text-neutral-900">
              Empowering Your Home Ownership Journey
            </h1>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              At <strong>QuickHomeLoan</strong>, we believe in making home
              ownership simple, transparent, and affordable. Since our
              inception, we’ve been helping thousands of borrowers compare
              rates, apply smarter, and save more on their dream homes — every
              step of the way.
            </p>
            <p className="mt-3 text-neutral-700">
              Whether you’re buying your first home, transferring your existing
              loan, or seeking a top-up, our goal is to empower you with tools,
              insights, and support to make confident financial decisions.
            </p>
          </div>

          {/* Mission Image */}
          <div className="flex justify-center">
            <img
              src="/images/about-home-loan.jpg"
              alt="About QuickHomeLoan"
              className="rounded-2xl shadow-md w-full max-w-md object-cover grayscale"
            />
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-md border border-neutral-300 p-6">
            <h3 className="text-xl font-semibold text-neutral-900">
              Our Mission
            </h3>
            <p className="mt-3 text-neutral-700 text-sm leading-relaxed">
              To simplify the home loan process for every Indian borrower —
              making it easy to compare, choose, and secure the right home
              financing with complete transparency.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              <li>• Provide unbiased, accurate information</li>
              <li>• Empower borrowers with financial literacy</li>
              <li>• Partner with leading banks and NBFCs for best deals</li>
              <li>• Deliver exceptional support through every loan stage</li>
            </ul>
          </div>

          <div className="bg-white rounded-md border border-neutral-300 p-6">
            <h3 className="text-xl font-semibold text-neutral-900">
              Our Vision
            </h3>
            <p className="mt-3 text-neutral-700 text-sm leading-relaxed">
              To be India’s most trusted and customer-centric home finance
              platform, where every borrower finds clarity, confidence, and the
              best value.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              <li>• Digitize home loan comparison and approval</li>
              <li>• Build trust through transparency and technology</li>
              <li>• Enable smarter decisions through AI-driven insights</li>
            </ul>
          </div>
        </section>

        {/* Core Values */}
        <section className="mt-16 bg-white rounded-md">
          <h3 className="text-2xl font-bold text-center text-neutral-900">
            Our Core Values
          </h3>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-6 text-center">
            {[
              {
                title: "Transparency",
                desc: "We disclose all costs, rates, and lender policies upfront.",
              },
              {
                title: "Integrity",
                desc: "We recommend what’s best for you — not for us.",
              },
              {
                title: "Innovation",
                desc: "We leverage technology to simplify complex loan processes.",
              },
              {
                title: "Customer First",
                desc: "Every service, feature, and update revolves around you.",
              },
              {
                title: "Excellence",
                desc: "We strive to exceed expectations in every interaction.",
              },
              {
                title: "Accessibility",
                desc: "We make financial assistance inclusive and approachable.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-4 rounded-md bg-neutral-100 border border-neutral-300"
              >
                <h4 className="font-semibold text-neutral-900">
                  {value.title}
                </h4>
                <p className="text-sm text-neutral-700 mt-2">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold text-center text-neutral-900">
            Meet Our Leadership
          </h3>
          <p className="mt-2 text-center text-neutral-600 text-sm max-w-2xl mx-auto">
            Our team brings decades of experience in banking, finance, and
            technology — united by a shared mission to make home loans simpler
            for everyone.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rohit Sharma",
                role: "Founder & CEO",
                img: "/images/team/ceo.jpg",
              },
              {
                name: "Raj Mehta",
                role: "Head of Operations",
                img: "/images/team/ops.jpg",
              },
              { name: "Arjun Patel", role: "CTO", img: "/images/team/cto.jpg" },
            ].map((member, index) => (
              <div
                key={index}
                className="text-center bg-white p-6 rounded-md border border-neutral-300"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover grayscale"
                />
                <h4 className="font-semibold mt-4 text-neutral-900">
                  {member.name}
                </h4>
                <p className="text-sm text-neutral-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 bg-neutral-900 text-white rounded-md p-4 lg:p-10 text-center">
          <h3 className="text-2xl font-bold">
            Join Us on the Journey to Smarter Home Loans
          </h3>
          <p className="mt-2 text-neutral-300">
            We’re committed to transforming how India accesses home finance —
            one borrower at a time.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <a
              href="/contact"
              className="w-[50%] lg:w-auto lg:px-6 py-3 text-sm bg-white text-neutral-900 rounded-md hover:bg-neutral-100 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/apply"
              className="w-[50%] lg:w-auto lg:px-6 py-3 text-sm border border-neutral-300 hover:bg-white hover:text-black rounded-md transition-colors text-white"
            >
              Explore Loan Options
            </a>
          </div>
        </section>
      </main>
    </Container>
  );
};

export default AboutUsPage;
