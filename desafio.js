/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 **/
// function comecoDoJogo(){
//    if (confirm(`Boas Vindas ao jogo de BlackJack! \nQuer iniciar uma nova rodada ?`)=== true){
//       let cartasUsuario = [comprarCarta(), comprarCarta()]
//       let cartasPc = []
//       let resultadoUsuario
//       let cartasPc1 = comprarCarta()
//       let cartasPc2 = comprarCarta()
//       cartasPc.push(cartasPc1.texto)
//       cartasPc.push(cartasPc2.texto)
//       let cartasCompradas = ``
//       let calculoUsuario = calculoUsuario[0].valor + cartasUsuario[1].valor
//       let calculoPc = cartasPc1.valor + cartasPc2.valor

//       let compra = confirm(`Cartas do Usuario - ${cartasUsuario[0].texto} e ${cartasUsuario[1].texto}`)
//    }
// }





function comecoDoJogo() {
   if (confirm("Boas vindas ao jogo de BlackJack!\nQuer iniciar uma nova rodada?") === true) {
       let cartasUsuario = [comprarCarta(), comprarCarta()]
       let cartasPc = []
       let resultadoUsuario = []
       //cartasUsuario.push(cartasUsuario1.texto)
       //cartasUsuario.push(cartasUsuario2.texto)
       let cartasPc1 = comprarCarta()
       let cartasPc2 = comprarCarta()
       cartasPc.push(cartasPc1.texto)
       cartasPc.push(cartasPc2.texto)
let cartasCompradas = 0
       let calculoUsuario = cartasUsuario[0].valor + cartasUsuario[1].valor
       let calculoPc = cartasPc1.valor + cartasPc2.valor

       let compra = confirm(`Cartas do Usuário - ${cartasUsuario[0].texto} e ${cartasUsuario[1].texto} - ${calculoUsuario} \nCartas do Computador - ${cartasPc1.texto}\nDeseja comprar mais cartas ?`)

       let i = 0
       while (compra) {
           let novaCarta = comprarCarta()
           cartasUsuario.push(novaCarta)
calculoUsuario = 0
           for (let carta of cartasUsuario) {

               calculoUsuario += carta.valor
               resultadoUsuario.push(carta.texto)
           }
               
           
           if (calculoUsuario > 21) {
               break
           }
           
           for (let carta of resultadoUsuario) {
                   confirm(`Cartas do Usuário - ${carta.split(' e ')} e - total: ${calculoUsuario} \nCartas do Computador - ${cartasPc1.texto}\nDeseja co
mprar mais cartas ?`)
               }

           //console.log(`Nova Carta = ${cartasUsuario[0]}`)
           i ++
       }
       console.log(`Cartas do Usuário - ${cartasUsuario[0].texto} e ${cartasUsuario[1].texto} - ${calculoUsuario}`)
       console.log(`Cartas do Computador - ${cartasPc1.texto} e ${cartasPc2.texto} - ${calculoPc}`)
       if (calculoUsuario === 2 * 'A') {
           confirm('Fim de jogo')
           console.log('Fim de jogo')
       } else if (calculoUsuario > 21) {
         confirm('Computador ganhou , usuário estourou!')
         console.log('Computador ganhou , usuário estourou! ')
     } else if (calculoUsuario > calculoPc) {
         confirm('Usuário ganhou !')
         console.log('Usuário ganhou ! ')
     } else if (calculoUsuario < calculoPc) {
         confirm('Computador ganhou !')
         console.log('Computador ganhou ! ')
     } else if (calculoUsuario === calculoPc) {
         confirm('EMPATE')}