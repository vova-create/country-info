<template>
  <div class="main-container">
    <div class='countries-container'>
      <MainInput/>
      <div class="countries-container__scrollable">
        <div v-for="(country) in getFilteredCountries" :key='country.countryCode'>
          <CountryCard @click="$router.push(`/country/${country.countryCode}`)" :name="country.name" :code="country.countryCode" />
        </div>
        <div class="countries-container__type" v-if="getFilteredCountries.length <= 0">Type a country...</div>
      </div>
    </div>
    <CountriesWidget/>
  </div>

</template>

<script>
import {mapActions, mapGetters,} from 'vuex'
import MainInput from "@/components/MainInput";
import CountryCard from "@/components/CountryCard";
import CountriesWidget from "@/components/CountriesWidget";

export default {
  name: 'HomePage',
  components: {
    MainInput,
    CountryCard,
    CountriesWidget
  },

  async mounted() {
    await this.getCountries()
  },

  methods: {
    ...mapActions(['getCountries'])
  },

  computed: {
    ...mapGetters(['getAllCountries','getFilteredCountries']),
    filteredCountries() {
      return this.getFilteredCountries;
    },
  }
}
</script>




