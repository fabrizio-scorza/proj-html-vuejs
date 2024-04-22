<script>
export default {

}
</script>

<template>
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

<style lang="scss">
@use '../style/partials/variables' as *;

.jumbo {
    padding: 30px 0;
    background-image: url(/img/h3-rev-img-5.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 550px;
    justify-content: space-between;
    align-items: center;
    overflow-x: hidden;

    img {
        height: 280px;
    }
}

.prev,
.next {
    filter: invert(100%);
    width: 60px;
    cursor: pointer;


    span {
        position: absolute;
        bottom: 135px;
        filter: invert(100%);
        color: $orange;
        font-size: 12px;
    }
}

.prev {
    transform: translateX(-50%);

    span {
        transform: rotate(90deg);
        right: 8px;
    }
}

.next {
    transform: translateX(50%);

    span {
        transform: rotate(270deg);
        left: 8px;
    }
}
</style>