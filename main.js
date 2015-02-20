define(function (require, exports, module) {
    "use strict";

    var CommandManager = brackets.getModule("command/CommandManager"),
        Commands = brackets.getModule("command/Commands"),
        EditorManager = brackets.getModule("editor/EditorManager"),
        Menus = brackets.getModule("command/Menus"),
        bracketsStrings = brackets.getModule("strings"),
        //
        // CUSTOM COMMAND
        cm_jumptodefinition = "cm_jumptodefinition.jumptodefinitionHandler";

    function onJumpToDefinition() {
        var editor = EditorManager.getCurrentFullEditor();
        CommandManager.execute(Commands.NAVIGATE_JUMPTO_DEFINITION, editor);
    }
    
    CommandManager.register(bracketsStrings.CMD_JUMPTO_DEFINITION, cm_jumptodefinition, onJumpToDefinition);
    Menus.getContextMenu(Menus.ContextMenuIds.EDITOR_MENU).addMenuDivider();
    Menus.getContextMenu(Menus.ContextMenuIds.EDITOR_MENU).addMenuItem(cm_jumptodefinition);
});
