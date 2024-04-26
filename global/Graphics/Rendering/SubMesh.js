class SubMesh{
    Verticies = [];
    Indicies = [];
    UVs = [];
    Normals = [];
    Name;

    Verticie_Buffers = [];
    Indicie_Buffers = [];
    UV_Buffers = [];
    Normal_Buffers = [];

    /**
     * @type {Material}
     */
    Material;

    constructor(name){
        this.Name = name;
    }

    AddFace(verticies, uvs, normals, indicies){

    }

    Init(MAX_ELEMENTS){
        var indexBufferType = Int32Array;
        if(MAX_ELEMENTS == 65536){
            indexBufferType = Uint16Array;
        }
        
    }
}

export {SubMesh}