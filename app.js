const app = Vue.createApp({
   data(){
        return{
            books:[
                {
                    title:"Js",
                    author: "Viking",
                    age: 20,
                    img: "img/1.jpg",
                    isFav:true
                },
                {
                    title:"Vue",
                    author: "Stone",
                    age: 24,
                    img: "img/2.jpg",
                    isFav:true
                },
                {
                    title:"Laravel",
                    author: "Viking",
                    age: 20,
                    img: "img/3.jpg",
                    isFav:true
                }
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