import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
import { Row, Col, Button } from "react-bootstrap";
import { useEffect } from "react";
import vid from "../../assets/vid.mp4";
import { NavLink } from "react-router-dom";

const Faq = () => {
  useEffect(() => {
    window.scrollTo(top);
  }, []);
  return (
    <div style={{ marginTop: "20px" }}>
      <video data-testid="faq-video" className="vid" src={vid} autoPlay loop muted />
      <div>
        <Row className="text-center mb-4" style={{ width: "100%" }}>
          <Col lg={{ span: 8, offset: 2 }}>
            <h1
              className="display-4 font-weight-bold"
              style={{ color: "black" }}
            >
              Frequently Asked Questions
            </h1>
            <p className="mt-3 text-muted">
              Welcome to our FAQ page, your one-stop resource for answers to
              commonly asked questions. <br />
              <b>
                Whether you are a new customer looking to learn more about what
                we offer or a long-time user seeking clarification on specific
                topics, this page has clear and concise information about our
                products and services.
              </b>
            </p>
          </Col>
        </Row>
        <MDBContainer className="mt-5" style={{ maxWidth: "1000px" }}>
          <MDBAccordion alwaysOpen initialActive={0}>
            <MDBAccordionItem
              collapseId={1}
              headerTitle="What industries do you serve?"
              style={{ marginBottom: "20px", border: "2px solid grey" }}
            >
              We have experience working across various industries including:
              <br /> • E-commerce <br />
              • Healthcare <br />
              • Education
              <br />
              • Real Estate
              <br />
              • Travel and Hospitality
              <br />
              • Finance and Fintech
              <br />
              • Entertainment and Media
              <br />• Others
            </MDBAccordionItem>
            <MDBAccordionItem
              collapseId={2}
              headerTitle="What is the process for starting a project?"
              style={{ border: "2px solid grey", marginBottom: "20px" }}
            >
              We follow a streamlined process:
              <br /> • Initial Consultation: We discuss your project
              requirements, goals, and budget.
              <br />
              • Proposal & Planning: We create a proposal outlining the
              timeline, cost, and project plan.
              <br />
              • Development: Our team builds the solution using the best
              technologies and practices.
              <br />
              • Testing: We thoroughly test the solution for functionality,
              security, and performance.
              <br />• Launch & Support: After launch, we provide ongoing support
              and maintenance.
            </MDBAccordionItem>
            <MDBAccordionItem
              collapseId={3}
              headerTitle="Do you sign NDAs (Non-Disclosure Agreements)?"
              style={{ border: "2px solid grey", marginBottom: "20px" }}
            >
              <strong>Yes</strong>, we sign NDAs to ensure complete
              confidentiality of your project and protect your intellectual
              property.
            </MDBAccordionItem>

            <MDBAccordionItem
              collapseId={4}
              headerTitle="How do you ensure quality and security"
              style={{ border: "2px solid grey", marginBottom: "20px" }}
            >
              We follow a rigorous testing process to identify and fix any bugs
              or security vulnerabilities. We also implement best practices for
              security, including data encryption, secure coding standards, and
              SSL integration.
            </MDBAccordionItem>

            <MDBAccordionItem
              collapseId={5}
              headerTitle="Do you offer ongoing support after the project is completed?"
              style={{ border: "2px solid grey", marginBottom: "20px" }}
            >
              <strong>Yes</strong>, we offer various support packages for
              ongoing maintenance, updates, and security monitoring after
              project completion.
            </MDBAccordionItem>

            <MDBAccordionItem
              collapseId={6}
              headerTitle="How long does it take to develop a website?"
              style={{ border: "2px solid grey", marginBottom: "20px" }}
            >
              The timeline varies depending on the complexity and features of
              your project. Simple websites take around 4-6 weeks, while more
              complex projects may take 8-12 weeks or more. We work with you to
              establish a detailed timeline after the project scope is defined.
            </MDBAccordionItem>

            <MDBAccordionItem
              collapseId={7}
              headerTitle="What is the cost of developing a website?"
              style={{ border: "2px solid grey", marginBottom: "20px" }}
            >
              The cost depends on factors like the number of pages, required
              features (e.g., e-commerce functionality, custom integrations),
              and design complexity. We offer customized quotes based on your
              specific needs after an initial consultation.
            </MDBAccordionItem>

            <MDBAccordionItem
              collapseId={8}
              headerTitle="Will my website be mobile-friendly and responsive?"
              style={{ marginBottom: "20px", border: "2px solid grey" }}
            >
              <strong>Yes</strong>, every website we build is fully responsive,
              ensuring it works seamlessly on all devices, including desktops,
              tablets, and smartphones.
            </MDBAccordionItem>

            <MDBAccordionItem
              collapseId={9}
              headerTitle="Can I update my website after it’s launched?"
              style={{ marginBottom: "20px", border: "2px solid grey" }}
            >
              Absolutely! We provide Content Management Systems (CMS) like
              WordPress or custom CMS solutions, allowing you to easily update
              your content without needing technical expertise.
            </MDBAccordionItem>
            <MDBAccordionItem
              collapseId={10}
              headerTitle="Do you offer e-commerce solutions?"
              style={{ marginBottom: "20px", border: "2px solid grey" }}
            >
              <strong>Yes</strong>, we provide comprehensive e-commerce
              development services using platforms such as Shopify, WooCommerce,
              Magento, and custom-built solutions tailored to your business.
            </MDBAccordionItem>
            <MDBAccordionItem
              collapseId={11}
              headerTitle="What if I need changes after the website goes live?"
              style={{ marginBottom: "20px", border: "2px solid grey" }}
            >
              We offer post-launch support and maintenance services to handle
              updates, security patches, content management, and performance
              optimization as needed.
            </MDBAccordionItem>
            <MDBAccordionItem
              collapseId={12}
              headerTitle="Will you optimize my website for SEO?"
              style={{ marginBottom: "20px", border: "2px solid grey" }}
            >
              <strong>Yes</strong>, we follow best SEO practices when developing
              websites. This includes optimizing page speed, structure,
              metadata, and mobile responsiveness to ensure your site is
              SEO-ready from day one.
            </MDBAccordionItem>
            <MDBAccordionItem
              collapseId={13}
              headerTitle="Can you integrate third-party tools or APIs?"
              style={{ marginBottom: "20px", border: "2px solid grey" }}
            >
              <strong>Yes</strong>, we can integrate third-party tools like
              payment gateways, CRM systems, email marketing platforms, or
              custom APIs as per your requirements.
            </MDBAccordionItem>
            <MDBAccordionItem
              collapseId={14}
              headerTitle="Do you offer website hosting and domain services?"
              style={{ marginBottom: "20px", border: "2px solid grey" }}
            >
              We can assist in setting up reliable hosting and domain
              registration for your website, whether through our partners or
              third-party services.
            </MDBAccordionItem>

            <MDBAccordionItem
              collapseId={15}
              headerTitle="What types of websites do you develop?"
              style={{ marginBottom: "20px", border: "2px solid grey" }}
            >
              We specialize in developing a variety of websites, including:
              <br /> • Corporate websites <br />
              • E-commerce platforms <br />
              • Portfolio sites <br />
              • Blogging websites <br />
              • Landing pages <br />
              • Custom web applications <br />
              Our solutions are fully customizable to fit your business needs.
            </MDBAccordionItem>

            <MDBAccordionItem
              collapseId={16}
              headerTitle="What platforms do you develop mobile apps for?"
              style={{ marginBottom: "20px", border: "2px solid grey" }}
            >
              We develop mobile apps for both <strong>IOS</strong> and{" "}
              <strong>Android</strong> platforms. We use native languages like
              Swift for iOS and Kotlin for Android, as well as cross-platform
              solutions like Flutter and React Native.
            </MDBAccordionItem>

            <MDBAccordionItem
              collapseId={17}
              headerTitle="How long does it take to develop a mobile app?"
              style={{ marginBottom: "20px", border: "2px solid grey" }}
            >
              The development time depends on the app’s complexity, features,
              and design. A simple app might take 2-4 months, while more complex
              apps could take 6 months or more. We will provide a detailed
              project timeline during the initial planning phase.
            </MDBAccordionItem>

            <MDBAccordionItem
              collapseId={18}
              headerTitle="How much does it cost to develop a mobile app?"
              style={{ marginBottom: "20px", border: "2px solid grey" }}
            >
              App development costs vary depending on factors like platform
              choice (iOS, Android, or both), number of features, design
              complexity, and integrations. We provide a detailed cost estimate
              after understanding your project scope.
            </MDBAccordionItem>

            <MDBAccordionItem
              collapseId={19}
              headerTitle="Do you offer post-launch app maintenance?"
              style={{ marginBottom: "20px", border: "2px solid grey" }}
            >
              <strong>Yes</strong>, we provide ongoing support and maintenance
              for your mobile app, including bug fixes, updates, performance
              optimization, and feature enhancements as required.
            </MDBAccordionItem>

            <MDBAccordionItem
              collapseId={20}
              headerTitle="Will my mobile app work on both iOS and Android?"
              style={{ marginBottom: "20px", border: "2px solid grey" }}
            >
              If youre looking for cross-platform development, we can build your
              app using Flutter or React Native to ensure it runs smoothly on
              both iOS and Android devices. We also offer native app development
              if needed.
            </MDBAccordionItem>

            <MDBAccordionItem
              collapseId={21}
              headerTitle="Can you help with app store submissions?"
              style={{ marginBottom: "20px", border: "2px solid grey" }}
            >
              <strong>Yes</strong>, we assist with both the App Store (iOS) and
              Google Play (Android) submissions, ensuring your app meets all
              guidelines and is optimized for visibility.
            </MDBAccordionItem>

            <MDBAccordionItem
              collapseId={22}
              headerTitle="What features can be included in a mobile app?"
              style={{ marginBottom: "20px", border: "2px solid grey" }}
            >
              We can integrate a wide range of features such as: <br />
              • User Authentication (social login, email, etc.) <br />
              • Push Notifications
              <br />
              • In-app purchases
              <br />
              • GPS tracking and mapping
              <br />
              • Payment Gateway Integration
              <br />
              • Custom APIs
              <br />• Live chat or customer support features
            </MDBAccordionItem>

            <MDBAccordionItem
              collapseId={23}
              headerTitle="Do you provide UI/UX design services for apps?"
              style={{ marginBottom: "20px", border: "2px solid grey" }}
            >
              <strong>Yes</strong>, we offer end-to-end UI/UX design services to
              create an intuitive, user-friendly, and engaging interface. We
              ensure the design aligns with your brand and user expectations.
            </MDBAccordionItem>

            <MDBAccordionItem
              collapseId={24}
              headerTitle="What technology stacks do you use for mobile app development?"
              style={{ marginBottom: "20px", border: "2px solid grey" }}
            >
              We use native programming languages like Swift for iOS and Kotlin
              for Android. For cross-platform development, we work with Flutter
              and React Native. Our backend technologies include Node.js,
              Python, and PHP to ensure seamless app performance.
            </MDBAccordionItem>

            <MDBAccordionItem
              collapseId={25}
              headerTitle="Can you integrate third-party services into my app?"
              style={{ marginBottom: "20px", border: "2px solid grey" }}
            >
              <strong>Yes</strong>, we can integrate third-party services, such
              as payment gateways (Stripe, PayPal), analytics tools (Google
              Analytics, Firebase), social media APIs, or custom services to
              meet your apps specific needs.
            </MDBAccordionItem>
          </MDBAccordion>
        </MDBContainer>
        <hr className="my-4"></hr>
        <div className="text-center d-flex justify-content-center">
          <div style={{ marginBottom: "10px", marginTop: "7px" }}>
            Cant find what you are looking for?
          </div>
          <NavLink to={"./contact"}>
            <Button style={{ marginBottom: "20px", marginLeft: "10px" }}>
              Contact Us
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Faq;
