
let inputEl = document.querySelector('input')
let btns = document.querySelectorAll('button')

for(let button of btns){
    button.addEventListener('click',function(e){
        let btnText = e.target.innerText;
        // console.log(btnText);
        if(btnText ==='C'){
            inputEl.value =" ";

        }
        else if(btnText === '=')
        {
            try { // sahi kam
                inputEl.value= eval(inputEl.value)
            } catch (error) {
                inputEl.value = "invalid"
                
            }
        }

        else{
            inputEl.value+=btnText
        }
    })
}
