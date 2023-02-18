<template>
  <section id="smallNavbar">
    <div
      class="backbround"
      @click="toggleNavbar"
      :class="{ show: showNavbar }"
    ></div>

    <div class="toggle_btn" @click="toggleNavbar" :class="{ show: showNavbar }">
      <div class="toggle"></div>
    </div>

    <div class="info" :class="{ show: showNavbar }">
      <nav>
        <li v-for="nav in navInfo" :key="nav.text" @click="toggleNavbar">
          <router-link :to="nav.path">
            {{ nav.text }}
          </router-link>
        </li>
      </nav>

      <div class="member_btns">
        <button><v-icon icon="mdi-cards-heart "/>追蹤清單</button>
        <button class="member"  @click="checkMemberLogin"><v-icon icon="mdi-account" /> 會員專區</button>
        <button class="cart"><v-icon icon="mdi-cart" /> 購物車</button>
        <!-- <button class="heart"><v-icon icon="mdi-cards-heart" />追蹤中</button> -->
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import {useRoute,useRouter} from 'vue-router';
import {useStore} from 'vuex'



export default {
  setup() {
    const showNavbar = ref(false);
    const store=useStore();
    const route=useRoute();
    const router=useRouter();
  
    async function checkMemberLogin(){
      // 確認是否已經登入
      
      // 已經登入
      router.replace('/member')
      showNavbar.value=false
    }
    function toggleNavbar() {
      showNavbar.value = !showNavbar.value;
    }
    const navInfo = ref([
      {
        text: "首頁",
        path: "/",
      },
      {
        text: "創作者",
        path: "/creators",
      },
      {
        text: "指彈樂譜",
        path: "/sheetMusic",
      },
      {
        text: "聯絡我們",
        path: "/contact",
      },
      {
        text: "提出申請",
        path: "/application",
      },
    ]);

    return {
      showNavbar,
      toggleNavbar,
      navInfo,
      checkMemberLogin,
    };
  },
};
</script>

<style lang="scss" scoped>
#smallNavbar {
  display: none;

  .toggle_btn {
    width: 3em;
    height: 3em;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s;
    position: fixed;
    top: 1em;
    right: 1em;
    z-index: 3;
    background-color: var(--grey-1);
    border-radius: 5px;

    .toggle {
      width: 2em;
      background-color: var(--grey-4);
      height: 2px;
      transition: all 0.5s;
      position: relative;

      &::before,
      &::after {
        content: "";
        width: 100%;
        height: 2px;
        background-color: var(--grey-4);
      }
      &::before {
        position: absolute;
        top: 0.8em;
        left: 0;
      }
      &::after {
        position: absolute;
        bottom: 0.8em;
        left: 0;
      }
    }
  }
  .toggle_btn.show {
    .toggle {
      transform: rotate(45deg);

      &::before {
        transform: rotate(90deg);
        top: 0;
      }

      &::after {
        display: none;
      }
    }
  }

  .backbround {
    width: 100%;
    height: 100%;
    background-color: var(--grey-5);
    opacity: 0;
    visibility: hidden;
    translate: all 0.5s ease;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
  }
  .backbround.show {
    opacity: 0.7;
    visibility: visible;
  }
  .info {
    width: 30vw;
    min-width: 20em;
    height: 100%;
    position: fixed;
    top: 0;
    right: -100%;
    background-color: var(--grey-1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem 0;
    transition: all 0.5s ease;
    z-index: 3;
    nav {
      flex: 1;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 1em;
      
      li {
        width: 100%;
      }
      a {
        display: block;
        width: 100%;
        padding: 0.7em 1em;
        font-size: var(--f-mi);
        color: var(--d-purple-1);
        border-radius: 5px;
        letter-spacing: 1px;
        &.router-link-exact-active {
          color: var(--grey-1);
          background-color: var(--d-purple-1);
        }
      }
    }
    .member_btns {
      button {
        width: 100%;
        font-size: var(--f-mi);
        color: var(--grey-4);
        padding: 0.7em 1em;
        margin-bottom: 0.5em;
        text-align: left;
        background-color: #eeeeee;
        display: flex;
        align-items: center;
        gap: 0.5em;
      }
    }
  }
  .info.show {
    right: 0%;
  }

  @media screen and (max-width: 830px) {
    display: block;
  }
}
</style>
