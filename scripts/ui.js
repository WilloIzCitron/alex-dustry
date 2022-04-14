const ui = require("ui-lib/library");
var uikick;

const id = "#00000"
const rawtime = 1 //in hours
const reason = ""


ui.addButton("Alex Kick", Icon.hammer, () => {
    uikick.show();
})

function kickRemote() {
    const ID = id
    const Time = rawtime
    const Reason = reason

    Call.sendChatMessage(`/kick ${ID} ${Time} ${Reason}`)
}

ui.onLoad(() => {
    dialog = new BaseDialog("$kick-menu");
    const table = dialog.cont;

    table.label("Kick")
    table.row()

    ui.mobileAreaInput(table, "ID", id)
    ui.mobileAreaInput(table, "Time", rawtime)
    ui.mobileAreaInput(table, "Reason", reason)
    table.row()

    ui.addButton(table, "Kick", Icon.hammer, kickRemote)



})

