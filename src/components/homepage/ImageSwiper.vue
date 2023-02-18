<template>
  <swiper
    :modules="modules"
    :space-between="10"
    :pagination="{ clickable: true }"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMounseEnter: true,
    }"
    :loop="true"
    class="swiper"
  >
    <swiper-slide v-for="img in imgs" :key="img.id">
      <img :src="img.imgurl" alt="img" class="img_box" />
    </swiper-slide>
  </swiper>
</template>
<script>
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    imgs: {
      type: [Array],
    },
  },
  setup() {
    return {
      modules: [Pagination, Autoplay],
    };
  },
};
</script>

<style scoped>
.swiper{
  width: 100%;
  height: 15em;
  position: relative;
  z-index: -1;
}

.img_box {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
