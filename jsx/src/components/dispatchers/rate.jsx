import store from '../../store'

export default () => (
  <RateDispatcher
    value={ store.state.number }
    on-on-change={ val => store.commit('setNumber', val) }
  />
)
