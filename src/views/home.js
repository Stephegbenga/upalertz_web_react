import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Upalertz</title>
        <meta
          name="description"
          content="Boost Your Upwork Job-Winning Potential with Real-time Alerts and ChatGPT's AI Cover Letter Writing!\n\nThe Upalertz App, with its real-time job alerts, is a must-have tool for freelancers who want to stay ahead of the competition on Upwork. With ChatGPT's AI Cover Letter Writing feature integrated into the app, users can take their job-winning potential to the next level. The app sends instant notifications whenever a new job posting that matches the user's skills and preferences is posted on Upwork. The app's algorithm ensures that users receive alerts only for the most relevant projects, saving them time and effort in manually searching for job postings.\n\nUsers can further customize their notification settings to receive alerts tailored to their specific needs. The app's sleek and intuitive interface makes it easy for freelancers to manage their job alerts on the go, while ChatGPT's AI Cover Letter Writing feature helps users craft compelling cover letters that increase their chances of winning jobs. With UpAlert and ChatGPT, freelancers can boost their job-winning potential and land more projects on Upwork."
        />
        <meta property="og:title" content="Upalertz" />
        <meta
          property="og:description"
          content="Boost Your Upwork Job-Winning Potential with Real-time Alerts and ChatGPT's AI Cover Letter Writing!\n\nThe Upalertz App, with its real-time job alerts, is a must-have tool for freelancers who want to stay ahead of the competition on Upwork. With ChatGPT's AI Cover Letter Writing feature integrated into the app, users can take their job-winning potential to the next level. The app sends instant notifications whenever a new job posting that matches the user's skills and preferences is posted on Upwork. The app's algorithm ensures that users receive alerts only for the most relevant projects, saving them time and effort in manually searching for job postings.\n\nUsers can further customize their notification settings to receive alerts tailored to their specific needs. The app's sleek and intuitive interface makes it easy for freelancers to manage their job alerts on the go, while ChatGPT's AI Cover Letter Writing feature helps users craft compelling cover letters that increase their chances of winning jobs. With UpAlert and ChatGPT, freelancers can boost their job-winning potential and land more projects on Upwork."
        />
       <link rel="icon" type="image/png" href="/playground_assets/logo-200h.png" sizes="16x16" />

      </Helmet>
      <div className="home-container01">
        <div className="home-container02">
          <a href="#footer" className="home-link">
            Contact
          </a>
          <img
            alt="image"
            src="/playground_assets/logo-200h.png"
            className="home-image"
          />
          <div className="home-container03">
            <Link to="/pricing" className="home-navlink">
              Pricing
            </Link>
          </div>
        </div>
      </div>
      <div className="home-banner">
        <h5 className="home-text">
          Connect your Upwork and never miss out on a Job Posting
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </h5>
        <span className="home-text01">
          <span>
            The Upalertz App is a must-have tool for freelancers looking to stay
            ahead of the competition. This app sends instant notifications to
            users whenever a new job that matches their skills and preferences
            is posted on Upwork. The app uses an algorithm to scan the
            user&apos;s feed and sends alerts only when a job matching the
            user&apos;s skills and preferences is posted.
          </span>
          <br></br>
          <br></br>
          <span>
            {' '}
            This saves freelancers time and effort in manually searching for new
            job postings and enables them to apply to the most relevant projects
            quickly. The app also offers a customizable notification settings so
            users can choose the type of job alerts they receive, ensuring that
            the alerts are tailored to their specific needs. The app is designed
            to be user-friendly and offers a sleek and intuitive interface,
            making it easy for freelancers to manage their job alerts on the go.
          </span>
        </span>
        <div className="home-btn-group">
          <a
            href="https://play.google.com/store/apps/"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link1"
          >
            <img
              alt="image"
              src="/playground_assets/playstore-200h-200h.png"
              className="home-image1"
            />
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link2"
          >
            <img
              alt="image"
              src="/playground_assets/appstore-200h-200h.png"
              className="home-image2"
            />
          </a>
        </div>
      </div>
      <div className="home-blog">
        <div className="home-container04">
          <div className="home-container05">
            <div className="home-blog-post-card">
              <div className="home-container06">
                <span className="home-text06">Digital Marketer</span>
                <span className="home-text07">
                  As a digital marketer, I am constantly searching for new and
                  innovative ways to reach my target audience. The Upalertz App
                  has been a lifesaver for me, as it sends me instant
                  notifications of new projects that match my skills and
                  preferences. The app saves me time and effort in searching for
                  the right job opportunities and I have been able to secure
                  several projects thanks to the app. I highly recommend this
                  app to any freelancer looking to grow their business on
                  Upwork.
                </span>
                <div className="home-container07">
                  <div className="home-profile">
                    <img
                      alt="profile"
                      src="/playground_assets/sarah-200w.jpg"
                      image_src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
                      className="home-image3"
                    />
                    <span className="home-text08">Sarah Johnson</span>
                  </div>
                  <span className="home-text09">5 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-container08">
          <div className="home-blog-post-card1">
            <div className="home-container09">
              <span className="home-text10">FRONTEND DESIGNER</span>
              <span className="home-text11">
                As a frontend designer, I was struggling to keep up with the
                demands of the market and was spending hours searching for new
                job postings. But the Upalertz App has changed everything for
                me. The app sends me real-time notifications of new projects
                that match my skills and I can apply to them instantly. This app
                has been a game-changer for me and I am now able to focus on my
                core skills, instead of spending time searching for new job
                opportunities. I highly recommend this app to any designer
                looking to expand their business on Upwork.
              </span>
              <div className="home-container10">
                <div className="home-profile1">
                  <img
                    alt="profile"
                    src="/playground_assets/david-200h.jpg"
                    image_src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
                    className="home-image4"
                  />
                  <span className="home-text12"> David Lee</span>
                </div>
                <span className="home-text13">5 min read</span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-container11">
          <div className="home-blog-post-card2">
            <div className="home-container12">
              <span className="home-text14">BACKEND ENGINEER</span>
              <span className="home-text15">
                As a programmer, I am always looking for ways to stay ahead of
                the competition. The Upalertz App has been a huge help in this
                regard, as it sends me instant notifications of new projects
                that match my skills and preferences. The app is easy to use and
                the notification settings can be customized to suit my needs.
                This has been a valuable tool for me and I have been able to
                secure several projects thanks to this app. I highly recommend
                this app to any programmer looking to expand their business on
                Upwork
              </span>
              <div className="home-container13">
                <div className="home-profile2">
                  <img
                    alt="profile"
                    src="/playground_assets/rodriguez-200h.jpg"
                    image_src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
                    className="home-image5"
                  />
                  <span className="home-text16">Rodriguez</span>
                </div>
                <span className="home-text17">5 min read</span>
              </div>
            </div>
          </div>
        </div>
        <h1 className="home-text18">Testimonials</h1>
      </div>
      <footer id="footer" className="home-footer">
        <span className="home-text19">
          © 2023 Upalertz , All Rights Reserved.
        </span>
        <div className="home-icon-group">
          <a
            href="https://twitter.com/upalerter"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link3"
          >
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/upalerter"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link4"
          >
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon2">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </a>
          <svg viewBox="0 0 602.2582857142856 1024" className="home-icon4">
            <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
          </svg>
        </div>
      </footer>
    </div>
  )
}

export default Home
