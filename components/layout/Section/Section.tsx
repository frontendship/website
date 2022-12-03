import { ReactNode } from 'react'
interface Props {
  bgColor?: string
  children: ReactNode
}

const Section = (props: Props) => {
  return (
    <section
      className={`flex items-center justify-center flex-col py-8 px-10 md:py-16 md:px-24 xl:py-24 xl:px-32 ${
        props.bgColor && props.bgColor
      }`}
    >
      {props.children}
    </section>
  )
}

export default Section
