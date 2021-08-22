import React from 'react';
import styles from './WhatWeDo.module.scss';

export default function WhatWeDo() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.title}>
          <h3>Don't know where to start?</h3>
          <h1>We're here to help!</h1>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <img src="/images/img-placeholder-hero.svg" alt="" className={`${styles.img} img-fluid`} />
          </div>
          <div className="col-12 col-lg-5 offset-lg-1">
            <article>
              <h2>Branding</h2>
              <h4>Your Brand goes beyond the visual!</h4>
              <p>
                It's not enough to have only a basic logo to represent your company. Your brand needs to communicate your company values, it is your customer's first contact with you. We study and elaborate every detail so that your company has a strong, cohesive, and eye-catching brand. <strong>Here’s what we offer</strong>:
              </p>
              <div>
                <h5>Logo Design</h5>
                <small>Symbol and Type Design Variations</small>
              </div>
              <div>
                <h5>Visual Identity</h5>
                <small>Color Scheme, Typography, Patterns, and More</small>
              </div>
              <div>
                <h5>Brandbook</h5>
                <small>Instructions for Brand Applications</small>
              </div>
              <div>
                <h5>Brand Collaterals</h5>
                <small>Stationery, Packaging, Signage, and Any Other Materials You Might Need</small>
              </div>
              <a href="#">
                See More
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 0L4.11875 0.88125L7.60625 4.375H0V5.625H7.60625L4.11875 9.11875L5 10L10 5L5 0Z" fill="#555555" /></svg>
              </a>
            </article>

            <article>
              <h2>Web Design</h2>
              <h4>What is not registered is not remembered!</h4>
              <p>
                Where people can learn more about your company's history, values, or even about your products and services. What big business you know doesn't have a website? You need one too, and we can help you with that. <strong>Here’s what we offer</strong>:
              </p>
              <div>
                <h5>Website</h5>
                <small>Responsive Design for Desktop and Mobile Devices</small>
              </div>
              <div>
                <h5>Blogs</h5>
                <small>Made for Content Creation with our Management System Integration</small>
              </div>
              <div>
                <h5>Landing Pages</h5>
                <small>Focus on Marketing or Advertising Campaign</small>
              </div>
              <div>
                <h5>E-commerce</h5>
                <small>Web Store for Selling Products and Services</small>
              </div>
              <a href="#">
                See More
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 0L4.11875 0.88125L7.60625 4.375H0V5.625H7.60625L4.11875 9.11875L5 10L10 5L5 0Z" fill="#555555" /></svg>
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}