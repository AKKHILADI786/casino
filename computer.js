let img=["images\\JPEG\\AC.jpg","images\\JPEG\\AH.jpg","images\\JPEG\\AS.jpg","images\\JPEG\\AD.jpg",
"images\\JPEG\\2C.jpg","images\\JPEG\\2H.jpg","images\\JPEG\\2S.jpg","images\\JPEG\\2D.jpg",
"images\\JPEG\\3C.jpg","images\\JPEG\\3H.jpg","images\\JPEG\\3S.jpg","images\\JPEG\\3D.jpg",
"images\\JPEG\\4C.jpg","images\\JPEG\\4H.jpg","images\\JPEG\\4S.jpg","images\\JPEG\\4D.jpg",
"images\\JPEG\\5C.jpg","images\\JPEG\\5H.jpg","images\\JPEG\\5S.jpg","images\\JPEG\\5D.jpg",
"images\\JPEG\\6C.jpg","images\\JPEG\\6H.jpg","images\\JPEG\\6S.jpg","images\\JPEG\\6D.jpg",
"images\\JPEG\\7C.jpg","images\\JPEG\\7H.jpg","images\\JPEG\\7S.jpg","images\\JPEG\\7D.jpg",
"images\\JPEG\\8C.jpg","images\\JPEG\\8H.jpg","images\\JPEG\\8S.jpg","images\\JPEG\\8D.jpg",
"images\\JPEG\\9C.jpg","images\\JPEG\\9H.jpg","images\\JPEG\\9S.jpg","images\\JPEG\\9D.jpg",
"images\\JPEG\\10C.jpg","images\\JPEG\\10H.jpg","images\\JPEG\\10S.jpg","images\\JPEG\\10D.jpg",
"images\\JPEG\\KC.jpg","images\\JPEG\\KH.jpg","images\\JPEG\\KS.jpg","images\\JPEG\\KD.jpg",
"images\\JPEG\\QC.jpg","images\\JPEG\\QH.jpg","images\\JPEG\\QS.jpg","images\\JPEG\\QD.jpg",
"images\\JPEG\\JC.jpg","images\\JPEG\\JH.jpg","images\\JPEG\\JS.jpg","images\\JPEG\\JD.jpg"
  ]

  let point=[200,2,3,4,5,6,7,8,9,10,100,50,20]

  let elem1=document.getElementById('test1')
  let elem2=document.getElementById('test2')
  let elem3=document.getElementById('test3')

  let loop;
  let a,b,c;
  let stop1=document.getElementById('stop1')
  let stop2=document.getElementById('stop2')
  let play1=document.getElementById('play1')
  let play2=document.getElementById('play2')
  let score1=document.getElementById('divCurrScore1')
  let score2=document.getElementById('divCurrScore2')
  let totalScore1=document.getElementById('divTotalScore1')
  let totalScore2=document.getElementById('divTotalScore2')
  let add=document.getElementById('add')


