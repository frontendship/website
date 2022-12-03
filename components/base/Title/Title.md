#  Title Component

The Title component is used to display a title in the page.

##  Usage

```tsx
<Title>My Title</Title>
```

##  Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| level | HtmlHeadLevel | 1 | The title level. |
| styles | string | default title styles in `Title.module.css` | The title styles. |
| children | ReactNode |  | The title text. |

## HtmlHeadLevel

| Name | Value |
| ---- | ----- |
| h1 | 1 |
| h2 | 2 |
| h3 | 3 |
| h4 | 4 |
| h5 | 5 |
| h6 | 6 |

##  Examples

```tsx
<Title>My Title</Title> {/* rendered h1 */}
<Title level={2}>My Title</Title> {/* rendered h2 */}
<Title level={3}>My Title</Title> {/* rendered h3 */}
<Title level={4}>My Title</Title> {/* rendered h4 */}
<Title level={5}>My Title</Title> {/* rendered h5 */}
<Title level={6}>My Title</Title> {/* rendered h6 */}
```

with custom style:

```tsx
<Title level={h2} styles={styles.title}>My Title</Title>
```
