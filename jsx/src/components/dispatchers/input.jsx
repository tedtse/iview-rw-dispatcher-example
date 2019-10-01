import store from '../../store'

export default () => (
  <iInputDispatcher
    value={ store.state.componentValue }
    on-input={ val => store.commit('setCompValue', val) }
  />
)
