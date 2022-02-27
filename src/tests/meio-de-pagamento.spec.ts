import Pix from "../Pix"
import Especie from "../Especie"
import Cartao from "../Cartao"
import Jornaleiro from "../Jornaleiro"
import Leitor from "../Leitor"
import Carteira from "../Carteira"

describe('MeioDePagamento', () => {
  it('Deve criar um meio de pagamento Pix', () => {
    const pix = new Pix(100)
    expect(pix.getName()).toBe('Pix')
    expect(pix.getValue()).toBe(100)
  })

  it('Deve criar um meio de pagamento Especie', () => {
    const especie = new Especie(200)
    expect(especie.getName()).toBe('Especie')
    expect(especie.getValue()).toBe(200)
  })

  it('Deve criar um meio de pagamento Cartao', () => {
    const cartao = new Cartao(300)
    expect(cartao.getName()).toBe('Cartão')
    expect(cartao.getValue()).toBe(300)
  })

  it('Deve pagar um meio de pagamento Pix', () => {
    const carteiraJornaleiro = new Carteira()
    carteiraJornaleiro.addMeioDePagamento(new Pix(100))
    const jornaleiro = new Jornaleiro('Jornaleiro', carteiraJornaleiro)
    
    const carteiraLeitor = new Carteira()
    carteiraLeitor.addMeioDePagamento(new Pix(100))
    const leitor = new Leitor('Leitor', carteiraLeitor)

    const meioDeRecebimento = jornaleiro.getMeiosDePagamento()[0]
    const meioDePagamento = leitor.getMeiosDePagamento()[0]

    meioDePagamento.pagar(50, meioDeRecebimento)

    expect(meioDePagamento.getValue()).toBe(50)
    expect(meioDeRecebimento.getValue()).toBe(150)
  })
})
