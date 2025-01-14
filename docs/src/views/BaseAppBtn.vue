<script lang="ts" setup>
import { markRaw } from 'vue'

// A custom component, typically imported from elsewhere
const CustomComponent = {
  props: ['name'],
  template: `Hello {{ name }}`
}

// Assign the custom component a library
const library = markRaw({
  MyComponent: CustomComponent
})

// Reference the key of the desired component from
// the library.
const schema = [
  {
    $cmp: 'MyComponent',
    props: {
      name: 'Jane'
    }
  }
]
const submitHandler = () => null
</script>

<template>
  <FormKit type="form" :actions="true" :onsubmit="submitHandler" :submit-attrs="{
    inputClass: 'my-input-class',
    wrapperClass: 'my-wrapper-class',
    'data-theme': `dark`,
    help: 'My button help text',
    ignore: false
  }">
    <FormKitSchema :actions="true" :schema="schema" :library="library" />

    <FormKit type="submit" />
  </FormKit>
</template>
