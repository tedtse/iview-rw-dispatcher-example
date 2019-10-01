import store from '../../store'

let data

const handleSearch = val => {
  data = !val ? [] : [
    val,
    val + val,
    val + val + val
  ]
}

export default () => (
  <AutoCompleteDispatcher
    value={ store.state.componentValue }
    data={ data }
    on-input={val => {
      store.commit('setCompValue', val)
      handleSearch(val)
    }}
  />
)
