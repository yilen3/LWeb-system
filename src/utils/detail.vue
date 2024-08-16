<template>
  <div class="riskDetail">
    <div v-if="status" class="list">
      <div class="title-border">
        <p class="title-border-p">风险点列表</p>
      </div>
      <ul v-loading="listLoading">
        <li v-for="item in riskList" :id="'l' + item.riskId" :key="item.riskId" :risk="item.riskGrade" draggable="true"
          title="按住风险点拖入到设备基础图层区域并松开" @dragstart="drag($event, item)" @drop.stop>
          <div :risk="item.riskGrade">
            <img :src="`/assetsImages/risk-images/${riskImgs[item.riskGrade - 1]
              }.png`" alt="" />
            <div class="title-p">
              <p>{{ item.riskName }}</p>
              <p>{{ riskLevel[item.riskGrade - 1] }}</p>
            </div>
          </div>
        </li>
        <li v-show="driverRiskShow && !riskList.length" id="risk-driver-id" :risk="4">
          <div :risk="4">
            <img :src="`/assetsImages/risk-images/blueRisk.png`" alt="" />
            <div class="title-p">
              <p>引导模式风险点示例</p>
              <p>--</p>
            </div>
          </div>
        </li>
      </ul>
      <div v-if="!riskList.length" class="empty-list"></div>
    </div>
    <div id="img-box" :status="status ? 'true' : 'false'" class="img-box">
      <div class="title-border">
        <p class="title-border-p">设备基础图层展示</p>
      </div>
      <div id="img-drag" v-loading="listLoading" class="img-drag" :style="{
        width: `${riskDistribution.width}px`,
        height: `${riskDistribution.height}px`,
        left: ` ${riskDistribution.leftZindex}px`,
        top: `${riskDistribution.topZindex}px`,
        transition: transition ? 'all .2s' : 'none'
      }" @mousedown="mousedown($event, riskDistribution)" @drop="drop($event)" @dragover="allowDrop($event)"
        @mousewheel="scrollFunc($event)">
        <img id="img-driver" :src="detailObj.remoteUrl" alt="" />
        <!-- <img src="/assetsImages/login-images/login-img.png" alt="" /> -->
        <li v-for="(item, index) in risks" :id="item.riskId" :key="index" class="dargDom" :risk="item.riskGrade" :style="{
          left: `${item.riskDistribution.leftZindex}`,
          top: `${item.riskDistribution.topZindex}`,
          width: `${tools.scale * 34}px`,
          height: `${tools.scale * 34}px`,
          'z-index': `${item.riskDistribution.zindex}`
        }">
          <div :check="item.riskId == checkItem.riskId && detailShow" :risk="item.riskGrade" @dragover.stop
            @mousedown.stop="dargMousedown($event, item)" @mouseup="dargMouseup($event, item)">
            <div class="tip" :class="{ see: !status }">
              {{ item.riskName }} <i class="el-icon-caret-bottom"></i>
            </div>
            <img :src="`/assetsImages/risk-images/${riskImgs[item.riskGrade - 1]
              }.png`" alt="" />
          </div>
        </li>
      </div>
      <div class="tools">
        <span v-if="status" style="font-size: 14px">
          不知如何使用？可点击这里<el-button type="text" @click.prevent.stop="guide">
            打开引导模式 </el-button>。
        </span>
        <el-tooltip :open-delay="500" class="item" effect="dark" content="放大" placement="bottom">
          <el-button circle icon="el-icon-zoom-in" @click="toolZoom(1)"></el-button>
        </el-tooltip>
        <el-tooltip :open-delay="500" class="item" effect="dark" content="缩小" placement="bottom">
          <el-button circle icon="el-icon-zoom-out" @click="toolZoom(-1)"></el-button>
        </el-tooltip>
        <el-tooltip :open-delay="500" class="item" effect="dark" content="复位" placement="bottom">
          <el-button id="fuwei-driver" circle icon="el-icon-c-scale-to-original" @click="toolZoom(0)"></el-button>
        </el-tooltip>
        <el-tooltip :open-delay="500" class="item" effect="dark" content="下载图片" placement="bottom">
          <el-button id="download-driver" circle icon="fa fa-download" @click="downLoadImg()"></el-button>
        </el-tooltip>
        <el-button v-if="status" id="save-driver" type="primary" icon="fa fa-floppy-o" @click="saveRisk()">
          保存</el-button>
        <el-tooltip class="item" effect="dark" content="关闭" placement="bottom">
          <el-button id="close-driver" circle type="danger" icon="el-icon-close" style="margin-left: 10px"
            @click="close()"></el-button>
        </el-tooltip>
      </div>
    </div>
    <div v-if="detailShow" class="detail-box">
      <el-tooltip class="item" effect="dark" content="删除选中点" placement="bottom" :open-delay="500">
        <p v-if="status" v-show="detailShow" class="remove" @click="remove">
          <i class="el-icon-delete"></i>
        </p>
      </el-tooltip>
      <el-button circle icon="el-icon-close" plain type="danger" style="position: absolute; right: 20px"
        @click="detailShow = false"></el-button>
      <div>
        <p class="t">风险点名称</p>
        <p class="nr">{{ checkItem.riskName }}</p>
      </div>
      <div>
        <p class="t">场所位置</p>
        <p class="nr">{{ checkItem.station }}</p>
      </div>
      <div style="border-bottom: 1px #0000000f solid; padding-bottom: 10px">
        <p class="t">风险等级</p>
        <p class="nr">{{ riskLevel[checkItem.riskGrade - 1] }}</p>
      </div>
      <div>
        <p class="t">
          危险源类型<el-button style="margin-left: 5px; font-size: 16px" type="text"
            @click="moreRiskShow = true">查看更多危险源</el-button>
        </p>
        <p class="nr">{{ checkItemRiskSource.type }}</p>
      </div>
      <div>
        <p class="t">事故类型或职业危害因素</p>
        <p class="nr">{{ checkItemRiskSource.accidentType }}</p>
      </div>
      <div>
        <p class="t">辨识内容分类</p>
        <p class="nr">{{ checkItemRiskSource.identificationContentType }}</p>
      </div>
      <div>
        <p class="t">能量源或能量载体</p>
        <p class="nr">{{ checkItemRiskSource.energySource }}</p>
      </div>
      <div>
        <p class="t">危险源描述</p>
        <p class="nr">{{ checkItemRiskSource.detail }}</p>
      </div>
    </div>
    <el-dialog v-el-draggable-dialog title="更多危险源" :visible.sync="moreRiskShow" :append-to-body="true" width="1300px">
      <el-table :data="checkItem.riskSourceList" border style="width: 100%">
        <el-table-column prop="type" label="危险源类型"> </el-table-column>
        <el-table-column prop="accidentType" label="事故类型或职业危害因素">
        </el-table-column>
        <el-table-column prop="identificationContentType" label="辨识内容分类">
        </el-table-column>
        <el-table-column prop="energySource" label="能量源或能量载体">
        </el-table-column>
        <el-table-column prop="detail" label="危险源描述"> </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>
<script lang="ts">
// 页面中出现的34均为标点的宽度和高度，用来计算摆放位置
import { Component, Vue, Prop } from "vue-property-decorator";
import { UserModule } from "@/store/modules/user";
import domtoimage from "dom-to-image";
import tableFree from "@/components/Table/index.vue";
import Driver from "driver.js";
import steps from "./steps";
import "driver.js/dist/driver.min.css";
import {
  deleteRisk,
  listRiskDistributionVo,
  saveRiskDistribution
} from "@/api/risk/risk";
// 定义模块
@Component({
  name: "riskDetailName",
  components: {
    tableFree
  }
})
export default class extends Vue {
  [x: string]: any;
  // 底图控制工具属性
  private tools = {
    scaleChangeDefault: 0.2, // 放大缩小递增递减值
    scale: 1 // 缩放初始值
  };
  private wheelDelta = true;
  // 风险点列表数据
  private listLoading = false;
  private riskList: any = [];
  private detailObj: any = {};
  private detailsShow = false; // 顶层关闭
  private detailShow = false;
  private riskImgs = ["redRisk", "orangeRisk", "yellowRisk", "blueRisk"];
  private riskLevel = ["重大风险", "较大风险", "一般风险", "低风险"];
  private risks: any = []; // 存放已经在地图上的点
  // 地图拖动需要的值
  private riskDistribution: any = {
    leftZindex: 0,
    topZindex: 70,
    width: null,
    height: null
  };
  private moreRiskShow = false;
  private checkItemRiskSource = {};
  private transition = false; // 平滑滚动
  private status = true; // true 可编辑 false 只读
  private zIndex = 1; // 点位zindex层级
  private baseMap: any = null; // 定义底图dom
  private defaultWidth: any = null; // 定义底图初始宽度
  private defaultHeight: any = null; // 定义底图初始高度
  private draggableItem: any = {}; // 定义当前拖动的节点信息
  private checkItem: any = {}; // 定义当前选中节点信息
  private driver: Driver | null = null;
  private driverRiskShow = false;
  mounted() {
    this.driver = new Driver({
      opacity: 0.5,
      onReset: (Element) => {
        this.driverRiskShow = false;
      }
    });
  }
  private async guide() {
    this.driverRiskShow = true;
    await this.ZHAK.timer(200);
    if (this.driver) {
      steps[0] = {
        ...steps[0],
        ...{
          element: this.riskList.length
            ? `#l${this.riskList[0].riskId}`
            : "#risk-driver-id",
          onNext: () => {
            this.driver.preventMove();
            setTimeout(() => {
              this.driver.moveNext();
            }, 200);
          }
        }
      };
      this.driver.defineSteps(steps);
      this.driver.start();
      this.toolZoom(0);
    }
  }
  private init(item: any, status: any) {
    this.risks = [];
    this.riskList = [];
    this.listLoading = true;
    this.detailObj = item;
    this.detailsShow = true;
    this.status = status;
    this.$nextTick(() => {
      this.baseMap = document.getElementById("img-drag");
      this.defaultHeight = this.riskDistribution.height =
        this.baseMap?.clientHeight - 70;
      this.defaultWidth = this.riskDistribution.width =
        this.defaultHeight * 1.5;
      this.riskDistribution.leftZindex =
        ((document as any).getElementById("img-box")?.clientWidth -
          this.defaultWidth) /
        2;
      listRiskDistributionVo({ mapId: item.id }).then((res: any) => {
        for (const i of res.data) {
          i.riskDistribution = {
            ...{
              // 坐标属性
              leftZindex: 0, // 距离左
              topZindex: 0, // 距离右
              zindex: 1
            },
            ...(i.riskDistribution || {})
          };
          if (i.riskDistribution.leftZindex) {
            this.risks.push(i);
          } else {
            this.riskList.push(i);
          }
        }
        this.listLoading = false;
      });
    });
  }
  private detail(item: any) {
    this.detailShow = true;
    this.checkItem = item;
    this.checkItemRiskSource = item.riskSourceList[0] || {
      accidentType: "--",
      energySource: "--",
      type: "--",
      detail: "--",
      identificationContentType: "--"
    };
  }
  private close() {
    (this as any).$parent.close();
  }
  private saveRisk() {
    if (!this.risks.length) {
      return this.$message("没有风险点数据，请拖拽左侧风险点！");
    }
    const parms = [];
    for (const i of this.risks) {
      parms.push({
        riskId: i.riskId,
        baseMapId: this.detailObj.id,
        ...i.riskDistribution
      });
    }
    saveRiskDistribution(parms).then((res: any) => {
      this.init(this.detailObj, this.status);
    });
  }
  private async remove() {
    this.risks = this.$_.remove(this.risks, (n: any) => {
      if (n.riskId == this.checkItem.riskId) {
        if (this.checkItem.riskDistribution.version) {
          deleteRisk(this.checkItem.riskDistribution.id).then(() => {
            delete n.riskDistribution.id;
            delete n.riskDistribution.version;
            this.riskList.push(n);
          });
        } else {
          this.riskList.push(n);
        }
      }
      return n.riskId != this.checkItem.riskId;
    });
    this.detailShow = false;
  }
  private downLoadImg() {
    this.$message.info("正在下载，请稍后...");
    this.pointShow = false;
    domtoimage
      .toPng(document.getElementById("img-drag"))
      .then((dataUrl: string) => {
        var img = new Image();
        img.src = dataUrl;
        var a = document.createElement("a");
        a.setAttribute("href", dataUrl);
        a.setAttribute("download", `风险分布图-${new Date().getTime()}.png`);
        a.click();
        a.remove();
        this.pointShow = true;
        this.$message.success("下载完成！");
      })
      .catch(function (error: any) {
        console.error("转图片失败!", error);
        this.$message.error("下载失败！");
      });
  }
  // 拖动点进入存放区域
  private allowDrop(ev: any) {
    ev.preventDefault();
  }
  // 拖动开始事件
  private drag(ev: any, item: any) {
    ev.dataTransfer.setData("Text", item.riskId); // set元素
    // 获取当前拖动元素
    this.draggableItem = item;
  }
  // 进入目标区域-放置
  private drop(ev: any) {
    ev.preventDefault();
    this.risks.push(this.draggableItem); // 存放拖入风险点数据
    for (let i = 0; i < this.riskList.length; i++) {
      if (this.draggableItem.riskId === this.riskList[i].riskId) {
        this.riskList.splice(i, 1);
      }
    }
    this.draggableItem.riskDistribution.leftZindex =
      ((ev.layerX - (34 * this.tools.scale) / 2) /
        this.riskDistribution.width) *
      100 +
      "%"; // 计算放置点位置并且赋值-由于有放大和缩小功能需要根据鼠标位置摆放定位点箭头处
    this.draggableItem.riskDistribution.topZindex =
      ((ev.layerY - 2 * ((34 * this.tools.scale) / 2)) /
        this.riskDistribution.height) *
      100 +
      "%";
    document.onmousemove = null; // 取消滑动事件
    document.onmouseup = null; // 取消抬起事件
  }
  // 放大缩小事件
  private toolZoom(type: any) {
    let f = "";
    this.transition = true; // 开启平滑滚动
    switch (type) {
      case 1:
        this.tools.scale += this.tools.scaleChangeDefault; // 放大
        f = "-";
        break;
      case 0: // 1：1
        this.tools.scale = 1;
        this.riskDistribution.leftZindex =
          ((document as any).getElementById("img-box")?.clientWidth -
            this.defaultWidth) /
          2;
        this.riskDistribution.topZindex = 70;
        break;
      case -1:
        f = "+";
        if (this.tools.scale < 0.5) this.tools.scale = 0.5;
        this.tools.scale -= this.tools.scaleChangeDefault; // 缩小
        break;
    }
    this.riskDistribution.width = this.defaultWidth * this.tools.scale; // 计算宽度
    this.riskDistribution.height = this.defaultHeight * this.tools.scale; // 计算高度
    if (type) {
      this.riskDistribution.leftZindex = eval(
        this.riskDistribution.leftZindex +
        f +
        Math.abs(this.riskDistribution.leftZindex) *
        this.tools.scaleChangeDefault
      );
      this.riskDistribution.topZindex = eval(
        this.riskDistribution.topZindex +
        f +
        Math.abs(this.riskDistribution.topZindex) *
        this.tools.scaleChangeDefault
      );
    }
  }
  // 拖动事件
  mousedown(e: any, riskDistribution: any, source = true) {
    const ev = window.event || e;
    const path = e.path || (e.composedPath && e.composedPath());
    riskDistribution.x = ev.clientX; // 获取鼠标点坐标轴X
    riskDistribution.y = ev.clientY; // 获取鼠标垫坐标轴Y
    riskDistribution.ox = (source ? ev.target : path[1]).offsetLeft; // 获取元素距离左边距离
    riskDistribution.oy = (source ? ev.target : path[1]).offsetTop; // 获取元素距离右边距离
    this.zIndex++;
    riskDistribution.zindex = this.zIndex; // 控制拖动点始终在 其他点位上面
    document.onmousemove = (e) => {
      if (!source && this.status) {
        // 小点拖动，需要计算百分比
        riskDistribution.leftZindex =
          ((riskDistribution.ox + (e.clientX - riskDistribution.x)) /
            this.riskDistribution.width) *
          100 +
          "%";
        riskDistribution.topZindex =
          ((riskDistribution.oy + (e.clientY - riskDistribution.y)) /
            this.riskDistribution.height) *
          100 +
          "%";
      } else {
        this.transition = false;
        // 底图拖动计算px
        riskDistribution.leftZindex =
          riskDistribution.ox + (e.clientX - riskDistribution.x);
        riskDistribution.topZindex =
          riskDistribution.oy + (e.clientY - riskDistribution.y);
      }
    };
    document.onmouseup = (e: any) => {
      if (e.target.id === "img-drag") {
        e.clientX == riskDistribution.x ? (this.detailShow = false) : ""; //判断执行的是滑动还是点击事件
      }
      //鼠标放开清除事件
      document.onmousemove = null;
      document.onmouseup = null;
    };
  }
  dargMouseup(ev: any, item: any) {
    ev.clientX == item.riskDistribution.x ? this.detail(item) : ""; //判断执行的是滑动还是点击事件
  }
  // 风险点在地图内拖动方法
  dargMousedown(ev: any, item: any) {
    this.mousedown(ev, item.riskDistribution, false);
  }
  //统一处理滚轮滚动事件
  scrollFunc(event: any) {
    var delta = 0;
    if (!event) event = window.event;
    if (event.wheelDelta) {
      //IE、chrome浏览器使用的是wheelDelta，并且值为“正负120”
      delta = event.wheelDelta / 120;
      if ((window as any).opera) delta = -delta; //因为IE、chrome等向下滚动是负值，FF是正值，为了处理一致性，在此取反处理
    } else if (event.detail) {
      //FF浏览器使用的是detail,其值为“正负3”
      delta = -event.detail / 3;
    }
    if (delta && this.wheelDelta) {
      this.handle(delta);
      this.wheelDelta = false;
      setTimeout(() => {
        this.wheelDelta = true;
      }, 100);
    }
  }
  //上下滚动时的具体处理函数
  handle(delta: number) {
    if (delta < 0) {
      //向下滚动
      this.toolZoom(-1);
    } else {
      //向上滚动
      this.toolZoom(1);
    }
  }
}
</script>
<style lang="scss" scoped>
// 地图强制动态效果
@keyframes translateRoScal {
  0% {
    opacity: 0;
    transform: translateX(-50%) scale(0) rotateX(70deg);
  }

  50% {
    opacity: 1;
    transform: translateX(-50%) scale(1) rotateX(70deg);
  }

  100% {
    opacity: 0;
    transform: translateX(-50%) scale(2) rotateX(70deg);
  }
}

