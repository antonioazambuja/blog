import * as C from './Tags.styles'

type TagsProps = {
  tags?: string[]
}

export const Tags = ({ tags = [] }: TagsProps) => {
  return (
    <C.TagsContainer>
      {
        tags.map(tag => (
          <span key={tag}>{tag}</span>
        ))
      }
    </C.TagsContainer>
  )
}
