import JsPdf from 'jspdf'
import JsBarcode from 'jsbarcode'

function textToBase64Barcode(text: string) {
  const canvas = document.createElement("canvas");
  JsBarcode(canvas, text, { format: 'itf', displayValue: false });
  return canvas.toDataURL("image/png");
}
export const gerarPdfBoleto = () => {
  const boletoTeste = require('../assets/json/boletoTeste.json')
  const documento = new JsPdf({
    orientation: 'p',
    unit: 'mm',
    format: 'a4',
  });
  documento.setFont('Times');
  for (let index = 0; index < 2; index++) {
    console.log(index)
    documento.setFillColor(50, 50, 50);
    //primeira parte
    documento.rect(20, 10, 170, 5, 'S');
    documento.rect(20, 15, 170, 75, 'S');
    //recibo do pagador
    documento.line(20, 110, 190, 110)
    documento.line(65, 103, 65, 110)
    documento.line(85, 103, 85, 110)
    //Local Pagamento
    documento.rect(20, 111, 130, 5, 'S')
    //Vencimento
    documento.rect(150, 111, 40, 5, 'S')
    //Beneficiario
    documento.rect(20, 116, 130, 5, 'S')
    //Agencia
    documento.rect(150, 116, 40, 5, 'S')

    //Data Documento e linha
    documento.rect(20, 121, 25, 5, 'S')
    documento.rect(45, 121, 40, 5, 'S')
    documento.rect(85, 121, 20, 5, 'S')
    documento.rect(105, 121, 10, 5, 'S')
    documento.rect(115, 121, 35, 5, 'S')
    documento.rect(150, 121, 40, 5, 'S')
    //Uso banco e llinha
    documento.rect(20, 126, 25, 5, 'S')
    documento.rect(45, 126, 40, 5, 'S')
    documento.rect(85, 126, 20, 5, 'S')
    documento.rect(105, 126, 10, 5, 'S')
    documento.rect(115, 126, 35, 5, 'S')
    documento.rect(150, 126, 40, 5, 'S')
    //instrucoes e linhas
    documento.rect(20, 131, 130, 25, 'S');
    documento.rect(150, 131, 40, 5, 'S')
    documento.rect(150, 136, 40, 5, 'S')
    documento.rect(150, 141, 40, 5, 'S')
    documento.rect(150, 146, 40, 5, 'S')
    documento.rect(150, 151, 40, 5, 'S')
    documento.rect(20, 156, 170, 15, 'S');

    //reicibo 2
    documento.line(20, 200, 190, 200)
    documento.line(65, 193, 65, 200)
    documento.line(85, 193, 85, 200)
    documento.rect(20, 201, 130, 5, 'S')
    documento.rect(150, 201, 40, 5, 'S')

    documento.rect(20, 206, 130, 5, 'S')
    documento.rect(150, 206, 40, 5, 'S')

    documento.rect(20, 211, 25, 5, 'S')
    documento.rect(45, 211, 40, 5, 'S')
    documento.rect(85, 211, 20, 5, 'S')
    documento.rect(105, 211, 10, 5, 'S')
    documento.rect(115, 211, 35, 5, 'S')
    documento.rect(150, 211, 40, 5, 'S')

    documento.rect(20, 216, 25, 5, 'S')
    documento.rect(45, 216, 40, 5, 'S')
    documento.rect(85, 216, 20, 5, 'S')
    documento.rect(105, 216, 10, 5, 'S')
    documento.rect(115, 216, 35, 5, 'S')
    documento.rect(150, 216, 40, 5, 'S')

    documento.rect(20, 221, 130, 25, 'S');
    documento.rect(150, 221, 40, 5, 'S')
    documento.rect(150, 226, 40, 5, 'S')
    documento.rect(150, 231, 40, 5, 'S')
    documento.rect(150, 236, 40, 5, 'S')
    documento.rect(150, 241, 40, 5, 'S')
    documento.rect(20, 246, 170, 15, 'S');

    //Textos do primeiro quadro
    documento.setFontSize(8);
    documento.setTextColor(255, 255, 255);
    documento.setFontStyle("normal");
    documento.setTextColor(0, 0, 0);
    documento.setFontType('bold');
    documento.text("INFORMATIVO", 95, 13);
    documento.text('RECIBO DO PAGADOR', 156, 106)

    documento.setFontSize(5);
    // documento.setFontType('normal');
    documento.text('Local de Pagamento', 21, 112.5);
    documento.text('Vencimento', 151, 112.5);

    documento.text('Beneficiário', 21, 117.5);
    documento.text('Agência/Código Beneficiario', 151, 117.5);

    documento.text('Data do Documento', 21, 122.5);
    documento.text('Numero do documento', 46, 122.5);
    documento.text('Espécie Documento', 86, 122.5);
    documento.text('Aceite', 106, 122.5);
    documento.text('Data de Processamento', 116, 122.5);
    documento.text('Numero do documento', 151, 122.5);

    documento.text('Uso do Banco', 21, 127.5);
    documento.text('Carteira', 46, 127.5);
    documento.text('Espécie', 86, 127.5);
    documento.text('Quantidade', 106, 127.5);
    documento.text('Valor', 116, 127.5);
    documento.text('(=) Valor do documento', 151, 127.5);

    documento.text('Instruções(Todas as informaçoes deste bloqueto são de exclusiva responsabilidade do beneficiário)', 21, 132.5);
    documento.text('(-) Desconto/Abatimento', 151, 132.5);
    documento.text('(-) Outras Deduções', 151, 137.5);
    documento.text('(+) Juros / Multa', 151, 142.5);
    documento.text('(+) Outros Acrescimos', 151, 147.5);
    documento.text('(=) Valor do cobrado', 151, 152.5);

    documento.text('Pagador:', 21, 157.5);
    documento.text('Sacador/Avalista:', 21, 170);
    documento.text('Código de baixa:', 155, 170);

    documento.text('Autenticação Mecânica - FICHA DE COMPENSAÇÂO', 147, 175);

    //Textos do Segundo quadro
    documento.text('Local de Pagamento', 21, 202.5);
    documento.text('Vencimento', 151, 202.5);

    documento.text('Beneficiário', 21, 207.5);
    documento.text('Agência/Código Beneficiario', 151, 207.5);

    documento.text('Data do Documento', 21, 212.5);
    documento.text('Numero do documento', 46, 212.5);
    documento.text('Espécie Documento', 86, 212.5);
    documento.text('Aceite', 106, 212.5);
    documento.text('Data de Processamento', 116, 212.5);
    documento.text('Numero do documento', 151, 212.5);

    documento.text('Uso do Banco', 21, 217.5);
    documento.text('Carteira', 46, 217.5);
    documento.text('Espécie', 86, 217.5);
    documento.text('Quantidade', 106, 217.5);
    documento.text('Valor', 116, 217.5);
    documento.text('(=) Valor do documento', 151, 217.5);

    documento.text('Instruções(Todas as informaçoes deste bloqueto são de exclusiva responsabilidade do beneficiário)', 21, 222.5);
    documento.text('(-) Desconto/Abatimento', 151, 222.5);
    documento.text('(-) Outras Deduções', 151, 227.5);
    documento.text('(+) Juros / Multa', 151, 232.5);
    documento.text('(+) Outros Acrescimos', 151, 237.5);
    documento.text('(=) Valor do cobrado', 151, 242.5);

    documento.text('Pagador:', 21, 247.5);
    documento.text('Sacador/Avalista:', 21, 260);
    documento.text('Código de baixa:', 155, 260);

    documento.text('Autenticação Mecânica - FICHA DE COMPENSAÇÂO', 147, 265);

    documento.setFontSize(18);
    documento.setFontStyle('bold')
    documento.text(boletoTeste.codigoDoBanco, 75, 108, 'center')//codigo do banco 
    documento.text(boletoTeste.codigoDoBanco, 75, 198, 'center')//codigo do banco 2 quadro
    const localPagamento = boletoTeste.localDePagamento.toUpperCase()
    documento.setFontSize(7);
    documento.text(localPagamento, 25, 115)//Local do Pagamento
    documento.text(boletoTeste.vencimento, 188, 115, 'right')//Vencimento
    documento.setFontType('normal')
    const beneficiario = boletoTeste.beneficiario.toUpperCase()
    documento.text(beneficiario, 25, 120)//Beneficiario
    documento.setFontStyle('bold')
    documento.text(boletoTeste.agenciaCodigoBeneficiario, 188, 120, 'right')//Agencia Codigo Beneficiario
    documento.text(boletoTeste.dataDoDocumento, 25, 125)//Data do documento
    documento.text(boletoTeste.numeroDocumento, 47, 125)//Numero do Documento
    documento.text(boletoTeste.especieDocumento, 87, 125)//Especie do documento
    documento.text(boletoTeste.aceite, 110, 125, 'center')//Aceite
    documento.text(boletoTeste.dataProcessamento, 117, 125)//Data Processamento
    documento.text(boletoTeste.nossoNumero, 188, 125, 'right')//Nosso Numero

    documento.text(boletoTeste.carteira, 47, 130)//Carteira
    documento.text(boletoTeste.especie, 87, 130)//Especie
    documento.text(boletoTeste.quantidade, 110, 130, 'center')//Quantidade
    documento.text(boletoTeste.valor, 117, 130)//Valor

    const valor = (boletoTeste.valorDocumento).toFixed(2).replace('.', ',')
    documento.text(valor, 188, 130, 'right')//Valor Do Documento

    const splitText = documento.splitTextToSize(boletoTeste.instrucaoDoSacado, 120)
    documento.text(splitText, 25, 136)
    documento.text(boletoTeste.pagador, 30, 160)
    documento.text(boletoTeste.enderecoSacado, 30, 163)

    documento.setFontSize(11.5);
    documento.text(boletoTeste.linhaDigitavel, 190, 197, 'right')
    documento.setFontSize(7);
    documento.text(localPagamento, 25, 205)//Local do Pagamento
    documento.text(boletoTeste.vencimento, 188, 205, 'right')//Vencimento
    documento.text(beneficiario, 25, 210)//Beneficiario
    documento.setFontStyle('bold')
    documento.text(boletoTeste.agenciaCodigoBeneficiario, 188, 210, 'right')//Agencia Codigo Beneficiario
    documento.text(boletoTeste.dataDoDocumento, 25, 215)//Data do documento
    documento.text(boletoTeste.numeroDocumento, 47, 215)//Numero do Documento
    documento.text(boletoTeste.especieDocumento, 87, 215)//Especie do documento
    documento.text(boletoTeste.aceite, 110, 125, 'center')//Aceite
    documento.text(boletoTeste.dataProcessamento, 117, 215)//Data Processamento
    documento.text(boletoTeste.nossoNumero, 188, 215, 'right')//Nosso Numero
    documento.text(boletoTeste.carteira, 47, 220)//Carteira
    documento.text(boletoTeste.especie, 87, 220)//Especie
    documento.text(boletoTeste.quantidade, 110, 220, 'center')//Quantidade
    documento.text(boletoTeste.valor, 117, 220)//Valor

    const valorB2 = (boletoTeste.valorDocumento).toFixed(2).replace('.', ',')
    documento.text(valorB2, 188, 220, 'right')//Valor Do Documento

    const instrucaoDoSacado = documento.splitTextToSize(boletoTeste.instrucaoDoSacado, 120)
    documento.text(instrucaoDoSacado, 25, 227)

    documento.text(boletoTeste.pagador, 30, 250)
    documento.text(boletoTeste.enderecoSacado, 30, 253)

    documento.addImage(boletoTeste.logoBanco, 20, 189.5, 42, 9)

    const textTeste = textToBase64Barcode(boletoTeste.codigoDeBarras)
    documento.addImage(textTeste, 'JPEG', 20, 265, 103, 13)
    documento.addPage();

  }
  // documento.output("dataurlnewwindow");
  documento.save('teste.pdf')
} 