import JsPdf from 'jspdf'
import JsBarcode from 'jsbarcode'
import _ from 'lodash'
import { BoletoCarne } from '../interfaces/boleto.interface'

//para gerar a linha pontilhada - from Stackoverflow o/
function dottedLine(doc: any, xFrom: number, yFrom: number, xTo: number, yTo: number, segmentLength: number) {
  // Calculate line length (c)
  var a = Math.abs(xTo - xFrom);
  var b = Math.abs(yTo - yFrom);
  var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

  // Make sure we have an odd number of line segments (drawn or blank)
  // to fit it nicely
  var fractions = c / segmentLength;
  var adjustedSegmentLength = (Math.floor(fractions) % 2 === 0) ? (c / Math.ceil(fractions)) : (c / Math.floor(fractions));

  // Calculate x, y deltas per segment
  var deltaX = adjustedSegmentLength * (a / c);
  var deltaY = adjustedSegmentLength * (b / c);

  var curX = xFrom, curY = yFrom;
  while (curX <= xTo && curY <= yTo) {
    doc.line(curX, curY, curX + deltaX, curY + deltaY);
    curX += 2 * deltaX;
    curY += 2 * deltaY;
  }
}

function textToBase64Barcode(text: string) {
  const canvas = document.createElement("canvas");
  JsBarcode(canvas, text, { format: 'itf', displayValue: false });
  return canvas.toDataURL("image/png");
}

