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

    <div class="wrapper">
        <!-- sezione con il menù delle pizze -->
        <div class="container menu-des">
            <h4>CHOSE YOUR FLAVOR</h4>
            <h1>THE BEST PIZZA MENU IN TOWN</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolor, soluta sed ipsa eligendi repellendus
                maxime facilis totam libero a!</p>
        </div>
        <div class="menu">
            <ul class="flex">
                <!-- lista popolata dallo store -->
                <li v-for="pizza in store.menu">
                    <img :src="pizza.img" alt="">
                    <h4>{{ pizza.name.toUpperCase() }}</h4>
                    <p>
                        <span v-if="pizza.firstPrice" class="first-price">{{ pizza.firstPrice }}</span>
                        {{ pizza.price }}
                    </p>
                    <!-- badge inserito solo se la pizza è sold out -->
                    <div v-if="pizza.isSoldOut" class="badge flex"><span>SOLD</span></div>
                </li>
            </ul>
        </div>
        <!-- bottoni carrello  -->
        <div class="cart">
            <div class="square">
                <img src="/svg/svg-7.svg" alt="">
            </div>
            <div class="square">
                <img src="/svg/svg-9.svg" alt="">
            </div>
        </div>
        <div class="event">
            <!-- sezione con le datedate degli eventi -->
            <div class="row">
                <div class="col-6 date">
                    <h4>MADE WITH LOVE</h4>
                    <h1>DELISH PIZZA DEALS</h1>
                    <ul>
                        <!-- lista con le hot date -->
                        <li class="flex">
                            <div>
                                <h2>02</h2>
                                <h3>NOV</h3>
                            </div>
                            <div>
                                <p>TRADITIONAL NAPOLITAN PIES IN KIOTO PIZZA MERCATO</p>
                                <div class="location">
                                    <font-awesome-icon :icon="['fas', 'location-dot']" />
                                    <span>204 E. Pizzetta Tommaso</span>
                                </div>
                            </div>
                        </li>
                        <li class="flex">
                            <div>
                                <h2>03</h2>
                                <h3>NOV</h3>
                            </div>
                            <div>
                                <p>TERRAZZA PATO DINING SPACE OPENING THIS WEEKEND</p>
                                <div class="location">
                                    <font-awesome-icon :icon="['fas', 'location-dot']" />
                                    <span>204 E. Pizzetta Tommaso</span>
                                </div>
                            </div>
                        </li>
                        <li class="flex">
                            <div>
                                <h2>05</h2>
                                <h3>NOV</h3>
                            </div>
                            <div>
                                <p>SIENNA PRIVATE DINING ROOM WITH STHEPHANE BRUNN</p>
                                <div class="location">
                                    <font-awesome-icon :icon="['fas', 'location-dot']" />
                                    <span>204 E. Pizzetta Tommaso</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-6">
                    <img src="/img/h3-img-5a.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="reservation">
            <!-- sezione prenotazione tavolo -->
            <div class="container">
                <div class="wrapper flex">
                    <div class="input flex">
                        <p>1 Person"</p>
                        <font-awesome-icon :icon="['fas', 'user-group']" class="icon" />
                        <span>FOR</span>
                    </div>
                    <div class="input flex">
                        <p>11/29/2020</p>
                        <font-awesome-icon :icon="['fas', 'calendar']" class="icon" />
                        <span>AT</span>
                    </div>
                    <div class="input flex">
                        <p>7:00 pm</p>
                        <font-awesome-icon :icon="['fas', 'clock']" class="icon" />
                    </div>
                    <div class="btn">
                        <p>BOOK A TABLE</p>
                    </div>
                </div>
                <p class="credits">*Powered by OpenTable</p>
            </div>

        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.wrapper {
    overflow-x: hidden;
    position: relative;
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

    .flex {
        justify-content: space-between;
    }

    li {
        position: relative;
    }

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

    .badge {
        width: 45px;
        aspect-ratio: 1;
        color: white;
        background-color: $orange;
        border-radius: 50%;
        font-size: 12px;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0px;
        right: 20px;
    }
}

.cart {
    position: absolute;
    top: 545px;
    right: 0;
    z-index: 1;

    .square {
        height: 40px;
        aspect-ratio: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &:first-of-type {
            background-color: #EF2853;
            margin-bottom: 8px;
        }

        &:last-of-type {
            background-color: white;
        }

        img {
            height: 15px;
        }
    }
}

.col-6 {
    margin-bottom: 8px;

    img {
        display: block;
    }
}

.date {
    background-image: url(/public/img/cielostellato.PNG);
    color: white;
    padding: 75px 100px;

    h4 {
        color: $text-bordeaux;
        font-size: 12px;
    }

    h1 {
        font-size: 34px;
        font-weight: 500;
    }

    li {
        padding-top: 30px;
        padding-bottom: 45px;

        &:not(:last-child) {
            border-bottom: 2px dotted $gold;
        }

    }

    h2 {
        font-size: 44px;
        font-weight: 500;
        line-height: 40px;
        color: $text-bordeaux;
        padding-right: 40px;
    }

    h3 {
        font-size: 24px;
        line-height: 22px;
    }

    p {
        font-size: 18px;
        width: 350px;
    }

    .location {
        color: $text-bordeaux;
    }

    span {
        font-size: 14px;
        padding-left: 10px;
    }
}

.reservation {
    background-image: url(/img/h3-background-img-3.jpg);
    height: 180px;
    margin-bottom: 8px;

    .wrapper {
        justify-content: center;
        padding-top: 70px;
        gap: 50px
    }

    .input {
        cursor: pointer;
        position: relative;
        width: 160px;
        height: 40px;
        border: 2px solid black;
        background-color: white;
        align-items: center;
        justify-content: space-between;
        padding: 12px;

        p {
            color: $text-gray;
            font-size: 12px;
        }

        .icon {
            color: $gold;
            font-size: 16px;
        }

        span {
            position: absolute;
            right: -40px;
            color: white;
        }
    }

    .btn {
        cursor: pointer;
        width: 160px;
        height: 40px;
        background-color: $orange;
        color: white;
        text-align: center;
        padding: 11px;
        font-size: 12px;
    }

    .credits {
        color: white;
        font-size: 12px;
    }
}
</style>