/**
 * @description
 * All components here are exported asynchronously. This is done for better performance.
 * However, if there is image distortion when the application is first opened, you can re-export the components
 * used on the first page as in the example below.
 * @example
 * export { default as Button } from './Button/Button';
 *
 * @description
 * If you want to use the components in the same way as the example below, you can use the following code.
 * @example
  ```tsx
  import { Button } from 'components';
  import { Header, Title } from 'components';
  ```
 */

import dynamic from 'next/dynamic'

export const Main = dynamic(() => import('./layout/Main'))
export const Header = dynamic(() => import('./layout/Header/Header'))
export const Title = dynamic(() => import('./base/Title/Title'))
export const TitleSection = dynamic(
  () => import('./layout/Section/SectionContext/TitleSection'),
)
export const Icon = dynamic(() => import('./base/Icon/Icon'))
export const GitHubSection = dynamic(() => import('./sections/GitHub/GitHub'))
export const GitHubSectionCard = dynamic(
  () => import('./sections/GitHub/Card/Card'),
)
export const BlogCard = dynamic(() => import('./sections/Blog/Card/Card'))

export const BriefSection = dynamic(() => import('./sections/Brief/Brief'))
export const Event = dynamic(() => import('./sections/Blog/Blog'))
export const ContributorsSection = dynamic(() => import('./sections/Mods/Mods'))
export const CommunityModerators = dynamic(
  () => import('./sections/Contributors/Contributors'),
)
export const Banner = dynamic(() => import('./sections/Banner/Banner'))
export const Footer = dynamic(() => import('./layout/Footer/Footer'))
