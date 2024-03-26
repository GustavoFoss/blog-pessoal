import BotaoPrincipal from 'componentes/BotaoPrincipal'
import styles from './PaginaNaoEncontrada.module.css'
import ImagemCachorro from 'assets/erro_404.png'
import { useNavigate } from 'react-router-dom'

export default function PaginaNaoEncontrada() {
    const navegar = useNavigate();

    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>

                <p className={styles.titulo}>Página não encontrada</p>

                <div className={styles.conteudoContainer} onClick={() => {navegar(-1)}}>
                    <BotaoPrincipal tamanho={"lg"}>Voltar</BotaoPrincipal>
                </div>

                <img src={ImagemCachorro} className={styles.imagemCachorro} alt="cachorro perdido" />
            </div>

            <div className={styles.espacoEmBranco}></div>
        </>
    )
}