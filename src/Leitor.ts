import Carteira from './Carteira'
import MeioDePagamento from './MeioDePagamento'

export default class Leitor {
  private nome: string
  private carteira: Carteira

  constructor(nome: string, carteira: Carteira) {
    this.nome = nome
    this.carteira = carteira
  }

  public getNome(): string {
    return this.nome
  }

  public getSaldo(): number {
    return this.carteira.getTotal()
  }

  public getMeiosDePagamento(): MeioDePagamento[] {
    return this.carteira.getMeiosDePagamento()
  }
}
