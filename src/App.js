import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Emoji from './Emoji';

import './App.css';
import resume from "./file/resume.pdf";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Fade cascade duration={2000}>
          <div className="header uk-align-center">
            <h1 className="uk-text-bold uk-text-center">Hi, I'm Sally.</h1>
            <p className="intro">I’m a software engineer and aspiring data scientist who's passionate about building things, breaking things, and telling stories with data.</p>
            <div className="buttons">
              <a class="button uk-button uk-button-default" href={resume}> R&eacute;sum&eacute; </a>
              <a class="button uk-button uk-button-default" href="mailto:sguo0121@gmail.com">Contact</a>
            </div>
            <div className="social-links">
              <a href="https://dev.to/sallysiqiguo/" uk-icon="icon: fa-dev; ratio: 2" className="link hvr-grow"></a>
              <a href="https://www.linkedin.com/in/sally-siqi-guo/" uk-icon="icon: linkedin; ratio: 2" className="link hvr-grow"></a>
              <a href="https://github.com/sallysiqiguo/" uk-icon="icon: github; ratio: 2" className="link hvr-grow"></a>
              <a href="https://medium.com/@sguo0121/" uk-icon="icon: fa-medium; ratio: 2" className="link hvr-grow"></a>
            </div>
          </div>
        </Fade>
        <Fade cascade duration={2000} delay={1500}>
          <div>
            <div className="interest section">
              <h2 className="uk-text-bold">I'm interested in...</h2>
              <ul className="uk-text-large">
                <li>Full-stack and backend development <Emoji symbol="👩🏻‍💻" label="woman technologist"/></li>
                <li>Statistics and Machine Learning (also my major in college!) <Emoji symbol="📊" label="bar chart"/></li>
                <li>Natural Language Processing <Emoji symbol="🗣" label="speaking"/></li>
                <li>Application Security <Emoji symbol="🛡" label="shield"/></li>
                <li>The Office <Emoji symbol="🏢" label="office building"/></li>
                <li>Reggaeton music <Emoji symbol="🎶" label="music"/></li>
                <li>Pittsburgh Penguins <Emoji symbol="🐧" label="penguin"/><Emoji symbol="🏒" label="hockey"/></li>
              </ul>
            </div>
          {/* </Fade>
          <Fade cascade duration={2000} delay={1000}> */}
            <div className="section">
              <h2 className="uk-text-bold">I've worked on...</h2>
              <div className="projects">
                <div class="uk-card uk-card-default uk-card-body project">
                  <h3 class="uk-card-title">Mummy Maze</h3>
                  <p>I recreated Popcap Studio's Mummy Maze game using HTML, CSS, JavaScript, and Google Firebase. Implemented a logic-based AI for the non-player character ("the mummy") using the Finite State Machine algorithm. This project is deployed via Netlify. </p>
                  <p>Check it out <a href="https://mummy-maze-coda3.netlify.com/">here</a>.</p>
                </div>
                <div class="uk-card uk-card-default uk-card-body project">
                  <h3 class="uk-card-title">What's in your stomach?</h3>
                  <p>This is a meal tracking application built with Node Express and postgreSQL database. For this project, I collaborated with a partner, managed version control with Git, and deployed the application via Heroku. </p>
                  <p>Check it out <a href="https://whats-in-your-stomach.herokuapp.com">here</a>.</p>
                </div>
                <div class="uk-card uk-card-default uk-card-body project">
                  <h3 class="uk-card-title">CODAmegle</h3>
                  <p>Inspired by Slack, we created a messaging application with a React frontend and a NodeJS backend. Users can send a group message that's visible to all users, or a direct message to another user. New messages will display in real time via web sockets. This project is deployed with a Heroku backend (API) and AWS S3 for the frontend. </p>
                  <p>Check it out <a href="http://codamegle.s3-website-us-east-1.amazonaws.com">here</a>.</p>
                </div>
                <div class="uk-card uk-card-default uk-card-body project">
                  <h3 class="uk-card-title">Habbit Rabbit</h3>
                  <p>New Years resolutions? We gotchu. Track your habits everyday with Habbit Rabbit! This application is built with a React frontend and a NodeJS backend. When the clock hits midnight, a cron script will generate a new record for each habit for the new day. The project is deployed using AWS EC2, Docker, and S3. </p>
                  <p>Only available internally at Capital One.</p>
                </div>
                <div class="uk-card uk-card-default uk-card-body project">
                  <h3 class="uk-card-title">Natural Language Processing</h3>
                  {/* <p class="uk-text-meta uk-margin-remove-top">Wikipedia question/answer system</p> */}
                  <p>As a part of Natural Language Processing (11-411) at CMU, my team of 3 built a system that takes in a wikipedia article on a subject and can either answer or ask questions about that subject. The program is written in Python and utilizes the nltk parser to parse the sentence structure.</p>
                  <p>Demo link coming soon.</p>
                </div>
                <div class="uk-card uk-card-default uk-card-body project">
                  <h3 class="uk-card-title">NHL Twitter Bot</h3>
                  <p>A twitter bot that tweet like an NHL PR team. It selects 5 random NHL teams and studies their twitter feed in a Markov Chain model, and generates a tweet that contain similar information (that usually doesn't make sense). The bot is deployed via Heroku. </p>
                  <p>Check out the bot <a href="https://twitter.com/EveryNHLTeamBot">here</a>.</p>
                </div>
                <div class="uk-card uk-card-default uk-card-body project">
                  <h3 class="uk-card-title">Pittsburgh Pawngrabbers</h3>
                  <p>Freelance contributing developer for the Pittsburgh Pawngrabbers website.</p>
                  <p>Check it out <a href="http://www.pghpawngrabbers.com">here</a>.</p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
        <footer>
          Copyright &copy; {(new Date()).getFullYear()}, Siqi "Sally" Guo. 
        </footer>
      </div>
    );
  }
}

export default App;
