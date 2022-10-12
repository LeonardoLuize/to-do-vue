export default {
    props: {
        listValue: Array,
        addItem: Function,
        removeItem: Function,
        newItem: Function
    },
    template: `
        <div class="todo-container" >
            <div class="todo-content">
                <div class="todo-header">
                    <input v-model="newItem" placeholder="Adicione um item" /> <button @click="addItem()">Add</button>
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