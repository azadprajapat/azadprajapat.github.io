var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Water_1 = new ol.format.GeoJSON();
var features_Water_1 = format_Water_1.readFeatures(json_Water_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Water_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Water_1.addFeatures(features_Water_1);
var lyr_Water_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Water_1, 
                style: style_Water_1,
                interactive: true,
                title: '<img src="styles/legend/Water_1.png" /> Water'
            });
var format_Boundary_2 = new ol.format.GeoJSON();
var features_Boundary_2 = format_Boundary_2.readFeatures(json_Boundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boundary_2.addFeatures(features_Boundary_2);
var lyr_Boundary_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Boundary_2, 
                style: style_Boundary_2,
                interactive: true,
                title: '<img src="styles/legend/Boundary_2.png" /> Boundary'
            });
var format_Boundary_3 = new ol.format.GeoJSON();
var features_Boundary_3 = format_Boundary_3.readFeatures(json_Boundary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boundary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boundary_3.addFeatures(features_Boundary_3);
var lyr_Boundary_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Boundary_3, 
                style: style_Boundary_3,
                interactive: true,
                title: '<img src="styles/legend/Boundary_3.png" /> Boundary'
            });
var format_Boundary_4 = new ol.format.GeoJSON();
var features_Boundary_4 = format_Boundary_4.readFeatures(json_Boundary_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boundary_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boundary_4.addFeatures(features_Boundary_4);
var lyr_Boundary_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Boundary_4, 
                style: style_Boundary_4,
                interactive: true,
                title: '<img src="styles/legend/Boundary_4.png" /> Boundary'
            });
var format_Building_5 = new ol.format.GeoJSON();
var features_Building_5 = format_Building_5.readFeatures(json_Building_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building_5.addFeatures(features_Building_5);
var lyr_Building_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Building_5, 
                style: style_Building_5,
                interactive: true,
                title: '<img src="styles/legend/Building_5.png" /> Building'
            });
var format_Building_6 = new ol.format.GeoJSON();
var features_Building_6 = format_Building_6.readFeatures(json_Building_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building_6.addFeatures(features_Building_6);
var lyr_Building_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Building_6, 
                style: style_Building_6,
                interactive: true,
                title: '<img src="styles/legend/Building_6.png" /> Building'
            });
var format_Building_7 = new ol.format.GeoJSON();
var features_Building_7 = format_Building_7.readFeatures(json_Building_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building_7.addFeatures(features_Building_7);
var lyr_Building_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Building_7, 
                style: style_Building_7,
                interactive: true,
                title: '<img src="styles/legend/Building_7.png" /> Building'
            });
var format_Landmark_8 = new ol.format.GeoJSON();
var features_Landmark_8 = format_Landmark_8.readFeatures(json_Landmark_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Landmark_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Landmark_8.addFeatures(features_Landmark_8);
var lyr_Landmark_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Landmark_8, 
                style: style_Landmark_8,
                interactive: true,
                title: '<img src="styles/legend/Landmark_8.png" /> Landmark'
            });
var format_Landmark_9 = new ol.format.GeoJSON();
var features_Landmark_9 = format_Landmark_9.readFeatures(json_Landmark_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Landmark_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Landmark_9.addFeatures(features_Landmark_9);
var lyr_Landmark_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Landmark_9, 
                style: style_Landmark_9,
                interactive: true,
                title: '<img src="styles/legend/Landmark_9.png" /> Landmark'
            });
var format_Landmark_10 = new ol.format.GeoJSON();
var features_Landmark_10 = format_Landmark_10.readFeatures(json_Landmark_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Landmark_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Landmark_10.addFeatures(features_Landmark_10);
var lyr_Landmark_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Landmark_10, 
                style: style_Landmark_10,
                interactive: true,
                title: '<img src="styles/legend/Landmark_10.png" /> Landmark'
            });
var format_Landuse_11 = new ol.format.GeoJSON();
var features_Landuse_11 = format_Landuse_11.readFeatures(json_Landuse_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Landuse_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Landuse_11.addFeatures(features_Landuse_11);
var lyr_Landuse_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Landuse_11, 
                style: style_Landuse_11,
                interactive: true,
                title: '<img src="styles/legend/Landuse_11.png" /> Landuse'
            });
