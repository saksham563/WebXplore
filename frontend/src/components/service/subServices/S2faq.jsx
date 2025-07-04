import React from 'react'
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";

const S2faq = () => {
    return (
        <div>
            <MDBContainer className="mt-5" style={{ maxWidth: '1000px' }}>
                <MDBAccordion alwaysOpen initialActive={0}>
                    <MDBAccordionItem collapseId={1} headerTitle="What platforms do you develop mobile apps for?">
                        We develop mobile apps for both <strong>IOS</strong> and <strong>Android</strong> platforms. We use native languages like Swift for iOS and Kotlin for Android, as well as cross-platform solutions like Flutter and React Native.
                    </MDBAccordionItem>

                    <MDBAccordionItem collapseId={2} headerTitle="How long does it take to develop a mobile app?">
                        The development time depends on the app’s complexity, features, and design. A simple app might take 2-4 months, while more complex apps could take 6 months or more. We'll provide a detailed project timeline during the initial planning phase.
                    </MDBAccordionItem>

                    <MDBAccordionItem collapseId={3} headerTitle="How much does it cost to develop a mobile app?">
                        App development costs vary depending on factors like platform choice (iOS, Android, or both), number of features, design complexity, and integrations. We provide a detailed cost estimate after understanding your project scope.
                    </MDBAccordionItem>

                    <MDBAccordionItem collapseId={4} headerTitle="Do you offer post-launch app maintenance?">
                        <strong>Yes</strong>, we provide ongoing support and maintenance for your mobile app, including bug fixes, updates, performance optimization, and feature enhancements as required.
                    </MDBAccordionItem>

                    <MDBAccordionItem collapseId={5} headerTitle="Will my mobile app work on both iOS and Android?">
                        If you're looking for cross-platform development, we can build your app using Flutter or React Native to ensure it runs smoothly on both iOS and Android devices. We also offer native app development if needed.
                    </MDBAccordionItem>

                    <MDBAccordionItem collapseId={6} headerTitle="Can you help with app store submissions?">
                        <strong>Yes</strong>, we assist with both the App Store (iOS) and Google Play (Android) submissions, ensuring your app meets all guidelines and is optimized for visibility.
                    </MDBAccordionItem>

                    <MDBAccordionItem collapseId={7} headerTitle="What features can be included in a mobile app?">
                        We can integrate a wide range of features such as: <br />
                        •	User Authentication (social login, email, etc.) <br />
                        •	Push Notifications<br />
                        •	In-app purchases<br />
                        •	GPS tracking and mapping<br />
                        •	Payment Gateway Integration<br />
                        •	Custom APIs<br />
                        •	Live chat or customer support features

                    </MDBAccordionItem>

                    <MDBAccordionItem collapseId={8} headerTitle="Do you provide UI/UX design services for apps?">
                        <strong>Yes</strong>, we offer end-to-end UI/UX design services to create an intuitive, user-friendly, and engaging interface. We ensure the design aligns with your brand and user expectations.
                    </MDBAccordionItem>

                    <MDBAccordionItem collapseId={9} headerTitle="What technology stacks do you use for mobile app development?">
                        We use native programming languages like Swift for iOS and Kotlin for Android. For cross-platform development, we work with Flutter and React Native. Our backend technologies include Node.js, Python, and PHP to ensure seamless app performance.
                    </MDBAccordionItem>

                    <MDBAccordionItem collapseId={10} headerTitle="Can you integrate third-party services into my app?">
                        <strong>Yes</strong>, we can integrate third-party services, such as payment gateways (Stripe, PayPal), analytics tools (Google Analytics, Firebase), social media APIs, or custom services to meet your app's specific needs.
                    </MDBAccordionItem>
                </MDBAccordion>
            </MDBContainer>
        </div>
    )
}

export default S2faq