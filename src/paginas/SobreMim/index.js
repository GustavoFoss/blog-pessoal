import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";
import styles from './sobreMim.css'


export default function SobreMim() {
    return (
        <PostModelo fotoCapa={fotoCapa} titulo="SobreMim">
            <h3 className={styles.subtitulo}> 
                Olá, eu sou o Gustavo!
            </h3>

            <img src={fotoSobreMim} alt="minha foto" className={styles.fotoSobreMim}/>

            <p className={styles.paragrafo}>Sou um desenvolvedor em ascenção e grande admirador da tecnologia. Metas e desafios são o que me motivam.</p>
            <p className={styles.paragrafo}>Busco exercer meu trabalho com excelência, entregar resultados qualitativos, e possuo grande desejo de vivenciar, aprender e contribuir para as evoluções que o mundo tech ainda pode proporcionar para a nossa sociedade.</p>

        </PostModelo>
    );
}