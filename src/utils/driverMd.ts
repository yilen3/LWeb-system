const stepDefinition = {
  element: '#some-item', // 需要被高亮的查询选择器字符或 
  popover: { // 如果为空将不会显示弹窗 
    className: 'popover-class', // 除了 Driver 选项中的通用类名称之外，还可以指定包裹当前指定步骤弹窗的类名p
    title: 'Title', // 弹窗的标题 
    description: 'Description', // 弹窗的主体内容 
    showButtons: false, // 是否在底部显示控制按钮 
    closeBtnText: 'Close', // 关闭按钮的文本 
    nextBtnText: 'Next', // 当前步骤的下一步按钮文本 
    prevBtnText: 'Previous', // 当前步骤的上一步按钮文本 
  }
};

const driver = new Driver({
  className: 'scoped-class', //包裹 driver.js 弹窗的类名 
  animate: true, // 高亮元素改变时是否显示动画 
  opacity: 0.75, //背景透明度(0 表示只有弹窗并且没有遮罩) 
  padding: 10, // 元素与边缘的距离 
  allowClose: true, // 是否允许点击遮罩时关闭 
  overlayClickNext: false, //是否允许点击遮罩时移到到下一步 
  doneBtnText: 'Done', // 最终按钮上的文本 
  closeBtnText: 'Close', // 当前步骤关闭按钮上的文本 
  nextBtnText: 'Next', //当前步骤下一步按钮上的文本 
  prevBtnText: 'Previous', // 当前步骤上一步按钮上的文本 
  showButtons: false, //是否在底部显示控制按钮 
  keyboardControl: true, // 是否允许通告键盘控制(escape 关闭，箭头键用于移动)
  scrollIntoViewOptions: {}, // `scrollIntoView()` 方法的选项 
  onHighlightStarted: (Element) { }, // 元素开将要高亮时调用 
  onDeselected: (Element) { }, // 取消选择时调用 
  onReset: (Element) { }, // 遮罩将要关闭时调用 
  onNext: (Element) => { }, // 任何步骤中移到到下一步时调用 
  onPrevious: (Element) => { }, // 任何步骤中移到到上一步时调用 
});

const isActivated = driver.isActivated; // 检查 driver 是否激活
driver.moveNext(); // 移动到步骤列表中的下一步
driver.movePrevious(); // 移动到步骤列表中的上一步 
driver.start(stepNumber = 0); // 从指定的步骤开始
driver.highlight(string | stepDefinition); // 高亮通过查询选择器指定的或步骤定义的元素 
driver.reset(); // 重置遮罩并且清屏 
driver.hasHighlightedElement(); //检查是否有高亮元素 
driver.hasNextStep(); // 检查是否有可移动到的下一步元素 
driver.hasPreviousStep(); // 检查是否有可移动到的上一步元素。

driver.preventMove();// 阻止当前移动。如果要执行某些异步任务并手动移动到下一步，则在“onNext”或“onPrevious”中很有用 

const activeElement = driver.getHighlightedElement();// 获取屏幕上当前高亮元素 
const lastActiveElement = driver.getLastHighlightedElement();
activeElement.getCalculatedPosition(); // 获取活动元素的屏幕坐标 
activeElement.hidePopover(); // 隐藏弹窗 
activeElement.showPopover(); // 显示弹窗 
activeElement.getNode(); // 获取此元素后面的 DOM 元素 
