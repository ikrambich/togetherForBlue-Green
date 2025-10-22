import { motion } from "framer-motion";

export default function ActivityCard({
  title,
  body,
  img,
  direction = "left",
  color = "#0c5c85",
}) {
  const xStart = direction === "left" ? -80 : 80;

  return (
    <motion.article
      className={`activityCard ${direction}`}
      initial={{ opacity: 0, x: xStart }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}   
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
       <div className="mediaWrap">
            <img src={img} alt={title} loading="lazy" />
        </div>

        <div className="content">
            <div className="label" style={{ background: color }}>{title}</div>
            <p className="body">{body}</p>
        </div>
    </motion.article>
  );
}
