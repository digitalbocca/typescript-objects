import Jornaleiro from '../Jornaleiro';

describe('Jornaleiro', () => {
  it('Deve criar um Jornaleiro', () => {
    const jornaleiro = new Jornaleiro('João', 30)
    expect(jornaleiro).toBeDefined()
  })
})