var format_Landuse_12 = new ol.format.GeoJSON();
var features_Landuse_12 = format_Landuse_12.readFeatures(json_Landuse_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Landuse_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Landuse_12.addFeatures(features_Landuse_12);
var lyr_Landuse_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Landuse_12, 
                style: style_Landuse_12,
                interactive: true,
                title: '<img src="styles/legend/Landuse_12.png" /> Landuse'
            });
var format_Landuse_13 = new ol.format.GeoJSON();
var features_Landuse_13 = format_Landuse_13.readFeatures(json_Landuse_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Landuse_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Landuse_13.addFeatures(features_Landuse_13);
var lyr_Landuse_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Landuse_13, 
                style: style_Landuse_13,
                interactive: true,
                title: '<img src="styles/legend/Landuse_13.png" /> Landuse'
            });
var format_Pole_14 = new ol.format.GeoJSON();
var features_Pole_14 = format_Pole_14.readFeatures(json_Pole_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pole_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pole_14.addFeatures(features_Pole_14);
var lyr_Pole_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pole_14, 
                style: style_Pole_14,
                interactive: true,
                title: '<img src="styles/legend/Pole_14.png" /> Pole'
            });
var format_Pole_15 = new ol.format.GeoJSON();
var features_Pole_15 = format_Pole_15.readFeatures(json_Pole_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pole_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pole_15.addFeatures(features_Pole_15);
var lyr_Pole_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pole_15, 
                style: style_Pole_15,
                interactive: true,
                title: '<img src="styles/legend/Pole_15.png" /> Pole'
            });
var format_Pole_16 = new ol.format.GeoJSON();
var features_Pole_16 = format_Pole_16.readFeatures(json_Pole_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pole_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pole_16.addFeatures(features_Pole_16);
var lyr_Pole_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pole_16, 
                style: style_Pole_16,
                interactive: true,
                title: '<img src="styles/legend/Pole_16.png" /> Pole'
            });
var format_Railway_17 = new ol.format.GeoJSON();
var features_Railway_17 = format_Railway_17.readFeatures(json_Railway_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Railway_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Railway_17.addFeatures(features_Railway_17);
var lyr_Railway_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Railway_17, 
                style: style_Railway_17,
                interactive: true,
                title: '<img src="styles/legend/Railway_17.png" /> Railway'
            });
var format_Railway_18 = new ol.format.GeoJSON();
var features_Railway_18 = format_Railway_18.readFeatures(json_Railway_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Railway_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Railway_18.addFeatures(features_Railway_18);
var lyr_Railway_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Railway_18, 
                style: style_Railway_18,
                interactive: true,
                title: '<img src="styles/legend/Railway_18.png" /> Railway'
            });
var format_Railway_19 = new ol.format.GeoJSON();
var features_Railway_19 = format_Railway_19.readFeatures(json_Railway_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Railway_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Railway_19.addFeatures(features_Railway_19);
var lyr_Railway_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Railway_19, 
                style: style_Railway_19,
                interactive: true,
                title: '<img src="styles/legend/Railway_19.png" /> Railway'
            });
var format_Road_20 = new ol.format.GeoJSON();
var features_Road_20 = format_Road_20.readFeatures(json_Road_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_20.addFeatures(features_Road_20);
var lyr_Road_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Road_20, 
                style: style_Road_20,
                interactive: true,
                title: '<img src="styles/legend/Road_20.png" /> Road'
            });
var format_Road_21 = new ol.format.GeoJSON();
var features_Road_21 = format_Road_21.readFeatures(json_Road_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_21.addFeatures(features_Road_21);
var lyr_Road_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Road_21, 
                style: style_Road_21,
                interactive: true,
                title: '<img src="styles/legend/Road_21.png" /> Road'
            });
var format_Road_22 = new ol.format.GeoJSON();
var features_Road_22 = format_Road_22.readFeatures(json_Road_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_22.addFeatures(features_Road_22);
var lyr_Road_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Road_22, 
                style: style_Road_22,
                interactive: true,
                title: '<img src="styles/legend/Road_22.png" /> Road'
            });
var format_Walkway_23 = new ol.format.GeoJSON();
var features_Walkway_23 = format_Walkway_23.readFeatures(json_Walkway_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Walkway_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Walkway_23.addFeatures(features_Walkway_23);
var lyr_Walkway_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Walkway_23, 
                style: style_Walkway_23,
                interactive: true,
                title: '<img src="styles/legend/Walkway_23.png" /> Walkway'
            });
