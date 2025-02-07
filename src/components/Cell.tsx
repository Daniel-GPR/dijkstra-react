import { style } from "typestyle";
import { constants } from "./Constants";

export interface CellProps {
  name: string;
}

export function Cell({ name }: CellProps) {
  return <div className={styles.container}>{name}</div>;
}

const styles = {
  container: style({
    position: "absolute",
    ...constants.cell.dimensions,
  }),
};
