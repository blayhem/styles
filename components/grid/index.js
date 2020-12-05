import Card from "components/card";
import { CARDS } from "./cards";
import styles from "./grid.module.css";

export default function Grid() {
  return (
    <div className={styles.grid}>
      {CARDS.map((c) => (
        <Card key={c.title} {...c} />
      ))}
    </div>
  );
}
