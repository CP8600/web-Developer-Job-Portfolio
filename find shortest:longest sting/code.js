'use strict'


var arr = ['rewqrewq', 'fdsafdsafdsafdasfdsa', 'asdfasdfasdf', 'asdfjjkl;asdfjklasdfjkl;'];

console.log(
    arr.reduce(function (s1, s2) {
        /* finds smallest string change <= to >= to find longest string*/
        return s1.length <= s2.length ? s1 : s2
    })
)