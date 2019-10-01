import store from '../../store'

export default () => (
  <iSwitchDispatcher
    value={ store.state.componentValue }
    on-on-change={ val => store.commit('setCompValue', val) }
  />
)
