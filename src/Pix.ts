import MeioDePagamento from "./MeioDePagamento"

export default class Pix extends MeioDePagamento {
  public constructor(value: number) {
    super("Pix", value)
  }
}
