import { useEffect, useState } from "react";

function Counter() {
    //Variable angka
    let [angka, setAngka] = useState(0);

    /**
     * useState mengembalikan sepasang value (array) : [0, function()]
     */

    function addAngka() {
        // state tidak boleh diubah secara langsung
        setAngka(angka += 1);
        console.log(angka);
    }

    /**
     * useEffect dijalankan pada lifecycle mount dan update.
     */
    function updateDOM() {
        console.log("Lifecycle: dimount");
        // melakukan side effect : mengakses DOM
        document.title = `Result: ${angka}`;
    }


    useEffect(updateDOM, [angka]);

    console.log("dirender");

    return ( <
        div >
        <
        p > Hasil: { angka } < /p> <
        button onClick = { addAngka } > Add < /button> < /
        div >
    );
}

export default Counter;