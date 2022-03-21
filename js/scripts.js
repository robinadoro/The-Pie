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

    // object to get user form data
    function UserOrder(flavour, size, crust, toppings, number){
        this.newFlavour = flavour;
        this.newSize= size;
        this.newCrust= crust;
        this.newToppings= toppings;
        this.newNumber= number;
    }
    
    // new object to save user form data
    var userInput = new UserOrder(flavour(), size(), crust(), toppings(), number());

    // calculating total cost
    var totalCost=(userInput.newSize + userInput.newCrust + userInput.newToppings + userInput.newFlavour)*userInput.newNumber;


    })
})