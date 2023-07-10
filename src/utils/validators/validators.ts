export const required = (value: string) => {
    if(value) return undefined
    return 'Field is required'
}

export const email = (value: string) => {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    if((regexEmail.test(value))) return undefined
    return 'Incorrect email'
}


export const maxLengthCreator = (maxLength: number) => (value: string) => {
    if(value.length < maxLength) return undefined
    return `Max Length is ${maxLength} symbols`
}