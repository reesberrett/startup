# CS260 Notes

## HTTP/HTTPS

### *Startup Info*
> IP: [3.23.81.92](3.23.81.92)  
>  
> address: [reesberrett.org](reesberrett.org)  
>   
> subdomains: [simon.reesberrett.org](simon.reesberrett.org), [startup.reesberrett.org](startup.reesberrett.org) 
  
## HTML

**Basic structure of websites**  
Format: Tags have opening and closing tab  
```
<p>Text here</p>
```
Lang = "en" in html tag sets language to english  
Title tag is name of the tab and not header  
  
Link references: 
  
Absolute: link to external site  
```
<a href = "reesberrett.org">  
```
    
Relative: link to another page/image on the same site  
```
<a href = "index.html">  
```

### *Basic elements*

Element | Meaning 
------- | -------
html | page conatiner
head | header info 
meta | info for browser
link | link something useful for your code like a stylesheet
title | title of the page, displays on tab
body | content of the page
header | header content
nav | content for navigation bar
main | main content of the page
footer | footer of the main content
section | a section of the main content
div | a division of content
span | an inline span of content
h1-h9 | text heading, h1 is highest
p | paragraph of text
table | table
th | table header, first row of table
tr | table row
ol/ul | ordered/unordered list
a | anchor text with link
img | graphical image reference
&amp | & symbol
&lt | < symbol
&gt | > symbol
&quot | " symbol
&apos | ' symbol
&#128512 | 😃 emoji

### *Input Elements*

Element | Meaning
------- | -------

### *Media elements*

Element | Meaning
------- | -------

## CSS

**All about styling websites**  
Different browers have default CSS applied to each page that can be disabled  
Can use css delarations in html tags (called inline style)  
```
<p style = "color: red; font-size: 500px">CSS</p>
```
Format: Assigning attributes within a specified tag (p, div, a, etc)
```
p {
  color: red;
  font-size: 500px;
}
```
You can use this inside html style tags or in an external CSS sheet  
Inline styles take precedance over external stylesheets  

Attribute | Meaning | Example
--------- | ------- | -------
color     | text color | color: rgb(0, 0, 0);
background-color | background color | background-color: #ffffff;
font-size | font size | font-size: 3rem;
font-family | type of font | font-family: serif;
font-weight | font boldness | font-weight: bold;
text-align | alignment of text | text-align: center;
padding | space from selected content to other content | padding: 10px;
margin | space from selected content to page borders | margin: 10px;
transform | applies transformation to selector | transform: rotate(90deg)

font-size measurements:
- px: pixels
- em: size relevant to letter m in used font
- rem: size relevant to entire document

You can select by ID
```
#IDhere {
  color: blue
}
```
and set the ID to an HTML tag
```
<p id = "IDhere">text</p>
```
**IDs are only meant to be used to one HTML tag**  
  
You can also select by class
```
.classhere {
  color: blue
}
```
and set the class to an HTML tag
```
<p class = "classhere">text</p>
```
Classes can be used on multiple tags
You can selsct certain children of a class:
```
p.classhere {
  color: yellow
}
```
and it will only apply to given tag with given class  
  
Other declarations
- , 
  - any given selectors
  - ex: body, section
- space
  - second tag has to be descendant of first tag
  - ex: body section
- \ge
  - second tag has to be **direct** descendant of first tag
  - ex: section > p
- :
  - based on certain state
  - ex: p:hover

## JavaScript

## Misc
