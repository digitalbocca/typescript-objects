import Pix from "../Pix"
import Especie from "../Especie"
import Cartao from "../Cartao"

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
})
