<template>
    <div>
        <div class="newBoard">
            <div class="newBoard__content">
                <div class="newBoard__title">
                    <p>{{ titleBoard }}</p>
                </div>
                
                <draggable v-model="cards" @end="drag=false" group="cards">
                    <app-card v-for="(card,i) in cards" 
                          :key="i"
                          :txtCard="card.title"
                          :keyCol="sentKey"
                          :keyCard="i"/>
                </draggable>
                          
                <div v-if="!showCard" 
                     class="newBoard__footer">
                       <div class="addCard" 
                            @click="addCard">
                           <p><span>&#43;</span> Добавьте еще одну карточку</p>
                       </div>
                </div>
                <app-inpTxtCard v-else="showCard"
                                titleBtn="Добавить карточку"
                                @btnAdd="saveCard"
                                @btnCancel="cancel"
                                :iKey="sentKey"/>
            </div>
        </div>
    </div>
</template>

<script>
    
    import draggable from 'vuedraggable'
    import AppInpTxtCard from './../components/InputTxtCard'
    import AppCard from './../components/Card'
    
    import {mapGetters, mapActions} from 'vuex'
    
    export default {
        name: 'Board',
        components: {
            draggable,
            AppInpTxtCard,
            AppCard
        },
        props: {
           titleBoard: {
                type: String,
                default: 'Title'
            },
           sentKey: {
                type: Number,
                default: null
            }        
        },
        data() {
            return {
                showCard: false
            }
        },
        methods: {
            addCard(e) {
                this.showCard = !this.showCard
            },
            cancel() {
               this.showCard = !this.showCard
            },
            saveCard() {
               this.showCard = !this.showCard
            }
        },
        computed: {
			...mapGetters({
				boards: 'boards/allBoards'
			}),
            cards: {
               get() {
                 return this.boards[this.sentKey].cards  
               },
               set(value) {
                  this.$store.commit('boards/updateCards', {
                      key: this.sentKey,
                      val: value
                  }) 
               }    
               
            }
		}
    }

</script>

<style scoped lang="scss">
    * {
        margin: 0;
        padding: 0;
    }
    
    .newBoard {
        display: flex;
        margin-left: 24px;
        cursor: pointer;
        
        .newBoard__content {
            width: 300px;
            background: #D4D4D4;
            border-radius: 5px;
            
            .newBoard__title {
                margin: 12px 0 4px 12px;
                
                 p {
                    font-family: Roboto;
                    font-size: 15px;
                    color: #404B5A;
                    width: 276px;
                    white-space: pre-wrap;
                    word-wrap: break-word;
                 }
             }
            
            .newBoard__footer {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 14px;
                
                .addCard {
                    display: flex; 
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 8px;
                    width: 260px;
                    height: 30px;
                    border-radius: 3px;
                    cursor: pointer;
                    
                    &:hover {
                        background: #C4C4C4;
                    }
                 }
                
                 p {
                    font-family: Roboto;
                    font-size: 15px;
                    color: #626262;
                 }
            }
        }
    }

</style>
