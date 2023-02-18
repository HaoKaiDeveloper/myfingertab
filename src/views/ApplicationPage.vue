<template>
<section id="applicationPage">
    <p>客戶諮詢單</p>
    <p><span><v-icon icon="mdi-map-marker" class="i"/> 974 花蓮縣壽豐鄉鹽寮村福德189號 </span> <a href="https://goo.gl/maps/gN4LeDB6Gx2FM5C27" rel="noopener noreferrer" target="_blank">(Google Map)</a></p>
    <p><v-icon icon='mdi-phone'/> <span> 電話:(03)8123-100 </span> <span>傳真:(03)8123-133</span></p>
    <p>收到您的信件後、我們會盡快回復您的寶貴意見或諮詢! 標註 * 為必填</p>
    <form >

        <div class="subject">
            <label for="subject">主  題 * : </label>
            <select id="subject">
                <option value="">建議需求</option>
                <option value="">option1</option>
                <option value="">option2</option>
                <option value="">option3</option>
                <option value="">option4</option>
            </select>
        </div>

        <div class="name">
            <label for="name">姓  名 * : </label>
            <input type="text" id="name">
        </div>

        <div class="email">
            <label for="email">EMAIL* : </label>
            <input type="email" id="email">
        </div>

        <div class="phone">
            <label for="phone">聯絡電話* : </label>
            <input type="tel" id="phone">
        </div>

        <div class="suggestion">
          <label for="suggestion">意見反應* :</label>
          <textarea id="suggestion"></textarea>
        </div>
    </form>
    <p class="right">
        當您於本網頁提供個人基本資料，即表示您同意遠雄海洋公園(股)公司蒐集個人相關資料
        以利處理，並用於客戶服務等意見回饋服務，誠等資料之蒐集及使用，您同意由本公司為之，
        您得隨時透過客服信箱service@farglory.oceanpark.com.tw查詢、閱覽、製給復本、
        補充或更正、停止蒐集、處理或利用、或刪除您的個人基本資料。本公司保有修改相關服務
        及權益條款之權。
    </p>
    <div class="btns">
        <button type="button">確認送出</button>
        <button type="button">重新填寫</button>
    </div>
</section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#applicationPage{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  min-height: 95vh;
  margin: 2em auto;
  color: var(--grey-4);
  font-size: var(--f-mi);
  letter-spacing: 1.5px;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
}
a{
    text-decoration: underline;
}

p{
   font-size: calc(0.7rem + .2vw );
   color: var(--grey-4);
   margin: .3em;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-wrap: wrap;
   gap: .5em;
}

p:nth-child(1){
    font-size: var(--f-l);
    color:var(--d-purple-1);
    font-weight: 600;
    margin-bottom: 0.7em;
}

p:nth-child(4){
    font-size: var(--f-s);
    margin: 3em 0;
    padding: 0 1em;
}

form{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 .7em;
    div{
        width: 49%;
        display: flex;
        align-items: center;
        margin: 1em 0;
        font-size: calc(0.9rem + .2vw );
        input,select,textarea{
            flex: 1;
            padding: .3em .5em;
            font-size: 1rem;
            outline:none;
            background-color: var(--grey-1);
            border-radius: 7px;

        }
        label{
            width: 6.5rem;
        }
    }
    div.suggestion{
        width: 100%;
        height: 10vw;
        min-height: 10em;
        align-items: flex-start;
        textarea{
            flex: 1;
            height: 100%;
            resize: none;
            
        }
    }
}
.right{
    margin: 3em 0 3em 6.5rem;
    font-size: var(--f-s);
    color: var(--grey-3);
    text-align: justify;
}
.btns{
    margin-left:6.5rem ;
    align-self: flex-start;
    display: flex;
    align-items: center;
    gap: 2em;
    button{
        font-size: calc(0.6rem + 0.2vw);
        padding: .46em 2.7em;
        border-radius: 20px;
        color: var(--grey-4);
        border: 1px solid var(--d-purple-1);
        letter-spacing: 1.5px;
        &:hover,&:active{
            background-color: var(--d-purple-1);
            color: var(--grey-1);
        }
    }
}

@media screen and (max-width:750px){
    form{
        div{
        width: 100%;
        display: flex;
        align-items: center;
        margin: .6em 0;
        }
    }
}
@media screen and (max-width: 500px) {
    p:nth-child(1){
        a{
            display: block;
            width: 100%;
        }
        span{
            display: flex;
            align-items: center;
        }
    } 
    
    p:nth-child(3){
        flex-direction: column;
        gap: .3em;
        i{
            display:none;
        }
    }

    form{
    div{
        flex-direction: column;
        align-items:flex-start;
        input,select,textarea{
            width: 100%;
        }
        label{
            align-self: flex-start;
            margin-bottom: .2em;
        }
    }
}
.right{
    margin: 2em 0 2em 0rem;
    padding: 0 .7em;
}
.btns{
    margin-left:0 ;
    align-self:center;
    gap: .5em;
}

 }
</style>