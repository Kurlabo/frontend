import React from 'react';
import FooterBanner from './FooterBanner';
import FooterLeft from './FooterLeft';
import FooterRight from './FooterRight';

const Footer = () => {
  return (
    <>
      <div className="container flex flex-wrap text-r-1.4 pb-24">
        <FooterLeft />
        <FooterRight />
        <FooterBanner />
      </div>
    </>
  );
};

export default Footer;
