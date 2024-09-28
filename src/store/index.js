import { createStore } from 'vuex'
import axios from 'axios';


export default createStore({
  state: {
    countries: [],
    filteredCountries: [],
  },
  getters: {
    getAllCountries: (state)  => state.countries,
    getFilteredCountries: (state) => state.filteredCountries,

  },
  mutations: {
    showCountries(state, countries){
      state.countries = countries
    },

    setFilteredCountries(state, filteredCountries) {
      state.filteredCountries = filteredCountries;
    },
  },
  actions: {
    async getCountries(ctx) {
      let countries;
      const url = 'https://date.nager.at/api/v3/AvailableCountries'
      await axios.get(url).then(data => countries = data.data)
      ctx.commit('showCountries', countries)
    },

    async getSingleCountry(ctx, countryCode) {
      let singleCountry;
      const url = `https://date.nager.at/api/v3/NextPublicHolidays/${countryCode}`
      await axios.get(url).then(data => singleCountry =  data.data)
      return singleCountry
    },

    async getSingleYear(ctx, { year, countryCode }) {
      let singleYear;
      const url = `https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`
      await axios.get(url).then(data => singleYear =  data.data)
      return singleYear
    },

    async getSingleWidget(ctx, { year, countryCode }) {
      let singleWidget;
      const url = `https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`
      await axios.get(url).then(data => singleWidget =  data.data)
      return singleWidget
    },
  },
  modules: {
  }
})
