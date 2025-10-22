import React from "react";
import "./VideoTestimonials.css";
import videoParticipant from "../../../assets/videoParticipant.mp4";

const VideoTestimonials = () => {
  return (
    <section className="vtSection">
      <h2 className="vtTitle">HEAR FROM OUR <span className="highlightWord">PARTICIPANTS</span></h2>

      <div className="vtPlayerWrap">
        <video className="vtPlayer" controls preload="metadata">
          <source src={videoParticipant} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <p className="vtNote">
        Note: this video captures highlights & testimonials from <strong>LCOY Algeria 2025</strong>.
      </p>
    </section>
  );
};

export default VideoTestimonials;
