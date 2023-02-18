<template>
  <article class="mySheetMusic">
            <p class="title">我的樂譜</p>
            <table>
                <tr>
                    <th>曲名</th>
                    <th>創作者</th>
                    <th>難易度</th>
                    <th>下載連結</th>
                </tr>
                <tr>
                    <td>
                        太陽(fingerstyle) <span>邱振哲</span>
                    </td>
                    <td>黃小祥</td>
                    <td>難易度 <span>中階</span></td>
                    <td>
                        <button type="button">Download</button>
                        <button type="button"><v-icon icon='mdi-download'/></button>
                    </td>
                </tr>
                <tr>
                    <td>
                        太陽(fingerstyle) galley of type and scrambled it to make a<span>邱振哲</span>
                    </td>
                    <td>黃小祥</td>
                    <td>難易度 <span>中階</span></td>
                    <td>
                        <button type="button">Download</button>
                        <button type="button"><v-icon icon='mdi-download'/></button>
                    </td>
                </tr>
                <tr>
                    <td>
                        太陽(fingerstyle)<span>邱振哲</span>
                    </td>
                    <td>黃小祥</td>
                    <td>難易度 <span>中階</span></td>
                    <td>
                        <button type="button">Download</button>
                        <button type="button"><v-icon icon='mdi-download'/></button>
                    </td>
                </tr>
            </table>
        </article>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.mySheetMusic{
    .title{
        width: 90%;
        text-align: left;
        font-size: var(--f-l);
        margin: 0 auto;
    }

    table{
    width: 90%;
    text-align: center;
    border-collapse:collapse;
    margin: 0 auto;
    color: var(--grey-4);
    tr:nth-child(1){
        border-bottom: .2px solid var(--l-orange-1);
    }
    th{
        height: 5em;
        font-size: var(--f-mi);
        padding: 1em;
    }
    td{
      height: 4em;
      vertical-align: bottom;
      font-size: var(--f-mi);
      padding: 1em;
      letter-spacing: 1.5px;
    }
    td:nth-child(1){
        width: 30%;
        text-align: justify;
        transform: translateY(8px);
        span{
            display: block;
            color: var(--grey-3);
        }
    }
    td:nth-child(3){
        span{
            background-color: var( --l-orange-1);
            padding: .4em .5em;
            border-radius: 5px;
        }
    }
    button{
        border: 1px solid var(--l-orange-1);
        padding: .4em calc(2em + .5vw);
        border-radius: 7px;
        transform: translateY(6px);
        letter-spacing: 1.5px;
        &:hover{
            background-color: var(--l-orange-1);
        }

        &:nth-child(2){
            display: none;
        }
    }
    }

    @media screen and (max-width:800px) {
        .title{
            width: 100%;
        }
        table{
            width: 100%;

            td:nth-child(3), th:nth-child(3){
                display: none;
            }

            th{
             padding: .7em .2em;
             font-size: 0.8rem;
             }

             td{
              height: 4em ;
              padding:.7em .2em;
              font-size: 0.7rem;

            }

            td:nth-child(1){
              width: 50%;
      
             }
             td:nth-child(4){
              text-align: center;
             }
             
             button{
                &:nth-child(1){
                    display: none;
                }
                &:nth-child(2){
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    padding: .2em .2em;
                    border-radius: 20px;
                }
             }

        }
    }
   
}


</style>