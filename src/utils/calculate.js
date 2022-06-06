

export function calculate(n1, n2, op, numBase = 10) {
  switch (op) {
  case '&': return (n1 & n2).toString(numBase)
  case '|': return (n1 | n2).toString(numBase)
  case '^': return (n1 ^ n2).toString(numBase)
  case '<<': return (n1 << n2).toString(numBase)
  case '>>': return (n1 >> n2).toString(numBase)
  case '+/-': return (n2 * -1).toString(numBase)
  case '+': return (n1 + n2).toString()
  case '-': return (n1 - n2).toString()
  case '*': return (n1 * n2).toString()
  case '/': return (n1 / n2).toString()
  case '%': return ((n1 * n2) / 100).toString()
  default: return n2
  }
}
