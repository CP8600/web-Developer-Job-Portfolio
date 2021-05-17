/* 

function digital_root(n,total) {
 n = 16


 return total - n
 
   /*  let i = 0
    console.log(n)
    for (i = 0; i < n.length; i++) {
        const a = n[i];


    }
    let a = n.toString()

    a.split('')
    a[i].red
    console.log(a[i]) 
}
digital_root() */

function digital_root(n) {
    n = 456
    let result = 0;
    String(n).split('').map(num => {
        result += Number(num);
    });
console.log(result)
    return result > 9 ? digital_root(result) : result;

}
digital_root()

