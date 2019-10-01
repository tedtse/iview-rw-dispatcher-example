/*
 * 如果 context.parent 下有多组 CheckboxGroup，这个例子就是错的
 */

import store from '../../store'

const findComponentByName = (parent, name) => {
  const result = []
  const traverse = component => {
    const _name = component.$options.name
    if (_name === name) {
      result.push(component)
    } else if (component.$children.length) {
      component.$children.forEach(child => traverse(child))
    }
  }
  traverse(parent)
  return result
}

export default context => (
  <CheckboxGroupDispatcher
    value={ store.state.groupValue }
    on-on-change={() => {
      const checkboxes = findComponentByName(context.parent, 'Checkbox')
      store.commit('setGroupValue', checkboxes.map(component => {
        if (component.currentValue) {
          return component.label
        }
        return null
      }).filter(Boolean))
    }}
  >
    {
      store.state.checkboxValues.map(label => (
        <CheckboxDispatcher
          label={ label }
        >{ label }</CheckboxDispatcher>
      ))
    }
  </CheckboxGroupDispatcher>
)
