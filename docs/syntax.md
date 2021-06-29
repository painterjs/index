## Painter Json Syntax

When Browser use html + css to describe web page, Painter use Json object. The syntax of Painter Json is compatible of h5 and css3 in most part. The different parts we will tell you below . We call painter json as "Palette", just like a real world painter use palette to draw.



### Overview

A palette is a json, it combined with the palette css and it's child views. Let's see the whole structure below:

```typescript
{
  "width": string | number, // width of the image
  "height": string | number, // height of the image
  "background": string, // background color of the image
  "views": {
    "type": "rect" | "text" | "image" | "qrcode",
    "url"?: string, // the image url, local or network
    "content"?: string, // the content of qrcode
    "text"?: string, // the content of text
    "css": CSSProperties | CSSProperties[],
  }[]
}
```



### Common Attributes

Child views contain some common attributes, like rotate, layout, border.

| Attributes | Description   | Default |
| ---------- | ------------- | ------- |
| rotate     | Rotate degree | 0       |



#### Layout

| Attributes               | Description               | Default        |
| ------------------------ | ------------------------- | -------------- |
| width、height            | view width and height     |                |
| top、right、bottom、left | just like absolute layout | top = left = 0 |

In painter, we just use absolute layout way. So you can use top, right, bottom, left just like you set "position: absolute" in css. And if you want to use relative layout, you can do as below.

1，Add an id to the element, this means this view will expose it's left、right、top、bottom、width、height info.

```
{
  id: 'myTextId',
  type: 'text',
  ...
}  
```

2，Use the "id" in calc.

```
left: 'calc(myTextId.bottom + 100px)'
width: 'calc(myTextId.width * 2)'
```

