// getting function from user form
$document.ready(function(){
    $("#checkout").submit(function(e){
        function flavour(){
            var pizzaFlavour = document.getElementById("flavour").value;
            return parseInt(pizzaFlavour);
        }
        function size(){
            var pizzaSize = document.getElementById("size").value;
            return parseInt(pizzaSize);
        }
        function crust(){
            var pizzaCrust = document.getElementById("crust").value;
        }
        function toppings(){
            var pizzaToppings = document.getElementById("toppings").value;
        }
        function number (){
            var pizzaNumber= document.getElementById("number").value;
        }
    })
})