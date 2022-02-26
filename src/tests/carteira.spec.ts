import Carteira from "../Carteira"
import Pix from "../Pix"
import Especie from "../Especie"
import Cartao from "../Cartao"

describe('Carteira', () => {
  it('Deve criar uma carteira', () => {
    const carteira = new Carteira()
    expect(carteira).toBeDefined()
  })

  it('Deve adicionar um meio de pagamento', () => {
    const carteira = new Carteira()
    const pix = new Pix(100)
    carteira.addMeioDePagamento(pix)
    expect(carteira.getMeiosDePagamento().length).toBe(1)
  })

  it('Deve retornar o total da carteira', () => {
    const carteira = new Carteira()
    const pix = new Pix(100)
    carteira.addMeioDePagamento(pix)
    expect(carteira.getTotal()).toBe(100)
  })

  it('Deve retornar uma lista com os meios de pagamento', () => {
    const carteira = new Carteira()

    const pix = new Pix(100)
    carteira.addMeioDePagamento(pix)

    const especie = new Especie(200)
    carteira.addMeioDePagamento(especie)

    const cartao = new Cartao(300)
    carteira.addMeioDePagamento(cartao)

    expect(carteira.getMeiosDePagamento().length).toBe(3)
    expect(carteira.getMeiosDePagamento()[0].getName()).toBe('Pix')
    expect(carteira.getMeiosDePagamento()[1].getName()).toBe('Especie')
    expect(carteira.getMeiosDePagamento()[2].getName()).toBe('Cartão')
  })
})
