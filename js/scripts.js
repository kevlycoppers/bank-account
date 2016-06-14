// BACK END //
function BankAccount(name, initDeposit, balance) {
  this.name = name;
  this.initDeposit = initDeposit;
  this.balance = balance;
}

BankAccount.prototype.deposit = function(number) {
  this.balance = this.balance + number;
  return this.balance;
}

BankAccount.prototype.withdraw = function(number) {
  this.balance = this.balance - number;
  return this.balance;
}

// FRONT END //
$(function() {
  $("#register").submit(function(event) {
    event.preventDefault();

    var name = $("#name").val();
    var initialDeposit = parseInt($("#initial-deposit").val());
    var balance = initialDeposit

    var newAccount = new BankAccount(name, initialDeposit, balance);

    $(".name").text("for " + newAccount.name);
    $(".balance").text("$" + newAccount.balance);

    $("#deposit-withdraw").submit(function(event) {
      event.preventDefault();
      var newDeposit = parseInt($("#deposit").val());
      var newWithdrawal = parseInt($("#withdraw").val());
      var balance = newAccount.balance;

      if (isNaN(newDeposit) === true) {
        var newDeposit = 0;
      } else {
        var newWithdrawal = 0;
      }
      newAccount.deposit(newDeposit);
      newAccount.withdraw(newWithdrawal);
      $(".balance").text("$" + newAccount.balance);

      $("#deposit").val("");
      $("#withdraw").val("");
    });
    $("#name").val("");
    $("#initial-deposit").val("");

  });

});
