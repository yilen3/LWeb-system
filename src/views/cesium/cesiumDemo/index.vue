<template>
  <div class="absolute left-50px top-50px z-999 xcc gap-5">
    <el-select class="w-100px" v-model="drawType" clearable placeholder="请选择形状">
      <el-option label="点" value="point" />
      <el-option label="线" value="line" />
      <el-option label="多边形" value="polygon" />
    </el-select>
  </div>
  <div class="overflow-hidden absolute0000 z-999 pointer-events-none">
    <div id="htmlOverlay" class="absolute z-999 text-light-50 bg-dark-300 opacity-70 yst pointer-events-auto"
      style="display: none;">
      <!-- 可以自定义模板 -->
      <!-- <div v-html="infoHTML"></div> -->
      <el-button type="primary" link>编辑</el-button>
      <el-button type="danger" link @click="removeEntity">删除</el-button>
    </div>
  </div>
  <div ref="cesiumRef" id="cesiumId" class="w-full h-full">
  </div>
  <div id="infoboxs" class="absolute left-30% bottom-5 z-999 text-light-50"></div>
  <!-- <EDialog v-model:set="MS" :page="false" class="z-999" :show-close="false">
    <el-scrollbar height="500px">
      <el-form-item label="想要形成的类型" prop="account">
        <el-select v-model="growUpShape">
          <el-option v-for="item in typesOption" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <el-form v-if="growUpShape === 'polygon'" ref="formRef" :model="MS.data" label-width="150px">
        <el-form-item label="是否使用位置的高程">
          <el-switch v-model="MS.data.isUseHeight" />
        </el-form-item>
        <el-form-item label="高度/厚度">
          <el-input-number v-model="MS.data.height" controls-position="right" />
        </el-form-item>
        <el-form-item label="外扩高度">
          <el-input-number v-model="MS.data.extrudedHeight" controls-position="right" />
        </el-form-item>
        <el-form-item label="填充的颜色">
          <el-color-picker v-model="MS.data.fillColor" show-alpha color-format="hex" />
        </el-form-item>
        <el-form-item label="透明度">
          <el-slider v-model="MS.data.opacity" :min="0" :max="1" :step="0.1" show-input />
        </el-form-item>
        <el-form-item label="是否显示外框线">
          <el-switch v-model="MS.data.showOutline" />
        </el-form-item>
        <template v-if="MS.data.showOutline">
          <el-form-item label="外框线宽度">
            <el-input-number v-model="MS.data.outlineWidth" controls-position="right" />
          </el-form-item>
          <el-form-item label="外框线颜色">
            <el-color-picker v-model="MS.data.outlineColor" show-alpha color-format="hex" />
          </el-form-item>
        </template>
<template v-if="MS.data.extrudedHeight">
          <el-form-item label="是否显示顶部">
            <el-switch v-model="MS.data.isCloseTop" />
          </el-form-item>
          <el-form-item label="是否显示底部">
            <el-switch v-model="MS.data.isCloseBottom" />
          </el-form-item>
        </template>
</el-form>
<el-form v-if="growUpShape === 'wall'" ref="formRef" :model="MS.data" label-width="150px">
  <el-form-item label="墙体高度">
    <el-input-number v-model="MS.data.wallHeight" controls-position="right" />
  </el-form-item>
  <el-form-item label="填充的颜色">
    <el-color-picker v-model="MS.data.fillColor" show-alpha color-format="hex" />
  </el-form-item>
  <el-form-item label="透明度">
    <el-slider v-model="MS.data.opacity" :min="0" :max="1" :step="0.1" show-input />
  </el-form-item>
  <el-form-item label="是否显示外框线">
    <el-switch v-model="MS.data.showOutline" />
  </el-form-item>
  <template v-if="MS.data.showOutline">
          <el-form-item label="外框线宽度">
            <el-input-number v-model="MS.data.outlineWidth" controls-position="right" />
          </el-form-item>
          <el-form-item label="外框线颜色">
            <el-color-picker v-model="MS.data.outlineColor" show-alpha color-format="hex" />
          </el-form-item>
        </template>
  <template v-if="MS.data.extrudedHeight">
          <el-form-item label="是否显示顶部">
            <el-switch v-model="MS.data.isCloseTop" />
          </el-form-item>
          <el-form-item label="是否显示底部">
            <el-switch v-model="MS.data.isCloseBottom" />
          </el-form-item>
        </template>
