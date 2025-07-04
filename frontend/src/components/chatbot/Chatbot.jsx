import { useState, useRef } from 'react';
import './Chatbot.css';
import { ListGroup } from 'react-bootstrap';
import chatbot from '../../assets/chatbot.png';
import close from '../../assets/close.png';
import img from '../../assets/infoimg.png'


const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Welcome! How can I help you today?' },
    { sender: 'bot', text: 'You can choose from the predefined questions below.' }
  ]);

  const [selectedSection, setSelectedSection] = useState(null);
  const messageBoxRef = useRef(null);

  const sections = [
    {
      name: "Website Development",
      questions: [
        { question: "What type of website do you develop?", answer: "We develop a range of websites, including e-commerce, blogs, corporate websites, portfolios, and custom web applications." },
        { question: "What is the cost of developing a basic website?", answer: "The cost of a basic website can range from ₹30,000 to ₹80,000 depending on the features, design complexity, and content." },
        { question: "How much does a custom e-commerce website cost?", answer: "E-commerce website development typically ranges between ₹1,00,000 to ₹3,00,000, depending on the number of products, payment gateway integration, and custom functionalities." },
        { question: "How long does it take to build a website?", answer: "On average, a website can take between 4 to 8 weeks to complete, depending on the complexity and feedback loops." },
        { question: "Do you provide maintenance services for websites?", answer: "Yes, we offer monthly and yearly website maintenance packages, starting from ₹10,000 per year." },
        { question: "Do you offer responsive design for mobile and tablet devices?", answer: "Yes, all our websites are developed with a responsive design to ensure optimal viewing on mobile, tablet, and desktop devices." },
        { question: "Can you help with website content creation?", answer: "Absolutely! We offer content writing services to create engaging and SEO-friendly content for your website." },
        { question: "What if I already have a website? Can you redesign it?", answer: "Yes, we can redesign your existing website to improve its look, functionality, and performance, ensuring it meets current standards." },
        { question: "Do you provide domain registration and hosting services?", answer: "Yes, we offer domain registration and reliable hosting services as part of our website development packages." },
        { question: "Will my website be SEO optimized?", answer: "The cost of a basic website can range from ₹30,000 to ₹80,000 depending on the features, design complexity, and content." },
      ]
    },
    {
      name: "Mobile Application Development",
      questions: [
        { question: "Do you develop apps for both iOS and Android?", answer: "Yes, we offer mobile app development for both iOS and Android, as well as cross-platform apps using frameworks like Flutter and React Native." },
        { question: "How much does it cost to build a mobile app?", answer: "The cost to develop a basic mobile app can range from ₹2,00,000 to ₹5,00,000, while more complex apps can range from ₹5,00,000 to ₹15,00,000." },
        { question: "What is the timeline for mobile app development?", answer: "A simple mobile app can be developed in 8 to 12 weeks, while more complex apps with custom features may take up to 16 to 24 weeks." },
        { question: "Do you provide app store submission and maintenance?", answer: "Yes, we provide app store submission services, as well as post-launch maintenance, starting at ₹15,000 per month." },
        { question: "Can you integrate push notifications and in-app purchases?", answer: "Absolutely! We integrate push notifications, in-app purchases, and other advanced features based on your app requirements." },
        { question: "Do you provide user experience (UX) design for apps?", answer: "Yes, we focus on creating intuitive and engaging user experiences by incorporating UX design principles in our mobile app development." },
        { question: "Can you integrate third-party APIs into the app?", answer: "Absolutely! We can integrate various third-party APIs, including social media, payment gateways, and mapping services, based on your app's requirements." },
        { question: "How do you ensure the app is user-friendly?", answer: "We conduct user testing and gather feedback throughout the development process to ensure the app is intuitive and user-friendly." },
        { question: "Will my app be secure?", answer: "Yes, we prioritize security by implementing industry-standard encryption, data protection, and secure coding practices to keep user data safe." },
        { question: "Do you provide post-launch support for apps?", answer: "Yes, we offer comprehensive post-launch support, including updates, bug fixes, and enhancements as needed." },
      ]
    },
    {
      name: "SEO (Search Engine Optimization)",
      questions: [
        { question: "What SEO services do you offer?", answer: "We offer comprehensive SEO services, including on-page optimization, off-page SEO, keyword research, local SEO, content optimization, and more." },
        { question: "How much does SEO cost?", answer: "Our SEO services start at ₹15,000 per month for basic plans. For more advanced SEO strategies, the cost can go up to ₹50,000 per month depending on the scope." },
        { question: "How long does it take to see results from SEO?", answer: "SEO is a long-term investment. On average, you can start seeing significant improvements in 3 to 6 months, depending on the competitiveness of your industry." },
        { question: "Do you offer local SEO services?", answer: "Yes, we provide tailored local SEO strategies to help your business rank higher in location-based searches." },
        { question: "Can you help with website audits and competitor analysis?", answer: "Absolutely, we perform detailed website audits and competitor analysis to create a focused SEO strategy." },
        { question: "Do you provide keyword research services?", answer: "Yes, we conduct thorough keyword research to identify high-value keywords that can drive traffic to your website." },
        { question: "What is on-page SEO, and do you handle it?", answer: "On-page SEO refers to optimizing individual web pages for search engines. We handle on-page SEO, including meta tags, content optimization, and internal linking." },
        { question: "Can you help improve my website's loading speed?", answer: "Yes, we implement various strategies to enhance website loading speed, which is crucial for both user experience and SEO." },
        { question: "Do you provide SEO reporting and analytics?", answer: "Yes, we provide regular SEO reports and analytics to track your website's performance, including traffic, rankings, and user behavior." },
        { question: "What sets your SEO services apart from others?", answer: "Our personalized approach, focus on data-driven strategies, and commitment to staying updated with SEO trends set our services apart." },
      ]
    },
    {
      name: "Payment Gateway Integration",
      questions: [
        { question: "Which payment gateways do you integrate?", answer: "We integrate popular payment gateways such as Razorpay, PayPal, Stripe, CCAvenue, Paytm, and more based on your business needs." },
        { question: "What is the cost of payment gateway integration?", answer: "Payment gateway integration generally costs between ₹15,000 to ₹50,000, depending on the complexity and customization required." },
        { question: "Do you offer recurring payments and subscription-based model integration?", answer: "Yes, we can implement recurring payments and subscription-based billing systems as part of our payment gateway integration services." },
        { question: "Is the payment integration secure?", answer: "Yes, all our integrations follow PCI-DSS compliance and ensure the use of SSL certificates to provide a secure transaction process." },
        { question: "How long does it take to integrate a payment gateway?", answer: "Integration usually takes around 1 to 2 weeks, depending on the specific payment gateway and platform." },
        { question: "Can you integrate multiple payment options?", answer: "Yes, we can integrate multiple payment options to give your customers flexibility in choosing their preferred payment method." },
        { question: "Do you offer support for international transactions?", answer: "Yes, we support international transactions and can help you configure your payment gateway for global payments." },
        { question: "How do you ensure the security of payment transactions?", answer: "We use SSL encryption and comply with PCI DSS standards to ensure all payment transactions are secure." },
        { question: "Can you provide training on how to manage payments through the gateway?", answer: "Yes, we offer training and documentation to help you manage and monitor your payment transactions efficiently." },
        { question: "What do I do if there are issues with payment processing?", answer: "Our support team is available to assist you with any issues related to payment processing, ensuring timely resolutions." }
      ]
    },

    {
      name: "AI Interation",
      questions: [
        { question: "What types of AI solutions do you offer?", answer: "We provide AI solutions such as chatbots, recommendation systems, predictive analytics, machine learning models, and natural language processing (NLP)." },
        { question: "How much does AI integration cost?", answer: "AI integration can range from ₹1,00,000 to ₹5,00,000 depending on the complexity and the use of machine learning or deep learning models." },
        { question: "Can you develop chatbots for customer support?", answer: "Yes, we specialize in developing AI-powered chatbots for websites and mobile apps, including features like 24/7 support and natural language understanding." },
        { question: "How long does AI integration take?", answer: "AI integration timelines vary based on the complexity, but most projects take between 8 to 16 weeks." },
        { question: "Do you provide AI solutions for predictive analysis?", answer: "Yes, we offer predictive analytics solutions using machine learning to help businesses make data-driven decisions." },
        { question: "How do you determine which AI solution is best for my business?", answer: "We assess your business needs, goals, and existing processes to recommend the most suitable AI solutions tailored to your requirements." },
        { question: "Can AI be integrated into existing applications?", answer: "Yes, we can enhance your existing applications by integrating AI functionalities, improving their capabilities and performance." },
        { question: "What kind of data do you need for AI training?", answer: "We need relevant data sets that align with your AI goals, which may include historical data, user interactions, and other contextual information." },
        { question: "Do you provide ongoing support for AI solutions?", answer: "Yes, we offer ongoing support and maintenance for AI solutions to ensure they continue to perform optimally as your business evolves." },
        { question: "What industries do you serve with your AI solutions?", answer: "We serve a variety of industries, including e-commerce, healthcare, finance, education, and more, tailoring AI solutions to meet specific industry needs." }
      ]
    },

    {
      name: "Social Media Marketing (SMM)",
      questions: [
        { question: "What social media platforms do you work with?", answer: "We provide social media marketing services for platforms like Facebook, Instagram, LinkedIn, Twitter, and YouTube." },
        { question: "What is the cost of social media marketing?", answer: "Our basic social media marketing packages start at ₹20,000 per month. For advanced strategies, the cost can go up to ₹80,000 per month depending on the level of engagement and content creation needed." },
        { question: "Do you handle social media ad campaigns?", answer: "Yes, we manage paid ad campaigns on platforms like Facebook Ads, Instagram Ads, LinkedIn Ads, and Google Ads to increase brand visibility and conversions." },
        { question: "How long does it take to see results from social media marketing?", answer: "Depending on your goals, it can take 4 to 12 weeks to see noticeable improvements in engagement, traffic, and conversions." },
        { question: "Do you offer influencer marketing services?", answer: "Yes, we can help connect your brand with social media influencers to create sponsored content and increase visibility." },
        { question: "Do you create content for social media posts?", answer: "Yes, we provide content creation services, including graphics, captions, and videos tailored to your brand's voice." },
        { question: "How do you measure the success of social media campaigns?", answer: "We measure success through metrics like engagement, reach, website traffic, and conversions, providing detailed reports on campaign performance." },
        { question: "Can you help with social media strategy development?", answer: "Yes, we develop customized social media strategies that align with your business goals, target audience, and industry trends." },
        { question: "Do you offer community management services?", answer: "Yes, we provide community management services to engage with your audience, respond to inquiries, and build brand loyalty." },
        { question: "How often do you recommend posting on social media?", answer: "Posting frequency can vary by platform, but generally, we recommend at least 3-5 times per week for optimal engagement." }
      ]
    },
  ];

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const handleQuestionClick = (question) => {
    const userMessage = { sender: 'user', text: question.question };
    setMessages([...messages, userMessage]);

    setTimeout(() => {
      const botMessage = { sender: 'bot', text: question.answer };
      setMessages(prevMessages => [...prevMessages, botMessage]);

      if (messageBoxRef.current) {
        messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
      }
    }, 1000);
  };

  const handleBackClick = () => {
    setSelectedSection(null);
  };

  return (
    <div className="chatbot-container">
      {!isOpen && (
        <button className="chatbot-icon" onClick={toggleChatbot}>
          <img src={chatbot} alt="" className='imgchat' />
        </button>
      )}

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h5>Have a doubt? We are here to help!</h5>
            <button onClick={toggleChatbot} className="close-btn">
              <img src={close} alt="" className='closebtn' />
            </button>
          </div>

          <div className="chatbot-body">
            <div className="message-box" ref={messageBoxRef}>
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.sender}`}>
                  {message.sender === 'bot' && (
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2363/2363324.png"
                      alt="Bot"
                      className="message-icon"
                    />
                  )}
                  {message.text}
                </div>
              ))}
            </div>

            {!selectedSection ? (
              <div className="section-list">
                <h6>Choose questions from below sections!!</h6>
                <div className="sections">
                  {sections.map((section, index) => (
                    <div key={index} className="section-item d-flex">
                      <ListGroup.Item
                        action
                        onClick={() => handleSectionClick(section)}
                      >
                        {section.name}
                      
                      </ListGroup.Item>
                    <img src={img} className='infoimg'  alt="" />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="scrollable-questions">
                <button className="back-button" onClick={handleBackClick}>Back</button>
                <h6>{selectedSection.name} Questions</h6>
                <ListGroup>
                  {selectedSection.questions.map((item, index) => (
                    <ListGroup.Item
                      key={index}
                      action
                      onClick={() => handleQuestionClick(item)}
                    >
                      {item.question}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
