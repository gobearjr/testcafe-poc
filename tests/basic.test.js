import { Selector } from 'testcafe'

fixture `automation dengan testcafe`
.page(`https://devexpress.github.io/testcafe/example/`)
//set speed 

test.skip('click populate button', async t => {
    await t
    .setNativeDialogHandler(() => true)
    .click(Selector('#populate'))
    .expect(Selector('#developer-name').value).eql('Peter Parker')
})

test.skip('select radio button', async t => {
    await t
    .click(Selector('#macos'))
    .expect(Selector('#macos').checked).ok()
    .expect(Selector('#windows').checked).notOk()
    .expect(Selector('#linux').checked).notOk()
})

test.skip('click multiple checkbox', async t => {
    await t
    .setTestSpeed(0.5)
    .click(Selector('#remote-testing'))
    .expect(Selector('#remote-testing').checked).ok()
    .click(Selector('#reusing-js-code'))
    .expect(Selector('#reusing-js-code').checked).ok()
    .click(Selector('#tried-test-cafe'))
    .expect(Selector('#tried-test-cafe').checked).ok()
    .expect(Selector('#traffic-markup-analysis').checked).notOk()
})


test('click multiple checkbox', async t => {
    await t
    .setTestSpeed(0.5)
    .click(Selector('#remote-testing'))
    .expect(Selector('#remote-testing').checked).ok()
    .click(Selector('#reusing-js-code')
    .expect(Selector('#tried-test-cafe').checked).ok()
    .click(Selector('#tried-test-cafe'))
    .expect(Selector('#tried-test-cafe').checked).ok()
    .expect(Selector('#traffic-markup-analysis').checked).notOk()
})


const slider = Selector('.ui-slider-handle')
test.skip('geser slider', async t => {
    await t
    .click(Selector('#tried-test-cafe'))
    .drag(slider, 80, 0, {offsetX:10, offsetY:10})

})

const select = Selector('#preferred-interface')
const option = select.find('option')
test.skip('select dropdown', async t => {
    await t
    .setTestSpeed(0.5)
    .click(select)
    .click(option.withText('JavaScript API'))
    .expect(select.innerText).contains('JavaScript API')
})

test('End to End', async t => {
    await t
    // .setTestSpeed(0.5)
    //click button populate
    .setNativeDialogHandler(() => true)
    .click(Selector('#populate'))
    .expect(Selector('#developer-name').value).eql('Peter Parker')
    //select radio button
    .click(Selector('#macos'))
    .expect(Selector('#macos').checked).ok()
    //checkbox dan slider
    .click(Selector('#tried-test-cafe'))
    .drag(slider, 80, 0, {offsetX:10, offsetY:10})
    //select dropdown
    .click(select)
    .click(option.withText('JavaScript API'))
    .expect(select.innerText).contains('JavaScript API')
    //type text di comment
    .typeText(Selector('#comments'), 'ini di isi di comment section')
    //click submit button
    .click(Selector('#submit-button'))
    //expect halaman selanjutnya
    .expect(Selector('.result-content').innerText).contains('Peter Parker')
})

