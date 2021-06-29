# Quick start

## Installation

### Install via npm

[![](https://img.shields.io/npm/v/painter-kernel.svg?style=flat-square#align=left&display=inline&height=20&originHeight=20&originWidth=80&search=&status=done&width=80#align=left&display=inline&height=20&originHeight=20&originWidth=88&status=done&style=none&width=88)](https://www.npmjs.com/package/painter-kernel)

```javascript
npm install painter-kernel --save
```

After a successful installation is complete, you can use `import` referenced.

```js
import * as Painter from "painter.js";

new Painter.Pen(bottomContext.current, bottomDraw).paint(() => {
  // when Painter Complete Draw
});
```

### Example

<details>
  <summary>
    <b>browser</b>
  </summary>
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <script src="../node_modules/canvg/lib/umd.js"></script>
  </head>
  <body>
    <canvas id="canvas"></canvas>
  </body>
  <script type="module">
    import * as Painter from '../node_modules/painter-kernel/dist/painter.js';
    const CanvasNode = document.getElementById('canvas');
    const canvas = CanvasNode.getContext('2d');
    const template = {
      width: "654rpx",
      height: "1000rpx",
      background: "#eee",
      views: [
        {
          type: 'rect',
          css: {
            width: '200rpx',
            right: '20rpx',
            top: '30rpx',
            height: '100rpx',
            borderRadius: '100%',
            shadow: '10rpx 10rpx 5rpx #888888',
            color: 'linear-gradient(-135deg, #fedcba 0%, rgba(18, 52, 86, 1) 20%, #987 80%)',
          },
        },
      ],
    };
    let pen = new Painter.Pen(canvas, template);
    pen.paint(() => {
      console.log('ok');
    });
  </script>
  </html>
  ```
</details>

<details>
  <summary>
    <b>Node.js</b>
  </summary>
  ```js
  import * as Canvas from 'canvas';
  import * as Painter from 'painter-kernel';
  const CanvasNode = Canvas.createCanvas(800, 600);
  const canvas = canvas.getContext('2d');
  const template = {
      width: "654rpx",
      height: "1000rpx",
      background: "#eee",
      views: [
        {
          type: 'rect',
          css: {
            width: '200rpx',
            right: '20rpx',
            top: '30rpx',
            height: '100rpx',
            borderRadius: '100%',
            shadow: '10rpx 10rpx 5rpx #888888',
            color: 'linear-gradient(-135deg, #fedcba 0%, rgba(18, 52, 86, 1) 20%, #987 80%)',
          },
        },
      ],
    };
  let pen = new Painter.Pen(canvas, template);
  pen.paint(() => {
    console.log('ok');
  });
  ```

</details>

<details>
<summary>
<b>Miniprogram </b>
</summary>
For Taro:

```tsx

// TODO

```

</details>

## Usage

### clearCache

clear the cache, used in multi render

```js
Painter.clearPenCache(that.touchedView.id);
```

### toPx

Transform `rpx / %` to `px`

```js
Painter.toPx(that.touchedView.css.minWidth);
```

### initInjection

We support the initInjection method to expand other feature, such as SVG / Image.

```js
Painter.initInjection({
  loadImage: () => {
    // do something
  },
  customActions: {
    svg: {
      layout: (view, rects) => {
        // return {left: number, right: number, bottom: number, top: number}
        return {
          left: 0,
          top: 0,
          bottom: 100,
          right: 100,
        };
      },
      draw: async (view, ctx) => {
        // do something
      },
    },
  },
});
```

For example, we use Canvg (a svg2canvas methods) to support SVG in painter.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="../node_modules/canvg/lib/umd.js"></script>
  </head>
  <body>
    <canvas id="canvas"></canvas>
  </body>
  <script type="module">
    import * as Painter from "../node_modules/painter-kernel/dist/painter.js";
    const template = {
      width: "654rpx",
      height: "1000rpx",
      background: "#eee",
      views: [
        {
          type: "svg",
          value: `<svg xmlns="http://www.w3.org/2000/svg">
          <g> 
            <text font-family="microsoft yahei" font-size="120" y="160" x="160">马</text>
            <animateTransform attributeName="transform" begin="0s" dur="10s" type="rotate" from="0 160 160" to="360 160 160" repeatCount="indefinite"/>
          </g>
        </svg>`,
        },
      ],
    };

    Painter.initInjection({
      loadImage: async (url) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = function() {
            resolve({
              img,
              height: img.height,
              width: img.width,
            });
          };
          img.src = url;
        });
      },
      customActions: {
        svg: {
          layout: (view, rects) => {
            return {
              left: 0,
              top: 0,
              bottom: 100,
              right: 100,
            };
          },
          draw: async (view, ctx) => {
            let cv = await window.canvg.Canvg.from(ctx, view.value, {});
            cv.start({
              ignoreClear: true,
            });
          },
        },
      },
    });

    Painter.setStringPrototype(1, 1);

    const CanvasNode = document.getElementById("canvas");
    const canvas = CanvasNode.getContext("2d");
    CanvasNode.width = template.width.replace("rpx", "");
    CanvasNode.height = template.height.replace("rpx", "");
    let pen = new Painter.Pen(canvas, template);
    pen.paint(() => {
      console.log("ok");
    });
  </script>
</html>
```
