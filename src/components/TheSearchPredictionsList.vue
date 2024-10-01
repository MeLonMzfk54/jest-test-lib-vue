<template>
  <div class="space-y-3 text-black text-sm mt-5">
    <div
      v-for="(label, index) in searchPredictions"
      :key="label"
      class="flex items-center"
    >
      <BaseCheckbox
        :id="`search-prediction-${index}`"
        :value="label"
        v-bind="$attrs"
        :model-value="modelValue"
        @update:modelValue="modelValue = $event"
      >
        {{ label }}
      </BaseCheckbox>
    </div>
  </div>
</template>

<script>
import BaseCheckbox from './BaseCheckbox.vue'
import BaseRadio from "./BaseRadio.vue";

export default {
  components: {
    BaseRadio,
    BaseCheckbox
  },

  props: {
    searchPredictions: Array,
    modelValue: Array
  }
}
</script>
