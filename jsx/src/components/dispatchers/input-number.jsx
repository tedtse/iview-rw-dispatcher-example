import store from '../../store'

export default () => (
  <InputNumberDispatcher
    value={ store.state.number }
    on-input={ val => store.commit('setNumber', val) }
    on-change={ val => store.commit('setNumber', val) }
  />
)
