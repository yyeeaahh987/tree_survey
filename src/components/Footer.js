import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>COMP2003HK Computing Group Project</Link>
            <Link to='/'>University of Plymouth</Link>
            <Link to='/'>HKU School of Professional and Continuing Education (HKU SPACE)</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            {/* <Link to='/'>groupg20211@gmail.com</Link> */}
            <a href="https://accounts.google.com/ServiceLogin/webreauth?service=mail&passive=1209600&osid=1&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&authuser=0&flowName=GlifWebSignIn&flowEntry=ServiceLogin">groupg20211@gmail.com</a>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Encyclopedia References</h2>
            {/* <Link to='/'>HK GOV</Link> */}
            <a href="https://www.greening.gov.hk/en/community-outreach/qrcode-tree-labels/index.html">Greening Gov HK</a>           
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              TREE
              <i class='fa-solid fa-tree' />
            </Link>
          </div>
          <small class='website-rights'>Group-G © 2022</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;