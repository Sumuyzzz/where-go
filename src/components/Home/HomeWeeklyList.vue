<script setup lang="ts">
import { faker as faker_zh_CN } from '@faker-js/faker'
import type { Ref } from 'vue'
import { onMounted, reactive, ref } from 'vue'

interface Like {
  url: string
  name: string
  description: string
}

const imgageUrl = faker_zh_CN.image.business()
const imgageName = faker_zh_CN.address.streetName()
const imgageDescription = faker_zh_CN.hacker.phrase()

const like: Ref<Like> = ref({
  url: imgageUrl,
  name: imgageName,
  description: imgageDescription,
})
const likeList: Array<Like> = reactive([])

onMounted(() => {
  for (let i = 0; i < 5; i++)
    likeList.push(like.value)
})
</script>

<template>
  <div>
    <div class="p-3">
      周末去哪儿
    </div>
    <ul class="list-none p-0 m-0">
      <li v-for="(item, index) in likeList" :key="index">
        <ElCard class="mb-2">
          <div>
            <img :src="item.url" class="h-36 w-72">
          </div>
          <div class="p-3">
            <div class="text-sm">
              {{ item.name }}
            </div>
            <div class="text-xs">
              {{ item.description }}
            </div>
          </div>
        </ElCard>
      </li>
    </ul>
    <div>
      <ElCard>
        <div class="font-sans text-xs flex h-6 p-1 items-center">
          <div class="i-mdi-alert-circle-outline " />
          <div class="font-bold m-0">
            票面价
          </div>
          <div>
            是指通过景区指定窗口售卖的纸质门票上标注的价格
          </div>
        </div>
      </ElCard>
    </div>
  </div>
</template>

<style scoped>

</style>
