import store from '../../store'

export default () => (
  <DatePickerDispatcher
    value={ store.state.componentValue }
    on-on-change={ val => store.commit('setCompValue', val) }
  />
)
