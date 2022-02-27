import Revista from "./Revista"
import Carteira from "./Carteira"
import MeioDePagamento from "./MeioDePagamento"

export default class Jornaleiro {
  private nome: string
  private revistas: Revista[]
  private carteira: Carteira

  constructor(nome: string, carteira: Carteira) {
    this.nome = nome;
    this.revistas = []
    this.carteira = carteira
  }

  public addRevista(revista: Revista): void {
    this.revistas.push(revista)
  }

  public getRevistas(): Revista[] {
    return this.revistas
  }

  public getSaldo(): number {
    return this.carteira.getTotal()
  }

  public getNome(): string {
    return this.nome
  }

  public getMeiosDePagamento(): MeioDePagamento[] {
    return this.carteira.getMeiosDePagamento()
  }
}
