import MeioDePagamento from "./MeioDePagamento"

export default class Carteira {
  private meiosDePagamento: MeioDePagamento[]

  public constructor() {
    this.meiosDePagamento = []
  }

  public addMeioDePagamento(meioDePagamento: MeioDePagamento): void {
    this.meiosDePagamento.push(meioDePagamento)
  }

  public getMeiosDePagamento(): MeioDePagamento[] {
    return this.meiosDePagamento
  }

  public getTotal(): number {
    return this.meiosDePagamento.reduce((total, meioDePagamento) => {
      return total + meioDePagamento.getValue()
    }, 0)
  }
}
