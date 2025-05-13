<template>
<div class="card-pg">
    <h1>{{text}}</h1>
    <p>{{description1}}</p> 
    <p>{{description2}}</p>
</div>
</template>

<script>

export default {
    name: 'OurProgram',
    props: {
        text: {
            type: String,
            required: true
        },
        description1: {
            type: String,
            required: true
        },
        description2: {
            type: String,
            required: true
        }
    }
}
</script>

<style>
    .card-pg {
        text-align: center;
        margin-bottom: 10px;
    }

    .card-pg h1 {
        font-size: 50px;
        margin: 20px 
    }

    .card-pg p {
        font-size: 35px;
        margin: 10px;
    }
</style>