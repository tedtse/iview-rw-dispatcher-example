import OPTIONS from 'iview-rw-dispatcher/options'

const COLOER = 'green'

export default {
  trueValue: 'on',
  falseValue: 'off',
  separator: '&',
  rangeSeparator: '>',
  readStateRender: {
    input (h, context) {
      return h('span', {
        style: { color: COLOER }
      }, context.data.attrs.value)
    },
    select (h, context) {
      const { data, children } = context
      const value = data.attrs.value
      const vnodes = children.map(item => {
        if (!item.componentOptions) {
          return null
        } else if (value.includes(item.componentOptions.propsData.value)) {
          return h('span', {
            style: { color: COLOER }
          }, item.componentOptions.propsData.label + ' ')
        } else {
          return null
        }
      })
        .filter(item => item)
      return h('div', vnodes)
    },
    datePicker (h, context) {
      const { value } = context.data.attrs
      const date = new Date(value)
      return h('span', {
        style: { color: COLOER }
      }, date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate())
    },
    timePicker (h, context) {
      const { value } = context.data.attrs
      const matches = value.split(':')
      return h('span', {
        style: { color: COLOER }
      }, matches[0] + '时' + matches[1] + '分' + matches[2] + '秒')
    },
    slider (h, context) {
      const { value } = context.data.attrs
      return h('span', {
        style: { color: COLOER }
      }, value)
    },
    iSwitch (h, context) {
      const { trueValue, falseValue } = OPTIONS
      const { value } = context.data.attrs
      return h('span', {
        style: { color: COLOER }
      }, value ? trueValue : falseValue)
    },
    checkbox (h, context) {
      const { data, children } = context
      const { value, label } = data.attrs
      if (value) {
        return h('span', {
          style: { color: COLOER }
        }, children)
      } else {
        return h('div', {
          style: { display: 'none' },
          attrs: data.attrs
        }, children || label)
      }
    },
    checkboxGroup (h, context) {
      const { data, children } = context
      const { value } = data.attrs
      const vnodes = children.map(item => {
        if (!item.data) {
          return null
        } else if (value.includes(item.data.attrs.label)) {
          return item.children || item.data.attrs.label
        } else {
          return null
        }
      })
        .filter(item => item)
      return h('div', {
        style: { color: COLOER }
      }, vnodes)
    },
    radio (h, context) {
      const { data, children } = context
      const { value, label } = data.attrs
      if (value === label) {
        return h('div', {
          style: { color: COLOER }
        }, children)
      } else {
        return h('div', {
          style: { display: 'none' },
          attrs: data.attrs
        }, children || label)
      }
    },
    radioGroup (h, context) {
      const { data, children } = context
      const { value } = data.attrs
      const vnode = children.find(item => {
        if (!item.data) {
          return false
        } else {
          return value === item.data.attrs.label
        }
      })
      if (!vnode) {
        return ''
      }
      return h('div', {
        style: { color: COLOER }
      }, vnode.children)
    },
    rate (h, context) {
      const { value } = context.data.attrs
      return h('span', {
        style: { color: COLOER }
      }, value + '颗星')
    }
  }
}
