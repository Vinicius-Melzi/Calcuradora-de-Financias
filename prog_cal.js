

function calValorFuturoCap(taxa, meses, capAtual){
    return ((1 + taxa) ** meses) * capAtual;
}

function calValorAplicadoReg(taxa, meses, valorDepositoReg){
    return (1 + taxa) * (((1 + taxa) ** meses - 1) / taxa) * valorDepositoReg;
}

function calValorFinanciamentoFix(taxa, meses, valorPrestado){
    return (((1 - (1 + taxa) ** -meses)) / taxa) * valorPrestado;
}



function calcular() {


    let resposta = document.getElementById("resultados");

    const taxaPercentual = Number(document.getElementById("inputTaxa").value);
    const meses = Number(document.getElementById("inputMeses").value);
    const capAtual = Number(document.getElementById("inputCapAtual").value);
    const valorDepositoReg = Number(document.getElementById("inputDepositoReg").value);
    const valorPrestado = Number(document.getElementById("inputValorPrestado").value);

    const taxa = taxaPercentual / 100.0;

    

    const valorFinalCap = calValorFuturoCap(taxa, meses, capAtual);
    const valorFinalReg = calValorAplicadoReg(taxa, meses, valorDepositoReg);
    const valorFinanciadoFinal = calValorFinanciamentoFix(taxa, meses, valorPrestado);


    resposta.innerHTML = ""; 

    resposta.innerHTML += `<p>Valor Futuro do Capital: R$ ${valorFinalCap.toFixed(2)}</p>`;
    resposta.innerHTML += `<p>Valor da Aplicação (Depósitos): R$ ${valorFinalReg.toFixed(2)}</p>`;
    resposta.innerHTML += `<p>Valor do Financiamento: R$ ${valorFinanciadoFinal.toFixed(2)}</p>`;


    console.log(`Valor Futuro: ${valorFinalCap.toFixed(2)}`);
    console.log(`Valor Aplicação: ${valorFinalReg.toFixed(2)}`);
    console.log(`Valor Financiamento: ${valorFinanciadoFinal.toFixed(2)}`);
}