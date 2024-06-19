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
// 拖拽方法
export const useDragResize = (el: HTMLElement, binding: any, vNode: any, prevNode: any) => {
  const defaultWidth = el.getBoundingClientRect().width
  const defaultHeight = el.getBoundingClientRect().height
  const defaultHandleSize = binding.handleSize || '2px'
  // 声明可拖拽的方向
  let directionArr: string[] = []
  if (binding.direction) {
    directionArr = binding.direction
  } else {
    directionArr = ['right']
  }
  // 创建拖拽手柄
  let dragHandle = document.createElement('div')
  // 判断节点是否是relative
  if (!el.className.includes('relative') && el.style.position != 'relative') {
    el.style.position = 'relative'
  }
  dragHandle.style.position = 'absolute'
  const useHandleSize = Number(defaultHandleSize.replace('px', '')) * 2 + 'px'
  function setDragType() {
    if (directionArr.includes('top')) {
      dragHandle.style.top = '-' + defaultHandleSize
      dragHandle.style.height = useHandleSize
      dragHandle.style.width = '100%'
      dragHandle.style.cursor = 'ns-resize'
    }
    if (directionArr.includes('right')) {
      dragHandle.style.right = '-' + defaultHandleSize
      dragHandle.style.width = useHandleSize
      dragHandle.style.height = '100%'
      dragHandle.style.cursor = 'ew-resize'
    }
    if (directionArr.includes('bottom')) {
      dragHandle.style.bottom = '-' + defaultHandleSize
      dragHandle.style.height = useHandleSize
      dragHandle.style.width = '100%'
      dragHandle.style.cursor = 'ns-resize'
    }
    if (directionArr.includes('left')) {
      dragHandle.style.left = '-' + defaultHandleSize
      dragHandle.style.width = useHandleSize
      dragHandle.style.height = '100%'
      dragHandle.style.cursor = 'ew-resize'
    }
  }
  dragHandle.style.opacity = '0'
  dragHandle.style.backgroundColor = '#ccc'
  setDragType()
  el.appendChild(dragHandle)
  dragHandle.onclick = (e) => {
    el.style.width = defaultWidth + 'px'
    el.style.height = defaultHeight + 'px'
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
  }
  dragHandle.onmouseenter = (e) => {
    dragHandle.style.opacity = '1'
  }
  dragHandle.onmouseleave = (e) => {
    dragHandle.style.opacity = '0'
  }
  dragHandle.onmousedown = (e) => {
    e.preventDefault()
    e.stopPropagation()
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }
  const handleMouseMove = (e: any) => {
    if (directionArr.includes('top')) {
      let newHeight = e.clientY - el?.getBoundingClientRect().bottom
      if (newHeight < defaultHeight) {
        el.style.height = defaultHeight + 'px'
      } else {
        el.style.height = newHeight + "px"
      }
    }
    if (directionArr.includes('right')) {
      let newWidth = e.clientX - el?.getBoundingClientRect().left
      if (newWidth < defaultWidth) {
        el.style.width = defaultWidth + 'px'
      } else {
        el.style.width = newWidth + "px"
      }
    }
    if (directionArr.includes('bottom')) {
      let newHeight = e.clientY - el?.getBoundingClientRect().top
      if (newHeight < defaultHeight) {
        el.style.height = defaultHeight + 'px'
      } else {
        el.style.height = newHeight + "px"
      }
    }
    if (directionArr.includes('left')) {
      let newWidth = e.clientX - el?.getBoundingClientRect().right
      if (newWidth < defaultWidth) {
        el.style.width = defaultWidth + 'px'
      } else {
        el.style.width = newWidth + "px"
      }
    }
  }
  const handleMouseUp = (e: any) => {
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
  }
}