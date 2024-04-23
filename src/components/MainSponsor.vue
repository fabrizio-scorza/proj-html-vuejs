<script>
export default {

}
</script>

<template>
    <section class="built-your-pizza flex">
        <!-- sezione con immagine e titolo a tutta pagina -->
        <h1>GO AHEAD AND BUILT YOUR HOWN PIZZA WE WON'T JUDGE!</h1>
    </section>
    <section class="people">
        <!-- sezione con le foto del team -->
        <div class="row">
            <div class="col-3">
                <img src="/img/h1-team-1a-700x700.jpg" alt="">
            </div>
            <div class="col-3">
                <img src="/img/h1-team-2a.jpg" alt="">
            </div>
            <div class="col-3">
                <img src="/img/h1-team-4a.jpg" alt="">
            </div>
            <div class="col-3">
                <img src="/img/h1-team-3a.jpg" alt="">
            </div>
        </div>
    </section>
    <section class="sponsor flex">
        <!-- sezione con gli sponsor -->
        <ul class="flex">
            <li>
                <img src="/img/h1-clients-img-4.png" alt="">
            </li>
            <li>
                <img src="/img/h1-clients-img-3.png" alt="">
            </li>
            <li>
                <img src="/img/h1-clients-img-1.png" alt="">
            </li>
            <li>
                <img src="/img/h1-clients-img-2.png" alt="">
            </li>
            <li>
                <img src="/img/h1-clients-img-5.png" alt="">
            </li>
        </ul>

    </section>
</template>

<style lang="scss" scoped>
.built-your-pizza {
    margin: 8px 0;
    height: 400px;
    color: white;
    background-image: url(/img/h3-background-img.jpg);
    background-position: center;
    background-size: 760px 200px;
    align-items: center;

    h1 {
        font-size: 34px;
        width: 250px;
        margin-left: 380px;
        font-weight: 500;
        line-height: 44px;
    }
}

.sponsor {
    background-color: #F6F7F2;
    height: 180px;
    justify-content: center;
    margin-top: 2px;

    img {
        width: 160px;
    }

    .flex {
        gap: 20px;
    }
}
</style>