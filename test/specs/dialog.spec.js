const dialogPage = require("../pageobjects/dialog.page");
const expect = require('chai').expect;

describe('Dialog', () => {
    it('should verify that the text entry dialog usename and password fields are editable', () => {
        dialogPage.appBtn.click()
        dialogPage.alertDialogBtn.click()
        dialogPage.textEntryDialogBtn.click()

        dialogPage.userNameField.clearValue()
        dialogPage.userNameField.addValue("Test User")
        dialogPage.userNameField.clearValue()
        dialogPage.userNameField.addValue("Actual User")

        dialogPage.userPasswordField.clearValue()
        dialogPage.userPasswordField.addValue("Test Password")

        const text = dialogPage.userNameField.getText();
        console.log(text)

        expect(text).equal("Actual User")
        dialogPage.dialogOkBtn.click()
        // dialogPage.viewBtn.click()
        // // wdio method touchAction to scroll
        // driver.touchAction([
        //     {action: 'press', x:500, y:1400},
        //     {action: 'moveTo', x:500, y:300},
        //     'release'
        // ])
    });

    // it.only specifies that only that test will run
    it('should verify that the app adjusts when orientation is switched', () => {
        console.log(driver.getOrientation())
        driver.setOrientation('LANDSCAPE')
        driver.pause(1000);
        driver.saveScreenshot('./screenshots/landscape.png')
        dialogPage.appBtn.click()
    })

    it.only('Verify Timeouts', () =>{
        // implicit waits - waits until element is found or timeout expires - whichever occurs first

        driver.setImplicitTimeout(10000)
        driver.setTimeouts(10000)
        
        // explicit wait 
        // drive.pause(10000)
    })
    

});


