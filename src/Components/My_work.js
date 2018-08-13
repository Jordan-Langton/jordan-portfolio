import React from 'react';
import '../CSS/My_work.css';

const My_work = ({ btnClick }) => {
  return (
    <div className="My_work">
      <div className="item">
        <div className="image">
          <img src={require('../CSS/images/projects/image2.png')} alt=""/>
          <div className="container">
            <h3>The Web Space</h3>
            <div className="btn">
              <button id="btn2">View Info</button>
            </div>
          </div>
        </div>
        <div id="show2" className="content">
          <i id="two" className="fas fa-times"></i>
          <div className="title">The Web Space</div>
            <div className="gauge">
              <small>Coded in - <b>HTML & CSS & JS</b></small>
              <br/>
              <small>Skill Level 20 - 100%</small>
              <div className="level"><div id="web"></div></div>
              <div className="level"></div>
            </div>
            <p>"The Web Space" was my very first website I had ever done for someone. The client I did it for knew I needed practice and he needed a site. And so he asked me to create him a site with cirtain things in mind. Lets be honest, it was not a good looking site, but we all have to start somewhere right? To dowload project files <a href="http://download1647.mediafire.com/0cu80rp7w4ig/b3f3gmco5iradgk/Website.rar">Click here</a></p>
        </div>
      </div>

      <div className="item">
        <div className="image">
          <img src={require('../CSS/images/projects/image3.png')} alt=""/>
          <div className="container">
            <h3>Energy Drive Portal</h3>
            <div className="btn">
              <button id="btn3">View Info</button>
            </div>
          </div>
        </div>
        <div id="show3" className="content">
          <i id="three" className="fas fa-times"></i>
          <div className="title">Energy Drive Portal</div>
            <div className="gauge">
              <small>Coded in - <b>HTML & CSS</b></small>
              <br/>
              <small>Skill Level 40 - 100%</small>
              <div className="level"><div id="form"></div></div>
              <div className="level"></div>
            </div>
            <p>Energy Drive Portal was given to me by the company "Energy Drive" of course. They needed a page that they could access all the links everyone used. And so I created a good looking Portal page with all the links they needed and made sure it was optimized. At this piont in my development career I was starting to get a better eye for design. To dowload project files <a href="http://download1319.mediafire.com/rflptppxcjng/ir2drfrbidim80d/Energy+Drive+Portal+Page.rar">Click here</a></p>
        </div>
      </div>

      <div className="item">
        <div className="image">
          <img src={require('../CSS/images/projects/image1.png')} alt=""/>
          <div className="container">
            <h3>Blogs Away</h3>
            <div className="btn">
              <button id="btn1">View Info</button>
            </div>
          </div>
        </div>
        <div id="show1" className="content">
          <i id="one" className="fas fa-times"></i>
          <div  className="title">Blogs Away</div>
            <div className="gauge">
              <small>Coded in - <b>PHP</b></small>
              <br/>
              <small>Skill Level 70 - 100%</small>
              <div className="level"><div id="cms"></div></div>
            </div>
            <p>This was my first major PHP project. It is a fully working blog with authentication and privliges. If you are an admin, you have access to the dashboard where all the backend functionality happens (Full CRUD). You can create, update, read and delete posts. There is a view for all the posts and you can choose which ones show on the front. To dowload project files <a href="http://download2128.mediafire.com/5spcn85992mg/4yyfn7c8hzbgex8/CMS-Project-%28Blogging-System%29.rar">Click here</a></p>
        </div>
      </div>

      <div className="item">
        <div className="image">
          <img src={require('../CSS/images/projects/image5.png')} alt=""/>
          <div className="container">
            <h3>Dev Meetups</h3>
            <div className="btn">
              <button id="btn5">View Info</button>
            </div>
          </div>
        </div>
        <div id="show5" className="content">
          <i id="five" className="fas fa-times"></i>
          <div  className="title">Dev Meetups</div>
            <div className="gauge">
              <small>Coded in - <b>Vue JS</b></small>
              <br/>
              <small>Skill Level 85 - 100%</small>
              <div className="level"><div id="meetup"></div></div>
            </div>
            <p>This was my first in-depth Vue JS project. There is full authentication, a page to view all the "meetups" you had created. You can also view each meetup idividualy and join that meetup. You could also edit the meetup.(you can only edit the ones you made). To dowload project files <a href="">Click here</a></p>
        </div>
      </div>

      <div className="item">
        <div className="image">
          <img src={require('../CSS/images/projects/image6.png')} alt=""/>
          <div className="container">
            <h3>O-Authentication</h3>
            <div className="btn">
              <button id="btn6">View Info</button>
            </div>
          </div>
        </div>
        <div id="show6" className="content">
          <i id="six" className="fas fa-times"></i>
          <div  className="title">O-Authentication</div>
            <div className="gauge">
              <small>Coded in - <b>Node JS</b></small>
              <br/>
              <small>Skill Level 65 - 100%</small>
              <div className="level"><div id="oauth"></div></div>
            </div>
            <p>This is a simple Oauthentication app which allows you to login using your google account to see your profile. Your profile also pulls in infomation about your google account, like your name, your profile picture and more. You can also logout once you are done. To dowload project files <a href="">Click here</a></p>
        </div>
      </div>

      <div className="item">
        <div className="image">
          <img src={require('../CSS/images/projects/image7.png')} alt=""/>
          <div className="container">
            <h3>Robo Friends</h3>
            <div className="btn">
              <button id="btn7">View Info</button>
            </div>
          </div>
        </div>
        <div id="show7" className="content">
          <i id="seven" className="fas fa-times"></i>
          <div  className="title">Robo Friends</div>
            <div className="gauge">
              <small>Coded in - <b>React JS</b></small>
              <br/>
              <small>Skill Level 50 - 100%</small>
              <div className="level"><div id="robo"></div></div>
            </div>
            <p>This was my very first React JS Application. It is very simple, but gets some core concepts accross. It dynamically builds the robo cards and calls an API for the robot faces and names to ill the cards. Then you can search for specific names to filter through them. To dowload project files <a href="">Click here</a></p>
        </div>
      </div>

      <div className="item">
        <div className="image">
          <img src={require('../CSS/images/projects/image4.png')} alt=""/>
          <div className="container">
            <h3>Firstview Lunch</h3>
            <div className="btn">
              <button id="btn4">View Info</button>
            </div>
          </div>
        </div>
        <div id="show4" className="content">
          <i id="four" className="fas fa-times"></i>
          <div className="title">Firstview Lunch</div>
            <div className="gauge">
              <small>Coded in - <b>Laravel & Vue JS</b></small>
              <br/>
              <small>Skill Level 80 - 100%</small>
              <div className="level"><div id="lunch"></div></div>
              <div className="level"></div>
            </div>
            <p>This project was given to me in the hopes to make getting lunch for the company easier. And so I created a wesite that you can place your order, but on within a specific time frame, and then once you are ready, you can send an email with all the orders ready for you to place an order. <a href="http://download1319.mediafire.com/rflptppxcjng/ir2drfrbidim80d/Energy+Drive+Portal+Page.rar">Click here</a></p>
        </div>
      </div>

      <div className="item">
        <div className="image">
          <img src={require('../CSS/images/projects/image8.png')} alt=""/>
          <div className="container">
            <h3>To DO App</h3>
            <div className="btn">
              <button id="btn8">View Info</button>
            </div>
          </div>
        </div>
        <div id="show8" className="content">
          <i id="eight" className="fas fa-times"></i>
          <div  className="title">To DO App</div>
            <div className="gauge">
              <small>Coded in - <b>Vue JS</b></small>
              <br/>
              <small>Skill Level 30 - 100%</small>
              <div className="level"><div id="todo"></div></div>
            </div>
            <p>This is a very simple To Do application in where you type a skill or task into the field, press enter and it gets added under as a skill/task item. Once you complete a task or or want to remove a skill, you just click the delete button to remove the item. This app does not have a database because it was just for concept. To dowload project files <a href="">Click here</a></p>
        </div>
      </div>

      <div className="item">
        <div className="image">
          <img src={require('../CSS/images/projects/image9.png')} alt=""/>
          <div className="container">
            <h3>Danielle's Zoo</h3>
            <div className="btn">
              <button id="btn9">View Info</button>
            </div>
          </div>
        </div>
        <div id="show9" className="content">
          <i id="nine" className="fas fa-times"></i>
          <div  className="title">Danielle's Zoo</div>
            <div className="gauge">
              <small>Coded in - <b>Vue JS</b></small>
              <br/>
              <small>Skill Level 85 - 100%</small>
              <div className="level"><div id="blog"></div></div>
            </div>
            <p>Danielle's Zoo is a blogging site to do with Ball Pythons and Leapard Geckos. As admin you are able to create, update and delete your posts you made, from the dashboard. The dashboard can only be accessed by the admin. If you aren't admin, you are greeted with the home page with all the posts. You are able to view each post as a model. To dowload project files <a href="">Click here</a></p>
        </div>
      </div>
    </div>
  );
}

export default My_work;
