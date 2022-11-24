<script setup lang="ts">
import { faker as faker_zh_CN } from '@faker-js/faker/locale/zh_CN'
import { ref } from 'vue'

const imgageUrl = faker_zh_CN.image.nightlife()

const perimeter = ref(false)
</script>

<template>
  <div class="p-0 m-0">
    <div class="h-12  flex justify-around items-center">
      <div class="flex b-r-1 b-gray-400 flex-1 justify-center items-center h-full">
        <div class="i-tabler-map-pin" />
        <div>附近</div>
      </div>
      <div class="flex flex-1 justify-center">
        <div class="i-icon-park-outline-earth" />
        <div>必玩榜单</div>
      </div>
    </div>
    <div v-show="perimeter" class="h-75">
      <div class="p-2">
        在景区门口？立即订票
      </div>
      <div class=" h-40 overflow-hidden px-2 py-3 ">
        <img :src="imgageUrl" alt="" class="w-full h-full">
      </div>
      <div class="cursor-pointer">
        <div class="flex justify-between mx-2 my-2 b-t-1 b-gray-400 ">
          <div class="flex flex-col">
            <div>广州一日游:陈家祠+广州塔</div>
            <div class="text-xs text-gray-400 ">
              可订明白
            </div>
          </div>
          <div class="text-rose-500 text-sm ">
            ￥68
          </div>
        </div>
        <div class="flex justify-center text-cyan-500">
          查看所有产品
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
