import styles from "./hero.module.css";

function Hero() {
    return ( <
        div className = { styles.container } >
        <
        section className = { styles.hero } >
        <
        div >
        <
        h2 className = { styles.hero__title } > Muhammad Al Fatih < /h2>  <
        h3 className = { styles.hero__genre } > Genre: Drama, Islami < /h3>  <
        p className = { styles.hero__description } > Lorem ipsum dolor sit amet consectetur adipisicing elit.Reiciendis, soluta magnam!Similique odio perferendis quasi vitae sint!Laboriosam, soluta delectus hic, numquam quasi ipsum, ex quibusdam laborum ad blanditiis corporis ? < /p>  <
        button className = { styles.hero__button } > Nonton < /button> < /
        div >
        <
        div >
        <
        img className = { styles.hero__image }
        src = "https://picsum.photos/600/450"
        alt = "" / > < /div> < /
        section > < /
        div >
    )
}

export default footer;