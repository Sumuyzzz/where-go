<script setup lang="ts">
import { faker } from '@faker-js/faker/locale/zh_CN'
import { onMounted, reactive, ref } from 'vue'
const country = ref(faker.address.cityName())

const street = ref(faker.address.streetName())
const streetList: string[] = reactive([])

const countryList: string[] = reactive([])

const historyShow = ref(false)
onMounted(() => {
  for (let i = 0; i < 10; i++) {
    countryList.push(country.value)
    streetList.push(street.value)
  }
})
</script>

<template>
  <div class="text-xs  h-full">
    <div v-show="historyShow" class="bg-[#f0f5f6] b-[#dce5e7] b-1">
      <div class="flex justify-between p-2 ">
        <div class="text-[#888]">
          搜索历史
        </div>
        <div class="text-[#00afc7] flex">
          <div class="i-ph-trash" />
          <div>
            清除
          </div>
        </div>
      </div>
      <div class="bg-[#fff] b-[#dce5e7] b-1">
        <ul class="list-none flex gap-2 p-4 flex-wrap">
          <li v-for="(countryItem, index) in countryList" :key="index" class="b-1 b-true-gray-400 p-2">
            {{ countryItem }}
          </li>
        </ul>
      </div>
    </div>
    <el-card>
      <div class=" bg-white ">
        <div class="flex justify-between  b-[#dce5e7] p-2">
          <div class="text-[#888]">
            热门搜索
          </div>
          <div class="flex text-[#00afc7] ">
            <div class="i-tabler-refresh " />
            <div>
              换一批
            </div>
          </div>
        </div>
        <div class="b-y-1 b-[#dce5e7] flex">
          <div class="b-r-1 self-center border-warm-gray-300">
            <div class="i-fluent-building-bank-16-filled m-2 text-true-gray-300" />
          </div>
          <div>
            <ul class="list-none flex ">
              <li v-for="(streetItem, index) in streetList" :key="index" class="b-r-dashed b-r-1 px-3 b-gray-400">
                {{ streetItem }}
              </li>
            </ul>
          </div>
        </div>
        <div class="b-b-1 b-[#dce5e7] flex">
          <div class="b-r-1 self-center border-warm-gray-300">
            <div class="i-clarity-building-solid m-2 text-true-gray-300" />
          </div>
          <div>
            <ul class="list-none flex ">
              <li v-for="(streetItem, index) in streetList" :key="index" class="b-r-dashed b-r-1 px-3 b-gray-400">
                {{ streetItem }}
              </li>
            </ul>
          </div>
        </div>
        <div class="flex justify-center b-1 m-2 p-2 text-13px b-[#dce5e7] text-gray-600">
          搜索身边的景点
        </div>
      </div>
    </el-card>
  </div>
</template>

<style scoped lang="scss">
:deep(.el-card__body){
  padding: 0;
}
</style>
