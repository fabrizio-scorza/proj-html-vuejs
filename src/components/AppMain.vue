<script>
import MainHero from './MainHero.vue';
import MainSpecialMenu from './MainSpecialMenu.vue';
import MainSponsor from './MainSponsor.vue';

export default {
    components: {
        MainHero,
        MainSpecialMenu,
        MainSponsor
    }

}
</script>

<template>
    <MainHero />
    <MainSpecialMenu />
    <MainSponsor />
</template>

<style lang="scss" scoped></style>