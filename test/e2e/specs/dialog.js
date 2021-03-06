// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
const name = 'dialog'
const PAGE_URL = name
module.exports = {
    'dialog': function(browser) {
        // automatically uses dev Server port from /config.index.js
        // default: http://localhost:8080
        // see nightwatch.conf.js
        const devServer = browser.globals.devServerURL + PAGE_URL
        const SCREENSHOT_PATH = browser.globals.screenshots + name + '.png'
        const dialog = '.mui-dialog:not([style*="display: none"])'
        browser
            .windowSize('', 375, 667)
            .url(devServer)
            .waitForElementVisible('#app', 5000)
            // .click('.mui-btn')
            .assert.elementCount('.mui-btn', 7)

        for (let i = 1; i < 8; i++) {
            showPopup(i, '.mui-dialog__btn_primary', '确认')
        }
        showPopup(4)
        showPopup(6)
        // showPopup(3, '.mui-dialog__btn_primary', '确认')

        browser.end()

        function showPopup(n, btn = '.mui-dialog__btn_default', txt = '取消') {
            btn = dialog + ' ' + btn
            browser.click(`.mui-btn:nth-of-type(${n})`)
                .waitForElementVisible(dialog, 1000)
                // .pause(300)
                .click(btn)
                .waitForElementVisible('.mui-toast', 1000)
                .assert.containsText('.mui-toast', txt)
                .waitForElementNotVisible('.mui-toast', 3000)
        }
        // .end()
    }
}
