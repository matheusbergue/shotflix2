openLink = (element, elementLink) => {
    for (let i = 0; i < element.length; i++){
        element[i].addEventListener('click', () => {
            elementLink[i].click()
        })
    }
}

converter = (minutos) => {
    var horas = Math.floor(minutos / 60);
    var min = minutos % 60;
    var textoHoras = (`00${horas}`).slice(-2);
    var textoMinutos = (`00${min}`).slice(-2);
    return `${textoHoras }h ${textoMinutos}m`;
}