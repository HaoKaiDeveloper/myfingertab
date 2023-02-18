<template>
  <article class="tab_activity">
    <img :src="creator.createorheadImg" alt="headImg" />
    <div>
      <p v-for="(activity, index) in creator.activity" :key="index">
        {{ activity }}
      </p>
    </div>
  </article>
</template>

<script>
export default {
  props: ["creator"],
};
</script>

<style scoped lang="scss">
.tab_activity {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 760px) {
    flex-direction: column;
    padding: 0 1em;
  }
  img {
    width: calc(10em + 5vw);
    max-width: 20rem;
    height: calc(10em + 5vw);
    max-height: 20rem;
    object-fit: cover;
    border-radius: 50%;
  }

  div {
    p {
      margin-bottom: 0.7em;
      font-size: var(--f-mi);
      letter-spacing: 1.5px;
      border-bottom: 0.5px dashed var(--grey-3);
      @media screen and (max-width: 400px) {
        font-size: var(--f-s);
      }
    }
  }
}
</style>
