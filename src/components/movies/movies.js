import styles from "./movies.module.css";
import Movie from "./movies/movie";
import { nanoid } from "nanoid";


function Movies { props } {
    // destructing props
    const { movies, setMovies } = props;
    // buat fungsi tambah film
    // dijalanin ketika tombol diklik
    function tambahFile() {
        const movie = {
            id: "xyz",
            title: "Spiral Jigsaw",
            year: "2021",
            type: "Movie",
            poster: "https://picsum.photos/350/450",
        };

        setMovies([...movies, movie]);
    }
    return ( <
        div className = { styles.container } >
        <
        section className = { styles.movies } >
        <
        h2 className = { styles.movies__title } > Latest Movies < /h2> <
        div className = { styles.movie__container } > {
            /*
                     *looping data movies:map,
                     * render component movie
                     * kirim props movie
                     * /}
                     </div>


                movies.map(function(movie) {
                    return <movie key={movie.id}movie = { movie }
                    / >
                })

            }

            <
            /div> < /
            section > 
            /* Menambahkan event onClick*/
            <
            button on Click = { rambahFile } > Add Movie < /button> < /
            div >
        );
    }

    export default Movies;