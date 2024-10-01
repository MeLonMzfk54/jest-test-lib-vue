<template>
  <input
    type="radio"
    class="h-5 w-5 cursor-pointer"
    :id="id"
    v-bind="$attrs"
    :model-value="modelValue"
    @update:modelValue="modelValue = $event"
  />
  <label v-if="$slots.default" :for="id" class="pl-4 cursor-pointer flex-grow">
    <slot />
  </label>
</template>

<script>
export default {
  components: {BaseRadio},
  props: {
    id: String,
    modelValue: String
  }
}
</script>
