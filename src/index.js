import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return (
    <img
      className="avatar"
      src="pilt-removebg-preview.png"
      alt="Heikki Karilaid"
    />
  );
}
function Intro() {
  return (
    <div>
      <h1>Heikki Karilaid</h1>
      <p>Learning to code.</p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="❤" />
      <Skill skill="Css" emoji="😢" />
      <Skill skill="HTML" emoji="😒" />
      <Skill skill="Javascript" emoji="😁" />
      <Skill skill="Python" emoji="💖" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill">
      <span>{props.skill} </span>
      <span>{props.emoji} </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
