import styles from './alert.module.css';

function Alert(props) {
    return ( <
        div >
        <
        p className = { styles.alert } > { props.children } < /p> < /
        div >
    );
}

export default Alert;