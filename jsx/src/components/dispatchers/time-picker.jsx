import store from '../../store'

export default () => (
  <TimePickerDispatcher
    value={ store.state.componentValue }
    on-on-change={ val => store.commit('setCompValue', val) }
  />
)
