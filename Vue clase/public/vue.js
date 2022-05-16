
window.onload = function (){
    let vm = new Vue({
        el: '#vue-app',
        data: {
            message:'Hello Vue.js!',
            seen: 'true',
            autos: ["Ford", "BMW", "Fiat"]
        }

    })
    setTimeout(function(){
        vm.message = "Pasaron 5 segs";
    },5000)
    
}
