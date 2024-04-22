<script>
import { store } from '../store';

export default {
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
                        <a v-if="link.name" :href="link.href">{{ link.name.toUpperCase() }}</a>
                        <img v-else :src="link.img" alt="">
                    </li>
                </ul>
            </div>
            <ul class="action flex">
                <li v-for="action in store.headerActions" :class="action.type" class="flex">
                    <img :src="action.svg" alt="">
                    <a :href="action.href">{{ action.name.toUpperCase() }}</a>
                </li>

            </ul>
        </nav>
        <div class="jumbo">

        </div>
    </header>
</template>

<style lang="scss" scoped>
.app_header {
    background-image: url(/public/img/cielostellato.PNG);
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
    }

    img {
        width: 100px;
    }
}

.action {
    gap: 15px;
    align-items: center;

    img {
        width: 18px;
        aspect-ratio: 1;
        filter: invert(100%);
        padding-right: 4px;
    }
}
</style>