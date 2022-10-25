# Icon Component

Icon component is the base component for SVG icon displays on pages and components.

## Props List

| Name              | Type          | Default | Sample                        |
| ----------------- | ------------- | ------- | ----------------------------- |
| iconSet           | Object        | -       | "selection.json file content" |
| icon              | String        | -       | "home"                        |
| size              | Number,String | -       | "1em", 10, "100px"            |
| color             | String        | -       | "red", "#f00", "rgb(0,0,0)"   |
| style             | Object        | {...}   | { color: '#ff0'}              |
| title             | String        | -       | "Icon Title"                  |
| className         | String        | -       | "icomoon"                     |
| disableFill       | Boolean       | -       | true                          |
| removeInlineStyle | Boolean       | -       | true                          |

## Usage

```tsx
import Icon from "./Icon";

<Icon icon="pencil" size={20} color="orange" />;
```

Don't forget to update selection.json file along the way. You can use `https://svgps.app/` or `https://icomoon.io/app/#/select` for adding or removing icons.
