<script setup lang="ts">

</script>

<template>
  <div class="flex h-full items-center px-2 bg-white justify-between">
    <div class="w-10  flex justify-center">
      <div class="i-material-symbols-arrow-back-ios-rounded" />
    </div>
    <div class="w-full px-2">
      <el-input placeholder="输入景点/目的地" :autofocus="true" class="!w-full" />
    </div>
    <div class="w-10">
      搜索
    </div>
  </div>
</template>

<style scoped lang="scss">
:deep(.el-input__wrapper) {
  padding: 0;
  color: black;
  --un-bg-opacity: 1;
  background-color: rgba(243, 244, 246, var(--un-bg-opacity));
  border-radius: 20px;
  display: flex;
  justify-content: center;
  border-style: none;
}

:deep(.el-input__inner::placeholder) {
  color: black;
}

:deep(.el-input__inner) {
  text-align: center;
}
</style>
