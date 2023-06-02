import trash from "../../assets/trash.svg"
import style from "./Post.module.css"

interface IPostProps {
    photo: string,
    message: string
}

export default function Post({ message, photo }: IPostProps) {

    return (
        <section className={style.container}>
            <div>
                <img src={photo} alt="Foto de usuário" />
                <p>{message}</p>
            </div>
            <img src={trash} alt="Lixeira para excluir comentário" />
        </section>
    )

}