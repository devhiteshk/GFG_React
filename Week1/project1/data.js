(function test(){
    const initialBooks = [
    { id:'1',
      name:'book1',
      lender:'hitesh',
      borrower : null
    },
    { id:'2',
      name:'book2',
      lender:'deepak',
      borrower : null
    },
    { id:'2',
      name:'book3',
      lender:'vikrant',
      borrower : 'nishant'
    },
    { id:'3',
      name:'book4',
      lender:'paras',
      borrower : 'vikas'
    },
    { id:'4',
      name:'book5',
      lender:'sushil',
      borrower : null
    }
]

    class Store{
            constructor(list){
                this.bookList = list
            }
        render(){
            showTable(this.bookList)
        }

        handleLogin(){

        }

        handleAction(){
            
        }
    }

    document.body.onload = function(){
        const myStore = new Store(initialBooks)
        myStore.render()
    }

})()