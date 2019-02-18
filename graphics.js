class Graphics {
    static renderGame(game) {
        Graphics.updateElement(game.ship);
        game.bursts.forEach(burst => {
            burst.bubbles.forEach(bubble => {
                Graphics.updateElement(bubble);
            });
        });
    }

    static addElement(element, type) {
        let div = $('<div>').addClass(type);
        div.attr('id', `${element.id}`);
        div.css('left', `${element.xPos}px`);
        div.css('top', `${element.yPos}px`);
        div.css('background-color', `#${element.color}`)  
        $('.container').append(div); 
    }
    
    static updateElement(element) {
        let div = $(`#${element.id}`);
        div.css('left', `${element.xPos}px`);
        div.css('top', `${element.yPos}px`);
        div.css('background-color', `#${element.color}`)  
    }
    
    static removeElement(element) {
        $(`#${element.id}`).remove();
    } 
}