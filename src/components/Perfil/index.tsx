import style from "./Perfil.module.css"
import estrela from "../../assets/Estrela.svg"
import carro from "../../assets/carro.svg"

interface IPerfilProps {
    perfil: string,
    username: string,
    starNumber: string,
    placa: string,
    carName: string
}

export default function Perfil({carName, perfil, username, placa, starNumber}:IPerfilProps){
    return(
        <section className={style.perfil}>
          <div className={style.containerPerfil}>
            <div className={style.userPerfil}>
              <img src={perfil} alt="Usuário" />
              <div className={style.estrela}>
                <img src={estrela} alt="Estrela" />
                <p>{starNumber}</p>
              </div>
              <p>{username}</p>
            </div>
            <img src={carro} alt="Carro" />
            </div>
            <div className={style.carInformation}>
              <h3>{placa}</h3>
              <h5>{carName}</h5>
            </div>
        </section>
    )
}