<template>
    <section>
        <transition-group name="list" tag="ul">
            <li v-for="(todoItem,index) in propsdata" :key="todoItem" class="shadow">
                <font-awesome-icon class="checkBtn" icon="check" aria-hidden="true" />
                {{todoItem}}
                <span class="removeBtn" type="button" @click="removeTodo(todoItem, index)">
                    <font-awesome-icon icon="trash" aria-hidden="true" />
                </span>
            </li>
        </transition-group>
    </section>
</template>

<script>
export default {
    props:["propsdata"],
    methods:{
        removeTodo(todoItem, index){
            this.$emit("removeTodo",todoItem, index);
        }
    }
};
</script>

<style scoped>

ul {
    list-style:none;
    padding:0;
    margin:0;
    text-align:left;
}
li {
    display:flex;
    min-height:50px;
    height:50px;
    line-height:50px;
    margin: 0.5rem 0;
    padding:0 0.9rem;
    background:white;
    border:1px solid #6478fb;
    border-radius: 5px;
    vertical-align:middle;
    align-items:center;
    justify-content: center;
}

.checkBtn {
    color:#62acde;
    margin-right:5px;
}
.removeBtn {
    margin-left:auto;
    color:#de4343;
}

.list-enter-active,
.list-leave-active {
    transition: all 1s;
}
.list-enter,
.list-leave-to {
    opacity:0;
    transform: translateY(30px);
}
</style>