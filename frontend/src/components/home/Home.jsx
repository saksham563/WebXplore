import './Home.css';
import { animated, useSpring } from 'react-spring';
import { useState, useEffect } from 'react';
import {HeroSectionData} from '../heroSection/HeroSectionData'

import Homefaq from './Homefaq';
import Homecontact from './Homecontact';
import { Testimonialdata } from './Testimonialdata';
import { KeyFeaturesData } from './KeyFeaturesData';
import { ServicesData } from './ServicesData';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [flip, setFlip] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: false,
    reverse: flip,
    delay: 600,
    onRest: () => setFlip(flip),
  });

  return (
    <>
      <ServicesData />
      <animated.div style={props}>
        <HeroSectionData />
      </animated.div>
      <hr />
      <br />
      <br />
      <div>
        <KeyFeaturesData />
      </div>
<hr />
      <div>
        <Testimonialdata />
      </div>
      <Homecontact />
      <Homefaq />

    </>
  );
};

export default Home;