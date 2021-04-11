'use strict';

//Basic math/addition function

let math = () => {

    let h2 = document.getElementById('h2')
    let x = parseInt(document.getElementById("x").value)
    let y = parseInt(document.getElementById('y').value)

    let z = x + y


    console.log(z)

    if (z) {
        h2.textContent = z



    } else {
        h2.textContent = 'Enter Numbers'
    }
    return z

}