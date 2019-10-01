import store from '../../store'

export default () => (
  <RadioDispatcher
    value={ store.state.componentValue }
    on-on-change={ val => store.commit('setCompValue', val) }
  >Radio</RadioDispatcher>
)
