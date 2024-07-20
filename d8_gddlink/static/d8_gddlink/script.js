//variables


const GLink = document.getElementById("glink");
const genButton = document.getElementById("btn");
const outputFile = document.getElementById("fileEmbed");
const outputAudio = document.getElementById("audioEmbed");
const outputVideo = document.getElementById("videoEmbed");
const copyButtonFile = document.getElementById("fileCopy");
const copyButtonAudio = document.getElementById("audioCopy");
const copyButtonVideo = document.getElementById("videoCopy");

copyButtonFile.addEventListener("click", () => copyToClipboard(outputFile.value));
copyButtonAudio.addEventListener("click",() => copyToClipboard(outputAudio.value));
copyButtonVideo.addEventListener("click",() =>  copyToClipboard(outputVideo.value));

genButton.addEventListener("click", generateLinks);

function generateLinks(e){
  //get document id
  e.preventDefault();
  const GLValue = GLink.value;
  console.log(GLValue); 


  if(GLValue.includes("https://drive.google.com/file/d/")==false){
    console.log("return false");
  //  alert("Invalid Input. Please insert a good Drive file share Link");
    return false;
  }

  e.preventDefault();
  const GDID = GLValue.replace("https://drive.google.com/file/d/","").replace("/view?usp=drive_link","");
  console.log(GDID);
  
  //set output File Embed
  outputFile.value = "https://drive.google.com/uc?export=download&id="+GDID;  
  //set output Audio Embed
  outputAudio.value = "<audio width = \"300\" height = \"32\" controls = \"controls\" src = \"" + outputFile.value + "\" type = \"audio/mp3\"></audio>"; 
  //set output Video Embed
  outputVideo.value = "<iframe src=\"" + outputFile.value + "\" width = \"560\" height = \"315\"></iframe>";
  alert("generated");
}

//check
function copyToClipboard(e){
  navigator.clipboard.writeText(e).then(alert("copied"));
  console.log(e);
}




