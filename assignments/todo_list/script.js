let insert=document.querySelector('input');
let Button=document.querySelector('button');
let todo=document.querySelector('.todos');
let count=-1
Button.addEventListener('click',function(){
    count+=1;
    let p=document.createElement('p');
    p.innerHTML=insert.value
    p.setAttribute("key",count);
    todo.appendChild(p);
    p.addEventListener('click',function(){
        todo.removeChild(p);
    })
})