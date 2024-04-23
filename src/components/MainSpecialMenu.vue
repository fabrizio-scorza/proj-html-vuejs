<script>
export default {

}
</script>

<template>
    <!-- riga divisa in due colonne  -->
    <div class="row">
        <div class="col-6 bg-img flex">
            <img src="/img/h1-img-7n.png" alt="">
        </div>
        <div class="col-6 specials">
            <h2>SPECIALS*</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, excepturi.</p>
            <ul>
                <li>
                    <h3><span>$10</span>COMBO PICCOLO</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, impedit.</p>
                </li>
                <li>
                    <h3><span>$20</span>COMBO MEZZO</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, nihil!</p>
                </li>
                <li>
                    <h3><span>$30</span>COMBO GRANDE</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, voluptatem.</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.row {
    margin-top: 8px;
}

.bg-img {
    height: 600px;
    background-image: url(/img/h1-img-4.jpg);
    background-position: center;
    justify-content: center;
    align-items: center;

    img {
        width: 250px;
        aspect-ratio: 1;
    }
}

.specials {
    padding: 80px 180px;

    h2 {
        color: $text-darkgray;
        font-size: 32px;
    }

    p {
        color: $text-gray;
    }

    h3 {
        color: $text-darkgray;
        font-size: 22px;
        padding-bottom: 10px;
    }

    span {
        color: $text-bordeaux;
        padding-right: 10px;
    }

    ul>li:first-child {
        padding-top: 20px;
    }

    li>p {
        font-size: 14px;
        padding-left: 42px;
        padding-bottom: 15px;
    }
}
</style>