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
}