class Form{
    constructor(){
        this.input = createInput("");
        this.button = createButton("Play");
        this.title = createElement('h2');
        
    }
    hide(){
        this.input.hide();
        this.button.hide();
    }
    display(){
        this.title.html("Can You Find the Treasure?");
        this.title.position(displayWidth/2 - 200, 50);
        this.input.position(displayWidth/2 - 130, displayHeight/2);
        this.button.position(displayWidth/2 - 150, displayHeight/2);
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
           /* this.greeting.html("Hello " + player.name)
            this.greeting.position(400,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');*/
        });

    }
    }
