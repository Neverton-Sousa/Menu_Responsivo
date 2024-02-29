// const hamburger = document.querySelector(".hamburger");
// const nav = document.querySelector(".nav");

// hamburger.addEventListener("click", () => nav.classList.toggle("active"));

const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick  = function() {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains( 'open' );

    toggleBtnIcon.classList = isOpen  ? "fa-solid fa-xmark" : "fa-solid fa-bars";
    }


nomes = [
'DISJUNTOR BIPOLAR DE 40 A - UN',
'DISJUNTOR BIPOLAR DE 25 A - UN',
'DISJUNTOR BIPOLAR DE 16 A - UN',
'DISJUNTOR BIPOLAR DE 10 A - UN',
'DISJUNTOR UNIPOLAR DE 32 A - UN',
'DISJUNTOR UNIPOLAR DE 25 A - UN',
'DISJUNTOR UNIPOLAR DE 20 A - UN',
'DISJUNTOR UNIPOLAR DE 16 A - UN',
'DISJUNTOR UNIPOLAR DE 10 A - UN',
'DISJUNTOR TRIPOLAR DE 40 A - UN',
'DISJUNTOR TRIPOLAR DE 60 A - UN',
'DISJUNTOR TRIPOLAR DE 100 A - UN',
'TOMADA SIMPLES 10 A - UN',
'TOMADA SIMPLES 20 A - UN',
'TOMADA DUPLA 10 A - UN',
'TOMADA DUPLA 20 A - UN',
'TOMADA TRIPLA 10 A - UN',
'TOMADA TRIPLA 20 A - UN',
'TOMADA + 1 INTERRRUPTOR 10 A - UN',
'TOMADA + 1 INTERRRUPTOR 20 A - UN',
'TOMADA + 2 INTERRRUPTOR 10 A - UN',
'TOMADA + 2 INTERRRUPTOR 20 A - UN',
'INTERRUPTOR SIMPLES - UN',
'INTERRUPTOR DUPLO - UN',
'INTERRUPTOR TRIPLO - UN',
'INTERRUPTOR PARELELO - UN',
'INTERRUPTOR PARELELO INTERMEDIÁRIO - UN',
'CAIXA ARSTOP DE EMBUTIR - UN',
'CAIXA ARSTOP DE SOBREPOR - UN',
'CONDUITE CORRUGADO DE 1/2 POLEGADA - ME',
'CONDUITE CORRUGADO DE 3/4 POLEGADA - ME',
'CONDUITE CORRUGADO DE 1 POLEGADA - ME',
'CONDUITE CORRUGADO DE 2 POLEGADA - ME',
'ELETRODUTO PVC RIGIDO DE 1/2 POLEGADA - VA',
'ELETRODUTO PVC RIGIDO DE 3/4 POLEGADA - VA',
'ELETRODUTO PVC RIGIDO DE 1 POLEGADA - VA',
'ELETRODUTO PVC RIGIDO DE 1.1/4 POLEGADA - VA',
'ELETRODUTO PVC RIGIDO DE 2 POLEGADA - VA',
'BOCAL PLAFON - UN',
'BOCAL PORCELANA E27 - UN',
'BOCAL PORCELANA E40 - UN',
'BOCAL COMUM E27 - UN',
'BOCAL COMUM E40 - UN',
'BOCAL COMUM COM RABICHO E27 - UN',
'LÂMPADA DE LED DE 10W - UN',
'LÂMPADA DE LED DE 12W - UN',
'LÂMPADA DE LED DE 16W - UN',
'HASTE DE ATERRAMENTO DE 2,4 METROS - UN',
'HASTE DE ATERRAMENTO DE 1,5 METROS - UN',
'CONECTOR PARA HASTE TERRA - UN',
'CAIXA DE MEDIDO POLIFÁSICA - UN',
'CAIXA DE MEDIDO MONOFÁSICA - UN',
'CABO ELETRICO FLEXIVEL 16.0 MM² - COR - ME',
'CABO ELETRICO FLEXIVEL 10.0 MM² - COR - ME',
'CABO ELETRICO FLEXIVEL 6.0 MM² - COR - ME',
'CABO ELETRICO FLEXIVEL 4.0 MM² - COR - ME',
'CABO ELETRICO FLEXIVEL 2,5 MM² - COR - ME',
'CABO ELETRICO FLEXIVEL 1,5 MM² - COR - ME',
'CABO ELETRICO FLEXIVEL 1,0 MM² - COR - ME',
'FITA ISOLANTE DE 50 METROS - UN',
'FITA ISOLANTE DE 10 METROS - UN',
'FITA ISOLANTE DE 60 METROS - UN',
'FIXA FIO 14-16 - CA',
'FIXA FIO 18-20 - CA',
'FIXA FIO 20-22 - CA',
'ISOLADOR PLÁSTCO PARA 3 FIOS (BARATINHA) - PA',
'BARRAMENTO TIPO PENTE BIFÁSICO - UN',
'CAIXA DE DISTRIBUIÇÃO PARA 4 DISJUNTORES - UN',
'CAIXA DE DISTRIBUIÇÃO PARA 6 DISJUNTORES - UN',
'CAIXA DE DISTRIBUIÇÃO PARA 8 DISJUNTORES - UN',
'CAIXA DE DISTRIBUIÇÃO PARA 10 DISJUNTORES - UN',
'CAIXA DE DISTRIBUIÇÃO PARA 12 DISJUNTORES - UN',
'CAIXA DE DISTRIBUIÇÃO PARA 14 DISJUNTORES - UN',
'CHAVE CONTATORA MONOFÁSICA 40W - UN',
'CHAVE CONTATORA MONOFÁSICA 60W - UN',
'CHAVE CONTATORA MONOFÁSICA 80W - UN',
'BUCHA PLASTICA Nº 5 - UN',
'BUCHA PLASTICA Nº 6 - UN',
'BUCHA PLASTICA Nº 7 - UN',
'BUCHA PLASTICA Nº 8 - UN',
'BUCHA PLASTICA Nº 10 - UN',
'BUCHA PLASTICA Nº 12 - UN',
'PARAFUSO 3,5X30 - UN',
'PARAFUSO 4.0X35 - UN',
'PARAFUSO 5.0X40 - UN',
'PARAFUSO 5.0X50 - UN',
'CANALETA PVC 20X10 MM - VA',
'CANALETA PVC 50X20 MM - VA',
'CANALETA VENTILADAS PVC 25X25 MM',
];

// let sortedNomes = nomes.sort();

// let input = document.getElementById('input');

// input.addEventListener( "keyup", function() {
//     for(let i of sortedNomes){
//         if(i.toLowerCase().startsWinth(input.ariaValueMax.toLowerCase()) && input.value !=""){

//         }
//     }

// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;
// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        icon.onclick = ()=>{
            webLink = `https://www.google.com/search?q=${userData}`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}
function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        webLink = `https://www.google.com/search?q=${selectData}`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}
function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}
}