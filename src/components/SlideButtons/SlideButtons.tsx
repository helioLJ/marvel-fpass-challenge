import { Dispatch, SetStateAction } from 'react'
import { Container } from './styles'

interface SlideButtonsProps {
  slide: number
  setSlide: Dispatch<SetStateAction<number>>
}

export function SlideButtons({ slide, setSlide }: SlideButtonsProps) {
  return (
    <Container>
      <button
        onClick={() => setSlide(0)}
        className={`${slide === 0 ? 'redball' : ''}`}
      ></button>
      <button
        onClick={() => setSlide(1)}
        className={`${slide === 1 ? 'redball' : ''}`}
      ></button>
      <button
        onClick={() => setSlide(2)}
        className={`${slide === 2 ? 'redball' : ''}`}
      ></button>
    </Container>
  )
}
