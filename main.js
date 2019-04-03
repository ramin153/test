const my_comp = {
    template:
    ' <div class="py-3"  v-bind:style="{display : display}" ><div id="head" class="bg-secondary text-white mb-0 py-3">{{obj.title}}</div><div id="todo_content">  <div class="pd-3"  :style="{textDecoration : decora}" >{{obj.content}}</div><div style="text-align: center;" class="py-3" ><button type="button " class="btn btn-outline-primary  btn-lg mx-2" @click="changestyle" >mark done </button><button type="button" class="btn btn-outline-danger  btn-lg mx-2" @click="changedis" >remove </button></div></div></div> ',
        props:['obj'],
        data : function (){
            return{
                decora: 'none',
                display: 'inline'
            }
        },
        methods: {
            changestyle: function(){
                if(this.decora === 'none' ){
                    this.decora='line-through';
                    obj.show = 1;
                }
                else{
                    this.decora='none';
                    obj.show = 0;
                }
            },
            changedis : function (){
                    this.display = 'none';
                    
            }
        },

};


new Vue({
    el:"#app",
    data:{
        title:'',
        content:'',
        id:0,
        all_todo:[],
        all:true,
        done:true,


    },
    components:{

        appTodo:my_comp,
        
    },
    methods: {
        addnew : function (){
            if( this.content!='' && this.title !=''){
                const item = {
                    title : this.title,
                    id : this.id,
                    content : this.content,
                    show : 0,

                };
            
                this.all_todo.push(item);
                this.content='';
                this.title='';
                this.id++;
            }
        },
        showall: function(){
            this.all=true;

        },
        shownotdone: function(){
            this.all=false;
            this.done = false;

        },
        showdone: function(){
            this.all=false;
            this.done = true;
        },

    },

})