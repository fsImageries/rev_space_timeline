export class Internal3DObject {  
    constructor(
        private _topGrp: THREE.Group,
        private _masterGrp: THREE.Group,
        private _meshGrp: THREE.Group,
        private _mesh: THREE.Mesh,
        private _atmo: THREE.Mesh,
        private _texts: THREE.Mesh[],
    ) {}

    public get texts(): THREE.Mesh[] {
        return this._texts;
    }
    
    public get atmo(): THREE.Mesh {
        return this._atmo;
    }
    
    public get mesh(): THREE.Mesh {
        return this._mesh;
    }
    
    public get meshGrp(): THREE.Group {
        return this._meshGrp;
    }
    
    public get masterGrp(): THREE.Group {
        return this._masterGrp;
    }
    
    public get topGrp(): THREE.Group {
        return this._topGrp;
    }
}