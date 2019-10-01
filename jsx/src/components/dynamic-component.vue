<script>
import Input from './dispatchers/input'
import InputNumber from './dispatchers/input-number'
import AutoComplete from './dispatchers/auto-complete'
import Select from './dispatchers/select'
import Switch from './dispatchers/switch'
import DatePicker from './dispatchers/date-picker'
import TimePicker from './dispatchers/time-picker'
import Checkbox from './dispatchers/checkbox'
import CheckboxGroup from './dispatchers/checkbox-group'
import Radio from './dispatchers/radio'
import RadioGroup from './dispatchers/radio-group'
import Rate from './dispatchers/rate'
import Slider from './dispatchers/slider'

const Maps = {
  input: Input,
  autoComplete: AutoComplete,
  inputNumber: InputNumber,
  select: Select,
  'switch': Switch,
  datePicker: DatePicker,
  timePicker: TimePicker,
  checkbox: Checkbox,
  checkboxGroup: CheckboxGroup,
  radio: Radio,
  radioGroup: RadioGroup,
  rate: Rate,
  slider: Slider
}

export default {
  props: {
    type: {
      type: String,
      defautl: ''
    }
  },
  functional: true,
  render (h, context) {
    const { type } = context.props
    const component = Maps[type] || null
    return h(component)
  }
}
</script>
