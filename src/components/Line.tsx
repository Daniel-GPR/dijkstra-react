import { Coordinates } from "../models";
import { Spacing, StandardColors } from "../styles";

export interface LineProps {
  start: Coordinates;
  end: Coordinates;
  color?: string;
}
export function Line({ start, end, color }: LineProps) {
  return (
    <svg width="100%" height="100%">
      <line
        strokeWidth={Spacing.Micro}
        x1={start.x}
        x2={end.x}
        y1={start.y}
        y2={end.y}
        stroke={color ?? StandardColors.ColorBlue80}
      />
    </svg>
  );
}
