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

import dynamic from "next/dynamic";

export const Header = dynamic(() => import("./Header/Header"));
export const Title = dynamic(() => import("./Title/Title"));
export const Icon = dynamic(() => import("./Icon/Icon"));
export const GitHubSection = dynamic(
  () => import("./GitHubSection/GitHubSection")
);
export const BlogCard = dynamic(() => import("./BlogCard/BlogCard"));

export const BriefSection = dynamic(
  () => import("./BriefSection/BriefSection")
);
export const Event = dynamic(() => import("./Event/Event"));
