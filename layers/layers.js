var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Provinces_1 = new ol.format.GeoJSON();
var features_Provinces_1 = format_Provinces_1.readFeatures(json_Provinces_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Provinces_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Provinces_1.addFeatures(features_Provinces_1);
var lyr_Provinces_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Provinces_1, 
                style: style_Provinces_1,
                popuplayertitle: 'Provinces',
                interactive: true,
    title: 'Provinces<br />\
    <img src="styles/legend/Provinces_1_0.png" /> 70036 - 401507<br />\
    <img src="styles/legend/Provinces_1_1.png" /> 401507 - 732978<br />\
    <img src="styles/legend/Provinces_1_2.png" /> 732978 - 1064448<br />\
    <img src="styles/legend/Provinces_1_3.png" /> 1064448 - 1395919<br />\
    <img src="styles/legend/Provinces_1_4.png" /> 1395919 - 1727390<br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Provinces_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Provinces_1];
lyr_Provinces_1.set('fieldAliases', {'COUNTRY': 'COUNTRY', 'NAME_2': 'NAME_2', 'pop_prov_1': 'pop_prov_1', });
lyr_Provinces_1.set('fieldImages', {'COUNTRY': 'TextEdit', 'NAME_2': 'TextEdit', 'pop_prov_1': 'TextEdit', });
lyr_Provinces_1.set('fieldLabels', {'COUNTRY': 'no label', 'NAME_2': 'no label', 'pop_prov_1': 'no label', });
lyr_Provinces_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});