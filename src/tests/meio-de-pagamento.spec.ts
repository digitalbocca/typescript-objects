import Pix from "../Pix"
import Especie from "../Especie"
import Cartao from "../Cartao"

describe('MeioDePagamento', () => {
  it('Deve criar um meio de pagamento Pix', () => {
    const pix = new Pix()
    expect(pix.getName()).toBe('Pix')
  })

  it('Deve criar um meio de pagamento Especie', () => {
    const especie = new Especie()
    expect(especie.getName()).toBe('Especie')
  })

  it('Deve criar um meio de pagamento Cartao', () => {
    const cartao = new Cartao()
    expect(cartao.getName()).toBe('Cartão')
  })
})
