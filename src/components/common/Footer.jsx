import React from 'react';
import FooterBanner from '../footer/FooterBanner';
import FooterLeft from '../footer/FooterLeft';
import FooterRight from '../footer/FooterRight';

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
