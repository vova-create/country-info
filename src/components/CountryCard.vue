<template>
  <div class="country-card">
    <h2 class="country-card__name">{{ name }}</h2>
    <div class="country-card__details">
      <p class="country-card__description"> {{ code }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountryCard",
  props: {
    name: String,
    code: String,
  },
}
</script>


