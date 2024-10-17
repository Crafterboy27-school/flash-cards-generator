function downloadFile(name, content){
    //create a file and put the content, name and type
    var file = new File(["\ufeff"+content], name, {type: "text/plain:charset=UTF-8"});
  
    //create a ObjectURL in order to download the created file
    url = window.URL.createObjectURL(file);
  
    //create a hidden link and set the href and click it
    var a = document.createElement("a");
    a.style = "display: none";
    a.href = url;
    a.download = file.name;
    a.click();
    window.URL.revokeObjectURL(url);
} 

let titleEl = document.getElementById("title")
document.getElementById("generate").addEventListener("click", async function(){
    let content = await (await fetch("/template/cards.html")).text()
    content = content.replaceAll("INSERT_TITLE", titleEl.value)

    downloadFile("flashcards.html", content)
})