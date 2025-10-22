// components/PhotoGallery.jsx
import React from "react";
import "./PhotoGallery.css";

import gal1 from "../../../assets/gal1.jpg";
import gal2 from "../../../assets/gal2.jpg";
import gal3 from "../../../assets/gal3.jpg";
import gal4 from "../../../assets/gal4.jpg";
import gal5 from "../../../assets/gal5.jpg";
import gal6 from "../../../assets/gal6.jpg";
import gal7 from "../../../assets/gal7.jpg";
import gal8 from "../../../assets/gal8.jpg";


const IMAGES = [gal1, gal2, gal3, gal4, gal5, gal6, gal7,gal8];

export default function PhotoGallery() {
  return (
    <section className="pgSection">
      <h2 className="pgTitle">PHOTO GALLERY</h2>

      <div className="pgGrid">
        {IMAGES.map((src, i) => (
          <div
            key={i}
            className={`pgItem ${i === 0 ? "wide" : ""} ${i === 4 ? "tall" : ""}`}
          >
            <img src={src} alt={`Gallery ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}
