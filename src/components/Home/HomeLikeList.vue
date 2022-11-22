<script setup lang="ts">
import { faker as faker_zh_CN } from '@faker-js/faker'

const imgageUrl = faker_zh_CN.image.abstract()
</script>

<template>
  <div>
    <div>
      猜你喜欢
    </div>
    <div>
      <ul class="list-none">
        <li class="h-25 flex">
          <div class="flex-1 overflow-hidden">
            <img :src="imgageUrl" alt="">
          </div>
          <div class="flex-1 flex flex-col">
            <div>
              <div>
                广州国际汽车展览会
              </div>
              <div>
                161条评论
              </div>
            </div>
            <div class="flex justify-between">
              <div>
                ￥0起
              </div>
              <div>
                海珠区
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>
