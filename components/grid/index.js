import Card from "components/twcard";
import styles from "./grid.module.css";
import { CARDS } from "./cards";

export default function Grid() {
  const gridClassName = "grid grid-cols-2 gap-4 my-16";
  return (
    <div className={gridClassName}>
      {CARDS.map((c) => (
        <Card key={c.title} {...c} />
      ))}
    </div>
  );
}
