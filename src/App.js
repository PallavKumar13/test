import React from 'react';
import {
  BrowserRouter as Router, Switch,
  Route
} from "react-router-dom";
import './App.css';
import GoToTop from './GoToTop';
// Importing header and footer
import Header from './MyComponent/Header';
import Footer from './MyComponent/Footer';

// importing main contents
import Main from './MyComponent/Main';
import Downloadlesson from './MyComponent/Downloadlesson';
import Grammarrules from './MyComponent/Grammarrules';
import Onlineexercise from './MyComponent/Onlineexercise';
import Onlinetools from './MyComponent/Onlinetools';
import Videos from './MyComponent/Videos';
import Guides from './MyComponent/Guides';
import Contact from './MyComponent/Contact';

// Importing Quiz componant
import QuizstartTemplate from './QuizComponent/QuizstartTemplate';
import QuestionTemplate from './QuizComponent/QuestionTemplate';

// Importing left and right components
import LeftComp from './MyComponent/LeftComp';
import RightComp from './RightComp';
import MetaTags from 'react-meta-tags';

function App() {
  return (
    <>
      <MetaTags>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="description" content="Welcome to EnglishGrammar.org!
                Here you’ll learn all aspects of written English so you can improve your writing skills in both personal and formal communications
                Whether you’re starting with the basics or want to understand complex topics, we have everything covered."></meta>
        <meta name="title" content="{Lear-English}"></meta>
        <meta name="keywords" content="Adjectives,Adverbs,Business Writing,Commas,Conjunctions,Creative Writing,Difference,Essay Writing,Exercises,Learning,Lessons,Nouns,Prepositions,Pronouns, Proofreading,Punctuation,Quiz,Spelling,Style Guide,Teaching,Terms,Verbs,Words,Writing"></meta>
        <meta name="og:title" content="{Lear-English}"></meta>
        <meta property="og:type" content="article"></meta>
        <meta property="og:description" content="Welcome to EnglishGrammar.org!
                Here you’ll learn all aspects of written English so you can improve your writing skills in both personal and formal communications
                Whether you’re starting with the basics or want to understand complex topics, we have everything covered."></meta>
      </MetaTags>
                <Router>
        <div className="app">
          <Header />
          <div class="grid-container">
            <div class="grid-item left"><LeftComp /></div>
            <div class="grid-item main">
              <Switch>
              <Route exact path="/" >
                <Main />
              </Route>
              <Route exact path="/Downloadlesson">
                <Downloadlesson />
              </Route>
              <Route exact path="/Grammarrules">
                <Grammarrules />
              </Route>
              <Route exact path="/Onlineexercise">
                <Onlineexercise />
              </Route>
              <Route exact path="/Onlinetools">
                <Onlinetools />
              </Route>
              <Route exact path="/Videos">
                <Videos />
              </Route>
              <Route exact path="/Guides">
                <Guides />
              </Route>
              <Route exact path="/Contact">
                <Contact />
              </Route>
              <Route exact path="/QuizstartTemplate">
                <QuizstartTemplate />
              </Route>
              <Route exact path="/QuestionTemplate">
                <QuestionTemplate />
              </Route>
              </Switch>
            </div>
            <div class="grid-item right"><RightComp /></div>
          </div>
          <GoToTop />
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
