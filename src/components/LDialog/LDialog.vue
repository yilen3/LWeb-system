<template>
  <el-dialog v-bind="$attrs" v-model="isShow" :style="{
    minWidth: (isNaN(Number(minWidth)) ? minWidth : `${minWidth}px`),
    maxWidth: (isNaN(Number(maxWidth)) ? maxWidth : `${maxWidth}px`),
  }" :close-on-click-modal="closeOnClickModal" :append-to-body="appendToBody" :destroy-on-close="destroyOnClose"
    :fullscreen="fullscreen" :class="[fullscreen ? '!h-full !min-h-full !max-h-full' : '']" @open="onOpen">
    <template #[slotName]="slotProps" v-for="(slot, slotName) in $slots" :key="slotName">
      <slot :name="slotName" v-bind="{ set: dialogConfig, ...slotProps }" />
    </template>
    <template #header>
      <slot name="header">
        <div class="xbc w-full">
          <slot name="title">
            <span>{{ dialogConfig && dialogConfig.title }} <slot name="subTitle">{{ title }}</slot></span>
          </slot>
          <!-- 调试的set属性代码 -->
          <div class="xrc gap-3">
            <slot name="headerRight" />
            <!-- v-if="isDEV && !hiddenCode" -->
            <el-popover trigger="click" width="auto" placement="left-end">
              <template #reference>
                <!-- <el-icon :size="1.5" class="cursor-pointer">
                  <ChromeFilled />
                </el-icon> -->
              </template>
              <slot name="code">
                <el-tabs modelValue="JSON数据" type="card" tab-position="top">
                  <el-tab-pane label="JSON数据" name="JSON数据" lazy>
                    <div class="relative pr-3 overflow-auto max-w-1000px max-h-500px">
                      <vue-json-pretty
                        :data="{ title: set?.title, mark: set?.mark, data: set?.data, ref: set?.ref, post: set?.post, span: set?.span, fullscreen: set?.fullscreen }"
                        show-icon showLength />
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="原始数据" name="原始数据" lazy>
                    <pre class="overflow-auto pr-3 max-w-1000px max-h-500px">{{ set }}</pre>
                  </el-tab-pane>
                  <el-tab-pane label="el-form-span" name="el-form-span" lazy>
                    <el-radio-group v-model="dialogConfig.span" class="w-340px gap-1 flex-wrap">
                      <el-radio v-for="item in 24" :key="item" :label="item" border class="!mr-0">{{ item }}</el-radio>
                    </el-radio-group>
                  </el-tab-pane>
                </el-tabs>
              </slot>
            </el-popover>
            <!-- <el-icon v-if="!hiddenFullscreen && !dialogConfig.fullscreen" :size="1.5" class="cursor-pointer"
              @click.stop="toggleFullscreen">
              <FullScreen />
            </el-icon> -->
          </div>
        </div>
      </slot>
    </template>
  </el-dialog>
</template>

<script lang="ts">
export default {
  inheritAttrs: false
};
</script>
<script setup lang="ts">
import { DefineProps } from 'vue';
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';
const emit = defineEmits(['update:set', 'open', 'close'])
const props = withDefaults(
  defineProps<{
    set?: any | undefined; // 2种显示模式,默认弹出 false:弹出modal正常样式  true:内嵌page样式
    modelValue?: boolean | undefined; // 是否显示
    title?: string | undefined
  }>(),
  {
    modelValue: false,
  }
);
const isShow: any = useVModel(props, 'modelValue', emit, { passive: true })
const dialogConfig = useVModel(props, 'set', emit, { passive: true })
const fullscreen = defineModel('fullscreen', { type: Boolean, default: false })
const closeOnClickModal = defineModel('closeOnClickModal', { type: Boolean, default: false })
const appendToBody = defineModel('appendToBody', { type: Boolean, default: true })
const destroyOnClose = defineModel('destroyOnClose', { type: Boolean, default: true })
const hiddenFullscreen = defineModel('hiddenFullscreen', { type: Boolean, default: false })
const minWidth = defineModel('minWidth', { type: Number, default: 375 })
const maxWidth = defineModel('maxWidth', { type: Number, default: null })

dialogConfig.value = useConfirmDialog(isShow)
dialogConfig.value.onReveal((open: any) => {
  fullscreen.value = false
  // 深拷贝
  if (open.set) {
    // open参数的方式获取给数据
    const cloned = open.set ? JSON.parse(JSON.stringify(open.set)) : { title: '标题', mark: '', data: {}, post: {}, span: 24 }
    dialogConfig.value.title = cloned.title || '标题'
    dialogConfig.value.mark = cloned.mark || ''
    dialogConfig.value.data = cloned.data || {}
    dialogConfig.value.post = cloned.post || {}
    dialogConfig.value.span = cloned.span || 24
  } else {
    // 直接变量的方式直接给数据
    dialogConfig.value.title = dialogConfig.value.title || '标题'
    dialogConfig.value.mark = dialogConfig.value.mark || ''
    dialogConfig.value.data = dialogConfig.value.data || {}
    dialogConfig.value.post = dialogConfig.value.post || {}
    dialogConfig.value.span = dialogConfig.value.span || 24
  }
  // 浅拷贝
  dialogConfig.value.ref = open.item
  emit('open', dialogConfig.value, open.item)
})
// 关闭弹窗
dialogConfig.value.onCancel(() => {
  emit('close', dialogConfig.value)
})
// 清除
dialogConfig.value.clear = () => {
  dialogConfig.value = undefined
}

dialogConfig.value.open = (item?: any, refItem?: any) => {
  return dialogConfig.value.reveal({ set: item, item: refItem })
}
dialogConfig.value.close = () => {
  dialogConfig.value.cancel()
}

const toggleFullscreen = () => {
  fullscreen.value = !fullscreen.value
}
</script>

<style scoped></style>