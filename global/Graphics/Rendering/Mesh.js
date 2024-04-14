export default class Mesh{
    /**
     * 
     * @type {number} 
     */
    length;
    constructor(){

    }

    Verticies;
    Indicies;
    UVs;
    Normals;

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
        // Use working row data
        for(let i = 0; i < rows.length; ++i){
            /**
             * @type {['#']|['o',string]|['v','0.000000','0.000000','0.000000']|['vn','0.000000','0.000000','0.000000']|['vt','0.000000','0.000000']}
             */
            var command = rows[i].split(' ');

            switch(command[0])
        }
    }

    AddMaterial(material){
        
    }
}