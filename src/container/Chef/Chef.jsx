import React from 'react';

import { SubHeading } from '../../components';

import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word"/>
      <h1 className='headtext__cormorant'>What we Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="auote" />
          <p className="p__opensans">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, quaerat.
          </p>
        </div>
        <p className="p__opensans">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia commodi sequi omnis officiis, quam eos. Cum, perspiciatis id quos reiciendis adipisci accusantium, ipsa quasi fugiat consequatur voluptas culpa modi aliquid nesciunt quae, repudiandae laboriosam eius commodi atque ad illo eligendi!</p>
      </div>
        <div className="app__chef-sign">
          <p>Lorem</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="sign" />
        </div>
    </div>
  </div>
);

export default Chef;
