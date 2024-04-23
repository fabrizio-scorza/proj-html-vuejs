<script>
import { store } from '../store';

export default {
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <section class="menu-section">
        <div class="container menu-des">
            <h4>CHOSE YOUR FLAVOR</h4>
            <h1>THE BEST PIZZA MENU IN TOWN</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolor, soluta sed ipsa eligendi repellendus
                maxime facilis totam libero a!</p>
        </div>
        <div class="menu">
            <ul class="flex">
                <li v-for="pizza in store.menu">
                    <img :src="pizza.img" alt="">
                    <h4>{{ pizza.name.toUpperCase() }}</h4>
                    <p>
                        <span v-if="pizza.firstPrice" class="first-price">{{ pizza.firstPrice }}</span>
                        {{ pizza.price }}
                    </p>
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.menu-section {
    overflow-x: hidden;
}

.menu-des {
    text-align: center;
    margin-top: 8px;
    padding-top: 60px;
    padding-bottom: 30px;

    h4 {
        font-size: 12px;
        color: $text-bordeaux;
    }

    h1 {
        font-size: 32px;
        color: $text-darkgray;
        padding-bottom: 15px;
    }

    p {
        font-size: 18px;
        color: $text-gray;
        padding-bottom: 40px;
    }
}

.menu {
    text-align: center;
    margin: 0 -50px;
    padding-bottom: 80px;

    img {
        width: 180px;
        aspect-ratio: 1;
    }

    h4 {
        color: $gold;
    }

    p {
        color: $orange ;

        .first-price {
            color: $text-gray;
            text-decoration: line-through;
        }
    }



}

.flex {
    justify-content: space-between;
}
</style>