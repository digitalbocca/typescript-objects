import MeioDePagamento from "./MeioDePagamento"

export default class Cartao extends MeioDePagamento {
  public constructor(value: number) {
    super("Cartão", value)
  }
}
