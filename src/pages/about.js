import ibm from "../images/ibm.png"
import bgc from "../images/download.png"
import cfc from "../images/cfc.png"
import "../styles/about.css"

const About = () => {
  return (
    <div className="about-page page-container">
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col-sm-4 bx--col-md-6 bx--col-lg-8">
            <h1 style={{ marginBottom: "5vh"}}>About</h1>
            <p>
              SmartCycle was created during the 2022 Hackathon hosted by IBM x
              Call for Code x Black Girls Code.
            </p>


            <div className="images">
              <img src={bgc} height="60vh" alt="bgc"/>
              <div className="img-x">x</div>
              <img src={ibm} height="30vh" alt="ibm"/>
              <div className="img-x">x</div>
              <img src={cfc} height="60vh" alt="cfc"/>
            </div>

            <h2 style={{marginTop: "6vh"}}>Our Prompt</h2>
            <p>This year's hackathon theme is sustainability.</p>
            <p>
              Our mission was to reduce volume of and demand for materials that
              create the biggest waste footprint, and encourage reuse/recycle
              opportunities.
            </p>
            <p>
              Recycling is the process of taking materials ready to be thrown
              away and converting (changing) them into reusable materials. This
              is important to reducing trash in the world's landfills, which
              pollute Earth's soil, water, and air. Recycling also helps
              preserve natural resources, or materials that occur naturally and
              are used to make products - like when we use trees to make paper.
              When we don't recycle and reuse, we risk depleting (using up) our
              natural resources.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export { About };
