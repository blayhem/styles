import styles from "./card.module.css";

export default function Card({ title, description, link }) {
  return (
    <a href={link} className={styles.card}>
      <h3>{title} &rarr;</h3>
      <p>{description}</p>
    </a>
  );
}
