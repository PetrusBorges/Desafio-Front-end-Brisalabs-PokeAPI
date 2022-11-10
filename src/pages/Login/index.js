//styled-components
import { LoginContainer, Form, Input, ButtonContainer, BackGroundContainer } from "./styles"

//imagens
import LoginLogo from "../../assets/images/icons/pokemon-logo-white.svg"
import LoginDark from "../../assets/images/login-dark.svg"
import LoginWhite from "../../assets/images/login-white.svg"

//components
import ButtonSubmit from "../../components/ButtonSubmit"

//react-router-dom
import { useNavigate } from "react-router-dom"

//hooks
import { useEffect, useState } from "react"

export default function Login({ selectedTheme }) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    try {
      setIsSubmitting(true)

      if (JSON.parse(localStorage.getItem("Login")) && JSON.parse(localStorage.getItem("Password"))) {
        navigate("/allpokemons")
      } else {
        navigate("/")
      }

    } catch {
      alert('error')
    } finally {
      setIsSubmitting(false)
    }
  }, [navigate])

  function handleEmail(event) {
    setEmail(event.target.value)
  }

  function handlePassword(event) {
    setPassword(event.target.value)
  }

  function handleLogin() {
    localStorage.setItem("Login", JSON.stringify(email))
    localStorage.setItem("Password", JSON.stringify(password))
  }

  return (
    <>
      <LoginContainer>
        <img src={LoginLogo} alt="" />

        <h1>Comece a coletar pokémons!</h1>

        <Form onSubmit={handleLogin} noValidate>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
            disabled={isSubmitting}
          />
          <Input
            maxLength="8"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={handlePassword}
            disabled={isSubmitting}
          />

          <ButtonContainer>
            <ButtonSubmit
              type="submit"
              isloading={isSubmitting}
            >
              Entrar
            </ButtonSubmit>
          </ButtonContainer>
        </Form>
      </LoginContainer>
      <BackGroundContainer>
        {selectedTheme === "Dark" && (
          <img src={LoginDark} alt="Background Dark" />
        )}
        {selectedTheme === "Light" && (
          <img src={LoginWhite} alt="Background White" />
        )}
      </BackGroundContainer>
    </>
  )
}
