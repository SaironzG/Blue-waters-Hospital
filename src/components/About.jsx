import group2 from "../assets/Group 2.png";
import hospital from "../assets/logo.jpg";
import profile from "../assets/profile.png";
import "./About.scss"

function About() {
  return (
    <div className="AboutWrapper">
      <div className="pic">
        <img src={group2} alt="About Us" />
      </div>
      <div className="abt-text">
        <h3>ABOUT US</h3>
        <h1>
          Short Story About Blue <br />
          Waters Private Hospital
        </h1>
        <p className="bold-p">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          rem omnis praesentium ab suscipit deleniti culpa inventore neque
          facere cum.
        </p>
        <p className="light-p">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat,
          molestias! Eum maxime ipsa laudantium quaerat nam nihil possimus,
          molestiae beatae?
        </p>
        <div className="pic-text">
          <div className="pic2">
            <img src={hospital} alt="Hospital" />
            <div className="text1">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente.
              </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At.</p>
            </div>
          </div>
        </div>
        <div className="contact">
          <div className="profile">
            <img src={profile} alt="CEO" />
            <div className="info">
              <p>0772777777</p>
              <h4>ceo founder</h4>
            </div>
          </div>
          <h5>Mr . John Doe</h5>
        </div>
      </div>
    </div>
  );
}

export default About;
