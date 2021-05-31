<template>
    <div class="mbox">
        <div class="sbox">
            <input class="search" type="text" v-model="mtt" placeholder="제목을 입력해주세요!" />
            <select class="type"  v-model="tn">
                <option value=''>장르</option>
                <option  v-for="types,index in mtype" :key="index">{{index+1+". "+types}}</option>
            </select>
        </div>
        <div class="sbtn" @click="send()">
            검색
        </div>
        <div class="mview">
            <div class="minfo" v-for="items,index in minfo" :key="index" @click="Gourl(items.link)">
                <label v-html="items.title"></label>
                <label>{{items.subtitle}}</label>
                <label><img :src="items.image" alt="이미지 준비중입니다."/></label>
                <label>{{items.director}}</label>
                <label>{{items.pubDate}} 년</label>
                <label>★ : {{items.userRating}}</label>
            </div>
        </div>
    </div>

</template>

<script>
import axios from "axios";

export default {
    data(){
        return{
            movies:null,
            mtt:'',
            mtype:['드라마','판타지','서부','공포','로멘스','모험','스릴러','느와르','컬트','다큐멘터리','코미디','가족','미스터리','전쟁','애니메이션','범죄','뮤지컬','SF','액션','무협','에로','서스펜스','서사','블랙코미디','실험','영화카툰','영화음악','영화패러디포스터'],
            tn:'',
            minfo:[],
        }
    },
    methods: {
        send(){
            console.log('영화제목='+this.mtt) 
            console.log('장르='+this.tn.split(".")[0])
            axios.get(
            'https://openapi.naver.com/v1/search/movie.json?query='+this.mtt+'&display=100&start=100',{
                headers:{
                    'X-Naver-Client-Id':'vRbSreTSqyg3plYwbivb',
                    'X-Naver-Client-Secret':'5PPzKvhdDU'
                    }
                }
                
            )
            .then(res => {
                console.log("통신성공")
                console.log("값:",res.data.items)
                this.minfo = res.data.items;
            })
            .catch(err => {
                console.log('통신실패 x_x')
                console.log(err)
            })

        },
        Gourl(mlink){
            location.href=mlink;
        }
        
    },
    // beforeMount(){
    //     this.mtype.unshift("장르");
    // }
}
</script>

<style scoped>

.sbox {
    width:400px;
    height:auto;
    margin:0 auto;
    padding-top:30px;
}

.search {
    width:400px;
    height:40px;
    line-height:40px;
    border-radius:200px;
    border:5px solid gray;
    text-indent:10px;
}
.type {
    border:3px solid gray;
    text-indent:10px;
    border-radius:5px;
    margin-top: 0.5rem;
}
.sbtn {
    width:40px;
    height:30px;
    line-height:30px;
    background-color:darkgray;
    color:white;
    font-weight:bold;
    border-radius:10px;
    margin:0 auto;
    cursor:pointer;
    margin-top: 0.5rem;
}
.mview {
    width:1000px;
    height:auto;
    padding-top:30px;
    margin:0 auto;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    align-content:center;
    align-items:center;
}
.minfo {
    width:300px;
    height:auto;
    margin-bottom:30px;
    background-color: rgb(106, 95, 173);
    border-radius: 10px;
    cursor: pointer;
}
.minfo > label {
    width:100%;
    color: white;
    font-weight:800;
}
.minfo > label:nth-of-type(1) {
    height:50px;
}
.minfo > label:nth-of-type(2) {
    height:30px;
}
.minfo > label:nth-of-type(3) {
    height:300px;
}
.minfo > label:nth-of-type(3) > img {
    width:300px;
    height:300px;
}
.minfo > label:nth-of-type(4) {
    height:30px;
}
.minfo > label:nth-of-type(5) {
    height:30px;
}
.minfo > label:nth-of-type(6) {
    height:30px;
}
</style>