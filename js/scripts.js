// getting function from user form
$(document).ready(function() {
  let orders=[]
      $("button#checkout").click(function(event) {        
        event.preventDefault();
        function flavour() {
          var pizzaFlavour = document.getElementById("flavour").value;
          return parseInt(pizzaFlavour);
        }
        function size() {
          var pizzaSize = document.getElementById("size").value;
          return parseInt(pizzaSize);
        }
        function crust() {
          var pizzaCrust = document.getElementById("crust").value;
          return parseInt(pizzaCrust);
        }
        function toppings() {
          var pizzaToppings = document.getElementById("toppings").value;
          return parseInt(pizzaToppings);
        }
        function number() {
          var pizzaNumber = document.getElementById("number").value;
          return parseInt(pizzaNumber);
        }
    
        //object to get user form data
        function Order(flavour, size, crust, toppings, number) {
          this.newFlavour = flavour;
          this.newSize = size;
          this.newCrust = crust;
          this.newToppings = toppings;
          this.newNumber = number;
        }
    
        //calculating total cost
        var userInput = new Order(flavour(), size(), crust(), toppings(), number());
    
        //a variable to store the total expenditure of the user
        var totalCost =
          (userInput.newSize +
            userInput.newCrust +
            userInput.newToppings +
            userInput.newFlavour) *
          userInput.newNumber;
    
        //alert for total cost of pizza
        orders.push(userInput)
        document.getElementById("order-details").innerHTML=null
        orders.forEach(order =>{
          document.getElementById("order-details").innerHTML +=`
          <div>Pizza Size Cost:${order.newSize}</div>
          <div>Pizza Crust Cost:${order.newCrust}</div>
          <div>Pizza Toppings Cost:${order.newToppings}</div>
          <div>Pizza Flavour:${order.newFlavour}</div>
          <div>Pizza Number:${order.newNumber}</div>
          <div>Total Cost: ${totalCost}</div>
          `
          alert("Your total cost is: " + totalCost );

        }) 
      
    
    
        // method to reset form
        $("button#checkout").reset();
    
        event.preventDefault();
      });
      
    //   alert for delivery 
    $("button#deliverybtn").click(function(e){
        alert("Your delivery fee is Ksh. 300");
        prompt("enter your address");
        alert("Your order will be delivered to your location");


        e.preventDefault();
    })
    });

