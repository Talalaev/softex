<template>
    <div class="home">
        <h1>Home</h1>
        <carousel class="container" :perPage="1" :perPageCustom="[[768, 3]]">
            <slide class="p-1" style="width: 100%;">
                <a target="_blank" href="https://www.google.com.ua/search?source=hp&ei=PlYeW8rTMoWvswG37r7YAQ&q=%D0%B1%D0%B0%D1%80%D1%81%D0%B5%D0%BB%D0%BE%D0%BD%D0%B0+%D0%B3%D0%B0%D1%83%D0%B4%D0%B8&oq=%D0%B1%D0%B0%D1%80%D1%81%D0%B5%D0%BB%D0%BE%D0%BD%D0%B0+%D0%B3%D0%B0%D1%83%D0%B4%D0%B8&gs_l=psy-ab.3..0l10.2083.7722.0.8738.17.11.0.5.5.0.87.734.10.11.0....0...1c.1.64.psy-ab..1.16.839.6..35i39k1j0i131k1.78.ZcXQfl3vyZ4">
                    <img src="../assets/10.jpg" alt="slide-one">
                </a>
            </slide>
            <slide class="p-1" style="width: 100%;">
                <a target="_blank" href="https://www.google.com.ua/search?ei=XVYeW-vhCML_swG_pYOACA&q=%D0%B1%D0%B0%D1%80%D1%81%D0%B5%D0%BB%D0%BE%D0%BD%D0%B0+%D0%BF%D0%BE%D0%B1%D0%B5%D1%80%D0%B5%D0%B6%D1%8C%D0%B5&oq=%D0%B1%D0%B0%D1%80%D1%81%D0%B5%D0%BB%D0%BE%D0%BD%D0%B0+%D0%BF%D0%BE%D0%B1%D0%B5%D1%80%D0%B5%D0%B6%D1%8C%D0%B5&gs_l=psy-ab.3..0j0i22i30k1l8.79058.80825.0.81633.9.9.0.0.0.0.98.731.9.9.0....0...1c..64.psy-ab..0.9.730...0i67k1j0i20i263k1j0i10k1.0.B_NCyLAGuvc">
                    <img src="../assets/11.jpg" alt="slide-two">
                </a>
            </slide>
            <slide class="p-1" style="width: 100%;">
                <a target="_blank" href="https://www.google.com.ua/search?tbm=isch&sa=1&ei=6FYeW5TcMpKNmgXx9IHYBg&q=%D0%B8%D1%81%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F+%D1%80%D0%BE%D0%BD%D0%B4%D0%B0&oq=%D0%B8%D1%81%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F+%D1%80%D0%BE%D0%BD&gs_l=img.3.0.0j0i30k1j0i8i30k1l7.35393.39251.0.40259.17.13.2.2.2.0.168.997.10j2.12.0....0...1c.1.64.img..1.16.1016.0..0i67k1.0.DbMWKxEUJxM">
                    <img src="../assets/12.jpg" alt="slide-three">
                </a>
            </slide>
            <slide class="p-1" style="width: 100%;">
                <a target="_blank" href="https://www.google.com.ua/search?tbm=isch&sa=1&ei=6FYeW5TcMpKNmgXx9IHYBg&q=%D0%B8%D1%81%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F+%D1%80%D0%BE%D0%BD%D0%B4%D0%B0&oq=%D0%B8%D1%81%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F+%D1%80%D0%BE%D0%BD&gs_l=img.3.0.0j0i30k1j0i8i30k1l7.35393.39251.0.40259.17.13.2.2.2.0.168.997.10j2.12.0....0...1c.1.64.img..1.16.1016.0..0i67k1.0.DbMWKxEUJxM">
                    <img src="../assets/13.jpg" alt="slide-four">
                </a>
            </slide>
        </carousel>
    </div>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';

    export default {
        name: 'Home',
        components: {
            Carousel,
            Slide
        }
    }
</script>

<style scoped>
    img {
        height: auto;
        width: 100%;
    }
</style>
