import store from '../../store'

export default () => (
  <SliderDispatcher
    value={ store.state.number }
    on-on-change={ val => store.commit('setNumber', val) }
  />
)
