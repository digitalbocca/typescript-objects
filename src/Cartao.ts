import MeioDePagamento from "./MeioDePagamento"

export default class Cartao extends MeioDePagamento {
  public constructor() {
    super("Cartão")
  }

  public getName(): string {
    return this.name
  }
}
