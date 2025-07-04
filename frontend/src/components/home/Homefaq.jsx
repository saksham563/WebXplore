
import { Accordion, Container, Row, Col } from "react-bootstrap";
import "./Homefaq.css";

const Homefaq = () => {
    const faqs = [
        {
            question: "What types of websites do you develop?",
            answer:
                `We specialize in developing a variety of websites, including:
             	Corporate websites  , E-commerce platforms,
            	Portfolio sites,
            	Blogging websites,
        	Landing pages,
            Custom web applications.
            Our solutions are fully customizable to fit your business needs.`,
        },
        {
            question: "How long does it take to develop a website?",
            answer:
                " The timeline varies depending on the complexity and features of your project. Simple websites take around 4-6 weeks, while more complex projects may take 8-12 weeks or more. We work with you to establish a detailed timeline after the project scope is defined.",
        },
        {
            question: "What is the cost of developing a website?",
            answer:
                " The cost depends on factors like the number of pages, required features (e.g., e-commerce functionality, custom integrations), and design complexity. We offer customized quotes based on your specific needs after an initial consultation.",
        },
        {
            question: "What platforms do you develop mobile apps for?",
            answer:
                " We develop mobile apps for both IOS and Android platforms. We use native languages like Swift for iOS and Kotlin for Android, as well as cross-platform solutions like Flutter and React Native.",
        },
        {
            question: "How long does it take to develop a mobile app?",
            answer:
                "The development time depends on the app’s complexity, features, and design. A simple app might take 2-4 months, while more complex apps could take 6 months or more. We'll provide a detailed project timeline during the initial planning phase.",
        },
        {
            question: "Do you offer post-launch app maintenance?",
            answer:
                "Yes, we provide ongoing support and maintenance for your mobile app, including bug fixes, updates, performance optimization, and feature enhancements as required.",
        },
        {
            question: "What is SEO and why is it important for my business??",
            answer:
                `SEO improves your website's visibility on search engines, driving
            organic traffic, leads, and conversions. It's crucial for long-term
            growth and online credibility.`,
        },
        {
            question: "How long does it take to see results from SEO?",
            answer:
                `SEO results typically take 3-6 months, depending on factors like
            competition, content quality, and keyword difficulty.`,
        },
        {
            question: "What are the key components of SEO?",
            answer:
                `SEO includes On-Page SEO (content optimization), Off-Page SEO
            (backlinks), Technical SEO (site performance), and Content SEO
            (quality content).`,
        },
    ];

    return (
        <div className="faq-section">
            <Container className="py-5">
                <Row>
                    <Col>
                        <h1 className="faq-heading text-center">
                            Frequently Asked Questions
                        </h1>
                        <p className="faq-intro text-center">
                            Got questions? We’ve got answers! Check out our FAQs below for
                            detailed insights.
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col lg={8}>
                        <Accordion className="faq-accordion">
                            {faqs.map((faq, index) => (
                                <Accordion.Item eventKey={index.toString()} key={index}>
                                    <Accordion.Header className="faq-question">
                                        {faq.question}
                                    </Accordion.Header>
                                    <Accordion.Body className="faq-answer">
                                        {faq.answer}
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Homefaq;