![](https://qhstaticssl.kujiale.com/newt/165/image/png/1624611630747/090CCE14127B42FCC4B3902061F8EDE0.png)

<details><summary>Example（Expand to Click）</summary><br>


```javascript
{
  width: '654rpx',
    height: '1000rpx',
      background: '#eee',
        views: [
          {
            id: 'one',
            type: 'qrcode',
            content: '12345',
            css: {
              width: '400rpx',
              left: '50%',
              align: 'center',
              top: '30rpx',
              height: '400rpx',
            },
          },
          {
            id: 'two',
            type: 'image',
            url: '/palette/avatar.jpg',
            css: {
              width: '100rpx',
              height: '100rpx',
              left: 'calc(one.left)',
              align: 'center',
              verticalAlign: 'center',
              top: 'calc(one.top + one.height / 2)',
              borderRadius: '10rpx',
              borderWidth: '10rpx',
              borderColor: '#fff'
            },
          },
          {
            type: 'rect',
            css: {
              width: 'calc(one.width / 2)',
              left: 'calc(one.left)',
              align: 'center',
              top: 'calc(one.bottom + 10rpx)',
              height: '100rpx',
            },
          },
        ],
}
```

</details>

**Attention：Make sure you use the id after the view.**

#### border

| Attributes   | Description                                                  | Default |
| ------------ | ------------------------------------------------------------ | ------- |
| borderRadius | radius of border, use "10px 10px 10px 10px" to set each corner | 0       |
| borderWidth  | Width of border, if not set, border will not show            | 0       |
| borderColor  | Color of border                                              | black   |
| borderStyle  | dashed、dotted、solid                                        | solid   |

![](https://user-images.githubusercontent.com/4279515/46778646-3cba1400-cd47-11e8-916a-3fddc172534d.png)

#### align

Align and verticalAlign in Painter is different from css. In Painter, this two attributes mean the align way of the view itself. So you can use use `left: 50%, top: 50%, verticalAlign: center, align: center` to put the view in the center of the palette.

| Attributes    | Description                  | Default                             |
| ------------- | ---------------------------- | ----------------------------------- |
| align         | Horizontal align of the view | Depend on left and right attributes |
| verticalAlign | Vertical align of the view   | Depend on top and bottom attributes |

**Attention：If you use right attribute，align will be "right"，but text is still draw from left.**

![](https://user-images.githubusercontent.com/4279515/46778660-4e9bb700-cd47-11e8-8d93-e522185e8188.png)

<details><summary>Example（Click to expand）</summary><br>


```javascript
{
  width: '654rpx',
  height: '600rpx',
  background: '#eee',
  views: [
    {
      type: 'rect',
      css: {
        top: '40rpx',
        left: '327rpx',
        color: 'rgba(255, 0, 0, 0.5)',
        width: '5rpx',
        height: '500rpx',
      },
    },
    {
      type: 'image',
      url: '/palette/avatar.jpg',
      css: {
        top: '40rpx',
        left: '327rpx',
        width: '100rpx',
        height: '100rpx',
      },
    },
    {
      type: 'qrcode',
      content: '/palette/avatar.jpg',
      css: {
        top: '180rpx',
        left: '327rpx',
        width: '120rpx',
        height: '120rpx',
      },
    },
    {
      type: 'text',
      text: "align: 'left' 或者不写",
      css: {
        top: '320rpx',
        left: '327rpx',
        fontSize: '30rpx',
      },
    },
    {
      type: 'text',
      text: "align: 'right'",
      css: {
        top: '370rpx',
        left: '327rpx',
        align: 'right',
        fontSize: '30rpx',
      },
    },
    {
      type: 'text',
      text: "align: 'center'",
      css: {
        top: '420rpx',
        left: '327rpx',
        align: 'center',
        fontSize: '30rpx',
      },
    },
    {
      type: 'text',
      text: "在多行的情况下，align 会影响内部 text 的对齐，比如这边设置 align: 'center'",
      css: {
        top: '480rpx',
        right: '327rpx',
        width: '400rpx',
        align: 'center',
        fontSize: '30rpx',
      },
    },
  ],
}
```

</details>

### image

| Attribute Name | Description                                               | Default    |
| -------------- | --------------------------------------------------------- | ---------- |
| width          | image width                                               | auto       |
| height         | image height                                              | auto       |
| mode           | Specifies the clipping mode or the scale mode of an image | aspectFill |

**scaleToFill**：A scale mode, where the image is scaled without maintaining the aspect ratio to fully stretch to fill the screen with elements of the image.

**aspectFill**：A scale mode, where the image is scaled with the aspect ratio unchanged to fully display its shorter edge. In this case, the image is completely displayed in the horizontal or vertical direction, and it is truncated in the other direction.

**!!Attention：if width or height is auto，mode will be invalided**

![](https://user-images.githubusercontent.com/49523717/61441645-a4f1f200-a978-11e9-9f9c-467cfcf3ec04.png)

<details><summary>Example（Click to expand）</summary><br>
```javascript
export default class ImageExample {
  palette() {
    return {
      width: "654rpx",
      height: "1000rpx",
      background: "#eee",
      views: [
        {
          type: "image",
          url: "/palette/sky.jpg",
        },
        {
          type: "text",
          text: "未设置height、width时",
          css: {
            right: "0rpx",
            top: "60rpx",
            fontSize: "30rpx",
          },
        },
        {
          type: "image",
          url: "/palette/sky.jpg",
          css: {
            width: "200rpx",
            height: "200rpx",
            top: "230rpx",
          },
        },
        {
          type: "text",
          text: "mode: 'aspectFill' 或 无",
          css: {
            left: "210rpx",
            fontSize: "30rpx",
            top: "290rpx",
          },
        },
        {
          type: "image",
          url: "/palette/sky.jpg",
          css: {
            width: "200rpx",
            height: "200rpx",
            mode: "scaleToFill",
            top: "500rpx",
          },
        },
        {
          type: "text",
          text: "mode: 'scaleToFill'",
          css: {
            left: "210rpx",
            top: "560rpx",
            fontSize: "30rpx",
          },
        },
        {
          type: "image",
          url: "/palette/sky.jpg",
          css: {
            width: "200rpx",
            height: "auto",
            top: "750rpx",
          },
        },
        {
          type: "text",
          text: "设置height为auto",
          css: {
            left: "210rpx",
            top: "780rpx",
            fontSize: "30rpx",
          },
        },
      ],
    };
  }
}
```

</details>

#### text

| Attribute Name | Description                                                  | Default     |
| -------------- | ------------------------------------------------------------ | ----------- |
| width          | text container width                                         |             |
| height         | text container height                                        |             |
| fontSize       | font size                                                    | 20rpx       |
| color          | font color                                                   | black       |
| maxLines       | max lines to show, if exceed limit, will show "..." at the end |             |
| lineHeight     | distance between two lines text baseline                     | fontSize    |
| fontWeight     | font weight                                                  | normal      |
| textDecoration | underline、 overline、 line-through，and even combine to use |             |
| textStyle      | fill、stroke                                                 | fill        |
| background     | Background of text container                                 | transparent |
| padding        |                                                              | 0           |
| textAlign      | left, center, right                                          | left        |
| fontStyle      | normal, italic                                               |             |
| fontFamily     | Be sure there exists the font you want to use                |             |

![](https://user-images.githubusercontent.com/4279515/46778602-07152b00-cd47-11e8-9965-091a3d58f417.png)

<details><summary>Example（Click to expand）</summary><br>


```javascript
export default class LastMayday {
  palette() {
    return {
      width: "654rpx",
      height: "700rpx",
      background: "#eee",
      views: [
        _textDecoration("overline", 0),
        _textDecoration("underline", 1),
        _textDecoration("line-through", 2),
        _textDecoration("overline underline line-through", 3, "red"),
        {
          type: "text",
          text: "fontWeight: 'bold'",
          css: [
            {
              top: `${startTop + 4 * gapSize}rpx`,
              fontWeight: "bold",
            },
            common,
          ],
        },
        {
          type: "text",
          text: "我是把width设置为300rpx后，我就换行了",
          css: [
            {
              top: `${startTop + 5 * gapSize}rpx`,
              width: "400rpx",
            },
            common,
          ],
        },
        {
          type: "text",
          text: "我设置了maxLines为1，看看会产生什么效果",
          css: [
            {
              top: `${startTop + 7 * gapSize}rpx`,
              width: "400rpx",
              maxLines: 1,
            },
            common,
          ],
        },
        {
          type: "text",
          text: "textStyle: 'stroke'",
          css: [
            {
              top: `${startTop + 8 * gapSize}rpx`,
              textStyle: "stroke",
              fontWeight: "bold",
            },
            common,
          ],
        },
      ],
    };
  }
}

const startTop = 50;
const gapSize = 70;
const common = {
  left: "20rpx",
  fontSize: "40rpx",
};

function _textDecoration(decoration, index, color) {
  return {
    type: "text",
    text: decoration,
    css: [
      {
        top: `${startTop + index * gapSize}rpx`,
        color: color,
        textDecoration: decoration,
      },
      common,
    ],
  };
}
```

</details>

### Other Notification

#### shadow

Shadow in Painter can be used in image、rect、text、qrcode 。When used with `text`, it acts like `text-shadow`,  when with `image`, `rect`, it acts like `box-shadow`, when with `qrcode` , it's the shadown of the qrcode.

![](https://user-images.githubusercontent.com/4279515/51457535-ab6a2d00-1d8c-11e9-8812-9ab1ee8dafa4.png)

Usage：

```
shadow: 'h-shadow v-shadow blur color';

h-offset: Required. The horizontal offset of the shadow. A positive value puts the shadow on the right side of the box, a negative value puts the shadow on the left side of the box。

v-offset: Required. The vertical offset of the shadow. A positive value puts the shadow below the box, a negative value puts the shadow above the box

blur: Required. The blur radius. The higher the number, the more blurred the shadow will be。

color: Required. The color of the shadow. The default value is the text color. Look at CSS Color Values for a complete list of possible color values.。
```

<details><summary>Example（Click to expand）</summary><br>


```javascript
export default class ShadowExample {
  palette() {
    return {
      width: "654rpx",
      height: "400rpx",
      background: "#eee",
      views: [
        {
          type: "image",
          url: "/palette/sky.jpg",
          css: {
            shadow: "10rpx 10rpx 5rpx #888888",
          },
        },
        {
          type: "rect",
          css: {
            width: "250rpx",
            height: "150rpx",
            right: "50rpx",
            top: "60rpx",
            shadow: "10rpx 10rpx 5rpx #888888",
            color:
              "linear-gradient(-135deg, #fedcba 0%, rgba(18, 52, 86, 1) 20%, #987 80%)",
          },
        },
        {
          type: "qrcode",
          content: "https://github.com/Kujiale-Mobile/Painter",
          css: {
            top: "230rpx",
            width: "120rpx",
            height: "120rpx",
            shadow: "10rpx 10rpx 5rpx #888888",
          },
        },
        {
          type: "text",
          text: "shadow: '10rpx 10rpx 5rpx #888888'",
          css: {
            left: "180rpx",
            fontSize: "30rpx",
            shadow: "10rpx 10rpx 5rpx #888888",
            top: "290rpx",
          },
        },
      ],
    };
  }
}
```

</details>

#### Gradient suport

```css
 {
  background: `linear-gradient(
    -135deg,
    blue 0%,
    rgba(18, 52, 86, 1) 20%,
    #987 80%
  )`;

  color: `radial-gradient(rgba(0, 0, 0, 0) 5%, #0ff 15%, #f0f 60%)`;
}
```

**！！！Attention：the percent after the color must be required**

#### Write Text Vertical

You can use \n to implement the writing-mode effect.

![竖排效果](https://user-images.githubusercontent.com/4279515/61357471-f16efc00-a8aa-11e9-84b3-192fe158f38d.png)

<details><summary>Example（Click to expand）</summary><br>

```javascript
const text = "锄禾日当午汗滴禾下土谁知盘中餐粒粒皆辛苦";
export default class ImageExample {
  palette() {
    const views = [];
    let tmpText = "";
    let index = 0;
    for (let i = 0; i < text.length; i++) {
      tmpText = `${tmpText}${text[i]}\n`;
      if (i % 5 === 4) {
        views.push({
          type: "text",
          text: tmpText,
          css: {
            right: `${50 + index}rpx`,
            top: "60rpx",
            fontSize: "40rpx",
            lineHeight: "50rpx",
          },
        });
        index += 50;
        tmpText = "";
      }
    }
    return {
      width: "654rpx",
      height: "500rpx",
      background: "#eee",
      views: views,
    };
  }
}
```

</details>
