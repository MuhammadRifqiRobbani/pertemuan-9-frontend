import styles from "./AddMovieForm.module.css";
import React, { useState } from 'react';
import { nanoid } from 'nanoid';

function AddMovieForm(props) {
    // destructing props
    const { movies, setMovies } = props;

    // membuat state title dan data eror
    const [isTitleError, setisTitleError] = useState(false);
    const [isDateError, setIsDateError] = useState(false);

    // membuat variable state title
    const [title, setTitle] = useState("");
    const [date, setDate] = useState();

    // membuat  fungsi handleTitle
    function handleTitle(e) {
        setTitle(e.target.value);
    }
    // membuat fungsi handleDate
    function handleDate(e) {
        setDate(e.target.value);
    }

    // menghandle form ketika di submit
    function handleSubmit(e) {
        // mencegah perilaku default: refresh
        e.preventDefault();

        // jika title kosong, maka set eror title true
        if (title === "") {
            setisTitleError(true);
        }
        // jika date kosong, maka set error date true
        else if (date === "") {
            setisTitleError(false);
            setIsDateError(true);
        }
        // jika tidak kosong,tambah data
        else {
            // menyiapkan movie yg ingin diinput
            const movie = {
                id: nanoid(),
                year: date,
                poster: "https://picsum.photos/300/400",
                title: title,
                type: "movie"
            };

            setMovies([...movies, movie]);
            setisTitleError(false);
            setIsDateError(false);
        }

    }

    return ( <
        div className = { styles.container } >
        <
        div className = { styles.form__left } >
        <
        img src = "https://picsum.photos/600/400"
        alt = ""
        className = { styles.form__image }
        /> < /
        div >

        <
        div className = { styles.form__right } >
        <
        h2 className = { styles.form__title } > Add Movie < /h2>

        <
        form onSubmit = { handleSubmit } >
        <
        div className = { styles.form__control } >
        <
        label htmlFor = "title" > Title < /label> <
        input id = "title"
        type = "text"
        className = { styles.form__input }
        value = { title }
        onChange = { handleTitle }
        /> {/ *
        jika eror title true: muncul eror

        jika tidak, munculkan string kosong *
        /} {isTitleError && <p>Title Wajib di isi</p >
    } < /
    div >

        <
        div className = { styles.form__control } >
        <
        label htmlFor = "year" > Year < /label> <
    input id = "year"
    type = "number"
    className = { styles.form__input }
    value = { date }
    onChange = { handleDate }
    /> {isDateError && <p>Date Wajib di isi</p >
}
} < /
div > <
    button type = "submit"
className = { styles.form__button } > Submit < /button> < /
form > <
    /div> < /
div >
);
}

export default AddMovieForm;