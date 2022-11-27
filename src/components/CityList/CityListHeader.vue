<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const toBack = () => {
  router.back()
}
</script>

<template>
  <div class="bg-[#00bcd4] h-full">
    <div class="text-white  flex justify-between items-center p-3">
      <div @click="toBack">
        <div class="i-material-symbols-arrow-back-ios-rounded " />
      </div>
      <div>
        城市选择
      </div>
      <div />
    </div>
  </div>
</template>

<style scoped>

</style>
