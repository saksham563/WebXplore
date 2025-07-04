import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import Contactus from './components/contactus/Contactus.jsx'
import Service1 from './components/service/subServices/Service1.jsx'
import Service2 from './components/service/subServices/Service2.jsx'
import Service3 from './components/service/subServices/Service3.jsx'
import Blogpage from './components/blogpage/Blogpage.jsx'
import Subblogpage from './components/blogpage/Subblogpage.jsx'
import Faq from './components/faq/Faq.jsx'
import AboutUs from './components/aboutus/AboutUs.jsx'
import Case from './components/caseStudy/Case.jsx'
import Pricing from './components/pricingSection/Pricing.jsx'
import TermsConditions from '../../frontend/src/components/tnc/TermsConditions.jsx'
import CookiesPolicy from '../../frontend/src/components/cookiePolicy/CookiesPolicy.jsx'
import PrivacyPolicy from '../../frontend/src/components/privacyPolicy/PrivacyPolicy.jsx'
import ProjectDetails from '../../frontend/src/components/portfolio/ProjectDetails.jsx'
import {ServiceDetailsData} from '../../frontend/src/components/service/subServices/ServiceDetailsData.jsx'
import Sitemap from '../../frontend/src/components/sitemap/Sitemap.jsx'
import { ServiceData } from './components/service/ServiceData.jsx'
import { PortfolioData } from './components/portfolio/PortfolioData.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'service',
        element: <ServiceData />
      }
      ,
      {
        path:'home',
        element:<Home/>
      },
      {
        path:'portfolio',
        element:<PortfolioData/>
      },
      {
        path:'',
        element:<Home/>
      },
      {
        path:"casestudy",
        element:<Case/>
      },
      {
        path:"pricing",
        element:<Pricing/>
      }
      ,
      {
        path:'contact',
        element:<Contactus/>
      }
      ,
      {
        path:'/service/webdevelopment',
        element:<Service1/>
      },
      {
        path:'/service/mobiledevelopment',
        element:<Service2/>
      },
      {
        path:'/service/otherservices',
        element:<Service3/>
      },
      {
        path:'/service/webdevelopment/contact',
        element:<Contactus/>
      },
      {
        path:'/service/mobiledevelopment/contact',
        element:<Contactus/>
      }
      ,
      {
        path:'/service/otherservices/contact',
        element:<Contactus/>
      },
      {
        path:'/portfolio/contact',
        element:<Contactus/>
      },
      {
        path:'/webdevelopment',
        element:<Service1/>
      },
      {
        path:'/mobiledevelopment',
        element:<Service2/>
      },
      {
        path:'/service/:servicekey',
        element:<ServiceDetailsData/>
      },
      {
        path:'/aboutus/service',
        element:<ServiceData/>
      },
      {
        path:"/faq/contact",
        element:<Contactus/>
      },
      {
        path:"/aboutus/service/webdevelopment",
        element:<Service1/>
      }
      ,
      {
        path:"/aboutus/service/mobiledevelopment",
        element:<Service2/>
      }
      ,
      {
        path:"/aboutus/service/otherservices",
        element:<Service3/>
      }
      ,
      {
        path:"/webdevelopment/contact",
        element:<Contactus/>
      },
      {
        path:"/mobiledevelopment/contact",
        element:<Contactus/>
      },
      {
        path: "home/blogpage",
        element: <Blogpage/>,
      },
      {
        path: "blogpage",
        element: <Blogpage/>,
      },
      {
        path: "blog/:title",
        element:<Subblogpage/>
      },
      {
        path:"/portfolio/:title",
        element:<ProjectDetails/>
      },
      {
        path:"service/:servicekey",
        element:<ServiceDetailsData/>
      },
      {
        path:"/faq",
        element:<Faq/>
      },
      {
        path:"aboutus",
        element:<AboutUs/>
      },
      {
        path:"/privacypolicy",
        element: <PrivacyPolicy/>
      },
      {
        path:"/termsandcondtion",
        element:<TermsConditions/>
      },
      {
        path:"/privacypolicy",
        element:<PrivacyPolicy/>
      },
      {
        path:"/cookiespolicy",
        element:<CookiesPolicy/>
      },
      {
        path:"/sitemap",
        element:<Sitemap/>
      }
    ]
  }


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < RouterProvider router={router} />
  </StrictMode>,
)
