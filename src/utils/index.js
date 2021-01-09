export const arraySearch = (array, keyword) => {
    return array.filter(value => {
        return value.name.toLowerCase().match(new RegExp(keyword, 'g')) ||
        value.address.toLowerCase().match(new RegExp(keyword, 'g')) ||
        value.gender.toLowerCase().match(new RegExp(keyword, 'g'))
    })
}