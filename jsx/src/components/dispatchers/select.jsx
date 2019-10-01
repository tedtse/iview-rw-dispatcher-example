/*
 * iview@3.5.1 有Bug, Select 无法正常渲染
 */
import store from '../../store'

const cityList = [
  {
    value: 'New York',
    label: 'New York'
  },
  {
    value: 'London',
    label: 'London'
  },
  {
    value: 'Sydney',
    label: 'Sydney'
  },
  {
    value: 'Ottawa',
    label: 'Ottawa'
  },
  {
    value: 'Paris',
    label: 'Paris'
  },
  {
    value: 'Canberra',
    label: 'Canberra'
  }
]

export default () => (
  <iSelect
    // value={ store.state.componentValue }
    on-on-change={ val => store.commit('setCompValue', val) }
  >
    {
      cityList.map(item => (
        <iOption key={ item.value } value={ item.value }>{ item.label }</iOption>
      ))
    }
  </iSelect>
)
