import React from "react";
import { Button } from "../../components/Button";
import { FooterDesktop } from "../../components/FooterDesktop";
import { IconWrapper } from "../../components/IconWrapper";
import { MenuIconAntMenu } from "../../components/MenuIconAntMenu";
import { TypeSecondaryShapeWrapper } from "../../components/TypeSecondaryShapeWrapper";
import { IconsTwitter2 } from "../../icons/IconsTwitter2";
import { Menu } from "../../icons/Menu";
import "./style.css";

export const Home = () => {
  return (
    <div className="desktop-home">
      <div className="div-2">
        <FooterDesktop
          className="footer-desktop-primary"
          copyrightClassName="footer-desktop-instance"
          divClassName="footer-desktop-instance"
          divClassNameOverride="footer-desktop-instance"
          footerContentClassName="footer-desktop-instance"
          icon={<IconsTwitter2 className="icon-instance-node-2" />}
          menuItemClassName="footer-desktop-instance"
          menuItemClassName1="footer-desktop-instance"
          menuItemClassName2="footer-desktop-instance"
          menuItemClassNameOverride="footer-desktop-instance"
        />
        <div className="overlap">
          <div className="inner-web-container">
            <div className="navigations-desktop">
              <img className="logo" alt="Logo" src="/img/logo-4.png" />
              <div className="navbar">
                <div className="item">
                  <div className="text-wrapper-4">Home</div>
                </div>
                <div className="item-2">
                  <div className="text-wrapper-5">About Us</div>
                </div>
                <div className="item-2">
                  <div className="frame-2">
                    <div className="text-wrapper-5">Services</div>
                    <MenuIconAntMenu union="/img/union-17.svg" />
                  </div>
                </div>
                <div className="item-2">
                  <div className="text-wrapper-5">Portfolio</div>
                </div>
                <div className="item-2">
                  <div className="text-wrapper-5">Contact Us</div>
                </div>
              </div>
              <div className="frame-3">
                <Button
                  className="button-instance"
                  labelText="Start Project"
                  labelTextClassName="design-component-instance-node"
                  showIcon={false}
                  stateProp="enabled"
                  style="elevated"
                />
                <div className="icons">
                  <div className="menu-wrapper">
                    <Menu className="icon-instance-node-2" color="#0A7273" />
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-container">
              <div className="hero-text-group">
                <p className="hero">Welcome to AuraCraft Design Studio</p>
                <div className="hero-p">Transform you digital presence</div>
                <div className="hero-button-group">
                  <TypeSecondaryShapeWrapper
                    className="button-2"
                    danger={false}
                    ghost={false}
                    shape="standard"
                    size="medium"
                    stateProp="normal"
                    textClassName="button-3"
                    title="Our Projects"
                    type="primary"
                  />
                  <TypeSecondaryShapeWrapper
                    className="button-4"
                    danger={false}
                    ghost={false}
                    shape="standard"
                    size="medium"
                    stateProp="normal"
                    textClassName="button-5"
                    title="Get a Quote"
                    type="secondary"
                  />
                </div>
              </div>
              <img className="hero-image" alt="Hero image" src="/img/hero-image.png" />
            </div>
            <div className="section">
              <div className="frame-4">
                <div className="overlap-group">
                  <div className="text-container">
                    <div className="about-us">About Us</div>
                    <p className="paragraph">Expert UX/UI Design and Front-End Development</p>
                    <TypeSecondaryShapeWrapper
                      className="button-2"
                      danger={false}
                      ghost={false}
                      shape="standard"
                      size="medium"
                      stateProp="normal"
                      textClassName="button-3"
                      title="Read More"
                      type="primary"
                    />
                  </div>
                </div>
                <div className="text-container-wrapper">
                  <div className="text-container-2">
                    <div className="work-with-us">Work With Us</div>
                    <p className="paragraph">Expert UX/UI Design and Front-End Development</p>
                    <TypeSecondaryShapeWrapper
                      className="button-2"
                      danger={false}
                      ghost={false}
                      shape="standard"
                      size="medium"
                      stateProp="normal"
                      textClassName="button-3"
                      title="Read More"
                      type="primary"
                    />
                  </div>
                </div>
              </div>
              <div className="portfolio-img-wrapper">
                <img className="portfolio-img" alt="Portfolio img" src="/img/portfolio-img.png" />
              </div>
              <div className="frame-5">
                <div className="overlap-2">
                  <img className="mock-up" alt="Mock up" src="/img/mock-up-img01.png" />
                  <div className="mock-up-text">Mock up images</div>
                </div>
                <div className="overlap-3">
                  <img className="mock-up-img" alt="Mock up" src="/img/mock-up-img02.png" />
                  <div className="mock-up-text-2">Mock up images</div>
                </div>
                <div className="overlap-4">
                  <img className="mock-up-img" alt="Mock up" src="/img/mock-up-img03.png" />
                  <div className="mock-up-text-3">Mock up images</div>
                </div>
              </div>
            </div>
            <div className="section-2">
              <div className="text-container-wrapper-2">
                <div className="text-container-3">
                  <p className="header-text">What is User&nbsp;&nbsp;eXperience /User Interface Design?</p>
                  <div className="img-grid">
                    <div className="div-3">
                      <img className="img-2" alt="Ux ui hover" src="/img/ux-ui-hover-img01.png" />
                      <img className="img-2" alt="Ux ui hover" src="/img/ux-ui-hover-img02.png" />
                    </div>
                    <div className="div-3">
                      <img className="img-2" alt="Ux ui hover" src="/img/ux-ui-hover-img03.png" />
                      <img className="img-2" alt="Ux ui hover" src="/img/ux-ui-hover-img04.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-container-wrapper-2">
                <div className="text-container-3">
                  <div className="header-text-2">What is Front-End Development?</div>
                  <div className="img-grid">
                    <div className="div-3">
                      <img className="img-2" alt="Front end hover img" src="/img/front-end-hover-img-01.png" />
                      <img className="img-2" alt="Front end hover img" src="/img/front-end-hover-img-02.png" />
                    </div>
                    <div className="div-3">
                      <img className="img-2" alt="Front end hover img" src="/img/front-end-hover-img-04.png" />
                      <img className="img-2" alt="Front end hover img" src="/img/front-end-hover-img-03.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-3">
              <div className="h">Our Process</div>
              <div className="inside-container">
                <div className="step">
                  <img className="step-img" alt="Step" src="/img/step-img01.png" />
                  <div className="div-4">
                    <div className="text-wrapper-6">Step 1</div>
                  </div>
                </div>
                <div className="step">
                  <img className="step-img" alt="Step" src="/img/step-img02.png" />
                  <div className="div-4">
                    <div className="text-wrapper-6">Step 2</div>
                  </div>
                </div>
                <div className="step">
                  <img className="step-img" alt="Step" src="/img/step-img03.png" />
                  <div className="div-4">
                    <div className="text-wrapper-6">Step 3</div>
                  </div>
                </div>
                <div className="step">
                  <img className="step-img" alt="Step" src="/img/step-img04.png" />
                  <div className="div-4">
                    <div className="text-wrapper-6">Step 4</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="banner-container-wrapper">
              <div className="banner-container">
                <div className="banner-container-2">
                  <div className="text-box">
                    <div className="h-2">AURACRAFT STUDIO</div>
                    <div className="p">design your digital footprint</div>
                    <div className="state-layer-wrapper">
                      <div className="label-text-wrapper">
                        <p className="label-text-3">
                          <span className="span">Try </span>
                          <span className="span">AuraCraft-Design Studio </span>
                          <span className="span">Now</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="customer-container">
                    <img className="logo-img" alt="Logo img" src="/img/logo-img.png" />
                    <p className="text-wrapper-7">
                      Lorem ipsum dolor sit amet consectetur. Arcu ac pellentesque justo nulla aliquet euismod quis orci
                      purus.
                    </p>
                    <div className="customer-user-box">
                      <img className="img-box" alt="Img box" src="/img/img-box.svg" />
                      <div className="div-4">
                        <div className="text-wrapper-6">User name</div>
                        <div className="job-p">Job title</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-us-grid-wrapper">
              <div className="contact-us-grid">
                <div className="consultation">
                  <div className="header-text-3">
                    <img className="img-3" alt="Simple line icons" src="/img/simple-line-icons-earphones-alt.png" />
                    <div className="consultation-h">30 min Consultation</div>
                  </div>
                  <p className="consultaion-p">
                    Dive into what your getting out, find the perfect time for us to solve your business needs
                  </p>
                  <Button
                    className="consulation-button"
                    labelText="Book Now"
                    labelTextClassName="design-component-instance-node"
                    showIcon={false}
                    stateProp="enabled"
                    style="elevated"
                  />
                </div>
                <div className="get-in-touch">
                  <div className="get-in-touch-with">
                    <img className="img-3" alt="Hugeicons mail" src="/img/hugeicons-mail-02.png" />
                    <div className="get-in-touch-h">Get in touch</div>
                    <div className="input-container">
                      <div className="input-group">
                        <div className="input">
                          <input className="input-2" placeholder="Name &amp;amp; Surname" type="text" />
                        </div>
                        <div className="input">
                          <input className="input-2" placeholder="Email" type="email" />
                        </div>
                      </div>
                      <div className="input-3">
                        <div className="input-4">Company</div>
                      </div>
                      <div className="input-3">
                        <input className="input-2" placeholder="Massage" type="number" />
                      </div>
                    </div>
                    <div className="input-5">
                      <div className="button-group">
                        <Button
                          className="button-instance"
                          labelText="Contact Us"
                          labelTextClassName="design-component-instance-node"
                          showIcon={false}
                          stateProp="enabled"
                          style="elevated"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-overlay">
            <div className="overlay-buttons">
              <div className="frame-6">
                <img className="frame-7" alt="Frame" src="/img/frame-29135.svg" />
                <div className="frame-8">
                  <div className="text-wrapper-8">Discover UX/UI Services</div>
                </div>
                <div className="button-6">
                  <div className="text-wrapper-9">A</div>
                  <IconWrapper
                    className="icon-wrapper-instance"
                    img="/img/union-20.svg"
                    size="fourteen-px"
                    union
                    unionClassName="icon-wrapper-2"
                  />
                </div>
              </div>
              <div className="frame-6">
                <img className="frame-7" alt="Frame" src="/img/frame-29135-1.svg" />
                <div className="frame-8">
                  <div className="text-wrapper-8">Explore Front-End Solutions</div>
                </div>
                <div className="button-6">
                  <div className="text-wrapper-9">A</div>
                  <IconWrapper
                    className="icon-wrapper-instance"
                    img="/img/union-20.svg"
                    size="fourteen-px"
                    union
                    unionClassName="icon-wrapper-2"
                  />
                </div>
              </div>
              <div className="frame-wrapper">
                <div className="frame-9">
                  <div className="frame-8">
                    <div className="text-wrapper-10">Explore More</div>
                  </div>
                  <div className="button-6">
                    <div className="text-wrapper-9">A</div>
                    <IconWrapper
                      className="icon-wrapper-instance"
                      img="/img/union-20.svg"
                      size="fourteen-px"
                      union
                      unionClassName="icon-wrapper-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-text">
            <div className="portfolio">Portfolio</div>
            <p className="text-wrapper-7">Expert UX/UI Design and Front-End Development</p>
            <TypeSecondaryShapeWrapper
              className="button-2"
              danger={false}
              ghost={false}
              shape="standard"
              size="medium"
              stateProp="normal"
              textClassName="button-3"
              title="View More"
              type="primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
