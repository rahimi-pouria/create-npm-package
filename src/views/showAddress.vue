<template>
    <div class="flex text-black">
        <table class="table-fixed">
  <thead>
    <tr class="flex gap-12">
      <th>شماره</th>
      <th>نام</th>
      <th>نام و خانوادگی</th>
      <th>آدرس</th>
      <th>مختصات</th>
      <th>نام شهر</th>
      <th>منطقه</th>
    </tr>
  </thead>
  <tbody>
    <tr class="flex gap-12" v-for="(item, i) in listData.list.data" :key="i">
      <td>{{ item.id }}</td>
      <td>{{ item.first_name }}</td>
      <td>{{ item.last_name }}</td>
      <td>{{ item.address }}</td>
      <td>{{ item.lat }} & {{ item.lng }}</td>
      <td>{{ item.region.city_object.city_name }}</td>
      <td>{{ item.region.name }}</td>
    </tr>
  </tbody>
</table>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
    // add stores and get data
    import { useListAddressStore } from '../stores/listAddress'
    const listData = useListAddressStore()
    
    


    onMounted(() => {
        listData.getAddress()
    })
</script>

<style scoped>
  td{
    text-align: center;
    font-weight: bold;
    word-wrap: break-word;
    width: 56px;
  }
</style>