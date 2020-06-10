export default (num = 0) => {
  num = parseFloat(num)
  const number = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(num)
  return number.replace(/\s/g, '')
}
