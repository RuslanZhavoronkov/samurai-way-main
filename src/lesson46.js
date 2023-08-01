
const a = {
    name: 'it-kamasutra.com',
    protocol: 'https',
    maxStudentsCount: 10,
    isOnline: true,
    students: ['ivan', 'andrey', 'farid'],
    classroom: {
        teatcher: {
            name: 'wew',
            age: 18
        }
    }
}

const b = { ...a, students: [...a.students], classroom: { ...a.classroom, teatcher: { ...a.classroom.teatcher } } }


b.students.push('Merry');
console.log(b.students);
console.log(a.students);

b.classroom.teatcher.name = 'Dmitry';
console.log(a);

console.log(a === b);
console.log(a.students === b.students);

//------------------------------------------------------------------------------------------------------------

const state = {
    name: 'it-kamasutra.com',
    age: 1,
    school: {
        address: 'Minsk',
    }
}

//поменяй возраст на два

const b = {...state, age: 2}

const chill = {...state, school: {...state.school}}

console.log (state.age);

//-------------------------------------------------------------------------------------

const firstSchool = {
    name: 'it-kamasutra.com',
    age: 1,
    school: {
        address: 'Minsk',
        director: {
            name: 'Andrey'
        }
    }
}

const secondSchool = {... firstSchool, school:{...firstSchool.school, director: {...firstSchool.school.director}}}

//-----------------------------------------------------------------------------------------------------------------------------

let firstArray = [{name: 'A'}, {name: 'B'}]

let secondArray = firstArray.map(el => ({...el}))

//-----------------------------------------------------------------------------------------------------------------------------

let threeArray = [{name: 'A', a:{}}, {name: 'B', a:{}}]

let fourArray = threeArray.map(el => ({...el, a: {...el.a}}))

//-----------------------------------------------------------------------------------------------------------------------------


const threeSchool = {
    name: 'it-kamasutra.com',
    age: 1,
    school: {
        students:[{}, {}, {}],
        address: 'Minsk',
        director: {
            name: 'Andrey'
        }
    }
}


const fourSchool = {...threeSchool, school: {...threeSchool.school, students:threeSchool.school.students.map(el => ({...el})), director: {...threeSchool.school.director}}}