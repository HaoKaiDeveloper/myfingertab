<template>
  <section id="navbar">
    <p class="logo">MyFingerTab</p>
    <nav>
      <li>
        <router-link to="/">首頁</router-link>
      </li>
      <li>
        <router-link to="/creators">創作者</router-link>
      </li>
      <li>
        <router-link to="/sheetMusic">指彈樂譜</router-link>
      </li>
      <li>
        <router-link to="/contact">聯絡我們</router-link>
      </li>
      <li>
        <router-link to="/application">提出申請</router-link>
      </li>
    </nav>
    <button>
      <v-icon icon="mdi-cards-heart "/>
    </button>
    <button class="member" @click="checkMemberLogin" >
      <v-icon icon="mdi-account" />
    </button>
    <button class="cart">
      <v-icon icon="mdi-cart" />
    </button>
    
    <div class="line"></div>
  </section>
</template>

<script>
import {useRoute,useRouter} from 'vue-router';
import {ref} from 'vue'
import {useStore} from 'vuex'

export default {
  setup(){
    const store=useStore();
    const route=useRoute();
    const router=useRouter();
  
    async function checkMemberLogin(){
      // 確認是否已經登入
      
      // 已經登入
      router.replace('/member')
    }

    return {
      checkMemberLogin,
    }

  }



};
</script>

<style lang="scss" scoped>
#navbar {
  width: 100%;
  max-width: 2000px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-size: var(--f-l);
  position: relative;
  margin:0 auto 2em auto;
  color: var(--grey-4);

  @media screen and (max-width: 830px) {
    display: none;
  }
}
nav {
  display: flex;
  align-items: center;
  flex-grow: 1;
  gap: 0.5em;

  a {
    padding: 0.2rem 1rem;
    color: var(--d-purple-1);
    border-radius: 7px;
    letter-spacing: 1px;

    &:hover{
      background-color: var(--d-purple-1);
      color: var(--grey-1);
    }
    &.router-link-exact-active {
      color: var(--grey-1);
      background-color: var(--d-purple-1);
    }
  }
}

.logo {
  margin-right: 1rem;
  font-weight: 600;
  font-size: calc(1rem + 1vw);
}

.line {
  width: 90%;
  height: 1px;
  background-color: var(--grey-5);
  position: absolute;
  bottom: -0.5em;
  left: 50%;
  transform: translateX(-50%);
}
</style>
