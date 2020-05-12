<template>
    <div>
        <div class="modal-backdrop">
            <div class="modal">
               <div class="modal-header">
                  <textarea @keypress.enter.prevent="pressEnter"
                            @change="changeTitle"
                            @input="input"
                            ref="textarea"
                            rows="1"
                            type="text" 
                            class="modal-title">
                            {{ modalTitle }}
                  </textarea>
                      
                   <div class="btn-close" 
                        @click="btnClose">
                        X
                   </div>
               </div>
               
               <div class="modal-body"> 
                      <textarea v-model="valModalBody" 
                                class="txtarea"
                                placeholder="Описание" 
                                autofocus>         
                      </textarea>
                      
               </div>
              
               <div class="btn-notSave"
                    :class="btnSaveClass"
                    @click="btnSave">  
                    <p>Сохранить</p>   
               </div>
               <div v-for="(content,i) in modalContent"
                    :key="i"
                    class="modal-content">
                   <p>{{ content }}</p>
               </div>    
            </div>
        </div>
    </div>
</template>

<script>
    
    import {mapGetters, mapActions} from 'vuex'
    
    export default {
        name: 'Modal',
        components: {

        },
        props: {
            
        },
        data() {
            return {
                valModalBody: '',
                valModalTitle: ''
            }
        },
        methods: {
            pressEnter(e) {
                this.changeTitle(e)
                e.target.blur()
            },
            input(e) {   
               e.target.style.height = 'auto'
               e.target.style.height = e.target.scrollHeight + 2 + "px"
                   
            },
            changeTitle(e) {
                this.valModalTitle = e.target.value
                if(this.valModalTitle.trim()){
                    this.changeTitleCard({
                            keyCol: this.id.col,
                            keyCard: this.id.card,
                            val: this.valModalTitle
                    })
                }
                else e.target.value = this.modalTitle
            },
            btnClose() {
               this.$router.push({path: '/'}) 
            },
            btnSave() {
                 if(this.valModalBody.trim()){
                       this.addContCard({
                            keyCol: this.id.col,
                            keyCard: this.id.card,
                            val: this.valModalBody
                         });
                       this.valModalBody = ''
                 }
            },
            ...mapActions({
				addContCard: 'boards/addContCard',
                changeTitleCard: 'boards/changeTitleCard'
			})
        },
        computed: {
            ...mapGetters({
				boards: 'boards/allBoards'
			}),
            id() {
                let str = this.$route.params.id
                let posDash = str.indexOf('-')
                let numbCol = Number((str.slice(0, posDash))-1)
                let numbCard = Number((str.slice(posDash+1))-1)
            
                    return {
                        col: numbCol,
                        card: numbCard
                    }
             },
             modalTitle() {
                return this.boards[this.id.col].cards[this.id.card].title
             },
             modalContent() {
                return this.boards[this.id.col].cards[this.id.card].content
             },     
             btnSaveClass() {
                 return this.valModalBody.trim() ? 'btn-save' : ''
             }        
        },    
        mounted() {
            this.$refs.textarea.style.height = this.$refs.textarea.scrollHeight + 'px'
        }    
    }

</script>

<style scoped lang="scss">
    * {
        margin: 0;
        padding: 0;
    }
    
    .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
        overflow-y: auto;
        z-index: 20;
        align-items: flex-start;
        
        .modal {
            margin-top: 50px;
            margin-bottom: 50px; 
            position: absolute; 
            background: #D4D4D4;
            width: 600px;
            min-height: 244px;  
            display: flex;
            flex-direction: column;
            border-radius: 5px;   
            
            .modal-header {
                display: flex;
                
                .modal-title {
                    width: 521px;
                    margin: 16px 0px 16px 16px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 24px;
                    resize: none;
                    overflow: hidden;
                    overflow-wrap: break-word;
                    background: #D4D4D4;
                    border: none;
                    
                    &:focus {
                        background: #ffffff;
                    }
                 }
                
                 .btn-close {
                    width: 30px;
                    height: 30px;
                    cursor: pointer;
                    margin: 16px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 15px;
                     
                    &:hover {
                        background: #beb9b9;
                     } 
                  }
            }
            
            .modal-body {
                margin-left: 16px;
                width: 568px;
                
                .txtarea {
                    font-size: 15px;
                    padding: 5px 0px 0px 5px;
                    width: 563px;
                    height: 60px;
                    resize: none;
                    overflow-wrap: break-word;
                }
            }
            
            .btn-notSave {
                width: 99px;
                height: 32px;
                background: #a5c4dd;
                border-radius: 3px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: not-allowed;
                margin: 5px 0px 16px 16px;
                
                &.btn-save {
                    background: #0C7CD5;
                    cursor: pointer;
                    
                    &:hover {
                        background: #2068a2;
                    }
                 }
                
                p {
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 15px;
                    line-height: 18px;
                    color: #FFFFFF;
                 }
            }
            
            .modal-content {
                display: flex;
                margin-left: 16px;
                max-width: 568px;
                margin-bottom: 16px;
                
                p {
                    font-family: Roboto;
                    font-style: normal;
                    font-size: 15px;
                    line-height: 18px;
                    color: #212934;
                    background: #FFFFFF;
                    padding: 8px;
                    border-radius: 2px;
                    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
                 }
             }
        }
     }

     
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
     
    
    
    
    
    
</style>