</el-form>
<div class="xrc gap-5">
  <el-button @click="dialogClose">取消</el-button>
  <el-button type="primary" @click="handleEntity">确定</el-button>
</div>
</el-scrollbar>
</EDialog> -->
</template>

<script setup lang="ts">
import "cesium/Build/Cesium/Widgets/widgets.css";
import * as Cesium from 'cesium'
const drawType = ref<string>('')
const drawColor = ref<string>('WHITE')
const cesiumRef = ref<any>()
const selectEntity = ref<any>()
const isNewAdd = ref<boolean>(false)
const MS = ref()
const growUpShape = ref()
let infoHTML = `<div>1121332321</div>`
// 添加用于存储弹出窗位置的新 ref
const typesOption = computed(() => {
  if (drawType.value === 'polygon') {
    return [
      {
        label: '平面',
        value: 'polygon'
      },
      {
        label: '盒子',
        value: 'box'
      },
      {
        label: '墙',
        value: 'wall'
      },
      {
        label: '管道',
        value: 'corridor'
      }
    ]
  } else {
    return []
  }
})
const canShowPop = computed(() => {
  return drawType.value === ''
})
// 指定token
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3MDZiNWFhYS01Zjk5LTQ5ZjktYWY5OC0xYzY5ZTNmODRhZjUiLCJpZCI6MTg1MDE5LCJpYXQiOjE3MDI4NzI5OTN9.lCUQNRQxVIdftGR1USgw22HPpvflB_LC_6bylIuUMN8'
let viewer: any, label: any, helper: any, handler: any

let overlay: any;

