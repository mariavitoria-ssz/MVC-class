const  Item = {
    name: "",
    description: "", 
    seeInfo: function(){
        return `${this.name} and ${this.description}`
    },
    toJSON: function(){
        return{
        "name": this.name,
        "descripton": this.description,
    }
    }

}
module.exports = Item