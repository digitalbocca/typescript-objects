import Jornaleiro from '../Jornaleiro';
import Revista from '../Revista';
import Carteira from '../Carteira';
import Pix from '../Pix';

describe('Jornaleiro', () => {
  it('Deve criar um Jornaleiro', () => {
    const carteira = new Carteira()
    const pix = new Pix(100)
    carteira.addMeioDePagamento(pix)
    const jornaleiro = new Jornaleiro('João', carteira)
    expect(jornaleiro).toBeDefined()
  })

  it('Deve mostrar o nome do Jornaleiro', () => {
    const carteira = new Carteira()
    const pix = new Pix(100)
    carteira.addMeioDePagamento(pix)
    const jornaleiro = new Jornaleiro('João', carteira)
    expect(jornaleiro.getNome()).toBe('João')
  })

  it('Deve adicionar uma revista', () => {
    const carteira = new Carteira()
    const pix = new Pix(100)
    carteira.addMeioDePagamento(pix)
    const jornaleiro = new Jornaleiro('João', carteira)
    const revista = new Revista('Receitas', 10)
    jornaleiro.addRevista(revista)
    expect(jornaleiro.getRevistas()).toContain(revista)
  })

  it('Deve retornar o saldo da carteira', () => {
    const carteira = new Carteira()
    const pix = new Pix(100)
    carteira.addMeioDePagamento(pix)
    const jornaleiro = new Jornaleiro('João', carteira)
    expect(jornaleiro.getSaldo()).toBe(100)
  })

  it('Deve retornar os meios de pagamento aceitos', () => {
    const carteira = new Carteira()
    const pix = new Pix(100)
    carteira.addMeioDePagamento(pix)
    const jornaleiro = new Jornaleiro('João', carteira)
    expect(jornaleiro.getMeiosDePagamento()).toContain(pix)
  })
})
