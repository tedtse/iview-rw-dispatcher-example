import store from '../../store'

export default () => (
  <CheckboxDispatcher
    value={ store.state.componentValue }
    on-on-change={ val => store.commit('setCompValue', val) }
  >Checkbox</CheckboxDispatcher>
)
