<template>  
  <div class="card">
    <div class="card-holder">
    <img :src="imgSrc" alt="Card Image" class="card-img">
        <h1>For College Students</h1>
        <p>Who want to rocket-start their career and get placed in</p> 
        <p>thier dream companies</p>
        <button class="program-btn">
            <p>View Program</p>
            <img :src="arrow" alt="Arrow Icon" class="arrow-icon"> 
        </button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        arrow: require('@/assets/arrow.png')
      };
    },
    props: {
        imgSrc: {
            type: String,
            required: true,
        }
    }
  };
</script>

<style>
    .card {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 3px solid #005bbd;
        border-radius: 50px;
        width: 55%;
        height: 750px;
        margin: 70px auto;
        overflow: hidden;
    }

    .card-img {
        max-width: 100%;
        height: 100%; 
        border-radius: 50px 50px 0px 0px; 
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 
    }

    .card-holder {
        text-align: center;
    }

    .card-holder h1 {
        font-size: 40px;
    }

    .card-holder p {
        font-size: 25px;
    }

    .arrow-icon{
        height: 30px;
        width: 30px;
    }

    .program-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        font-weight: bold;
        border: 1px solid #005bbd;
        color: #005bbd;
        padding: 0px 50px;
        border-radius: 5px;
        margin: 30px auto;
        cursor: pointer;
    }
</style>