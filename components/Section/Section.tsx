import { ReactNode } from 'react'

type Size = 'sm' | 'md' | 'lg' | 'xl'
type BgColorProp = `${'bg-'}${string}`

interface Props {
  className?: string
  p?: Size
  px?: Size
  py?: Size
  pt?: Size
  pb?: Size
  pl?: Size
  pr?: Size
  bgColor?: BgColorProp
  children: ReactNode
}

const Section = (props: Props) => {
  let p = props.p == 'sm' ? 'p-2' : props.p == 'md' ? 'p-4' : props.p == 'lg' ? 'p-6' : props.p == 'xl' ? 'p-10' : null
  let px = props.px == 'sm' ? 'px-2' : props.px == 'md' ? 'px-4' : props.px == 'lg' ? 'px-6' : props.px == 'xl' ? 'px-10' : null
  let py = props.py == 'sm' ? 'py-2' : props.py == 'md' ? 'py-4' : props.py == 'lg' ? 'py-6' : props.py == 'xl' ? 'py-10' : null
  let pt = props.pt == 'sm' ? 'pt-2' : props.pt == 'md' ? 'pt-4' : props.pt == 'lg' ? 'pt-6' : props.pt == 'xl' ? 'pt-10' : null
  let pb = props.pb == 'sm' ? 'pb-2' : props.pb == 'md' ? 'pb-4' : props.pb == 'lg' ? 'pb-6' : props.pb == 'xl' ? 'pb-10' : null
  let pl = props.pl == 'sm' ? 'pl-2' : props.pl == 'md' ? 'pl-4' : props.pl == 'lg' ? 'pl-6' : props.pl == 'xl' ? 'pl-10' : null
  let pr = props.pr == 'sm' ? 'pr-2' : props.pr == 'md' ? 'pr-4' : props.pr == 'lg' ? 'pr-6' : props.pr == 'xl' ? 'pr-10' : null

  let classString = [p, px, py, pt, pb, pl, pr, props.bgColor, props.className].filter(Boolean).join(' ')

  return <section className={classString}>{props.children}</section>
}

export default Section
