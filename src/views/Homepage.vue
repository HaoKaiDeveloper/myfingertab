<template>
  <section>
    <div class="swiper_box">
      <ImageSwiper :imgs="swiperImgs" />
    </div>
    <div class="news">
      <p class="title">最新消息</p>
      <div class="news_cards">
        <NewsList :newsList="newsList" />
      </div>
    </div>
    <div class="popMusic">
      <p class="title">熱門樂譜</p>
      <div class="music_cards">
        <MusicCard v-for="m in musicList" :key="m.id" :m="m" 
        @open-music-detail="toggleMusicDetail" />
      </div>
    </div>
    <MusicDetailPopup 
    :data="musicDetail" 
    :show="showMusicDetail"
     @close-music-detail="toggleMusicDetail"
    />
  </section>
</template>

<script>
import { useStore } from "vuex";
import { ref } from "vue";
import  {
    ImageSwiper,
    NewsList
} from '../components/homepage/index.js'
import MusicCard from "../components/UI/MusicCard.vue";
import MusicDetailPopup from "./MusicDetail.vue";
export default {
  components: { ImageSwiper, NewsList, MusicCard,MusicDetailPopup },
  setup() {
    const store = useStore();
    const swiperImgs = ref([]);
    const newsList = ref([]);
    const musicList = ref([]);
    const showMusicDetail=ref(false);
    const musicDetail=ref({});

    (async function getData() {
      const [resImgs, news, allMusic] = await Promise.all([
        store.dispatch("getHomeSwiperImgs"),
        store.dispatch("getHomeNews"),
        store.dispatch("getAllMusic",{num:6,sortBy:'follower',page:1}),
      ]);
      swiperImgs.value = resImgs;
      newsList.value = news;
      musicList.value = allMusic.slice(0, 6);
    })();

    function toggleMusicDetail(id){
      if(!id){
        showMusicDetail.value=false;
        musicDetail.value={};
        return
      }
      musicDetail.value=musicList.value.find(m=>m.id===id);
      showMusicDetail.value=true;
      console.log(musicDetail.value)
    }

    return {
      swiperImgs,
      newsList,
      musicList,
      musicDetail,
      showMusicDetail,
      toggleMusicDetail,
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  width: 90%;
  margin: 0 auto;
  color: var(--grey-4);

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
}
.swiper_box {
  width: 100%;
}

.title {
  text-align: center;
  font-size: var(--f-xl);
  margin-bottom: 0.5em;
}

.news {
  width: 100%;
  margin-bottom: calc(5em + 1vw);
}

.popMusic {
  width: 100%;
  .music {
    width: 100%;

    &_cards {
      display: grid;
      grid-template-columns: repeat(3, minmax(20em, 30em));
      justify-content: center;
      gap: 2em;

      @media screen and (max-width: 820px) {
        grid-template-columns: repeat(2, minmax(20em, 30em));
        gap: 1em;
      }
      @media screen and (max-width: 550px) {
        grid-template-columns: 1fr;
        gap: 1em;
      }
    }
  }
}
</style>
