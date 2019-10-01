import store from '../../store'

export default () => (
  <RadioGroupDispatcher
    value={ store.state.componentValue }
    on-on-change={ val => store.commit('setCompValue', val) }
  >
    {
      store.state.radioValues.map(label => (
        <RadioDispatcher label={ label } />
      ))
    }
  </RadioGroupDispatcher>
)
