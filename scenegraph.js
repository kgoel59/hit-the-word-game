function Scene(scene_name,scene_class = "scene")
{   
    this.div = document.createElement("div");

    this.div.id = scene_name;
    this.div.className = scene_class;
    document.body.appendChild(this.div);


    this.addLayer = function(layer){
        this.div.appendChild(layer.div);
    }

    this.deleteLayer = function(layer_name){
        for(i=0; i<this.div.childNodes.length; i++)
        {
            if (this.div.childNodes[i].id == layer_name)
            {
                this.div.removeChild(this.div.childNodes[i]);
            }
        }
    }
}

function Layer(layer_name,layer_class = "layer")
{
    this.div = document.createElement("div");

    this.div.id = layer_name;
    this.div.className = layer_class;

    this.addNode = function(node) {
        this.div.appendChild(node.div);
    }
    
    this.deleteNode = function(node_name) {
        for(i=0; i<this.div.childNodes.length; i++)
        {
            if (this.div.childNodes[i].id == node_name)
            {
                this.div.removeChild(this.div.childNodes[i]);
            }
        }
    }
}

function Node(node_name,node_value,node_class="node")
{
    this.div = document.createElement(node_value);

    this.div.id = node_name;
    this.div.className = node_class;
}