var format_Walkway_24 = new ol.format.GeoJSON();
var features_Walkway_24 = format_Walkway_24.readFeatures(json_Walkway_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Walkway_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Walkway_24.addFeatures(features_Walkway_24);
var lyr_Walkway_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Walkway_24, 
                style: style_Walkway_24,
                interactive: true,
                title: '<img src="styles/legend/Walkway_24.png" /> Walkway'
            });
var format_Walkway_25 = new ol.format.GeoJSON();
var features_Walkway_25 = format_Walkway_25.readFeatures(json_Walkway_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Walkway_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Walkway_25.addFeatures(features_Walkway_25);
var lyr_Walkway_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Walkway_25, 
                style: style_Walkway_25,
                interactive: true,
                title: '<img src="styles/legend/Walkway_25.png" /> Walkway'
            });
var format_Water_26 = new ol.format.GeoJSON();
var features_Water_26 = format_Water_26.readFeatures(json_Water_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Water_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Water_26.addFeatures(features_Water_26);
var lyr_Water_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Water_26, 
                style: style_Water_26,
                interactive: true,
                title: '<img src="styles/legend/Water_26.png" /> Water'
            });
var format_Water_27 = new ol.format.GeoJSON();
var features_Water_27 = format_Water_27.readFeatures(json_Water_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Water_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Water_27.addFeatures(features_Water_27);
var lyr_Water_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Water_27, 
                style: style_Water_27,
                interactive: true,
                title: '<img src="styles/legend/Water_27.png" /> Water'
            });
var group_group1 = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,lyr_Water_1,lyr_Boundary_2,lyr_Boundary_3,lyr_Boundary_4,lyr_Building_5,lyr_Building_6,lyr_Building_7,lyr_Landmark_8,lyr_Landmark_9,lyr_Landmark_10,lyr_Landuse_11,lyr_Landuse_12,lyr_Landuse_13,lyr_Pole_14,lyr_Pole_15,lyr_Pole_16,lyr_Railway_17,lyr_Railway_18,lyr_Railway_19,lyr_Road_20,lyr_Road_21,lyr_Road_22,lyr_Walkway_23,lyr_Walkway_24,lyr_Walkway_25,lyr_Water_26,lyr_Water_27,],
                                title: "group1"});

