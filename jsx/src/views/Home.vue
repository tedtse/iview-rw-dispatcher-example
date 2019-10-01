<template>
  <div>
    <div class="iview-container">
      <div class="iview-container__aside">
        <Select v-model="compType" @on-change="$store.commit('reset')">
          <Option v-for="item in compOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </Select>
      </div>
      <div class="iview-container__main">
        <dynamic-component :type="compType" />
      </div>
    </div>
    <div>
      <Button v-show="rwDispatcherState === 'write'" type="primary" size="small" @click="toggleState">详情</Button>
      <Button v-show="rwDispatcherState === 'read'" type="primary" size="small" @click="toggleState">编辑</Button>
    </div>
  </div>
</template>

<script>
import DynamicComponent from '../components/dynamic-component'
import { ComponentMap } from '../maps'

export default {
  components: {
    DynamicComponent
  },
  provide () {
    return {
      rwDispatcherProvider: this
    }
  },
  data () {
    return {
      rwDispatcherState: 'write',
      compType: '',
      compOptions: []
    }
  },
  created () {
    for (let [value, label] of Object.entries(ComponentMap)) {
      this.compOptions.push({ label, value })
    }
  },
  methods: {
    toggleState () {
      if (this.rwDispatcherState === 'write') {
        this.rwDispatcherState = 'read'
      } else {
        this.rwDispatcherState = 'write'
      }
    }
  }
}
</script>

<style lang="less">
  .iview-container {
    text-align: left;
    padding: 20px;
    display: flex;
    &__main {
      display: flex;
      flex: 1;
      padding: 0 20px;
    }
    &__aside {
      width: 300px;
      .el-button +.el-button {
        margin-left: 0;
      }
    }
    +div {
      padding: 0 20px;
      text-align: left;
    }
    .ivu-slider {
      width: 100%;
    }
  }
</style>
