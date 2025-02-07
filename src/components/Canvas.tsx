import { style } from "typestyle";

export function Canvas() {
  return (
    <div className={styles.canvas}>
      <h1>Hi</h1>
    </div>
  );
}

const styles = {
  canvas: style({
    position: "relative",
  }),
};
