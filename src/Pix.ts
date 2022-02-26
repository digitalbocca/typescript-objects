import MeioDePagamento from "./MeioDePagamento"

export default class Pix extends MeioDePagamento {
  public constructor() {
    super("Pix")
  }

  public getName(): string {
    return this.name
  }
}
