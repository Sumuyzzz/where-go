<script setup lang="ts">
import { faker as faker_zh_CN } from '@faker-js/faker/locale/zh_CN'
import { onMounted, reactive, ref } from 'vue'
import { getRandom } from '@/tools/util'

interface ImgageItem {
  url: string
  name: string
  price: number
}

const imageList: Array<ImgageItem> = reactive([])

onMounted(
  () => {
    for (let i = 0; i < 9; i++) {
      const imgageUrl = ref(faker_zh_CN.image.image())
      const imgageName = ref(faker_zh_CN.address.streetName())
      const imgagePrice = ref(getRandom(700, 1000))
      const imgageItem: ImgageItem = reactive({
        url: imgageUrl,
        name: imgageName,
        price: imgagePrice,
      })
      imageList.push(imgageItem)
    }
  },
)
</script>

<template>
  <div>
    <div class="h-6 py-3 flex justify-between items-center">
      <div class="flex items-center text-base">
        <div class="i-noto-v1-fire" />
        <span>
          本周热门榜单
        </span>
      </div>
      <div class="flex items-center text-xs">
        <span>
          全部榜单
        </span>
        <div class="i-material-symbols-arrow-forward-ios-rounded" />
      </div>
    </div>
    <div class="m-0  p-0 h-38">
      <ElScrollbar>
        <ul class="list-none px-3 m-0 flex text-xs">
          <li v-for="(item, index) in imageList" :key="index" class="mx-1 flex flex-col items-center">
            <el-badge value="tpo 1" class="left-0 top-0">
              <img :src="item.url" class="h-25 w-25">
            </el-badge>
            <div>
              {{ item.name }}
            </div>
            <div>
              <span class="text-orange-500 text-sm">
                ￥{{ item.price }}
              </span>
              <span>
                起
              </span>
            </div>
          </li>
        </ul>
      </ElScrollbar>
    </div>
  </div>
</template>

<style scoped>

</style>
