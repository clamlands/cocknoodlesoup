import { useEffect } from "react";
import img1 from "../media/images/cos1-850.webp";
import img3 from "../media/images/cos3-850.webp";
import img6 from "../media/images/head3-850.webp";

export default function Media() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <h1>Media</h1>
      <h2>Stand-up</h2>

      <iframe
        className="youtube"
        src="https://www.youtube.com/embed/Yw2hu5CWQq8?si=0PTHEFVLxpXOOOEF"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <iframe
        className="youtube"
        src="https://www.youtube.com/embed/plmeFCylBZs?si=Hkl14WD6ysUhTpNu"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <iframe
        className="youtube"
        src="https://www.youtube.com/embed/TH1vigasvc0?si=fkaBLrhTF-B1sOvA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <h2>Gallery</h2>
      <div className="gallery">
        <img src={img1} alt="" width="850" height="567" />
        <img src={img3} alt="" width="850" height="567" />
        <img src={img6} alt="" width="850" height="567" />
      </div>
    </main>
  );
}
