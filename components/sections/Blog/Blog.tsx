import Card from './Card/Card'
import { SectionContainer, SectionContext } from 'components'

const Blog = () => {
  return (
    <SectionContainer bgColor="bg-gray-200">
      <SectionContext
        subtitle="Latest Blog Posts"
        title="You can see latest blog posts on this section"
      />
      <Card />
    </SectionContainer>
  )
}

export default Blog
