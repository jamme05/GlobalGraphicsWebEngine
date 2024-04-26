class Mesh{
    /**
     * 
     * @type {number} 
     */
    length;
    constructor(){
        this.AddSubMesh()
        this.submeshes.push(new SubMesh('Mesh 1'));
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
        
        var materials = [];

        var indicies = [];
        var verticies = [];
        var uvs = [];
        var normals = [];

        var temp_verticies = [];
        var temp_uvs = [];
        var temp_normals = [];
        var meshes = [];

        var activeMesh = new Mesh(null);
        var activeSubMesh = activeMesh.submeshes[0];
        // Use working row data
        for(let i = 0; i < rows.length; ++i){
            /**
             * @type {['#']|['o',String]|['g',String]|['v','0.000000','0.000000','0.000000']|['vn','0.000000','0.000000','0.000000']|['vt','0.000000','0.000000']|['vt','0.000000','0.000000',1]|['f','0/0/0 0/0/0 0/0/0']|['mtllib',string]|['usemtl','Material.001']}
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
                    temp_verticies.push([Number.parseFloat(command[1]),Number.parseFloat(command[2]),Number.parseFloat(command[3])]);
                break;
                case 'vn': // Normal
                    temp_normals.push([Number.parseFloat(command[1]),Number.parseFloat(command[2]),Number.parseFloat(command[3])]);
                break;
                case 'vt': // UV
                    temp_uvs.push([Number.parseFloat(command[1]),Number.parseFloat(command[2])]);
                break;
                case 'f': // Face
                    
                break;
                case 'mtllib': // Load material
                    materials.push(command[1]);
                break;
                case 'usemtl': // Use material on faces
                    activeSubMesh
                break;
            }
        }
    }

    AddMaterial(material){
        
    }

    /**
     * 
     * @param {(SubMesh|string)?} subMesh 
     */
    AddSubMesh(subMesh){
        if(typeof subMesh == 'string') this.submeshes.push(new SubMesh(subMesh));
        else if(subMesh instanceof SubMesh)this.submeshes.push(subMesh);
        else{
            this.submeshes.push(new SubMesh(null));
        }
    }
}

export {Mesh}