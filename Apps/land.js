function addBuildings() {
    viewer.entities.add({
        name: 'Sydney Opera house',
        position: Cesium.Cartesian3.fromDegrees(151.2141407, -33.8568423, 0),
        box: {
            dimensions: new Cesium.Cartesian3(200.0, 300.0, 120.0),
            material: Cesium.Color.WHITE.withAlpha(0.5),
            outline: true,
            outlineColor: Cesium.Color.BLACK
        }
    });

    viewer.entities.add({
        name: 'Sydney airport',
        polylineVolume: {
            positions: Cesium.Cartesian3.fromDegreesArrayHeights([151.171221, -33.930550, 0.0,
                151.173474, -33.938864, 0.0,
                151.165524, -33.940341, 0.0]),
            shape: [new Cesium.Cartesian2(-140, -80),
            new Cesium.Cartesian2(140, -80),
            new Cesium.Cartesian2(140, 80),
            new Cesium.Cartesian2(-140, 80)],
            cornerType: Cesium.CornerType.BEVELED,
            material: Cesium.Color.CADETBLUE.withAlpha(1.0)
        }
    });

    //-33.878533, 151.216869

    viewer.entities.add({
        name: 'Red cone',
        position: Cesium.Cartesian3.fromDegrees(151.216869, -33.878533, 0.0),
        cylinder: {
            length: 1000.0,
            topRadius: 30.0,
            bottomRadius: 100.0,
            material: Cesium.Color.SLATEGRAY.withAlpha(0.9)
        }
    });

    viewer.entities.add({
        name: 'Red cone',
        position: Cesium.Cartesian3.fromDegrees(151.216869, -33.878533, 550.0),
        cylinder: {
            length: 80.0,
            topRadius: 66.0,
            bottomRadius: 30.0,
            material: Cesium.Color.GOLDENROD.withAlpha(0.9)
        }
    });
}
function resetToStart() {
    viewer.camera.cancelFlight();
    viewer.camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(151.149471, -33.788611, 3000.0),

        orientation: {
            heading: Cesium.Math.toRadians(168.0), // east, default value is 0.0 (north)
            pitch: Cesium.Math.toRadians(-22),    // default value (looking down)
            roll: 6.2830431015953465                             // default value
        }
    });
}

function startLanding() {
    resetToStart();
    viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(151.189726, -33.953802, 100.0),
        duration: 300,
        maximumHeight: 3000,
        easingFunction: Cesium.EasingFunction.LINEAR_NONE,
        orientation: {
            heading: Cesium.Math.toRadians(168.0), // east, default value is 0.0 (north)
            pitch: Cesium.Math.toRadians(-21),    // default value (looking down)
            roll: 6.2830431015953465                             // default value
        }
    });
}

document.addEventListener("DOMContentLoaded", function (event) {
    addBuildings();
    resetToStart();

    document.getElementById("start-landing").onclick = startLanding;
    document.getElementById("reset-landing").onclick = resetToStart;
    /*
        viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(151.189726, -33.953802, 100.0),
            duration: 300,
            maximumHeight: 4000,
            easingFunction: Cesium.EasingFunction.LINEAR_NONE,
            orientation: {
                heading: Cesium.Math.toRadians(168.0), // east, default value is 0.0 (north)
                pitch: Cesium.Math.toRadians(-25),    // default value (looking down)
                roll: 6.2830431015953465                             // default value
            }
        });


// opera -33.8568423,151.2141407




var box = new Cesium.BoxGeometry({
  maximum : new Cesium.Cartesian3(-33.939496, 151.169692, 0),
  minimum : new Cesium.Cartesian3(-33.935962, 151.166227, 9000.0)
});
var geometry = Cesium.BoxGeometry.createGeometry(box);
-33.939496, 
-33.935962, 151.166227
var box = Cesium.BoxGeometry.fromDimensions({
  vertexFormat : Cesium.VertexFormat.POSITION_ONLY,
  dimensions : new Cesium.Cartesian3(-33.939496, 151.169692, 4000)
});

viewer.entities.add(box);

    var box = new Cesium.BoxGeometry({
        vertexFormat: Cesium.VertexFormat.POSITION_ONLY,
        maximum: new Cesium.Cartesian3(2200.0, 2200.0, 2200.0),
        minimum: new Cesium.Cartesian3(-2200.0, -2200.0, -2200.0)
    });
    var geometry = Cesium.BoxGeometry.createGeometry(box);


        */
});
//-33.953802, 151.189726
//flyToBoundingSphere(boundingSphere, options)