import Leitor from '../Leitor'
import Carteira from '../Carteira'
import Pix from '../Pix'

describe('Leitor', () => {
  it('Deve criar um Leitor', () => {
    const carteira = new Carteira()
    const pix = new Pix(100)
    carteira.addMeioDePagamento(pix)
    const leitor = new Leitor('João', carteira)
    expect(leitor).toBeDefined()
  })

  it('Deve mostrar o nome do Leitor', () => {
    const carteira = new Carteira()
    const pix = new Pix(100)
    carteira.addMeioDePagamento(pix)
    const leitor = new Leitor('João', carteira)
    expect(leitor.getNome()).toBe('João')
  })

  it('Deve retornar o saldo da carteira', () => {
    const carteira = new Carteira()
    const pix = new Pix(100)
    carteira.addMeioDePagamento(pix)
    const leitor = new Leitor('João', carteira)
    expect(leitor.getSaldo()).toBe(100)
  })

  it('Deve retornar os meios de pagamento aceitos', () => {
    const carteira = new Carteira()
    const pix = new Pix(100)
    carteira.addMeioDePagamento(pix)
    const leitor = new Leitor('João', carteira)
    expect(leitor.getMeiosDePagamento()).toContain(pix)
  })
})