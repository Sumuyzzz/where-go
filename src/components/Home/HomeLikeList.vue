<script setup lang="ts">
import { faker as faker_zh_CN } from '@faker-js/faker'
import type { Ref } from 'vue'
import { onMounted, reactive, ref } from 'vue'
import { getRandom } from '@/tools/util'

interface Star {
  name: string
  color: string
}

interface Like {
  url: string
  name: string
  country: string
  count: number
  price: number
}
const star: Ref<Star> = ref({
  name: 'i-material-symbols-star-rounded',
  color: 'bg-[#ffb436]',
})
const likeList: Array<Like> = reactive([])
const starList: Array<Star> = reactive([])

onMounted(() => {
  for (let i = 0; i < 5; i++) {
    const imgageUrl = faker_zh_CN.image.image()
    const imgageName = faker_zh_CN.address.streetName()
    const imgageCountry = faker_zh_CN.address.country()
    const count = getRandom(0, 500)
    const price = getRandom(100, 500)
    const like: Ref<Like> = ref({
      url: imgageUrl,
      name: imgageName,
      country: imgageCountry,
      count,
      price,
    })
    starList.push(star.value)
    likeList.push(like.value)
  }
})
</script>

<template>
  <div>
    <div class="flex h-6 py-3 text-base">
      <div class="i-icon-park-solid-like bg-red-500 m-1" />
      <div>
        猜你喜欢
      </div>
    </div>
    <div>
      <ul class="list-none  px-3 m-0">
        <li v-for="(likeItem, likeIndex) in likeList" :key="likeIndex" class="h-25 flex b-b-1 b-gray-300 py-3 items-center">
          <div class=" overflow-hidden">
            <img :src="likeItem.url" class="h-25 w-25">
          </div>
          <div class=" flex flex-col  flex-1 m-3">
            <div>
              <div class="text-base">
                {{ likeItem.name }}
              </div>
              <div class="text-xs">
                <div v-for="(starItem, index) in starList" :key="index" :class="[starItem.color, starItem.name]" />
                {{ likeItem.count }}条评论
              </div>
            </div>
            <div class="flex justify-between text-xs ">
              <div>
                ￥<span class="text-xl text-red-400">{{ likeItem.price }}</span>起
              </div>
              <div>
                {{ likeItem.country }}
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="p-2 flex justify-center items-center text-cyan-500 text-sm">
      查看所有产品
    </div>
  </div>
</template>

<style scoped>

</style>
