import MeioDePagamento from "./MeioDePagamento"

export default class Especie extends MeioDePagamento {
  public constructor() {
    super("Especie")
  }

  public getName(): string {
    return this.name
  }
}
