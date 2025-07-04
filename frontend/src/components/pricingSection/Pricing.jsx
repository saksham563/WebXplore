import { Container, Row, Col, Card } from 'react-bootstrap';
import './Pricing.css';
import { useEffect, useState } from 'react';
import vid from '../../assets/video4.mp4';

const Pricing = () => {
    useEffect(() => {
        window.scrollTo(top);
    }, []);

    const [introText, setIntroText] = useState([]);

    useEffect(() => {
        const text = `We provide top-notch development solutions tailored to your needs. Whether it's a stunning website or a mobile app, our expert team ensures quality, performance, and client satisfaction. Choose the right plan and let us bring your vision to life.`;
        const words = text.split(' ');
        const animatedWords = words.map((word, index) => (
            <span key={index} className="word" style={{ animationDelay: `${index * 0.1}s` }}>
                {word}&nbsp;
            </span>
        ));
        setIntroText(animatedWords);
    }, []);

    return (
        <>
            <video className="vid" src={vid} autoPlay loop muted />
            <Container className="pricing-page my-3">
                {/* Intro Section */}
                <div className="text-center mb-5">
                    <h1 className="intro-title">Why Choose Our Development Services?</h1>
                    <p className="intro-text">{introText}</p>
                </div>

                {/* Pricing Sections */}
                <Row>
                    {/* Mobile Development */}
                    <Col md={4} className="mb-4">
                        <Card className="pricing-card text-center">
                            <Card.Body>
                                <Card.Title className="pricing-plan-title">Mobile Development</Card.Title>
                                <Card.Text className="price">$10000</Card.Text>
                                <ul className="pricing-features">
                                    <li>Cross-Platform Apps with React Native or Flutter</li>
                                    <li>UI/UX Design tailored to your brand</li>
                                    <li>Optimized for high performance and low memory usage</li>
                                    <li>Full App Store & Google Play submission</li>
                                    <li>6 Months post-launch support with updates</li>
                                    <li>Push notifications, offline support, and more!</li>
                                </ul>
                                <button className="pricebtn">Choose Mobile Plan</button>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Web Development */}
                    <Col md={4} className="mb-4">
                        <Card className="pricing-card text-center">
                            <Card.Body>
                                <Card.Title className="pricing-plan-title">Web Development</Card.Title>
                                <Card.Text className="price">$25000</Card.Text>
                                <ul className="pricing-features">
                                    <li>Fully responsive design for all devices</li>
                                    <li>Search Engine Optimization (SEO) for better ranking</li>
                                    <li>Advanced CSS animations and interactions</li>
                                    <li>Custom Content Management System (CMS) Integration</li>
                                    <li>3 Months free maintenance and support</li>
                                    <li>Secure hosting setup and deployment</li>
                                </ul>
                                <button className="pricebtn">Choose Web Plan</button>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Other Services */}
                    <Col md={4} className="mb-4">
                        <Card className="pricing-card text-center">
                            <Card.Body>
                                <Card.Title className="pricing-plan-title">Other Services</Card.Title>
                                <Card.Text className="price">$3000-$5000</Card.Text>
                                <ul className="pricing-features">
                                    <li>SEO Optimization</li>
                                    <li>Payment Gateway Integration</li>
                                    <li>AI Interaction Services</li>
                                    <li>Social Media Marketing (SMM)</li>
                                    <li>Custom Solutions tailored to your business needs</li>
                                </ul>
                                <button className="pricebtn">Choose Other Services Plan</button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Pricing;
