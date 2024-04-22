<script>
import HeaderJumbo from './HeaderJumbo.vue';
import { store } from '../store';

export default {
    components: {
        HeaderJumbo
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <header class="app_header">
        <nav class="navbar container flex">
            <div class="btn">
                <a href="#">ORDER ONLINE</a>
            </div>
            <div class="menu">
                <ul class="flex">
                    <li v-for="link in store.headerLinks" :key="link.id" :class="link.type">
                        <img v-if="link.svg" :src="link.svg" alt="" class="svg">
                        <a v-if="link.name" :href="link.href">{{ link.name.toUpperCase() }}</a>
                        <img v-else :src="link.img" alt="">
                    </li>
                </ul>
            </div>
            <ul class="action flex">
                <li class="flex cart">
                    <img src="/svg/svg-1.svg" alt="" class="svg">
                    <a href="#">CART</a>
                    <img src="/svg/svg-5.svg" alt="" class="cart-baloon">
                    <span class="cart-num">1</span>
                </li>
                <li class="flex">
                    <img src="/svg/svg-12.svg" alt="" class="svg">
                    <a href="#">SEARCH</a>
                </li>
            </ul>
        </nav>
        <HeaderJumbo />
    </header>
</template>

<style lang="scss" scoped>
.app_header {
    background-image: url(/img/cielostellato.PNG);
    color: white;
    font-size: 12px;
    padding: 16px 0;
}

.navbar {
    justify-content: space-between;
    align-items: center;
}

.btn {
    width: 95px;
    height: 30px;
    background-color: #D2401E;
    text-align: center;
    line-height: 30px;
}

.menu {
    ul {
        gap: 24px;
        align-items: center;

        &>li:first-child {
            display: flex;
        }
    }

    .logo img {
        width: 100px;
    }
}

.action {
    gap: 15px;
    align-items: center;
}

.cart {
    position: relative;
}

.cart-baloon {
    position: absolute;
    filter: invert(100%);
    width: 12px;
    left: -8px;
    top: -2px;
}

.cart-num {
    position: absolute;
    z-index: 1;
    color: #D2401E;
    top: -6px;
    left: -5px;
}

.svg {
    filter: invert(100%);
    padding-right: 4px;
    width: 22px;

}
</style>