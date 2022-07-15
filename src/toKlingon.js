function toKlingon(spanish) {
    if(spanish == "hola") {
        return "nuqneH"
    } else if(spanish == "adiós") {
        return "maj"
    } else if(spanish == "casa"){
        return "juH qach"
    } else {
        return ""
    }
}

module.exports = toKlingon;