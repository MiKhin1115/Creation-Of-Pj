const app = Vue.createApp({
   data(){
        return{
            books:[
                {
                    name :"Js",
                    age: "1 year",
                    img: "img/axolotl.jpg",
                    isFav:true
                },
                {
                    name :"Js",
                    age: "1 year",
                    img: "img/crab.jpg",
                    isFav:true
                },
                {
                    name :"Js",
                    age: "1 year",
                    img: "img/dog.jpg",
                    isFav:true
                },
                {
                    name :"Js",
                    age: "1 year",
                    img: "img/jellyfish.jpg",
                    isFav:true
                },
                {
                    name :"Js",
                    age: "1 year",
                    img: "img/octopus.jpg",
                    isFav:true
                },
            ],
            showbook:true,
            link:"https://www.youtube.com"
        }
   },
   methods:{
    changeName(){
        let changeName = prompt("Enter Change Name: ","");
        this.author = changeName;
    }
   },
   computed:{
    filteredBook(){
        return this.books.filter(b=>{
            return b.isFav;
        })
    }
}
});


app.mount('#app');