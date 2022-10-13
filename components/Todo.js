let id = 0

export default {
    data(){
        return {
            newItem: "",
            listValue: [
                {id: id++, text: "Item 1"},
            ],
        }
    },
    emits: ['updateInput'],
    methods: {
        addItem(){
            this.listValue.push({id: id++, text: this.newItem})
            this.newItem = ""
        },
        removeItem(id){
            this.listValue = this.listValue.filter(item => item.id !== id)
        }
    },
    template: `
        <div class="todo-container" >
            <div class="todo-content">
                <div class="todo-header">
                    <form @submit.prevent="addItem">
                        <input v-model="newItem" placeholder="Adicione um item" /> <button>Add</button>
                    </form>
                </div>
                <div class="todo-list">
                    <ul>
                        <li class="todo-item" v-for="item in listValue" :key="item.id">{{item.text}} <button @click="removeItem(item.id)">X</button></li>
                    </ul>
                </div>
            </div>
        </div>    
    `
}