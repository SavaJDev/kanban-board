<template>
    <div>
        <div class="addBoard__content">
            <div class="addBoard__input">
                <input type="text" 
                       v-model="valInput"
                       class="title" 
                       placeholder="Ввести заголовок списка" autofocus>
            </div>
            <div class="addBoard__footer">
                <div class="addList"
                     @click="btnAdd(valInput)">
                    {{ titleBtn }}
                </div>
                <div class="cancelList"
                     @click="btnCancel">
                    <p>X Отмена</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    
    export default {
        name: 'InputTitleBoard',
        props: {
            titleBtn: {
                type: String,
                default: "Press Button"
            }
        },
        data() {
                return {
                    valInput: ""
                }
            },
        methods: {
            btnAdd() {
                if(this.valInput.trim()){
                    this.$emit("btnAdd");
                    this.addBoard(this.valInput);
                }
            },
            btnCancel() {
                this.$emit("btnCancel");
                this.valInput = ""
            },
            onInput(e) {
                    this.$emit('input',e.target.value);
                },
            ...mapActions({
				addBoard: 'boards/addBoard'
			})
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

    .addBoard__content {
        width: 300px;
        border-radius: 5px;
        
        .addBoard__input {
            display: flex;
            justify-content: center;
            margin-top: 12px;
            margin-bottom: 12px;
            
            .title {
                width: 272px;
                height: 28px;
            }
        }
        
        .addBoard__footer {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 12px;
            
            .addList {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-left: -20px;
                width: 160px;
                height: 29px;
                background: #0C7CD5;
                border-radius: 3px;
                border-bottom: 3px solid #0668b5;
                cursor: pointer;
                font-family: Roboto;
                font-size: 15px;
                color: #FFFFFF;
                
                &:hover {
                    background: #1f78bf;
                 } 
                
                &:active {
                    background: #0668b5;
                    border-bottom: 0px solid #0668b5;
                    border: 1px solid #c4c4c4;
                    width: 158px;
                    height: 30px;
                    font-size: 14.5px;
                 }
             }
            
             .cancelList {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-left: 12px;
                width: 80px;
                height: 32px;
                cursor: pointer;
                 
                p {
                  color: #626262;
                }
                 
                &:hover {
                    background: #C4C4C4;
                    border-radius: 3px;
                 }  
              }
        }
    }   

</style>
