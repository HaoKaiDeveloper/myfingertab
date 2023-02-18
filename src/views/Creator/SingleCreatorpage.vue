<template>
  <section id="singleCreator">
    <p class="title">
      創作者 <span>{{ creator.name }}</span>
    </p>
    <div class="tab">
      <div class="tab_btns">
        <button
          type="button"
          @click="changeTabValue('about')"
          :class="{ active: activeTab === 'about' }"
        >
          關於我
        </button>
        <button
          type="button"
          @click="changeTabValue('sheet')"
          :class="{ active: activeTab === 'sheet' }"
        >
          所有樂譜
        </button>
        <button
          type="button"
          @click="changeTabValue('activity')"
          :class="{ active: activeTab === 'activity' }"
        >
          近期活動
        </button>
      </div>

      <TabAbout :creator="creator" v-if="activeTab === 'about'" />
      <TabSheet
        :creatorSheetMusic="creatorSheetMusic"
        :totalPages="totalPages"
        :activePage="activePage"
        @change-active-page="changeActivePage"
        v-if="activeTab === 'sheet'"
      />
      <TabActivity :creator="creator" v-if="activeTab === 'activity'" /> 
    </div>
  </section>
</template>

<script>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { ref, watch } from "vue";
import {
  TabAbout,
  TabSheet,
  TabActivity,
} from "../../components/SingleCreator/index.js";

export default {
  components: { TabAbout, TabSheet, TabActivity },
  setup() {
    const store = useStore();
    const route = useRoute();

    const creator = ref({});
    const activeTab = ref("about");
    const creatorSheetMusic = ref([]);
    const activePage = ref(1);
    const totalPages = ref(4);

    (async function getCreatorData() {
      const data = await store.dispatch(
        "creator/getSingleCreator",
        route.params
      );
      creator.value = data;
    })();

    async function getCreatorSheetMusic(createId, activepage) {
      const data = await store.dispatch("creator/getSingleCreatorSheetMusic", {
        id: "creatorId-1",
        page: activepage,
      });
      creatorSheetMusic.value = data;
    }

    function changeTabValue(value) {
      activeTab.value = value;
      if (value === "sheet") {
        getCreatorSheetMusic(creator.id, activePage.value);
      }
    }

    function changeActivePage(page) {
      activePage.value = page;
    }

    watch(
      () => activePage.value,
      () => {
        getCreatorSheetMusic(creator.id, activePage.value);
        console.log(activePage.value);
      }
    );

    return {
      creator,
      activeTab,
      creatorSheetMusic,
      totalPages,
      activePage,
      changeTabValue,
      changeActivePage,
    };
  },
};
</script>

<style lang="scss" scoped>
#singleCreator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  width: 90%;
  min-height: 95vh;
  margin: 0 auto;
  color: var(--grey-4);
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
}
.title {
  align-self: flex-start;
  font-size: var(--f-xl);
  margin-bottom: 0.5em;
  margin-left: 1.5rem;
}

.tab {
  width: 100%;
  min-height: 95vh;
  &_btns {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
    margin-bottom: 2rem;
    button {
      padding: 0.4em 7em;
      font-size: var(--f-s);
      border: 1px solid var(--d-purple-1);
      border-radius: 5px;
      color: var(--d-purple-1);
      letter-spacing: 1.5px;
      &.active,
      &:hover {
        background-color: var(--d-purple-1);
        color: var(--grey-1);
      }
    }
  }
  @media screen and (max-width: 760px) {
    padding-left: 0rem;

    &_btns {
      button {
        padding: 0.3em 1em;
        font-size: var(--f-s);
        border: 1px solid var(--d-purple-1);
        border-radius: 15px;
        color: var(--d-purple-1);
        letter-spacing: 1.5px;
        white-space: nowrap;
      }
    }
  }
}
</style>
