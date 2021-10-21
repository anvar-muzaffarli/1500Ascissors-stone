const siyahi = ["kagiz.png", "scissors.png", "stone.png"]

// siyahi[0]

//DOM Document Object Model

 const kagiz = document.getElementById('kagiz')
const scissors = document.getElementById('qayci')
const das = document.getElementById('das')

const komputerinSecimi = document.getElementById('komputer-secim')
const netice = document.getElementById('netice')


kagiz.onclick = seciminiEle
scissors.onclick = seciminiEle
das.onclick = seciminiEle

function seciminiEle() {
    const komputer = RandomSecim()
    const menimSecimim = this.dataset.id

    if(komputer ==0 && menimSecimim == 0) {
        netice = "Her ikiniz eyni secimi etdiniz! Yeniden cehd edin!"
    }
    else if(komputer==0 && menimSecimim ==1) {
        netice = "Siz qazandiniz! Qayci kagizi kesir"
    }
    else if(komputer==0 && menimSecimim ==2) {
        netice = "Uduzdun! Kagiz dashi bukur"
    }

    else if(komputer ==1 && menimSecimim ==0) {
        netice = "Uduzdun qayci kagizi kesir"
    }

    else if(komputer ==1 && menimSecimim ==1) {
        netice ="Beraber"
    }
    
    else if(komputer ==1 && menimSecimim ==2) {
        netice= "Tebrikler!"
    }
    
    else if(komputer ==1 && menimSecimim ==1) {
        
    }
    
    else if(komputer ==1 && menimSecimim ==1) {}
    
    else if(komputer ==1 && menimSecimim ==1) {}

}

function RandomSecim() {
   const say =  Math.round(Math.random()*2) //0 1 2
   komputerinSecimi.src = `img/${siyahi[say]}`

   return say
    // Math.random() 0.14554 0.6565
    //geldim neyledim? goturdum 2ye vurdum
    //Math.random()*2 // 0-2 arasinda generasiya eledi
    //amma tam deyildi
    //Math.round(Math.random()*2)
}