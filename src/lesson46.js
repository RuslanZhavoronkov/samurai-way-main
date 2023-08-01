
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
