<template>
      <form class="basic_info">
            <div>
                <label>Email</label>
                <p>03504@fargtory.oceanpark.com.tw</p>
            </div>
            <div>
                <label for="name">姓名</label>
                <input type="text" id="name">
            </div>
            <div>
                <label for="phone">聯絡電話</label>
                <input type="tel" id="phone">
            </div>
            <div class="gender">
                <label for="gender">性別</label>
                <label for="man">
                <input type="radio" name="gender" id="man">
                男
                </label>
                <label for="woman">
                <input type="radio" name="gender" id="woman">
                女
                </label>
            </div>
            <div>
                <label for="address">聯絡地址</label>
                <input type="text" id="address" placeholder="請務必正確填寫，以維護您的權益">
            </div>
            <div>
                <label for="birthday">生日</label>
                <input type="date" id="birthday">
            </div>
            <button type="button">儲存會員資料 <v-icon icon='mdi-arrow-right' class="i"/></button>
        </form>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.basic_info{
    width: 100%;
    max-width: 40em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5em;
    margin: 0 auto;
    padding: 0 .7em;
    font-size: calc(0.9rem + .2vw );
    div{
        width: 100%;
        display: flex;
        align-items: center;
        gap: 2em;
    }
    input{
        flex: 1;
        background-color: var(--grey-1);
        padding: .3em .5em;
        font-size: 1rem;
        border-radius: 7px;
        outline: none;
    }
    label{
        width: 4.5rem;
    }

    div.gender{
            display: flex;
            align-items: flex-start;
            flex-direction: row;
        label:not(:first-child){
            width: 3em;
            display: flex;
            align-items: center;

        }
    }
    button{
        font-size:var(--f-mi);
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

    @media screen and (max-width:500px) {
        gap: 1em;
        padding: 0 0em;
        div{
        width: 100%;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: .5em;

        input{
            width: 100%;
        }

        }
        button{
            margin: 2em 0;
        }
    }
}
</style>