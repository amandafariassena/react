import React from 'react';
import Nav from './components/Nav';
import Style from './style.css';
import People from './components/People';
import Title from './components/title';
import car from './components/news_02.jpg'
import Nasa from './components/news_03.jpg'
import teste from './components/news_01.jpg';
import Comments from './components/Comments';
import Login from './login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    return(
        <Router>
          <div>
          <Switch>
            <Route path="/"  exact component={Home} />
            <Route path="/login" component={Login}/>
          </Switch>
        </div>
        </Router>
        
    );

}

const Home = () => (
  <div>
    <Nav />
    <div className="box1">
          <div className="linha">
            <h5 className="politic">POLITICS</h5>
              <img  className="foto1" src={teste} alt="logo" />
              <Title h2 ="Obama Offers Hopeful Vision While Nothing Nation´s Fears"/>
              <People/>
          </div>
          <div className="linha">
              <h5 className="tech">TECH</h5>
              <img  className="foto2" src={car} alt="logo" />
            <Title h4="Didi Kuaidi, The Company Beating Uber In China, Opens Its API To Third Party Apps"/>
            <People/>
            <Comments text="One day after Uber updated its API to add 'contente experiences' for  
                        passengers, the U.S. company's biggest rival - Didi Kuaidi in China - has
                        opened its own platform up by releasing an SDK for developers and third-parties."/>
          </div>
          <div className="linha">
          <h5 className="science">SCIENCE</h5>
              <img  className="foto3" src={Nasa} alt="logo" />
            <Title h4="NASA Formalize Efforts To Protect Earth From Asteroids"/>
            <People/>
            <Comments text=" Last week, NASA announced a new program called the Planetary Defense Coordination Office (PDCO) with
                        will coordinate NASA´s efforts for detecting and tracking near-Earth objects (NEOs) if a large object comes
                        hurting toward our planet..."/>
          </div>
        </div>
        <div className="box2">
          <div className="linha">
          <h5 className="sports">SPORTS</h5>
            <Title h4="For Some Atlanta Hawnks, a Revved-Up Game of Uno is Diversion No.1"/>
            <People/>
            <Comments text="The favored in-Flight pastime of a group of players including Al Horford, Kent Bazemore and Dennis Schoroder 
                            is a schoolchildren´s card game with some added twists "/>
          </div>
          <div className="linha">
          <h5 className="tech">TECH</h5>
            <Title h4="Picking a Windowns 10 Security Package"/>
            <People/>
            <Comments text="Oscar the Grouch has a recycling bin and Big Bird has moved to a tree as the children´s classic debuts on HBO, aiming at a 
                            generation that doesn´t distinguish between TV and mobile screens "/>
          </div>
          <div className="linha">
          <h5 className="science">SCIENCE</h5>
            <Title h4="As U.S Modernizes Nuclear Weapons, 'Smaller' Leaves Some Uneasy"/>
            <People/>
            <Comments text="The Energy Department and the Pentagon have been readying a weapon with a build-it-smaller approach, setting off a 
                            philosophical clash in the world of nuclear arms."/>
          </div>
      </div>
    </div>

);
export default App;


