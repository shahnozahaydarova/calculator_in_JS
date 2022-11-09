function calcNumbers(result){
    form.displayResult.value=form.displayResult.value+result;
}
function back() {
    var prevalue = form.displayResult.value;
    form.displayResult.value = prevalue.substr(0,prevalue.length-1);
}