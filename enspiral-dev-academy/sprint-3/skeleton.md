What happens to the layout when you resize the screen to less than 550 px?
---

The site content enlarges again but is reformatted to only take up a single column layout, suitable for mobile devices and small browser windows.

How do you think that works?
---

The resizing of all of site content is achieved through the use of media queries. Once the browser detects that its width is smaller than 550px, it loads values best formatted for the browser width. These values are all preset by the designer/developer in the CSS file.