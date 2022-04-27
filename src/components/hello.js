/**
 * Membuat Component Hello.
 * Mencetak UI(elements)
 */
function Hello(props) {
    console.log(props);

    // melakukan destructing props
    const { name } = props;

    // di dalam return adalah jsx
    return ( <
        div >
        <
        Hello / >
        <
        Hello / >
        <
        /div>
    );
}

export default Hello;