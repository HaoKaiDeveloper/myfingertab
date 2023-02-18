<template>
  <div class="music_card">
    <iframe
      :src="m.musicUrl"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write;
             encrypted-media; gyroscope;
              picture-in-picture"
      allowfullscreen
      class="music_video"
    ></iframe>
    <div class="music_info">
      <p class="music_name">{{ m.musicName }}</p>
      <div class="music_price">
        <p>
          原價: <s>{{ m.origPrice }}</s>
        </p>
        <p>售價:{{ m.discountedPrice }}</p>
      </div>
      <div class="music_creator">
        <img
          src="https://i.picsum.photos/id/661/100/100.jpg?hmac=sI5T30v1AIDVoLoc0fszEd2C2uPiciUh5SAzNyUC3Gc"
          alt="head"
        />
        <!-- <img :src="m.createorheadImg" alt="head"/> -->
        <p>{{ m.creatorName }}</p>
        <p>Double V</p>
        <p>
         <span>難易度</span>  <span>{{ m.degree[0] }}</span>
        </p>
      </div>

      <div class="music_btns">
        <button class="cart">
          <v-icon icon="mdi-cart" />
        </button>
        <button class="link" @click="openMusicDetail(m.id)">瀏覽</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["m"],
  emits:['open-music-detail'],
  setup(props,context){
    function openMusicDetail(id){
      context.emit('open-music-detail',id);
    }

    return {
      openMusicDetail
    }
  }
};
</script>

<style lang="scss" scoped>
.music {
  &_card {
    width: 100%;
    height: 40em;
    letter-spacing: 1.5px;
    color: var(--grey-4);
    box-shadow: var(--shodow-1);
    border-radius: 10px;
    overflow: hidden;

    @media screen and (max-width: 500px) {
    height: 36em;
      
    }
  }

  &_video {
    width: 100%;
    height: 45%;
  }

  &_info {
    width: 100%;
    height: 50%;
    padding: 0.5em 0.7em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &_name {
    width: 100%;
    font-size: var(--f-mi);
    font-weight: 600;
    letter-spacing: 1.5;
  }

  &_price {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: var(--f-s);
    margin: 0.5em 0;
    p:nth-child(2) {
      font-size: var(--f-l);
    }
  }

  &_creator {
    display: grid;
    grid-template-columns: min-content 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    column-gap: 1em;
    font-size: var(--f-s);
    img {
      grid-column: 1/2;
      grid-row: 1/-1;
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 50%;
      object-fit: cover;
    }
    p:nth-child(2) {
      grid-column: 2/3;
      grid-row: 1/2;
      align-self: end;
    }
    p:nth-child(3) {
      grid-column: 2/3;
      grid-row: 2/-1;
      color: var(--grey-3);
    }
    p:nth-child(4) {
      grid-column: 3/4;
      grid-row: 2/3;
      justify-self: end;
      font-size: var(--f-s);
      span:nth-child(1){
        @media screen and (max-width: 500px) {
          display: none;
        }
      }
      span:nth-child(2) {
        background-color: var(--l-orange-1);
        padding: 0.25em 0.6em;
        border-radius: 7px;
      }
    }
  }

  &_btns {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 2.5em;
    .cart {
      font-size: 1.5rem;
      border-radius: 50%;
      color: var(--l-orange-1);
    }
    .link {
      font-size: var(--f-mi);
      padding: 0.2em 0.5em;
      border: 1.2px solid var(--l-orange-1);
      letter-spacing: 2px;
      border-radius: 5px;
      color: var(--grey-3);
    }
  }
}
</style>
