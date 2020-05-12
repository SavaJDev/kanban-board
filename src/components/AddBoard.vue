<template>
    <div>
        <div class="addBoard">
            <div v-if="initView" class="board__content">
                <div class="addCol" @click="addCol">
                    <p><span>&#43;</span> Добавьте еще одну колонку</p>
                </div>
            </div>
            <div v-else="!initView" class="addBoard__content">
                <app-inpTitleBoard @btnAdd="newBoard"
                                   @btnCancel="cancel"
                                   titleBtn="Добавить список"/>
            </div>
        </div>
    </div>
</template>

<script>
    import AppInpTitleBoard from './../components/InputTitleBoard'

    export default {
        name: 'AddBoard',
        components: {
            AppInpTitleBoard
        },
        props: {
            
        },
        data() {
                return {
                    initView: true
                }
            },
        methods: {
           addCol() {
               this.initView = !this.initView
           },
           cancel() {
               this.initView = !this.initView
           },
            newBoard() {
                this.initView = !this.initView
            }
               
        },
        computed: {
            
        }
    }

</script>


<style scoped lang="scss">
    * {
        margin: 0;
        padding: 0;
    }

    .addBoard {
        display: flex;
        margin-left: 24px;
        flex-direction: column;
        
        .board__content {
            display: flex;
            align-items: center;
            width: 300px;
            height: 40px;
            background: #D4D4D4;
            border-radius: 5px;
            cursor: pointer;
            
            .addCol {
                display: flex;
                align-items: center;
                margin-left: 12px;
                width: 260px;
                height: 28px;
                border-radius: 3px;
                
                p {
                    font-family: Roboto;
                    font-size: 15px;
                    color: #626262;
                    padding-left: 24px;
                 }
                
                 &:hover {
                    background: #C4C4C4;
                 }
             }
        }
        
        .addBoard__content {
            width: 300px;
            background: #D4D4D4;
            border-radius: 5px;
        }
    }

</style>
