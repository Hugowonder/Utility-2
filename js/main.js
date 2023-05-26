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