export default abstract class MeioDePagamento {
  protected name: string
  protected value: number

  protected constructor(name: string, value: number) {
    this.name = name
    this.value = value
  }

  public getName(): string {
    return this.name
  }

  public getValue(): number {
    return this.value
  }

  public pagar(valor: number, recebedor: MeioDePagamento): void {
    console.log(`Pagando ${valor} com ${this.name}`)
    recebedor.receber(valor)
    this.value = this.value - valor
  }

  public receber(valor: number): void {
    console.log(`Recebendo ${valor} com ${this.name}`)
    this.value = this.value + valor
  }
}