import { style } from "typestyle";
import { constants } from "./Constants";
import { BoxShadowStyles, Spacing, StandardColors } from "../styles";
import { Coordinates } from "../models";

export interface CellProps {
  id: string;
  name: string;
  coordinates: Coordinates;
}

export function Cell({ name, coordinates }: CellProps) {
  const coords = style({
    left: coordinates.x,
    top: coordinates.y,
  });

  return <div className={`${styles.container} ${coords}`}>{name}</div>;
}

const styles = {
  container: style({
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    backgroundColor: StandardColors.ColorDarkGray40,
    borderRadius: Spacing.Medium,
    padding: Spacing.Large,
    boxShadow: BoxShadowStyles.Large,
    zIndex: 10,
    ...constants.cell.dimensions,
  }),
};
