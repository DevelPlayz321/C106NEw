function startClassification() {
    navigator.mediaDevices.getUserMedia({audio : true});
    model = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/qkXKxUCMj/model.json', modelLoaded)
}

function modelLoaded() {
    model.classify(gotResult);
    console.log('Model Loaded Successfully');
}

function gotResult(error, results){
    console.log(results)

    if (error) {
        console.error('error found');
    }
    
    else {
        console.log(results);
        document.getElementById('Result_label').innerHTML = 'sound: '+results[0].label;
        document.getElementById('Result_Accuracy').innerHTML = 'Accuracy: '+(results[0].confidence*100).toFixed(2);
        img = document.getElementById('Animal_display');
        if (results[0].label == "Barking"){
            img.src = "Puppy.jpg";   
        }
        else if(results[0].label == "Mewing"){
            img.src = "Cat.jfif";
        }
        else if(results[0].label == "roaring"){
            img.src = "Lion.jfif";
        }
        else {
            img.src = "disco.jfif";
        }
    }
}

 
