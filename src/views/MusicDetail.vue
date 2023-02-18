<template>
    <section id="musicDetail" >

      <div class="background" v-if="data.id"></div>
  
      <transition>
      <div class="box" v-if="data.id">
      <button class="close_btn" @click="closeMusicDetail">
        <v-icon icon="mdi-close"/>
      </button>
      <TopSection :data="data"/>
      
       <div class="tab_btns">
        <button type="button" @click="changeTabValue('sheet')" :class="{active:activeTab==='sheet'}">樂譜預覽</button>
        <button type="button" @click="changeTabValue('totural')" :class="{active:activeTab==='totural'}">細節教學</button>
      </div>

      <Tab_Sheet :data="data" :tempImgs="tempImgs" v-if="activeTab==='sheet'"/>

      <Tab_Totural :data="data" 
      :tempTotural="tempTotural"
       v-if="activeTab==='totural'"
       />
      </div>
      </transition>
    </section>


</template>
    
<script>
    import {ref} from 'vue';
    import {
    SheetImgsSwiper,
    Tab_Sheet,
    Tab_Totural,
    TopSection
} from '../components/MusicDetail/index.js'
    export default {
      props:['data'],
      emits:['close-music-detail'],
      components:{SheetImgsSwiper,Tab_Sheet,Tab_Totural,TopSection},
      setup(props,context){
        const activeTab=ref('sheet');
        const chapterOpen=ref(false);
      
        function changeTabValue(value) {
                activeTab.value = value;
        }

        function closeMusicDetail(){
          context.emit('close-music-detail')
        }
    
        const tempImgs=ref([
          'https://i.picsum.photos/id/1051/800/600.jpg?hmac=yt989atrWR7pZlKwUYSntOkpj6LtRD5MXTkgn3guGw8',
          'https://i.picsum.photos/id/1052/800/600.jpg?hmac=UmC7V5vPyzyfDwO-iOe91VrjRddPHUV429VDgZ6FG_U',
          'https://i.picsum.photos/id/1072/800/600.jpg?hmac=6UutgImWIa3r4-Yo0ROVcBzHSKnffDuqRVQJ_0llCvw'
        ])
    
        const tempTotural=ref([
          { 
            id:'totural1',
            title:'第一章: 後天而奉天時，飛龍在天，或躍在淵',
            chapter:[{
            name:'第一節',
            dataUrl:'https://i.picsum.photos/id/1051/800/600.jpg?hmac=yt989atrWR7pZlKwUYSntOkpj6LtRD5MXTkgn3guGw8',
            type:'img',
            time:'12:50'
          },
          {
            name:'第二節',
            dataUrl:'https://i.picsum.photos/id/1052/800/600.jpg?hmac=UmC7V5vPyzyfDwO-iOe91VrjRddPHUV429VDgZ6FG_U',
            type:'img',
            time:'11:20'
          },
          {
            name:'第三節',
            dataUrl:'https://i.picsum.photos/id/1072/800/600.jpg?hmac=6UutgImWIa3r4-Yo0ROVcBzHSKnffDuqRVQJ_0llCvw',
            type:'img',
            time:'09:10'
          },]
          }
        ])
    
        return{
          activeTab,
          tempImgs,
          tempTotural,
          chapterOpen,
          closeMusicDetail,
          changeTabValue,
        }
      }
    }
</script>
    
<style lang="scss" scoped>
    #musicDetail{
      width: 100%;
      display: flex;
      justify-content: center;
      overflow-y: scroll;
      position: relative;
      z-index: 2;
    }
    
    .background{
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.7);
      position: fixed;
      top:0;
      left: 0;
      z-index: -1;
    }
    
    
    .close_btn{
      font-size: 1.3rem;
      position: absolute;
      top:1em;
      right: 1em;
      @media screen and (max-width:1000px) {
        top:0;
        right: 0;
      }
    }
    
    .box{
      width: 100vw;
      height: 100%;
      position: fixed;
      top:60px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #fff;
      overflow-y:scroll;
      padding: 2em;
      @media screen and (max-width:500px) {
      padding:3em .5em;
      }
    }
    
    .tab_btns{
      width: 80vw;
      margin: 3em auto;
      max-width: 1300px;
      button{  
        background-color: var(--grey-2);
        border-radius: 7px;
        font-size: var(--f-s);
        letter-spacing: 2px;
        padding: .4em 6em;
        margin:.7em;
        white-space: nowrap;
    
        &:hover,&.active{
            background-color: var( --d-purple-1);
            color: var(--grey-1);
        }
      }
      @media screen and (max-width: 800px){
       margin: 1em 0em;
       button{
        border-radius: 20px;
        margin:.5em;
        padding: .4em 1em;
       }
      }
    }

    .v-enter-active{
      animation: show 0.3s linear forwards;
    }
    .v-leave-active{
      animation: show 0.1s linear reverse;
    }


    @keyframes show {
      from{
        opacity: 1;
        top:100px;
      }
      to{
        opacity: 1;
        top:60px;
      }
    }
    
</style>