onMounted(async () => {
  // 创建涂层
  viewer = new Cesium.Viewer("cesiumId", {
    // 显示地形
    // terrain: Cesium.Terrain.fromWorldTerrain(),
    // 全屏按钮
    fullscreenButton: false,
    // 时间线空间
    timeline: false,
    // vr按钮
    vrButton: false,
    // 回到主视角按钮
    homeButton: false,
    // 帮助按钮
    navigationHelpButton: false,
    // 左下角动画控件
    animation: false,
    // 投影方式按钮
    sceneModePicker: true,
    // 不显示选中实例效果
    selectionIndicator: false,
    infoBox: false
  })
  // 去除版权信息
  viewer._cesiumWidget._creditContainer.style.display = "none";
  // 切换二维三维 2D,3D
  // viewer.scene.morphTo2D();
  // 取消左键双击事件
  // viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(
  //   Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK
  // );
  helper = new Cesium.EventHelper();
  // 处理用户输入事件。可以添加自定义功能以在用户输入输入时执行。
  handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas);
  // 定点，视角不可移动
  // viewer.camera.lookAt(
  //   Cesium.Cartesian3.fromDegrees(-122.2058, 46.1955, 1000.0),
  //   new Cesium.Cartesian3(5000.0, 5000.0, 5000.0)
  // );
  // viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
  // 创建一个实例集合体，label， point， billboard
  const entity = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(123.43911896314233, 41.81440026458232, 100),
    billboard: {
      image: '/dikuang/bigScreen/btn1.png',
      scale: 0.3,
      color: Cesium.Color.RED
    },
    label: {
      text: '测试',
      font: '14px',
      fillColor: Cesium.Color.WHITE,
      // 位置偏移，左右、上下
      pixelOffset: new Cesium.Cartesian2(0, -40)
    },
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArrayHeights([123.43911896314233, 41.81440026458232, 0, 123.43911896314233, 41.81440026458232, 100]),
      material: Cesium.Color.AQUA
    }
  })
  // viewer.flyTo(entity)
  const popup = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(121, 40, 0),
    description: `<div style="background:#FFF; padding:5px;">This is a <strong>custom</strong> HTML label.</div>`,
    label: {
      text: '测试',
      font: '14px',
      // rgba格式
      // fillColor: Cesium.Color.fromBytes(255, 0, 0, 255),
      // 16进制格式
      fillColor: Cesium.Color.fromCssColorString('#D22929FF'),
      // 位置偏移，左右、上下
      pixelOffset: new Cesium.Cartesian2(0, -40)
    }
  })

  viewer.flyTo(entity)
  let num: number = 0, log: number = 0, lat: number = 0
  // 测试一下callBack
  // const polylines = viewer.entities.add({
  //   polyline: {
  //     positions: new Cesium.CallbackProperty(() => {
  //       num += 0.05
  //       log = 120.5 + num
  //       lat = 30.5 + num
  //       if (log < 180) {
  //         return Cesium.Cartesian3.fromDegreesArray([120.5, 30.5, log, lat])
  //       } else {
  //         polylines.polyline.positions = Cesium.Cartesian3.fromDegreesArray([120.5, 30.5, 180, 31])
  //       }
  //     }, false),
  //     width: 5,
  //     material: Cesium.Color.RED
  //   }
  // })
  // 监听地图数据是否加载完成
  helper.add(viewer.scene.globe.tileLoadProgressEvent, (e) => {
    // 加载完成，返回值为0
    if (e == 0) {
      // 加载完成开始跳动并且关闭监听事件
      // openBounce(viewer.terrainProvider, { entity: entity, position: [120, 30] });
      helper.removeAll();
    }
    let popPosition: any;
    let cesiumPosition: any
    let pickedEntities: any
    viewer.screenSpaceEventHandler.setInputAction((movement: any) => {
      // 左下角经纬度
      let earthPosition = viewer.camera.pickEllipsoid(
        movement.position,
        viewer.scene.globe.ellipsoid
      );
      let cartographic = Cesium.Cartographic.fromCartesian(
        earthPosition,
        viewer.scene.globe.ellipsoid,
        new Cesium.Cartographic()
      );
      let lat = Cesium.Math.toDegrees(cartographic.latitude);
      let lng = Cesium.Math.toDegrees(cartographic.longitude);
      let height = viewer.camera.positionCartographic.height;
      let loglatInfo: any = document.getElementById('infoboxs')
      loglatInfo.innerHTML =
        `<div class="xcc gap-3">` +
        '<span>经度：' +
        lng +
        '</span>' +
        '<span>  纬度：' +
        lat +
        '</span>' +
        '<span>  相机高度：' +
        height +
        '</span>' +
        `</div>`;


      cesiumPosition = movement
      // 从视图上获取被选中的实体集合
      pickedEntities = viewer.scene.pick(movement.position);
      // return
      overlay = document.getElementById('htmlOverlay');
      popPosition = Cesium.SceneTransforms.wgs84ToWindowCoordinates(viewer.scene, viewer.scene.pickPosition(movement.position))
      if (Cesium.defined(pickedEntities)) {
        selectEntity.value = pickedEntities.id
        // 因为是实时变化的，所以改变样式要放在外面
        overlay.style.left = (popPosition.x - (overlay.offsetWidth / 2)) + 'px';
        overlay.style.top = (popPosition.y - (overlay.offsetHeight + 50)) + 'px';
        if (canShowPop.value) {
          overlay.style.display = 'block'
        } else {
          overlay.style.display = 'none'
        }
      } else {
        overlay.style.left = 0 + 'px';
        overlay.style.top = 0 + 'px';
        overlay.style.display = 'none'
        pickedEntities = ''
      }
    }, Cesium.ScreenSpaceEventType.RIGHT_CLICK);
    // 实时监听变化
    viewer.scene.postRender.addEventListener(() => {
      // 获取当前中心位置
      let centerResult = viewer.camera.pickEllipsoid(
        new Cesium.Cartesian2(
          viewer.canvas.clientWidth / 2,
          viewer.canvas.clientHeight / 2,
        ),
      )
      if (pickedEntities && overlay.style.display === 'block') {
        if (pickedEntities && pickedEntities.id.position === undefined) {
          pickedEntities.id.position = viewer.scene.globe.pick(viewer.camera.getPickRay(cesiumPosition.position), viewer.scene)
        }
        let entityScreenSpace = viewer.scene.cartesianToCanvasCoordinates(pickedEntities.id.position ? pickedEntities.id.position._value : pickedEntities.primitive.position, new Cesium.Cartesian2())
        if (entityScreenSpace) {
          overlay.style.transform = `translate(${entityScreenSpace.x - popPosition.x - (overlay.offsetWidth / 2) + 50}px, ${entityScreenSpace.y - (popPosition.y + (overlay.offsetHeight - 30)) * 1.1}px)`
        }
      }
    })

  });
  drawFun()
  drawUpdate()
  drawStop()
})


