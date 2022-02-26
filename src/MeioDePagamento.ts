export default abstract class MeioDePagamento {
  protected name: string

  protected constructor(name: string) {
    this.name = name
  }

  public abstract getName(): string
}