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
    <!-- footer diviso in due colonne -->
    <div class="row footer">
        <div class="col-6 wrapper flex">
            <div class="row">
                <!--prima colonna a sua volta divisa in tre colonne con le informazioni sui ristoranti e gli orari di apertura-->
                <ul class="col-4">
                    <li>
                        <h3> FIND OUR RESTAURANTS</h3>
                    </li>
                    <!-- lista degli idirizzi popolata dallo store -->
                    <li v-for=" restaurant in store.restaurants" class="address">
                        <span>{{ restaurant.address }}</span>
                        <span>{{ restaurant.city }}</span>
                        <span>{{ restaurant.number }}</span>
                    </li>
                </ul>
                <ul class="col-4 hours">
                    <!-- lista con gli orari -->
                    <li>
                        <h3> WORKING HOURS</h3>
                    </li>
                    <li>
                        <h4>MONDAY</h4>
                        <p class="text-bordeaux">Kitchen Closed</p>
                    </li>
                    <li>
                        <h4>TUESDAY UNTIL FRIDAY</h4>
                        <p>9:00 - 22:00</p>
                    </li>
                    <li>
                        <h4>SATURDAY</h4>
                        <p>Sadurday 11am to midnigth</p>
                    </li>
                    <li>
                        <h4>SUNDAY</h4>
                        <p>9:00 - 22:00</p>
                    </li>
                    <li class="flex social">
                        <h4>FOLLOW US:</h4>
                        <!-- link social -->
                        <ul class="flex social-icons">
                            <li>
                                <a href="#">
                                    <img src="/svg/twitter.svg" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="/svg/facebook.svg" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="/svg/instagram.svg" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="/svg/linkedin.svg" alt="">
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div class="col-4">
                    <!-- frase a effetto -->
                    <p class="quote"> THE DON PEPPE CREW FIRST AND FOREMOST VALUES AN AUTHENTIC, WELL BAKED SLICE OF
                        PIZZA. </p>
                </div>
            </div>
            <div class="flex credits">
                <!-- credits del creator e bollino qualità-->
                <p>Created with &hearts; by <span>Sbriz Interactive</span></p>
                <img src="/img/footer-bottom-img.png" alt="">
            </div>
        </div>
        <div class="col-6">
            <!-- colonna con immagine -->
            <img id="footer-img" src="/img/footer-img-1.jpg" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;



.footer {
    max-height: 440px;

    h3 {
        font-size: 14px;
        color: $gold;
        padding-bottom: 15px;
    }

    h4 {
        font-size: 12px;
        color: $gold;
    }

    p,
    span {
        color: $text-gray;
        font-size: 14px;
    }

    .quote {
        color: white;
        font-size: 16px;
        padding: 0 20px;
    }
}

.wrapper {
    background-image: url(/img/cielostellato.PNG);
    padding: 75px 30px 0;
    flex-direction: column;
}

.row {
    flex-grow: 1;
}

.address {
    line-height: 14px;
    padding-bottom: 15px;

    span {
        display: block;
    }
}

.hours {
    p {
        padding-bottom: 15px;
    }

    .text-bordeaux {
        color: $text-bordeaux;
    }

}

.social {
    align-items: center;
    gap: 10px;
    padding-top: 30px;
}

.social-icons {
    gap: 8px;

    img {
        filter: invert(100%);
        width: 14px;
        aspect-ratio: 1;
    }
}

.credits {
    justify-content: space-between;
    align-items: end;
    padding-bottom: 20px;

    img {
        height: 75px;
        aspect-ratio: 1;
    }

    p {
        color: $gold;
    }

    span {
        color: $text-green;
    }
}

#footer-img {
    display: block;
    height: 100%;
}
</style>