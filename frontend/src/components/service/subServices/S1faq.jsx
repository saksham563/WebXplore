import React from 'react'
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";

const s1faq = () => {
  return (
    <div>
      <MDBContainer className="mt-5" style={{ maxWidth: '1000px' }}>
        <MDBAccordion alwaysOpen initialActive={0}>
          <MDBAccordionItem collapseId={1} headerTitle="What types of websites do you develop?">
            We specialize in developing a variety of websites, including:
            <br />  •	Corporate websites  <br />
            •	E-commerce platforms <br />
            •	Portfolio sites <br />
            •	Blogging websites <br />
            •	Landing pages <br />
            •	Custom web applications <br />
            Our solutions are fully customizable to fit your business needs.

          </MDBAccordionItem>
          <MDBAccordionItem collapseId={2} headerTitle="How long does it take to develop a website?">
            The timeline varies depending on the complexity and features of your project. Simple websites take around 4-6 weeks, while more complex projects may take 8-12 weeks or more. We work with you to establish a detailed timeline after the project scope is defined.
          </MDBAccordionItem>
          <MDBAccordionItem collapseId={3} headerTitle="What is the cost of developing a website?">
            The cost depends on factors like the number of pages, required features (e.g., e-commerce functionality, custom integrations), and design complexity. We offer customized quotes based on your specific needs after an initial consultation.
          </MDBAccordionItem>

          <MDBAccordionItem collapseId={4} headerTitle="Will my website be mobile-friendly and responsive?">
            <strong>Yes</strong>, every website we build is fully responsive, ensuring it works seamlessly on all devices, including desktops, tablets, and smartphones.
          </MDBAccordionItem>
          <MDBAccordionItem collapseId={5} headerTitle="Can I update my website after it’s launched?">
            Absolutely! We provide Content Management Systems (CMS) like WordPress or custom CMS solutions, allowing you to easily update your content without needing technical expertise.
          </MDBAccordionItem>
          <MDBAccordionItem collapseId={6} headerTitle="Do you offer e-commerce solutions?">
            <strong>Yes</strong>, we provide comprehensive e-commerce development services using platforms such as Shopify, WooCommerce, Magento, and custom-built solutions tailored to your business.
          </MDBAccordionItem>
          <MDBAccordionItem collapseId={7} headerTitle="What if I need changes after the website goes live?">
            We offer post-launch support and maintenance services to handle updates, security patches, content management, and performance optimization as needed.
          </MDBAccordionItem>
          <MDBAccordionItem collapseId={8} headerTitle="Will you optimize my website for SEO?">
            <strong>Yes</strong>, we follow best SEO practices when developing websites. This includes optimizing page speed, structure, metadata, and mobile responsiveness to ensure your site is SEO-ready from day one.
          </MDBAccordionItem>
          <MDBAccordionItem collapseId={9} headerTitle="Can you integrate third-party tools or APIs?">
            <strong>Yes</strong>, we can integrate third-party tools like payment gateways, CRM systems, email marketing platforms, or custom APIs as per your requirements.
          </MDBAccordionItem>
          <MDBAccordionItem collapseId={10} headerTitle="Do you offer website hosting and domain services?">
            We can assist in setting up reliable hosting and domain registration for your website, whether through our partners or third-party services.
          </MDBAccordionItem>
        </MDBAccordion>
      </MDBContainer>
    </div>
  )
}

export default s1faq