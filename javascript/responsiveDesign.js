Responsive design is an essential aspect of modern web development, ensuring that websites look and function well on a variety of devices and screen sizes. CSS Grid, Flexbox, and media queries are powerful tools that help create responsive layouts. Here’s how to use them:

### **1. CSS Grid**

CSS Grid is a two-dimensional layout system that allows you to create complex layouts with rows and columns.

#### **Basic Grid Layout**

Here's how to create a simple grid layout:

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}

.item {
  background-color: lightblue;
  padding: 20px;
  text-align: center;
}
```

**HTML:**

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>
```

This code creates a grid with three equal-width columns (`1fr` means one fraction of the available space) and a 20px gap between items. 

#### **Responsive Grid with Media Queries**

You can make the grid responsive by changing the number of columns based on screen size:

```css
@media (max-width: 800px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 500px) {
  .container {
    grid-template-columns: 1fr;
  }
}
```

This setup changes the grid layout to two columns on screens smaller than 800px and to a single column on screens smaller than 500px.

### **2. Flexbox**

Flexbox is a one-dimensional layout system that arranges items in rows or columns. It’s great for distributing space and aligning items in a container.

#### **Basic Flexbox Layout**

Here’s how to create a responsive flexbox layout:

```css
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.item {
  flex: 1 1 calc(33.333% - 20px);
  background-color: lightcoral;
  padding: 20px;
  text-align: center;
}
```

**HTML:**

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>
```

This code creates a flexible layout where each item takes up approximately one-third of the container width, with space between the items.

#### **Responsive Flexbox with Media Queries**

You can adjust the layout for different screen sizes:

```css
@media (max-width: 800px) {
  .item {
    flex: 1 1 calc(50% - 20px);
  }
}

@media (max-width: 500px) {
  .item {
    flex: 1 1 100%;
  }
}
```

This makes the items take up 50% of the container on screens smaller than 800px and 100% on screens smaller than 500px.

### **3. Media Queries**

Media queries are used to apply different styles depending on the device's characteristics, such as screen width, height, orientation, and resolution.

#### **Basic Media Query**

A media query looks like this:

```css
@media (max-width: 600px) {
  body {
    background-color: lightgray;
  }
}
```

This code changes the background color of the body to light gray on screens smaller than 600px.

#### **Combining Grid, Flexbox, and Media Queries**

You can combine all three to create a fully responsive layout:

```css
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
}

.item {
  background-color: lightgreen;
  padding: 20px;
  text-align: center;
}

@media (max-width: 1200px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 800px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 500px) {
  .container {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
}
```

**HTML:**

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
  <div class="item">7</div>
  <div class="item">8</div>
</div>
```

This example creates a grid layout that adapts to different screen sizes, switching to a flexbox layout on very small screens.

### **4. Summary**

- **CSS Grid**: Best for complex layouts involving rows and columns. Use `grid-template-columns`, `grid-template-rows`, and `grid-gap` to define your grid structure.
- **Flexbox**: Ideal for simpler, one-dimensional layouts (either rows or columns). Use `flex`, `flex-wrap`, and `justify-content` to align and distribute space among items.
- **Media Queries**: Essential for making your layout responsive. Use `@media` to apply different styles based on screen size and other characteristics.

By combining these tools, you can create responsive designs that work well on any device.