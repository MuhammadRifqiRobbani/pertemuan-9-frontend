import styles from "./footer.module.css";

function footer() {
    return ( <
        div className = { styles.container } >
        <
        footer className = { styles.footer } >
        <
        h2 className = { styles.footer__title } > Movie App < /h2 > <
        p className = { styles.footer__author } > Created by rifqi < /p> < /
        footer > <
        h / div >
    )
}

export default footer;