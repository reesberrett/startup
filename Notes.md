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
*lang = "en"* in &lt;html&gt; tag sets language to english  
&lt;title&gt; tag is name of the tab and not header  
  
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
text-align | alignment of element | text-align: center;
padding | space from element to other content | padding: 10px;
margin | space from element to page borders | margin: 10px;
transform | applies transformation to element | transform: rotate(90deg)
border | sets border of element | border: red solid medium
display | defines how to display element | display: none;

font-size measurements:
- px: pixels
- em: size relevant to letter m in used font
- rem: size relevant to entire document
- %: percentage of parent element
- vw: percentage of viewport's width
- vh: percentage of viewport's height
- vmin: percentage of viewports's smaller dimension
- vmax: percentage of viewpoint's larger dimension

CSS Content Map:  
![CSS content map2](https://github.com/reesberrett/startup/assets/97056541/b1472413-0212-49f2-a6ac-783903f42628)

### Selecting

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
  - body, section{}
- space
  - second tag has to be descendant of first tag
  - body section{}
- &gt;
  - second tag has to be **direct** descendant of first tag
  - section > p{}
- :
  - based on certain state
  - p:hover{}
- ~
  - tags have to be siblings
  - section ~ p{}

### Animation

Use the @keyframes selector to set attributes during certain times of animation  
  
Example to animate size of text
```
p {
  animation-name: demo;
  animation-duration: 3s;
}

@keyframes demo {
  from {
    font-size: 0vh;
  }
  
  95% {
    font-size: 21vh;
  }
  
  to {
    font-size: 20vh;
  }
}
```
You can use the *animation* attribute instead of *animation-name/duration*
```
p {
  animation: demo 3s infinite;
}
```
Using the *infinite* descriptor makes the animation last indefinitely  

### Response

*display* attribute types:
- none: element removed, shrinks to 0x0px grid
- block: takes up whole width of page
- inline: displays element inline with other elements
- flex: displays element in flex container
- grid: diaplays element as part of grid at certain row and column
grid and flex are best for responsive design  
  
This allows you to change page orientation and use flex:
```
<meta name = "viewport" content = "width = device-width, initial-scale = 1"/>
``` 

## JavaScript

JavaScript needs interpreter to convert code  
Examples: Chrome, other browsers, Node.js, etc  
  
JavaScript can be displayed in html tags in some attributes
```
<button onclick="sayHello()">Say Hello</button>
```
You can define JavaScript in the *script* HTML tag
```
<script>
  function sayHello(){
    console.log('hello');
  }
</script>
```
Or you can link an external JavaScript file
```
<script src="script.js"></script>
```
  
### Arrays

*forEach()* function iterates through arrray
```
const words = ['hello', 'world'];

words.forEach((word => {
  console.log(word);
  console.log(' ');
});
```
> Output: hello world 

### Equality

Use "===" instead of "=="  
"==" converts types to satisfy the equality, always use "==="

### Arrow Functions

```
function f(){
  return 1;
}
```
is the same as 
```
const f = () => 1;
```
^ This arrow function doesn't use curly braces so it implicitly returns 1  
  
This arrow function would not return anything
```
const f = (a) => {
  a;
};
```
and would need a return statement to return a

 

## Misc

### UX Design

- **Don't make the user think**  
  - **Think about how the user would experience the website through every step**  
- Don't overcrowd your website  
  - **Never have your interface have more than one job to be done**  
- Be consistent with things like nav bar, main content, footer, etc  
- Use a UI Framework (Bootstrap, Tailwind, etc)
- **Make sure the user always knows where they are**
  - Breadcrumbs, nav bars, browser controls, anticipate common paths
- Use one primary color and one secondary color
  - Primary color gets main focus, then secondary
  - Cater to user accesibility (colorblindness)
  - [Adobe Color Picker](color.adobe.com)
  - [Palleton Color Picker](paletton.com)
- Think about letter/word spacings, serifs, etc
- The less fonts (and colors), the better
- Pick 4 different font sizes to use for your site (generally)
- Use standard icons
  - 3 lines for menu, magnifying glass for search, etc
- Space around text is easier on the eyes
- User feedback: have icons/links react when they're clicked or hovered over
- **Hick's Law: The time necessary to make a decision increases logarithmically with the number of choices presented**  
  - Present complex decisions one step at a time
- **Load Time Matters!**

### Web Services

JavaScript *fetch()* function acts as a google search and returns html pages  
This webpage data can be stored in an object by using JSON
```
fetch('https://api.chucknorris.io/jokes/random?category=dev')
  .then(r => r.json())
  .then(j => console.log(j.value))
```
**Port Types**
Port | Protocol
20 | File transfer protocol (FTP) for data transfer
22 | Secure Shell (SSH) for connecting to remote devices
25 | Simple Mail Transfer Protocol (SMTP) for sending email
53 | Domain Name System (DNS) for looking up IP addresses
80 | Hypertext Transfer Protocol (HTTP) for web requests
123 | Network Time protocol (NTP) for managing time
443 | HTTP Secure (HTTPS) for secure web requests

**URL Components**
> https://cs260.click:443/api/city?q=pro#3
- *https://* -> scheme
- *cs260.click* -> domain
- *:443* -> port
- */api.city* -> path
- *?q=pro* -> parmeters
- *#3* -> anchor

