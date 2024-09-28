<template>
<div class="main-input">
  <input class="main-input__input" v-model="searchQuery" placeholder="Search countries..." type="text">
  <input class="main-input__btn" @click="filteredCountries" type="submit" value="Search">
  <input class="main-input__btn red" @click="clearCountries" type="submit" value="Clear">
</div>
</template>

<script>

import {mapGetters, mapMutations} from 'vuex'
export default {
  name: "MainInput",
  data() {
    return {
      searchQuery: '',
    }

  },

  async mounted() {
      this.filteredCountries()
  },

  methods: {
    ...mapMutations(['setFilteredCountries']),
    filteredCountries() {
      let filtered = this.getAllCountries.filter((country) =>
          country.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      this.setFilteredCountries(filtered);
      return filtered;
    },

    clearCountries()  {
      this.searchQuery = ''
      this.filteredCountries()

    }
  },

  computed: {
    ...mapGetters(['getAllCountries']),
  }

}
</script>

