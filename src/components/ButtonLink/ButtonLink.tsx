import { Container } from './styles'

interface ButtonLinkProps {
  searchLink: string
}

export function ButtonLink({ searchLink }: ButtonLinkProps) {
  return <Container to={searchLink}>Ver Mais</Container>
}
