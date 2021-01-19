import Card from "components/twcard";
import styles from "./grid.module.css";
import { CARDS } from "./cards";

export default function Grid() {
  const moduleClass = styles.grid;
  const tailwindClass = "grid grid-cols-2 gap-8 my-16";
  return (
    <div className={tailwindClass}>
      {CARDS.map((c) => (
        <Card key={c.title} {...c} />
      ))}
    </div>
  );
}
