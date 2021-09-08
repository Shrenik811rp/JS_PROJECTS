


let arr = []
let i=0,j=0
function setup(){
  createCanvas(windowWidth,windowHeight)
  
  arr = new Array(width)
  for (let i=0;i<arr.length;i++){
    arr[i] = random(height)
    
  }
}

function draw(){
  
  background(0)
  if(i<arr.length){
    for(j=0;j<arr.length - i - 1;j++){
      
      let prev = arr[j]
      let next = arr[j+1]
      
      if(prev > next){
        swap(arr,j,j+1);
      }
    }
  }
  else{
    noLoop()
  }
  i++;
   for(let i=0;i<arr.length;i++){
    stroke(255,0,0)
    line(i,height,i,height-arr[i])
  }
 
}


function swap(arr,a,b){
  
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}
