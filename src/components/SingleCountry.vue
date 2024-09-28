<template>
  <div class="country-container" v-for="item in singleCountry" :key="item.countryCode">
    <div>{{item.countryCode}}</div>
    <div class="country-container__date">{{item.date}}</div>
    <div class="country-container__name">{{item.name}}</div>
  </div>
  <div class="country-container__wrapper">
    <div @click="getHolidayYear(year)" v-for="year in years" :key="year" class="country-container__year" :class="{ active: year === selectedYear }">
        {{ year }}
    </div>
  </div>

</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "SingleCountry",

  data(){
    return {
      singleCountry: null,
      selectedYear: null,
      years: [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030]
    }

  },


 async mounted() {
   this.singleCountry = await this.getSingleCountry(this.$route.params.id)
},
  methods: {
    ...mapActions(['getSingleCountry', 'getSingleYear']),


   async getHolidayYear(year) {
      this.selectedYear = year
      this.singleCountry =  await this.getSingleYear({year: year, countryCode:this.$route.params.id})
    }
  },
}
</script>

