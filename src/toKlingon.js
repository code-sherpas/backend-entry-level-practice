function toKlingon(spanish) {
    if(spanish == "hola") {
        return "nuqneH"
    } else if(spanish == "adiós") {
        return "maj"
    } else if(spanish == "personas") {
        return "nuv"
    } else if(spanish == "casa"){
        return "juH qach"
    } else if(spanish == "porche"){
        return "tor"
    } else {
        return ""
    }
}

module.exports = toKlingon;