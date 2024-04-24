<script>
export default {

}
</script>

<template>
    <section class="advertising">
        <!-- sezione con immagini publicitarie del sito -->
        <div class="row">
            <div class="col-3-gap">
                <img src="/img/h3-img-1.jpg" alt="">
                <div class="overlay">
                    <div class="circle flex">
                        <font-awesome-icon :icon="['fas', 'eye']" />
                    </div>
                </div>
            </div>
            <div class="col-3-gap">
                <img src="/img/h3-img-2.jpg" alt="">
                <div class="overlay">
                    <div class="overlay">
                        <div class="circle flex">
                            <font-awesome-icon :icon="['fas', 'eye']" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-3-gap">
                <img src="/img/h3-img-3.jpg" alt="">
                <div class="overlay">
                    <div class="overlay">
                        <div class="circle flex">
                            <font-awesome-icon :icon="['fas', 'eye']" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-3-gap">
                <img src="/img/h3-img-4.jpg" alt="">
                <div class="overlay">
                    <div class="overlay">
                        <div class="circle flex">
                            <font-awesome-icon :icon="['fas', 'eye']" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="quotes-section">
        <div class="flex quotes-wrapper">
            <!-- sezione con citazione e bottoni per scorrere le frasi a effetto -->
            <div class="prev">
                <img src="/svg/svg-5.svg" alt="">
                <span>PREV</span>
            </div>
            <div class="quotes container">
                <font-awesome-icon :icon="['fas', 'quote-left']" class="icon" />
                <p>"FORGET THE TRENDY PIZZA SHOPS, THIS HIDDEN SPOT MAKES THE BEST NEW YORK-STYLE PIZZA SLICE IN NAPLES"
                </p>
                <p class="text-orange">WASHINGTON POST 2018</p>
                <div class="dot">
                    <font-awesome-icon :icon="['fas', 'circle']" class="gold" />
                    <font-awesome-icon :icon="['fas', 'circle']" />
                    <font-awesome-icon :icon="['fas', 'circle']" />
                </div>

            </div>
            <div class="next">
                <img src="/svg/svg-5.svg" alt="">
                <span>NEXT</span>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
@use '../style/partials/mixins' as *;

.advertising {
    margin-top: 8px;

    .row {
        gap: 8px;
    }

    .col-3-gap {
        width: calc(3*100%/12 - 6px);
        position: relative;

        img {
            display: block;
        }

        &:hover {
            background-image: url(/svg/dotted.svg);

            img {
                opacity: 0;
                transition: opacity 400ms ease-in-out;
            }

            .overlay {
                opacity: 1;
                transition: opacity 400ms ease-in-out;

            }
        }
    }
}

.overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;

    .circle {
        width: 50px;
        aspect-ratio: 1;
        border-radius: 50%;
        background-color: $orange;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 20px;
    }
}


.quotes-section {
    background-color: #F6F7F2;
    margin-top: 8px;
}

.quotes-wrapper {
    @include bg-with-next-prev;
    background-image: url(/img/h3-testimonials-bckgrnd.jpg);
    background-size: 1200px;
}

.quotes {
    text-align: center;
    margin: 45px 0;

    .icon {
        font-size: 54px;
        color: $gold;
        padding-bottom: 15px;
    }

    p:first-of-type {
        color: $text-darkgray;
        font-size: 22px;
        padding-bottom: 8px;
    }

    p:last-of-type {
        color: $orange;
        font-size: 14px;
        padding-bottom: 15px;
    }

    .dot {
        font-size: 10px;
        color: #E4E4D4;

        & :not(:last-child) {
            margin-right: 8px;
        }
    }

    .gold {
        color: $gold;
    }
}

span {
    bottom: 26px;
}
</style>