export const useRandomColor = () => {
  const r = (Math.floor(Math.random() * 255)).toString(16);
  const g = (Math.floor(Math.random() * 255)).toString(16);
  const b = (Math.floor(Math.random() * 255)).toString(16);
  const a = (Math.random()).toString(16).slice(2, 4);
  return `#` + r + g + b + a;
}
export const handleDecimal = (value: number | string | null | undefined, decimalPlaces: number = 4): number => {
  // 如果值为 null 或 undefined，返回 0
  if (value == null) {
    return 0;
  }
  // 处理字符串值，保留数字和负号
  const numericString = typeof value === 'string' ? value.replace(/[^-0-9.]/g, '') : value.toString();
  // 转换为数值
  const numericValue = parseFloat(numericString);
  // 如果转换后的值不是数字，返回 0
  if (isNaN(numericValue)) {
    return 0;
  }
  // 处理小数点
  const result = processDecimal(numericValue, decimalPlaces);
  return result;
};

// 处理小数点的逻辑
const processDecimal = (numericValue: number, decimalPlaces: number): number => {
  const strValue = numericValue.toString();

  if (strValue.includes('.')) {
    const [integerPart, decimalPart] = strValue.split('.');
    const truncatedDecimal = decimalPart.slice(0, decimalPlaces);
    const newNumberString = integerPart + '.' + truncatedDecimal;
    return parseFloat(newNumberString);
  }

  // 如果值是整数，直接返回
  return numericValue;
};