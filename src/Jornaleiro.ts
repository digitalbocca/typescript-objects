import Revista from "./Revista"

export default class Jornaleiro {
  private nome: string
  private revistas: Revista[]

  constructor(nome: string) {
    this.nome = nome;
    this.revistas = []
  }

  public addRevista(revista: Revista): void {
    this.revistas.push(revista)
  }

  public getRevistas(): Revista[] {
    return this.revistas
  }
}
