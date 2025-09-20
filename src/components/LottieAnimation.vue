<template>
  <div ref="lottieContainer" class="lottie-container"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import lottie from 'lottie-web'

const props = defineProps({
  animationData: {
    type: Object,
    required: true
  },
  loop: {
    type: Boolean,
    default: true
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  width: {
    type: [String, Number],
    default: '100%'
  },
  height: {
    type: [String, Number],
    default: '100%'
  }
})

const lottieContainer = ref(null)
let animation = null

onMounted(() => {
  if (lottieContainer.value && props.animationData) {
    animation = lottie.loadAnimation({
      container: lottieContainer.value,
      renderer: 'svg',
      loop: props.loop,
      autoplay: props.autoplay,
      animationData: props.animationData
    })
  }
})

onUnmounted(() => {
  if (animation) {
    animation.destroy()
  }
})
</script>

<style scoped>
.lottie-container {
  width: v-bind(width);
  height: v-bind(height);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
