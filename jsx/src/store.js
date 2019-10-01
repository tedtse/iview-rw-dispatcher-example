import Vue from 'vue'
import Vuex from 'vuex'
import cloneDeep from 'lodash/cloneDeep'

Vue.use(Vuex)

const checkboxValuesDef = [
  '复选框 A',
  '复选框 B',
  '复选框 C'
]
const radioValuesDef = [
  '上海',
  '北京',
  '广州',
  '深圳'
]

export default new Vuex.Store({
  state: {
    componentValue: '',
    number: 0,
    groupValue: [],
    checkboxValues: cloneDeep(checkboxValuesDef),
    radioValues: cloneDeep(radioValuesDef)
  },
  mutations: {
    reset (state) {
      state.componentValue = ''
      state.number = 0
      state.groupValue = []
      state.checkboxValues = cloneDeep(checkboxValuesDef)
      state.radioValues = cloneDeep(radioValuesDef)
    },
    setCompValue (state, val) {
      state.componentValue = val
    },
    setNumber (state, val) {
      state.number = val
    },
    setGroupValue (state, val) {
      state.groupValue = val
    }
  },
  actions: {
  }
})
