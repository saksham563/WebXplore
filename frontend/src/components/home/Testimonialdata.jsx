import { Testimonials } from "./Testimonials";

export function Testimonialdata() {
    const testimonials = [
        {
            quote:
                `Working with WebXplore Studio has been an absolute pleasure.Their team took the time to understand our business goals and delivered a website that exceeded our expectations. The design is clean, responsive, and user-friendly. We’ve seen a significant increase in traffic and engagement since the launch`,
              name: "Client 1",
            designation: "CEO, Resolva Insights Pvt Ltd",
            src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                `WebXplore Studio helped us create an e-commerce site that truly represents our brand. Their team was professional and responsive, making the entire experience smooth and enjoyable. Our sales have increased significantly since launching the new site!`,
            name: "Client 2",
            designation: "Owner of Fashion Boutique Brand",
            src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                `We approached WebXplore Studio for an SEO strategy to improve our online visibility. They conducted thorough research and implemented effective tactics that delivered immediate results. Our website's ranking has improved, and we're attracting more customers than ever!`,
            name: "Client 3",
            designation: "Founder of Food and Beverages",
            src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                `We needed a dynamic website for our travel agency, and WebXplore Studio delivered. They brought our ideas to life with stunning visuals and an intuitive layout. Our clients appreciate the ease of booking their adventures online, and we’ve seen a significant uptick in inquiries.`,
            name: "Client 4",
            designation: "Managing Director of Travel Agency",
            src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }
    ];

  return (
    <>
      <Testimonials testimonials={testimonials} />
    </>
      );
}
