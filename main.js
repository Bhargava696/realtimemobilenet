function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier("MobileNet",modelLoaded);
}
function modelLoaded() {
  console.log("Model is loaded");
}
function draw() {
  image(video, 0, 0, 300, 300);
  classifier.classify(video,got_result);
}
function got_result(error,results) {
  if(error){
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("sp1").innerHTML = results[0].label;
    document.getElementById("sp2").innerHTML = results[0].confidence.toFixed(2);
  }
}

