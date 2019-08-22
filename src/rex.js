const rex = {
  WORD: /^[a-zA-Z\s]+$/,
  NUMBER: /^\d*$/,
  DATE: /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/,
  SCHOOLYR: /^(\d{4})$/
}

export default rex;
