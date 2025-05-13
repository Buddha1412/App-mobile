<template>
  <div class="grid-container">
    <div v-for="(logo, index) in logos" :key="index">
      <img :src="require(`@/assets/logo/${logo}`)" :alt="`Logo ${index + 1}`" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'GridSponser',
  data() {
    return {
      logos: [
        'Microsoft_logo_(2012).svg.png',
        'Google_2015_logo.svg.png',
        'Meta_Platforms_Inc._logo.svg.png',
        'Amazon_logo.svg.png',
        'Swiggy_logo_(old).svg.png',
        'Goldman_Sachs_logo.svg.png',
        'Arcesium_Logo_Metallic_3D-01-1-e1639912697723.png',
        'Adobe_Corporate_logo.svg.png',
        'Myntra_logo.png',
        'ByteDance_logo_English.svg.png',
        'PayPal_2024.svg.png',
        'Oracle_logo.svg.png',
        'Intuit-logo-super-blue.png',
        'Samsung_Black_icon.svg.png',
        'Verizon_2024.svg.png',
        'ServiceNow_logo.svg.png',
        'J_P_Morgan_Logo_2008_1.svg.png',
        'TATA_1mg_Logo.svg.png',
        'IQVIA.svg.png',
        'PayU.svg.png',
        'Cleartrip_Original.svg.png',
        'Barclays_logo.svg.png',
        'Dell_Technologies_logo.svg.png',
        'Espressif_Logo.svg.png',
        'New_Hyland_Logo_for_JP.jpg',
        'Jubilant_FoodWorks.jpg',
        'Flipkart_logo.svg.png',
        'one_leasing.png'
      ]
    };
  }
};
</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 30px;
  background-color: rgb(255, 255, 255);
  padding: 10px;
}

.grid-container > div {
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 10px;
  text-align: center;
}

.grid-container img {
  max-width: 100%;
  height: auto;
  object-fit: contain;
  margin: 10px auto;
}
</style>