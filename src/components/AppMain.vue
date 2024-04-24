<script>
import MainHero from './MainHero.vue';
import MainSpecialMenu from './MainSpecialMenu.vue';
import MainSponsor from './MainSponsor.vue';
import MainMenu from './MainMenu.vue';

export default {
    components: {
        MainHero,
        MainSpecialMenu,
        MainSponsor,
        MainMenu
    }

}
</script>

<template>
    <MainHero />
    <MainSpecialMenu />
    <MainSponsor />
    <MainMenu />
    <div class="go-up">
        <a href="#"><img src="/svg/svg-4.svg" alt=""></a>
    </div>
</template>

<style lang="scss" scoped>
.go-up {
    position: fixed;
    right: 4px;
    bottom: 15px;
    z-index: 10;
    width: 40px;
    aspect-ratio: 1;
    background-color: white;
    border-radius: 50%;
    text-align: center;
    padding-top: 8px;

}
</style>