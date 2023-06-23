import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import ContentCard from '../../components/ContentCard/ContentCard'
import { Container } from './styles'
import { api } from '../../lib/api'
import { endURL } from '../../utils/baseURL'

export default function Search() {
  const location = useLocation()
  const [results, setResults] = useState([])

  async function fetchCharacters(
    searchTerm: string | (string | null)[] | null,
  ) {
    const { data } = await api.get(
      `/characters?${endURL}&nameStartsWith=${searchTerm}`,
    )
    setResults(data.data.results)
  }

  useEffect(() => {
    const queryParams = queryString.parse(location.search)
    const searchTerm = queryParams.query

    fetchCharacters(searchTerm)
  }, [location.search])

  return (
    <Container>
      {results &&
        results.map((result: any) => (
          <ContentCard
            key={result.id}
            id={result.id}
            title={result.name}
            description={result.description}
            image={result.thumbnail.path + '.' + result.thumbnail.extension}
          />
        ))}
    </Container>
  )
}
