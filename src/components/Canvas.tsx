import { style } from "typestyle";
import { Cell, CellProps } from "./Cell";
import { StandardColors } from "../styles";
import useMousePosition from "../hooks/UseMousePosition";
import { useState } from "react";
import { generateUuid } from "../utils";
import { Line, LineProps } from "./Line";
import { Coordinates } from "../models";
import { constants } from "./Constants";

export function Canvas() {
  const { mouseX, mouseY } = useMousePosition();
  const [cells, setCells] = useState<CellProps[]>([]);

  const handleRightClick = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    createCell();
  };

  function createCell() {
    cells.push({
      id: generateUuid(),
      name: "temp",
      coordinates: {
        x: mouseX,
        y: mouseY,
      },
    });

    setCells([...cells]); // need this to force re-render
  }

  function getLineCoordsFromCells(
    cellA: CellProps,
    cellB: CellProps,
  ): LineProps {
    return {
      start: normalizeCellCoordinates(cellA.coordinates),
      end: normalizeCellCoordinates(cellB.coordinates),
    };
  }

  function normalizeCellCoordinates(coords: Coordinates): Coordinates {
    const dim = constants.cell.dimensions;
    return {
      x: (coords.x as number) + dim.width / 2,
      y: (coords.y as number) + dim.height / 2,
    };
  }

  return (
    <div className={styles.canvas} onContextMenu={handleRightClick}>
      {cells.map((cellProps) => (
        <Cell key={cellProps.id} {...cellProps} />
      ))}
      {cells.length >= 2 && (
        <Line
          {...getLineCoordsFromCells(
            cells[cells.length - 1],
            cells[cells.length - 2],
          )}
        />
      )}
    </div>
  );
}

const styles = {
  canvas: style({
    position: "relative",
    overflow: "hidden",
    height: "100%",
    width: "100%",
    backgroundColor: StandardColors.ColorDarkGray90,
  }),
};
