import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './pricing.css'

const Pricing = (props) => {
  return (
    <div className="pricing-container">
      <Helmet>
        <title>Pricing - Upalertz</title>
        <meta
          name="description"
          content="Boost Your Upwork Job-Winning Potential with Real-time Alerts and ChatGPT's AI Cover Letter Writing!\n\nThe Upalertz App, with its real-time job alerts, is a must-have tool for freelancers who want to stay ahead of the competition on Upwork. With ChatGPT's AI Cover Letter Writing feature integrated into the app, users can take their job-winning potential to the next level. The app sends instant notifications whenever a new job posting that matches the user's skills and preferences is posted on Upwork. The app's algorithm ensures that users receive alerts only for the most relevant projects, saving them time and effort in manually searching for job postings.\n\nUsers can further customize their notification settings to receive alerts tailored to their specific needs. The app's sleek and intuitive interface makes it easy for freelancers to manage their job alerts on the go, while ChatGPT's AI Cover Letter Writing feature helps users craft compelling cover letters that increase their chances of winning jobs. With UpAlert and ChatGPT, freelancers can boost their job-winning potential and land more projects on Upwork."
        />
        <meta property="og:title" content="Pricing - Upalertz" />
        <meta
          property="og:description"
          content="Boost Your Upwork Job-Winning Potential with Real-time Alerts and ChatGPT's AI Cover Letter Writing!\n\nThe Upalertz App, with its real-time job alerts, is a must-have tool for freelancers who want to stay ahead of the competition on Upwork. With ChatGPT's AI Cover Letter Writing feature integrated into the app, users can take their job-winning potential to the next level. The app sends instant notifications whenever a new job posting that matches the user's skills and preferences is posted on Upwork. The app's algorithm ensures that users receive alerts only for the most relevant projects, saving them time and effort in manually searching for job postings.\n\nUsers can further customize their notification settings to receive alerts tailored to their specific needs. The app's sleek and intuitive interface makes it easy for freelancers to manage their job alerts on the go, while ChatGPT's AI Cover Letter Writing feature helps users craft compelling cover letters that increase their chances of winning jobs. With UpAlert and ChatGPT, freelancers can boost their job-winning potential and land more projects on Upwork."
        />
      </Helmet>
      <div className="pricing-container1">
        <div className="pricing-container2">
          <Link to="/" className="pricing-navlink">
            Home
          </Link>
          <img
            alt="image"
            src="/playground_assets/logo-200h.png"
            className="pricing-image"
          />
        </div>
      </div>
      <div className="pricing-pricing">
        <div className="pricing-container3">
          <div className="pricing-container4">
            <h1 className="pricing-text">Start Using Upalertz Today</h1>
            <span className="pricing-text01">
              <span>Start a 3 Days FreeTrial now, pick a plan later</span>
              <br></br>
              <span>No Credit card required, No Obligations, No risk. </span>
            </span>
          </div>
          <div className="pricing-container5">
            <div className="pricing-container6">
              <span className="pricing-text05">Basic</span>
              <span className="pricing-text06">$9.99/mo</span>
              <span className="pricing-text07">
                <span className="pricing-text08">Unlimited </span>
                <span>Push Notifications</span>
              </span>
              <span className="pricing-text10">
                <span className="pricing-text11">Notificatons </span>
                <span>
                  are sent out within minutes of Job apperance on Upwork
                </span>
              </span>
              <span className="pricing-text13">Includes Support</span>
            </div>
            <div className="pricing-container7">
              <span className="pricing-text14">Premium</span>
              <span className="pricing-text15">$19.99/mo</span>
              <span className="pricing-text16">
                <span className="pricing-text17">Unlimited </span>
                <span>Push Notifications</span>
              </span>
              <span className="pricing-text19">
                <span className="pricing-text20">
                  Notifications
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  are sent out within minutes pf Job apperance on Upwork
                </span>
              </span>
              <span className="pricing-text22">
                <span className="pricing-text23">AI </span>
                <span>Generated Cover Letters</span>
              </span>
              <span className="pricing-text25">Includes Support</span>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing-container8"></div>
      <footer id="footer" className="pricing-footer">
        <span className="pricing-text26">
          © 2023 Upalertz, All Rights Reserved.
        </span>
        <div className="pricing-icon-group">
          <a
            href="https://twitter.com/upalerter"
            target="_blank"
            rel="noreferrer noopener"
            className="pricing-link"
          >
            <svg viewBox="0 0 950.8571428571428 1024" className="pricing-icon">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/upalerter"
            target="_blank"
            rel="noreferrer noopener"
            className="pricing-link1"
          >
            <svg viewBox="0 0 877.7142857142857 1024" className="pricing-icon2">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </a>
          <svg viewBox="0 0 602.2582857142856 1024" className="pricing-icon4">
            <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
          </svg>
        </div>
      </footer>
    </div>
  )
}

export default Pricing