export function gerarPdfBoletoCarne(boletos: BoletoCarne[], salvaPdf: boolean): string {
  const options = {
    orientation: 'p',
    unit: 'mm',
    format: 'a4',
  }
  const documento = new JsPdf(options);
  console.log(documento.getFontList())
  documento.setFont('Times')
  //geração dos carnes
  let y = 10
  const boletosSeparados = _.chunk(boletos, 3)
  console.log(boletosSeparados);
  boletosSeparados.map(boletos => {
    let y = 10;
    boletos.map(boleto => {
      console.log(boleto)
      //primeiro quadrante
      documento.setFontSize(10);
      documento.setFontStyle('bold')
      documento.text('Recibo do Pagador', 10, y + 5);
      documento.rect(10, y + 8, 18, 5)
      documento.rect(28, y + 8, 22, 5)
      documento.rect(10, y + 13, 40, 5)
      documento.rect(10, y + 18, 40, 5)
      documento.rect(10, y + 23, 40, 5)
      documento.rect(10, y + 28, 40, 5)
      documento.rect(10, y + 33, 40, 5)
      documento.rect(10, y + 38, 40, 5)
      documento.rect(10, y + 43, 40, 5)
      documento.rect(10, y + 48, 40, 5)
      documento.rect(10, y + 53, 40, 10)
      //segundo quadrante
      documento.rect(52, y + 8, 118, 5)
      documento.rect(170, y + 8, 18, 5)
      documento.rect(188, y + 8, 17, 5)
      documento.rect(52, y + 13, 118, 5)
      documento.rect(170, y + 13, 35, 5)

      documento.rect(52, y + 18, 26, 5)
      documento.rect(78, y + 18, 19, 5)
      documento.rect(97, y + 18, 18, 5)
      documento.rect(115, y + 18, 18, 5)
      documento.rect(133, y + 18, 37, 5)
      documento.rect(170, y + 18, 35, 5)

      documento.rect(52, y + 23, 26, 5)
      documento.rect(78, y + 23, 19, 5)
      documento.rect(97, y + 23, 18, 5)
      documento.rect(115, y + 23, 18, 5)
      documento.rect(133, y + 23, 37, 5)
      documento.rect(170, y + 23, 35, 5)

      documento.rect(52, y + 28, 118, 25)
      documento.rect(170, y + 28, 35, 5)
      documento.rect(170, y + 33, 35, 5)
      documento.rect(170, y + 38, 35, 5)
      documento.rect(170, y + 43, 35, 5)
      documento.rect(170, y + 48, 35, 5)

      documento.rect(52, y + 53, 153, 10)

      documento.line(75, y + 8, 75, y)
      documento.line(88, y + 8, 88, y)

      documento.setFontSize(5)
      documento.setFontStyle('normal')
      documento.text('Parcela', 11, y + 9.5)
      documento.text('Vencimento', 29, y + 9.5)

      documento.text('Agência/Código Beneficiario', 11, y + 14.5)
      documento.text('Nosso Numero', 11, y + 19.5)
      documento.text('(=) Valor do Documento', 11, y + 24.5)
      documento.text('(-) Desconto', 11, y + 29.5)
      documento.text('(-) Outras Deduções', 11, y + 34.5)
      documento.text('(+) Mora/Multa/Juros', 11, y + 39.5)
      documento.text('(+) Outros Acréscimos', 11, y + 44.5)
      documento.text('(=) Valor Cobrado', 11, y + 49.5)
      documento.text('Pagador', 11, y + 54.5)

      documento.text('Local de Pagamento', 53, y + 9.5)
      documento.text('Parcela', 171, y + 9.5)
      documento.text('Vencimento', 189, y + 9.5)

      documento.text('Beneficiario', 53, y + 14.5)
      documento.text('Agência/Código do Beneficiario', 171, y + 14.5)

      documento.text('Data do Documento', 65, y + 19.5, 'center')
      documento.text('N° do Documento', 88, y + 19.5, 'center')
      documento.text('Espécie Doc', 105, y + 19.5, 'center')
      documento.text('Aceite', 123, y + 19.5, 'center')
      documento.text('Data do Processamento', 150, y + 19.5, 'center')
      documento.text('Nosso Numero', 171, y + 19.5)

      documento.text('Uso do banco', 65, y + 24.5, 'center')
      documento.text('Carteira', 88, y + 24.5, 'center')
      documento.text('Moeda', 105, y + 24.5, 'center')
      documento.text('Quantidade', 123, y + 24.5, 'center')
      documento.text('Valor', 150, y + 24.5, 'center')
      documento.text('(-) Valor do documento', 171, y + 24.5)

      documento.text('Instruções', 53, y + 29.5)
      documento.text('(-) Desconto', 171, y + 29.5)
      documento.text('(-) Outras Deduções/Abatimento', 171, y + 34.5)
      documento.text('(+) Mora/Multa/Juros', 171, y + 39.5)
      documento.text('(+) Outros Acréscimos', 171, y + 44.5)
      documento.text('(=) Valor Cobrado', 171, y + 49.5)

      documento.text('Pagador', 53, y + 54.5)

      documento.text('Nome do Beneficiario', 12, y + 67)
      documento.text('Autenticação Mecânica/\nFicha de Conpensação', 205, y + 67, 'right')

      documento.addImage(boleto.logoBanco, 51, y, 22, 7)
      documento.setFontSize(12);
      documento.setFontStyle('bold')
      documento.text(boleto.codigoDoBanco, 81.5, y + 5, 'center')
      documento.text(boleto.linhaDigitavel, 200, y + 5, 'right')
      documento.setFontSize(7);
      documento.setFontStyle('normal')
      documento.text(boleto.vencimento, 47, y + 12, 'right')
      documento.setFontStyle('bold')
      documento.text(boleto.agenciaCodigoBeneficiario, 47, y + 17, 'right')
      documento.text(boleto.nossoNumero, 47, y + 22, 'right')
      const valor = boleto.valorDocumento.toFixed(2).replace('.', ',')
      documento.text(valor, 47, y + 27, 'right')
      documento.setFontSize(5);
      documento.text(documento.splitTextToSize(boleto.pagador.toUpperCase(), 34), 11, y + 57)
      documento.setFontSize(7);
      documento.text(boleto.localDePagamento, 53, y + 12, { maxWidth: 110 })
      documento.text(boleto.vencimento, 204, y + 12, { align: 'right' })

      documento.text(boleto.beneficiario, 53, y + 17, { maxWidth: 110 })
      documento.text(boleto.agenciaCodigoBeneficiario, 204, y + 17, { align: 'right' })

      documento.text(boleto.dataDoDocumento, 65, y + 22, { align: 'center' })
      documento.text(boleto.numeroDocumento, 88, y + 22, { align: 'center' })
      documento.text(boleto.especie, 105, y + 22, { align: 'center' })
      documento.text(boleto.aceite, 123, y + 22, { align: 'center' })
      documento.text(boleto.dataProcessamento, 150, y + 22, { align: 'center' })
      documento.text(boleto.nossoNumero, 204, y + 22, { align: 'right' })

      documento.text(boleto.carteira, 87.5, y + 27, { align: 'center' })
      documento.text(boleto.especieDocumento, 105, y + 27, { align: 'center' })
      documento.text(boleto.quantidade, 123, y + 27, { align: 'center' })
      documento.text(boleto.valor, 150, y + 27, { align: 'center' })
      documento.text(boleto.valorDocumento.toFixed(2), 204, y + 27, { align: 'right' })
      documento.text(documento.splitTextToSize(boleto.instrucaoDoSacado, 110), 53, y + 32)
      documento.text(boleto.nomeSacadoCompleto, 60, y + 56)
      documento.setFontSize(6)
      documento.text(boleto.enderecoSacadoCarne || '', 60, y + 59)
      documento.text(boleto.enderecoSacadoCont || '', 60, y + 62)
      documento.text(documento.splitTextToSize(`Bairro: ${boleto.bairroSacado || ''}`, 60), 142, y + 59)
      documento.setFontSize(7)
      documento.text(documento.splitTextToSize(boleto.beneficiario, 38), 12, y + 70)



      const textTeste = textToBase64Barcode(boleto.codigoDeBarras)
      documento.addImage(textTeste, 'JPEG', 53, y + 65, 103, 13)




      dottedLine(documento, 10, y + 85, 200, y + 85, 1)

      y = y + 95
    })
    documento.addPage()
  })
  //verifica se salva o PDF ou retorna o Base64
  if (salvaPdf) {
    documento.save('boletoCarbe.pdf')
    return 'ok'
  } else {
    return documento.output('dataUri')
  }


}

