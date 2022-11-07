import { ReactNode } from 'react'

interface Props {
  className?: string
  p?: string
  px?: string
  py?: string
  pt?: string
  pb?: string
  pl?: string
  pr?: string
  backgroundColor?: string
  children: ReactNode
}

const Section = (props: Props) => {
  return (
    <section
      style={{
        backgroundColor: props.backgroundColor,
        padding: props.p,
        paddingLeft: props.pl || props.px,
        paddingRight: props.pl || props.px,
        paddingTop: props.pt || props.py,
        paddingBottom: props.pb || props.py,
      }}
      className={props.className}>
      {props.children}
    </section>
  )
}

export default Section
