imporet styles from "./movie.module.css";

// tangkap props
function Movie(props) {
    // destructing object props
    const { movie } = props;
    return ( <
        div className = { styles.movie } >
        <
        img className = { styles.movie__image }
        src = { movie.poster }
        alt = "" /
        >
        <
        h3 className = { styles.movie__title } > { movie.title } < /h3> <
        p className = { styles.movie__date } > { movie.year } < /p> < /
        div > <
        div className = { styles.movie } >
    )
}

export default Movie;