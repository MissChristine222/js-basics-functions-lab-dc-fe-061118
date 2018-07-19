// Code your solution in this file!

function distanceFromHqInBlocks(somevalue) {
  return Math.abs(somevalue - 42)
}

function distanceFromHqInFeet(somevalue) {
  return Math.abs((somevalue - 42)*264)
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs((start-destination))*264
}


function calculatesFarePrice (start, destination) {
  if ((Math.abs(start-destination)*264)<=400) {
   return 0;
}
   else if (((Math.abs(start-destination)*264)>400), ((Math.abs(start-destination)*264)<2000)) {
   return ((Math.abs(start-destination)*264)-400)*0.02;
}
   else if (((Math.abs(start-destination)*264)>2000), ((Math.abs(start-destination)*264)<2500)) {
   return 25;
}
   else if (((Math.abs(start-destination)*264)>2500)) {
   return "cannot travel that far";
}
}
 
 
