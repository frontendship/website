# Section Component

Section component can be used to wrap content to apply padding and background color.

## Props List

_Type_ **Size**: `sm`, `md`, `lg` or `xl`
| `sm` | `md` | `lg` | `xl` |
| ---- | ---- | ---- | ---- |
| 0.5rem | 1rem | 1.5rem | 2.5rem |

| Name            | Type      | Optional |
| --------------- | --------- | -------- |
| className       | Size      | ✔        |
| p               | Size      | ✔        |
| px              | Size      | ✔        |
| py              | Size      | ✔        |
| pt              | Size      | ✔        |
| pb              | Size      | ✔        |
| pl              | Size      | ✔        |
| pr              | Size      | ✔        |
| backgroundColor | Size      | ✔        |
| children        | ReactNode | ✖        |

## Usage

```tsx
<Section px="sm" py="lg" backgroundColor="bg-red-600">
```
