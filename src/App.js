import React, {useEffect} from 'react';
import logo from './image.png';
import './App.css';
import Particles from './particles'
function App() {
  const handleLogo = () => {
    window.scrollTo(0,0);
  }

  return (
    <div className="App" style={{position: 'relative', zIndex:1}}>
      <a href="https://breathing.ai" style={{textDecoration:'none'}}>
      <nav className="navbar">
        <img src={logo} alt="logo" className="logo" onClick={handleLogo}/>
        <div><h1 >breathing.AI</h1></div>
      </nav>
      </a>
      <section className="section">
        <div className="text-panel">
          <h1 id="breath">
            BREATHE BETTER.
          </h1>
          <p>Breathing.ai is the only application
            available that changes color/brightness/contrast/fonts
            based on your vital signs in real-time, offering you
            personalized settings that help you reach your goals!
            Try now with a 14-day free trial!</p>
            <button>
              <p>Add to Chrome - it's free</p>
            </button>
            <div className="details">
            <p>No credit card required</p>
            <p>Cancel anytime</p>
            </div>
        </div>
        <div className="image-panel">
          <div className="placeholder" id="part-test"></div>
        </div>
      </section>
      <section className="section">
        <div className="image-panel">
          <div className="placeholder">
          </div>
        </div>
        <div className="text-panel">
          <h1 className="longh1">
            COLOR CALIBRATED TO MATCH YOUR GOAL.
          </h1>
          <ul>
            <li>Have a deadline? Wanna be more productive? Or maybe just wanna be less stressed during the time on your screens?</li>
            <li>Numerous studies have shown that your feelings about colors are deeply personal and rooted in your own experience or culture. Red might stress some people out, but might give you positive energy.</li>
            <li>Breathing.ai customizes its look and feel based on your individual preferences and needs.</li>
          </ul>
        </div>
      </section>
      <section className="section">
        <div className="text-panel">
          <h1 className="longh1">
            TAILORED BREAK SCHEDULE
          </h1>
          <h3>Stress hormones:</h3>
          <ul>
            <li>Increase the risk of heart attack and stroke,</li>
            <li>increases blood sugar levels, suppresses the immune system,</li>
            <li>increases heart rate and cholesterol levels, and</li>
            <li>contricts our blood vessels which in turn disrupts our immune system, energy levels, and sleep regulation</li>
          </ul>
          <p>These are all things we need to manage productivity and a healthy lifestyle.</p>
          <p>{`Breathing.ai tailors a break schedule incorporating your favourite
             breathing, stretching, or meditation exercises to improve your cognitive
             function, which helps improve thought processes and reduce stress and
             anxiety. Let’s us manage and make sure you maintain your health while
             being productive.`}
          </p>
        </div>
        <div className="image-panel">
          <div className="placeholder">
          </div>
        </div>
      </section>
      <section className="section">
        <div className="image-panel">
          <div className="long-placeholder"></div>
        </div>
        <div className="text-panel">
          <h1 className="longh1">
            SET YOUR GOALS, AND LET US DO THE REST.
          </h1>
          <div className='goal'>
            <p className="title">Increase Productivity:</p>
            <p className="content">Rushing for a deadline? Doing a take-home exam?
              Trying to finish early so you can spend time with
              your family? Set "productivity" as your goal and
              we'll show you the best colors for energy and focus.
            </p>
          </div>
          <div className='goal'>
            <p className="title">Increase Concentration:</p>
            <p className="content">Preparing for a job interview?
              Doing an important work assignment? Certain colors
              have been proved to enhance attention and memory. Set
              "concentration" as your goal and let us do the rest!
            </p>
          </div>
          <div className='goal'>
            <p className="title">Increase Visibility:</p>
            <p className="content"> Calling all creative workers!
              Trying to get that artwork pixel-perfect? Looking
              for the right exact color? Set "visibility" as your
               goal and we'll show you the brightness and contrast
               necessary for you to see crystal clear and make good
               visual decisions.
            </p>
          </div>
          <div className='goal'>
            <p className="title">Reduce Eye Strain:</p>
            <p className="content">Using your screens for a long time
              gives you dry eyes? It is a lot to look at a screen for
              hours! Set "reduce eye strain" as your goal and we'll
              offer the colors and brightness that are most soothing
              for your eyes and suggest multiple eye-blinking breaks!
            </p>
          </div>
          <div className='goal'>
            <p className="title">Reduce Stress/Anxiety:</p>
            <p className="content">Stressed about this assignment?
              Feeling tense? Feeling anxious? Set "reduce stress/ anxiety"
               as your goal and we'll  show you the most calming colors
               that gives you the lowest heart and breath rate.
            </p>
          </div>
          <div className='goal'>
            <p className="title">Enhance Wellbeing:</p>
            <p className="content">Don't believe you
              can get healthier working more on screens?
              Breathing.ai gives you reminders to take a
              break whenever your heart and breath rate are
              at a high level, suggesting stretching exercises,
              meditation, and breathing to help you enhance your
              well-being!
            </p>
          </div>
        </div>

      </section>
      <section className="section faq">
        <div className="text-panel"><h1>FAQ</h1></div>

        <div></div>
      </section>
      <Particles />
    </div>
  );
}

export default App;
