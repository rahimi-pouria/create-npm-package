import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios"

export const useListAddressStore = defineStore('address', () => {
  // variable
  const list = ref<any>([])

  // get data from api
  async function getAddress () {
      const data = await axios.get ('https://stage.achareh.ir/api/karfarmas/address',
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization' : 'Basic MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Njc4'
          }
        }
      )
      list.value = data
      console.log(list.value)
  }
  // send data from server
  async function sendData () {
    await axios.post('https://stage.achareh.ir/api/karfarmas/address', {
      Headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Njc4'
      },
      body: {
        first_name : 'user first name',
        last_name: 'user last name',
        coordinate_mobile: 'user mobile number',
        coordinate_phone_number: 'user phone number',
        address: 'user address',
        region: 'always is `1` for test',
        lat: 'Latitude on the map [ex. 35.7717503]',
        lng: 'Longitude on the map [ex. 51.3365315',
        gender: 'user gender'
      }
    })
  }


  return {list, getAddress}
})
