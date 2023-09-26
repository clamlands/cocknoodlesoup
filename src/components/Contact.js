import { useEffect, useState } from "react";
import cock from "../media/images/clean-base-650.webp";
import heatImg from "../media/images/heat-650.webp";

export default function Contact() {
  const [heat, setHeat] = useState("cold-cock");
  const [heatText, setHeatText] = useState("hot-cock");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function changeCock() {
    if (heat === "hot-cock") {
      setHeat("cold-cock");
      setHeatText("hot-cock");
    } else {
      setHeat("hot-cock");
      setHeatText("cold-cock");
    }
  }

  return (
    <main>
      <h1 className="big-heading">Contact</h1>
      <div>
        Contact Matt via email at <b>cocknoodlesoup@gmail.com</b>
      </div>

      <div className="big-cock-container">
        <div
          className="cock-container"
          onClick={() => {
            changeCock();
          }}
        >
          <div className={`cock-text  ${heatText}`}>Click to Cook Cock!</div>
          <img src={cock} width="650" height="681" alt="" className="cock" />
          <img src={heatImg} width="650" height="681" alt="" className={heat} />
        </div>
      </div>
    </main>
  );
}
