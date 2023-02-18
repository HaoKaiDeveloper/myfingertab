<template>
    <article class="totural_section">
        <p>{{data.musicName}}</p>
        <p>1個章節，兩個小時，1個作業</p>
       
        <div class="info">
          <!-- 可能為圖片或影片 -->
          <div class="content">
            <img :src="activeChapterData.dataUrl" alt="img" v-if="activeChapterData.type==='img'">
            <video v-else>
              <source :src="activeChapterData.dataUrl" :type="activeChapterData.type"/>
            </video>
          </div>
          <div class="chapter_control">
            <div v-for="toturla in tempTotural" :key="toturla.id" >
              <button @click="chapterOpen=!chapterOpen">{{toturla.title }}</button>
              <ul v-if="chapterOpen">
                <li v-for="chapter in toturla.chapter" :key="chapter.time" @click="getToturalContent(chapter.dataUrl)">
                  {{ chapter.name }}
                </li>
              </ul>
            </div>
          </div>
        </div>
    
     </article>
  
</template>
<script>
import {ref} from 'vue'
export default {
    props:['data','tempTotural'],
    setup(props){
        const chapterOpen=ref(false);
        const activeChapterData=ref({});

        init()
        function init (){
          activeChapterData.value=props.tempTotural[0].chapter[0]
        }
        async function getToturalContent(data){
          const d=props.tempTotural[0].chapter.find(sorce=>sorce.dataUrl===data)
          activeChapterData.value=d
        }

        return {chapterOpen,
          activeChapterData,
          getToturalContent}
    }
}
</script>

<style lang="scss" scoped>
    .totural_section{
      padding-bottom:2em ;
      width: 80vw;
      max-width: 1300px;
      height: auto;
      margin: 3em auto;
    
      p{
        margin-bottom: .7em;
      }
       p:nth-child(1){
        max-width: 50em;
        font-size: var(--f-mi);
        font-weight: 600;
      }
        p:nth-child(2){
        font-size: var(--f-mi);
        color: var(--grey-3);
      }
      .info{
        display: flex;
        align-items: flex-start;
        gap: 1em;
        width: 100%;
        padding-bottom: 2em;
        .content{
          flex: 1;
          width: 70%;
          flex-shrink: 0;
          height: 50em;
        img,video{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        }
        .chapter_control{
          border:1px solid var(--grey-3);
          padding: .5em calc(.4em + .5vw);
          border-radius: 7px;
          button{
            font-size: .9rem;
            font-weight: 600;
          }
          ul{
            margin-left: 1em;
            margin-top:1em ;
          }
          li{
            padding: .5em;
            background-color: var(--grey-2);
            font-size: 0.8rem;
            cursor: pointer;
            border-radius: 5px;
            &:hover{
              background-color: var(--l-orange-1);
            }
          }
          li:not(:last-child){
            margin-bottom: .5em;
          }
        }
      }
    
      @media screen and (max-width:1000px){
      // width: 100%;
    
        .info{
        flex-direction: column;
        width: 100%;
        .content{
          flex: 1;
          width: 100%;
          height: calc(60vw / 3 );
    
        }
        .chapter_control{
          width: 100%;
        }
      }
    
      }
      @media screen and (max-width:800px){
      width: 100%;
      }
      @media screen and (max-width:500px){
        .info{
        .content{
        
          height: 33em;
     
        }
      
      }
      }
    }
</style>