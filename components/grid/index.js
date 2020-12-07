import Card from "components/twcard";
import styles from "./grid.module.css";
import { CARDS } from "./cards";

export default function Grid() {
  const gridClassName = "grid grid-cols-2 gap-8 my-16"; // styles.grid; //
  return (
    <div className={gridClassName}>
      {CARDS.map((c) => (
        <Card key={c.title} {...c} />
      ))}
    </div>
  );
}
