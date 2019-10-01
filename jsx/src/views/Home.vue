<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Table :columns="tableColumns" :data="tableData" />
    <Select :value="value">
      <Option value="London">London</Option>
      <Option value="Sydney">Sydney</Option>
    </Select>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

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

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      value: 'London',
      tableColumns: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'City',
          render: (h, params) => (
            <iSelect
              transfer
              v-model={ this.value }
            >
              {
                cityList.map(item => (
                  <iOption key={ item.value } value={ item.value }>{ item.label }</iOption>
                ))
              }
            </iSelect>
          )
        }
      ],
      tableData: [
        {
          name: 'Lee',
          city: 'London'
        }
      ]
    }
  }
}
</script>
