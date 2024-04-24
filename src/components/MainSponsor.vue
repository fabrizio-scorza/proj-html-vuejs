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
                <img src="/img/h1-team-1a-700x700.jpg" alt="" class="at-hover">
                <div class="overlay flex">
                    <h3>FRANK BAILEY</h3>
                    <h4>Kitchen Porter</h4>
                    <ul class="flex social-icons">
                        <li>
                            <a href="#">
                                <img src="/svg/instagram.svg" alt="">
                            </a>
                        </li>
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
                    </ul>
                </div>
            </div>
            <div class="col-3">
                <img src="/img/h1-team-2a.jpg" alt="" class="at-hover">
                <div class="overlay flex">
                    <h3>FRANK BAILEY</h3>
                    <h4>Kitchen Porter</h4>
                    <ul class="flex social-icons">
                        <li>
                            <a href="#">
                                <img src="/svg/instagram.svg" alt="">
                            </a>
                        </li>
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
                    </ul>
                </div>
            </div>
            <div class="col-3">
                <img src="/img/h1-team-4a.jpg" alt="" class="at-hover">
                <div class="overlay flex">
                    <h3>FRANK BAILEY</h3>
                    <h4>Kitchen Porter</h4>
                    <ul class="flex social-icons">
                        <li>
                            <a href="#">
                                <img src="/svg/instagram.svg" alt="">
                            </a>
                        </li>
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
                    </ul>
                </div>
            </div>
            <div class="col-3">
                <img src="/img/h1-team-3a.jpg" alt="" class="at-hover">
                <div class="overlay flex">
                    <h3>FRANK BAILEY</h3>
                    <h4>Kitchen Porter</h4>
                    <ul class="flex social-icons">
                        <li>
                            <a href="#">
                                <img src="/svg/instagram.svg" alt="">
                            </a>
                        </li>
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
                    </ul>
                </div>
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
@use '../style/partials/variables' as *;

.col-3 {
    position: relative;

    &:hover {
        background-image: url(/svg/dotted.svg);

        .at-hover {
            opacity: 0;
            transition: opacity 800ms ease-in-out;
        }

        .overlay {
            opacity: 1;
            transition: opacity 800ms ease-in-out;

        }
    }
}

.overlay {
    position: absolute;
    height: 90%;
    width: 90%;
    top: 5%;
    left: 5%;
    color: white;
    background-color: $orange;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;

    h3 {
        font-size: 24px;
        line-height: 18px;
    }

    h4 {
        font-size: 14px;
        padding-bottom: 20px;
    }

}

.social-icons {
    gap: 8px;
    justify-content: center;

    img {
        filter: invert(100%);
        width: 14px;
        aspect-ratio: 1;
    }
}

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