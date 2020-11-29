class Dialog {
    // $ returns one element
    // $$ returns multiple elements (if applicable)

    // get element by accessibility id
    get appBtn() { return $('~App') }

    // get element by xpath (made up of class + attribute)
    // useful for when there is no accessibility id present and multiple elements have the same class
    get userNameField() { return $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/username_edit"]') }

    // xpath from class + index attribute
    get everyMonday() { return $('//android.widget.CheckedTextView[@index="0"]') }

    // get all elements that share the same class
    get days() { return $$('//android.widget.CheckedTextView') }

    get viewBtn() {return $('~Views')}
    get alertDialogBtn() { return $('~Alert Dialogs') }
    get textEntryDialogBtn () { return $('~Text Entry dialog') }
    get userPasswordField() { return $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/password_edit"]') }
    get dialogOkBtn () { return $('//android.widget.Button[@resource-id="android:id/button1"]') }
    get dialogCancelBtn () { return $('//android.widget.Button[@resource-id="android:id/button2"]') }
}

module.exports = new Dialog();