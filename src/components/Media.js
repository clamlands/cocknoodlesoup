import { useEffect } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import img1 from "../media/images/cos1-850.webp";
import img2 from "../media/images/cos3-850.webp";
import img3 from "../media/images/head3-850.webp";

export default function Media() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <h1>Media</h1>
      <h2>Stand-up</h2>
      <div className="clips">
        <LiteYouTubeEmbed id="plmeFCylBZs" title="Matt Jordan Stand-up" />
        <LiteYouTubeEmbed id="TH1vigasvc0" title="Matt Jordan Stand-up" />
        <LiteYouTubeEmbed id="Yw2hu5CWQq8" title="Matt Jordan Stand-up" />
      </div>

      {/*
<iframe
        className="youtube"
        src="https://www.youtube.com/embed/Yw2hu5CWQq8?si=0PTHEFVLxpXOOOEF"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <iframe
        className="youtube"
        src="https://www.youtube.com/embed/plmeFCylBZs?si=Hkl14WD6ysUhTpNu"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <iframe
        className="youtube"
        src="https://www.youtube.com/embed/TH1vigasvc0?si=fkaBLrhTF-B1sOvA"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
        */}

      <h2>Gallery</h2>
      <div className="gallery">
        <img
          src={img1}
          className="gallery-pic"
          alt="Matt Jordan"
          width="850"
          height="567"
        />
        <img
          src={img2}
          className="gallery-pic"
          alt="Matt Jordan"
          width="850"
          height="567"
        />
        <img
          src={img3}
          className="gallery-pic"
          alt="Matt Jordan"
          width="850"
          height="567"
        />
      </div>
      <div className="credit">
        Photos by{" "}
        <a
          href="https://www.instagram.com/chestybeefo/"
          target="_blank"
          rel="noreferrer"
        >
          Jesse Chieffo
        </a>
      </div>
    </main>
  );
}
