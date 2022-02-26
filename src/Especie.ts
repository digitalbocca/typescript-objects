import MeioDePagamento from "./MeioDePagamento"

export default class Especie extends MeioDePagamento {
  public constructor(value: number) {
    super("Especie", value)
  }
}