.riskDetail {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  background: #ffffff;
  z-index: 1;

  & .list {
    width: 300px;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 2;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 9px 0px 10px #0000000f;

    & .title-border {
      margin: 0;
      padding: 26px 0 20px 28px;
      box-shadow: 0px 13px 10px #0000000f;
    }

    & ul {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 70px;
      overflow: auto;
    }

    & li {
      height: 60px;
      padding: 10px 5px;
      margin: 10px;
      width: auto !important;
      height: auto !important;

      & .title-p {
        &>p {
          color: #000;
          font-weight: bold;
        }

        &>p:last-child {
          font-size: 12px;
          font-weight: normal;
        }
      }

      &>div {

        // pointer-events: none;
        &>img {
          width: 34px;
          height: 34px;
          float: left;
          margin: 4px 4px 0 4px;
          pointer-events: visible;
          cursor: copy;
        }
      }

      &[risk="1"] {
        background: #ff000042;
        border: 1px #ff000054 solid;
      }

      &[risk="2"] {
        background: #ff760059;
        border: 1px #ff770077 solid;
      }

      &[risk="3"] {
        background: #ffd3004a;
        border: 1px #ffd50094 solid;
      }

      &[risk="4"] {
        background: #004cff2e;
        border: 1px #004cff5b solid;
      }
    }
  }

  & .img-box {
    position: absolute;
    left: 300px;
    right: 0px;
    top: 0;
    bottom: 0;
    z-index: 1;

    &[status="false"] {
      left: 0;
    }

    & .title-border {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 3;
      padding: 26px 0 20px 28px;
      right: 0;
      margin: 0;
      background: rgba(255, 255, 255, 0.9);
      box-shadow: 15px 8px 10px #0000000f;
    }

    & .tools {
      position: absolute;
      right: 20px;
      top: 10px;
      padding: 10px 0;
      text-align: center;
      z-index: 4;
    }

    & .img-drag {
      position: relative;
      width: 100%;
      height: 100%;
      user-select: none;
      text-align: center;

      & .dargDom {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        user-select: none;
        perspective: 300px;
        pointer-events: none;

        &>div {
          width: 100%;
          height: 100%;
          max-width: 34px;
          max-height: 34px;
          left: 50%;
          bottom: 0;
          position: absolute;
          transform: translateX(-50%);
          pointer-events: visible;

          &[risk="1"] {
            &::before {
              background: rgba(172, 57, 57, 0.6) !important;
            }

            &::after {
              background: rgba(172, 57, 57, 0.4) !important;
            }
          }

          &[risk="2"] {
            &::before {
              background: rgba(255, 119, 0, 0.6) !important;
            }

            &::after {
              background: rgba(255, 119, 0, 0.4) !important;
            }
          }

          &[risk="3"] {
            &::before {
              background: rgba(255, 213, 0, 0.6) !important;
            }

            &::after {
              background: rgba(255, 213, 0, 0.4) !important;
            }
          }

          &[risk="4"] {
            &::before {
              background: rgba(0, 76, 255, 0.6) !important;
            }

            &::after {
              background: rgba(0, 76, 255, 0.4) !important;
            }
          }

          &::before {
            content: "";
            position: absolute;
            width: 30px;
            height: 30px;
            transform: translateX(-50%) scale(0) rotateX(70deg);
            animation: translateRoScal 3s linear 0s infinite;
            transition: all 0.3s;
            border-radius: 100%;
            left: 50%;
            bottom: -15px;
            pointer-events: none;
          }

          &::after {
            content: "";
            position: absolute;
            width: 30px;
            height: 30px;
            transform: translateX(-50%) scale(0) rotateX(70deg);
            animation: translateRoScal 1.5s linear 0s infinite;
            transition: all 0.3s;
            border-radius: 100%;
            left: 50%;
            bottom: -15px;
            pointer-events: none;
          }

          &>img {
            position: absolute;
            height: 100%;
            z-index: 2;
            pointer-events: none;
            width: 100%;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
          }

          &[check="true"] {
            background: linear-gradient(90deg, red 50%, transparent 0) repeat-x,
              linear-gradient(90deg, red 50%, transparent 0) repeat-x,
              linear-gradient(0deg, red 50%, transparent 0) repeat-y,
              linear-gradient(0deg, red 50%, transparent 0) repeat-y;
            background-size: 10px 2px, 10px 2px, 2px 10px, 2px 10px;
            background-position: 0 0, 0 100%, 0 0, 100% 0;
            animation: linearGradientMove 0.6s infinite linear;
            outline: none;

            @keyframes linearGradientMove {
              100% {
                background-position: 10px 0, -10px 100%, 0 -10px, 100% 10px;
              }
            }
          }

          &:hover {
            & .tip {
              display: inline-block;
            }
          }

          & .tip {
            &.see {
              display: inline-block;
            }

            position: absolute;
            pointer-events: none;
            background: #ffffffba;
            width: auto;
            padding: 2px 10px;
            top: -27px;
            display: none;
            white-space: nowrap;
            transform: translateX(-50%);
            font-size: 12px;
            border-radius: 4px;
            color: #333;
            font-weight: bold;
            box-shadow: 0px 0px 10px #0000003d;

            &>i.el-icon-caret-bottom {
              position: absolute;
              left: 50%;
              bottom: -8px;
              font-size: 12px;
              color: #ffffffba;
              transform: translateX(-50%);
            }
          }
        }
      }

      &>img {
        pointer-events: none;
        height: 96%;
        position: absolute;
        left: 50%;
        max-width: 96%;
        object-fit: contain;
        transform: translateX(-50%);
        // box-shadow: 0 0 16px #00000036;
      }
    }
  }

  & .detail-box {
    position: absolute;
    right: 0;
    top: 68px;
    bottom: 0;
    width: 350px;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: -9px 0px 10px #0000000f;
    z-index: 20;
    padding-top: 20px;
    overflow: auto;

    & .remove {
      border: 2px red dashed;
      float: right;
      width: 34px;
      height: 34px;
      margin-right: 70px;
      border-radius: 100%;
      line-height: 30px;
      color: #f56c6c;
      cursor: pointer;
      text-align: center;
    }

    &>div {
      padding: 0 15px;
      margin-top: 20px;

      & .t {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 3px;
      }
    }
  }
}
</style>
