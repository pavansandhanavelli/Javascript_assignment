const completedBtn=document.querySelector('button#complete');
const pendingBtn=document.querySelector('button#pendingg');
const allbtn=document.querySelector('button#all');
//async function
async function fetchtodo(){
    let ans=await fetch('https://jsonplaceholder.typicode.com/todos');
    console.log(ans)
    let value=await ans.json();
    console.log(value)
    //for all button
    allbtn.onclick = function(){
        let answer="";
    value.forEach(function(todo,index) {
        answer=answer+`<p val=${todo.id}>
                "User":${todo.userId},<br>
                "id":${todo.id},<br>
                "head":${todo.title},<br>
                "over":${todo.completed},<br></p>`
            
})
    document.querySelector('.todos').innerHTML=answer;
    }

    //for compare button
    completedBtn.onclick = function(){
        let answer="";
    value.forEach(function(todo,index) {
        if (todo.completed == true){
            answer=answer+`<p val=${todo.id}>
                "user":${todo.userId},<br>
                "id": ${todo.id},<br>
                "head":${todo.title},<br>
                "over":${todo.completed},<br></p>`
        
}})
    document.querySelector('.todos').innerHTML=answer;
    }
    //for pending button
    pendingBtn.onclick = function(){
        let answer="";
        value.forEach(function(todo,index) {
            if (todo.completed == false){
                answer=answer+`<p val=${todo.id}>
                  "user":${todo.userId},<br>
                   "id": ${todo.id},<br>
                   "head":${todo.title},<br>
                  "over":${todo.completed},<br></p >`                
    }})
        document.querySelector('.todos').innerHTML=answer;
        }
}
    fetchtodo();