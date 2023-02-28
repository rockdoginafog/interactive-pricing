const inputRange = document.querySelector(".range")
const price = document.getElementById('price')
const pageviews = document.getElementById('pageviews')
const checkbox = document.querySelector(".toggle-checkbox")

checkbox.addEventListener("click", () =>{
    if(checkbox.checked){
        price.innerHTML = price.innerHTML - (price.innerHTML * 1/4)
    }else{
        price.innerHTML = Math.ceil(parseInt(price.innerHTML) + (price.innerHTML * 1/3))
    }
})

inputRange.addEventListener("input", ()=>{
    if(inputRange.value == 10000){
        checkbox.checked = false
        price.innerHTML = '8'
        pageviews.innerHTML = '10K'
    }else if(inputRange.value == 50000){
        checkbox.checked = false
        price.innerHTML = '12'
        pageviews.innerHTML = '50K'
    }else if(inputRange.value == 100000){
        checkbox.checked = false
        price.innerHTML = '16'
        pageviews.innerHTML = '100K'
    }else if(inputRange.value == 500000){
        checkbox.checked = false
        price.innerHTML = '24'
        pageviews.innerHTML = '500K'
    }else if(inputRange.value == 1000000){
        checkbox.checked = false
        price.innerHTML = '36'
        pageviews.innerHTML = '1M'
    }
})

