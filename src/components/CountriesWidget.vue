<template>
<div class="countries-widget">
<WidgetItem :country="singleWidget1Code" :holiday="singleWidget1Name" :date="singleWidget1Date"/>
<WidgetItem :country="singleWidget2Code" :holiday="singleWidget2Name" :date="singleWidget2Date"/>
<WidgetItem :country="singleWidget3Code" :holiday="singleWidget3Name" :date="singleWidget3Date"/>
</div>
</template>

<script>
import {mapActions} from "vuex";
import WidgetItem from "@/components/WidgetItem";

export default {
  name: "CountriesWidget",
  data(){
    return{
      singleWidget1: null,
      singleWidget1Code: null,
      singleWidget1Name: null,
      singleWidget1Date: null,

      singleWidget2: null,
      singleWidget2Code: null,
      singleWidget2Name: null,
      singleWidget2Date: null,

      singleWidget3: null,
      singleWidget3Code: null,
      singleWidget3Name: null,
      singleWidget3Date: null,


    }
  },

  components:{
    WidgetItem
  },

 async mounted() {
    this.singleWidget1 =  await this.getSingleWidget({year: 2023, countryCode: 'UA'})
    this.singleWidget1Code = this.singleWidget1[0].countryCode
    this.singleWidget1Name = this.singleWidget1[0].name
    this.singleWidget1Date = this.singleWidget1[0].date

   this.singleWidget2 =  await this.getSingleWidget({year: 2025, countryCode: 'KR'})
   this.singleWidget2Code = this.singleWidget2[0].countryCode
   this.singleWidget2Name = this.singleWidget2[1].name
   this.singleWidget2Date = this.singleWidget2[0].date

   this.singleWidget3 =  await this.getSingleWidget({year: 2027, countryCode: 'MX'})
   this.singleWidget3Code = this.singleWidget3[0].countryCode
   this.singleWidget3Name = this.singleWidget3[1].name
   this.singleWidget3Date = this.singleWidget3[0].date
 },

  methods: {
    ...mapActions(['getSingleCountry', 'getSingleWidget']),

  },
}
</script>

