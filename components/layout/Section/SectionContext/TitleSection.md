# Title Section Component

The Title Section component is used to display a title and subtitle in the page.

##  Usage

```tsx
<TitleSection
  title="Frontendship'e neden katılmalıyım?"
  subtitle="Frontend alanında sıfırdan ileri seviyelere kadar sektöre katkı sağlayacak içerikler üretmek ve topluluğa destek sağlamak istiyoruz."
></TitleSection>
```

##  Props

| Name           | Type              | Default                                           | Description              |
| -------------- | ----------------- | ------------------------------------------------- | ------------------------ |
| level          | HtmlHeadLevel     | 1                                                 | The title level.         |
| className      | string            | default title styles in `TitleSection.module.css` | The titleSection styles. |
| title          | ReactNode/string  |                                                   | The title text.          |
| subTitle       | ReactNode/string  |                                                   | The subTitle text.       |
| subTitleStyles | StyleTypes/string |                                                   | The subTitle styles.     |
| titleStyles    | StyleTypes/string |                                                   | The title styles.        |