// 弹跳效果
/*
* @param entity: 实例，创建的entity，用变量指向
* @param position: 跳动的位置，必须是数组，长度为2
* @param maxBeatHeight: 跳动的最大高度
* @param beatStep: 跳动的速度
* @param processHeight: 过程高度
*/
const openBounce = async (terrain: any,
  { entity = null, position = [], maxBeatHeight = 100, beatStep = 0.5, processHeight = 0 }:
    { entity: any, position: any[], maxBeatHeight?: number, beatStep?: number, processHeight?: number }) => {
  let longitude = Cesium.Math.toRadians(position[0]);
  let latitude = Cesium.Math.toRadians(position[1]);
  let floorHeight: number
  let promise = Cesium.sampleTerrainMostDetailed(terrain, [Cesium.Cartographic.fromRadians(longitude, latitude)]);
  promise.then((updatedPositions) => {
    floorHeight = updatedPositions[0].height;
  });
  // 跳动最大高度
  const maxHeight = maxBeatHeight;
  // 跳动速率
  const step = beatStep;
  // 过程高度
  let height = processHeight;
  // 跳动反转标记
  let statusForBounce = true;
  entity._defaultPosition = entity._position;
  // 弹跳回调
  entity._position = new Cesium.CallbackProperty((time, result) => {
    if (statusForBounce) {
      height = height - step;
      if (height <= floorHeight) {
        statusForBounce = false;
      }
    } else {
      height = height + step;
      if (height >= maxHeight) {
        statusForBounce = true;
      }
    }
    return Cesium.Cartesian3.fromDegrees(...position, height);
  }, false);
}
// 定义的点位数组
const activeShapePoints = ref<any>([])
// 形状
let activeShape: any;
let floatingPoint: any;
let shape: any;
// 每次点击地图都会执行
const drawFun = () => {
  // 设置要在输入事件上执行的函数。
  handler.setInputAction((event: any) => {
    // 创建一条从相机位置穿过世界坐标中 windowPosition 处像素的射线
    const ray = viewer.camera.getPickRay(event.position);
    // 创建笛卡尔坐标系
    const earthPosition = viewer.scene.globe.pick(ray, viewer.scene);
    // 如果定义了对象，则返回 true，否则返回 false。
    if (Cesium.defined(earthPosition) && drawType.value !== '') {
      if (activeShapePoints.value.length === 0) {
        // 创建一个点位
        floatingPoint = createPoint(earthPosition);
        // 添加点位数据，方便形成线和面
        activeShapePoints.value.push(earthPosition);
        // CallbackProperty 实时调用
        const dynamicPositions = new Cesium.CallbackProperty(() => {
          if (drawType.value === "polygon") {
            // 创建面
            return new Cesium.PolygonHierarchy(activeShapePoints.value);
          }
          // 重新赋值activeShapePoints.value
          return activeShapePoints.value;
          // 必须是false，CallbackProperty才会启用
        }, false);
        // 创建形状
        activeShape = drawShape(dynamicPositions);
        isNewAdd.value = true
      }
      // 如果又地球笛卡尔坐标，放到坐标数组中
      activeShapePoints.value.push(earthPosition);
      // 通过笛卡尔坐标渲染点位
      createPoint(earthPosition);
    }
    // 指定触发的方式
  }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
}
const drawUpdate = () => {
  handler.setInputAction((event) => {
    // 如果有浮点点位
    if (Cesium.defined(floatingPoint)) {
      // 创建一个新的点位
      const ray = viewer.camera.getPickRay(event.endPosition);
      const newPosition = viewer.scene.globe.pick(ray, viewer.scene);
      // 如果有新的点位
      if (Cesium.defined(newPosition)) {
        // 更新原油点位
        floatingPoint.position.setValue(newPosition);
        // 删除点位数组的最后个
        activeShapePoints.value.pop();
        // 从后面添加新的点位
        activeShapePoints.value.push(newPosition);
      }
    }
  }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
}
// 停止画
const drawStop = () => {
  // 监听鼠标右键
  handler.setInputAction((event) => {
    // 执行终止方法
    if (isNewAdd.value) {
      MS.value.open({
        title: '自定义',
        mark: drawType.value,
        data: {
          fillColor: '#fff',
          opacity: 1,
          isUseHeight: false,
          showOutline: false,
          outlineColor: '000',
          isCloseTop: true,
          isCloseBottom: true,
          wallHeight: 100
        }
      })
      // drawType.value = ''
    }
    terminateShape();
    // 鼠标右键触发
  }, Cesium.ScreenSpaceEventType.MIDDLE_CLICK);
}
// 终止执行画
const terminateShape = () => {
  // 将最后一个点位删除
  activeShapePoints.value.pop();
  // 根据已有的点位渲染形状
  drawShape(activeShapePoints.value);
  // // 删除浮点
  // viewer.entities.remove(floatingPoint);
  // // 删除最后一个形状点
  // viewer.entities.remove(activeShape);
  // 赋空，方便下一次渲染
  // floatingPoint = undefined;
  // activeShape = undefined;
  // activeShapePoints.value = [];
  // isNewAdd.value = false
}
// 画形状
const drawShape = (positionData: any) => {
  // 如果选择是画线
  if (drawType.value === "line") {
    shape = viewer.entities.add({
      polyline: {
        // 位置（数组）
        positions: positionData,
        // 指定线是否贴地
        clampToGround: true,
        // 线宽
        width: 3,
        material: Cesium.Color[drawColor.value]
      },
    });
    // 如果选择是画面
  } else if (drawType.value === "polygon") {
    shape = viewer.entities.add({
      polygon: {
        // 位置
        hierarchy: positionData,
        scale: 0.3,
        // 材质，白色透明 0.7
        material: new Cesium.ColorMaterialProperty(
          Cesium.Color[drawColor.value].withAlpha(0.7)
        ),
      },
    });
  }
  return shape;
}

// 画点，创建的基础
const createPoint = (worldPosition: any) => {
  // 在entities中添加点位实例
  const point = viewer.entities.add({
    position: worldPosition,
    point: {
      // 颜色（白色）
      color: Cesium.Color[drawColor.value],
      // 大小
      pixelSize: 10,
      scale: 1,
      // 高度
      heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
    },
  });
  // viewer.flyTo(point)
  return point;
}

// 弹窗确定
const handleEntity = () => {
  // 如果选择的是面
  viewer.entities.remove(shape);
  if (MS.value.mark === 'polygon') {
    switch (growUpShape.value) {
      case 'polygon':
        const newPolygon: any = viewer.entities.add({
          polygon: {
            // 位置(结构)
            hierarchy: activeShapePoints.value,
            // 是否使用hierarchy中每个点的高程
            perPositionHeight: MS.value.data.isUseHeight,
            // 高度
            height: MS.value.data.height,
            // 高程参考面，默认值为Cesium.HeightReference.NONE，表示使用绝对高程，如果想要多边形贴在地表，可设置为Cesium.HeightReference.CLAMP_TO_GROUND
            // heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
            // 外扩高程可形成多边形棱柱
            extrudedHeight: MS.value.data.extrudedHeight,
            // 材质，颜色和透明度
            material: Cesium.Color.fromCssColorString(MS.value.data.fillColor).withAlpha(MS.value.data.opacity),
            // 是否有外边框线
            outline: MS.value.data.showOutline,
            // 外框线颜色
            outlineColor: Cesium.Color.fromCssColorString(MS.value.data.outlineColor),
            // 外框线宽度
            outlineWidth: 1,
            // 在使用extrudedHeight形成棱柱时，顶面是否显示
            closeTop: MS.value.data.isCloseTop,
            // 在使用extrudedHeight形成棱柱时，底面是否显示
            closeBottom: MS.value.data.isCloseBottom,
            // 多边形在该视角距离内可见，其他距离不可见
            // distanceDisplayCondition: null
          }
        })
        break;
      case 'wall':
        const newWall: any = viewer.entities.add({
          wall: {
            positions: Cesium.Cartesian3.fromDegreesArrayHeights([120, 31, 100, 120, 31.5, 100, 120.1, 32, 100]),
            // 用于指定墙底部的高度数组
            // minimumHeights: [100, 100, 100],
            // 用于指定墙壁顶部的高度数组
            // maximumHeights: [],
            // 指定每个纬度和经度点之间的角距离
            granularity: Cesium.Math.RADIANS_PER_DEGREE,
            // 墙壁是否填充
            fill: true,
            // 材质
            material: Cesium.Color.fromCssColorString(MS.value.data.fillColor),
            // 墙壁是否被勾勒出来（边框线）
            outline: MS.value.data.showOutline,
            // 外框线颜色
            outlineColor: Cesium.Color.fromCssColorString(MS.value.data.outlineColor),
            // 勾勒的宽度
            outlineWidth: 1,
            // 指定墙壁是投射还是接收来自光源的阴影
            shadows: Cesium.ShadowMode.DISABLED
            // distanceDisplayCondition: 0
          }
        })
        break;
      default:
        break;
    }
  }

  MS.value.close()
  // 删除浮点
  viewer.entities.remove(floatingPoint);
  // 删除最后一个形状点
  viewer.entities.remove(activeShape);
  // 删除画出的点
  activeShapePoints.value.forEach((item: any) => {
    viewer.entities._entities._array.forEach((item2: any) => {
      if (item2['point'] && handleDecimal(item.x, 0) === handleDecimal(item2.position._value.x, 0) && handleDecimal(item.y, 0) === handleDecimal(item2.position._value.y, 0) && handleDecimal(item.z, 0) === handleDecimal(item2.position._value.z, 0)) {
        viewer.entities.removeById(item2.id)
      }
    })
  })

  floatingPoint = undefined;
  activeShape = undefined;
  activeShapePoints.value = [];
  isNewAdd.value = false
}

const dialogClose = () => {
  MS.value.close()
  // 删除浮点
  viewer.entities.remove(floatingPoint);
  // 删除最后一个形状点
  viewer.entities.remove(activeShape);
  floatingPoint = undefined;
  activeShape = undefined;
  activeShapePoints.value = [];
  isNewAdd.value = false
}

// 删除选中的实例
const removeEntity = () => {
  console.log('%c [ popPosition ]-506', 'font-size:13px; background:pink; color:#bf2c9f;', selectEntity.value)
  ElMessageBox.confirm('确认删除?', '警告', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(async () => {
    overlay.style.display = 'none'
    viewer.entities.removeById(selectEntity.value.id)
  }).catch((e) => { })
}


</script>

<style scoped></style>