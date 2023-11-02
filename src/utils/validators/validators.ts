

export const required = (value: string) => {
    if (value) {
        return undefined
    }
    return 'Field is required' // если поле инпут пустое - выведи ошибку
}

export const maxLengthCreator = ( maxLength: number) => (value: string) => {   
if (value.length > maxLength) {
    return `Max length is ${maxLength} symbols`
}
}

 