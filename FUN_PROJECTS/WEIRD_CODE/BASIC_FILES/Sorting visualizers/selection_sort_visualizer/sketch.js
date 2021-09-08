


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
  selection_sort()
  for(let i=0;i<arr.length;i++){
    stroke(255,0,0)
    line(i,height,i,height-arr[i])
  }
 
}

function selection_sort(){
  let min_index
  
  if(i<arr.length){
    min_index = i
    for(j= i + 1;j<arr.length;j++){
      if (arr[j] < arr[min_index]){
        min_index = j
      }
    }
    swap(arr,min_index,i)
    
  }
  else{
    console.log("Selection sort complete")
    noLoop()
  }
  
  i++;
  
}



function swap(arr,a,b){
  
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}
