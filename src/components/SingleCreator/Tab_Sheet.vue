<template>
  <article class="tab_sheet">
    <div class="tab_cards">
      <MusicCard v-for="m in creatorSheetMusic" 
      :key="m.id" :m="m"
      @open-music-detail="toggleMusicDetail"
       />
    </div>
    <div class="pages_box">
      <div class="pages">
        <button
          type="button"
          v-if="activePage >= 2"
          @click="changeActivePage(activePage - 1)"
        >
          上一頁
        </button>
        <button
          type="button"
          v-for="page in pagesArr[activePagesArr]"
          :key="page"
          :class="{ active: activePage === page }"
          @click="changeActivePage(page)"
        >
          {{ page }}
        </button>
        <button
          type="button"
          v-if="activePage < totalPages"
          @click="changeActivePage(activePage + 1)"
        >
          下一頁
        </button>
        <button
          type="button"
          v-if="activePage < totalPages"
          @click="changeActivePage(totalPages)"
        >
          最後
        </button>
      </div>
    </div>
    <MusicDetail :data="musicDetail" 
    @close-music-detail="toggleMusicDetail"
    />
  </article>
</template>

<script>
import MusicCard from "../UI/MusicCard.vue";
import MusicDetail from "../../views/MusicDetail.vue";
import { ref, watch} from "vue";
export default {
  components: {
    MusicCard,
    MusicDetail,
  },
  props: ["creatorSheetMusic", "totalPages", "activePage"],
  setup(props, context) {
    const musicDetail=ref({})
    const showMusicDetail=ref(false)
    const musicList=ref([...props.creatorSheetMusic])
    function changeActivePage(page) {
      context.emit("change-active-page", page);
    }

    const pagesArr = ref([]);
    const activePagesArr =ref(0);
    let arr = [];
    for (let i = 1; i <= props.totalPages; i++) {
      arr.push(i);
    }
    Array.from(
      { length: Math.ceil(props.totalPages / 5) },
      (_, index) => {
        const start = index * 5;
        const end = (index + 1) * 5;
        pagesArr.value.push(arr.slice(start, end));
      }
    );
    watch(
    () => props.activePage,
    () => {
      const activePagesArrMax=pagesArr.value[activePagesArr.value][4]
      const activePagesArrMin=pagesArr.value[activePagesArr.value][0]
      if(props.activePage>activePagesArrMax){
        activePagesArr.value++
      }
      if(props.activePage<activePagesArrMin){
        activePagesArr.value--
      }
      if(props.activePage===props.totalPages){
        activePagesArr.value=pagesArr.value.length-1
      }
    }
    );

    function toggleMusicDetail(id){
      if(!id){
        showMusicDetail.value=false;
        musicDetail.value={};
        return
      } 
      musicDetail.value=props.creatorSheetMusic.find(m=>m.id===id);
      showMusicDetail.value=true;
    }

    return {
      pagesArr,
      activePagesArr,
      musicDetail,
      showMusicDetail,
      toggleMusicDetail,
      changeActivePage,
    };
  },
};
</script>

<style scoped lang="scss">
.tab_sheet {
  width: 100%;
}
.tab_cards {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(20em, 30em));
  gap: 2em;
  justify-content: center;

  @media screen and (max-width: 820px) {
    grid-template-columns: repeat(2, minmax(20em, 30em));
    gap: 1em;
  }
  @media screen and (max-width: 550px) {
    grid-template-columns: 1fr;
    gap: 1em;
  }
}

.pages_box {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  .pages {
    display: flex;
    align-items: center;
    gap: 1em;
    margin-top: 2em;
    button {
      font-size: var(--f-mi);
      padding: 0.2em 0.7em;
      border-radius: 7px;
      background-color: var(--grey-2);

      &.active,&:hover {
        background-color: var(--l-orange-1);
        color: var(--grey-4);
      }
    }
  }
}
</style>
