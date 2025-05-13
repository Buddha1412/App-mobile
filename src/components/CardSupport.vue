<template>
    <div class="card-support-background">
        <div class="card-sp">
            <img :src="imgSrc" alt="Card Image" class="card-img">
            <h2>Career Portfolio<br>Optimization</h2>
            <p>Referrals And Career Tips<br>By 400+ Alumni And<br>Mentors From Top<br>Product-Based<br>Companies</p> 
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardSupport'
}
</script>

<style>
    .card-sp {
        background-color: #fff;
        border: 1px solid #005bbd;
        text-align: center;
        width: 15%;
        padding: 30px 30px;
        box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.1); 
        width: 80%;
        margin-bottom: 50px;
    }

    .card-sp h2 {
        font-size: 25px;
    }

    .card-sp p {
        font-size: 18px;
    }
</style>