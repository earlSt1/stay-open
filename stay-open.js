'use strict';
import {libWrapper} from './shim.js';

Hooks.on('setup',() => {
    libWrapper.register('stay-open','SidebarDirectory.prototype._toggleFolder',function(wrapped,...args){
        let event = [...args][0]
        let folder = $(event.currentTarget.parentElement);
        let collapsed = folder.hasClass("collapsed");
        game.folders._expanded[folder.attr("data-folder-id")] = collapsed;

        // Expand
        if ( collapsed ) folder.removeClass("collapsed");

        // Collapse
        else {
            folder.addClass("collapsed");
        }

        // Resize container
        if ( this.popOut ) this.setPosition();
        
    },'MIXED');
});