document.getElementById('stop1').disabled = true;
document.getElementById('stop2').disabled = true;
document.getElementById('play2').disabled = true;
document.getElementById('play1').disabled = false;

  function show(speed){

    a=Math.floor(Math.random()*51);
    elem1.setAttribute('src',img[a]);
    b=Math.floor(Math.random()*51);
    c=Math.floor(Math.random()*51);
    elem2.setAttribute('src',img[b]);
    elem3.setAttribute('src',img[c]);
    loop=setTimeout(show,1000) ;
   
}

  stop1.onclick=function(){
    document.getElementById('stop1').disabled = true;
    document.getElementById('stop2').disabled = true;
    document.getElementById('play1').disabled = true;
    document.getElementById('play2').disabled = false;

    document.getElementById('test1').style.animation='none';
    document.getElementById('test2').style.animation='none';
    document.getElementById('test3').style.animation='none';
    //console.log(a+"  "+b+"   "+c+"   ")
    let am,bm,cm;
    if(a%4==0){
        am=1;
    }
    else if(a%4==1)am=2;
    else if(a%4==2)am=3;
    else am=4;
    if(b%4==0){
        bm=1;
    }
    else if(b%4==1)bm=2;
    else if(b%4==2)bm=3;
    else bm=4;
    if(c%4==0){
        cm=1;
    }
    else if(c%4==1)cm=2;
    else if(c%4==2)cm=3;
    else cm=4;
    console.log(am,point[Math.floor(eval(a/4))],Math.floor(eval(a/4)))
    console.log(bm,point[Math.floor(eval(b/4))],Math.floor(eval(b/4)))
    console.log(cm,point[Math.floor(eval(c/4))],Math.floor(eval(c/4)))
    let ans=eval(am*point[Math.floor(eval(a/4))]+bm*point[Math.floor(eval(b/4))]+cm*point[Math.floor(eval(c/4))]);
   // console.log(ans)
    score1.innerText=ans+" ";
    let total=parseInt(totalScore1.innerText);
    total+=ans;
    totalScore1.innerText=total+'';

    clearInterval(loop);
    add.innerText="wait for computer turn";
    setTimeout(computerplay,1000);

    setTimeout(computer,5000);
}
function computerplay(){
    play2.click();
}
function computer(){
    stop2.click();
}
stop2.onclick=function(){
    document.getElementById('stop1').disabled = true;
    document.getElementById('stop2').disabled = true;
    document.getElementById('play1').disabled = false;
    document.getElementById('play2').disabled = true;

    document.getElementById('test1').style.animation='none';
    document.getElementById('test2').style.animation='none';
    document.getElementById('test3').style.animation='none';
    //console.log(a+"  "+b+"   "+c+"   ")
    let am,bm,cm;
    if(a%4==0){
        am=1;
    }
    else if(a%4==1)am=2;
    else if(a%4==2)am=3;
    else am=4;
    if(b%4==0){
        bm=1;
    }
    else if(b%4==1)bm=2;
    else if(b%4==2)bm=3;
    else bm=4;
    if(c%4==0){
        cm=1;
    }
    else if(c%4==1)cm=2;
    else if(c%4==2)cm=3;
    else cm=4;
    console.log(am,point[Math.floor(eval(a/4))],Math.floor(eval(a/4)))
    console.log(bm,point[Math.floor(eval(b/4))],Math.floor(eval(b/4)))
    console.log(cm,point[Math.floor(eval(c/4))],Math.floor(eval(c/4)))
    let ans=eval(am*point[Math.floor(eval(a/4))]+bm*point[Math.floor(eval(b/4))]+cm*point[Math.floor(eval(c/4))]);
   // console.log(ans)
    score2.innerText=ans+" ";
    let total=parseInt(totalScore2.innerText);
    total+=ans;
    totalScore2.innerText=total+'';

    clearInterval(loop);
    let ak="";
    let t1=parseInt(totalScore1.innerText);
    let t2=parseInt(totalScore2.innerText);
    if(t1>t2){
        ak="Congrates you are the winner"
    }
    else if(t2>t1){
        ak="Better luck next time"
    }
    else{
        ak="The match is tie";
    }
    add.innerText=ak;
}
play1.onclick=function(){
    document.getElementById('test1').style.animation='anim 0.2s infinite';
    document.getElementById('test2').style.animation='anim 0.3s infinite';
    document.getElementById('test3').style.animation='anim 0.25s infinite';
    document.getElementById('stop1').disabled = false;
    document.getElementById('stop2').disabled = true;
    document.getElementById('play1').disabled = true;
    document.getElementById('play2').disabled = true;
    show();
}
play2.onclick=function(){
    document.getElementById('test1').style.animation='anim 0.2s infinite';
    document.getElementById('test2').style.animation='anim 0.3s infinite';
    document.getElementById('test3').style.animation='anim 0.25s infinite';
    document.getElementById('stop1').disabled = true;
    document.getElementById('stop2').disabled = false;
    document.getElementById('play1').disabled = true;
    document.getElementById('play2').disabled = true;
    show();
}