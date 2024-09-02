function drawGrid(w,h,cellSize){
    const cols = Math.floor(w / cellSize);
    const rows = Math.floor(h / cellSize);
    const cells = Array(cols * rows).fill().map((d,i)=>i+1);
    const origFill = getFill();
    const origStroke = getStroke();
    stroke(153, 255, 255);
    strokeWeight(1);
    noFill();
    cells.forEach((d,i)=>{
        let _col = i % cols;
        let _row = Math.floor(i / cols);
        square(
            _col * cellSize,
            _row * cellSize,
            cellSize
        );
    })
    stroke(origStroke);
    noFill(origFill);    
}

function getFill() {
    let pg = createGraphics(1, 1);
    // Draw a temporary pixel to read the fill color
    let x = 0, y = 0;
    pg.point(x, y);
    let c = pg.get(x, y);
    return c;
  }

  function getStroke() {
    let pg = createGraphics(1, 1);
    // Draw a temporary line to read the stroke color
    let x1 = 0, y1 = 0, x2 = 1, y2 = 0;
    pg.line(x1, y1, x2, y2);
    let c = pg.get(x1, y1);
    return c;
  }