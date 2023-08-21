$(document).ready(function() {
  var display = $("#display");
  var buttons = $("button");

  $(".number").click(function() {
    display.val(display.val() + $(this).text());
  });

  $(".operator").click(function() {
    display.val(display.val() + " " + $(this).text() + " ");
  });

  $(".function").eq(0).click(function() {
    var number = parseInt(display.val());
    display.val(number * number);
  });

  $(".function").eq(1).click(function() {
    display.val(Math.random().toFixed(5));
  });

  $("#clear").click(function() {
    display.val("");
  });

  $(".equal").click(function() {
    var expression = display.val();
    display.val(eval(expression));
  });
});

