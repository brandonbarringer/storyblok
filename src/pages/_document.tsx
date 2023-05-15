import { Html, Head, Main, NextScript } from 'next/document'
import PrimaryNavigation from '@/components/navigation/Primary'
/**
 * You can use the _document to set lang, load fonts, load scripts before page interactivity, 
 * collect style sheets for CSS in JS solutions like Styled Components, among a few other things.
 * 
 * For example, applying a CSS class to the body of the page, as part of the render logic, 
 * is not possible in _app. It is only possible via side-effects.
 */

export default function rootLayout() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
