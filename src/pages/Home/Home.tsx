/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from './styles'
import SpiderMan from '../../assets/spider-man.png'
import Hulk from '../../assets/hulk.png'
import IronMan from '../../assets/iron-man.png'
import { useEffect, useState } from 'react'
import { Title } from '../../components/Title/Title'
import { SlideButtons } from '../../components/SlideButtons/SlideButtons'
import { ButtonLink } from '../../components/ButtonLink/ButtonLink'

const slides = [
  { image: SpiderMan, name: 'Spider-Man' },
  { image: Hulk, name: 'Hulk' },
  { image: IronMan, name: 'Iron Man' },
]

export default function Home() {
  const [slide, setSlide] = useState<number>(0)

  const style = {
    background: `url(${slides[slide].image}) no-repeat center / cover`,
  }

  function SlideImages() {
    setTimeout(() => {
      setSlide((prevSlide) => (prevSlide + 1) % slides.length)
      SlideImages()
    }, 6000)
  }

  useEffect(() => {
    SlideImages()
  }, [])

  return (
    <Container style={style}>
      <main>
        <Title size={96} title={slides[slide].name} />
        <p>See more about your favorites Marvel Heroes!</p>
        <ButtonLink searchLink={`/search?query=${slides[slide].name}`} />
      </main>
      <SlideButtons slide={slide} setSlide={setSlide} />
    </Container>
  )
}
