import { useEffect, useRef } from "react"
import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const Visual = () => {
    const refContainer = useRef(null)
    useEffect(() => {
        var scene = new THREE.Scene()
        var camera = new THREE.PerspectiveCamera(75, 500 / 500, 0.1, 1000);
        
        var renderer = new THREE.WebGLRenderer({alpha:true});
        const controls = new OrbitControls( camera, renderer.domElement );
        renderer.setSize(500,500);
        
        refContainer.current && refContainer.current.appendChild( renderer.domElement );

        var light = new THREE.PointLight(0xffffff,75, 100)
        light.position.set(0,5,0)
        scene.add(light)

        var loader = new OBJLoader()

        var thinker

        loader.load('simplify_thinker.obj', (object) => {
            thinker = object
            scene.add(thinker)
        })

        
        camera.position.z = 1;
        camera.position.x = -2
        camera.position.y = 1.5;
        controls.target = (new THREE.Vector3(0,1,0))
        controls.autoRotate = true;
        controls.enableZoom = false;
        controls.enablePan = false;

        // window.addEventListener('resize',() => {
        //     camera.aspect = window.innerWidth / window.innerHeight;
        //     camera.updateProjectionMatrix();
        //     renderer.setSize( window.innerWidth, window.innerHeight );
        // },false)

        var animate = function () {
            // console.log(camera.position.x,camera.position.y,camera.position.z)
            camera.updateProjectionMatrix()
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
            controls.update();
        };
        animate();

        
    },[])

    return (
        <div className="Visual" ref={refContainer}>

        </div>
    )
}

export default Visual