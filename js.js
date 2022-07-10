let a=document.querySelector('.button-2')
let s=document.querySelector('.button-1')
function post(){
    let b=document.querySelector('.input').value
    let c=document.querySelector('.input-1').value
    let d=document.querySelector('.input-3').value
    let k=document.querySelector('.qwe')
    let n=document.querySelector('.wer')
    b=Number(b)
    c=Number(c)
    d=Number(d)
    m=b*(c/100)/d
    l=b*(c/100)
    k.innerHTML=m
    n.innerHTML=l
}
function cbros(){
    let b=document.querySelector('.input')
    b.value=''
    let c=document.querySelector('.input-1')
    c.value=''
    let d=document.querySelector('.input-3')
    d.value=''
    let k=document.querySelector('.qwe')
    k.innerHTML='-'
    let n=document.querySelector('.wer')
    n.innerHTML='-'


}
s.addEventListener('click',cbros)
a.addEventListener('click',post)