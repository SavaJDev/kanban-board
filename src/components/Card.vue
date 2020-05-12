<template>
    <div>
                <div class="card">
                       <router-link :to="{name: 'modal',params: {id: id}}"
                                    tag="div"
                        >
                           <p>{{ txt }}</p>
                       </router-link> 
                </div>
    </div>
</template>

<script>
    
    export default {
        name: 'Card',
        components: {
            
        },
        props: {
           txtCard: {
                type: String,
                default: ''
            },
            keyCol: {
                type: Number,
                default: null
            },
            keyCard: {
               type: Number,
                default: null 
            }
        },
        data() {
            return {
                
            }
        },
        methods: {
            
        },
        computed: {
			txt() {
                if(this.txtCard.length > 65) 
                    return this.txtCard.slice(0,63) + '...'
                else return this.txtCard
            },
            id() {
                return this.keyCol+1 + '-' + (this.keyCard+1)
             }
		}
    }

</script>

<style scoped lang="scss">
    * {
        margin: 0;
        padding: 0;
    }
    
    .card {
        display: flex;
        align-items: center;
        width: 252px;
        background: #FFFFFF;
        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
        border-radius: 2px;
        margin-top: 12px;
        margin-left: 12px;
        padding: 8px 12px;
        cursor: pointer;
        
        &:hover {
            background: #f2eeee;
        }
        
        p {
            font-size: 15px;
            color: #212934;
            line-height: 18px;
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            width: 247px;
            min-height: 18px;
            max-height: 36px;
            white-space: normal;
            word-wrap: break-word;
            //overflow: hidden;
            //text-overflow: ellipsis;
            //display: -webkit-box;
            //-webkit-box-orient: vertical;
            //-webkit-line-clamp: 2; 
        }
    }
    
</style>
