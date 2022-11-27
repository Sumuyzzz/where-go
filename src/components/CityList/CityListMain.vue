<script setup lang="ts">
import type { Ref } from 'vue'
import { onMounted, reactive, ref } from 'vue'
import { faker } from '@faker-js/faker/locale/zh_CN'
import { pinyin } from 'pinyin-pro'
const cityList: String[] = reactive([])

const allCityList: string[] = reactive([])

const zzz = ref([])
const generateBig = () => {
  const ch_big = 'A'
  let str_big = ''
  for (let i = 0; i < 26; i++)
    str_big += String.fromCharCode(ch_big.charCodeAt(0) + i)
  return str_big
}
const characterSortList = generateBig().split('')

const cityListHandle = () => {
  for (let i = 0; i < 100; i++) {
    const city = faker.address.city()
    allCityList.push(city)
    const character = pinyin(allCityList[i], { pattern: 'first' }).toUpperCase()
  }
}

const classDemo = {
  flex: 'flex-1',
  text: 'text-center',
}
const isActive = ref(false)
onMounted(() => {
  for (let i = 0; i < 12; i++) {
    const city = faker.address.city()
    cityList.push(city)
  }
})
</script>

<template>
  <div class="flex flex-col h-full">
    <div class=" bg-[#00bcd4] flex justify-center">
      <div class="flex justify-center b-1 w-8/10 b-white m-b-2 text-white">
        <div :class=" [classDemo.flex, classDemo.text] ">
          境内
        </div>
        <div :class=" [classDemo.flex, classDemo.text] ">
          境外*港澳台
        </div>
      </div>
    </div>
    <div class="overflow-y-scroll">
      <div name="hotCity" class="bg-[#f5f5f5]">
        <div class="p-3 text-xs">
          热门城市
        </div>
        <div name="hotCityList">
          <ul class="list-none grid grid-cols-3 !p-0 !m-0 bg-white text-sm">
            <li v-for=" (cityItem, index) in cityList" :key="index" class="b-1 b-[#ddd] text-center p-3 cursor-pointer ">
              {{ cityItem }}
            </li>
          </ul>
        </div>
      </div>
      <div name="characterSort" class="bg-[#f5f5f5]">
        <div class="p-3 text-xs">
          字母排序
        </div>
        <div>
          <ul class="list-none grid grid-cols-6 !p-0 !m-0 bg-white text-sm">
            <li v-for=" (characterItem, index) in characterSortList" :key="index" class=" text-center p-3 cursor-pointer ">
              {{ characterItem }}
            </li>
          </ul>
        </div>
      </div>
      <!-- <div name="allCityList">
        <ul class="list-none m-0 p-0">
          <li v-for="xitem in xxx" :key="xitem">
            <div class="p-3 text-xs bg-[#f5f5f5]">
              {{ xitem }}
            </div>
            <div>
              <ul class="list-none grid grid-cols-6 !p-0 !m-0 bg-white text-sm">
                <li v-for=" (characterItem, index) in characterSortList" :key="index" class=" text-center p-3 cursor-pointer ">
                  {{ characterItem }}
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div> -->
    </div>
  </div>
</template>

<style scoped>

</style>
