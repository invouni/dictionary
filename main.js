

let arr = ["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"];
let main_func = async (key) => {
  const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${key}`);
  let id = 1;
  let json = await res.json();
  try{
    let s = "";
    let data = document.querySelector('.res');
    json[0]['meanings'][0]['definitions'].forEach((word,i) => {
    if(i >= 9)
    return;
    
    
    data.innerHTML = null;
    //(data)
    let s2 = `<div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${arr[i]}"class="aria-expanded="false" aria-controls="flush-collapse${arr[i]}">
          result: ${i+1}
        </button>
      </h2>
      <div id="flush-collapse${arr[i]}" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">${word.definition}.</div>
      </div>
    </div>`;
    //(s)
        s += s2;
  })
  data.innerHTML = (s);
  //(json[0]['meanings'][0]['definitions'][0].definition);
  alert('result printed');
  }
  catch(err) {
    alert('wrong input')
  }
  
}
function switchMode() {
  let moon = document.getElementById ("moon");
    if(moon.className=="moon"){
      moon.className="sun";
      document.querySelector('.all').classList.remove("bg-dark");
      document.querySelector('.all').classList.add("bg-white");
      document.querySelector('.txt').classList.remove("bg-white");
      document.querySelector('.txt').classList.add("bg-dark");
    }
  else {
    moon.className ="moon";
    document.querySelector('.all').classList.remove("bg-white");
    document.querySelector('.all').classList.add("bg-dark");
    document.querySelector('.txt').classList.remove("bg-dark");
    document.querySelector('.txt').classList.add("bg-white");
    
  }
}
let search_btn = document.querySelector('.search');
//(search_btn);
let box = document.querySelector('.input-box');
search_btn.addEventListener('click',()=>{
  const val = box.value;
  if(val == '') {
    alert('wrong input');
    return;
  }
  main_func(val);
  box.value = '';
});
box.addEventListener('keypress',(event)=>{
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();

    const val = box.value;
    if (val == '') {
      alert('wrong input');
      return;
    }
    main_func(val);
    box.value = '';
  }
});

let change = (font) => {
  let all = document.querySelector('body');
  all.style.setProperty('font-family',font);
 // //(all.style.fontFamily);
}