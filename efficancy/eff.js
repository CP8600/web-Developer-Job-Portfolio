'use strict'

let CASESTACKER = [{
        firstName: 'Chris',
        lastName: 'Perez',
        eff: '001'
    },
    {
        firstName: 'berry',
        lastName: 'white',
        eff: '003'
    },
    {
        firstName: 'john',
        lastName: 'mclain',
        eff: '002'
    }

]

/*  */
const employee = (firstName, lastname, eff) => {



    /* 
        h2.textContent = CASESTACKER.map(CASESTACKER => CASESTACKER.firstName) */

}
employee()

const h2 = document.getElementById('h2')
const h22 = document.getElementById('h22')
const h222 = document.getElementById('h222')

let showCaseStacker = () => {

    const fName = CASESTACKER.map(CASESTACKER => CASESTACKER.firstName)
    const lName = CASESTACKER.map(CASESTACKER => CASESTACKER.lastName)
    const effs = CASESTACKER.map(CASESTACKER => CASESTACKER.eff)

    for (let i = 0; i < CASESTACKER.length; i++) {
        h2.textContent = fName
        h22.textContent = lName
        h222.innerHTML = effs

    }




}
showCaseStacker()


console.log(lName)

/* let employees = [{
    id: 1,
    name: 'Bob',
    salary: 30000
}, {
    id: 2,
    name: 'Tim',
    salary: 20000
}, {
    id: 3,
    name: 'Rao',
    salary: 40000
}]

console.log(employees) */

let n = 16

function digital_root(n) {

    console.log(n)
    
  }
  