lyr_OSMStandard_0.setVisible(true);lyr_Water_1.setVisible(true);lyr_Boundary_2.setVisible(true);lyr_Boundary_3.setVisible(true);lyr_Boundary_4.setVisible(true);lyr_Building_5.setVisible(true);lyr_Building_6.setVisible(true);lyr_Building_7.setVisible(true);lyr_Landmark_8.setVisible(true);lyr_Landmark_9.setVisible(true);lyr_Landmark_10.setVisible(true);lyr_Landuse_11.setVisible(true);lyr_Landuse_12.setVisible(true);lyr_Landuse_13.setVisible(true);lyr_Pole_14.setVisible(true);lyr_Pole_15.setVisible(true);lyr_Pole_16.setVisible(true);lyr_Railway_17.setVisible(true);lyr_Railway_18.setVisible(true);lyr_Railway_19.setVisible(true);lyr_Road_20.setVisible(true);lyr_Road_21.setVisible(true);lyr_Road_22.setVisible(true);lyr_Walkway_23.setVisible(true);lyr_Walkway_24.setVisible(true);lyr_Walkway_25.setVisible(true);lyr_Water_26.setVisible(true);lyr_Water_27.setVisible(true);
var layersList = [group_group1];
lyr_Water_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Name': 'Name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Boundary_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'AREA': 'AREA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Boundary_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'AREA': 'AREA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Boundary_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'AREA': 'AREA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Building_5.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'Join_Count': 'Join_Count', 'TARGET_FID': 'TARGET_FID', 'OBJECTID': 'OBJECTID', 'id': 'id', 'Name': 'Name', 'Type': 'Type', 'OBJECTID_2': 'OBJECTID_2', 'Shape_Leng': 'Shape_Leng', 'LETTER': 'LETTER', 'GUIDE': 'GUIDE', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'LABEL': 'LABEL', });
lyr_Building_6.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'Join_Count': 'Join_Count', 'TARGET_FID': 'TARGET_FID', 'OBJECTID': 'OBJECTID', 'id': 'id', 'Name': 'Name', 'Type': 'Type', 'OBJECTID_2': 'OBJECTID_2', 'Shape_Leng': 'Shape_Leng', 'LETTER': 'LETTER', 'GUIDE': 'GUIDE', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'LABEL': 'LABEL', });
lyr_Building_7.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'Join_Count': 'Join_Count', 'TARGET_FID': 'TARGET_FID', 'OBJECTID': 'OBJECTID', 'id': 'id', 'Name': 'Name', 'Type': 'Type', 'OBJECTID_2': 'OBJECTID_2', 'Shape_Leng': 'Shape_Leng', 'LETTER': 'LETTER', 'GUIDE': 'GUIDE', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'LABEL': 'LABEL', });
lyr_Landmark_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'name': 'name', });
lyr_Landmark_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'name': 'name', });
lyr_Landmark_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'name': 'name', });
lyr_Landuse_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'type': 'type', 'ABOUT': 'ABOUT', 'use': 'use', 'AREA': 'AREA', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Landuse_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'type': 'type', 'ABOUT': 'ABOUT', 'use': 'use', 'AREA': 'AREA', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Landuse_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'type': 'type', 'ABOUT': 'ABOUT', 'use': 'use', 'AREA': 'AREA', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Pole_14.set('fieldAliases', {'pole_id': 'pole_id', 'pole_type': 'pole_type', 'no_lights_': 'no_lights_', 'utility_in': 'utility_in', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_Pole_15.set('fieldAliases', {'pole_id': 'pole_id', 'pole_type': 'pole_type', 'no_lights_': 'no_lights_', 'utility_in': 'utility_in', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_Pole_16.set('fieldAliases', {'pole_id': 'pole_id', 'pole_type': 'pole_type', 'no_lights_': 'no_lights_', 'utility_in': 'utility_in', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_Railway_17.set('fieldAliases', {'Id': 'Id', 'Shape_Leng': 'Shape_Leng', });
lyr_Railway_18.set('fieldAliases', {'Id': 'Id', 'Shape_Leng': 'Shape_Leng', });
lyr_Railway_19.set('fieldAliases', {'Id': 'Id', 'Shape_Leng': 'Shape_Leng', });
lyr_Road_20.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'Id': 'Id', 'type': 'type', 'Name': 'Name', 'Surface': 'Surface', 'TEMPNAME': 'TEMPNAME', 'Shape_Leng': 'Shape_Leng', });
lyr_Road_21.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'Id': 'Id', 'type': 'type', 'Name': 'Name', 'Surface': 'Surface', 'TEMPNAME': 'TEMPNAME', 'Shape_Leng': 'Shape_Leng', });
lyr_Road_22.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'Id': 'Id', 'type': 'type', 'Name': 'Name', 'Surface': 'Surface', 'TEMPNAME': 'TEMPNAME', 'Shape_Leng': 'Shape_Leng', });
lyr_Walkway_23.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Location': 'Location', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Walkway_24.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Location': 'Location', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Walkway_25.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Location': 'Location', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Water_26.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Name': 'Name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Water_27.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Name': 'Name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Water_1.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Name': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Boundary_2.set('fieldImages', {'OBJECTID': '', 'Id': '', 'AREA': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Boundary_3.set('fieldImages', {'OBJECTID': '', 'Id': '', 'AREA': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Boundary_4.set('fieldImages', {'OBJECTID': '', 'Id': '', 'AREA': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Building_5.set('fieldImages', {'OBJECTID_1': '', 'Join_Count': '', 'TARGET_FID': '', 'OBJECTID': '', 'id': '', 'Name': '', 'Type': '', 'OBJECTID_2': '', 'Shape_Leng': '', 'LETTER': '', 'GUIDE': '', 'Shape_Le_1': '', 'Shape_Area': '', 'LABEL': '', });
lyr_Building_6.set('fieldImages', {'OBJECTID_1': '', 'Join_Count': '', 'TARGET_FID': '', 'OBJECTID': '', 'id': '', 'Name': '', 'Type': '', 'OBJECTID_2': '', 'Shape_Leng': '', 'LETTER': '', 'GUIDE': '', 'Shape_Le_1': '', 'Shape_Area': '', 'LABEL': '', });
lyr_Building_7.set('fieldImages', {'OBJECTID_1': '', 'Join_Count': '', 'TARGET_FID': '', 'OBJECTID': '', 'id': '', 'Name': '', 'Type': '', 'OBJECTID_2': '', 'Shape_Leng': '', 'LETTER': '', 'GUIDE': '', 'Shape_Le_1': '', 'Shape_Area': '', 'LABEL': '', });
lyr_Landmark_8.set('fieldImages', {'OBJECTID': '', 'Id': '', 'name': '', });
lyr_Landmark_9.set('fieldImages', {'OBJECTID': '', 'Id': '', 'name': '', });
lyr_Landmark_10.set('fieldImages', {'OBJECTID': '', 'Id': '', 'name': '', });
lyr_Landuse_11.set('fieldImages', {'OBJECTID': '', 'Shape_Leng': '', 'type': '', 'ABOUT': '', 'use': '', 'AREA': '', 'Shape_Le_1': '', 'Shape_Area': '', });
lyr_Landuse_12.set('fieldImages', {'OBJECTID': '', 'Shape_Leng': '', 'type': '', 'ABOUT': '', 'use': '', 'AREA': '', 'Shape_Le_1': '', 'Shape_Area': '', });
lyr_Landuse_13.set('fieldImages', {'OBJECTID': '', 'Shape_Leng': '', 'type': '', 'ABOUT': '', 'use': '', 'AREA': '', 'Shape_Le_1': '', 'Shape_Area': '', });
lyr_Pole_14.set('fieldImages', {'pole_id': '', 'pole_type': '', 'no_lights_': '', 'utility_in': '', 'Easting': '', 'Northing': '', });
lyr_Pole_15.set('fieldImages', {'pole_id': '', 'pole_type': '', 'no_lights_': '', 'utility_in': '', 'Easting': '', 'Northing': '', });
lyr_Pole_16.set('fieldImages', {'pole_id': '', 'pole_type': '', 'no_lights_': '', 'utility_in': '', 'Easting': '', 'Northing': '', });
lyr_Railway_17.set('fieldImages', {'Id': '', 'Shape_Leng': '', });
lyr_Railway_18.set('fieldImages', {'Id': '', 'Shape_Leng': '', });
lyr_Railway_19.set('fieldImages', {'Id': '', 'Shape_Leng': '', });
lyr_Road_20.set('fieldImages', {'OBJECTID_1': '', 'Id': '', 'type': '', 'Name': '', 'Surface': '', 'TEMPNAME': '', 'Shape_Leng': '', });
lyr_Road_21.set('fieldImages', {'OBJECTID_1': '', 'Id': '', 'type': '', 'Name': '', 'Surface': '', 'TEMPNAME': '', 'Shape_Leng': '', });
lyr_Road_22.set('fieldImages', {'OBJECTID_1': '', 'Id': '', 'type': '', 'Name': '', 'Surface': '', 'TEMPNAME': '', 'Shape_Leng': '', });
lyr_Walkway_23.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Location': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Walkway_24.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Location': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Walkway_25.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Location': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Water_26.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Name': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Water_27.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Name': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Water_1.set('fieldLabels', {});
lyr_Boundary_2.set('fieldLabels', {});
lyr_Boundary_3.set('fieldLabels', {});
lyr_Boundary_4.set('fieldLabels', {});
lyr_Building_5.set('fieldLabels', {});
lyr_Building_6.set('fieldLabels', {});
lyr_Building_7.set('fieldLabels', {});
lyr_Landmark_8.set('fieldLabels', {});
lyr_Landmark_9.set('fieldLabels', {});
lyr_Landmark_10.set('fieldLabels', {});
lyr_Landuse_11.set('fieldLabels', {});
lyr_Landuse_12.set('fieldLabels', {});
lyr_Landuse_13.set('fieldLabels', {});
lyr_Pole_14.set('fieldLabels', {});
lyr_Pole_15.set('fieldLabels', {});
lyr_Pole_16.set('fieldLabels', {});
lyr_Railway_17.set('fieldLabels', {});
lyr_Railway_18.set('fieldLabels', {});
lyr_Railway_19.set('fieldLabels', {});
lyr_Road_20.set('fieldLabels', {});
lyr_Road_21.set('fieldLabels', {});
lyr_Road_22.set('fieldLabels', {});
lyr_Walkway_23.set('fieldLabels', {});
lyr_Walkway_24.set('fieldLabels', {});
lyr_Walkway_25.set('fieldLabels', {});
lyr_Water_26.set('fieldLabels', {});
lyr_Water_27.set('fieldLabels', {});
lyr_Water_27.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});