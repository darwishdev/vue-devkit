<script lang="ts" setup>

const schema = [
  {
    $formkit: 'text',
    label: "name",
    placeHolder: "hoelo",
    prefixIcon: "email"
  }
]
const submitHandler = () => null
</script>

<template>
  <h2>heelo</h2>
  <FormKit type="form" :actions="true" :onsubmit="submitHandler" :submit-attrs="{
    inputClass: 'my-input-class',
    wrapperClass: 'my-wrapper-class',
    'data-theme': `dark`,
    help: 'My button help text',
    ignore: false
  }">
    <FormKitSchema :schema="schema" />
  </FormKit>
</template>
