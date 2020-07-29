
export function currencyFormat(num) {
  num = parseInt(num)
  return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export function toPersianNum(number, dTrim) {
  let i = 0,
    dontTrim = dTrim || false,
    num = dontTrim ? number.toString() : number.toString().trim(),
    len = number.length,
    res = "",
    pos,
    persianNumbers =
      typeof persianNumber == "undefined"
        ? ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]
        : persianNumbers;

  for (i = 0; i < len; i++) {
    if ((pos = persianNumbers[num.charAt(i)])) res += pos;
    else res += num.charAt(i);
  }
  return res;
}

export  function convertToPersainDate(date) {
  console.log(typeof date)
  return new Date(date).toLocaleString("fa");
}

