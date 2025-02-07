import { style } from "typestyle";
import { Cell } from "./Cell";

export function Canvas() {
  return (
    <div className={styles.canvas}>
      <Cell name="asd" />
    </div>
  );
}

const styles = {
  canvas: style({
    position: "relative",
  }),
};
