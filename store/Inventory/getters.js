export default { 
    getCategoryNumber(state) {
        return state.category
    },
    getCategoryContent(state){
        return state.categories
    },
    getSelectedItem(state){
        return state.selectedItem
    }
}