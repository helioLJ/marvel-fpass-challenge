import { Container } from './styles'
import Logo from '../../assets/Logo.png'
import { Search } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { FormEvent, useState } from 'react'

export function Header() {
  const navigate = useNavigate()
  const [input, setInput] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    navigate(`/search?query=${input}`)
  }

  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="Marvel Logo" />
      </Link>
      <div className="input-wrapper">
        <Search color="#ED1D24" />
        <form onSubmit={(event) => handleSubmit(event)}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search for heroes..."
            type="text"
          />
        </form>
      </div>
    </Container>
  )
}
