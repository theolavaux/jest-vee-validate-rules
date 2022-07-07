<template>
  <div>Test</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { extend } from 'vee-validate';
import { min_value as minValue } from 'vee-validate/dist/rules';

extend('minValue', minValue);

export default defineComponent({
  setup() {
    return {};
  },
});
</script>
