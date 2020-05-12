<template>
    <div>
        <div class="addCard__content">
            <div class="addCard__input">
                <div class="area-content">
                 <textarea v-model="value"
                           @keypress.enter.prevent="pressEnter"
                           @input="input"
                           class="txtarea" 
                           placeholder="Введите текст карточки" autofocus></textarea>
               </div> 
            </div>
            <div class="addCard__footer">
                <div class="addCard"
                     @click="btnAdd">
                    {{ titleBtn }}
                </div>
                <div class="cancelCard"
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
        name: 'InputTxtCard',
        props: {
            titleBtn: {
                type: String,
                default: "Press Button"
            },
            iKey: {
                type: Number,
                default: null
            }
        },
        data() {
                return {
                    value: ''
                }
            },
        methods: {
            btnAdd() {
                if(this.value.trim()){
                    this.$emit("btnAdd");
                    this.addCard({
                        val: this.value,
                        key: this.iKey
                        });
                }
            },
            btnCancel() {
                this.$emit("btnCancel");
            },
            input(e) {
               e.target.style.height = 'auto'
               e.target.style.height = e.target.scrollHeight + 2 + "px"
            },
            pressEnter() {
               this.btnAdd() 
            },
            ...mapActions({
				addCard: 'boards/addCard'
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

    .addCard__content {
        width: 300px;
        
        .addCard__input {
            display: flex;
            justify-content: center;
            margin-top: 12px;
            margin-bottom: 12px;
            
            .area-content {
                background: #FFFFFF; 
                width: 272px;
                display: flex;
                justify-content: center;
                border-radius: 3px;
                box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
                
                .txtarea {
                    margin-top: 5px;
                    margin-bottom: 14px;
                    font-size: 15px;
                    width: 260px;
                    min-height: 52px;
                    resize: none;
                    overflow: hidden;
                    overflow-wrap: break-word;
                    outline: none;
                    border: none;
                }
             }
        }
        
        .addCard__footer {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 12px;
            
            .addCard {
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
            
            .cancelCard {
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
