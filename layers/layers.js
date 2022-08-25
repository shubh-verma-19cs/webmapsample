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
var lyr_Annotation20220818124109_modified_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Annotation 2022-08-18 124109_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Annotation20220818124109_modified_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8550554.091627, 3280043.599517, 8551171.253200, 3280393.330310]
                            })
                        });
var format_BMU_Infrastructure_2 = new ol.format.GeoJSON();
var features_BMU_Infrastructure_2 = format_BMU_Infrastructure_2.readFeatures(json_BMU_Infrastructure_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BMU_Infrastructure_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BMU_Infrastructure_2.addFeatures(features_BMU_Infrastructure_2);
var lyr_BMU_Infrastructure_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BMU_Infrastructure_2, 
                style: style_BMU_Infrastructure_2,
                interactive: true,
                title: '<img src="styles/legend/BMU_Infrastructure_2.png" /> BMU_Infrastructure'
            });
var format_Grounds_3 = new ol.format.GeoJSON();
var features_Grounds_3 = format_Grounds_3.readFeatures(json_Grounds_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Grounds_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grounds_3.addFeatures(features_Grounds_3);
var lyr_Grounds_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Grounds_3, 
                style: style_Grounds_3,
                interactive: true,
                title: '<img src="styles/legend/Grounds_3.png" /> Grounds'
            });
var format_Roads_4 = new ol.format.GeoJSON();
var features_Roads_4 = format_Roads_4.readFeatures(json_Roads_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_4.addFeatures(features_Roads_4);
var lyr_Roads_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Roads_4, 
                style: style_Roads_4,
                interactive: true,
                title: '<img src="styles/legend/Roads_4.png" /> Roads'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Annotation20220818124109_modified_1.setVisible(true);lyr_BMU_Infrastructure_2.setVisible(true);lyr_Grounds_3.setVisible(true);lyr_Roads_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Annotation20220818124109_modified_1,lyr_BMU_Infrastructure_2,lyr_Grounds_3,lyr_Roads_4];
lyr_BMU_Infrastructure_2.set('fieldAliases', {'id': 'id', 'building': 'building', });
lyr_Grounds_3.set('fieldAliases', {'id': 'id', 'grounds': 'grounds', });
lyr_Roads_4.set('fieldAliases', {'id': 'id', });
lyr_BMU_Infrastructure_2.set('fieldImages', {'id': '', 'building': '', });
lyr_Grounds_3.set('fieldImages', {'id': 'TextEdit', 'grounds': 'TextEdit', });
lyr_Roads_4.set('fieldImages', {'id': 'TextEdit', });
lyr_BMU_Infrastructure_2.set('fieldLabels', {'id': 'no label', 'building': 'no label', });
lyr_Grounds_3.set('fieldLabels', {'id': 'no label', 'grounds': 'no label', });
lyr_Roads_4.set('fieldLabels', {'id': 'no label', });
lyr_Roads_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});