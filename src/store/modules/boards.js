export default {
	namespaced: true,
	state: {
		boards: [ 
			
        ]
	},
	getters: {
		allBoards(state){
			return state.boards;
		}
		
	},
	mutations: {
         addBoard(state, val){
			state.boards.push({
                title: val,
                cards: []
			});
		},
        updateBoards(state,val){
            state.boards = val
        },
        addCard(state, data){
            state.boards[data.key].cards.push({
                                    title: data.val,
                                    content: []
                                  });
        },
        updateCards(state,data){
            state.boards[data.key].cards = data.val
        },
        changeTitleCard(state, data){
           state.boards[data.keyCol].cards[data.keyCard].title = data.val 
        },
        addContCard(state, data){
          state.boards[data.keyCol].cards[data.keyCard].content.push(data.val)
                                  
        }
	},
	actions: {
		addBoard(store, val){
			return new Promise(function(resolve, reject){
					store.commit('addBoard', val);
					resolve();
			});
		},
        addCard(store, data){
			return new Promise(function(resolve, reject){
					store.commit('addCard', data);
					resolve();
			});
		},
        changeTitleCard(store, data){
			return new Promise(function(resolve, reject){
					store.commit('changeTitleCard', data);
					resolve();
			});
		},
        addContCard(store, data){
			return new Promise(function(resolve, reject){
					store.commit('addContCard', data);
					resolve();
			});
		}
	}
}