class cube_effect extends effect {
    constructor(_gfx) {
        super(gfx);
        this.scene = gfx.gl.scene;

        this.geometry = new THREE.BoxGeometry( 150, 150, 150 );

        for ( let i = 0; i < this.geometry.faces.length; i += 2 ) {
            let hex = Math.random() * 0xffffff;
            this.geometry.faces[ i ].color.setHex( hex );
            this.geometry.faces[ i + 1 ].color.setHex( hex );
        }

        this.material = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors, overdraw: 0.5 } );
        this.cube = new THREE.Mesh( this.geometry, this.material );
        this.scene.add( this.cube );
        gfx.gl.camera.lookAt(this.cube.position);

        gfx.gl.cube = this.cube;

        this.prev_dsum = 0;
    }
    update(gfx) {
    }
    destroy() {}
}
