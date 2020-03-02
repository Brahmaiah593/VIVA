fetch("data.json")
.then((responce)=>{
    return responce.json()
}).then((data)=>{
    //console.log(data);
    dispaly_info(data.basics);
})

var bodyEle=document.querySelector("#root");
function dispaly_info(info){

    var card=document.createElement("div");
    card.classList.add("card")

    let heading=document.createElement("h1");
    heading.textContent=info.name;

    bodyEle.append(card);
    
    let ln=document.createElement("hr")
    card.append(heading);
    card.append(ln);

    let rl=document.createElement("h3");
    rl.textContent=info.role;
    card.append(rl);


    let gm=document.createElement("a");
    gm.textContent=info.gmail;
    gm.href="mailto"+info.gmail;
    card.append(gm)

    let bk=document.createElement("br")
    card.append(bk);

    let button=document.createElement("a");
    button.textContent="View Profile";
    button.classList.add("btn");
    card.append(button);

    let ph=document.createElement("a");
    ph.href="tel"+info.phno;
    ph.textContent=info.phno;
    card.append(ph);
    
    
    

}