<template>
  <article class="tab_about">
    <img :src="creator.createorheadImg" alt="headImg" class="tab_img" />
    <div class="text">
      <p>獲獎及經歷</p>
      <div v-for="(award, index) in creator.awards" :key="index" class="award">
        <div v-if="!award" class="empty"></div>
        <span v-else>{{ award }}</span>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: ["creator"],
};
</script>

<style lang="scss" scoped>
.tab_about {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;

  .text {
    letter-spacing: 2px;
    font-size: var(--f-l);
    p:nth-child(1) {
      font-weight: 700;
      margin-bottom: 0.5em;
    }
    .award {
      color: var(--grey-3);
      font-size: var(--f-mi);
      .empty {
        display: block;
        width: 100%;
        height: 10px;
      }
    }
  }

  img {
    width: calc(10em + 5vw);
    max-width: 20rem;
    height: calc(10em + 5vw);
    max-height: 20rem;
    object-fit: cover;
    border-radius: 50%;
  }

  @media screen and (max-width: 400px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 0.5em;
  }
}
</style>
