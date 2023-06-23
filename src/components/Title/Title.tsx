import { Container } from './styles'

interface TitleProps {
  title: string
  size: number
}

export function Title({ title, size }: TitleProps) {
  const style = {
    fontSize: `${size}px`,
  }

  return (
    <Container>
      <h1 style={style}>{title}</h1>
      <div className="line"></div>
    </Container>
  )
}
