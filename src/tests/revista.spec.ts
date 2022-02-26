import Revista from '../Revista';

describe('Revista', () => {
  it('Deve criar uma Revista', () => {
    const revista = new Revista('Receitas', 10)
    expect(revista).toBeDefined()
  })
})
