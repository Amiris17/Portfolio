import "./App.css";
import "./index.js";
import Typewriter from "typewriter-effect";
import { FaGithub, FaHtml5, FaPython, FaJs,FaCss3} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function App() {
  
  return (
    <>
      <h1> Home</h1>
      
      <body>
        <nav class="navbar">
          <div class="navbar-links">
            <ul>
              <li>
                {" "}
                <a
                  href="https://www.linkedin.com/in/amiris-olivo-408290209/"
                  target="_blank"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="https://github.com/Amiris17?tab=repositories"
                  target="_blank"
                >
                  {" "}
                  <FaGithub />{" "}
                </a>
              </li>
              <li>
                {" "}
                <a href="#About"> About</a>
              </li>
              <li>
                {" "}
                <a href="#Project"> Projects</a>
              </li>
              <li>
                {" "}
                <a href="#SS"> Skillset</a>
              </li>
            </ul>
          </div>
          <div className="App"></div>
        </nav>
        <br/>
        <br/>
        <div class="paragraph">
          <Typewriter
            onInit={(typewriter)=>{
              typewriter.typeString("Hello I am Amiris Olivo").pauseFor(200).start();
            }}
            
            />
            <br/>
           <Typewriter
            onInit={(typewriter)=>{
              typewriter.typeString("I am a front end developer").pauseFor(200).start().deleteAll().typeString("Enjoy Browsing!").start();
            }}
            
            />
          
        </div>

        <h2 id="About"> About Me</h2>
        <div class="paragraph_2">
          I am a computer science graduate from Hunter College with nothing but
          love and passion for this. I have enjoyed computers from a very young age and hope to improve my understanding with all knowledge I accumulate along the way. I enjoy working in a team environment and will always cater to those in need. I strive to be the best version of myself and hope to impact others in a positive way!
        </div>

        <h3 id="Project"> Projects</h3>
        <div class="Project1_Text">
        <p> 
          All my projects are posted on github however, my two favorite projects at the moment are my <a  target="_blank" href ="https://mirsdictionary.netlify.app/" >Dictionary </a>  and  <a target="_blank" href="https://rngpassword.netlify.app/">Random password generator </a>. I am currently focusing on working on creating a platformer with C++. Most of my websites will be continued to refurbished/polished and I hope you will enjoy them!  </p>

        </div>
        

        
        <div class="paragraph_3">
          <h6 id= "SS"> Programming Skillset</h6>
         
        </div>
       
        <div class="Skillset">
        <ul>
        <li><a target="_blank"href ="https://en.wikipedia.org/wiki/CSS" ><svg xmlns="http://www.w3.org/2000/svg" width="0.71em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 361"><path fill="#264DE4" d="M127.844 360.088L23.662 331.166L.445 70.766h255.11l-23.241 260.36l-104.47 28.962Z"/><path fill="#2965F1" d="m212.417 314.547l19.86-222.49H128V337.95l84.417-23.403Z"/><path fill="#EBEBEB" d="m53.669 188.636l2.862 31.937H128v-31.937H53.669Zm-5.752-64.641l2.903 31.937H128v-31.937H47.917ZM128 271.58l-.14.037l-35.568-9.604l-2.274-25.471h-32.06l4.474 50.146l65.421 18.16l.147-.04V271.58Z"/><path d="M60.484 0h38.68v16.176H76.66v16.176h22.506v16.175H60.484V0Zm46.417 0h38.681v14.066h-22.505v2.813h22.505v32.352h-38.68V34.46h22.505v-2.813H106.9V0Zm46.418 0H192v14.066h-22.505v2.813H192v32.352h-38.681V34.46h22.505v-2.813H153.32V0Z"/><path fill="#FFF" d="m202.127 188.636l5.765-64.641H127.89v31.937h45.002l-2.906 32.704H127.89v31.937h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08l.779-8.576Z"/></svg></a></li>
       
        <li> <a target="_blank" href="https://en.wikipedia.org/wiki/HTML5" > <svg xmlns="http://www.w3.org/2000/svg" width="0.71em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 361"><path fill="#E44D26" d="m255.555 70.766l-23.241 260.36l-104.47 28.962l-104.182-28.922L.445 70.766h255.11Z"/><path fill="#F16529" d="m128 337.95l84.417-23.403l19.86-222.49H128V337.95Z"/><path fill="#EBEBEB" d="M82.82 155.932H128v-31.937H47.917l.764 8.568l7.85 88.01H128v-31.937H85.739l-2.919-32.704Zm7.198 80.61h-32.06l4.474 50.146l65.421 18.16l.147-.04V271.58l-.14.037l-35.568-9.604l-2.274-25.471Z"/><path d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0Zm68.65 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103h-.001ZM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88V0Zm62.74 0h16.235v32.508h22.824v16.05h-39.06V0Z"/><path fill="#FFF" d="M127.89 220.573h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08l.779-8.576H127.89v31.937Zm0-64.719v.078h77.143l.64-7.178l1.456-16.191l.763-8.568H127.89v31.86Z"/></svg></a></li>
        <li> <a target="_blank" href="https://en.wikipedia.org/wiki/JavaScript"> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="#f5de19" d="M2 2h28v28H2z"/><path d="M20.809 23.875a2.866 2.866 0 0 0 2.6 1.6c1.09 0 1.787-.545 1.787-1.3c0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964c0-1.973 1.5-3.476 3.853-3.476a3.889 3.889 0 0 1 3.742 2.107L25 18.128A1.789 1.789 0 0 0 23.311 17a1.145 1.145 0 0 0-1.259 1.128c0 .789.489 1.109 1.618 1.6l.658.282c2.236.959 3.5 1.936 3.5 4.133c0 2.369-1.861 3.667-4.36 3.667a5.055 5.055 0 0 1-4.795-2.691Zm-9.295.228c.413.733.789 1.353 1.693 1.353c.864 0 1.41-.338 1.41-1.653v-8.947h2.631v8.982c0 2.724-1.6 3.964-3.929 3.964a4.085 4.085 0 0 1-3.947-2.4Z"/></svg></a></li>
        <li> <a target="_blank" href="https://cplusplus.com/"> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="#659ad2" d="M29 10.232a2.387 2.387 0 0 0-.318-1.244a2.451 2.451 0 0 0-.936-.879q-5.194-2.868-10.393-5.733a2.642 2.642 0 0 0-2.763.024c-1.378.779-8.275 4.565-10.331 5.706A2.287 2.287 0 0 0 3 10.231V21.77a2.4 2.4 0 0 0 .3 1.22a2.434 2.434 0 0 0 .954.9c2.056 1.141 8.954 4.927 10.332 5.706a2.642 2.642 0 0 0 2.763.026q5.19-2.871 10.386-5.733a2.444 2.444 0 0 0 .955-.9a2.4 2.4 0 0 0 .3-1.22V10.232"/><path fill="#00599c" d="M28.549 23.171a2.126 2.126 0 0 0 .147-.182a2.4 2.4 0 0 0 .3-1.22V10.232a2.387 2.387 0 0 0-.318-1.244c-.036-.059-.089-.105-.13-.16L16 16Z"/><path fill="#004482" d="M28.549 23.171L16 16L3.451 23.171a2.435 2.435 0 0 0 .809.72c2.056 1.141 8.954 4.927 10.332 5.706a2.642 2.642 0 0 0 2.763.026q5.19-2.871 10.386-5.733a2.43 2.43 0 0 0 .808-.719Z"/><path fill="#fff" d="M19.6 18.02a4.121 4.121 0 1 1-.027-4.087l3.615-2.073A8.309 8.309 0 0 0 7.7 16a8.216 8.216 0 0 0 1.1 4.117a8.319 8.319 0 0 0 14.411-.017L19.6 18.02"/><path fill="#fff" d="M24.076 15.538h-.926v-.921h-.925v.921h-.926v.923h.926v.92h.925v-.92h.926v-.923zm3.473 0h-.926v-.921h-.926v.921h-.926v.923h.926v.92h.926v-.92h.926v-.923z"/></svg></a></li>
        <li> <a target="_blank" href="https://www.python.org/"> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><defs><linearGradient id="svgIDa" x1="-133.268" x2="-133.198" y1="-202.91" y2="-202.84" gradientTransform="matrix(189.38 0 0 189.81 25243.061 38519.17)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#387eb8"/><stop offset="1" stop-color="#366994"/></linearGradient><linearGradient id="svgIDb" x1="-133.575" x2="-133.495" y1="-203.203" y2="-203.133" gradientTransform="matrix(189.38 0 0 189.81 25309.061 38583.42)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffe052"/><stop offset="1" stop-color="#ffc331"/></linearGradient></defs><path fill="url(#svgIDa)" d="M15.885 2.1c-7.1 0-6.651 3.07-6.651 3.07v3.19h6.752v1H6.545S2 8.8 2 16.005s4.013 6.912 4.013 6.912H8.33v-3.361s-.13-4.013 3.9-4.013h6.762s3.772.06 3.772-3.652V5.8s.572-3.712-6.842-3.712Zm-3.732 2.137a1.214 1.214 0 1 1-1.183 1.244v-.02a1.214 1.214 0 0 1 1.214-1.214Z"/><path fill="url(#svgIDb)" d="M16.085 29.91c7.1 0 6.651-3.08 6.651-3.08v-3.18h-6.751v-1h9.47S30 23.158 30 15.995s-4.013-6.912-4.013-6.912H23.64V12.4s.13 4.013-3.9 4.013h-6.765S9.2 16.356 9.2 20.068V26.2s-.572 3.712 6.842 3.712h.04Zm3.732-2.147A1.214 1.214 0 1 1 21 26.519v.03a1.214 1.214 0 0 1-1.214 1.214h.03Z"/></svg></a></li>
        </ul>
       

        </div>
       
      </body>
    </>
  );
}

export default App;
