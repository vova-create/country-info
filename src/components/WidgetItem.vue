<template>
  <div class="widget-item">
    <h3>{{ country }}</h3>
    <p>{{ holiday }}</p>
    <span>{{ date }}</span>
  </div>
</template>

<script>
export default {
  name: "WidgetItem",
  props: {
    country: String,
    holiday: String,
    date:String,
  },
}
</script>


