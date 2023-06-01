"use strict";
const select__utility = document.getElementById("select__utility")
const variant = document.getElementById("variant");

let variant_option = "<Option selected disabled>Select Variant</option>";

variant.innerHTML = variant_option //displaying the default variant

select__utility.addEventListener("change", function(evt){

    switch(evt.target.value){
        case "airtime":
            variant_option =` <Option value = "Airtel">Airtel Airtime</option>
            <Option value = "MTN">MTN Airtime</option>
            <Option value = "GLO">GLO Airtime</option>
            <Option value = "9MOBILE">9MOBILE Airtime</option>`;
        break;

        case "tv":
            variant_option =` <Option value = "DSTV">DSTV Subscription</option>
            <Option value = "GOTV">GOTV Subscription</option>
            <Option value = "STARTIMES">STARTIMES Subscription</option>
            `;

        break;

        case "electricity":
            variant_option =` <Option value = "IKEDC">Ikeja Electricity - IKEDC</option>
            <Option value = "KEDCO">Kano Electricity - KEDCO</option>
            <Option value = "PHEDC">Portharcourt Electricity - PHEDC</option>
            <Option value = "JED">Jos Electricity - JED</option>
            <Option value = "EKEDC">Eko Electricity - EKEDC</option>
            <Option value = "AEDC">Abuja Electricity - AEDC</option>
            <Option value = "KAEDC">Kaduna Electricity - KAEDC</option>
            <Option value = "IBEDC">Ibadan Electricity - IBEDC</option>
            <Option value = "EEDC">Enugu Electricity - EEDC</option>
            <Option value = "BEDC">Benin Electricity - BEDC</option>
            `;

        break;
    }
    variant.innerHTML = variant_option;
});

// document.querySelectorAll('nav--bar').addEventListener('click', function (e) {
//     e.preventDefault();
//     const target = e.target;
//     if (target.classList.contains('link--a')) {
//         const id = target.getAttribute('href').slice(1);
//         document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
//     }
// });

document.querySelectorAll('div.links a') .forEach((a)=>{
    
    a.addEventListener("click", function(e){
        e.preventDefault();
        const link = e.target;
        console.log(link.classList);

      //remove all active classes
      removeActiveClass(document.querySelectorAll('div.links a'));

      //then add the active class to the current tab
      link.classList.add("active");

        if(link.classList.contains("link-a")){
            const id = link.getAttribute('href').split("#")[1];
            if(id !== undefined){
                document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
            }
            console.log(id);
        }
    });
});
//this function removes all the active class from the a element
function removeActiveClass(list){
    for(let x of list){
        if(x.classList.contains("active")){
            x.classList.remove("active");
    }
  }
};

//the bottom button
let bottom_btn = document.querySelector(".up__arrow");
bottom_btn.addEventListener("click",function(e){
    let color = Math.floor( Math.random() * 1000);
    //console.log(color);
    document.body.style.background= "#" + color;
});