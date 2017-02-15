<input type="hidden" id="emailInput" name="email" />
<input type="hidden" id="stripeToken" name="stripeToken" />
<script src="https://code.jquery.com/jquery-3.1.1.slim.min.js"></script>
<script src="https://checkout.stripe.com/checkout.js"></script>
<script>

var rads = document.getElementsByClassName('radio-buy')
for (var i = 0; i < rads.length; i++) {
  var r = rads[i];
  r.addEventListener('click', function(e) {
    var msg = '';
    console.log(e.target.value);
    switch(e.target.value) {
      case 'SMS':
      case 'Phone':
        msg = 'This phone number';
        break;
      case 'Email':
        msg = 'This email address';
        break;
    }
    document.getElementById('Target').setAttribute('placeholder', msg);
  });
}

var handler = StripeCheckout.configure({
  key: getStripeKey(),
  image: "http://buttonjoy.com/img/b-256.png",
  locale: 'auto',
  amount: isCharity() ? 2500 : 3500,
  currency: 'USD',
  billingAddress: true,
  shippingAddress: true,
  name: 'Buttonjoy',
  description: isCharity() ? 'One Magic Button' : 'One Charity Button',
  token: function(token) {
    var data = {
      stripeToken: token,
      kind: isCharity() ? "charity" : "magic",
      transport: $('input[name=Transport]:checked').val(),
      target: $('input[name=Target]').val(),
      message: $('textarea[name=Message]').val(),
      charity: $('input[name=Charity]').val(),
      development: isDev(), 
      share: $('input[name=Sharing]').attr("checked") ? true : false,
      amount: $('input[name=Amount]').val(),
      email: token.email
    }

    $('#buy-form').hide();
    $('#send-me-title').hide();
    $('.uil-ring-css').show();

    $.ajax({
      url: "https://5vqutpxqh6.execute-api.us-west-2.amazonaws.com/prod/order", 
      method: 'post',
      data: JSON.stringify(data),
      contentType: "application/json; charset=utf-8",
      dataType   : "json",  
    }).done(function(a, b, c) {
      $('#buy-form').hide();
      $('.w-form-done').first().show();
      $('.uil-ring-css').hide();
    }).fail(function(a, b, c) {
      $('#buy-form').hide()
      $('.w-form-fail').first().show();
      $('.uil-ring-css').hide();
    })
  }
});

document.getElementById('buy-btn').addEventListener('click', function(e) {
  handler.open();
  e.stopPropagation();
  e.preventDefault();
});

// Close Checkout on page navigation:
window.addEventListener('popstate', function() {
  handler.close();
});
</script>