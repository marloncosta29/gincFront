import React from 'react'
import { Button } from '@material-ui/core'
import { gerarPdfBoleto } from '../../services/boleto'
import { gerarPdfBoletoCarne } from '../../services/boletoCarne'
import { BoletoCarne } from '../../interfaces/boleto.interface'
const boletoTeste = require('../../assets/json/boletoCarneTeste.json')


export default function Home() {
  const boletos: BoletoCarne[] = []
  for (let index = 0; index < 100; index++) {
    boletos.push(boletoTeste);
  }
  return <h1>
    <Button variant="contained" onClick={gerarPdfBoleto}>
      Gerar o Boletos
    </Button>
    <Button variant="contained" onClick={() => gerarPdfBoletoCarne(boletos, true)}>
      Gerar o Boleto Carne
    </Button>
  </h1>
}

// function toDataUrl(url: string, callback: any) {
//   var xhr = new XMLHttpRequest();
//   xhr.onload = function () {
//     var reader = new FileReader();
//     reader.onloadend = function () {
//       callback(reader.result);
//     }
//     reader.readAsDataURL(xhr.response);
//   };
//   xhr.open('GET', url);
//   xhr.responseType = 'blob';
//   xhr.send();
// }
