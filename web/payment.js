
var stripe = Stripe("pk_test_51N0etLSEourNeoPOTftJbazej6NrFDQD9R46AgvvtXuSEfPvuBru41uufchaIdkyZNTDWl1tt4eYjuRCuL6SbZa200xkfGr9KK")
function pay(){
    
   stripe.redirectToCheckout({
        
        lineItems:[
            {
                price:"price_1N5T1uSEourNeoPOHkNGhOIZ",
                quantity:1,
            },
        ],
        mode:"subscription",
        successUrl:"http://localhost:8080/artooons/success.html",
        cancelUrl:"http://localhost:8080/artooons/error.html"
    }).then(function(result){
       
    });

}
