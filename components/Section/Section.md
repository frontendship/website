# Section Component

Section component can be used to wrap content to apply padding and background color.

## Props List

| Name            | Type      | Optional |
| --------------- | --------- | -------- |
| className       | string    | ✔        |
| p               | string    | ✔        |
| px              | string    | ✔        |
| py              | string    | ✔        |
| pt              | string    | ✔        |
| pb              | string    | ✔        |
| pl              | string    | ✔        |
| pr              | string    | ✔        |
| backgroundColor | string    | ✔        |
| children        | ReactNode | ✖        |

## Usage

```tsx
<Section px="0.5rem" py="1rem" backgroundColor="red">
```

- For paddings you need to specify the unit. (i.e. `rem`, `em` or `px`)
- `backgroundColor` can take anything that is valid for css. (i.e. `red`, `#000`, `rgb(0, 0, 0)`)
- `pb` and `pt` will override `py`
- `pl` and `pr` will override `px`
