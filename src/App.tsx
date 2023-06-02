import style from './App.module.css'
import telefone from "./assets/telefone.svg"
import escudo from "./assets/escudo.svg"

import Perfil from './components/Perfil'
import Post from './components/Post'

function App() {

  return (
    <article className={style.container}>
      <section className={style.header}></section>

      <section className={style.title}>
        <h3>Encontre <span>Matheus</span> no local de partida</h3>
        <h5>Chega em 3 minutos (800 metros)</h5>
      </section>

      <Perfil perfil='https://avatars.githubusercontent.com/u/80282447?v=4'
        username='Matheus N.'
        carName='BMW I8 Roxa'
        placa='BCD0D19'
        starNumber='5.0'
      />

      <div className={style.mensagem}>
        <input type='text' placeholder='Enviar mensagem para Matheus...'></input >
        <div className={style.button}>Publicar</div>
        <img src={telefone} alt="Telefone" />
        <img src={escudo} alt="Escudo" />
      </div>

      <div className={style.posts}>
        <Post photo='https://avatars.githubusercontent.com/u/87199965?v=4'
          message='Matheus, já estou no local te esperando. Estou de camisa branca e shorts preto'
        />

        <Post photo='https://avatars.githubusercontent.com/u/80282447?v=4'
          message='Acabei de chegar e já te vi. Vou estacionar o carro perto!'
        />
      </div>

    </article>
  )
}

export default App
