class Mesh{
    /**
     * 
     * @type {number} 
     */
    length;
    constructor(){

    }

    /**
     * @type {SubMesh[]}
     */
    submeshes = [];

    /**
     * @type {string}
     */
    Name;

    /**
     * 
     * @param {string|Blob|File|Request} objFile 
     * @param  {...any} mtlFiles 
     * 
     * @returns {Mesh[]}
     */
    static async FromOBJ(objFile,...mtlFiles){
        /**
         * @type {string[]}
         */
        var rows;

        // Parse objFile into rows
        if(typeof objFile == 'string'){
            rows = objFile.split('\n');

            // Check if objFile is a path
            if(rows.length == 1){
                try{
                    objFile = await fetch(objFile);
                }catch{
                    throw new TypeError('Invalid path.');
                }
            }
        }
        // Check if object if File, Blob or Response
        if(objFile instanceof File || objFile instanceof Blob || objFile instanceof Response){
            objFile = await objFile.text();
            rows = objFile.split('\n');
        }
        
        if(rows == null) throw new TypeError('Invalid value for objFile. objFile has to be either a path to a .obj, the content of a .obj or an instance of a Blob (File, Blob, Response, etc)');
        
        var indicies = [];
        var verticies = [];
        var uvs = [];
        var normals = [];

        var temp_verticies = [];
        var temp_uvs = [];
        var temp_normals = [];
        var meshes = [];

        var activeMesh = new Mesh(null);
        // Use working row data
        for(let i = 0; i < rows.length; ++i){
            /**
             * @type {['#']|['o',String]|['g',String]|['v','0.000000','0.000000','0.000000']|['vn','0.000000','0.000000','0.000000']|['vt','0.000000','0.000000']|['f','0/0/0 0/0/0 0/0/0']}
             */
            var command = rows[i].split(' ');

            switch(command[0]){
                case 'o': // New object/mesh
                    if(activeMesh.Name == null && activeMesh.length == 0) activeMesh.Name = command[1];
                    else{
                        meshes.push(activeMesh);
                        activeMesh = new Mesh(command[1]);
                    }
                break;
                case 'g': // new submesh
                    
                break;
                case 'v': // Vertex
                break;
            }
        }
    }

    AddMaterial(material){
        
    }
}

class SubMesh{
    Verticies;
    Indicies;
    UVs;
    Normals;
    Name;

    constructor(name){
        this.Name = name;
    }
}

export {Mesh,SubMesh}