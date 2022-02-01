Webcam.set({
    height: 300,
    width: 300,
    image_format: "png",
    png_quality: 90
});
var camera = document.getElementById("webcam");
Webcam.attach(camera);
function capture(){
    Webcam.snap(function (data_uri){
        document.getElementById("output").innerHTML = "<img id='yes' src="+data_uri+">"
    })
}
console.log('ml5.version', ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/A4xItmizq/model.json", model_loaded);
function model_loaded(){
    console.log("model is very berry much loaded yayyyy :)))")
}
function analyse(){
    img = document.getElementById("yes");
    classifier.classify(img, gotResult);
}
function gotResult(error, result){
    if(error){
        console.log( error, "'tis is the error of the century, sir Shakespear");
    }
    else{
        console.log(result, "rejoice!")
        document.getElementById("name").innerHTML = result[0].label;
        document.getElementById("accuracy").innerHTML = result[0].confidence.toFixed(3);
    }
}
