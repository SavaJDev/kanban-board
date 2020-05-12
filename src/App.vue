<template>
    <div id="app">
            <draggable v-model="boards" class="wrapper" @end="drag=false">
                <app-board v-for="(board,i) in boards"
                        :key="i" 
                        :sentKey="i" 
                        :titleBoard="board.title"/>
                 <app-addBoard/>
            </draggable>
            <router-view></router-view>
    </div>
</template>

<script>
    
    import draggable from 'vuedraggable'
    import AppBoard from './components/Board'
    import AppAddBoard from './components/AddBoard'
    
    import {mapGetters, mapActions} from 'vuex'
    
    export default {
        components: {
            draggable,
            AppAddBoard,
            AppBoard
        },
        data() {
                return {
                    
                }
        },
        computed: {
             
            boards: {
               get() {
                   return this.$store.getters["boards/allBoards"]
               },
               set(value) {
                   this.$store.commit('boards/updateBoards', value)
               }     
            }
		},
        methods: {
             
        }
    }

</script>

<style lang="scss">
    #app {
       display: block; 
       background-color: #1D8B77;
       display: block;
       min-height: 100%;
       min-width: 100%;    
       position: absolute;
        
       .wrapper {
            display: flex;
            margin-top: 24px;
            width: 100%;
        }    
    }
    
</style>
