

function calValorFuturoCap(taxa, meses, capAtual){
    return ((1 + taxa) ** meses) * capAtual
}

function calValorAplicadoReg(taxa, meses, valorDepositoReg){
    return (1 + taxa) * (((1 + taxa) ** meses - 1) / taxa) * valorDepositoReg
}

function calValorFinanciamentoFix(taxa, meses, valorPrestado){
    return (((1 - (1 + taxa) ** -meses)) / taxa) * valorPrestado
}



function calcular() {


    let resposta = document.getElementById("resultados")

    let taxaPercentual = Number(document.getElementById("taxaPercentual").value)
    let meses = Number(document.getElementById("meses").value)
    let capAtual = Number(document.getElementById("capAtual").value)
    let valorDepositoReg = Number(document.getElementById("valorDepositoReg").value)
    let valorPrestado = Number(document.getElementById("valorPrestado").value)

    let taxa = taxaPercentual / 100.0

    

    let valorFinalCap = calValorFuturoCap(taxa, meses, capAtual)
    let valorFinalReg = calValorAplicadoReg(taxa, meses, valorDepositoReg)
    let valorFinanciadoFinal = calValorFinanciamentoFix(taxa, meses, valorPrestado)


    resposta.innerHTML = ``

    resposta.innerHTML += `Valor Futuro do Capital: R$ ${valorFinalCap.toFixed(2)} <br>`
    resposta.innerHTML += `Valor da Aplicação (Depósitos): R$ ${valorFinalReg.toFixed(2)} <br>`
    resposta.innerHTML += `Valor do Financiamento: R$ ${valorFinanciadoFinal.toFixed(2)} <br>`


    console.log(`Valor Futuro: ${valorFinalCap.toFixed(2)}`)
    console.log(`Valor Aplicação: ${valorFinalReg.toFixed(2)}`)
    console.log(`Valor Financiamento: ${valorFinanciadoFinal.toFixed(2)}`)
}