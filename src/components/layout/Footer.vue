<template>
  <section id="footer">
    <p class="logo">MyFingerTab</p>
    <div class="text">
      <p>關於我們</p>
      <p>使用條款</p>
      <p>訊息聯繫 | FB 私訊</p>
      <p>客服信箱 | servic@seeds.com.tw</p>
    </div>
    <p>&copy; {{ year }} 彈指天地</p>
  </section>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const year = ref(new Date().getFullYear());
    return {
      year,
    };
  },
};
</script>

<style scoped lang="scss">
#footer {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1em;
  padding: 1vw 0;
  border-top: 1px solid var(--grey-5);
  margin-top: 3em;
}

.logo {
  font-weight: 600;
  font-size: calc(1rem + 0.2vw);
}
.text {
  flex: 1;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1em;
  letter-spacing: 1.5px;
  font-size: var(--f-s);
}

@media screen and (max-width: 700px) {
  #footer {
    flex-direction: column;
    justify-content: center;
    gap: .3em;
  }
  .text {
    gap: .2em;
    justify-content: center;
  }
}
</style>
