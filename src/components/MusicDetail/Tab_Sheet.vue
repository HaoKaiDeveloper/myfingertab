<template>
   <article class="sheet_section">
        <p>{{data.musicName}}</p>
        <p>{{ data.creatorName }} 2023.05.03</p>
       
        <div class="info">
          <div class="sheet_swiper">
            <SheetImgsSwiper :imgs="tempImgs"/>
          </div>
          <div class="download_btns">
            <button type="button">下載連結一</button>
            <button type="button">下載連結二</button>
          </div>
        </div>
     </article>
</template>

<script>
import SheetImgsSwiper from './SheetImgsSwiper.vue'
export default {
  components:{SheetImgsSwiper},
  props:['data','tempImgs'],

}
</script>

<style lang="scss" scoped>
  .sheet_section{
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
        width: 100%;
        display:flex;
        align-items: flex-start;
        gap: 1em;
        padding-bottom: 2em;
    
        .sheet_swiper{
          width: 70%;
          flex-shrink: 0;
          height: 50em;
          object-fit: cover;
        }
    
        .download_btns{
          button{  
        background-color: var(--grey-2);
        border-radius: 7px;
        font-size: var(--f-s);
        letter-spacing: 2px;
        padding: .4em 6em;
        margin:.7em 0;
        white-space: nowrap;
        &:hover,&.active{
              background-color: var(--l-orange-1);
        }
      }
        }
      }
    
      @media screen and (max-width: 800px){
        width: 100%;
        margin: 0 auto;
        .info{
        flex-direction: column;
        gap: .7em;
          
    
        .sheet_swiper{
          width: 100%;
          height: 33em;
        }
    
        .download_btns{
          button{
        margin:.5em;
        padding: .4em 3em;
    
       }
        }
      }   
      }
    
    }
</style>