function checkInString(text, term) {

    let min=text.toLowerCase()
    let max=text.toUpperCase()
     
    return min.includes(term) || max.includes(term)

}
checkInString("Nicolas", "ana")