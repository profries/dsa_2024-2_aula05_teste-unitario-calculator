const calculadora = require("./calculator")


test('soma de 10 e 20 igual a 30', () => {
    expect(calculadora.somar(10, 20)).toBe(30)
})

test('subtracao de 20 e 10 igual a 10', () => {
    expect(calculadora.subtrair(20, 10)).toBe(10)
})

test('multiplicacao de 5 e 10 igual a 50', () => {
    expect(calculadora.multiplicar(5, 10)).toBe(50)
})

//Outro cenário para múltiplicação:
test('multiplicacao de 5 e 0 igual a 0', () => {
    expect(calculadora.multiplicar(5, 0)).toBe(0)
})

test('divisão de 10 por 2 é igual a 5', () => {
    expect(calculadora.dividir(10, 2)).toBe(5)
})

//cenário de exceção para divisão (divisor = 0)
test('divisão de 10 por 0 deve indicar NaN', () => {
    expect(calculadora.dividir(10, 0)).toBe(NaN)
})

