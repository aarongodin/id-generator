import randomInteger from "./random_integer"

const ALPHA_NUM = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

export function get(prefix = "", separator = "_", len = 20) {
  const value = new Array(len)

  for (let i = 0; i < len; i++) {
    value[i] = ALPHA_NUM[randomInteger(ALPHA_NUM.length)]
  }

  if (prefix === "") {
    return value.join("")
  }

  return `${prefix}${separator}${value.join("")}`
}
