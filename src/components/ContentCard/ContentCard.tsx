import { Title } from '../Title/Title'
import { Container } from './styles'

interface ContentCardProps {
  title: string
  image: string
  description: string
  id: string
}

export default function ContentCard({
  title,
  image,
  description,
  id,
}: ContentCardProps) {
  let style
  if (image) {
    style = {
      background: `url(${image}) no-repeat center / cover`,
    }
  } else {
    style = {
      backgroundColor: 'gray',
    }
  }

  return (
    <Container style={style} to={`/details/${id}`}>
      <Title size={18} title={title} />
      {description && <p>{description.slice(0, 70)}</p>}
    </Container>
  )
}
