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
</template>

<style lang="scss" scoped></style>