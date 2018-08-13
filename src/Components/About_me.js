import React from 'react';
import '../CSS/About_me.css';

const About_me = () => {
  return (
    <div className="About_me">
      <div className="info">

        <section className="personal">
          <h3>Personal Statement</h3>
          <p>I thoroughly enjoy coding whether it be in PHP, HTML, CSS or even Javascript. I am always wanting to improve on what I know, to better myself as a developer. When I start developing something, I always end up sitting for long periods of time until the task at hand is completed. I also enjoy design, whether it be websites, flyers, adverts or even icons.</p>
          <p>I love working with other people, because I can learn from them and improve myself - am able to grasp new concepts quickly.</p>
        </section>
        <div className="image">
          <div className="icon">
            <img src={require('../CSS/images/Icons-jordan2.png')} alt="test"/>
          </div>
        </div>
      </div>
      <div className="sections">
        <h3>My Work experience</h3>

        <section className="experience">
          <div className="job">
            <div className="image"><img src={require('../CSS/images/icons/white-border/job-5.png')} alt=""/></div>
            <div className="text">
              <h4>Building Blochs</h4>
              <small>Year - 2015</small>
              <p>I was given the task to help build websites (Wordpress Templates) and arrange content</p>
                <div className="contact">
                  <h5>Contact Info</h5>
                  <ul>
                    <li>Name: Andrew Bloch</li>
                    <li>Cell: 079 016 8244</li>
                    <li>Email: andrew@buildingblochs.com</li>
                  </ul>
                </div>
            </div>
          </div>
          <div className="job rev">
            <div className="text right">
              <h4>Bodyism US</h4>
              <small>Year - 2015</small>
              <p>I was asked to do all their admin work eg: re-ordering products to the site and creating a sizing table for all their clothing products (Wordpress Templates)</p>
                <div className="contact">
                  <h5>Contact Info</h5>
                  <ul>
                    <li>Name: Paul Walker</li>
                    <li>Cell: 073 071 9717</li>
                    <li>Email: paul@bodyism.com</li>
                  </ul>
                </div>
            </div>
            <div className="image"><img src={require('../CSS/images/icons/white-border/job-1.png')} alt=""/></div>
          </div>
          <div className="job">
            <div className="image"><img src={require('../CSS/images/icons/white-border/job-2.png')} alt=""/></div>
            <div className="text">
              <h4>Energy Drive</h4>
              <small>Year - 2016</small>
              <p>I designed and developed an ordering web app that allows you to select certain parameters for the order and once the form is filled, it sends an email to the person who needs to order those specific things.</p>
              <p>I also designed and developed a smart and sleek type of portal web page. This links to all the different websites that Energy Drive uses.</p>
                <div className="contact">
                  <h5>Contact Info</h5>
                  <ul>
                    <li>Name: Craig Hildebrandt</li>
                    <li>Cell: null</li>
                    <li>Email: craig.hildebrandt@energydrive.co.za</li>
                  </ul>
                </div>
            </div>
          </div>
          <div className="job rev">
            <div className="text right">
              <h4>The Lobby</h4>
              <small>Year - 2017</small>
              <p>I mannaged the shop when the owner wasn’t available and did all the admin work involved.</p>
              <p>Customer Services</p>
                <div className="contact">
                  <h5>Contact Info</h5>
                  <ul>
                    <li>Name: Spencer</li>
                    <li>Cell: 076 246 9129</li>
                    <li>Email: klinejspencer@gmail.com</li>
                  </ul>
                </div>
            </div>
            <div className="image"><img src={require('../CSS/images/icons/white-border/job-3.png')} alt=""/></div>
          </div>
          <div className="job">
            <div className="image"><img src={require('../CSS/images/icons/white-border/job-4.png')} alt=""/></div>
            <div className="text">
              <h4>W3Designs</h4>
              <small>Year - 2017/2018</small>
              <p>This was my first proper development job and where I learnt alot of what I know today.</p>
              <h5>My duties included:</h5>
              <ul>
                <li>Junior PHP web development for all websites handed to me.</li>
                <li>Designing the websites using HTML & CSS and also Photoshop.</li>
                <li>Website Content loading.</li>
                <li>Also the occasional website updates</li>
                <li>A bit of admin work</li>
              </ul>
              <p></p>
                <div className="contact">
                  <h5>Contact Info</h5>
                  <ul>
                    <li>Name: Jacques Baars</li>
                    <li>Cell: 072 500 2400</li>
                    <li>Email: jacques@w3designs.co.za</li>
                  </ul>
                </div>
            </div>
          </div>
        </section>

        <section className="education">
          <h3>Education and Professional Training</h3>
          <h4>Course I’ve Complete/Completing</h4>
          <div className="courses">

            <div id="one" className="course">
              <div className="image">
                <img src={require('../CSS/images/icons/course-icons/icons1.png')} alt=""/>
              </div>
              <div className="text">
                <h4><a href="https://www.udemy.com/php-for-complete-beginners-includes-msql-object-oriented/learn/v4/">PHP for Beginners - Become a PHP Master</a></h4>
                <p>this is some text</p>
              </div>
            </div>

            <div id="two" className="course">
              <div className="image">
                <img src={require('../CSS/images/icons/course-icons/icons2.png')} alt=""/>
              </div>
              <div className="text">
                <h4><a href="https://www.udemy.com/web-developer-course/learn/v4/">Ultimate Web Designer & Developer Course</a></h4>
                <p>this is some text</p>
              </div>
            </div>

            <div id="three" className="course">
              <div className="image">
                <img src={require('../CSS/images/icons/course-icons/icons3.png')} alt=""/>
              </div>
              <div className="text">
                <h4><a href="https://www.udemy.com/the-complete-web-developer-in-2018/learn/v4/">The Complete Web Developer in 2018</a></h4>
                <p>this is some text</p>
              </div>
            </div>

          </div>
          <div className="school">
            <h4>Matriculation Certificate (2016) GED</h4>
            <h5>Subjects</h5>
            <div className="subjects">
              <div id="math" className="subject">Mathematics</div>
              <div id="eng" className="subject">English Language</div>
              <div id="science" className="subject">Science</div>
              <div id="history" className="subject">History</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About_me;
