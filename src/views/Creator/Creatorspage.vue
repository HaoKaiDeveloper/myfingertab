<template>
  <section>
    <p class="title">
      創作者 <span>{{ creators.length }}</span
      >位
    </p>
    <div class="creator_cards">
      <CreatorCard :creators="creators" />
    </div>
  </section>
</template>

<script>
import { useStore } from "vuex";
import { ref } from "vue";
import { CreatorCard } from "../../components/Creatorpage/index.js";
export default {
  components: { CreatorCard },
  setup() {
    const store = useStore();
    const creators = ref([]);

    (async function getData() {
      const allCreator = await store.dispatch("creator/getAllCreator");
      creators.value = allCreator;
      console.log(allCreator);
    })();

    return {
      creators,
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
  width: 90vw;
  min-height: 95vh;
  margin: 0 auto;
  color: var(--grey-4);
  position: relative;
}
.title {
  align-self: flex-start;
  font-size: var(--f-l);
  margin-bottom: 0.5em;
  margin-left: 1.5rem;
}

.creator {
  &_cards {
    width: 100%;
    min-height: 95vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    justify-content: space-between;
    gap: 3em;

    @media screen and (max-width: 800px) {
      gap: 1em;
    }
    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 650px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
