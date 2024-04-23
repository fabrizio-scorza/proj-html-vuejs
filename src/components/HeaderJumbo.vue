<script>
export default {

}
</script>

<template>
    <!-- jumbo sotto la barra di navigazione con immagine e bottoni per scorrere le immagini -->
    <div class="jumbo flex">
        <div class="prev">
            <img src="/svg/svg-5.svg" alt="">
            <span>PREV</span>
        </div>
        <img src="/img/h3-rev-img-6.png" alt="">
        <div class="next">
            <img src="/svg/svg-5.svg" alt="">
            <span>NEXT</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
@use '../style/partials/mixins' as *;

.jumbo {
    @include bg-with-next-prev;
    background-image: url(/img/h3-rev-img-5.png);
    background-size: 550px;

    img {
        height: 280px;
    }

    span {
        bottom: 135px;
    }

    .next span {
        left: 8px;
    }

    .prev span {
        right: 8px;
    }
}
</style>