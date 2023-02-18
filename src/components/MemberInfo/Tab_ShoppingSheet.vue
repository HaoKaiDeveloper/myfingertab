<template>
      <article class="shoppingSheet">
            <p class="title">購買紀錄</p>
            <table>
                <tr>
                    <th>訂購日期</th>
                    <th>訂單編號</th>
                    <th>訂單金額</th>
                    <th>訂單狀況</th>
                    <th>發票</th>
                    <th>付款方式</th>
                    <th>退貨</th>
                    <th>操作</th>
                </tr>
                <tr>
                    <td>2023/12/10</td>
                    <td>221218100011</td>
                    <td>$<span>199</span></td>
                    <td>未出貨</td>
                    <td>未開立</td>
                    <td>掃碼通</td>
                    <td >
                        <button  type="button" class="return">退貨</button>
                    </td>
                    <td>
                        <button type="button">訂單詳情</button>
                    </td>
                </tr>
                <tr>
                    <td class="even">2023/12/10</td>
                    <td class="even">221218100011</td>
                    <td class="even">$<span>680</span></td>
                    <td class="even">已出貨</td>
                    <td class="even">已開立</td>
                    <td class="even">信用卡</td>
                    <td class="even">
                        <button  type="button" class="return">退貨</button>
                    </td>
                    <td class="even">
                        <button type="button">訂單詳情</button>
                    </td>
                </tr>
                <tr>
                    <td>2023/12/10</td>
                    <td>221218100011</td>
                    <td>$<span>1850</span></td>
                    <td>已完成</td>
                    <td>作廢</td>
                    <td>信用卡</td>
                    <td>
                        <button  type="button" class="return">退貨</button>
                    </td>
                    <td>
                        <button type="button">訂單詳情</button>
                    </td>
                </tr>
                <tr>
                    <td class="even">2023/12/10</td>
                    <td class="even">221218100011</td>
                    <td class="even">$<span>850</span></td>
                    <td class="even">已完成</td>
                    <td class="even">作廢</td>
                    <td class="even">信用卡</td>
                    <td class="even">
                        <button type="button" class="return">退貨</button>
                    </td>
                    <td class="even">
                        <button type="button">訂單詳情</button>
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
.shoppingSheet{
    
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
    margin: 1em auto;
    color: var(--grey-4);
    box-shadow: var(--shodow-1);

    th{
        height: 5em;
        font-size: var(--f-s);
    }
    td{
      height: 4em;
      vertical-align: center;
      font-size: var(--f-mi);
      letter-spacing: 1.5px;
      background-color: var(--grey-1);
      color: var(--grey-4);
        &.even{
            background-color: var(--grey-2);
        }
    }
    button{
        font-size: var(--f-s);
        padding: .4em calc(2em + .5vw);
        border-radius: 30px;
        background-color:#fff;
        color: #ff9800;
        font-weight: 600;
        letter-spacing: 1.5px;
        box-shadow: var(--shodow-1);
        &.return{
            padding: .3em 1em;
            border-radius: 10px;
            color: var(--grey-4);
            background-color: #f8bbd0;
        }
    }
    }

    @media screen and (max-width: 800px) {
        .title{
            width: 100%;
        }
        table{
            width: 100%;
        }
    }

    @media screen and (max-width: 650px) {
       
        table{

            th:nth-child(2),
            th:nth-child(4),
            th:nth-child(5),
            th:nth-child(6),
            th:nth-child(7){
                display: none;
            }
            td:nth-child(2),
            td:nth-child(4),
            td:nth-child(5),
            td:nth-child(6),
            td:nth-child(7){
                display: none;
            }
        }
    }

    @media screen and (max-width: 300px) {
       
       table{

        button{
        font-size: var(--f-xs);
        padding: .4em .5em;
        white-space: nowrap;
    }
       }
   }


}

</style>