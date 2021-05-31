<template>
  <div  class="coin">
    <h1>{{coins}}</h1>
      <!--<label @click="created()">dd</label>-->
      <div class="coinbox">
        <ul class="cointitle">
          <li># ▲</li>
          <li>이름</li>
          <li>가격</li>
          <li>24h%</li>
          <li>7d%</li>
          <li>시가총액</li>
          <li>거래량(24시간)</li>
          <li>유통 공급량</li>
          <li>등락</li>
        </ul>
        <ul class="cointitle coinview" v-for="(name,index) in datas" :key="index">
          <li>{{name.cmc_rank}}</li>
          <li id="coin-n">{{name.name}} ({{name.symbol}})</li>
          <li>{{name.quote.USD.price.toLocaleString()}}</li>
          <li>{{String(name.quote.USD.percent_change_24h).substr(0,5)}}</li>
          <li>{{String(name.quote.USD.percent_change_7d).substr(0,5)}}</li>
          <li>{{name.quote.USD.market_cap}}</li>
          <li>{{name.quote.USD.price}}</li>
          <li>{{name.total_supply}}</li>
          <li>
            <GChart
              type="LineChart"
              :data="chartData[index]"
              :options="chartOptions"/>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import {GChart} from 'vue-google-charts'


export default {
  data() {
    return {
      coins:'bitcoin',
      datas:null,
      chartData:[],
      chartOptions:{
        chart: {
          title:'bitcoin price',
          subtitle : 'last_update 2021-03-24T05:05:02.000Z'
        }
      }
    };
  },
  components:{
    GChart
  },
  beforeMount(){
    axios.get(
      'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',{
        headers: {
          'X-CMC_PRO_API_KEY': '896314e3-b7a7-4b52-a70e-95bcd3df56a0'
              }
            }
        )
      .then(res => {
        console.log("성공");
        this.datas=res.data["data"];
          this.datas.forEach(item => {
          console.log(item.quote.USD.percent_change_1h); 
          var chartData2=[
                          ['Gun', 'price'],
                          ['1h',item.quote.USD.percent_change_1h],
                          ['24h',item.quote.USD.percent_change_24h],
                          ['7d',item.quote.USD.percent_change_7d],
                          ['30d',item.quote.USD.percent_change_30d],
                          ['60d',item.quote.USD.percent_change_60d],
                          ['90d',item.quote.USD.percent_change_90d]
                        ];
          console.log('값확인',this.chartData);
          //console.log('test값확인',test);
          this.chartData.push(chartData2);

          });
        })
      .catch(err => {
        console.log("데이터 접근 실패!");
        console.log(err);
      });
  },
  created(){
    // this.beforeMount();
  }
}
</script>

<style>
ul {
  list-style:none;
  margin:0px; padding:0px;
}
#app {
  color: black;
}
.coinbox {
  width:1000px;
  height:auto;
  margin:0 auto;
}
.cointitle {
  width:100%;
  height:30px;
}
.cointitle > li {
  float:left;
  font-size:13px;
  height:30px; line-height:30px;
  border:1px solid gainsboro;
  box-sizing:border-box;
}
.cointitle > li:nth-of-type(1) {
  width:50px;
}
.cointitle > li:nth-of-type(2) {
  width:100px;
}
.cointitle > li:nth-of-type(3) {
  width:100px;
}
.cointitle > li:nth-of-type(4) {
  width:50px;
}
.cointitle > li:nth-of-type(5) {
  width:50px;
}
.cointitle > li:nth-of-type(6) {
  width:150px;
}
.cointitle > li:nth-of-type(7) {
  width:150px;
}
.cointitle > li:nth-of-type(8) {
  width:150px;
}
.cointitle > li:nth-of-type(9) {
  width:200px;
}
.coinview {
  width:100%;
  height:auto;
}
.coinview>li {
  height:300px;
  line-height:300px;
}
.coinview > li:nth-of-type(2) {
  text-overflow:ellipsis;
  overflow:hidden;
  white-space:nowrap;
}
#app {
  text-align:none;
}

#nav {
  padding:0px;
}

</style>