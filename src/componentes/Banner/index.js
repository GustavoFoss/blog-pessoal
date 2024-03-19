import styles from './Banner.module.css'
import CirculoColorido from 'assets/circulo_colorido.png'
import MinhaFoto from 'assets/minha_foto.png'


export default function Banner() {
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}> 
                    Olá, Mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Boas Vindas ao meu espaço pessoal! eu sou o Gustavo Foss Silva,
                    Desenvolvedor FullStack, em busca de novas oportunidades
                </p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={CirculoColorido} aria-hidden={true} alt='Circulo Colorido'/>
                <img className={styles.minhaFoto} src={MinhaFoto} aria-hidden={true} alt='Minha Foto'/>
            </div>    
        </div>
    )
}