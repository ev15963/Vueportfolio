<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" placeholder="이곳에 해야할 일을 적어주세요" v-on:keyup.enter="addTodo">
        <span class="addContainer" @click="addTodo">
            <font-awesome-icon class="addBtn" icon="plus" aria-hidden="true" />
        </span>

        <modal v-if="showModal" @close="showModal=false">
            <h3 slot="header">경고</h3>
            <span slot="body">할 일을 입력해주세요.</span>
            <button slot="footer" @click="showModal = false">닫기</button>
        </modal>
    </div>
</template>

<script>
import Modal from './common/Modal.vue';

export default {
    data(){
        return {
            newTodoItem:"",
            showModal:false
        };
    },
    methods:{
        addTodo(){
            if(this.newTodoItem != ""){
                let value = this.newTodoItem && this.newTodoItem.trim();
                this.$emit("addTodo",value);
                console.log(value);
                this.clearInput();
            }
            else{
                this.showModal = true;
            }
        },
        clearInput(){
            this.newTodoItem = "";
        }
    },
    components:{
        Modal:Modal
    }
};
</script>

<style scoped>
.inputBox {
    width:400px;
    margin:0 auto;
    height:40px;
    display:table;
}
.inputBox > input {
    width:300px;
    height:40px;
    font-family: Arial, Helvetica, sans-serif;
    font-size:15px;
    font-weight:bold;
    text-indent:10px;
    color:rgb(243, 109, 236);
    border:none;
    border-bottom:3px solid rgb(114, 106, 106);
}
.addContainer {
    display:block;
    display:table-cell;
    width:40px;
    height:40px;
    font-size:16px;
    color:red;
}
.addBtn {
    width:40px;
    height:40px;
}
</style>