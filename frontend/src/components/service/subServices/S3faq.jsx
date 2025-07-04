import React from "react";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";

const S3faq = () => {
  return (
    <div>
      <MDBContainer className="mt-5" style={{ maxWidth: "1000px" }}>
        <h1 className="text-center" style={{ color: "black" }}>
          SEO
        </h1>
        <MDBAccordion alwaysOpen initialActive={0}>
          <MDBAccordionItem
            collapseId={1}
            headerTitle="What is SEO and why is it important for my business?"
          >
            SEO improves your website's visibility on search engines, driving
            organic traffic, leads, and conversions. It's crucial for long-term
            growth and online credibility.
          </MDBAccordionItem>

          <MDBAccordionItem
            collapseId={2}
            headerTitle="How long does it take to see results from SEO?"
          >
            SEO results typically take 3-6 months, depending on factors like
            competition, content quality, and keyword difficulty.
          </MDBAccordionItem>

          <MDBAccordionItem
            collapseId={3}
            headerTitle="What are the key components of SEO?"
          >
            SEO includes On-Page SEO (content optimization), Off-Page SEO
            (backlinks), Technical SEO (site performance), and Content SEO
            (quality content).
          </MDBAccordionItem>

          <MDBAccordionItem
            collapseId={4}
            headerTitle="Do I need to update my SEO strategy regularly?"
          >
            <strong>Yes</strong>, SEO requires regular updates due to changing algorithms,
            keyword trends, and content optimization needs.
          </MDBAccordionItem>

          <MDBAccordionItem
            collapseId={5}
            headerTitle="Can you guarantee that my website will rank #1 on Google?"
          >
            <strong>No</strong>, rankings depend on many factors, and no one can guarantee a #1
            spot. We focus on improving rankings sustainably.
          </MDBAccordionItem>
          <h1 className="text-center" style={{ color: "black", marginTop:"10px", marginBottom:"10px" }}>
            Payment Gateway Integration
          </h1>

          <MDBAccordionItem collapseId={6} headerTitle="What is a payment gateway?">A payment gateway is a service that processes online payments for businesses by securely transferring payment information between the customer, merchant, and bank.</MDBAccordionItem>
          <MDBAccordionItem collapseId={7} headerTitle="How long does it take to integrate a payment gateway?">Integration typically takes 1 to 2 weeks, depending on the platform and customizations needed for your website or app.</MDBAccordionItem>
          <MDBAccordionItem collapseId={8} headerTitle="Is payment gateway integration secure?"><strong>Yes</strong>, all payment gateways comply with PCI-DSS standards and use encryption to protect sensitive customer information.</MDBAccordionItem>
          <MDBAccordionItem collapseId={9} headerTitle="Can I accept international payments?"><strong>Yes</strong>, most payment gateways support multi-currency and international payment processing, subject to the specific provider’s policies.</MDBAccordionItem>
          <MDBAccordionItem collapseId={10} headerTitle="What are the fees for using a payment gateway?">Fees vary by provider but usually include a setup fee, transaction fees, and potentially monthly fees.</MDBAccordionItem>
          <MDBAccordionItem collapseId={11} headerTitle="Which payment gateways do you integrate?">We integrate popular gateways like Stripe, PayPal, Square, Razorpay, and Authorize.Net, among others.</MDBAccordionItem>

          <h1 className="text-center" style={{ color: "black", marginTop:"10px", marginBottom:"10px" }}>
          AI Integration
          </h1>

          <MDBAccordionItem collapseId={12} headerTitle="How can AI benefit my business?">AI can automate repetitive tasks, provide data-driven insights, enhance customer experiences, and improve operational efficiency.</MDBAccordionItem>
          <MDBAccordionItem collapseId={13} headerTitle="What types of AI services do you offer?">We offer AI-powered chatbots, data analytics, machine learning models, natural language processing, and predictive analytics integrations.</MDBAccordionItem>
          <MDBAccordionItem collapseId={14} headerTitle="Is AI suitable for small businesses?"><strong>Yes</strong>, AI solutions can be customized for businesses of any size to optimize processes, improve customer service, and reduce costs.</MDBAccordionItem>
          <MDBAccordionItem collapseId={15} headerTitle="How long does AI integration take?">The timeline depends on the complexity of your needs, but typically, it can take a few weeks to a few months for full integration.</MDBAccordionItem>
          <MDBAccordionItem collapseId={16} headerTitle="Do I need to change my current systems for AI integration?">Not necessarily. AI can often be integrated with your existing systems through APIs or custom solutions tailored to your infrastructure.</MDBAccordionItem>
          <MDBAccordionItem collapseId={17} headerTitle="What is the cost of AI integration?">Costs vary depending on the scope and complexity of the project. We provide customized quotes based on your specific requirements.</MDBAccordionItem>
          <MDBAccordionItem collapseId={18} headerTitle="Is AI integration secure?">We ensure that all AI integrations follow strict security protocols, including data encryption and compliance with industry regulations.</MDBAccordionItem>

          <h1 className="text-center" style={{ color: "black", marginTop:"10px", marginBottom:"10px" }}>
          Social Media Marketing
          </h1>

          <MDBAccordionItem collapseId={19} headerTitle="Which social media platforms should my business use?">It depends on your target audience. Popular platforms include Facebook, Instagram, LinkedIn, and Twitter. We'll help you choose the right platforms based on your business goals.</MDBAccordionItem>
          <MDBAccordionItem collapseId={20} headerTitle="How do you measure the success of social media campaigns?">We track metrics like engagement, reach, clicks, conversions, and ROI using analytics tools to evaluate campaign performance.</MDBAccordionItem>
          <MDBAccordionItem collapseId={21} headerTitle="How long does it take to see results from social media marketing?">Typically, it takes 3-6 months to see consistent growth, but results may vary depending on your industry, strategy, and goals.</MDBAccordionItem>
          <MDBAccordionItem collapseId={22} headerTitle="What type of content should my business post?">Content can include blogs, videos, infographics, and promotions. We create a content strategy tailored to your brand and audience.</MDBAccordionItem>
          <MDBAccordionItem collapseId={23} headerTitle="Is social media marketing suitable for small businesses?"><strong>Yes</strong>, social media offers cost-effective ways for small businesses to engage with their audience, build brand awareness, and generate leads.</MDBAccordionItem>
        </MDBAccordion>
      </MDBContainer>
    </div>
  );
};

export default S3faq;
