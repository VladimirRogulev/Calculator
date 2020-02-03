function insert(item) {
    document.form.textview.value =  document.form.textview.value + item;
}

function equal () {
    let exp =  document.form.textview.value;
    if (exp) {
        document.form.textview.value = eval(exp);
    }
}
