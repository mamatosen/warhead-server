const Node = require('./Node').Node;
const Modes = require('./Modes');

class Pool extends Node{
    constructor(id, index, nMode, amount){
        super(id, index);
        if(nMode == "automatic"){
            this.nmode = Modes.NodeModes.auto;
        }
        else{
            this.nmode = Modes.NodeModes.passive;
        }
        this.ppmode = Modes.PushPullMode.push;
        this.enabled = true;

        this.amount = amount;

        this.init();
    }

    effectEvent(delta){
        this.connections.forEach(c => {
            if(!c.isTransferer){
                c.activate(delta);
            }
        })
    }
}

module.exports = { Pool };