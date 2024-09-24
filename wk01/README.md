# Week 01 P5 Drawing Basics

See the [p5.js Reference](https://p5js.org/reference/) for detailed documentation.

## 01.01 Elementary Shapes

Draw a [square](https://p5js.org/reference/p5/square/)  
Parameters: x, y, side 

`square(50, 50, 100);`


Draw a [rectangle](https://p5js.org/reference/p5/rect/)  
Parameters: x, y, w, h

`rect(200, 50, 100, 50);`


Draw a [circle](https://p5js.org/reference/p5/circle/)   
Parameters: cx, cy, d 

`circle(100, 250, 100);`


Draw an [ellipse](https://p5js.org/reference/p5/ellipse/)  
Parameters: cx, cy, w, h

`ellipse(250, 230, 100, 50);`


Draw an [arc](https://p5js.org/reference/p5/arc/)  
Parameters: x, y, w, h, start angle, stop angle. 
By default, angles are measured in radians
(360 degrees = 2 * PI radians)

`    arc(100, 400, 100, 100, PI * 1.5, PI * 2);`


Draw a [closed arc (pie)](https://p5js.org/reference/p5/arc/)  
Parameters: x, y, w, h, start angle, stop angle, mode
360 degrees = 2 * PI radians

`arc(250, 400, 100, 100, 0, PI * 1.5, PIE);`


Draw a [closed chord (pie)](https://p5js.org/reference/p5/arc/)   
Parameters: x, y, w, h, start angle, stop angle  
360 degrees = 2 * PI radians

`arc(400, 400, 100, 100, PI, PI * 1.5, CHORD);`


## 01.02 Lines and Polygons

Draw a [line](https://p5js.org/reference/p5/line/)   
Parameters: x1, y1, x2, y2   

`line(50, 50, 150, 150);`

Draw a [triangle](https://p5js.org/reference/p5/triangle/)
Parameters: x1, y1, x2, y2, x3, y3
 
`triangle(200, 150, 300, 150, 250, 50);`

Draw a [polygon](https://p5js.org/reference/p5/beginShape/)     

```
// start the shape definition
beginShape(); 
// points, x, y
vertex(50, 230);
vertex(100, 200);
vertex(170, 270);
vertex(140, 300);
vertex(70, 300);
// end the shape definition and close
endShape(CLOSE);  

```

## 01.03 Bezier Curves

Draw a [bezier curve]()  
Parameters: x1, y1, cx1, cy1, cx2, cy2, x2, y2
Control points are represented by parameters prefixed by"c"

`bezier(50, 50, 100, 50, 100, 150, 150, 150);`


## 01.04 Color

[Stoke](https://p5js.org/reference/p5/stroke/) and [Fill](https://p5js.org/reference/p5/fill/) are set using commands preceding the drawing code.

[NoStroke](https://p5js.org/reference/p5/noStroke/) and [NoFill](https://p5js.org/reference/p5/noFill/) are used to unset values.

The default [color mode](https://p5js.org/reference/p5/colorMode/) is RGB.

Color can be:

- named: `fill("red")`
- RGB: `fill(0,0,255);`

You can set the [stroke weight](https://p5js.org/reference/p5/strokeWeight/)

`strokeWeight(5);`


## 01.05 Transformation Matrix

Move the pen with [Translate](https://p5js.org/reference/p5/translate/)

`translate(50,50);`

[Save current transform matrix](https://p5js.org/reference/p5/push/)

`push();`

[Restore transform matrix](https://p5js.org/reference/p5/pop/)

`pop();`

[Use degrees instead of radians](https://p5js.org/reference/p5/angleMode/)

`angleMode(DEGREES);`

[Rotate](https://p5js.org/reference/p5/rotate/) the coordinate system

`rotate(45);`

[Scale](https://p5js.org/reference/p5/scale/) the coordinate system

`scale(0.5, 1);`


## 01.06 Variables and Functions

Save a color in a variable

`let lime = color(0, 255, 0);`

Declare a function with a parameter

```
function drawDot(color){
    noStroke();
    fill(color);
    circle(0, 0, 100);
}
```

Call the function

`drawDot(lime);`


## 01.07 Animation Loop


## 01.08 Graphical User Interface (GUI)


## P5 Starter Template

```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>P5 Starter Template</title>
<link rel="stylesheet" href="lib/style.css">
</head>
<body>
<!-- Import the p5.js library -->
<script src="lib/p5.min.js"></script>
<script>

function setup(){
    // create a canvas to draw on
    createCanvas(500, 500);
}

function draw(){
    // set the background color
    background(255);

    // Hello world!
    text("Hello world!", 50, 50);
    
}

</script>
</body>
```

The path to the script in p5.min.js must refer to a file in the local file system.

Alternatively, you can use a CDN link and replace line 11 with this:

`<script src="https://cdn.jsdelivr.net/npm/p5@1.9.4/lib/p5.js"></script>`

See [Get Started](https://archive.p5js.org/get-started/) for further explanation.


