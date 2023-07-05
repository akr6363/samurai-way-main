export const required = (value: string) => {
    if(value) return undefined
    return 'Field is required'
}

export const maxLength30 = (value: string) => {
    if(value.length < 30) return undefined
    return 'Max Length is 30 symbols'
}

export const maxLengthCreator = (maxLength: number) => (value: string) => {
    if(value.length < maxLength) return undefined
    return `Max Length is ${maxLength} symbols`
}