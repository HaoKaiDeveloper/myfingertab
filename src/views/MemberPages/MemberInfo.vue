<template>
<section id="memberInfo">
    <div class="tab">
        <div class="tab_btns">
            <button type="button"
             @click="changeTabValue('Tab_InfoForm')"
             :class="{active:activeTab==='Tab_InfoForm'}">基本資料</button>
            <button type="button" 
            @click="changeTabValue('Tab_MySheetMusic')"
            :class="{active:activeTab==='Tab_MySheetMusic'}"
            >我的樂譜</button>
            <button type="button"
            @click="changeTabValue('Tab_ShoppingSheet')"
            :class="{active:activeTab==='Tab_ShoppingSheet'}"
            >購買紀錄</button>
        </div>
        <component :is="activeTab"></component>
    </div>
</section>
</template>

<script>
import {ref}from 'vue'
import {Tab_InfoForm,Tab_MySheetMusic,Tab_ShoppingSheet} from '../../components/MemberInfo/index.js';
export default {
    components:{Tab_InfoForm,Tab_MySheetMusic,Tab_ShoppingSheet},
    setup(){
        const activeTab=ref('Tab_InfoForm');

        function changeTabValue(value) {
            activeTab.value = value;
        }

        return {
            activeTab,
            changeTabValue
        }
    }
}
</script>

<style lang="scss" scoped>

#memberInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  width: 90%;
  min-height: 95vh;
  margin: 0 auto;
  color: var(--grey-4);
  padding: 0 0.5em;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
}
.tab {
  width: 100%;
  min-height: 95vh;
  &_btns {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 2rem;
    button {
      padding: 0.4em 7em;
      font-size: var(--f-mi);
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
        font-size: var(--f-xs);
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