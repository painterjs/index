# Quick start

## Installation

[![](https://img.shields.io/npm/v/painter-kernel.svg?style=flat-square#align=left&display=inline&height=20&originHeight=20&originWidth=80&search=&status=done&width=80#align=left&display=inline&height=20&originHeight=20&originWidth=88&status=done&style=none&width=88)](https://www.npmjs.com/package/painter-kernel)

**NPM**
```javascript
npm install painter-kernel --save
```

**CDN**
```html
<script type="module">
      import * as Painter from 'https://cdn.jsdelivr.net/npm/painter-kernel@latest/dist/painter.min.js'
</script>      
```

#### Palette Rule
[Painter Json Syntax](//docs.html#syntax)

#### How to use in Browser
```javascript
// inject loadImage
Painter.initInjection({
  loadImage: async url => {
    return new Promise(resolve => {
      const img = new Image();
      img.onload = function () {
        resolve({
          img,
          height: img.height,
          width: img.width,
        });
      };
      img.src = url;
    });
  }
});

// get the canvas in your dom, and set the width, height.
const CanvasNode = document.getElementById('canvas');
const canvas = CanvasNode.getContext('2d');
CanvasNode.width = Painter.toPx(template.width);
CanvasNode.height = Painter.toPx(template.height);

// draw
const pen = new Painter.Pen(canvas, palette);
pen.paint(() => {
  console.log('ok');
});
```

#### How to use in Mini Program Of Wechat
[https://github.com/Kujiale-Mobile/Painter](https://github.com/Kujiale-Mobile/Painter)