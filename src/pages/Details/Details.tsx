/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Title } from '../../components/Title/Title'
import { api } from '../../lib/api'
import { endURL } from '../../utils/baseURL'
import { Container } from './styles'
import ContentCard from '../../components/ContentCard/ContentCard'
import ContentCardSkeleton from '../../components/ContentCardSkeleton/ContentCardSkeleton'

export default function Details() {
  const { id } = useParams()
  const [results, setResults] = useState<any>([])
  const [comics, setComics] = useState([])
  const [events, setEvents] = useState([])

  async function fetchCharacter() {
    try {
      const characterPromise = api.get(`/characters/${id}?${endURL}`)
      const { data } = await Promise.race([characterPromise])
      setResults(data.data.results[0])

      const comicsResponse = await api.get(`/characters/${id}/comics?${endURL}`)
      setComics(comicsResponse.data.data.results)

      const eventsResponse = await api.get(`/characters/${id}/events?${endURL}`)
      setEvents(eventsResponse.data.data.results)
    } catch (error) {
      console.error('Erro ao buscar o personagem:', error)
    }
  }

  function renderContentCardSkeleton() {
    const numberOfSkeletons = 5
    const skeletons = Array.from({ length: numberOfSkeletons }, (_, index) => (
      <ContentCardSkeleton key={index} />
    ))
    return skeletons
  }

  useEffect(() => {
    fetchCharacter()
  }, [])

  return (
    <Container>
      <section>
        {results.length === 0 ? (
          <>
            <div>
              <Title size={80} title="Loading..." />
              <p>Loading...</p>
            </div>
            <div>
              <div className="img"></div>
            </div>
          </>
        ) : (
          <>
            <div>
              <Title size={80} title={results.name} />
              <p>{results.description}</p>
            </div>
            <div>
              <img
                src={results.thumbnail.path + '.' + results.thumbnail.extension}
                alt="Hero Image"
              />
            </div>
          </>
        )}
      </section>

      {comics.length === 0 && events.length === 0 ? (
        <>
          <div>
            <Title size={44} title="Comics" />
            <div className="tab">{renderContentCardSkeleton()}</div>
          </div>
          <div>
            <Title size={44} title="Events" />
            <div className="tab">{renderContentCardSkeleton()}</div>
          </div>
        </>
      ) : (
        <>
          <div>
            <Title size={44} title="Comics" />
            <div className="tab">
              {comics.slice(0, 5).map((comic: any) => (
                <ContentCard
                  key={comic.id}
                  id={results.id}
                  title={comic.title}
                  description={comic.description}
                  image={comic.thumbnail.path + '.' + comic.thumbnail.extension}
                />
              ))}
            </div>
          </div>

          <div>
            <Title size={44} title="Events" />
            <div className="tab">
              {events.slice(0, 5).map((event: any) => (
                <ContentCard
                  key={event.id}
                  id={results.id}
                  title={event.title}
                  description={event.description}
                  image={event.thumbnail.path + '.' + event.thumbnail.extension}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </Container>
  )
}
