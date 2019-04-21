var oStart = document.getElementsByClassName('start')[0],
    oMove = document.getElementsByClassName('move')[0],
    colorList = ['blue', 'red', 'green', 'skyblue'],
    animation = null,
    score = 0,
    startTime = 0,
    speed = 1;

function getStyle () {
   var whichColor = colorList[Math.floor( Math.random() * 4 )];
   var index = Math.floor( Math.random() * 4 );
   return {
      color:whichColor,
      index:index
   }
}

function down (e) {
    var ele = e.target;
    if(ele.className == 'active'){
        score ++;
        changeColor(e.target);
    }else{
        fail();
    }
}

function fail () {
    cancelAnimationFrame(animation);
    oMove.removeEventListener('mousedown',down);
    alert(score);
}



function removeBlock () {
   for(var i = 0; i < 4; i++){
      var lastChild = oMove.lastChild;
      if(lastChild.className !== 'active'){
          oMove.removeChild(lastChild);
      }else{
          fail();
          return;
      }
      
   }
}

function addBlock () {
   var inf = getStyle();
   var fragMent = document.createDocumentFragment();
   var firstChild = oMove.getElementsByTagName('div')[0];
   for(var i = 0; i < 4; i ++){
      var oDiv = document.createElement('div');
      if(i === inf.index){
         oDiv.style.backgroundColor = inf.color;
         oDiv.className = 'active';
      }
      fragMent.appendChild(oDiv);
   }
   oMove.insertBefore(fragMent, firstChild);
}


function isChange () {
   var diff = speed + oMove.offsetTop;
   if(diff > 0){
      return true;
   }else {
      return false;
   }
}

function move () {
   oMove.style.top = oMove.offsetTop + speed + 'px';
   animation = requestAnimationFrame(move);
   if(isChange()){
      var nowTime = Date.now();
      if(nowTime - startTime > 10000) {
         speed += 1;
         startTime = nowTime;
      }
      addBlock();
      oMove.style.top = -150 + speed + oMove.offsetTop + 'px';
      removeBlock();
   }
}

function changeColor (ele) {
   ele.style.backgroundColor = '#ccc';
   ele.className = '';
}


function bindEvent () {
   oStart.addEventListener('click', function () {
      this.style.display = 'none';
      startTime = Date.now();
      oMove.addEventListener('mousedown', down)
      move();
   })
}


function init () {
   for(var i = 0; i < 5; i++){
      addBlock();
   }
   bindEvent(); 
}


init();


//开始移动    到达回原点    添加一排