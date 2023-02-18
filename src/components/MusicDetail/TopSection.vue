<template>
    
    <article class="top_section">
        <iframe
          :src="data.musicUrl"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write;
                 encrypted-media; gyroscope;
                  picture-in-picture"
          allowfullscreen
          class="music_video"
        ></iframe>
         <div class="music_info music">
          <p class="music_name">{{ data.musicName }}</p>
          <div class="music_price">
            <p>
              原價: <s>{{ data.origPrice }}</s>
            </p>
            <p>售價:{{ data.discountedPrice }}</p>
          </div>
      
        <div class="music_creator">
            <img
              src="https://i.picsum.photos/id/661/100/100.jpg?hmac=sI5T30v1AIDVoLoc0fszEd2C2uPiciUh5SAzNyUC3Gc"
              alt="head"
            />
             <!-- <img :src="m.createorheadImg" alt="head"/> -->
            <div>
              <p>{{ data.creatorName }}</p>
              <p>Double V</p>
            </div>
            <p class="degree">
              難易度 <span>{{ data.degree[0] }}</span>
            </p>
        </div>
        <div class="music_btns">
            <button type="button" class="cart">立即購買</button>
            <button type="button" class="repost">分享</button>
        </div>
        </div>
    
     </article>
</template>

<script>
export default {
props:['data']
}
</script>

<style scoped lang="scss">
   .top_section{
      display: flex;
      align-items: flex-start;
      gap: 1em;
      width: 80vw;
      max-width: 1300px;
      margin: 0 auto;
      .music_video{
        flex: 1;
        flex-shrink: 0;
        max-width: 50%;
        min-width: 40em;
        height: 33em;
      }
    
      .music{
        width: 50%;
        height: 33em;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &_name{
          font-size: var(--f-l);
        }
        &_price{
          width: 100%;
          display: flex;
          justify-content: space-between;
          font-size: var(--f-mi);
          p:nth-child(2){
            font-weight: 500;
          }
        }
    
        &_creator{
          flex: 1;
          width: 100%;
          display:flex;
          align-items: center;
          justify-content: space-between;
          gap:1em;
          font-size: var(--f-s);
          img{
            width: 4rem;
            height: 4rem;
            object-fit: cover;
            border-radius: 50%;
          }
          div{
            flex: 1;
            p{
              display: block;
              font-size: var(--f-s);
            }
            p:nth-child(2){
              color: var(--grey-3);
            }
          }
          .degree{
            margin-top: 1.2em;
            span{
            background-color: var(--l-orange-1);
            padding: 0.25em 0.6em;
            border-radius: 7px;
            }
          }
    
        }
    
        &_btns{
          width: 100%;
          button{
            display: block;
            width: 100%;
            margin-bottom: .7em;
            padding: .4em 0;
            background-color: var(--grey-2);
            border-radius: 7px;
            font-size: var(--f-s);
            letter-spacing: 2px;
            &:hover{
              background-color: var(--l-orange-1);
            }
          }
        }
    
    
      }
    
      @media screen and (max-width: 800px){
        flex-direction: column;
        width: 100%;
        margin: 0 0;
        .music_video{
          width: 100%;
          min-width: 100%;
          max-width: 100%; 
          min-height: 45vh;
        }
        .music{
        width: 100%;
        height: auto;
        gap: 1.5em;
        &_name{
          font-size: 1.1rem;
          font-weight: 600;
        }
        &_creator{
          gap:1em;
          img{
            width: 3.5rem;
            height: 3.5rem;
          }
        }
      }
      }
    }

</style>