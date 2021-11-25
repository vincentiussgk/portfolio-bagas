import React from 'react'
import styles from "./About.module.css";

const About = () => {
    return (
        <div>
            <img src="AboutHero.png" className={styles.hero} />
            <div className={styles.contentContainer}>
                <div className={styles.subcontainer}>
                    <img src="FeelAsThough.png" />
                </div>
                <div className={styles.subcontainer}>
                    <button className={styles.reminisceButton}>
                        Reminisce
                    </button>
                </div>
                <div className={styles.subcontainer}>
                    Masa pandemi COVID-19 yang terjadi di seluruh dunia memaksa 
                    setiap individu untuk membatasi kegiatan sosial demi mencegah 
                    penyebaran virus COVID-19 yang semakin meluas. Hal tersebut 
                    menyebabkan suatu perasaan alienasi yang terjadi disetiap kalangan 
                    masyarakat. Manusia tidak merasakan kesehariannya yang biasanya 
                    dilakukan secara komunal dan kegiatan bersosialisasi juga terbatas 
                    didalam jaringan, menjadi suatu perasaan yang teralienasi. Sudahkan 
                    kita menerima diri kita sepenuhnya dan menyadari apa yang telah kita 
                    pilih di masa sulit ini? Apakah kita masih merasa menjadi diri kita sendiri?
                </div>
                <div className={styles.lineParent}>
                    <div className={styles.lineContainer} />
                </div>
                <div className={styles.subcontainer}>
                    <i>
                        Amidst COVID-19 pandemic that has occurred around the world has forced 
                        every individual to limit their social activities to prevent the spread of 
                        the COVID-19 virus which is increasingly widespread. This causes a feeling of 
                        alienation that occurs in every community. Humans do not feel their daily life 
                        which is usually done communally and social activities are also limited in the 
                        network, an alienated feeling. Have we fully accepted ourselves and realized 
                        what we have chosen in this difficult time? Do we still feel like we are ourselves?
                    </i>
                </div>
                <div>
                    <div className={styles.textBold}>
                        Artist
                    </div>
                    <div className={styles.creditsContainerRow}>
                        <img src="BagasPhoto.png" />
                        <div className={styles.creditsContainerName}>
                            <span className={styles.textBold}>Bagas Mahardika</span> <br/>
                            <span className={styles.textReg}>Artist, Performer</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.textBold}>
                        Collaborator
                    </div>
                    <div className={styles.creditsContainerRow}>
                        <img src="QanissaPhoto.png" />
                        <div className={styles.creditsContainerName}>
                            <span className={styles.textBold}>Qanissa Aghara</span> <br/>
                            <span className={styles.textReg}>Director of Photography</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
