import Jornaleiro from '../Jornaleiro';
import Revista from '../Revista';

describe('Jornaleiro', () => {
  it('Deve criar um Jornaleiro', () => {
    const jornaleiro = new Jornaleiro('João')
    expect(jornaleiro).toBeDefined()
  })

  it('Deve adicionar uma revista', () => {
    const jornaleiro = new Jornaleiro('João')
    const revista = new Revista('Receitas', 10)
    jornaleiro.addRevista(revista)
    expect(jornaleiro.getRevistas()).toContain(revista)
  })
})
