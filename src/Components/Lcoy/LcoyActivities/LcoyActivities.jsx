import React from "react";
import "./LcoyActivities.css";
import ActivityCard from "./ActivityCard";

import imgWorkshops from "../../../assets/workshops.jpg";
import imgPanels from "../../../assets/pannels.jpg";     // <- check name
import imgBooths from "../../../assets/booth.jpg";
import imgNetworking from "../../../assets/networking.jpg";

const items = [
  {
    title: "Workshops",
    body:
      "Negotiation training for COP30, Climate Fresk, and a youth climate debate where participants crafted recommendations for Algeria’s agenda.",
    img: imgWorkshops,
    direction: "left",
    color: "#0c5c85",
  },
  {
    title: "Panel Discussions",
    body:
      "Experts from the EU Delegation, UNDP RBAS, Fortera, and the Mediterranean Hydrogen Alliance explored innovation, regional cooperation, governance, and climate education.",
    img: imgPanels,
    direction: "right",
    color: "#f59e0b",
  },
  {
    title: "Exhibitions & Booths",
    body:
      "Youth clubs and media corners showcased projects, ran interviews, and connected attendees with ongoing initiatives.",
    img: imgBooths,
    direction: "left",
    color: "#6aa84f",
  },
  {
    title: "Youth Statements & Networking",
    body:
      "Closing reflections and youth statements, followed by informal networking to seed future collaboration across Algeria.",
    img: imgNetworking,
    direction: "right",
    color: "#9b59b6",
  },
];

export default function LcoyActivities() {
  return (
    <section className="LcoyActivities">
      <div className="lcoyActivitiesTitle">
        <h1 className="partOneLcoyActivity">WHAT WE DID AT</h1>
        <h1 className="partTwoLcoyActivity">LCOY ALGERIA 2025</h1>
      </div>

      <div className="activitiesGrid">
        {items.map((it) => (
          <ActivityCard key={it.title} {...it} />
        ))}
      </div>
    </section>
  );
}
