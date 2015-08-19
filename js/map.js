var rsr = Raphael('map', '1350', '1188');

var TSAO = rsr.set();
var circle_a = rsr.circle(621, 556, 55).attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'TSAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'circle_a');
TSAO.attr({'id': 'TSAO','name': 'TSAO'});
var ZAO = rsr.set();
var path_b = rsr.path("M473.4,551.6c0.8,6.3,2.6,12.6,6.3,17.8c3.7,5.2,9.5,9.1,15.8,9.5   c7.1,0.4,13.7-3.5,19.3-7.9c5.6-4.4,10.9-9.4,17.6-11.8c3.4-1.2,7.1-1.8,10.7-2.1c1.8-0.2,3.7-0.4,5.4,0.4c1.3,0.6,2.4,1.6,3.3,2.8   c3.4,4.4,4.8,10.2,3.8,15.7c-0.8,4.4-3.2,8.4-5.5,12.3c-4.2,7.2-8.6,14.4-14.6,20.2c-3.3,3.2-7.1,5.9-10.8,8.6   c-3.7,2.6-7.4,5.2-11,7.9c-1.4,1-2.9,2.1-3.9,3.6c-1.6,2.6-1.4,5.9-1.1,8.9c0.4,3.7,0.4,7.2,0.3,11c0,0.9,0,1.7,0.3,2.6   c0.2,0.7,0.6,1.4,1.1,2c2.6,3.8,5.9,7.3,9.9,9.6c2.7,1.6,5.8,2.6,8.9,2.7c1.9,0.1,3,2.2,2,3.8c-3.4,5.6-7.1,11.2-11,16.5   c-5.2,7.2-10.8,14-16.8,20.4c-7,7.4-14.1,14.8-21.1,22.2c-3.9,4.1-7.9,8.2-11.8,12.3c-1.1,1.2-0.9,3.1,0.5,3.9   c1.3,0.7,2.4,1.8,3.7,2.7c3,2.3,5.9,4.8,8.6,7.5c0.7,0.7,0.9,1.9,0.5,2.8c-1.6,3.4-3.5,6.2-5.8,9.4c-11.3,15.5-26.3,27.9-40.8,40.6   c-16.2,14.2-32.2,28.3-47.9,43.1c-1.9-1.3-3.4-3.4-4.6-5.4c-5-8.5-10-17-15.1-25.4c-1.9-3.2-3.8-6.4-5.4-9.8c-1.9-4-3.3-8.2-5.6-12   c-2.4-3.7-5.9-7-10.3-7.7c-7.5-1.1-15.7-0.3-21.7,4.3c-2.5,1.9-4.7,5.2-3.4,8c1.1,2.3,3.9,3,6.3,3.5c0.5,1.7-0.5,3.5-1.7,4.7   s-2.8,2.2-3.9,3.6s-1.5,3.5-0.4,4.9c0.6,0.7,1.6,1.1,2.3,1.6c2.2,1.6,2.5,4.8,2.5,7.5c0,8.2-1.1,16.4-3.3,24.3   c-1.4,5-3.2,10-6.7,13.8c-2.2,2.5-5.6,4.5-8.8,3.5c-2.2-0.6-4.1-2.6-6.3-2.1c-2.3,0.4-3.4,3.1-5.1,4.7c-2.6,2.3-6.5,2.1-9.9,1.8   c-0.7-0.1-1.5-0.2-2.1-0.6c-0.6-0.5-0.9-1.3-1.1-2c-0.8-2.3-1.5-4.5-2.3-6.8c-2.2,4.3-5.3,8.6-8.3,12.4c-2.5,3.2-5.5,6.3-9.2,7.8   c-1.7,0.7-3.8,1-5.2-0.3c-1.3-1.2-1.2-3.2-1.3-5c-0.1-2.9-0.8-5.9-2-8.5c-0.3-0.6-0.6-1.2-1.2-1.5c-0.4-0.2-1-0.2-1.5-0.2   c-2.3,0.1-4.8,0.3-6.5-1.1c-2-1.6-2.2-4.5-3.2-6.8c-1.8-4-6.9-6.1-11-4.7c-1.3,0.4-2.5,1.2-3.7,1.7c-7.4,3.2-16.4-1.1-20.6-8   c-4.2-6.8-4.4-15.4-3.2-23.3c0.3-1.7,0.6-3.4,1.2-5c0.7-1.9,1.6-3.7,2.7-5.4c2.6-4.1,5.9-7.6,9.2-11.2c5.7-6.2,11.5-12.5,18-17.9   c4.5-3.8,9.3-7.1,14.4-10l9.6-0.6l0.2,19.5h12.5v-15.3h13c2.8,3.5,6.8,6,11,7.2c3.4,1,6.9,1.1,10.4,1.2c2.2,0.1,4.4,0.1,6.6-0.4   c1.9-0.5,3.7-1.6,5.4-2.6c1.5-0.9,3.1-2,3.4-3.7c0.2-1.1-0.2-2.2-0.8-3.2c-2.2-3.6-6.7-5.3-9-8.9c-1.9-3-1.9-7-0.7-10.4   c1.2-3.4,3.4-6.3,5.7-9.1c2.8-3.4,6-6.8,10.1-8.4c-1.2-10.5-5.9-20.2-9.8-30c-1.2-3.1-2.5-6.1-4.3-8.9c-1.9-3-4.4-5.6-7.3-7.6   c-2.6-1.8-5.5,1-8.6,1.8s-6.3,0.6-9.4,0.4c-2,4.5-5.9,7.8-9.5,11.2c-3.4,3.2-7.3,6.6-12,6.8c-1.4,0.1-2.9-0.2-4.1-0.9   c-1.9-1.1-3.4-3.2-5.5-3.5c-2.6-0.4-5.1,3-3.6,5.2c-2.7,0-5.5,0-8.2,0c-2.2,0-4.9,0.2-6,2.2c-0.8,1.6-0.1,3.7,1.1,5.1   c1.2,1.4,2.7,2.5,3.8,3.9c1.8,2.4,2.2,5.8,1,8.6s-3.9,4.8-6.9,5.4c-2.7,0.5-5.6-0.3-7.7-2c-0.7-0.6-1.4-1.2-2.3-1.1   c-1.2,0.2-1.5,1.7-2.3,2.7c-1.3,1.8-4.2,1.6-6.1,0.4c-1.9-1.2-3.2-3.1-4.8-4.7c-3.9-3.8-9.9-5.8-11.7-10.9   c-0.8-2.4-0.4-5.1,0.2-7.5c0.6-2.4,1.6-5,3.7-6.4c2.1-1.4,5.5-1.1,6.5,1.2c0.2,0.5,0.3,1,0.6,1.5c0.5,0.8,1.5,1.1,2.4,1.2   c3.2,0.3,6.4-2.4,6.7-5.6c0.2-2.4-1-4.7-1.1-7.2c-0.2-4.2,2.9-7.8,6-10.8c1.2-1.2,2.5-2.4,4.1-2.7c3.2-0.6,5.9,2.4,9.1,3   c3.1,0.6,6.2-1,8.5-3c2.4-2,4.4-4.5,7.1-6.1c1.3-3.4-3.8-6.6-3.1-10.2c0.3-1.5,1.7-2.6,3-3.5c4-2.6,9.6-4,13.3-0.9v26.2h16.9   c-0.2-2.9-1.1-6.4-1-9.3c0-0.7,0-1.5,0.3-2.1c0.3-0.7,0.8-1.2,1.3-1.7c2.3-2.4,4.8-4.7,8-5.6c-8.4-13.8-16.8-30.2-22.1-45.5   c-13.8-39.4-16.7-81.6-19.4-123.2c15.6,0.8,31.3,1.8,46.9,0.5c7.9-0.7,16.6-5,21.1-11.4c10.6,1.9,21.9,3.7,32.3,0.9   c5.8-1.6,11.3-6.2,17.3-5.6c12.6,1.3,20.4,14.7,22.2,27.2c1.1,7.5,0.7,15.4-2.5,22.2s-9.7,12.4-17.2,13.2c-2.9,0.3-5.9-0.1-8.7,0.9   c-7.1,2.6-8.3,12-8.2,19.6c0,1.6,0.1,3.3,1,4.5c0.8,1.2,2.2,1.8,3.4,2.4c12.2,5.4,27.2,9.2,38.3,1.9c8.4-5.6,12.2-16.1,13.1-26.1   s-0.4-20.2,0.4-30.2c0.2-1.8,0.4-3.6,1.4-5.1c1.2-1.8,2.7-3.9,4.7-4.7c6.4-2.5,15.2-3.2,20.8,0.8c1,0.7,3.3,2.3,4.8,3.8   c2.8,2.8,6.1,4.4,8.9,6.8C461.9,536.3,472.2,542.8,473.4,551.6z").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'ZAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_b');
ZAO.attr({'id': 'ZAO','name': 'ZAO'});

var SZAO = rsr.set();
var path_c = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'SZAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_c');
var path_d = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'SZAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_d');
var path_e = rsr.path("M255.4,509c15.6,0.8,31.3,1.8,46.9,0.5c7.9-0.7,16.6-5,21.1-11.4   c10.6,1.9,21.9,3.7,32.3,0.9c5.8-1.6,11.3-6.2,17.3-5.6c12.6,1.3,20.4,14.7,22.2,27.2c1.1,7.5,0.7,15.4-2.5,22.2   s-9.7,12.4-17.2,13.2c-2.9,0.3-5.9-0.1-8.7,0.9c-7.1,2.6-8.3,12-8.2,19.6c0,1.6,0.1,3.3,1,4.5c0.8,1.2,2.2,1.8,3.4,2.4   c12.2,5.4,27.2,9.2,38.3,1.9c8.4-5.6,12.2-16.1,13.1-26.1S414,539,414.8,529c0.2-1.8,0.4-3.6,1.4-5.1c1.2-1.8,2.7-3.9,4.7-4.7   c6.4-2.5,15.2-3.2,20.8,0.8c1,0.7,3.3,2.3,4.8,3.8c2.8,2.8,6.1,4.4,8.9,6.8c4.5,4.1,10.8,8.4,14.7,13.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'SZAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_e');
var path_f = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'SZAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_f');
var path_g = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'SZAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_g');
var path_h = rsr.path("M255.6,509c0.6-3.9,3.1-7.2,4-11c0.5-2.1,0.5-4.2,0.5-6.3   c0.4-8.4,2.4-16.7,4.4-24.9c-2.2,2.7-4.5,5.3-7.1,7.5c-2.8,2.3-6,4-8.7,6.4c-2.8,2.5-4.8,5.8-5.9,9.3c-0.8,2.5-1.1,5.1-1.9,7.5   c-1.4,4.4-4.1,8.3-6.9,12c-1.7,2.3-3.6,4.7-6.1,6.2s-5.9,1.8-8.3,0.1c-1.4-1-2.2-2.7-3.4-3.9c-1.2-1.3-3.2-2.1-4.7-1.2   c-1.9,1.2-1.4,4-2.3,6c-1.1,2.6-4.3,3.7-7.1,3.8s-5.7-0.5-8.5,0.1").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'SZAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_h');
var path_i = rsr.path("M153.3,445c0.9,0.3,1.8,0.2,2.7,0.2c1.1,0,2.2,0,3.3,0   c0.7,0,1.4,0,2-0.3c0.7-0.3,1.2-1.1,1.7-1.8c3-4.9,4.2-10.8,3.4-16.5c-0.1-0.5-0.2-1.1-0.6-1.4c-0.3-0.2-0.7-0.3-1.1-0.3   c-3.4-0.2-6.7,1.5-9.7,3.1c-2.5,1.3-5.1,2.8-6.3,5.4c-0.9,1.8-0.8,4-0.6,6c0.1,0.6,0.1,1.2,0.4,1.7c0.3,0.5,0.7,1,1.2,1.4   C150.7,443.6,151.8,444.6,153.3,445z").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'SZAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_i');
var path_j = rsr.path("M193.7,520c-0.7,0.8-2.2,0.2-2.8-0.7s-0.9-2.1-1.7-2.8   c-1.3-1.2-3.4-0.7-5.1-0.8c-2.3-0.1-4.5-1.2-5.9-3c-1.3-1.8-1.7-4.4-0.7-6.5c1.6-3.4,5.7-4.4,9.1-5.8c3-1.2,5.8-2.9,8.2-5   c3.4-3,6.3-7.7,4.6-11.9c-1.4-3.5-5.3-5-8.2-7.5c-2.4-2.1-4.1-5-5.7-7.8c-1.9-3.4-3.9-6.8-5.8-10.2c-0.1-0.2-0.3-0.5-0.3-0.8   c-0.1-0.8,0.8-1.2,1.6-1.5c6.1-2.3,12.3-6,14.5-12.2c-6.7,1-13.1,5.6-19.6,3.8c2.5-1.9,5-3.9,7.5-5.8c2.8-2.2,5.7-4.5,9.2-5.5   c7.2-2.2,15.5,1.4,22.2-2.1c5.8-3.1,8.5-10.8,14.7-12.9c3.4-1.1,7.3-0.2,10.5,1.4c3,1.5,5.9,3.8,7.3,6.8c1.5,3.1,1.3,7.1-1,9.6   c-1.6,1.8-4.1,2.6-6.1,4c-2,1.3-3.8,3.7-3.1,6c0.4,1.2,1.4,2.1,2.4,2.9c4.6,3.6,10.3,5.6,15.8,7.5c2.8,1,6.4,1.7,8.1-0.7   c8-11.2,17.1-21.6,22.3-34.4c0.9-2.2,1.8-4.5,2-6.9c0.1-1.3,0-2.7-0.9-3.6c-1-1.1-2.5-1.2-3.9-1.7c-4.2-1.5-7-6.8-11.4-6.3   c-0.3,0-0.6,0.1-0.8,0.4c-0.2,0.2-0.2,0.6-0.2,0.9c-0.3,6.4-0.1,12.8,0.3,19.2c3-5.4,7.6-9.9,13.1-12.7c1.7-0.8,3.4-2.4,4.6-3.8   c1.8-2,2.1-4.9,2.4-7.6c1-9.3,2-18.6,2.9-27.9c0.4-3.4-0.5-6.8-1.2-10.1c-0.1-0.7-0.3-1.3-0.7-1.9c-0.7-1-2.1-1.2-3.3-1.3   c-3-0.4-6-0.8-9-0.3c-3.3,0.5-6.4,2-9.3,3.6c-8.8,4.8-17.1,10.4-24.7,16.9c-1.8,1.5-3.5,3.1-5.7,3.9s-4.8,0.8-6.5-0.8   c-1.3-1.2-1.8-3-2.3-4.7c-0.7-2.5-1.3-4.9-1.7-7.4c-0.9-6.1-0.1-12.8-3.3-18.1c-0.9-1.4-2-2.8-2.4-4.4c-0.8-3,1-7-1.5-8.9   c-0.4-0.3-0.8-0.5-1.2-0.8c-0.9-0.8-0.9-2.5,0-3.4c1-0.9,2.5-0.8,3.8-1c3.8-0.7,6-5.6,4.2-9c-1.9-3.6-6.7-4.3-10.7-4.2   c-1.8,0.1-3.7,0.2-5.1-0.9c-1.3-1.1-1.7-2.9-1.6-4.6c0.1-1.3,0.5-2.7,1.5-3.6c1.5-1.4,3.9-1.5,5.3-2.9c1.4-1.4,1.5-3.7,1.4-5.7   c-0.1-5.1-0.3-10.3-0.4-15.4c6.3-3.8,11.5-7.9,17.8-11.7c4.8-2.9,10.2-6.7,10.6-12.3H275v19.5c-2.5,3.9-4.2,8.2-3.5,12.8   c0.1,0.5,0.2,1.1,0.5,1.6c0.3,0.6,0.9,1,1.5,1.3c2.6,1.3,6,0.4,7.6-2c0.8-1.1,1.1-2.5,1.8-3.7c0.7-1.2,1.9-2.3,3.2-2.2   c2.3,0.2,3,3.2,4.1,5.2c1.7,2.8,5.6,4.1,8.6,2.8c-0.4-3,0.5-5.7,1.3-8.7c1.3-4.6,2.6-9.2,3.9-13.9c0.5-1.9,1.1-3.7,1.9-5.5   c1.8-3.4,4.8-6.1,6.9-9.3c-3.8-0.5-7.4-5-10.6-7.2c-1.5-1.1-3.2-2-4.8-3.1c-2.8-2-4.9-4.6-7.5-6.8c-6-5.1-14.4-8.1-17.2-15.4   c-2.1-0.4-6.3-1.9-7.9-3.4s-2-4.4-0.4-5.8c0.6-0.5,1.3-0.7,1.9-1.1c2.3-1.6,2.1-5,1.3-7.6c-0.8-2.6-2-5.4-1.1-8.1   c0.5-1.5,1.7-2.8,2.5-4.2s1-3.4-0.2-4.5c-0.8-0.7-2.1-0.8-3.2-0.8c-3.3,0-6.6,0-9.9,0c1-5,0.2-10.3-2-14.9c2.6-1.2,6.4-0.4,7.9-2.8   c0.5-0.8,0.6-1.9,0.7-2.9c0.4-5.5,0.8-11.3-1.9-16.1c-1.9-3.6-5.5-6.8-5-10.8c0.3-2.4,1.3-4.7,3.1-6.4c3.7-3.5,7.3-7.1,11-10.6   c0.4-0.4,0.8-0.8,0.8-1.3c0.1-0.9-0.8-1.5-1.6-1.9c-6.8-3.7-13-8.3-18.6-13.7c-1.4-1.4-2.8-2.8-4.6-3.6c-2.5-1.1-5.5-0.6-7.8,0.9   s-3.6,4.2-3.9,6.9c-0.1,0.9-0.1,1.9-0.3,2.8c-0.3,1.5-1.4,2.8-2.8,3.4s-3.2,0.2-4.2-0.9s-1.1-2.7-1.4-4.2   c-1.6-9.3-9.4-16.1-16.7-22.1c4-5.1,8.5-9.9,13.3-14.3c0.6-0.6,1.3-1.2,2.2-1.2c0.6,0,1.1,0.2,1.6,0.5c2,1.2,3.5,3.2,5.4,4.5   s4.8,1.9,6.5,0.2c1.2-1.2,1.4-3.2,2.8-4.1c-3.8-2.3-7.4-5.5-10.7-8.5c-5.3-4.9-9-11.3-12.6-17.6c-1.4-2.4-2.8-4.9-3.4-7.7   c-0.6-2.7-0.3-5.8,1.5-8c2.2-2.7,6.2-3.4,9.6-2.5c3.4,0.9,6.2,3.1,8.9,5.4c2.5,2.2,4.9,4.5,7.2,7c-0.8-1.3-0.3-3.1,0.7-4.2   s2.4-1.8,3.8-2.4c4.5-2,9.3-4.1,14.2-3.2c6.7,1.2,11.5,7.8,18.2,8.8c3.9,0.5,8-0.9,11.7,0.5c3.5,1.3,5.9,5,9.6,5.9   c4,0.9,7.8-1.8,11.1-4.1c3.3-2.4,6.9-4.5,10.8-5.7c3.9-1.1,8.3-1.1,11.9,0.9s6,6.1,5.4,10.1c-0.9,5.5-6.7,8.6-11.9,10.5   c-1.5,0.6-3.2,1.2-4.3,2.4c-0.8,0.8-1.3,1.9-1.7,2.9c-2.9,6.8-3.9,14.3-3,21.6c0.3,2.2,0.7,4.4,0.4,6.6s-1.6,4.4-3.7,5.1   c-0.5-2.9-4.1-4.5-7-3.9s-5.2,3.1-6.4,5.8c-1.2,2.7-1.5,5.8-1.7,8.8c-0.2,2.8-0.5,5.6-0.7,8.4c-0.2,2.5-0.4,5.1,0.9,7.2   c0.8,1.3,2,2.3,3,3.5s1.7,2.8,1.2,4.2c-0.3,0.8-0.9,1.4-1.5,2c-2.3,2.3-4.7,4.7-7,7c-0.8,0.8-1.6,1.6-2,2.7c-0.4,1-0.4,2.1-0.4,3.1   c0,6,0,12,0,18.1c3.6,6.1,10.8,9.7,15,15.4c3.4,4.6,4.7,10.3,5.9,15.9c1,4.7,2.1,9.5,2.5,14.3c0.3,3.2,0.3,6.5,1.1,9.6   c0.8,3.1,2.4,6.2,5.1,8c4,2.6,9.5,1.6,13.8,3.8c1.9,1,3.4,2.5,5.3,3.5c1.8,1,3.9,1.5,6,1.4c0.5,0,1-0.1,1.4-0.4   c0.6-0.4,0.8-1.2,1.1-1.8c1.4-3.5,5.3-5.8,9-5.4c-0.3,2.3,2.6,3.8,4.6,5c4.8,3.1,9.3,6.7,13.3,10.7c1.2,1.2,2.4,2.4,3.2,3.9   c0.9,1.6,1.4,3.3,2,5.1c2.3,7.8,4.4,15.6,6.5,23.5c1.7,6.2,3.3,12.5,5.6,18.5c1.8,4.7,4.1,9.2,6.3,13.8c-0.1,2,1.1,3.3,2.4,4.9   c2,2.5,3.4,5.5,4.7,8.4c2.5,5.4,5,10.8,7.5,16.2c2,4.4,4.1,9.5,2.1,14c-1.1,2.4-3.3,4.7-2.6,7.3c7.3,0.6,14.6,1.1,21.9,1.7   c-0.6,2.5,0.8,5.3-0.4,7.5c-0.6,1-1.7,1.7-2.5,2.6c-2,2.2-2.4,5.3-2.7,8.3c-0.5,5.1-0.6,10,0.6,14.9c0.5,1.8,1.1,3.6,1.8,5.3   c1.5,4,2.9,8,4.4,12c0.4,1.1,0.8,2.2,1.2,3.3c0.6,1.4,1.2,2.8,1.8,4.1c3.8,8.6,7.5,17.2,11.3,25.8c1.6,3.6,3.2,7.4,3.4,11.3   c0.3,5.6-0.3,11,0.6,16.6c0.4,2.4,0.9,4.8,1,7.2c0.1,1.6,0,3.2,0.3,4.7c0.4,2.2,1.6,4.3,2.8,6.2c2.7,4.5,5.7,9,8,13.8   c1.1,2.5,2.1,5.1,3.2,7.5c2.4,5.1,5.7,9.7,9.7,13.6c-0.6,0.4-1.1,0.9-1.6,1.4c-0.7,0.7-1.2,1.5-1.8,2.2c-0.7,0.8-1.4,1.6-2.2,2.4   c-1,1-2.1,2-3.2,2.8c-0.4,0.3-1.2,0-1.3-0.1c-0.2-0.2,0-0.2,0-0.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'SZAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_j');
SZAO.attr({'id': 'SZAO','name': 'SZAO'});
var SAO = rsr.set();
var path_k = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'SAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_k');
var path_l = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'SAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_l');
var path_m = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'SAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_m');
var path_n = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'SAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_n');
var path_o = rsr.path("M571.5,411.5c-2.2,2.8-5.9,4.5-9.5,4.2c1.7,5.5,3.4,11,5.1,16.5   c0.9,2.8,1.7,5.5,2.4,8.3c2.5,10.9,3.8,23,1.4,34c-1.2,5.3-3.1,10.5-6.4,14.9c-2.9,3.8-6.9,6.8-11.2,9c-7,3.5-15.4,3-23.1,4.4   c-5.8,1-11.2,3.6-16.5,6.1c-1.6,0.8-3.2,1.5-4.8,2.5c-5,3.1-8.5,8.1-12.1,12.8c-3.1,4.1-6.3,8.1-9.6,12c-0.3,0.3-0.5,0.6-0.9,0.8   c-0.3,0.1-0.6,0.2-0.9,0.3c-2.1,0.3-3.9-0.6-5.4-2c-4-3.9-7.3-8.5-9.7-13.6c-1.1-2.5-2.1-5-3.2-7.5c-2.2-4.8-5.2-9.2-8-13.8   c-1.2-1.9-2.3-4-2.8-6.2c-0.3-1.6-0.2-3.1-0.3-4.7c-0.1-2.4-0.6-4.8-1-7.2c-0.9-5.6-0.3-11-0.6-16.6c-0.2-4-1.8-7.7-3.4-11.3   c-3.8-8.6-7.5-17.2-11.3-25.8c-0.6-1.4-1.2-2.8-1.8-4.1c-0.4-1.1-0.8-2.2-1.2-3.3c-1.5-4-2.9-8-4.4-12c-0.6-1.8-1.3-3.5-1.8-5.3   c-1.3-4.9-1.1-9.8-0.6-14.9c0.3-3,0.7-6.1,2.7-8.3c0.8-0.9,1.9-1.5,2.5-2.6c1.3-2.2-0.1-5,0.4-7.5c-7.3-0.6-14.6-1.1-21.9-1.7   c-0.6-2.6,1.6-4.9,2.6-7.3c1.9-4.4-0.1-9.5-2.1-14c-2.5-5.4-5-10.8-7.5-16.2c-1.3-2.9-2.7-5.9-4.7-8.4c-1.3-1.6-2.5-2.9-2.4-4.9   c-2.2-4.5-4.5-9.1-6.3-13.8c-2.3-6-4-12.3-5.6-18.5c-2.1-7.8-4.3-15.7-6.5-23.5c-0.5-1.8-1-3.5-2-5.1c-0.9-1.5-2-2.7-3.2-3.9   c-4-4-8.5-7.6-13.3-10.7c-2-1.3-4.9-2.7-4.6-5c0.5-3.9,3.6-7.5,5.9-10.6c0.6-0.8,1.2-1.7,2.1-2.2c1.2-0.7,2.6-0.7,3.9-0.7   c18.3-0.3,36.8-3.7,53-12.1c7.9-4.1,15.2-9.3,22.4-14.5c4.9-3.5,9.9-7.1,14.8-10.6c12.5-9,25.3-18.1,40.1-22.3   c6.3,9.8,14.7,17.8,24.4,24.3c6,4,12.9,7.6,16.4,14c3.8,7.1,2.4,15.8,3.1,23.9c0.3,4.3,1.3,8.5,2.3,12.6   c2.9,12.6,5.8,25.2,8.7,37.7c2,8.7-0.5,18.2-0.4,27.1c0,1.6,0,3.2,0.5,4.7c0.6,1.9,1.8,3.5,2.8,5.3c3.2,5.7,3.7,12.5,4.1,19   c0.3,4.6,0.5,9.2-0.9,13.6c-0.9,2.8-2.5,5.4-3.5,8.2c-5,13.5,3.3,27.9,6.5,41.9C565.8,402.4,568.7,406.5,571.5,411.5z").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'SAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_o');
SAO.attr({'id': 'SAO','name': 'SAO'});
var SVAO = rsr.set();
var path_p = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'SVAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_p');
var path_q = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'SVAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_q');
var path_r = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'SVAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_r');
var path_s = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'SVAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_s');
var path_t = rsr.path("M780.1,231c-0.6,3,0.1,6.1,0.1,9.2c0.1,3.1-0.8,6.5-3.5,8   c-3.8,2.1-9.3,0.1-13.5,1.4c-7.7,10.7-14.6,23.2-24.8,31.6c4.7,0.4,9.5,0.8,14.2,1.1c1.8,0.1,3.7,0.3,5.4,1.1c5,2.3,6.1,9,6.1,14.5   c0,3.8-0.2,7.6-0.6,11.4c-0.1,1.3-0.3,2.6-1.1,3.6c-1.2,1.5-3.4,1.6-5.3,1.6c-3.7,0-7.3,0.1-11,0.1c-6.9,0.1-15.4-0.9-17.9-7.3   c-1.1-2.8-0.7-5.9-1.2-8.8s-2.6-6.1-5.6-5.9c-2.8,0.2-4.5,3.2-4.5,6s1.3,5.3,2.1,8c0.8,2.6,1.1,5.7-0.5,8   c-2.7,3.7-9.1,2.9-11.6,6.7c-2,3.1-0.3,7.2-1.4,10.7c-1.5,4.9-8.4,6.2-13.4,7c2.6,33-7,68.9-27.4,95v27c-9.7-3.8-17.5-12-24.2-20   l-0.2,14.1H618c0.7,8.3,0.1,16.6-1.7,24.7c-4.4-0.6-9.2,0.6-13.2-1.3c-4.3-2-6.4-6.8-8.1-11.2c-1.5-3.9-3.1-7.8-4.6-11.7   c-0.2-0.4-0.3-0.8-0.7-1c-0.2-0.1-0.5-0.1-0.8-0.1c-5.7,0-11.2,0.3-16.9,0.3c-0.4-4.8-1.3-9.6-2.3-14.1c-0.6-2.8-1.5-5.6-2.4-8.3   c-1.7-5.5-3.4-11-5.1-16.5c3.6,0.3,7.2-1.4,9.5-4.2c-2.8-5-5.7-9.1-7-14.7c-3.2-14-11.5-28.4-6.5-41.9c1-2.8,2.6-5.4,3.5-8.2   c1.4-4.3,1.1-9,0.9-13.6c-0.4-6.5-0.8-13.4-4.1-19c-1-1.7-2.2-3.3-2.8-5.3c-0.5-1.5-0.5-3.1-0.5-4.7c-0.1-8.9,2.4-18.5,0.4-27.1   c-2.9-12.6-5.8-25.2-8.7-37.7c-1-4.2-1.9-8.4-2.3-12.6c-0.7-8.1,0.8-16.7-3.1-23.9c-3.4-6.4-10.3-10-16.4-14   c-9.7-6.5-18.1-14.5-24.4-24.3c-9.2-14.4-7.7-34.4-11.2-51.1c-1.8-8.7-3.7-17.4-7-25.7c-1.4-3.6-3.1-7.2-3.1-11   c0-0.7,0.1-1.4,0.5-2.1s1.1-1.1,1.8-1.5c9.6-5.6,20.3-9.4,31.3-11.1c-2.9-5.9-6.2-12-9.1-17.8c-0.2-0.3-0.3-0.7-0.3-1.1   c0.1-0.5,0.5-0.9,1-1.1c4.5-2.9,9.4-5.3,14.6-6.9c0.7-0.2,1.5-0.5,2.3-0.3c1.5,0.4,2,2.1,2.5,3.5c1.3,3.9,3.6,7.4,6.7,10.1   c5.1-2.1,8.9-6.2,13.9-8.4c6.1-2.8,13.1-2.2,19.8-1.7c0.5,0,1.1,0.1,1.5,0.4c0.6,0.5,0.7,1.3,0.7,2.1c0.1,4.4,0.1,8.9,0.2,13.3   c0,0.5,0,1.1-0.2,1.6c-0.4,0.8-1.3,1.2-2.2,1.4c-3.8,0.7-7.5-1.6-11-3.3c-3.3-1.6-6.9-2.8-10.6-3.5c0,1.2-0.1,1.5-0.1,2.7v21h9.6   v10.5c-0.9,1.1-2.7,1-4.1,1.3c-1.8,0.3-2.2,2.8-1.8,4.6c0.4,1.8,1.3,3.7,0.5,5.4c-1.2,2.5-4.8,2.1-7.5,1.4V139   c1.1,3.8-1.2,6.3-2.6,10c-1.1,2.8-2.2,5.6-3.2,8.5c19.2-5.2,39-3.9,57,4.5c3.9,1.8,7.6,3.9,11.4,5.9   c32.4,17.1,68.9,26.3,105.6,26.8c10.3,0.1,21.1-0.3,30.2,4.4c3.1,1.6,5.9,3.7,8.6,5.8C757.7,213.5,768.6,222.3,780.1,231z").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'SVAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_t');
SVAO.attr({'id': 'SVAO','name': 'SVAO'});
var VAO = rsr.set();
var path_u = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_u');
var path_v = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_v');
var path_w = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_w');
var path_x = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_x');
var path_y = rsr.path("M780.1,231c-0.6,3,0.1,6.1,0.1,9.2c0.1,3.1-0.8,6.5-3.5,8   c-3.8,2.1-9.3,0.1-13.5,1.4c-7.7,10.7-14.6,23.2-24.8,31.6c4.7,0.4,9.5,0.8,14.2,1.1c1.8,0.1,3.7,0.3,5.4,1.1c5,2.3,6.1,9,6.1,14.5   c0,3.8-0.2,7.6-0.6,11.4c-0.1,1.3-0.3,2.6-1.1,3.6c-1.2,1.5-3.4,1.6-5.3,1.6c-3.7,0-7.3,0.1-11,0.1c-6.9,0.1-15.4-0.9-17.9-7.3   c-1.1-2.8-0.7-5.9-1.2-8.8s-2.6-6.1-5.6-5.9c-2.8,0.2-4.5,3.2-4.5,6s1.3,5.3,2.1,8c0.8,2.6,1.1,5.7-0.5,8   c-2.7,3.7-9.1,2.9-11.6,6.7c-2,3.1-0.3,7.2-1.4,10.7c-1.5,4.9-8.4,6.2-13.4,7c2.6,33-7,68.9-27.4,95v27c3.3,4.7,10.2,6.2,15.8,7.2   c13.9,2.4,27.6,5.7,41.2,9.7c8.4,2.5,17.1,5.5,23.5,11.5c3.5,3.3,6.3,7.3,9,11.3s5.5,8.1,7.3,12.6c3.5,8.9,3,18.9,1.5,28.3   c-1.1,6.8-2.2,14.9,3,19.4c14.9,12.8,29.6,24.8,47.8,32.2c3.9,1.6,8.1,2.8,11.5,5.2c4.3,3,7,7.7,10.7,11.4   c4.5,4.7,10.3,7.9,15.9,11.1c10.4,5.9,20.6,12,30.9,18.1c19.4,11.5,38.8,23,58.3,34.6c14.6,8.7,29.3,17.4,42.5,28.2   c4.9-3.2,8.6-7,11.5-12.1c2.2-3.8,3.8-8,7-10.9c5.7-5,14.3-4.2,21.9-4.4c2.4-0.1,4.9-0.3,7.3-0.6").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_y');
var path_z = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_z');
var path_aa = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aa');
var path_ab = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ab');
var path_ac = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ac');
var path_ad = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ad');
var path_ae = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ae');
var path_af = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_af');
var path_ag = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ag');
var path_ah = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ah');
var path_ai = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ai');
var path_aj = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aj');
var path_ak = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ak');
var path_al = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_al');
var path_am = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_am');
var path_an = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_an');
var path_ao = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ao');
var path_ap = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ap');
var path_aq = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aq');
var path_ar = rsr.path("M1067.6,752.6").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ar');
var path_as = rsr.path("M1066.9,752.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_as');
var path_at = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_at');
var path_au = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_au');
var path_av = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_av');
var path_aw = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aw');
var path_ax = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ax');
var path_ay = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ay');
var path_az = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_az');
var path_ba = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ba');
var path_bb = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bb');
var path_bc = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bc');
var path_bd = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bd');
var path_be = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_be');
var path_bf = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bf');
var path_bg = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bg');
var path_bh = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bh');
var path_bi = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bi');
var path_bj = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bj');
var path_bk = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bk');
var path_bl = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bl');
var path_bm = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bm');
var path_bn = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bn');
var path_bo = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bo');
var path_bp = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bp');
var path_bq = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bq');
var path_br = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_br');
var path_bs = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bs');
var path_bt = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bt');
var path_bu = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bu');
var path_bv = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bv');
var path_bw = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bw');
var path_bx = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bx');
var path_by = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_by');
var path_bz = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bz');
var path_ca = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ca');
var path_cb = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_cb');
var path_cc = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_cc');
var path_cd = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_cd');
var path_ce = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ce');
var path_cf = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_cf');
var path_cg = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_cg');
var path_ch = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ch');
var path_ci = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ci');
var path_cj = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_cj');
var path_ck = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ck');
var path_cl = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_cl');
var path_cm = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_cm');
var path_cn = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_cn');
var path_co = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_co');
var path_cp = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_cp');
var path_cq = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_cq');
var path_cr = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_cr');
var path_cs = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_cs');
var path_ct = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ct');
var path_cu = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_cu');
var path_cv = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_cv');
var path_cw = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_cw');
var path_cx = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_cx');
var path_cy = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_cy');
var path_cz = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_cz');
var path_da = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_da');
var path_db = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_db');
var path_dc = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_dc');
var path_dd = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_dd');
var path_de = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_de');
var path_df = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_df');
var path_dg = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_dg');
var path_dh = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_dh');
var path_di = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_di');
var path_dj = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_dj');
var path_dk = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_dk');
var path_dl = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_dl');
var path_dm = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_dm');
var path_dn = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_dn');
var path_do = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_do');
var path_dp = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_dp');
var path_dq = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_dq');
var path_dr = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_dr');
var path_ds = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ds');
var path_dt = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_dt');
var path_du = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_du');
var path_dv = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_dv');
var path_dw = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_dw');
var path_dx = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_dx');
var path_dy = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_dy');
var path_dz = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_dz');
var path_ea = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ea');
var path_eb = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_eb');
var path_ec = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ec');
var path_ed = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ed');
var path_ee = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ee');
var path_ef = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ef');
var path_eg = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_eg');
var path_eh = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_eh');
var path_ei = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ei');
var path_ej = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ej');
var path_ek = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ek');
var path_el = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_el');
var path_em = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_em');
var path_en = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_en');
var path_eo = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_eo');
var path_ep = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ep');
var path_eq = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_eq');
var path_er = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_er');
var path_es = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_es');
var path_et = rsr.path("M1068,752.5c-0.1,0-0.2,0-0.3,0").attr({fill: 'none',stroke: '#000000',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_et');
var path_eu = rsr.path("M1112,758.9c-0.6-0.7-1.3-1.2-2.1-1.6c-4.3-1.9-10.7-1.9-15.4-2.6   c-8.8-1.2-17.6-2-26.4-2.2").attr({fill: 'none',stroke: '#000000',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_eu');
var path_ev = rsr.path("M990,843.2").attr({fill: 'none',stroke: '#000000',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ev');
var path_ew = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ew');
var path_ex = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ex');
var path_ey = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ey');
var path_ez = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ez');
var path_fa = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_fa');
var path_fb = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_fb');
var path_fc = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_fc');
var path_fd = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_fd');
var path_fe = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_fe');
var path_ff = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ff');
var path_fg = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_fg');
var path_fh = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_fh');
var path_fi = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_fi');
var path_fj = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_fj');
var path_fk = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_fk');
var path_fl = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_fl');
var path_fm = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_fm');
var path_fn = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_fn');
var path_fo = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_fo');
var path_fp = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_fp');
var path_fq = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_fq');
var path_fr = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_fr');
var path_fs = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_fs');
var path_ft = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ft');
var path_fu = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_fu');
var path_fv = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_fv');
var path_fw = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_fw');
var path_fx = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_fx');
var path_fy = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_fy');
var path_fz = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_fz');
var path_ga = rsr.path("M835.6,282.3c0.3,0.3,0.4,0.4,0.4,0.4c0.1,0.1,0.2,0.2,0.3,0.3   c5.2,5.2,9.5,11.5,15.4,16c1.6,1.2,3.2,2.3,4.8,3.5c2.1,1.6,4.1,3.5,6,5.3c14.8,14.1,29.7,28.2,44.5,42.3   c5.7,5.4,14.9,8.4,18.3,15.5c4.5,9.3,7.8,19.1,9.8,29.2c0.2,1.1,0.5,2.2,1.3,2.8c0.7,0.5,1.5,0.6,2.3,0.6   c5.2,0.3,10.7,0.6,15.5-1.6c3.1-1.3,5.6-3.6,8.1-5.7c3.5-2.9,7-5.7,10.7-8.4c1.1-0.9,2.3-1.7,3.7-2c2.8-0.6,5.4,1.2,8,2.4   c6.3,3,13.7,2.5,20.7,2.7c3.4,0.1,6.9,0.4,9.9,1.9s5.4,4.6,5.2,8c-0.1,2.3-1.6,4.5-3.6,5.5c-2.2,0.2-4.6-0.3-6.5-1.5   c-1.3-0.8-2.4-1.8-3.8-2.3c-1.5-0.6-3.1-0.5-4.6,0c-2.5,0.7-4.5,2.4-6.5,4.1c-8.2,7-16.3,14.9-20.2,24.9c-2.6-2.5-3.9-6.4-3.2-9.9   c-1.9-0.9-4.5-0.2-5.6,1.6c-0.3,0.5-0.6,1.2-1.1,1.6s-1.2,0.4-1.9,0.4c-1.5,0-3.1,0-4.6,0c-1.1,0-2.4,0-3.3-0.7   c-0.8-0.6-1.2-1.5-1.6-2.4c-1.5-3.5-3.1-6.9-4.7-10.4c-0.5-1.1-1.1-2.3-2-3.1c-2.4-2-7.6-0.8-8.1,2.2v83.2   c3.3,1.8,6.9,2.7,10.6,2.6c-3.7,0.1-7.3-0.8-10.6-2.6v-83.2c0.5-3,5.7-4.2,8.1-2.2c0.9,0.8,1.5,2,2,3.1c1.6,3.5,3.2,6.9,4.7,10.4   c0.4,0.9,0.8,1.8,1.6,2.4c0.9,0.7,2.2,0.7,3.3,0.7c1.5,0,3.1,0,4.6,0c0.7,0,1.4,0,1.9-0.4s0.8-1.1,1.1-1.6c1.1-1.8,3.7-2.5,5.6-1.6   c-0.7,3.5,0.6,7.4,3.2,9.9c3.9-10,12-17.9,20.2-24.9c2-1.7,4-3.4,6.5-4.1c1.5-0.5,3.1-0.6,4.6,0c1.4,0.5,2.5,1.5,3.8,2.3   c1.9,1.2,4.3,1.7,6.5,1.5c2-1,3.5-3.2,3.6-5.5c0.2-3.4-2.2-6.5-5.2-8s-6.5-1.8-9.9-1.9c-7-0.2-14.4,0.3-20.7-2.7   c-2.6-1.2-5.2-3-8-2.4c-1.4,0.3-2.6,1.1-3.7,2c-3.7,2.7-7.2,5.5-10.7,8.4c-2.5,2.1-5,4.4-8.1,5.7c-4.8,2.2-10.3,1.9-15.5,1.6   c-0.8,0-1.6-0.1-2.3-0.6c-0.8-0.6-1.1-1.7-1.3-2.8c-2-10.1-5.3-19.9-9.8-29.2c-3.4-7.1-12.6-10.1-18.3-15.5   c-14.8-14.1-29.7-28.2-44.5-42.3c-1.9-1.8-3.9-3.7-6-5.3c-1.6-1.2-3.2-2.3-4.8-3.5c-5.9-4.5-10.2-10.8-15.4-16   c-0.1-0.1-0.2-0.2-0.3-0.3C836,282.7,835.9,282.6,835.6,282.3").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ga');
var path_gb = rsr.path("M1125.8,659.8c-0.6-0.5-1.2-1-1.9-1.1c-4.4-0.9-9.4-2.2-11.7-6   c-4.8-1-8.4-5.8-13.3-6.2c-1.9-0.2-4.1,0.3-5.6-0.9c-1.1-0.9-1.4-2.4-1.9-3.7c-0.9-2.5-2-4.6-4.2-6.1c0.9-3.7,0.4-7.6-2.3-10.4   c-2.6-2.7-6.5-3.8-10.2-4.5c-19.9-3.9-41.2-0.3-58.8,9.9c-6.3,3.6-12.5,8.2-19.8,8.4c-6.3,0.2-12.2-2.9-17.7-6   c-3.9-2.2-8.1-4.6-10.2-8.6c-1.5-2.8-1.7-6-1.7-9.2c0.1-3.5,0.5-7.1,1.9-10.4c3-7,9.9-11.6,17-14.4c7.1-2.8,14.7-4,21.9-6.7   c0.6-0.2,1.2-0.5,1.6-1c0.6-0.8,0.1-2,0.2-3.1c0.6-9.1,1.4-13.4-0.1-19.5c-0.6-0.4-1.1-0.6-1.7-0.5c0.6-0.1,1.1,0.1,1.7,0.5   c1.5,6.1,0.7,10.4,0.1,19.5c-0.1,1.1,0.4,2.3-0.2,3.1c-0.4,0.5-1,0.8-1.6,1c-7.2,2.7-14.8,3.9-21.9,6.7c-7.1,2.8-14,7.4-17,14.4   c-1.4,3.3-1.8,6.9-1.9,10.4c0,3.2,0.2,6.4,1.7,9.2c2.1,4,6.3,6.4,10.2,8.6c5.5,3.1,11.4,6.2,17.7,6c7.3-0.2,13.5-4.8,19.8-8.4   c17.6-10.2,38.9-13.8,58.8-9.9c3.7,0.7,7.6,1.8,10.2,4.5c2.7,2.8,3.2,6.7,2.3,10.4c2.2,1.5,3.3,3.6,4.2,6.1   c0.5,1.3,0.8,2.8,1.9,3.7c1.5,1.2,3.7,0.7,5.6,0.9c4.9,0.4,8.5,5.2,13.3,6.2c2.3,3.8,7.3,5.1,11.7,6c1,0.2,1.8,1.2,2.7,1.8   c0.5,0.4,1,0.7,1.5,1.1c-3.6,0.9-7.8,2.8-7.8,6.5c0,2,1.4,4,0.8,5.8c-0.7,1.9-3.1,2.5-5.1,2.8c-5.5,0.6-11,0.8-16.5,0.5   c0.4,4.4,4.4,7.5,8.3,9.7c1.9,1.1,4.1,2.2,4.8,4.3c1.3,3.7-2.7,7-6.4,8.3s-8.1,2.1-9.9,5.5c0.8,3.8,5.6,4.9,9.1,6.5   c4.7,2.3,8.1,7.1,8.6,12.3c0.6,5.3-1.4,11.3,1.8,15.5c0.4,0.5,0.8,0.9,1,1.5c0.4,1-0.1,2.2-0.6,3.2c-1.7,3.9-2.5,8.1-2.6,12.3   c0,1.4-0.7,3.4-2,2.9c0-0.6-0.1-0.4-0.1-0.9c-0.5-0.5-1-0.8-1.7-1.1c-4.3-1.9-10.7-1.9-15.4-2.6c-8.8-1.2-17.6-2-26.4-2.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_gb');
var path_gc = rsr.path("M949.7,491.3c0.2,0,0.3,0,0.5,0").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_gc');
var path_gd = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_gd');
var path_ge = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ge');
var path_gf = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_gf');
var path_gg = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_gg');
var path_gh = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_gh');
var path_gi = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_gi');
var path_gj = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_gj');
var path_gk = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_gk');
var path_gl = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_gl');
var path_gm = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_gm');
var path_gn = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_gn');
var path_go = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_go');
var path_gp = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_gp');
var path_gq = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_gq');
var path_gr = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_gr');
var path_gs = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_gs');
var path_gt = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_gt');
var path_gu = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_gu');
var path_gv = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_gv');
var path_gw = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_gw');
var path_gx = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_gx');
var path_gy = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_gy');
var path_gz = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_gz');
var path_ha = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ha');
var path_hb = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_hb');
var path_hc = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_hc');
var path_hd = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_hd');
var path_he = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_he');
var path_hf = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_hf');
var path_hg = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_hg');
var path_hh = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_hh');
var path_hi = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_hi');
var path_hj = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_hj');
var path_hk = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_hk');
var path_hl = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_hl');
var path_hm = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_hm');
var path_hn = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_hn');
var path_ho = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ho');
var path_hp = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_hp');
var path_hq = rsr.path("M836.2,282.9c-12.9-12.8-25.6-27-40.3-37.6c-2.9-2.1-5.8-4.1-8.5-6.5   c-2.6-2.4-5.7-5-7.6-8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_hq');
var path_hr = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_hr');
var path_hs = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_hs');
var path_ht = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ht');
var path_hu = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_hu');
var path_hv = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_hv');
var path_hw = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_hw');
var path_hx = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_hx');
var path_hy = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_hy');
var path_hz = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_hz');
var path_ia = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ia');
var path_ib = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ib');
var path_ic = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ic');
var path_id = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_id');
var path_ie = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ie');
var path_if = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_if');
var path_ig = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ig');
var path_ih = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ih');
var path_ii = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ii');
var path_ij = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ij');
var path_ik = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ik');
var path_il = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_il');
var path_im = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_im');
var path_in = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_in');
var path_io = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_io');
var path_ip = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ip');
var path_iq = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_iq');
var path_ir = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ir');
var path_is = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_is');
var path_it = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_it');
var path_iu = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_iu');
var path_iv = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_iv');
var path_iw = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_iw');
var path_ix = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ix');
var path_iy = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_iy');
var path_iz = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_iz');
var path_ja = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ja');
var path_jb = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_jb');
var path_jc = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_jc');
var path_jd = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_jd');
var path_je = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_je');
var path_jf = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_jf');
var path_jg = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_jg');
var path_jh = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_jh');
var path_ji = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ji');
var path_jj = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_jj');
var path_jk = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_jk');
var path_jl = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_jl');
var path_jm = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_jm');
var path_jn = rsr.path("M835.6,282.3c0.3,0.3,0.4,0.4,0.4,0.4").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_jn');
var path_jo = rsr.path("M780.1,231c0,0.1,0,0.1,0,0.2c1.9,2.8,4.9,5.3,7.3,7.6   c2.7,2.4,5.6,4.4,8.5,6.5c14.6,10.5,27.4,24.7,40.2,37.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_jo');
var path_jp = rsr.path("M836.1,282.2c-0.1,0.1-0.2,0.3-0.3,0.4c0.1-0.2,0.3-0.4,0.4-0.6").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_jp');
var path_jq = rsr.path("M836.2,282c0,0.1-0.1,0.1-0.1,0.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_jq');
var path_jr = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_jr');
var path_js = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_js');
var path_jt = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_jt');
var path_ju = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ju');
var path_jv = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_jv');
var path_jw = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_jw');
var path_jx = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_jx');
var path_jy = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_jy');
var path_jz = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_jz');
var path_ka = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ka');
var path_kb = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_kb');
var path_kc = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_kc');
var path_kd = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_kd');
var path_ke = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ke');
var path_kf = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_kf');
var path_kg = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_kg');
var path_kh = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_kh');
var path_ki = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ki');
var path_kj = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_kj');
var path_kk = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_kk');
var path_kl = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_kl');
var path_km = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_km');
var path_kn = rsr.path("M948.7,491.3").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_kn');
var path_ko = rsr.path("M949.8,491.3c-0.1,0-0.2,0-0.4,0").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ko');
var path_kp = rsr.path("M1007.7,560.1c-1.4-0.2-3,1.1-4.4,2.2c-4.2,3.3-9.3,5.5-14.7,6.2   c-1.8,0.2-3.6,0.3-5.3,0.7c-1.8,0.4-3.4,1.1-5.1,1.8c-10.6,4.2-22.3,5.4-33.6,3.6V500c0.5-3.4,2.6-6.5,5.2-8.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_kp');
var path_kq = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_kq');
var path_kr = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_kr');
var path_ks = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ks');
var path_kt = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_kt');
var path_ku = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ku');
var path_kv = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_kv');
var path_kw = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_kw');
var path_kx = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_kx');
var path_ky = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ky');
var path_kz = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_kz');
var path_la = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_la');
var path_lb = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_lb');
var path_lc = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_lc');
var path_ld = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ld');
var path_le = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_le');
var path_lf = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_lf');
var path_lg = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_lg');
var path_lh = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_lh');
var path_li = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_li');
var path_lj = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_lj');
var path_lk = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_lk');
var path_ll = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ll');
var path_lm = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_lm');
var path_ln = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ln');
var path_lo = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_lo');
var path_lp = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_lp');
var path_lq = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_lq');
var path_lr = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_lr');
var path_ls = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ls');
var path_lt = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_lt');
var path_lu = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_lu');
var path_lv = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_lv');
var path_lw = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_lw');
var path_lx = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_lx');
var path_ly = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ly');
var path_lz = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_lz');
var path_ma = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ma');
var path_mb = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_mb');
var path_mc = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_mc');
var path_md = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_md');
var path_me = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_me');
var path_mf = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_mf');
var path_mg = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_mg');
var path_mh = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_mh');
var path_mi = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_mi');
var path_mj = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_mj');
var path_mk = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_mk');
var path_ml = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ml');
var path_mm = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_mm');
var path_mn = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_mn');
var path_mo = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_mo');
var path_mp = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_mp');
var path_mq = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_mq');
var path_mr = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_mr');
var path_ms = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ms');
var path_mt = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_mt');
var path_mu = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_mu');
var path_mv = rsr.path("M1031.4,673.8c2.5,5.8,4.9,12.5,10.8,14.8c1.6,0.6,3.2,0.9,4.7,1.7   c4,2.3,4.6,7.7,4.7,12.3c1.9-1.2,4.2-1.6,6.4-1.2c-0.3,5.3-5.3,8.9-9.4,12.4c-5.8,4.9-10.6,12-10,19.5c0.3,3.5,2.7,7.5,6.2,7.2   c1.5-0.1,3.6-0.7,4.1,0.7c0.2,0.5,0,1.1-0.1,1.7c-0.8,3.4,1.8,6.8,4.9,8.2s6.7,1.4,10.2,1.4c1.4,0,2.8,0,4.1,0.1c0,0.2,0,0.3,0,0.5   ").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_mv');
var path_mw = rsr.path("M963.8,687.5c6.8,4.4,13.5,9.1,19.8,14.3c4.9-3.2,8.6-7,11.5-12.1   c2.2-3.8,3.8-8,7-10.9c5.7-5,14.3-4.2,21.9-4.4c2.4-0.1,4.9-0.3,7.3-0.6").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_mw');
var path_mx = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_mx');
var path_my = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_my');
var path_mz = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_mz');
var path_na = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_na');
var path_nb = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_nb');
var path_nc = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_nc');
var path_nd = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_nd');
var path_ne = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ne');
var path_nf = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_nf');
var path_ng = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ng');
var path_nh = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_nh');
var path_ni = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ni');
var path_nj = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_nj');
var path_nk = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_nk');
var path_nl = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_nl');
var path_nm = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_nm');
var path_nn = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_nn');
var path_no = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_no');
var path_np = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_np');
var path_nq = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_nq');
var path_nr = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_nr');
var path_ns = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ns');
var path_nt = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_nt');
var path_nu = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_nu');
var path_nv = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_nv');
var path_nw = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_nw');
var path_nx = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_nx');
var path_ny = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ny');
var path_nz = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_nz');
var path_oa = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_oa');
var path_ob = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ob');
var path_oc = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_oc');
var path_od = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_od');
var path_oe = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_oe');
var path_of = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_of');
var path_og = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_og');
var path_oh = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_oh');
var path_oi = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_oi');
var path_oj = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_oj');
var path_ok = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ok');
var path_ol = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ol');
var path_om = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_om');
var path_on = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_on');
var path_oo = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_oo');
var path_op = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_op');
var path_oq = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_oq');
var path_or = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_or');
var path_os = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_os');
var path_ot = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ot');
var path_ou = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ou');
var path_ov = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ov');
var path_ow = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ow');
var path_ox = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ox');
var path_oy = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_oy');
var path_oz = rsr.path("M1067.6,752.6").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_oz');
var path_pa = rsr.path("M1066.9,752.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_pa');
var path_pb = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_pb');
var path_pc = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_pc');
var path_pd = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_pd');
var path_pe = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_pe');
var path_pf = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_pf');
var path_pg = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_pg');
var path_ph = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ph');
var path_pi = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_pi');
var path_pj = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_pj');
var path_pk = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_pk');
var path_pl = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_pl');
var path_pm = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_pm');
var path_pn = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_pn');
var path_po = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_po');
var path_pp = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_pp');
var path_pq = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_pq');
var path_pr = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_pr');
var path_ps = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ps');
var path_pt = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_pt');
var path_pu = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_pu');
var path_pv = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_pv');
var path_pw = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_pw');
var path_px = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_px');
var path_py = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_py');
var path_pz = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_pz');
var path_qa = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_qa');
var path_qb = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_qb');
var path_qc = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_qc');
var path_qd = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_qd');
var path_qe = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_qe');
var path_qf = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_qf');
var path_qg = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_qg');
var path_qh = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_qh');
var path_qi = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_qi');
var path_qj = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_qj');
var path_qk = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_qk');
var path_ql = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ql');
var path_qm = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_qm');
var path_qn = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_qn');
var path_qo = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_qo');
var path_qp = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_qp');
var path_qq = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_qq');
var path_qr = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_qr');
var path_qs = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_qs');
var path_qt = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_qt');
var path_qu = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_qu');
var path_qv = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_qv');
var path_qw = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_qw');
var path_qx = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_qx');
var path_qy = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_qy');
var path_qz = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_qz');
var path_ra = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ra');
var path_rb = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_rb');
var path_rc = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_rc');
var path_rd = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_rd');
var path_re = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_re');
var path_rf = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_rf');
var path_rg = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_rg');
var path_rh = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_rh');
var path_ri = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ri');
var path_rj = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_rj');
var path_rk = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_rk');
var path_rl = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_rl');
var path_rm = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_rm');
var path_rn = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_rn');
var path_ro = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ro');
var path_rp = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_rp');
var path_rq = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_rq');
var path_rr = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_rr');
var path_rs = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_rs');
var path_rt = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_rt');
var path_ru = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ru');
var path_rv = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_rv');
var path_rw = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_rw');
var path_rx = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_rx');
var path_ry = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ry');
var path_rz = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_rz');
var path_sa = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_sa');
var path_sb = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_sb');
var path_sc = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_sc');
var path_sd = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_sd');
var path_se = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_se');
var path_sf = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_sf');
var path_sg = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_sg');
var path_sh = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_sh');
var path_si = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_si');
var path_sj = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_sj');
var path_sk = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_sk');
var path_sl = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_sl');
var path_sm = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_sm');
var path_sn = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_sn');
var path_so = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_so');
var path_sp = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_sp');
var path_sq = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_sq');
var path_sr = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_sr');
var path_ss = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ss');
var path_st = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_st');
var path_su = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_su');
var path_sv = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_sv');
var path_sw = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_sw');
var path_sx = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_sx');
var path_sy = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_sy');
var path_sz = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_sz');
var path_ta = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ta');
var path_tb = rsr.path("M1068,752.5c-0.1,0-0.2,0-0.3,0").attr({fill: 'none',stroke: '#000000',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_tb');
var path_tc = rsr.path("M990,843.2").attr({fill: 'none',stroke: '#000000',"stroke-miterlimit": '10',parent: 'VAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_tc');
VAO.attr({'id': 'VAO','name': 'VAO'});
var UVAO = rsr.set();
var path_td = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'UVAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_td');
var path_te = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'UVAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_te');
var path_tf = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'UVAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_tf');
var path_tg = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'UVAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_tg');
var path_th = rsr.path("M962.4,752.7c-5.5-1.1-9.8-5.1-13.8-9c-5.2-5.1-10.2-10.3-15.3-15.5   c-2.4-2.4-4.9-4.4-7.2-6.8c4.2,12.1,4.8,25.2,8.7,37.4c1.3,4.1,3,8.1,3.9,12.2c1,4,1.3,8.2,1.3,12.3c0.1,10.2-1.8,20.7-7.3,29.4   c-3.1,4.8-7.1,8.8-11,13.1c-10.9,12.1-19.7,25.8-30.6,37.8c-6.8,7.6-13.6,15.3-21.1,22.2c-1-5.1-2.7-10.1-5.1-14.7   c-0.8-1.5-1.6-3-2-4.6c-0.4-1.7-0.4-3.5-0.3-5.3c0.4-12,0.2-24-0.7-36c-0.1-1.4-0.2-2.9-1.1-4c-1.3-1.7-3.8-1.9-5.9-2   c-2.5-0.1-5-0.1-7.4,0.4c-1.8,0.4-3.5,1.2-5.2,2c-6.7,3.3-13.1,7.1-19.5,10.9c-5.2,3.1-10.2,7.2-15.4,10.2   c-20.8-0.3-41.4,2-61.6-3.1c-6.6-1.7-12.8-4.7-18.3-8.8c-4.7-3.5-8.9-7.9-13.8-11.2c-5.5-3.7-11.7-5.8-15.9-10.9v-33.8   c7.6-8.6,17.1-15.4,27.6-20c4.7-2,9.7-3.6,14.2-6.1s8.7-5.9,10.9-10.6c3.7-8.1,0.1-18-6.2-24.3s-14.8-9.7-23.1-13   c-10-4-20.2-7.5-30.8-9.4c-3.5-12.4-2.7-25.7-5.3-38.3c-1.1-5.1-4.7-10.3-2.6-15c2.1-4.6-2-9.4-3.3-14.3c-0.6-2-0.7-4.2-0.6-6.3   c0-1.6,0.1-3.3,0.9-4.8c0.8-1.4,2.4-2.5,4-2.2c2.5,3.9,4.9,7.8,7.4,11.7c0.2,0.4,0.5,0.8,0.9,1c0.6,0.3,1.3,0.1,1.9-0.2   c3.6-1.3,7.3-2.6,10.9-3.9c2.3-0.8,4.8-1.8,6.4-3.6c2.2-2.6,2.5-6.3,2.6-9.7c2,2.6,4.2,5.3,7,7c2.8,1.8,6.4,2.6,9.5,1.3   c2.8-1.2,4.7-3.9,5.4-6.8s0.5-6-0.1-8.9c-2.2-11-9-21-18.5-27.1c-4-2.6-8.5-4.4-12.9-6.3c-3-1.3-4.3-3.7-7.3-5   c-0.7,0.2-1.3,0.4-2,0.6c0.3-5.9,0.5-11.7,0.8-17.6c0-0.5,0.1-1.1,0.4-1.5c0.3-0.4,0.9-0.5,1.4-0.6c5.3-0.7,11.6,1.2,15.3-2.7   c1.4-1.4,2-3.3,2.6-5.2c1.4-4.1,2.7-8.3,4.1-12.4c0.5-1.6,1.1-3.3,2.3-4.6c1.2-1.2,3.3-1.8,4.7-0.8c0.7,0.5,1.1,1.2,1.7,1.7   c2.7,2.4,7,0.4,9.9-1.8c5.9-4.4,11.4-9.5,16.3-15c2.7,4,5.5,8.1,7.3,12.6c3.5,8.9,3,18.9,1.5,28.3c-1.1,6.8-2.2,14.9,3,19.4   c14.9,12.8,29.6,24.8,47.8,32.2c3.9,1.6,8.1,2.8,11.5,5.2c4.3,3,7,7.7,10.7,11.4c4.5,4.7,10.3,7.9,15.9,11.1   c10.4,5.9,20.6,12,30.9,18.1c19.4,11.5,38.8,23,58.3,34.6c7.9,4.7,15.8,9.4,23.5,14.4c-1.5,1.4-3.3,2.7-4.4,4.4   c-0.3,0.4-0.6,0.9-0.6,1.5c0,0.8,0.7,1.5,1.3,2c2.1,1.8,4.2,3.6,6.4,5.4c2.2,1.9,4.6,4.6,3.4,7.2c-0.5,1-1.5,1.7-2.2,2.6   c-0.7,0.9-1.2,2.2-0.6,3.1c0.5,0.7,1.5,0.9,2.3,1.3c1.6,0.8,2.5,2.8,2.5,4.6c0.1,1.8-0.5,3.6-1.1,5.3   C968.6,734.3,965.4,743.7,962.4,752.7z").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'UVAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_th');
var path_ti = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'UVAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ti');
var path_tj = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'UVAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_tj');
var path_tk = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'UVAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_tk');
var path_tl = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'UVAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_tl');
var path_tm = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'UVAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_tm');
UVAO.attr({'id': 'UVAO','name': 'UVAO'});
var UAO = rsr.set();
var path_tn = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'UAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_tn');
var path_to = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'UAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_to');
var path_tp = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'UAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_tp');
var path_tq = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'UAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_tq');
var path_tr = rsr.path("M685.8,1015.9c-14.7-0.4-29.5-0.7-44.2-1.1c-3.7-0.1-7.4-0.2-11-0.9   c-3.2-0.6-6.3-1.8-9.6-2.3c-3.5-0.6-7.1-0.4-10.6-0.3c-4.2,0.1-8.6,0.2-11.3,3.4l-0.3,12.6c-2.9,0.8-6-0.4-8.2-2.4   s-3.8-4.5-5.3-7.1c-2.1-3.5-4.1-6.9-6.2-10.4c-2.7-4.5-6.1-9.5-11.3-10.3c-3.3-0.5-7.5,0.5-9.4-2.3c-1.5-2.1-0.4-5.2,1.1-7.3   s3.6-4.1,3.9-6.7c0.2-1.2,0-2.4-0.3-3.6c-0.9-5.1-1.9-10.3-0.9-15.4c0.5-2.6,1.2-4.7,2.7-6.8c0.2-4.5,0.4-9,0.6-13.6   c0.1-2.7,0.1-5.7-1.7-7.6c-2.3-2.3-6.3-2-8.7-4.1c-0.8-0.7-1.4-1.6-1.7-2.7c-0.7-2.5,0.5-5.1,1.6-7.4c1.8-3.7,3.7-7.5,5.5-11.2   c1-2.1,2.1-4.2,2.5-6.5s0.1-4.8-1.4-6.6c-0.4-0.5-0.9-1-1.3-1.5c-1.2-1.8-0.5-4.4,0.8-6.1c1.3-1.7,3.2-2.9,4.8-4.4   c2.5-2.3,5-4.7,5.2-8.1c0.2-4.6,0-9.1-0.3-13.7c-2.3-0.4-4.6-0.7-6.9-1.1c-0.4-0.1-0.9-0.1-1.2-0.4c-0.3-0.3-0.4-0.9-0.4-1.3   c-0.1-2.4,1.1-4.8,3.1-6.3c0.7-0.5,1.6-1,2.1-1.7c0.6-0.9,0.6-2,0.7-3c0.1-3.3,0-7-2.4-9.4c-1.3-1.3-3.5-2.6-2.9-4.5   c0.3-1.1,1.5-1.6,2.6-1.6c1.1,0.1,2.1,0.6,3.1,1.1c4.3,2.1,8.7,3.7,13.2,5.2c5.9,2,12.2,3.7,18.2,1.7c0.2-8.4-0.3-16.7,0.7-25.1   c0.3-2.2,0.5-4.8,0.8-7c0.5-4.7,2.6-9.3,4-13.9c0.9-3,4.3-6,5.9-8.7c-0.5-1.3-2.2-1.5-3.6-1.6c-1.4-0.1-3.2-0.9-3-2.3   c0.1-0.6,0.5-1.1,0.9-1.7c1.4-2,1.6-4.8,0.3-6.9c-1.8-3.1-6.2-4.6-6.9-8.2c-0.4-2.3,0.9-4.5,2.2-6.5c2.3-3.4,4.6-6.8,6.9-10.2   c2.6-3.9,5.3-8.5,4-13c-0.2-0.8-0.6-1.6-1.3-2.2c-1.4-1.1-3.5-0.7-5.3-0.9c-3.4-0.5-5.9-3.6-6.8-6.9c-0.8-3.3-1-6.8-0.5-10.2   c-3.4-7.3-11.7-11.2-15.5-18.3c-2.4-4.4-2.7-9.7-4.8-14.2c-1.6-3.5-4.1-6.5-6.7-9.5c-2.6-3-4.5-5.9-7.1-9c5.3-0.2,8.6-5.5,11.6-9.9   c3.2-4.7,7-9,11.4-12.6c1.2-1,2.4-2,3.9-2.5c1.7-0.5,3.5-0.4,5.2-0.3c9.2,0.5,18.3-0.3,27.5-1.2c4.9-0.5,9.7-0.9,14.5-1.9   c4.5-0.9,9.1-2.1,13.7-1.6c1.8,0.2,4.2,0.4,4.9-1.3c0.2-0.6,0.1-1.3,0.1-2c-0.4-3.5-0.2-7,0.8-10.4c0.2-0.6,0.4-1.3,0.9-1.8   c0.6-0.5,1.5-0.5,2.2-0.6c3.8-0.1,7.8-0.1,10.9,1.9c2.3,1.5,4.4,3.8,7.2,3.7c1.4,4.8,5.4,9.7,3.3,14.3c-2.1,4.7,1.5,9.9,2.6,15   c2.7,12.6,1.8,25.9,5.3,38.3c10.6,1.9,20.8,5.4,30.8,9.4c8.3,3.3,16.8,6.7,23.1,13s9.9,16.2,6.2,24.3c-2.1,4.7-6.3,8.2-10.9,10.6   s-9.5,4-14.2,6.1c-10.5,4.5-20,11.4-27.6,20v33.8c4.2,5.1,10.5,7.2,15.9,10.9c4.9,3.3,9,7.7,13.8,11.2c5.4,4.1,11.7,7.1,18.3,8.8   c20.2,5.2,40.7,2.9,61.6,3.1c5.2-3.1,10.2-7.2,15.4-10.2c6.4-3.8,12.8-7.6,19.5-10.9c1.7-0.8,3.4-1.6,5.2-2   c2.4-0.6,4.9-0.5,7.4-0.4c2.2,0.1,4.6,0.3,5.9,2c0.8,1.1,1,2.6,1.1,4c0.9,12,1.1,24,0.7,36c-0.1,1.8-0.1,3.6,0.3,5.3   c0.4,1.6,1.3,3.1,2,4.6c2.4,4.6,4.1,9.6,5.1,14.7c-4.1,6.2-9,11.4-13.9,17c-9.9,11.3-20.5,21.9-31.8,31.8   c-12.8,11.2-26,21.9-39.6,32.1c-9.5,7.2-19,14.4-29.1,20.7c-6.2,3.8-12.6,7.3-18.2,11.8c-4.8,3.8-9,8.3-14.2,11.4   C711.7,1017.4,699,1016.6,685.8,1015.9").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'UAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_tr');
var path_ts = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'UAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ts');
var path_tt = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'UAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_tt');
var path_tu = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'UAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_tu');
var path_tv = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'UAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_tv');
var path_tw = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'UAO','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_tw');
UAO.attr({'id': 'UAO','name': 'UAO'});
var UZAO_1_ = rsr.set();
UZAO_1_.attr({'id': 'UZAO_1_','name': 'UZAO_1_'});
var ZAO__x28_копия_x29_ = rsr.set();
var path_tx = rsr.path("M388.8,851.5c0.3-0.4,0.6-0.7,0.5-1.2    c15.7-14.7,31.7-28.8,47.9-43.1c14.5-12.7,29.5-25,40.8-40.6c2.3-3.2,4.2-6,5.8-9.4c0.4-0.9,0.3-2.1-0.5-2.8    c-2.7-2.7-5.5-5.2-8.6-7.5c-1.3-1-2.4-2-3.7-2.7c-1.4-0.8-1.6-2.7-0.5-3.9c3.9-4.1,7.9-8.2,11.8-12.3c7.1-7.4,14.1-14.7,21.1-22.2    c6.1-6.4,11.7-13.2,16.8-20.4c3.8-5.3,7.6-10.9,11-16.5c0.4-0.6,0.5-1.4,0.3-2c0.5-0.1,0.8-0.5,1.1-0.9s0.6-0.5,1-0.8    s0.8-0.9,1.2-0.6").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'UZAO_1_','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_tx');
var path_ty = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'UZAO_1_','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ty');
var path_tz = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'UZAO_1_','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_tz');
var path_ua = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'UZAO_1_','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ua');
var path_ub = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'UZAO_1_','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ub');
var path_uc = rsr.path("M534,664.8c0.7-0.4,1.5-0.6,2.4-0.7c7-1,14.5-2.1,19.8-6.8    c0.8-0.7,1.6-1.5,2.7-1.5c0.7,0,1.3,0.3,1.8,0.7c2.4,1.7,3.8,4.7,3.6,7.6c2.6,3,4.5,5.9,7.1,9c2.5,2.9,5.1,5.9,6.7,9.5    c2.1,4.6,2.4,9.8,4.8,14.2c3.8,7.1,12.1,11,15.5,18.3c-0.5,3.4-0.4,6.9,0.5,10.2c0.8,3.3,3.4,6.4,6.8,6.9c1.8,0.2,3.9-0.2,5.3,0.9    c0.7,0.5,1.1,1.4,1.3,2.2c1.3,4.5-1.4,9.1-4,13c-2.3,3.4-4.6,6.8-6.9,10.2c-1.3,1.9-2.7,4.2-2.2,6.5c0.7,3.6,5,5,6.9,8.2    c1.2,2.1,1.1,4.9-0.3,6.9c-0.4,0.5-0.8,1-0.9,1.7c-0.2,1.4,1.6,2.2,3,2.3s3.1,0.3,3.6,1.6c-1.6,2.7-5,5.7-5.9,8.7    c-1.4,4.6-3.5,9.1-4,13.9c-0.3,2.2-0.5,4.8-0.8,7c-1,8.4-0.4,16.6-0.7,25.1c-5.9,2-12.3,0.3-18.2-1.7c-4.5-1.6-9-3.1-13.2-5.2    c-1-0.5-2-1-3.1-1.1s-2.3,0.5-2.6,1.6c-0.5,1.8,1.6,3.1,2.9,4.5c2.3,2.4,2.4,6.1,2.4,9.4c0,1-0.1,2.2-0.7,3    c-0.5,0.8-1.4,1.2-2.1,1.7c-2,1.4-3.2,3.8-3.1,6.3c0,0.5,0.1,1,0.4,1.3c0.3,0.3,0.8,0.4,1.2,0.4c2.3,0.4,4.6,0.7,6.9,1.1    c0.4,4.5,0.5,9.1,0.3,13.7c-0.1,3.4-2.6,5.8-5.2,8.1c-1.6,1.5-3.5,2.7-4.8,4.4s-2,4.3-0.8,6.1c0.4,0.6,0.8,1,1.3,1.5    c1.4,1.8,1.8,4.3,1.4,6.6c-0.4,2.3-1.4,4.4-2.5,6.5c-1.8,3.7-3.7,7.5-5.5,11.2c-1.1,2.3-2.3,4.9-1.6,7.4c0.3,1,0.9,2,1.7,2.7    c2.5,2.1,6.4,1.8,8.7,4.1c1.9,1.9,1.9,4.9,1.7,7.6c-0.2,4.5-0.4,9-0.6,13.6c-1.5,2.2-2.2,4.2-2.7,6.8c-1,5.1,0,10.3,0.9,15.4    c0.2,1.2,0.4,2.4,0.3,3.6c-0.4,2.6-2.4,4.6-3.9,6.7c-1.5,2.1-2.7,5.1-1.1,7.3c1.9,2.7,6.1,1.7,9.4,2.3c5.2,0.8,8.5,5.8,11.3,10.3    c2.1,3.5,4.1,6.9,6.2,10.4c1.5,2.5,3.1,5.1,5.3,7.1s5.4,3.1,8.2,2.4c2.3-0.6,3.1,3.3,3.2,5.8c0.1,2.2-0.1,4.5-1.4,6.2    c-0.8,1.1-2,1.8-3.2,2.5c-6.5,4-12.6,8.8-18.2,14.1c0,8.3,0.1,16.2-3.5,23.6c-0.5,1.1-1.1,2.2-1.6,3.4c-0.5,1.3-0.7,2.8-0.9,4.2    c-0.7,4.2-1.3,8.5-2,12.7c-0.2,1-0.3,2.1,0.2,3s2,1.8,2.7,1c0.6,6.1,0.3,12.2-0.7,18.3c-0.5,2.8-0.9,5.6-0.6,8.5    c-2.4,0-4.3,0.5-6.7,0.5v14.5c2.8,3.1,5.6,6.1,8.4,9.2c0.8,0.9,1.6,1.8,2.3,2.7c3.2,4.5,3.9,10.6,7.5,14.8c1.6,1.9,3.9,3.4,5,5.7    c1.1,2.3,1,5.2,0.8,7.7H560c-0.1-0.9,0.1-1.1,0.2-2c0.3-9.7,0.3-19.1-1.2-28.7h-18c-2.9,3.3-5.2,6.8-7.5,10.4H521    c-0.9,2.5-1.2,5.5,0.2,7.9c1,1.6,2.7,2.8,3.4,4.6c1.1,2.9-1.1,6.3-4,7.5s-6.2,0.9-9.3,0.6c-2.9-0.3-5.8-0.6-8.7-0.9    c-0.7-0.1-1.4-0.2-1.9-0.7c-0.3-0.4-0.4-0.9-0.5-1.4c-0.5-3.6-0.3-7.9,2.6-10.1c0.7-0.5,1.6-0.9,2.1-1.7c0.5-0.7,0.6-1.7,0.7-2.6    c0.3-4,0.5-8.4-2.1-11.5c-1.9-2.2-4.8-3.2-7-5c-2.8-2.2-4.6-5.7-7.9-7.1c-1.6-0.7-3.4-0.8-5.1-1.3s-3.4-1.7-3.6-3.4    c-0.1-0.9,0.1-1.9-0.1-2.8c-0.6-2.4-4.1-2.4-5.6-4.4h-17.7c-0.1-2.5-0.5-5.4-2.8-6.5c-1.8-0.8-4,0.1-5.8,0.9s-4.3,1.3-5.7-0.1    c-1.2-1.1-1.2-3.2-2.5-4.2c-0.8-0.6-1.8-0.7-2.8-0.7c-1.8,0-3.5,0-5.3,0.2c-1.7,0.1-3.5,0.4-4.7,1.6c-0.9,0.9-1.4,2.1-2.2,3.2    c-1.3,1.6-3.4,2.5-5.5,2.2c-2-0.3-4.1-1.1-4.8-3.1V1106c0.2-2.7,3.4-4,6.1-4.7c11.4-2.9,22.7-6,34-9.4c2.7-0.8,5.4-1.6,7.8-3    c2.1-1.1,3.9-2.6,5.8-4.1c2.2-1.7,4.3-3.4,6.3-5.3c2.2-2.1,4.2-4.4,6.1-6.8c2-2.4,4-4.7,6-7.1c3.2-3.8,6.6-7.4,9.4-11.6    c1.7,2.8,4.6,4.7,7.7,5.6s6.5,1,9.7,0.8c2.3-0.1,4.6-0.4,6.6-1.6s3.3-3.3,4.5-5.2c1.7-2.8,3.5-5.8,3.4-9.1    c-0.1-4.4-3.4-8-4.2-12.3c-0.2-1.2-0.3-2.4-0.8-3.5c-0.6-1.3-1.7-2.2-2.8-3.1c-2.2-1.8-4.4-3.7-7.1-4.6c-1.5-0.5-3.1-0.7-4.6-1.4    c-1.4-0.7-2.7-2.2-2.4-3.8c0.3-1.9,2.6-3.2,2.5-5.1c-0.1-1.3-1.4-2.3-2.7-2.7c-1.3-0.4-2.7-0.5-3.9-1.1c-1.7-0.8-2.8-2.6-2.8-4.5    c0-0.8,0.2-1.6,0.8-2.1c0.4-0.3,1-0.4,1.5-0.4c3-0.2,6,0.2,9,0.1c3-0.1,6.2-0.9,8.2-3.2s2.5-6.1,0.3-8.1c-1.2-1.1-3-1.6-3.8-3    c-1-1.8,0.1-4.2-0.3-6.2c-0.6-2.5-3.2-3.7-5.6-4.7c-2.3-0.9-4.6-1.8-6.9-2.4c-3.1-0.8-6.4-1.1-9.6-1.6c-12.3-2-25.1-7-32.4-17    c-13.6-18.7-27.9-36.1-40.2-55.7c-9.4-15-19.4-29.7-29.8-44c-0.6-0.8-1.2-1.6-1.7-2.4").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'UZAO_1_','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_uc');
var path_ud = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'UZAO_1_','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ud');
var path_ue = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'UZAO_1_','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ue');
var path_uf = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'UZAO_1_','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_uf');
var path_ug = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'UZAO_1_','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ug');
var path_uh = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'UZAO_1_','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_uh');
ZAO__x28_копия_x29_.attr({'id': 'ZAO__x28_копия_x29_','parent': 'UZAO_1_','name': 'ZAO__x28_копия_x29_'});
var Korolev = rsr.set();
var path_ui = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Korolev','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ui');
var path_uj = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Korolev','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_uj');
var path_uk = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Korolev','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_uk');
var path_ul = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Korolev','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ul');
var path_um = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Korolev','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_um');
var path_un = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Korolev','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_un');
var path_uo = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Korolev','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_uo');
var path_up = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Korolev','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_up');
var path_uq = rsr.path("M892.5,86.7c0,2.3-0.8,4.5-1.9,6.4c-1.5,2.7-3.5,4.9-5.2,7.4   c-5.4,7.6-8.2,16.7-10.9,25.6c-1.3,4.2-2.6,8.4-3,12.8c-0.3,3.5-0.1,6.9,0.1,10.4c0.5,7.2,0.9,14.5,1.4,21.7   c0.4,6.3,1.1,13.2,4.8,18.4c14.2-9.8,32.3-13.9,49.3-11c7.4,1.2,14.7,3.8,20.5,8.6c1.1,1,2.2,2,2.8,3.3c0.7,1.5,0.8,3.2,0.8,4.8   c0.2,6.4,0.3,13.2-2.6,19c-2.2,4.4-5.9,7.7-9.5,11c-2.6,2.4-5.2,4.7-7.8,7.1c-1.5,1.3-3,2.7-4.8,3.5c-2.3,1.1-4.9,1.2-7.4,1.3   c-5.4,0.2-10.7,0.4-16.1,0.6c-3.7,0.2-7.6,0.3-10.9,2c-1.9,1-3.6,2.5-5.3,3.9c-3.9,3.4-7.8,6.8-11.7,10.1c1.3,0.8,2.3,1.4,3.2,2.6   c3.4,4.8,8,8.8,13.3,11.4c1.2,0.6,2.5,1.4,2.6,2.7c11.7,2,23.9,3,35.8,2.9c3.9,0,7.8-0.2,11.7-0.8c4.2-0.7,8.3-2.1,12.4-3.4   c25.8-8.6,51.7-17.1,77.5-25.7c2.7-0.9,5.4-1.8,7.8-3.3c2.6-1.6,4.9-3.8,6.8-6.2c12.1-15,13.1-35.9,13.3-55.2   c0-4.8-0.5-10.5-4.7-12.9c-0.4-0.2-0.9-0.4-1.4-0.4c-1,0-1.7,0.9-2.3,1.6c-5.6,6.6-14.8,9.8-23.3,8.3c-0.8-0.1-1.6-0.3-2.1-0.9   c-0.7-0.6-0.9-1.6-1-2.5c-1.2-6.1-2.2-12.8,0.8-18.2c1.9-3.4,5.3-5.8,7.5-9c2.3-3.2,3.2-8.1,0.4-10.8c-5.5-5.1-11.2-12-12.6-19.4   c-0.8-4.2-0.6-8.8,1.9-12.2c4.2-6,13-6.3,19-10.7c6.7-5,9-14.7,16.3-18.8c5.4-3,12-2.2,18.2-2.6s13.3-3.3,14.4-9.4   c0.8-4.4-2-8.6-5.1-11.7c-5.1-5.1-12.1-8.8-19.2-8.1c-7.9,0.8-14.4,6.7-19.6,12.7s-10.1,12.8-17.3,16.3c-5.1,2.6-11,3.2-16.7,3.7   c-8.6,0.8-17.5,1.3-25.8-1.2c-8.5-2.5-15.8-8-24.2-10.7c-6.4-2-13.1-2.4-19.8-2.7c-9.5-0.5-19.5-0.9-28.3,2.9   c-6.7,2.9-12.3,8.2-15.5,14.7C897.2,80.2,896,85.5,892.5,86.7z").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Korolev','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_uq');
var path_ur = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Korolev','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ur');
var path_us = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Korolev','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_us');
var path_ut = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Korolev','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ut');
var path_uu = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Korolev','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_uu');
var path_uv = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Korolev','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_uv');
Korolev.attr({'id': 'Korolev','name': 'Korolev'});
var Shelkovo = rsr.set();
var path_uw = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_uw');
var path_ux = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ux');
var path_uy = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_uy');
var path_uz = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_uz');
var path_va = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_va');
var path_vb = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_vb');
var path_vc = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_vc');
var path_vd = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_vd');
var path_ve = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ve');
var path_vf = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_vf');
var path_vg = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_vg');
var path_vh = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_vh');
var path_vi = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_vi');
var path_vj = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_vj');
var path_vk = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_vk');
var path_vl = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_vl');
var path_vm = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_vm');
var path_vn = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_vn');
var path_vo = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_vo');
var path_vp = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_vp');
var path_vq = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_vq');
var path_vr = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_vr');
var path_vs = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_vs');
var path_vt = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_vt');
var path_vu = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_vu');
var path_vv = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_vv');
var path_vw = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_vw');
var path_vx = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_vx');
var path_vy = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_vy');
var path_vz = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_vz');
var path_wa = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_wa');
var path_wb = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_wb');
var path_wc = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_wc');
var path_wd = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_wd');
var path_we = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_we');
var path_wf = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_wf');
var path_wg = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_wg');
var path_wh = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_wh');
var path_wi = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_wi');
var path_wj = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_wj');
var path_wk = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_wk');
var path_wl = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_wl');
var path_wm = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_wm');
var path_wn = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_wn');
var path_wo = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_wo');
var path_wp = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_wp');
var path_wq = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_wq');
var path_wr = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_wr');
var path_ws = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ws');
var path_wt = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_wt');
var path_wu = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_wu');
var path_wv = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_wv');
var path_ww = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ww');
var path_wx = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_wx');
var path_wy = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_wy');
var path_wz = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_wz');
var path_xa = rsr.path("M1037.1,241.1c2.3,9.2,10,16.1,17.3,22.3c3.2,2.8,6.5,5.6,10.5,6.9   s8.4,1.1,12.6,1.2c6.5,0.2,13.1,1.1,19.4,2.8c7.9,2.1,16.1,6,19.7,13.3c2.7,5.4,2.4,11.7,3.2,17.7c1,7,3.7,13.9,8.5,19.2   c4.8,5.2,11.7,8.7,18.8,8.7c10.1-0.1,18.8-6.9,26.5-13.4c3.1-2.6,6.3-5.3,10.1-6.7s8.4-1.3,11.5,1.4c7.7,6.6,17.3,10.7,23.9,18.5   c1.9,2.3,3.4,4.9,5,7.4c7.2,11.8,15.7,22.7,24.2,33.6c1.8,2.4,3.7,4.8,6.1,6.6c0.4,0.3,0.9,0.6,1.4,0.9c8.3,5,18.6-0.4,26.9-5.4   c6.5-3.9,10.8-10.6,14.4-17.3c15.9-29.4,24-63,23.4-96.4c-0.3-15.7-2.5-31.7,0.7-47.1c1.5-7,4-13.8,5.7-20.8   c1.7-7.4,2.4-15,2.8-22.7c1.6-36-5.3-72.2-19.8-105.2c-4.1-9.3-10.4-19.6-20.5-20.9c-12-1.5-21.5,10.7-24.7,22.4   c-1.7,6.1-2.5,12.7-6.2,17.8c-5.2,7.1-15.1,9.8-23.7,8s-16-7.4-22-13.9c-4.7-5.2-8.7-11-13.1-16.4c-13.6-16.8-32.7-30.4-54.2-32.7   s-44.9,14.1-56.1,32.7c-2.5,4.1-8.2,6.1-13.3,6.5c-6.2,0.4-12.8-0.4-18.2,2.6c-7.3,4.1-9.6,13.8-16.3,18.8c-6,4.4-14.8,4.7-19,10.7   c-2.5,3.4-2.7,8-1.9,12.2c1.4,7.4,7.1,14.3,12.6,19.4c2.8,2.7,1.9,7.6-0.4,10.8c-2.2,3.2-5.6,5.6-7.5,9c-3,5.4-2,12.1-0.8,18.2   c0.1,0.9,0.3,1.9,1,2.5c0.5,0.6,1.3,0.8,2.1,0.9c8.5,1.5,17.7-1.7,23.3-8.3c0.6-0.7,1.3-1.6,2.3-1.6c0.5,0,1,0.2,1.4,0.4   c4.2,2.4,4.7,8.1,4.7,12.9c-0.2,19.3-1.2,40.2-13.3,55.2c-1.9,2.4-4.2,4.6-6.8,6.2c-0.9,0.5-1.8,1-2.7,1.4").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_xa');
var path_xb = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_xb');
var path_xc = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_xc');
var path_xd = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_xd');
var path_xe = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_xe');
var path_xf = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_xf');
var path_xg = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_xg');
var path_xh = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_xh');
var path_xi = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_xi');
var path_xj = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_xj');
var path_xk = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_xk');
var path_xl = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_xl');
var path_xm = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_xm');
var path_xn = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_xn');
var path_xo = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_xo');
var path_xp = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_xp');
var path_xq = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_xq');
var path_xr = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_xr');
var path_xs = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Shelkovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_xs');
Shelkovo.attr({'id': 'Shelkovo','name': 'Shelkovo'});
var Mitishi = rsr.set();
var path_xt = rsr.path("M835.6,282.3c0.3,0.3,0.4,0.4,0.4,0.4").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Mitishi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_xt');
var path_xu = rsr.path("M868,259.5c-2.3,2-4.8,4.1-7.8,4.6c-3.2,0.6-6.6-0.7-9.6,0.6   c-2.1,0.9-3.5,2.8-4.8,4.7c-3,4.3-7,8.9-10,13.2c3-4.3,7-8.9,10-13.2c1.3-1.9,2.7-3.8,4.8-4.7c3-1.3,6.4,0,9.6-0.6   C863.2,263.6,865.7,261.5,868,259.5c2.4-2.1,4.8-4.1,7.2-6.2l-0.1,0.3c3.9-3.3,7.8-6.7,11.7-10.1c1.7-1.4,3.4-2.9,5.3-3.9   c3.3-1.7,7.2-1.8,10.9-2c5.4-0.2,10.7-0.4,16.1-0.6c2.5-0.1,5.1-0.2,7.4-1.3c1.8-0.8,3.3-2.2,4.8-3.5c2.6-2.4,5.2-4.7,7.8-7.1   c3.6-3.3,7.3-6.6,9.5-11c2.9-5.8,2.8-12.6,2.6-19c0-1.6-0.1-3.3-0.8-4.8c-0.6-1.3-1.7-2.3-2.8-3.3c-5.8-4.8-13.1-7.4-20.5-8.6   c-17-2.9-35.1,1.2-49.3,11c-3.7-5.2-4.4-12.1-4.8-18.4c-0.5-7.2-0.9-14.5-1.4-21.7c-0.2-3.5-0.4-6.9-0.1-10.4   c0.4-4.4,1.7-8.6,3-12.8c2.7-8.9,5.5-18,10.9-25.6c1.7-2.5,3.7-4.7,5.2-7.4c1.1-1.9,1.9-4.1,1.9-6.4c-10.4-13.8-20.2-28-30.5-41.8   c-4.1-5.4-8.4-11.1-14.4-14.2c-6-3.2-13.5-3.5-19.8-0.9s-11.3,8.2-13.3,14.7c-1,3.2-1.3,6.8-3.7,9.1c-1.7,1.7-4.1,2.5-6.5,2.9   c-10.1,1.6-21.1-2.2-30.4,2.1c-6.7,3.1-10.9,9.8-14.1,16.4c-3.2,6.6-5.8,13.7-10.7,19.2c-5.1,5.7-12.1,9.1-18.4,13.3   c-8.2,5.5-15.3,12.4-22.3,19.3c-5.2,5.1-10.6,10.4-13.8,17c-2.3,4.8-3.5,10-4.6,15.2c-2.4,11.3-6.4,22.8-8.8,34   c8.7,1.1,17.5,1.7,26.4,1.9c10.3,0.1,21.1-0.3,30.2,4.4c3.1,1.6,5.9,3.7,8.6,5.8c11.3,8.6,22.2,17.4,33.7,26.1c0,0.1,0,0.1,0,0.2   c1.9,2.8,4.9,5.3,7.3,7.6c2.7,2.4,5.6,4.4,8.5,6.5c14.6,10.5,27.4,24.7,40.2,37.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Mitishi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_xu');
Mitishi.attr({'id': 'Mitishi','name': 'Mitishi'});
var Reutov = rsr.set();
var path_xv = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_xv');
var path_xw = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_xw');
var path_xx = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_xx');
var path_xy = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_xy');
var path_xz = rsr.path("M948.7,491.3").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_xz');
var path_ya = rsr.path("M1007.7,560.1c-1.4-0.2-3,1.1-4.4,2.2c-4.2,3.3-9.3,5.5-14.7,6.2   c-1.8,0.2-3.6,0.3-5.3,0.7c-1.8,0.4-3.4,1.1-5.1,1.8c-10.6,4.2-22.3,5.4-33.6,3.6V500c0.5-3.4,2.6-6.5,5.2-8.7c-0.1,0-0.2,0-0.4,0").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ya');
var path_yb = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_yb');
var path_yc = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_yc');
var path_yd = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_yd');
var path_ye = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ye');
var path_yf = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_yf');
var path_yg = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_yg');
var path_yh = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_yh');
var path_yi = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_yi');
var path_yj = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_yj');
var path_yk = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_yk');
var path_yl = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_yl');
var path_ym = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ym');
var path_yn = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_yn');
var path_yo = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_yo');
var path_yp = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_yp');
var path_yq = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_yq');
var path_yr = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_yr');
var path_ys = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ys');
var path_yt = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_yt');
var path_yu = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_yu');
var path_yv = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_yv');
var path_yw = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_yw');
var path_yx = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_yx');
var path_yy = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_yy');
var path_yz = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_yz');
var path_za = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_za');
var path_zb = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_zb');
var path_zc = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_zc');
var path_zd = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_zd');
var path_ze = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ze');
var path_zf = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_zf');
var path_zg = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_zg');
var path_zh = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_zh');
var path_zi = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_zi');
var path_zj = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_zj');
var path_zk = rsr.path("M949.7,491.3c1.4,0,3.1-0.6,4.4-1.6c1.3-1.1,2.4-2.4,3.7-3.4   c2.6-1.8,5.9-2,9-1.9c3.4,0.1,7.2,0.5,9.5,3c2.2,2.4,2.4,5.9,2.7,9.2c0.3,3.2,1,6.8,3.6,8.7c3.1,2.1,7.3,1,10.8,2.3   c4,1.4,6.5,5.9,6.5,10.2s-2,8.4-4.5,11.8c-0.5,0.7-1.1,1.4-1.3,2.3c-0.4,1.2-0.1,2.5,0.2,3.8c0.7,3.1,1.5,6.3,3.5,8.7   c1,1.2,2.2,2.1,3.2,3.2c1,1.1,1.9,2.3,2.8,3.6c1.8,2.5,3.2,5.5,3.5,8.6c0.1,0,0.3,0,0.4,0").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_zk');
var path_zl = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_zl');
var path_zm = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_zm');
var path_zn = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_zn');
var path_zo = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_zo');
var path_zp = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_zp');
var path_zq = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_zq');
var path_zr = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_zr');
var path_zs = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_zs');
var path_zt = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_zt');
var path_zu = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_zu');
var path_zv = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_zv');
var path_zw = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_zw');
var path_zx = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_zx');
var path_zy = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_zy');
var path_zz = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_zz');
var path_aaa = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aaa');
var path_aab = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aab');
var path_aac = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Reutov','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aac');
Reutov.attr({'id': 'Reutov','name': 'Reutov'});
var Zheldor = rsr.set();
var path_aad = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aad');
var path_aae = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aae');
var path_aaf = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aaf');
var path_aag = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aag');
var path_aah = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aah');
var path_aai = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aai');
var path_aaj = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aaj');
var path_aak = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aak');
var path_aal = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aal');
var path_aam = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aam');
var path_aan = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aan');
var path_aao = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aao');
var path_aap = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aap');
var path_aaq = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aaq');
var path_aar = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aar');
var path_aas = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aas');
var path_aat = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aat');
var path_aau = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aau');
var path_aav = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aav');
var path_aaw = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aaw');
var path_aax = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aax');
var path_aay = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aay');
var path_aaz = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aaz');
var path_aba = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aba');
var path_abb = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_abb');
var path_abc = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_abc');
var path_abd = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_abd');
var path_abe = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_abe');
var path_abf = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_abf');
var path_abg = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_abg');
var path_abh = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_abh');
var path_abi = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_abi');
var path_abj = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_abj');
var path_abk = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_abk');
var path_abl = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_abl');
var path_abm = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_abm');
var path_abn = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_abn');
var path_abo = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_abo');
var path_abp = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_abp');
var path_abq = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_abq');
var path_abr = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_abr');
var path_abs = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_abs');
var path_abt = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_abt');
var path_abu = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_abu');
var path_abv = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_abv');
var path_abw = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_abw');
var path_abx = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_abx');
var path_aby = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aby');
var path_abz = rsr.path("M1175.7,641.5c3.3,4.2,7.1,9,12.4,9.4c6.1,0.4,10.9-5.6,12.6-11.5   c1.8-5.9,1.9-12.3,4.7-17.8c2.6-5.1,7.3-8.8,11.1-13c1-1.1,1.9-2.3,2.5-3.7c0.7-1.9,0.6-3.9,0.5-5.9c-0.1-5,0.4-10,1.6-14.9   c1.9-7.8,5.3-15.5,4-23.4c-0.2-1.2-0.5-2.3-1.3-3.2c-1-1.2-2.6-1.8-4.2-2.2c-12.7-3.5-26.3-2.5-39.3-0.1s-25.7,6.2-38.8,8.1   c-1.8,0.3-3.8,0.5-5.4-0.4c-2.9-1.6-2.9-5.6-3-8.9c-0.4-10.1-5.7-20.2-14.6-24.8c-8.9-4.7-21.2-2.7-27.2,5.4   c-4.4,6-5,14.1-9.6,19.9c-1.8,2.3-4.2,4.1-6,6.3c-5.1,6.2-5.4,15.9-0.7,22.4c5.3,7.5,15.8,10.5,20,18.6c3.4,6.6,1.9,14.8,4.9,21.6   c2.8,6.2,9.5,10.3,16.3,10.6c7.3,0.3,14.1-3.3,20.8-6.3s14.4-5.2,21.1-2.4c3,1.3,5.5,3.5,7.9,5.7   C1169.5,634.2,1172.8,637.7,1175.7,641.5z").attr({fill: 'none',stroke: '#000000',"stroke-miterlimit": '10',parent: 'Zheldor','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_abz');
Zheldor.attr({'id': 'Zheldor','name': 'Zheldor'});
var Lubertsi = rsr.set();
var path_aca = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aca');
var path_acb = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_acb');
var path_acc = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_acc');
var path_acd = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_acd');
var path_ace = rsr.path("M1014.8,806.9c-0.2,0.1-0.4,0.1-0.6,0.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ace');
var path_acf = rsr.path("M1031.4,673.8c2.5,5.8,4.9,12.5,10.8,14.8c1.6,0.6,3.2,0.9,4.7,1.7   c4,2.3,4.6,7.7,4.7,12.3c1.9-1.2,4.2-1.6,6.4-1.2c-0.3,5.3-5.3,8.9-9.4,12.4c-5.8,4.9-10.6,12-10,19.5c0.3,3.5,2.7,7.5,6.2,7.2   c1.5-0.1,3.6-0.7,4.1,0.7c0.2,0.5,0,1.1-0.1,1.7c-0.8,3.4,1.8,6.8,4.9,8.2s6.7,1.4,10.2,1.4c1.4,0,2.8,0,4.1,0.1   c-0.2,3.2-1.6,5.9-3.7,8.3c-1,1.1-2.1,2.1-2.9,3.3c-2,3.4-0.4,7.7,1.7,11c0.4,0.7,0.9,1.4,1.1,2.1c0.3,0.9,0.3,1.8,0.4,2.8   c0.1,3.6,0.1,7.6-2.3,10.3c-1.4,1.6-3.4,2.5-5.4,3.2c-3,1-6.2,1.6-9.4,1.7c-3.3,0.1-6.6-0.2-9.9-0.1c-3.3,0.2-6.7,0.9-9.3,2.9   c-1.6,1.3-2.9,3-4.4,4.3c-2.6,2.2-5.9,3.4-9.1,4.4").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_acf');
var path_acg = rsr.path("M963.8,687.5c6.8,4.4,13.5,9.1,19.8,14.3c4.9-3.2,8.6-7,11.5-12.1   c2.2-3.8,3.8-8,7-10.9c5.7-5,14.3-4.2,21.9-4.4c2.4-0.1,4.9-0.3,7.3-0.6").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_acg');
var path_ach = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ach');
var path_aci = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aci');
var path_acj = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_acj');
var path_ack = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ack');
var path_acl = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_acl');
var path_acm = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_acm');
var path_acn = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_acn');
var path_aco = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aco');
var path_acp = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_acp');
var path_acq = rsr.path("M964.6,687.5c-1.5,1.4-3.3,2.7-4.4,4.4c-0.3,0.4-0.6,0.9-0.6,1.5   c0,0.8,0.7,1.5,1.3,2c2.1,1.8,4.2,3.6,6.4,5.4c2.2,1.9,4.6,4.6,3.4,7.2c-0.5,1-1.5,1.7-2.2,2.6c-0.7,0.9-1.2,2.2-0.6,3.1   c0.5,0.7,1.5,0.9,2.3,1.3c1.6,0.8,2.5,2.8,2.5,4.6c0.1,1.8-0.5,3.6-1.1,5.3c-3,9.4-6.2,18.8-9.2,27.8c-0.1,0-0.3-0.1-0.4-0.1").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_acq');
var path_acr = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_acr');
var path_acs = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_acs');
var path_act = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_act');
var path_acu = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_acu');
var path_acv = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_acv');
var path_acw = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_acw');
var path_acx = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_acx');
var path_acy = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_acy');
var path_acz = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_acz');
var path_ada = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ada');
var path_adb = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_adb');
var path_adc = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_adc');
var path_add = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_add');
var path_ade = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ade');
var path_adf = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_adf');
var path_adg = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_adg');
var path_adh = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_adh');
var path_adi = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_adi');
var path_adj = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_adj');
var path_adk = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_adk');
var path_adl = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_adl');
var path_adm = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_adm');
var path_adn = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_adn');
var path_ado = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ado');
var path_adp = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_adp');
var path_adq = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_adq');
var path_adr = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_adr');
var path_ads = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ads');
var path_adt = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_adt');
var path_adu = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_adu');
var path_adv = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_adv');
var path_adw = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_adw');
var path_adx = rsr.path("M962.5,752.8c2.5,2.9,5.2,5.7,7.8,8.4c5.6,5.8,11.2,11.7,16.8,17.5   c8.7,9,17.4,18,26.1,27.1c0.4,0.4,0.7,0.7,1.2,1c0.1,0.1,0.3,0.1,0.4,0.2c0,0.2,0,0.3-0.1,0.5").attr({fill: 'none',stroke: '#000000',"stroke-miterlimit": '10',parent: 'Lubertsi','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_adx');
Lubertsi.attr({'id': 'Lubertsi','name': 'Lubertsi'});
var Balashiha = rsr.set();
var path_ady = rsr.path("M1175.7,641.5c3.3,4.2,7.1,9,12.4,9.4c6.1,0.4,10.9-5.6,12.6-11.5   c1.8-5.9,1.9-12.3,4.7-17.8c2.6-5.1,7.3-8.8,11.1-13c1-1.1,1.9-2.3,2.5-3.7c0.7-1.9,0.6-3.9,0.5-5.9c-0.1-5,0.4-10,1.6-14.9   c1.9-7.8,5.3-15.5,4-23.4c-0.2-1.2-0.5-2.3-1.3-3.2c-1-1.2-2.6-1.8-4.2-2.2c-12.7-3.5-26.3-2.5-39.3-0.1s-25.7,6.2-38.8,8.1   c-1.8,0.3-3.8,0.5-5.4-0.4c-2.9-1.6-2.9-5.6-3-8.9c-0.4-10.1-5.7-20.2-14.6-24.8c-8.9-4.7-21.2-2.7-27.2,5.4   c-4.4,6-5,14.1-9.6,19.9c-1.8,2.3-4.2,4.1-6,6.3c-5.1,6.2-5.4,15.9-0.7,22.4c5.3,7.5,15.8,10.5,20,18.6c3.4,6.6,1.9,14.8,4.9,21.6   c2.8,6.2,9.5,10.3,16.3,10.6c7.3,0.3,14.1-3.3,20.8-6.3s14.4-5.2,21.1-2.4c3,1.3,5.5,3.5,7.9,5.7   C1169.5,634.2,1172.8,637.7,1175.7,641.5z").attr({fill: 'none',stroke: '#000000',"stroke-miterlimit": '10',parent: 'Balashiha','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ady');
var path_adz = rsr.path("M835.6,282.3c0.3,0.3,0.4,0.4,0.4,0.4c0.1,0.1,0.2,0.2,0.3,0.3   c5.2,5.2,9.5,11.5,15.4,16c1.6,1.2,3.2,2.3,4.8,3.5c2.1,1.6,4.1,3.5,6,5.3c14.8,14.1,29.7,28.2,44.5,42.3   c5.7,5.4,14.9,8.4,18.3,15.5c4.5,9.3,7.8,19.1,9.8,29.2c0.2,1.1,0.5,2.2,1.3,2.8c0.7,0.5,1.5,0.6,2.3,0.6   c5.2,0.3,10.7,0.6,15.5-1.6c3.1-1.3,5.6-3.6,8.1-5.7c3.5-2.9,7-5.7,10.7-8.4c1.1-0.9,2.3-1.7,3.7-2c2.8-0.6,5.4,1.2,8,2.4   c6.3,3,13.7,2.5,20.7,2.7c3.4,0.1,6.9,0.4,9.9,1.9s5.4,4.6,5.2,8c-0.1,2.3-1.6,4.5-3.6,5.5c-2.2,0.2-4.6-0.3-6.5-1.5   c-1.3-0.8-2.4-1.8-3.8-2.3c-1.5-0.6-3.1-0.5-4.6,0c-2.5,0.7-4.5,2.4-6.5,4.1c-8.2,7-16.3,14.9-20.2,24.9c-2.6-2.5-3.9-6.4-3.2-9.9   c-1.9-0.9-4.5-0.2-5.6,1.6c-0.3,0.5-0.6,1.2-1.1,1.6s-1.2,0.4-1.9,0.4c-1.5,0-3.1,0-4.6,0c-1.1,0-2.4,0-3.3-0.7   c-0.8-0.6-1.2-1.5-1.6-2.4c-1.5-3.5-3.1-6.9-4.7-10.4c-0.5-1.1-1.1-2.3-2-3.1c-2.4-2-7.6-0.8-8.1,2.2v83.2   c3.3,1.8,6.9,2.7,10.6,2.6c-3.7,0.1-7.3-0.8-10.6-2.6v-83.2c0.5-3,5.7-4.2,8.1-2.2c0.9,0.8,1.5,2,2,3.1c1.6,3.5,3.2,6.9,4.7,10.4   c0.4,0.9,0.8,1.8,1.6,2.4c0.9,0.7,2.2,0.7,3.3,0.7c1.5,0,3.1,0,4.6,0c0.7,0,1.4,0,1.9-0.4s0.8-1.1,1.1-1.6c1.1-1.8,3.7-2.5,5.6-1.6   c-0.7,3.5,0.6,7.4,3.2,9.9c3.9-10,12-17.9,20.2-24.9c2-1.7,4-3.4,6.5-4.1c1.5-0.5,3.1-0.6,4.6,0c1.4,0.5,2.5,1.5,3.8,2.3   c1.9,1.2,4.3,1.7,6.5,1.5c2-1,3.5-3.2,3.6-5.5c0.2-3.4-2.2-6.5-5.2-8s-6.5-1.8-9.9-1.9c-7-0.2-14.4,0.3-20.7-2.7   c-2.6-1.2-5.2-3-8-2.4c-1.4,0.3-2.6,1.1-3.7,2c-3.7,2.7-7.2,5.5-10.7,8.4c-2.5,2.1-5,4.4-8.1,5.7c-4.8,2.2-10.3,1.9-15.5,1.6   c-0.8,0-1.6-0.1-2.3-0.6c-0.8-0.6-1.1-1.7-1.3-2.8c-2-10.1-5.3-19.9-9.8-29.2c-3.4-7.1-12.6-10.1-18.3-15.5   c-14.8-14.1-29.7-28.2-44.5-42.3c-1.9-1.8-3.9-3.7-6-5.3c-1.6-1.2-3.2-2.3-4.8-3.5c-5.9-4.5-10.2-10.8-15.4-16   c-0.1-0.1-0.2-0.2-0.3-0.3C836,282.7,835.9,282.6,835.6,282.3").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Balashiha','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_adz');
var path_aea = rsr.path("M1125.8,659.8c-0.6-0.5-1.2-1-1.9-1.1c-4.4-0.9-9.4-2.2-11.7-6   c-4.8-1-8.4-5.8-13.3-6.2c-1.9-0.2-4.1,0.3-5.6-0.9c-1.1-0.9-1.4-2.4-1.9-3.7c-0.9-2.5-2-4.6-4.2-6.1c0.9-3.7,0.4-7.6-2.3-10.4   c-2.6-2.7-6.5-3.8-10.2-4.5c-19.9-3.9-41.2-0.3-58.8,9.9c-6.3,3.6-12.5,8.2-19.8,8.4c-6.3,0.2-12.2-2.9-17.7-6   c-3.9-2.2-8.1-4.6-10.2-8.6c-1.5-2.8-1.7-6-1.7-9.2c0.1-3.5,0.5-7.1,1.9-10.4c3-7,9.9-11.6,17-14.4c7.1-2.8,14.7-4,21.9-6.7   c0.6-0.2,1.2-0.5,1.6-1c0.6-0.8,0.1-2,0.2-3.1c0.6-9.1,1.4-13.4-0.1-19.5c-0.6-0.4-1.1-0.6-1.7-0.5c0.6-0.1,1.1,0.1,1.7,0.5   c1.5,6.1,0.7,10.4,0.1,19.5c-0.1,1.1,0.4,2.3-0.2,3.1c-0.4,0.5-1,0.8-1.6,1c-7.2,2.7-14.8,3.9-21.9,6.7c-7.1,2.8-14,7.4-17,14.4   c-1.4,3.3-1.8,6.9-1.9,10.4c0,3.2,0.2,6.4,1.7,9.2c2.1,4,6.3,6.4,10.2,8.6c5.5,3.1,11.4,6.2,17.7,6c7.3-0.2,13.5-4.8,19.8-8.4   c17.6-10.2,38.9-13.8,58.8-9.9c3.7,0.7,7.6,1.8,10.2,4.5c2.7,2.8,3.2,6.7,2.3,10.4c2.2,1.5,3.3,3.6,4.2,6.1   c0.5,1.3,0.8,2.8,1.9,3.7c1.5,1.2,3.7,0.7,5.6,0.9c4.9,0.4,8.5,5.2,13.3,6.2c2.3,3.8,7.3,5.1,11.7,6c1,0.2,1.8,1.2,2.7,1.8   c0.5,0.4,1,0.7,1.5,1.1").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Balashiha','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aea');
var path_aeb = rsr.path("M949.7,491.3c0.2,0,0.3,0,0.5,0").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Balashiha','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aeb');
var path_aec = rsr.path("M1068,752.5c-0.1,0-0.2,0-0.3,0").attr({fill: 'none',stroke: '#000000',"stroke-miterlimit": '10',parent: 'Balashiha','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aec');
var path_aed = rsr.path("M875.8,253c-0.2,0.2-0.5,0.4-0.7,0.6c1.3,0.8,2.3,1.4,3.2,2.6   c3.4,4.8,8,8.8,13.3,11.4c1.2,0.6,2.5,1.4,2.6,2.7c11.7,2,23.9,3,35.8,2.9c3.9,0,7.8-0.2,11.7-0.8c4.2-0.7,8.3-2.1,12.4-3.4   c25.8-8.6,51.7-17.1,77.5-25.7c2-0.7,4.1-1.3,5.9-2.3").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Balashiha','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aed');
var path_aee = rsr.path("M1037.1,241.1c2.3,9.2,10,16.1,17.3,22.3c3.2,2.8,6.5,5.6,10.5,6.9   s8.4,1.1,12.6,1.2c6.5,0.2,13.1,1.1,19.4,2.8c7.9,2.1,16.1,6,19.7,13.3c2.7,5.4,2.4,11.7,3.2,17.7c1,7,3.7,13.9,8.5,19.2   c4.8,5.2,11.7,8.7,18.8,8.7c10.1-0.1,18.8-6.9,26.5-13.4c3.1-2.6,6.3-5.3,10.1-6.7s8.4-1.3,11.5,1.4c7.7,6.6,17.3,10.7,23.9,18.5   c1.9,2.3,3.4,4.9,5,7.4c7.2,11.8,15.7,22.7,24.2,33.6c1.8,2.4,3.7,4.8,6.1,6.6c0.4,0.3,0.9,0.6,1.4,0.9c-3.1,6.7-5,14.5-6.7,21.7   c-0.4,1.8-0.8,3.6-0.7,5.4c0.3,4.8,3.9,8.6,6.7,12.5c6,8.5,8.5,19.5,6.6,29.8c-2.2,12.4-10.1,23-18.3,32.5   c-3.4,3.9-3.4,10.4-3.8,15.6c-0.1,1.4-0.1,2.8,0.5,4c0.6,1.1,1.7,1.8,2.8,2.4c5.2,2.6,11.3,2.5,17.1,2.4c7.3-0.2,14.6-0.4,21.9-0.6   c1.8,0,3.6-0.1,5.3,0.6c2.9,1.1,4.7,4.1,6,6.9c3.8,7.9,6,17.2,2.8,25.3c-0.8,1.9-1.8,3.7-2.7,5.5c-3.2,6.7-4.3,14.1-5.4,21.5   c-1.3,9-2.7,17.9,0,26.5s6.7,16.9,8.1,25.9c2.2,14-1.8,28.2-7.5,41.1c-4.4,10-10.4,20.1-20.4,24.6c-3.9,1.8-8.3,2.6-12.5,3.3   c-9.1,1.5-18.4,2.7-27.7,1.9c-9.2-0.8-18.5-3.8-25.5-9.9c-3.6-3.1-6.6-7-10.9-8.9c-3-1.3-6.4-1.6-9.7-1.8c-7-0.4-14.4-0.8-20.8,2.2   c-4,1.9-7.5,5.2-11.9,6c-3.7,0.7-7.7-0.5-10.4-3.2c-4.5-4.5-6.9-10-10.8-13.1").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Balashiha','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aee');
var path_aef = rsr.path("M835.6,282.3c0.3,0.3,0.4,0.4,0.4,0.4").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Balashiha','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aef');
var path_aeg = rsr.path("M868,259.5c-2.3,2-4.8,4.1-7.8,4.6c-3.2,0.6-6.6-0.7-9.6,0.6   c-2.1,0.9-3.5,2.8-4.8,4.7c-3,4.3-7,8.9-10,13.2c3-4.3,7-8.9,10-13.2c1.3-1.9,2.7-3.8,4.8-4.7c3-1.3,6.4,0,9.6-0.6   C863.2,263.6,865.7,261.5,868,259.5c2.4-2.1,4.8-4.1,7.2-6.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Balashiha','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aeg');
var path_aeh = rsr.path("M949.7,491.3c1.4,0,3.1-0.6,4.4-1.6c1.3-1.1,2.4-2.4,3.7-3.4   c2.6-1.8,5.9-2,9-1.9c3.4,0.1,7.2,0.5,9.5,3c2.2,2.4,2.4,5.9,2.7,9.2c0.3,3.2,1,6.8,3.6,8.7c3.1,2.1,7.3,1,10.8,2.3   c4,1.4,6.5,5.9,6.5,10.2s-2,8.4-4.5,11.8c-0.5,0.7-1.1,1.4-1.3,2.3c-0.4,1.2-0.1,2.5,0.2,3.8c0.7,3.1,1.5,6.3,3.5,8.7   c1,1.2,2.2,2.1,3.2,3.2c1,1.1,1.9,2.3,2.8,3.6c1.8,2.5,3.2,5.5,3.5,8.6c0.1,0,0.3,0,0.4,0").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Balashiha','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aeh');
var path_aei = rsr.path("M1014.8,806.9c-0.2,0.1-0.4,0.1-0.6,0.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Balashiha','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aei');
Balashiha.attr({'id': 'Balashiha','name': 'Balashiha'});
var Kotelniki = rsr.set();
var path_aej = rsr.path("M962.5,752.8c2.5,2.9,5.2,5.7,7.8,8.4c5.6,5.8,11.2,11.7,16.8,17.5   c8.7,9,17.4,18,26.1,27.1c0.4,0.4,0.7,0.7,1.2,1c0.1,0.1,0.3,0.1,0.4,0.2c-0.5,3.9-0.5,7.9,0.1,11.8c0.3,1.7,0.7,3.4,1.6,4.9   c2.8,4.3,9.8,5.2,11.2,10.2c0.3,1.1,0.2,2.3-0.6,3.1c-0.6,0.5-1.4,0.7-2.2,0.7c-6,0.6-12.1-0.3-18.1,0.5c-8.8,1.1-16.7,5.7-25.2,8   c-6.2,1.6-12.6,2.1-18.9,2.3c-3.5,0.1-7,0.1-10.3-1.1c-3.8-1.4-6.9-4.3-9.3-7.6c-1.3-1.7-2.4-3.5-3.4-5.4   c-2.1-3.9-3.6-8.2-4.7-12.5c-0.6-2.2-1-4.4-1.5-6.6c-0.2-0.9-0.6-2.1-0.3-3c0.2-0.9,1.1-2,1.6-2.8c4.1-8.1,5.4-17.1,5.4-26.1   c0-4.1-0.3-8.3-1.3-12.3c-0.9-4.1-2.6-8.1-3.9-12.2c-3.9-12.2-4.5-25.3-8.7-37.4c2.3,2.4,4.8,4.4,7.2,6.8   c5.1,5.2,10.1,10.4,15.3,15.5C952.6,747.6,956.9,751.6,962.5,752.8c0-0.1,0-0.2,0-0.2").attr({fill: 'none',stroke: '#000000',"stroke-miterlimit": '10',parent: 'Kotelniki','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aej');
Kotelniki.attr({'id': 'Kotelniki','name': 'Kotelniki'});
var Dzerdginsky = rsr.set();
var path_aek = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dzerdginsky','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aek');
var path_ael = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dzerdginsky','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ael');
var path_aem = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dzerdginsky','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aem');
var path_aen = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dzerdginsky','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aen');
var path_aeo = rsr.path("M933.1,812.1c-0.1,0.2-0.3,0.4-0.4,0.6c-3.1,4.8-7.1,8.8-11,13.1   c-10.9,12.1-19.7,25.8-30.6,37.8c-6.8,7.6-13.6,15.3-21.1,22.2c0-0.2-0.1-0.4-0.1-0.6").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dzerdginsky','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aeo');
var path_aep = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dzerdginsky','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aep');
var path_aeq = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dzerdginsky','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aeq');
var path_aer = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dzerdginsky','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aer');
var path_aes = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dzerdginsky','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aes');
var path_aet = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dzerdginsky','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aet');
var path_aeu = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dzerdginsky','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aeu');
var path_aev = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dzerdginsky','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aev');
var path_aew = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dzerdginsky','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aew');
var path_aex = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dzerdginsky','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aex');
var path_aey = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dzerdginsky','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aey');
var path_aez = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dzerdginsky','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aez');
var path_afa = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dzerdginsky','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_afa');
var path_afb = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dzerdginsky','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_afb');
var path_afc = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dzerdginsky','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_afc');
var path_afd = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dzerdginsky','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_afd');
var path_afe = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dzerdginsky','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_afe');
var path_aff = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dzerdginsky','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aff');
var path_afg = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dzerdginsky','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_afg');
var path_afh = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dzerdginsky','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_afh');
var path_afi = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dzerdginsky','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_afi');
var path_afj = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dzerdginsky','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_afj');
var path_afk = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dzerdginsky','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_afk');
var path_afl = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dzerdginsky','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_afl');
var path_afm = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dzerdginsky','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_afm');
var path_afn = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dzerdginsky','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_afn');
var path_afo = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dzerdginsky','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_afo');
var path_afp = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dzerdginsky','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_afp');
var path_afq = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dzerdginsky','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_afq');
var path_afr = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dzerdginsky','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_afr');
var path_afs = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dzerdginsky','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_afs');
var path_aft = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dzerdginsky','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aft');
var path_afu = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dzerdginsky','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_afu');
var path_afv = rsr.path("M869.9,885.4c0.9,7.2,3.1,13.5,6.5,19.9c2.2,4.2,4.9,8.3,8.6,11.2   c3.7,3,8.6,4.7,13.3,3.7c5.9-1.2,10.1-6.3,13.7-11.2c3.5-4.9,7.2-10.2,12.9-12.3c4.3-1.6,9-1.1,13.5-0.6c3,0.3,6.1,0.7,8.6,2.2   c2.9,1.7,4.7,4.7,6.4,7.6c5.7,9.8,10.8,20,15.2,30.5c0.3,0.6,0.5,1.3,1.1,1.7c0.3,0.3,0.8,0.4,1.2,0.5c5.7,1.6,11.9-2.3,14.8-7.5   c2.9-5.2,3.2-11.4,3.2-17.4c0-2.6-0.1-5.4,1.3-7.6c0.7-1.1,1.7-2,2.6-3c3.2-3.7,3.9-9.1,2.6-13.8s-4.3-8.8-8-12.1   c-2-1.8-4.2-3.4-5.9-5.4s-2.9-4.7-2.5-7.4c0.5-3,2.8-5.3,5.3-7.1c2.4-1.8,5.1-3.5,6.7-6c1.6-2.6,1.6-6.6-1-8.2   c-2.8,1.1-5.6,2.1-8.5,2.9c-6.2,1.6-12.6,2.1-18.9,2.3c-3.5,0.1-7,0.1-10.3-1.1c-3.8-1.4-6.9-4.3-9.3-7.6c-1.3-1.7-2.4-3.5-3.4-5.4   c-2.1-3.9-3.6-8.2-4.7-12.5c-0.6-2.2-1-4.4-1.5-6.6c-0.2-0.9-0.6-2.1-0.3-3").attr({fill: 'none',stroke: '#000000',"stroke-miterlimit": '10',parent: 'Dzerdginsky','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_afv');
Dzerdginsky.attr({'id': 'Dzerdginsky','name': 'Dzerdginsky'});
var Litkarino = rsr.set();
var path_afw = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_afw');
var path_afx = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_afx');
var path_afy = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_afy');
var path_afz = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_afz');
var path_aga = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aga');
var path_agb = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_agb');
var path_agc = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_agc');
var path_agd = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_agd');
var path_age = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_age');
var path_agf = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_agf');
var path_agg = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_agg');
var path_agh = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_agh');
var path_agi = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_agi');
var path_agj = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_agj');
var path_agk = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_agk');
var path_agl = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_agl');
var path_agm = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_agm');
var path_agn = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_agn');
var path_ago = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ago');
var path_agp = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_agp');
var path_agq = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_agq');
var path_agr = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_agr');
var path_ags = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ags');
var path_agt = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_agt');
var path_agu = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_agu');
var path_agv = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_agv');
var path_agw = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_agw');
var path_agx = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_agx');
var path_agy = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_agy');
var path_agz = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_agz');
var path_aha = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aha');
var path_ahb = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ahb');
var path_ahc = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ahc');
var path_ahd = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ahd');
var path_ahe = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ahe');
var path_ahf = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ahf');
var path_ahg = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ahg');
var path_ahh = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ahh');
var path_ahi = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ahi');
var path_ahj = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ahj');
var path_ahk = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ahk');
var path_ahl = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ahl');
var path_ahm = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ahm');
var path_ahn = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ahn');
var path_aho = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aho');
var path_ahp = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ahp');
var path_ahq = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ahq');
var path_ahr = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ahr');
var path_ahs = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ahs');
var path_aht = rsr.path("M1067.6,752.6").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aht');
var path_ahu = rsr.path("M1066.9,752.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ahu');
var path_ahv = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ahv');
var path_ahw = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ahw');
var path_ahx = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ahx');
var path_ahy = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ahy');
var path_ahz = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ahz');
var path_aia = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aia');
var path_aib = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aib');
var path_aic = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aic');
var path_aid = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aid');
var path_aie = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aie');
var path_aif = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aif');
var path_aig = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aig');
var path_aih = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aih');
var path_aii = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aii');
var path_aij = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aij');
var path_aik = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aik');
var path_ail = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ail');
var path_aim = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aim');
var path_ain = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ain');
var path_aio = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aio');
var path_aip = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aip');
var path_aiq = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aiq');
var path_air = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_air');
var path_ais = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ais');
var path_ait = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ait');
var path_aiu = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aiu');
var path_aiv = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aiv');
var path_aiw = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aiw');
var path_aix = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aix');
var path_aiy = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aiy');
var path_aiz = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aiz');
var path_aja = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aja');
var path_ajb = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ajb');
var path_ajc = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ajc');
var path_ajd = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ajd');
var path_aje = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aje');
var path_ajf = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ajf');
var path_ajg = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ajg');
var path_ajh = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ajh');
var path_aji = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aji');
var path_ajj = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ajj');
var path_ajk = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ajk');
var path_ajl = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ajl');
var path_ajm = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ajm');
var path_ajn = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ajn');
var path_ajo = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ajo');
var path_ajp = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ajp');
var path_ajq = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ajq');
var path_ajr = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ajr');
var path_ajs = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ajs');
var path_ajt = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ajt');
var path_aju = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aju');
var path_ajv = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ajv');
var path_ajw = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ajw');
var path_ajx = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ajx');
var path_ajy = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ajy');
var path_ajz = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ajz');
var path_aka = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aka');
var path_akb = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_akb');
var path_akc = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_akc');
var path_akd = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_akd');
var path_ake = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ake');
var path_akf = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_akf');
var path_akg = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_akg');
var path_akh = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_akh');
var path_aki = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aki');
var path_akj = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_akj');
var path_akk = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_akk');
var path_akl = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_akl');
var path_akm = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_akm');
var path_akn = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_akn');
var path_ako = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ako');
var path_akp = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_akp');
var path_akq = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_akq');
var path_akr = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_akr');
var path_aks = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aks');
var path_akt = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_akt');
var path_aku = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aku');
var path_akv = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_akv');
var path_akw = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_akw');
var path_akx = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_akx');
var path_aky = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aky');
var path_akz = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_akz');
var path_ala = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ala');
var path_alb = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_alb');
var path_alc = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_alc');
var path_ald = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ald');
var path_ale = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ale');
var path_alf = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_alf');
var path_alg = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_alg');
var path_alh = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_alh');
var path_ali = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ali');
var path_alj = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_alj');
var path_alk = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_alk');
var path_all = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_all');
var path_alm = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_alm');
var path_aln = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aln');
var path_alo = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_alo');
var path_alp = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_alp');
var path_alq = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_alq');
var path_alr = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_alr');
var path_als = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_als');
var path_alt = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_alt');
var path_alu = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_alu');
var path_alv = rsr.path("M1026.8,925c-11.6,0.1-23.2,0-34.8-0.1c-0.8,0-1.6,0-2.4-0.4   c-0.4-0.2-0.7-0.6-0.9-1.2h-0.4c-0.5,2.8-1.3,5.5-2.6,8c-2,3.6-5.6,6.6-9.5,7.5c-0.3,12.6,0.6,24.7,3.3,37   c1.2,5.2,2.7,10.5,5.8,14.7c1.9,2.5,4.2,4.6,6,7.1c1.4,2.1,2.4,4.6,3.9,6.6c3,3.9,7.9,5.9,12.7,7.1c4.8,1.2,9.8,1.8,14.3,3.8   c9.4,4,15.4,13.1,20.8,21.7c5,7.9,14.1,12.1,23.4,12.7c4.5,0.3,8.9-0.4,13.4-0.1c4.5,0.2,9.2,1.5,12.1,4.9c1.6,1.8,2.5,4.1,3.9,6   s3.5,3.7,5.9,3.5c3.3-0.2,5.3-3.8,5.9-7c0.5-3.3,0.2-6.7,1.6-9.7c2.1-4.5,7.3-6.5,11.1-9.8c4.8-4.1,7.2-10.7,6.4-16.9   c-0.3-2.1-1-4.2-2.4-5.8c-2.6-2.8-6.9-3-10.7-3c-6.8-0.1-13.6-0.1-20.3,1.1c-5.4,1-10.7,2.8-16.1,2.9c-1.7,0-3.6-0.1-5.1-1   c-1.7-0.9-2.8-2.5-3.8-4.1c-4.7-7.4-7.6-15.8-9.8-24.3c-3-11.2-5.2-22.8-9.4-33.6C1044.6,941.7,1036.6,931.2,1026.8,925z").attr({fill: 'none',stroke: '#000000',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_alv');
var path_alw = rsr.path("M990,843.2").attr({fill: 'none',stroke: '#000000',"stroke-miterlimit": '10',parent: 'Litkarino','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_alw');
Litkarino.attr({'id': 'Litkarino','name': 'Litkarino'});
var Oktyabrsy = rsr.set();
var path_alx = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_alx');
var path_aly = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aly');
var path_alz = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_alz');
var path_ama = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ama');
var path_amb = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_amb');
var path_amc = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_amc');
var path_amd = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_amd');
var path_ame = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ame');
var path_amf = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_amf');
var path_amg = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_amg');
var path_amh = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_amh');
var path_ami = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ami');
var path_amj = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_amj');
var path_amk = rsr.path("M1067.6,752.6").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_amk');
var path_aml = rsr.path("M1066.9,752.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aml');
var path_amm = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_amm');
var path_amn = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_amn');
var path_amo = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_amo');
var path_amp = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_amp');
var path_amq = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_amq');
var path_amr = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_amr');
var path_ams = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ams');
var path_amt = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_amt');
var path_amu = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_amu');
var path_amv = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_amv');
var path_amw = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_amw');
var path_amx = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_amx');
var path_amy = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_amy');
var path_amz = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_amz');
var path_ana = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ana');
var path_anb = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_anb');
var path_anc = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_anc');
var path_and = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_and');
var path_ane = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ane');
var path_anf = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_anf');
var path_ang = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ang');
var path_anh = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_anh');
var path_ani = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ani');
var path_anj = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_anj');
var path_ank = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ank');
var path_anl = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_anl');
var path_anm = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_anm');
var path_ann = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ann');
var path_ano = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ano');
var path_anp = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_anp');
var path_anq = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_anq');
var path_anr = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_anr');
var path_ans = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ans');
var path_ant = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ant');
var path_anu = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_anu');
var path_anv = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_anv');
var path_anw = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_anw');
var path_anx = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_anx');
var path_any = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_any');
var path_anz = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_anz');
var path_aoa = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aoa');
var path_aob = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aob');
var path_aoc = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aoc');
var path_aod = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aod');
var path_aoe = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aoe');
var path_aof = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aof');
var path_aog = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aog');
var path_aoh = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aoh');
var path_aoi = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aoi');
var path_aoj = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aoj');
var path_aok = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aok');
var path_aol = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aol');
var path_aom = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aom');
var path_aon = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aon');
var path_aoo = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aoo');
var path_aop = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aop');
var path_aoq = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aoq');
var path_aor = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aor');
var path_aos = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aos');
var path_aot = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aot');
var path_aou = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aou');
var path_aov = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aov');
var path_aow = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aow');
var path_aox = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aox');
var path_aoy = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aoy');
var path_aoz = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aoz');
var path_apa = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_apa');
var path_apb = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_apb');
var path_apc = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_apc');
var path_apd = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_apd');
var path_ape = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ape');
var path_apf = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_apf');
var path_apg = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_apg');
var path_aph = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aph');
var path_api = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_api');
var path_apj = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_apj');
var path_apk = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_apk');
var path_apl = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_apl');
var path_apm = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_apm');
var path_apn = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_apn');
var path_apo = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_apo');
var path_app = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_app');
var path_apq = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_apq');
var path_apr = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_apr');
var path_aps = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aps');
var path_apt = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_apt');
var path_apu = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_apu');
var path_apv = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_apv');
var path_apw = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_apw');
var path_apx = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_apx');
var path_apy = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_apy');
var path_apz = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_apz');
var path_aqa = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aqa');
var path_aqb = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aqb');
var path_aqc = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aqc');
var path_aqd = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aqd');
var path_aqe = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aqe');
var path_aqf = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aqf');
var path_aqg = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aqg');
var path_aqh = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aqh');
var path_aqi = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aqi');
var path_aqj = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aqj');
var path_aqk = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aqk');
var path_aql = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aql');
var path_aqm = rsr.path("M990,843.2").attr({fill: 'none',stroke: '#000000',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aqm');
var path_aqn = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aqn');
var path_aqo = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aqo');
var path_aqp = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aqp');
var path_aqq = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aqq');
var path_aqr = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aqr');
var path_aqs = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aqs');
var path_aqt = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aqt');
var path_aqu = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aqu');
var path_aqv = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aqv');
var path_aqw = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aqw');
var path_aqx = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aqx');
var path_aqy = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aqy');
var path_aqz = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aqz');
var path_ara = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ara');
var path_arb = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_arb');
var path_arc = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_arc');
var path_ard = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ard');
var path_are = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_are');
var path_arf = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_arf');
var path_arg = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_arg');
var path_arh = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_arh');
var path_ari = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ari');
var path_arj = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_arj');
var path_ark = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ark');
var path_arl = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_arl');
var path_arm = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_arm');
var path_arn = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_arn');
var path_aro = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aro');
var path_arp = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_arp');
var path_arq = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_arq');
var path_arr = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_arr');
var path_ars = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ars');
var path_art = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_art');
var path_aru = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aru');
var path_arv = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_arv');
var path_arw = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_arw');
var path_arx = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_arx');
var path_ary = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ary');
var path_arz = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_arz');
var path_asa = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_asa');
var path_asb = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_asb');
var path_asc = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_asc');
var path_asd = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_asd');
var path_ase = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ase');
var path_asf = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_asf');
var path_asg = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_asg');
var path_ash = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ash');
var path_asi = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_asi');
var path_asj = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_asj');
var path_ask = rsr.path("M1066.9,752.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ask');
var path_asl = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_asl');
var path_asm = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_asm');
var path_asn = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_asn');
var path_aso = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aso');
var path_asp = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_asp');
var path_asq = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_asq');
var path_asr = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_asr');
var path_ass = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ass');
var path_ast = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ast');
var path_asu = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_asu');
var path_asv = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_asv');
var path_asw = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_asw');
var path_asx = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_asx');
var path_asy = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_asy');
var path_asz = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_asz');
var path_ata = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ata');
var path_atb = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_atb');
var path_atc = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_atc');
var path_atd = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_atd');
var path_ate = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ate');
var path_atf = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_atf');
var path_atg = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_atg');
var path_ath = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ath');
var path_ati = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ati');
var path_atj = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_atj');
var path_atk = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_atk');
var path_atl = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_atl');
var path_atm = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_atm');
var path_atn = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_atn');
var path_ato = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ato');
var path_atp = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_atp');
var path_atq = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_atq');
var path_atr = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_atr');
var path_ats = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ats');
var path_att = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_att');
var path_atu = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_atu');
var path_atv = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_atv');
var path_atw = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_atw');
var path_atx = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_atx');
var path_aty = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aty');
var path_atz = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_atz');
var path_aua = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aua');
var path_aub = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aub');
var path_auc = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_auc');
var path_aud = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aud');
var path_aue = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aue');
var path_auf = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_auf');
var path_aug = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aug');
var path_auh = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_auh');
var path_aui = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aui');
var path_auj = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_auj');
var path_auk = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_auk');
var path_aul = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aul');
var path_aum = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aum');
var path_aun = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aun');
var path_auo = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_auo');
var path_aup = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aup');
var path_auq = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_auq');
var path_aur = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aur');
var path_aus = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aus');
var path_aut = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aut');
var path_auu = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_auu');
var path_auv = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_auv');
var path_auw = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_auw');
var path_aux = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aux');
var path_auy = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_auy');
var path_auz = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_auz');
var path_ava = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ava');
var path_avb = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_avb');
var path_avc = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_avc');
var path_avd = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_avd');
var path_ave = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ave');
var path_avf = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_avf');
var path_avg = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_avg');
var path_avh = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_avh');
var path_avi = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_avi');
var path_avj = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_avj');
var path_avk = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_avk');
var path_avl = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_avl');
var path_avm = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_avm');
var path_avn = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_avn');
var path_avo = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_avo');
var path_avp = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_avp');
var path_avq = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_avq');
var path_avr = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_avr');
var path_avs = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_avs');
var path_avt = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_avt');
var path_avu = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_avu');
var path_avv = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_avv');
var path_avw = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_avw');
var path_avx = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_avx');
var path_avy = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_avy');
var path_avz = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_avz');
var path_awa = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_awa');
var path_awb = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_awb');
var path_awc = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_awc');
var path_awd = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_awd');
var path_awe = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_awe');
var path_awf = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_awf');
var path_awg = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_awg');
var path_awh = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_awh');
var path_awi = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_awi');
var path_awj = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_awj');
var path_awk = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_awk');
var path_awl = rsr.path("M1152.8,1015.9c0.9-3,1-6.3,0.9-9.5c0-2.2-0.1-4.5-1.1-6.4   c-0.7-1.3-1.8-2.4-2.8-3.5c-3.7-3.6-7.3-7.3-11-10.9c-2.5-2.5-5-5-6.7-8c-5.2-9.4-1.7-22.3-8.6-30.6c-2.3-2.8-5.5-4.7-8.2-7.1   c-7.3-6.4-11.2-15.2-16.1-23.5c-2.2,0.5-4.5,0.7-6.8,0.9c-9.9,0.7-19.8,1.4-29.8,2.2c-2.8,0.2-5.6,0.4-8.3,1.1c-4.1,1-8,3.1-12,4.4   s-8.4,0.1-12.7,0.1c-1,0-2,0-2.9,0c9.9,6.2,17.9,16.7,22.1,27.5c4.2,10.9,6.4,22.4,9.4,33.6c2.3,8.5,5.1,16.9,9.8,24.3   c1,1.6,2.2,3.2,3.8,4.1c1.5,0.8,3.4,1,5.1,1c5.5-0.1,10.7-1.9,16.1-2.9c6.7-1.2,13.5-1.2,20.3-1.1c3.8,0,8.1,0.3,10.7,3   c1,1.1,1.7,2.5,2.1,4c3.5,2.9,8.3,4.5,12.8,5.1c3.5,0.5,7.2,0.2,10-1.9C1150.9,1020.2,1152.1,1018.2,1152.8,1015.9z").attr({fill: 'none',stroke: '#000000',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_awl');
var path_awm = rsr.path("M990,843.2").attr({fill: 'none',stroke: '#000000',"stroke-miterlimit": '10',parent: 'Oktyabrsy','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_awm');
Oktyabrsy.attr({'id': 'Oktyabrsy','name': 'Oktyabrsy'});
var Himki = rsr.set();
var path_awn = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Himki','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_awn');
var path_awo = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Himki','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_awo');
var path_awp = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Himki','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_awp');
var path_awq = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Himki','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_awq');
var path_awr = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Himki','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_awr');
var path_aws = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Himki','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aws');
var path_awt = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Himki','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_awt');
var path_awu = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Himki','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_awu');
var path_awv = rsr.path("M462.2,185.4c-0.6,0.4-1.2,0.8-1.7,1.3c-4.9,3.5-9.9,7.1-14.8,10.6   c-7.2,5.2-14.5,10.4-22.4,14.5c-16.2,8.4-34.7,11.8-53,12.1c-1.3,0-2.7,0.1-3.9,0.7c-0.9,0.5-1.5,1.4-2.1,2.2   c-2.3,3.1-5.4,6.8-5.9,10.6c0,0.1,0,0.2,0,0.3c0-0.1,0-0.2,0-0.3c-3.7-0.4-7.6,1.9-9,5.4c-0.3,0.7-0.5,1.4-1.1,1.8   c-0.4,0.3-0.9,0.4-1.4,0.4c-2.1,0.1-4.2-0.4-6-1.4c-1.9-1-3.4-2.5-5.3-3.5c-4.3-2.2-9.7-1.2-13.8-3.8c-2.7-1.7-4.3-4.8-5.1-8   c-0.8-3.1-0.8-6.4-1.1-9.6c-0.4-4.8-1.5-9.6-2.5-14.3c-1.2-5.6-2.5-11.3-5.9-15.9c-4.2-5.7-11.5-9.3-15-15.4c0-6,0-12,0-18.1   c0-1.1,0-2.1,0.4-3.1c0.4-1.1,1.2-1.9,2-2.7c2.3-2.3,4.7-4.7,7-7c0.6-0.6,1.2-1.2,1.5-2c0.5-1.5-0.2-3.1-1.2-4.2   c-1-1.2-2.2-2.2-3-3.5c-1.3-2.1-1.1-4.8-0.9-7.2c0.2-2.8,0.5-5.6,0.7-8.4c0.3-3,0.5-6,1.7-8.8c1.2-2.7,3.4-5.2,6.4-5.8   c2.9-0.6,6.5,1,7,3.9c2.1-0.7,3.4-2.9,3.7-5.1s-0.1-4.4-0.4-6.6c-0.9-7.3,0.2-14.9,3-21.6c0.4-1,0.9-2.1,1.7-2.9   c1.1-1.2,2.7-1.8,4.3-2.4c5.2-2,11-5,11.9-10.5c0.3-1.8,0-3.7-0.8-5.3c3.5-1.6,5-5.8,8.1-8.2c3-2.4,7.2-2.4,11.1-2.4   c2.9,0.1,5.9,0.1,8.8,0.2c0.8,0,1.5,0,2.2-0.2c0.8-0.3,1.5-1,2.1-1.7c2.8-3,5.5-5.9,8.3-8.9c1.1-1.2,2.2-2.4,3.6-3.1   c1.8-1,3.9-1.1,6-1.3c5.9-0.4,11.7-0.8,17.6-1.2c0.4,5.3,0.7,10.6,1.1,15.8c0.2,2.8,0.6,6,2.9,7.6c1.7,1.3,4.1,1.2,6.2,0.7   s4-1.6,6.1-2.1c2.3-0.6,4.6-0.7,7-0.5c0.7,0.1,1.3,0.2,1.8,0.6c0.6,0.5,0.8,1.5,0.9,2.3c0.7,6.1,1.4,12.2,2.1,18.4   c0.2,1.9,0.4,3.8,0,5.6c-0.5,2.2-2,4-3.1,6c-2.3,4.1-3,9.3-1,13.5c1,2.1,2.6,3.9,3.9,5.9c4.4,6.6,5.2,14.8,5.9,22.7   c0.5,6,1,12.5-2.3,17.6c-4.3,6.8-7.5,14.2-8.5,22.2c-0.5,4.2-0.5,8.8,1.6,12.5c1.3,2.5,3.5,4.4,5.7,6.1c1.8,1.3,3.7,2.5,5.7,3.4   C447.3,186.2,455,185.9,462.2,185.4z").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Himki','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_awv');
Himki.attr({'id': 'Himki','name': 'Himki'});
var Butovo = rsr.set();
Butovo.attr({'id': 'Butovo','name': 'Butovo'});
var ZAO__x28_копия2_x29_ = rsr.set();
var path_aww = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Butovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aww');
var path_awx = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Butovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_awx');
var path_awy = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Butovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_awy');
var path_awz = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Butovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_awz');
var path_axa = rsr.path("M598.7,1027.3l0.3-12.6c2.7-3.2,7.2-3.3,11.3-3.4    c3.5-0.1,7.1-0.2,10.6,0.3c3.2,0.5,6.4,1.7,9.6,2.3c3.6,0.7,7.3,0.8,11,0.9c14.1,0.3,28.1,0.7,42.2,1c1.1,1.6,1.7,3.3,2.9,4.9    c3.7,5.1,7.4,10.3,9.7,16.1c1.4,3.5,2.2,7.2,2.7,10.9c0.2,1.5,0.4,3.1,0.3,4.6c-0.2,2.1-0.8,4.2-1.9,6.1c-0.7,1.2-1.7,2.4-3,2.8    c-0.8,0.3-1.7,0.3-2.5,0.3c-1,0-2.1,0-3.1,0c-0.5,0-1,0-1.5-0.1c-0.6-0.1-1.1-0.4-1.5-0.8c-2.9-1.9-5.2-4.7-6.5-7.9    c-0.8-1.9-1.5-4.1-3.4-4.8c-1.5-0.5-3.1,0.1-4.4,1c-2,1.3-3.7,3-5,4.9c-1.2,1.8-3.2,2.6-4.5,4.3c-0.7,0.9-1.1,2-1.5,3.1    c-2.5,6.7-4.1,13.7-5.1,20.7c-0.4,2.9-0.7,5.9-0.4,8.8c0.4,3.7,1.8,7.3,3.4,10.7c0.5,1,1,2,1.7,2.8c2.1,2.1,5.5,2,8.5,2.3    c5.6,0.5,11,2.9,16.6,2.5c16.8-1.3,32.8,0.9,49.7,0.6c-0.3,1.3-0.6,2.4-1.2,3.6c-3.4,6.9-7.4,13.5-12.8,19c-2.8,2.8-5.9,5.3-9,7.8    c-6.1,4.9-12.2,9.7-18.3,14.6c-2,1.6-3.9,3.1-5.9,4.7s-4,3.2-6.2,4.5c-2.9,1.7-6,2.9-9.3,3.5c-0.7,0.1-1.4,0.2-2,0s-1-0.7-1.5-1.2    c-2.4-2.5-5.7-4.1-9.2-4.5c-1.6-0.2-3.3-0.1-4.7,0.7c-1.2,0.7-2.1,1.8-3.2,2.6c-2.8,2.2-6.6,2.7-10.1,2s-6.7-2.3-9.8-4    c-2.2-1.2-4.8-0.3-7.2,0.3c-5.8,1.5-11.6,3.6-16.3,7.4c-1.3,1-2.5,2.2-3.9,2.9c-4.4,2.3-9.7,0.8-14.6,1.5c-0.9,0.1-2,0.3-2.6-0.4").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Butovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_axa');
var path_axb = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Butovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_axb');
var path_axc = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Butovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_axc');
var path_axd = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Butovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_axd');
var path_axe = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Butovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_axe');
var path_axf = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Butovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_axf');
var path_axg = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Butovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_axg');
var path_axh = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Butovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_axh');
var path_axi = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Butovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_axi');
var path_axj = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Butovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_axj');
var path_axk = rsr.path("M598.3,1027.4c0.1,0,0.3-0.1,0.4-0.1c2.3-0.6,3.1,3.3,3.2,5.8    c0.1,2.2-0.1,4.5-1.4,6.2c-0.8,1.1-2,1.8-3.2,2.5c-6.5,4-12.6,8.8-18.2,14.1c0,8.3,0.1,16.2-3.5,23.6c-0.5,1.1-1.1,2.2-1.6,3.4    c-0.5,1.3-0.7,2.8-0.9,4.2c-0.7,4.2-1.3,8.5-2,12.7c-0.2,1-0.3,2.1,0.2,3s2,1.8,2.7,1c0.6,6.1,0.3,12.2-0.7,18.3    c-0.5,2.8-0.9,5.6-0.6,8.5c-2.4,0-4.3,0.5-6.7,0.5v14.5c2.8,3.1,5.6,6.1,8.4,9.2c0.8,0.9,1.6,1.8,2.3,2.7    c3.2,4.5,3.9,10.6,7.5,14.8c0.8,1,1.8,1.8,2.7,2.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Butovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_axk');
var path_axl = rsr.path("M598.3,1027.4").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Butovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_axl');
var path_axm = rsr.path("M598.1,1027.4").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Butovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_axm');
var path_axn = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Butovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_axn');
var path_axo = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Butovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_axo');
var path_axp = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Butovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_axp');
var path_axq = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Butovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_axq');
var path_axr = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Butovo','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_axr');
ZAO__x28_копия2_x29_.attr({'id': 'ZAO__x28_копия2_x29_','parent': 'Butovo','name': 'ZAO__x28_копия2_x29_'});
var Vidnoe = rsr.set();
var path_axs = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Vidnoe','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_axs');
var path_axt = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Vidnoe','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_axt');
var path_axu = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Vidnoe','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_axu');
var path_axv = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Vidnoe','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_axv');
var path_axw = rsr.path("M682.7,1015.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Vidnoe','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_axw');
var path_axx = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Vidnoe','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_axx');
var path_axy = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Vidnoe','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_axy');
var path_axz = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Vidnoe','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_axz');
var path_aya = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Vidnoe','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aya');
var path_ayb = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Vidnoe','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ayb');
Vidnoe.attr({'id': 'Vidnoe','name': 'Vidnoe'});
var ZAO__x28_копия3_x29_ = rsr.set();
var path_ayc = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Vidnoe','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ayc');
var path_ayd = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Vidnoe','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ayd');
var path_aye = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Vidnoe','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aye');
var path_ayf = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Vidnoe','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ayf');
var path_ayg = rsr.path("M684,1016.3c0.9,1.4,1.5,3,2.5,4.4c3.7,5.1,7.4,10.3,9.7,16.1    c1.4,3.5,2.2,7.2,2.7,10.9c0.2,1.5,0.4,3.1,0.3,4.6c-0.2,2.1-0.8,4.2-1.9,6.1c-0.7,1.2-1.7,2.4-3,2.8c-0.8,0.3-1.7,0.3-2.5,0.3    c-1,0-2.1,0-3.1,0c-0.5,0-1,0-1.5-0.1c-0.6-0.1-1.1-0.4-1.5-0.8c-2.9-1.9-5.2-4.7-6.5-7.9c-0.8-1.9-1.5-4.1-3.4-4.8    c-1.5-0.5-3.1,0.1-4.4,1c-2,1.3-3.7,3-5,4.9c-1.2,1.8-3.2,2.6-4.5,4.3c-0.7,0.9-1.1,2-1.5,3.1c-2.5,6.7-4.1,13.7-5.1,20.7    c-0.4,2.9-0.7,5.9-0.4,8.8c0.4,3.7,1.8,7.3,3.4,10.7c0.5,1,1,2,1.7,2.8c2.1,2.1,5.5,2,8.5,2.3c5.6,0.5,11,2.9,16.6,2.5    c16.8-1.3,32.8,0.9,49.7,0.6c7.5-2.6,14.4-6.7,22.2-8.2c4.3-0.9,8.8-0.9,13.2-1c12.9-0.2,25.8-0.4,38.7-0.5    c10.8-0.2,23.1-0.9,30.1-9.3c3.4-4.1,5-9.4,5.8-14.7c3.8-23.5-5.1-48.2-23.5-63.3c-0.4-1.4-2.3-1.7-3.8-1.7c-1.8,0-3.6,0-5.4,0    c-4.4,0-8.7,0.1-13,0.9c-5.6,1-11.1,3.5-15.6,6.9c-7.3-8-14.5-16-21.8-24.1c-2.1-2.4-4.3-4.7-7-6.4c-5.7,3.5-11.5,6.7-16.7,10.9    c-4.8,3.8-9,8.3-14.2,11.4c-11.4,6.8-24.1,6.1-37.3,5.3").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Vidnoe','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ayg');
var path_ayh = rsr.path("M684,1016.3c-0.1-0.2-0.2-0.3-0.3-0.5c0.7,0,1.4,0,2.1,0.1").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Vidnoe','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ayh');
var path_ayi = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Vidnoe','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ayi');
var path_ayj = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Vidnoe','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ayj');
var path_ayk = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Vidnoe','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ayk');
var path_ayl = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Vidnoe','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ayl');
var path_aym = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Vidnoe','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aym');
var path_ayn = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Vidnoe','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ayn');
var path_ayo = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Vidnoe','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ayo');
var path_ayp = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Vidnoe','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ayp');
var path_ayq = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Vidnoe','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ayq');
var path_ayr = rsr.path("M598.3,1027.4").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Vidnoe','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ayr');
var path_ays = rsr.path("M598.1,1027.4").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Vidnoe','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ays');
var path_ayt = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Vidnoe','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ayt');
var path_ayu = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Vidnoe','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ayu');
var path_ayv = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Vidnoe','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ayv');
var path_ayw = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Vidnoe','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ayw');
var path_ayx = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Vidnoe','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ayx');
ZAO__x28_копия3_x29_.attr({'id': 'ZAO__x28_копия3_x29_','parent': 'Vidnoe','name': 'ZAO__x28_копия3_x29_'});
var Dolgoprudni = rsr.set();
var path_ayy = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dolgoprudni','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ayy');
var path_ayz = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dolgoprudni','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ayz');
var path_aza = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dolgoprudni','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aza');
var path_azb = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dolgoprudni','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_azb');
var path_azc = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dolgoprudni','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_azc');
var path_azd = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dolgoprudni','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_azd');
var path_aze = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dolgoprudni','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aze');
var path_azf = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dolgoprudni','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_azf');
var path_azg = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dolgoprudni','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_azg');
var path_azh = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dolgoprudni','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_azh');
var path_azi = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dolgoprudni','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_azi');
var path_azj = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dolgoprudni','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_azj');
var path_azk = rsr.path("M462.1,185.5l0.1-0.1c-7.2,0.5-14.9,0.7-21.5-2.2   c-2-0.9-3.9-2.1-5.7-3.4c-2.2-1.7-4.3-3.6-5.7-6.1c-2.1-3.8-2.1-8.3-1.6-12.5c1-8,4.2-15.4,8.5-22.2c3.3-5.1,2.8-11.6,2.3-17.6   c-0.7-7.9-1.5-16.1-5.9-22.7c-1.3-2-2.9-3.8-3.9-5.9c-2-4.3-1.2-9.4,1-13.5c1.1-2,2.5-3.8,3.1-6c0.4-1.8,0.2-3.7,0-5.6   c-0.7-6.1-1.4-12.2-2.1-18.4c-0.1-0.8-0.2-1.8-0.9-2.3c-0.7-0.6-0.6-1.4-0.8-2.3c-0.2-0.5-0.3-1.1-0.4-1.6   c-0.4-1.9-0.7-3.8-1.1-5.7c-0.8-3.9-1.5-8-0.9-11.9c2.7-0.7,5.3-1.1,8.1-1.5c3.2-0.4,6.4-0.7,9.6-1.1c11.6-1.3,23.5-2.7,35-0.8   c2.2,0.3,4.4,0.8,6.6,1.1c3.9,0.4,7.8,0.2,11.6,1.2c0.8,0.2,1.7,0.5,2.3,1.2c0.5,0.5,0.9,1.2,1.2,1.9c1.9,4.4,3.5,8.8,4.9,13.4   c-0.5,0.3-1,0.6-1.4,0.9c-0.4,0.3-0.9,0.6-1,1.1c-0.1,0.4,0.1,0.8,0.3,1.1c2.9,5.9,6.2,12,9.1,17.8c-11,1.7-21.7,5.5-31.3,11.1   c-0.7,0.4-1.4,0.8-1.8,1.5c-0.4,0.6-0.5,1.3-0.5,2.1c-0.1,3.8,1.6,7.5,3.1,11c3.3,8.3,5.1,17,7,25.7c3.5,16.7,2,36.8,11.2,51.1   c-14.3,4.1-26.7,12.7-38.8,21.3").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dolgoprudni','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_azk');
var path_azl = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dolgoprudni','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_azl');
var path_azm = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dolgoprudni','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_azm');
var path_azn = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dolgoprudni','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_azn');
var path_azo = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Dolgoprudni','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_azo');
Dolgoprudni.attr({'id': 'Dolgoprudni','name': 'Dolgoprudni'});
var sadkoltso = rsr.set();
sadkoltso.attr({'id': 'sadkoltso','name': 'sadkoltso'});
var UZAO__x28_копия_x29__1_ = rsr.set();
var circle_azp = rsr.circle(621, 556, 55).attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'circle_azp');
var path_azq = rsr.path("M469.9,543.9c0.1,0.1,0.1,0.2,0.2,0.3").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_azq');
var path_azr = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_azr');
var path_azs = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_azs');
var path_azt = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_azt');
var path_azu = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_azu');
var path_azv = rsr.path("M470.1,544").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_azv');
var path_azw = rsr.path("M479.7,534.8c0.1,0.1,0.3,0.3,0.4,0.4c-0.6,0.4-1.1,0.9-1.6,1.4    c-0.7,0.7-1.2,1.5-1.8,2.2c-0.7,0.8-1.4,1.6-2.2,2.4c-1,1-2.1,2-3.2,2.8c-0.4,0.3-1.3,0-1.3-0.2c1.8,2.4,3.1,5,3.5,7.7    c0.8,6.3,2.6,12.6,6.3,17.8c3.7,5.2,9.5,9.1,15.8,9.5c7.1,0.4,13.7-3.5,19.3-7.9s10.9-9.4,17.6-11.8c3.4-1.2,7.1-1.8,10.7-2.1    c1.8-0.2,3.7-0.4,5.4,0.4c1.3,0.6,2.4,1.6,3.3,2.8c3.4,4.4,4.8,10.2,3.8,15.7c-0.8,4.4-3.2,8.4-5.5,12.3    c-4.2,7.2-8.6,14.4-14.6,20.2c-3.3,3.2-7.1,5.9-10.8,8.6c-3.7,2.6-7.4,5.2-11,7.9c-1.4,1-2.9,2.1-3.9,3.6    c-1.6,2.6-1.4,5.9-1.1,8.9c0.4,3.7,0.4,7.2,0.3,11c0,0.9,0,1.7,0.3,2.6c0.2,0.7,0.6,1.4,1.1,2c2.6,3.8,5.9,7.3,9.9,9.6    c2.7,1.6,5.8,2.6,8.9,2.7c1.4,0.1,2.4,1.2,2.4,2.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_azw');
var path_azx = rsr.path("M478.4,533.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_azx');
var path_azy = rsr.path("M477,531.9").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_azy');
var path_azz = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_azz');
var path_baa = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_baa');
var path_bab = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bab');
var path_bac = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bac');
var path_bad = rsr.path("M571.8,454.1c0.7,6.9,0.5,13.8-0.9,20.4c-1.2,5.3-3.1,10.5-6.4,14.9    c-2.9,3.8-6.9,6.8-11.2,9c-7,3.5-15.4,3-23.1,4.4c-5.8,1-11.2,3.6-16.5,6.1c-1.6,0.8-3.2,1.5-4.8,2.5c-5,3.1-8.5,8.1-12.1,12.8    c-3.1,4.1-6.3,8.1-9.6,12c-0.3,0.3-0.5,0.6-0.9,0.8c-0.3,0.1-0.6,0.2-0.9,0.3c-2.1,0.3-3.9-0.6-5.4-2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bad');
var path_bae = rsr.path("M470.4,521.6").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bae');
var path_baf = rsr.path("M480.1,535.1c-0.1-0.1-0.3-0.2-0.4-0.4").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_baf');
var path_bag = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bag');
var path_bah = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bah');
var path_bai = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bai');
var path_baj = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_baj');
var path_bak = rsr.path("M664.9,460.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bak');
var path_bal = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bal');
var path_bam = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bam');
var path_ban = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ban');
var path_bao = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bao');
var path_bap = rsr.path("M754.4,500.7c-2.7-4-5.4-8-9-11.3c-6.5-6-15.1-9-23.5-11.5    c-13.5-4.1-27.3-7.3-41.2-9.7c-5.6-1-12.5-2.5-15.8-7.2c-9.7-3.8-17.5-12-24.2-20l-0.2,14.1H618c0.7,8.3,0.1,16.6-1.7,24.7    c-4.4-0.6-9.2,0.6-13.2-1.3c-4.3-2-6.4-6.8-8.1-11.2c-1.5-3.9-3.1-7.8-4.6-11.7c-0.2-0.4-0.3-0.8-0.7-1c-0.2-0.1-0.5-0.1-0.8-0.1    c-5.7,0-11.2,0.3-16.9,0.3c0-0.1,0-0.3,0-0.4").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bap');
var path_baq = rsr.path("M664.9,460.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_baq');
var path_bar = rsr.path("M664.9,459.3").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bar');
var path_bas = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bas');
var path_bat = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bat');
var path_bau = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bau');
var path_bav = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bav');
var path_baw = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_baw');
var path_bax = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bax');
var path_bay = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bay');
var path_baz = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_baz');
var path_bba = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bba');
var path_bbb = rsr.path("M679.2,624.4").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bbb');
var path_bbc = rsr.path("M679.6,625.4").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bbc');
var path_bbd = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bbd');
var path_bbe = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bbe');
var path_bbf = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bbf');
var path_bbg = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bbg');
var path_bbh = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bbh');
var path_bbi = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bbi');
var path_bbj = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bbj');
var path_bbk = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bbk');
var path_bbl = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bbl');
var path_bbm = rsr.path("M564.3,664.2c5.3-0.2,8.6-5.5,11.6-9.9c3.2-4.7,7-9,11.4-12.6    c1.2-1,2.4-2,3.9-2.5c1.7-0.5,3.5-0.4,5.2-0.3c9.2,0.5,18.3-0.3,27.5-1.2c4.9-0.5,9.7-0.9,14.5-1.9c4.5-0.9,9.1-2.1,13.7-1.6    c1.8,0.2,4.2,0.4,4.9-1.3c0.2-0.6,0.1-1.3,0.1-2c-0.4-3.5-0.2-7,0.8-10.4c0.2-0.6,0.4-1.3,0.9-1.8c0.6-0.5,1.5-0.5,2.2-0.6    c3.8-0.1,7.8-0.1,10.9,1.9c2.3,1.5,4.4,3.8,7.2,3.7c-0.6-2-0.7-4.2-0.6-6.3c0-1.6,0.1-3.3,0.9-4.8c0.8-1.4,2.4-2.5,4-2.2    c2.5,3.9,4.9,7.8,7.4,11.7c0.2,0.4,0.5,0.8,0.9,1c0.6,0.3,1.3,0.1,1.9-0.2c3.6-1.3,7.3-2.6,10.9-3.9c2.3-0.8,4.8-1.8,6.4-3.6    c2.2-2.6,2.5-6.3,2.6-9.7c2,2.6,4.2,5.3,7,7c2.8,1.8,6.4,2.6,9.5,1.3c2.8-1.2,4.7-3.9,5.4-6.8s0.5-6-0.1-8.9    c-2.2-11-9-21-18.5-27.1c-4-2.6-8.5-4.4-12.9-6.3c-3-1.3-4.3-3.7-7.3-5c-0.7,0.2-1.3,0.4-2,0.6c0.3-5.9,0.5-11.7,0.8-17.6    c0-0.5,0.1-1.1,0.4-1.5c0.3-0.4,0.9-0.5,1.4-0.6c5.3-0.7,11.6,1.2,15.3-2.7c1.4-1.4,2-3.3,2.6-5.2c1.4-4.1,2.7-8.3,4.1-12.4    c0.5-1.6,1.1-3.3,2.3-4.6c1.2-1.2,3.3-1.8,4.7-0.8c0.7,0.5,1.1,1.2,1.7,1.7c2.7,2.4,7,0.4,9.9-1.8c5.9-4.4,11.4-9.5,16.3-15    c0.1,0.2,0.2,0.3,0.3,0.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bbm');
var path_bbn = rsr.path("M564.9,664.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bbn');
var path_bbo = rsr.path("M564.9,664.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bbo');
var path_bbp = rsr.path("M685.8,1015.9c-3.1-0.1-6.1-0.1-9.2-0.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bbp');
var path_bbq = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bbq');
var path_bbr = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bbr');
var path_bbs = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bbs');
var path_bbt = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bbt');
var path_bbu = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bbu');
var path_bbv = rsr.path("M531.6,666.9c0.5-0.1,0.8-0.5,1.1-0.9s0.6-0.5,1-0.8    c0.6-0.5,0.9-0.7,1.2-0.6").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bbv');
var path_bbw = rsr.path("M388.8,851.5c0.3-0.4,0.6-0.7,0.5-1.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bbw');
var path_bbx = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bbx');
var path_bby = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bby');
var path_bbz = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bbz');
var path_bca = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bca');
var path_bcb = rsr.path("M534,664.8c0.7-0.4,1.5-0.6,2.4-0.7c7-1,14.5-2.1,19.8-6.8    c0.8-0.7,1.6-1.5,2.7-1.5c0.7,0,1.3,0.3,1.8,0.7c2.4,1.7,3.8,5.1,3.6,8.1").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bcb');
var path_bcc = rsr.path("M780.1,231").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bcc');
var path_bcd = rsr.path("M775.1,227.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bcd');
var path_bce = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bce');
var path_bcf = rsr.path("M707.4,194.7").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bcf');
var path_bcg = rsr.path("M659.2,189").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'sadkoltso','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bcg');
UZAO__x28_копия_x29__1_.attr({'id': 'UZAO__x28_копия_x29__1_','parent': 'sadkoltso','name': 'UZAO__x28_копия_x29__1_'});
var Krasnogorsk = rsr.set();
var path_bch = rsr.path("M255.7,513.8").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Krasnogorsk','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bch');
var path_bci = rsr.path("M256.1,519.2").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Krasnogorsk','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bci');
var path_bcj = rsr.path("M255.4,509").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Krasnogorsk','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bcj');
var path_bck = rsr.path("M255.6,511.5").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Krasnogorsk','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bck');
var path_bcl = rsr.path("M80.1,442.4c-0.7-1-1.1-2.1-1.2-3.2c0-0.5,0-1.1-0.2-1.6   c-0.1-0.5-0.3-0.9-0.6-1.3c-0.5-0.9-1-1.8-1.5-2.7c-1.1-2-1.7-5-4-5h-24c-5.3-5.1-10.3-10.3-15.2-15.8c-2.3-2.6-4.2-5.2-7-7.2   v-26.8c-1.2-2.1-2.1-4.4-2.8-6.8c-1.3-4.3-3.1-8.4-3-12.9c0.1-3.9,2.3-7.4,4.4-10.8c0.5-0.9,1.1-1.7,1.6-2.6c0.6-1,1.3-2,2.2-2.6   c2-1.4,4.8-0.9,7.3-1.1c2-0.2,4-1,6-1.1c1.5-0.1,3,0.1,4.5-0.1c2.2-0.2,4.3-1.2,6.4-2.2c0.8-0.4,1.6-0.8,2.3-1.4   c0.5-0.5,0.9-1.1,1.3-1.6c0.8-1.2,1.6-2.4,2.5-3.6c0.6-0.9,0.5-1.6,1.1-2.4c3.4-4.5,5.8-9.7,7-15.2c0.6-2.7,0.9-5.4,1.7-8   c0.5-1.8,1.3-3.6,1.7-5.5c0.6-3.1-0.8-6.2-0.2-9.3c0.5-2.9,1.4-5.7,2.6-8.3c0.6-1.4,1.3-2.7,2.2-3.9c1.1-1.4,2.4-2.6,3.7-3.7   c4.3-3.8,8.9-7.2,13.7-10.3c2.2-1.4,4.5-2.8,7.1-3.7c3.7-1.3,7.7-1.4,11.6-2c8.3-1.3,17.6-4,22.8-10.7c0.9-1.1,2.6-1.3,4-1.3   c5.8-0.1,11.6-0.1,17.3,0.7c1,0.1,2,0.3,2.9,0.8c0.8,0.4,1.5,1.1,2.1,1.8c0.8,0.9,1.5,1.9,2.2,3c0.9,1.3,1.8,2.6,2.8,4   c0.8,1.1,1.6,2.3,2.3,3.4c0.8,1.4,1.5,2.8,2.2,4.3c3,6.6,3.4,14.3,5.5,21.2c1.2,3.8,2.8,7.5,4.7,11c0.9,1.6,1.9,3.2,3.6,4   c1.2,0.5,2.6,0.5,3.9,0.5c2.2-0.1,4.3-0.1,6.5-0.2c0.9,0,1.9,0,2.8-0.3c1.6-0.4,2.9-1.3,4.3-2.2c5.5-3.7,11.4-7.2,17.9-8.7   c0.1,4.5,0.2,9,0.3,13.5c0,2,0,4.3-1.4,5.7c-1.4,1.4-3.8,1.5-5.3,2.9c-1,0.9-1.4,2.3-1.5,3.6c-0.1,1.7,0.2,3.6,1.6,4.6   c1.4,1.1,3.4,1,5.1,0.9c4-0.2,8.8,0.6,10.7,4.2c1.8,3.4-0.4,8.2-4.2,9c-1.3,0.3-2.8,0.1-3.8,1c-0.9,0.9-0.9,2.5,0,3.4   c0.4,0.3,0.8,0.5,1.2,0.8c2.5,1.9,0.7,5.9,1.5,8.9c0.4,1.6,1.6,2.9,2.4,4.4c3.2,5.3,2.5,12,3.3,18.1c0.4,2.5,1,5,1.7,7.4   c0.5,1.7,1,3.5,2.3,4.7c1.7,1.5,4.4,1.6,6.5,0.8c2.2-0.8,3.9-2.4,5.7-3.9c7.6-6.5,15.9-12.2,24.7-16.9c2.9-1.6,6-3.1,9.3-3.6   c3-0.5,6-0.1,9,0.3c1.2,0.2,2.5,0.4,3.3,1.3c0.4,0.5,0.6,1.2,0.7,1.9c0.7,3.3,1.6,6.7,1.2,10.1c-1,9.3-2,18.6-2.9,27.9   c-0.3,2.7-0.6,5.5-2.4,7.6c-0.9,1.1-2.1,2.2-3.3,3.1c-0.7-0.3-1.5-0.4-2.2-0.7c-4.2-1.5-7-6.8-11.4-6.3c-0.3,0-0.6,0.1-0.8,0.4   c-0.2,0.2-0.2,0.6-0.2,0.9c-0.1,1.5-0.1,3-0.1,4.5c-6.5-0.8-13.2,0.4-19,3.5c-2.1,1.1-4,2.4-5.9,3.7c-1.9,1.3-3.6,2.5-5.5,3.8   c-3.2-1.6-7.1-2.5-10.5-1.4c-6.3,2.1-8.9,9.8-14.7,12.9c-6.6,3.5-15,0-22.2,2.1c-3.4,1-6.3,3.3-9.2,5.5c-2.5,1.9-5,3.9-7.5,5.8   c-1.7-1.9-3.5-3.7-5.6-5.2c-0.6-0.4-1.3-0.9-1.9-1.3c-1.1-0.7-2.2-1.4-3.2-2.1c1.4-3.8,1.8-8,1.2-12c-0.1-0.5-0.2-1.1-0.6-1.4   c-0.3-0.2-0.7-0.3-1.1-0.3c-3.4-0.2-6.7,1.5-9.7,3.1c-2.5,1.3-5.1,2.8-6.3,5.4c-0.2,0.5-0.4,1.1-0.5,1.7   c-6.2,0.6-12.4,3.3-16.9,7.7c-3.7,3.6-6.5,8.3-10.8,11.1c-4.6,3-10.4,3.5-15.9,3.9c-1.9,0.1-3.9,0.3-5.7-0.4   c-0.9-0.3-1.6-0.8-2.4-1.2c-1.6-0.9-3.1-1.9-4.7-2.8C87,450.6,83.2,446.9,80.1,442.4z").attr({fill: 'none',stroke: '#010202',"stroke-miterlimit": '10',parent: 'Krasnogorsk','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bcl');
Krasnogorsk.attr({'id': 'Krasnogorsk','name': 'Krasnogorsk'});


var rsrGroups = [TSAO,ZAO,SZAO,SAO,SVAO,VAO,UVAO,UAO,UZAO_1_,ZAO__x28_\u043a\u043e\u043f\u0438\u044f_x29_,Korolev,Shelkovo,Mitishi,Reutov,Zheldor,Lubertsi,Balashiha,Kotelniki,Dzerdginsky,Litkarino,Oktyabrsy,Himki,Butovo,ZAO__x28_\u043a\u043e\u043f\u0438\u044f2_x29_,Vidnoe,ZAO__x28_\u043a\u043e\u043f\u0438\u044f3_x29_,Dolgoprudni,sadkoltso,UZAO__x28_\u043a\u043e\u043f\u0438\u044f_x29__1_,Krasnogorsk];
TSAO.push(
    circle_a
);
ZAO.push(
    path_b
);
SZAO.push(
    path_c ,
    path_d ,
    path_e ,
    path_f ,
    path_g ,
    path_h ,
    path_i ,
    path_j
);
SAO.push(
    path_k ,
    path_l ,
    path_m ,
    path_n ,
    path_o
);
SVAO.push(
    path_p ,
    path_q ,
    path_r ,
    path_s ,
    path_t
);
VAO.push(
    path_u ,
    path_v ,
    path_w ,
    path_x ,
    path_y ,
    path_z ,
    path_aa ,
    path_ab ,
    path_ac ,
    path_ad ,
    path_ae ,
    path_af ,
    path_ag ,
    path_ah ,
    path_ai ,
    path_aj ,
    path_ak ,
    path_al ,
    path_am ,
    path_an ,
    path_ao ,
    path_ap ,
    path_aq ,
    path_ar ,
    path_as ,
    path_at ,
    path_au ,
    path_av ,
    path_aw ,
    path_ax ,
    path_ay ,
    path_az ,
    path_ba ,
    path_bb ,
    path_bc ,
    path_bd ,
    path_be ,
    path_bf ,
    path_bg ,
    path_bh ,
    path_bi ,
    path_bj ,
    path_bk ,
    path_bl ,
    path_bm ,
    path_bn ,
    path_bo ,
    path_bp ,
    path_bq ,
    path_br ,
    path_bs ,
    path_bt ,
    path_bu ,
    path_bv ,
    path_bw ,
    path_bx ,
    path_by ,
    path_bz ,
    path_ca ,
    path_cb ,
    path_cc ,
    path_cd ,
    path_ce ,
    path_cf ,
    path_cg ,
    path_ch ,
    path_ci ,
    path_cj ,
    path_ck ,
    path_cl ,
    path_cm ,
    path_cn ,
    path_co ,
    path_cp ,
    path_cq ,
    path_cr ,
    path_cs ,
    path_ct ,
    path_cu ,
    path_cv ,
    path_cw ,
    path_cx ,
    path_cy ,
    path_cz ,
    path_da ,
    path_db ,
    path_dc ,
    path_dd ,
    path_de ,
    path_df ,
    path_dg ,
    path_dh ,
    path_di ,
    path_dj ,
    path_dk ,
    path_dl ,
    path_dm ,
    path_dn ,
    path_do ,
    path_dp ,
    path_dq ,
    path_dr ,
    path_ds ,
    path_dt ,
    path_du ,
    path_dv ,
    path_dw ,
    path_dx ,
    path_dy ,
    path_dz ,
    path_ea ,
    path_eb ,
    path_ec ,
    path_ed ,
    path_ee ,
    path_ef ,
    path_eg ,
    path_eh ,
    path_ei ,
    path_ej ,
    path_ek ,
    path_el ,
    path_em ,
    path_en ,
    path_eo ,
    path_ep ,
    path_eq ,
    path_er ,
    path_es ,
    path_et ,
    path_eu ,
    path_ev ,
    path_ew ,
    path_ex ,
    path_ey ,
    path_ez ,
    path_fa ,
    path_fb ,
    path_fc ,
    path_fd ,
    path_fe ,
    path_ff ,
    path_fg ,
    path_fh ,
    path_fi ,
    path_fj ,
    path_fk ,
    path_fl ,
    path_fm ,
    path_fn ,
    path_fo ,
    path_fp ,
    path_fq ,
    path_fr ,
    path_fs ,
    path_ft ,
    path_fu ,
    path_fv ,
    path_fw ,
    path_fx ,
    path_fy ,
    path_fz ,
    path_ga ,
    path_gb ,
    path_gc ,
    path_gd ,
    path_ge ,
    path_gf ,
    path_gg ,
    path_gh ,
    path_gi ,
    path_gj ,
    path_gk ,
    path_gl ,
    path_gm ,
    path_gn ,
    path_go ,
    path_gp ,
    path_gq ,
    path_gr ,
    path_gs ,
    path_gt ,
    path_gu ,
    path_gv ,
    path_gw ,
    path_gx ,
    path_gy ,
    path_gz ,
    path_ha ,
    path_hb ,
    path_hc ,
    path_hd ,
    path_he ,
    path_hf ,
    path_hg ,
    path_hh ,
    path_hi ,
    path_hj ,
    path_hk ,
    path_hl ,
    path_hm ,
    path_hn ,
    path_ho ,
    path_hp ,
    path_hq ,
    path_hr ,
    path_hs ,
    path_ht ,
    path_hu ,
    path_hv ,
    path_hw ,
    path_hx ,
    path_hy ,
    path_hz ,
    path_ia ,
    path_ib ,
    path_ic ,
    path_id ,
    path_ie ,
    path_if ,
    path_ig ,
    path_ih ,
    path_ii ,
    path_ij ,
    path_ik ,
    path_il ,
    path_im ,
    path_in ,
    path_io ,
    path_ip ,
    path_iq ,
    path_ir ,
    path_is ,
    path_it ,
    path_iu ,
    path_iv ,
    path_iw ,
    path_ix ,
    path_iy ,
    path_iz ,
    path_ja ,
    path_jb ,
    path_jc ,
    path_jd ,
    path_je ,
    path_jf ,
    path_jg ,
    path_jh ,
    path_ji ,
    path_jj ,
    path_jk ,
    path_jl ,
    path_jm ,
    path_jn ,
    path_jo ,
    path_jp ,
    path_jq ,
    path_jr ,
    path_js ,
    path_jt ,
    path_ju ,
    path_jv ,
    path_jw ,
    path_jx ,
    path_jy ,
    path_jz ,
    path_ka ,
    path_kb ,
    path_kc ,
    path_kd ,
    path_ke ,
    path_kf ,
    path_kg ,
    path_kh ,
    path_ki ,
    path_kj ,
    path_kk ,
    path_kl ,
    path_km ,
    path_kn ,
    path_ko ,
    path_kp ,
    path_kq ,
    path_kr ,
    path_ks ,
    path_kt ,
    path_ku ,
    path_kv ,
    path_kw ,
    path_kx ,
    path_ky ,
    path_kz ,
    path_la ,
    path_lb ,
    path_lc ,
    path_ld ,
    path_le ,
    path_lf ,
    path_lg ,
    path_lh ,
    path_li ,
    path_lj ,
    path_lk ,
    path_ll ,
    path_lm ,
    path_ln ,
    path_lo ,
    path_lp ,
    path_lq ,
    path_lr ,
    path_ls ,
    path_lt ,
    path_lu ,
    path_lv ,
    path_lw ,
    path_lx ,
    path_ly ,
    path_lz ,
    path_ma ,
    path_mb ,
    path_mc ,
    path_md ,
    path_me ,
    path_mf ,
    path_mg ,
    path_mh ,
    path_mi ,
    path_mj ,
    path_mk ,
    path_ml ,
    path_mm ,
    path_mn ,
    path_mo ,
    path_mp ,
    path_mq ,
    path_mr ,
    path_ms ,
    path_mt ,
    path_mu ,
    path_mv ,
    path_mw ,
    path_mx ,
    path_my ,
    path_mz ,
    path_na ,
    path_nb ,
    path_nc ,
    path_nd ,
    path_ne ,
    path_nf ,
    path_ng ,
    path_nh ,
    path_ni ,
    path_nj ,
    path_nk ,
    path_nl ,
    path_nm ,
    path_nn ,
    path_no ,
    path_np ,
    path_nq ,
    path_nr ,
    path_ns ,
    path_nt ,
    path_nu ,
    path_nv ,
    path_nw ,
    path_nx ,
    path_ny ,
    path_nz ,
    path_oa ,
    path_ob ,
    path_oc ,
    path_od ,
    path_oe ,
    path_of ,
    path_og ,
    path_oh ,
    path_oi ,
    path_oj ,
    path_ok ,
    path_ol ,
    path_om ,
    path_on ,
    path_oo ,
    path_op ,
    path_oq ,
    path_or ,
    path_os ,
    path_ot ,
    path_ou ,
    path_ov ,
    path_ow ,
    path_ox ,
    path_oy ,
    path_oz ,
    path_pa ,
    path_pb ,
    path_pc ,
    path_pd ,
    path_pe ,
    path_pf ,
    path_pg ,
    path_ph ,
    path_pi ,
    path_pj ,
    path_pk ,
    path_pl ,
    path_pm ,
    path_pn ,
    path_po ,
    path_pp ,
    path_pq ,
    path_pr ,
    path_ps ,
    path_pt ,
    path_pu ,
    path_pv ,
    path_pw ,
    path_px ,
    path_py ,
    path_pz ,
    path_qa ,
    path_qb ,
    path_qc ,
    path_qd ,
    path_qe ,
    path_qf ,
    path_qg ,
    path_qh ,
    path_qi ,
    path_qj ,
    path_qk ,
    path_ql ,
    path_qm ,
    path_qn ,
    path_qo ,
    path_qp ,
    path_qq ,
    path_qr ,
    path_qs ,
    path_qt ,
    path_qu ,
    path_qv ,
    path_qw ,
    path_qx ,
    path_qy ,
    path_qz ,
    path_ra ,
    path_rb ,
    path_rc ,
    path_rd ,
    path_re ,
    path_rf ,
    path_rg ,
    path_rh ,
    path_ri ,
    path_rj ,
    path_rk ,
    path_rl ,
    path_rm ,
    path_rn ,
    path_ro ,
    path_rp ,
    path_rq ,
    path_rr ,
    path_rs ,
    path_rt ,
    path_ru ,
    path_rv ,
    path_rw ,
    path_rx ,
    path_ry ,
    path_rz ,
    path_sa ,
    path_sb ,
    path_sc ,
    path_sd ,
    path_se ,
    path_sf ,
    path_sg ,
    path_sh ,
    path_si ,
    path_sj ,
    path_sk ,
    path_sl ,
    path_sm ,
    path_sn ,
    path_so ,
    path_sp ,
    path_sq ,
    path_sr ,
    path_ss ,
    path_st ,
    path_su ,
    path_sv ,
    path_sw ,
    path_sx ,
    path_sy ,
    path_sz ,
    path_ta ,
    path_tb ,
    path_tc
);
UVAO.push(
    path_td ,
    path_te ,
    path_tf ,
    path_tg ,
    path_th ,
    path_ti ,
    path_tj ,
    path_tk ,
    path_tl ,
    path_tm
);
UAO.push(
    path_tn ,
    path_to ,
    path_tp ,
    path_tq ,
    path_tr ,
    path_ts ,
    path_tt ,
    path_tu ,
    path_tv ,
    path_tw
);
// UZAO_1_.push(
// );
ZAO__x28_копия_x29_.push(
    path_tx ,
    path_ty ,
    path_tz ,
    path_ua ,
    path_ub ,
    path_uc ,
    path_ud ,
    path_ue ,
    path_uf ,
    path_ug ,
    path_uh
);
Korolev.push(
    path_ui ,
    path_uj ,
    path_uk ,
    path_ul ,
    path_um ,
    path_un ,
    path_uo ,
    path_up ,
    path_uq ,
    path_ur ,
    path_us ,
    path_ut ,
    path_uu ,
    path_uv
);
Shelkovo.push(
    path_uw ,
    path_ux ,
    path_uy ,
    path_uz ,
    path_va ,
    path_vb ,
    path_vc ,
    path_vd ,
    path_ve ,
    path_vf ,
    path_vg ,
    path_vh ,
    path_vi ,
    path_vj ,
    path_vk ,
    path_vl ,
    path_vm ,
    path_vn ,
    path_vo ,
    path_vp ,
    path_vq ,
    path_vr ,
    path_vs ,
    path_vt ,
    path_vu ,
    path_vv ,
    path_vw ,
    path_vx ,
    path_vy ,
    path_vz ,
    path_wa ,
    path_wb ,
    path_wc ,
    path_wd ,
    path_we ,
    path_wf ,
    path_wg ,
    path_wh ,
    path_wi ,
    path_wj ,
    path_wk ,
    path_wl ,
    path_wm ,
    path_wn ,
    path_wo ,
    path_wp ,
    path_wq ,
    path_wr ,
    path_ws ,
    path_wt ,
    path_wu ,
    path_wv ,
    path_ww ,
    path_wx ,
    path_wy ,
    path_wz ,
    path_xa ,
    path_xb ,
    path_xc ,
    path_xd ,
    path_xe ,
    path_xf ,
    path_xg ,
    path_xh ,
    path_xi ,
    path_xj ,
    path_xk ,
    path_xl ,
    path_xm ,
    path_xn ,
    path_xo ,
    path_xp ,
    path_xq ,
    path_xr ,
    path_xs
);
Mitishi.push(
    path_xt ,
    path_xu
);
Reutov.push(
    path_xv ,
    path_xw ,
    path_xx ,
    path_xy ,
    path_xz ,
    path_ya ,
    path_yb ,
    path_yc ,
    path_yd ,
    path_ye ,
    path_yf ,
    path_yg ,
    path_yh ,
    path_yi ,
    path_yj ,
    path_yk ,
    path_yl ,
    path_ym ,
    path_yn ,
    path_yo ,
    path_yp ,
    path_yq ,
    path_yr ,
    path_ys ,
    path_yt ,
    path_yu ,
    path_yv ,
    path_yw ,
    path_yx ,
    path_yy ,
    path_yz ,
    path_za ,
    path_zb ,
    path_zc ,
    path_zd ,
    path_ze ,
    path_zf ,
    path_zg ,
    path_zh ,
    path_zi ,
    path_zj ,
    path_zk ,
    path_zl ,
    path_zm ,
    path_zn ,
    path_zo ,
    path_zp ,
    path_zq ,
    path_zr ,
    path_zs ,
    path_zt ,
    path_zu ,
    path_zv ,
    path_zw ,
    path_zx ,
    path_zy ,
    path_zz ,
    path_aaa ,
    path_aab ,
    path_aac
);
Zheldor.push(
    path_aad ,
    path_aae ,
    path_aaf ,
    path_aag ,
    path_aah ,
    path_aai ,
    path_aaj ,
    path_aak ,
    path_aal ,
    path_aam ,
    path_aan ,
    path_aao ,
    path_aap ,
    path_aaq ,
    path_aar ,
    path_aas ,
    path_aat ,
    path_aau ,
    path_aav ,
    path_aaw ,
    path_aax ,
    path_aay ,
    path_aaz ,
    path_aba ,
    path_abb ,
    path_abc ,
    path_abd ,
    path_abe ,
    path_abf ,
    path_abg ,
    path_abh ,
    path_abi ,
    path_abj ,
    path_abk ,
    path_abl ,
    path_abm ,
    path_abn ,
    path_abo ,
    path_abp ,
    path_abq ,
    path_abr ,
    path_abs ,
    path_abt ,
    path_abu ,
    path_abv ,
    path_abw ,
    path_abx ,
    path_aby ,
    path_abz
);
Lubertsi.push(
    path_aca ,
    path_acb ,
    path_acc ,
    path_acd ,
    path_ace ,
    path_acf ,
    path_acg ,
    path_ach ,
    path_aci ,
    path_acj ,
    path_ack ,
    path_acl ,
    path_acm ,
    path_acn ,
    path_aco ,
    path_acp ,
    path_acq ,
    path_acr ,
    path_acs ,
    path_act ,
    path_acu ,
    path_acv ,
    path_acw ,
    path_acx ,
    path_acy ,
    path_acz ,
    path_ada ,
    path_adb ,
    path_adc ,
    path_add ,
    path_ade ,
    path_adf ,
    path_adg ,
    path_adh ,
    path_adi ,
    path_adj ,
    path_adk ,
    path_adl ,
    path_adm ,
    path_adn ,
    path_ado ,
    path_adp ,
    path_adq ,
    path_adr ,
    path_ads ,
    path_adt ,
    path_adu ,
    path_adv ,
    path_adw ,
    path_adx
);
Balashiha.push(
    path_ady ,
    path_adz ,
    path_aea ,
    path_aeb ,
    path_aec ,
    path_aed ,
    path_aee ,
    path_aef ,
    path_aeg ,
    path_aeh ,
    path_aei
);
Kotelniki.push(
    path_aej
);
Dzerdginsky.push(
    path_aek ,
    path_ael ,
    path_aem ,
    path_aen ,
    path_aeo ,
    path_aep ,
    path_aeq ,
    path_aer ,
    path_aes ,
    path_aet ,
    path_aeu ,
    path_aev ,
    path_aew ,
    path_aex ,
    path_aey ,
    path_aez ,
    path_afa ,
    path_afb ,
    path_afc ,
    path_afd ,
    path_afe ,
    path_aff ,
    path_afg ,
    path_afh ,
    path_afi ,
    path_afj ,
    path_afk ,
    path_afl ,
    path_afm ,
    path_afn ,
    path_afo ,
    path_afp ,
    path_afq ,
    path_afr ,
    path_afs ,
    path_aft ,
    path_afu ,
    path_afv
);
Litkarino.push(
    path_afw ,
    path_afx ,
    path_afy ,
    path_afz ,
    path_aga ,
    path_agb ,
    path_agc ,
    path_agd ,
    path_age ,
    path_agf ,
    path_agg ,
    path_agh ,
    path_agi ,
    path_agj ,
    path_agk ,
    path_agl ,
    path_agm ,
    path_agn ,
    path_ago ,
    path_agp ,
    path_agq ,
    path_agr ,
    path_ags ,
    path_agt ,
    path_agu ,
    path_agv ,
    path_agw ,
    path_agx ,
    path_agy ,
    path_agz ,
    path_aha ,
    path_ahb ,
    path_ahc ,
    path_ahd ,
    path_ahe ,
    path_ahf ,
    path_ahg ,
    path_ahh ,
    path_ahi ,
    path_ahj ,
    path_ahk ,
    path_ahl ,
    path_ahm ,
    path_ahn ,
    path_aho ,
    path_ahp ,
    path_ahq ,
    path_ahr ,
    path_ahs ,
    path_aht ,
    path_ahu ,
    path_ahv ,
    path_ahw ,
    path_ahx ,
    path_ahy ,
    path_ahz ,
    path_aia ,
    path_aib ,
    path_aic ,
    path_aid ,
    path_aie ,
    path_aif ,
    path_aig ,
    path_aih ,
    path_aii ,
    path_aij ,
    path_aik ,
    path_ail ,
    path_aim ,
    path_ain ,
    path_aio ,
    path_aip ,
    path_aiq ,
    path_air ,
    path_ais ,
    path_ait ,
    path_aiu ,
    path_aiv ,
    path_aiw ,
    path_aix ,
    path_aiy ,
    path_aiz ,
    path_aja ,
    path_ajb ,
    path_ajc ,
    path_ajd ,
    path_aje ,
    path_ajf ,
    path_ajg ,
    path_ajh ,
    path_aji ,
    path_ajj ,
    path_ajk ,
    path_ajl ,
    path_ajm ,
    path_ajn ,
    path_ajo ,
    path_ajp ,
    path_ajq ,
    path_ajr ,
    path_ajs ,
    path_ajt ,
    path_aju ,
    path_ajv ,
    path_ajw ,
    path_ajx ,
    path_ajy ,
    path_ajz ,
    path_aka ,
    path_akb ,
    path_akc ,
    path_akd ,
    path_ake ,
    path_akf ,
    path_akg ,
    path_akh ,
    path_aki ,
    path_akj ,
    path_akk ,
    path_akl ,
    path_akm ,
    path_akn ,
    path_ako ,
    path_akp ,
    path_akq ,
    path_akr ,
    path_aks ,
    path_akt ,
    path_aku ,
    path_akv ,
    path_akw ,
    path_akx ,
    path_aky ,
    path_akz ,
    path_ala ,
    path_alb ,
    path_alc ,
    path_ald ,
    path_ale ,
    path_alf ,
    path_alg ,
    path_alh ,
    path_ali ,
    path_alj ,
    path_alk ,
    path_all ,
    path_alm ,
    path_aln ,
    path_alo ,
    path_alp ,
    path_alq ,
    path_alr ,
    path_als ,
    path_alt ,
    path_alu ,
    path_alv ,
    path_alw
);
Oktyabrsy.push(
    path_alx ,
    path_aly ,
    path_alz ,
    path_ama ,
    path_amb ,
    path_amc ,
    path_amd ,
    path_ame ,
    path_amf ,
    path_amg ,
    path_amh ,
    path_ami ,
    path_amj ,
    path_amk ,
    path_aml ,
    path_amm ,
    path_amn ,
    path_amo ,
    path_amp ,
    path_amq ,
    path_amr ,
    path_ams ,
    path_amt ,
    path_amu ,
    path_amv ,
    path_amw ,
    path_amx ,
    path_amy ,
    path_amz ,
    path_ana ,
    path_anb ,
    path_anc ,
    path_and ,
    path_ane ,
    path_anf ,
    path_ang ,
    path_anh ,
    path_ani ,
    path_anj ,
    path_ank ,
    path_anl ,
    path_anm ,
    path_ann ,
    path_ano ,
    path_anp ,
    path_anq ,
    path_anr ,
    path_ans ,
    path_ant ,
    path_anu ,
    path_anv ,
    path_anw ,
    path_anx ,
    path_any ,
    path_anz ,
    path_aoa ,
    path_aob ,
    path_aoc ,
    path_aod ,
    path_aoe ,
    path_aof ,
    path_aog ,
    path_aoh ,
    path_aoi ,
    path_aoj ,
    path_aok ,
    path_aol ,
    path_aom ,
    path_aon ,
    path_aoo ,
    path_aop ,
    path_aoq ,
    path_aor ,
    path_aos ,
    path_aot ,
    path_aou ,
    path_aov ,
    path_aow ,
    path_aox ,
    path_aoy ,
    path_aoz ,
    path_apa ,
    path_apb ,
    path_apc ,
    path_apd ,
    path_ape ,
    path_apf ,
    path_apg ,
    path_aph ,
    path_api ,
    path_apj ,
    path_apk ,
    path_apl ,
    path_apm ,
    path_apn ,
    path_apo ,
    path_app ,
    path_apq ,
    path_apr ,
    path_aps ,
    path_apt ,
    path_apu ,
    path_apv ,
    path_apw ,
    path_apx ,
    path_apy ,
    path_apz ,
    path_aqa ,
    path_aqb ,
    path_aqc ,
    path_aqd ,
    path_aqe ,
    path_aqf ,
    path_aqg ,
    path_aqh ,
    path_aqi ,
    path_aqj ,
    path_aqk ,
    path_aql ,
    path_aqm ,
    path_aqn ,
    path_aqo ,
    path_aqp ,
    path_aqq ,
    path_aqr ,
    path_aqs ,
    path_aqt ,
    path_aqu ,
    path_aqv ,
    path_aqw ,
    path_aqx ,
    path_aqy ,
    path_aqz ,
    path_ara ,
    path_arb ,
    path_arc ,
    path_ard ,
    path_are ,
    path_arf ,
    path_arg ,
    path_arh ,
    path_ari ,
    path_arj ,
    path_ark ,
    path_arl ,
    path_arm ,
    path_arn ,
    path_aro ,
    path_arp ,
    path_arq ,
    path_arr ,
    path_ars ,
    path_art ,
    path_aru ,
    path_arv ,
    path_arw ,
    path_arx ,
    path_ary ,
    path_arz ,
    path_asa ,
    path_asb ,
    path_asc ,
    path_asd ,
    path_ase ,
    path_asf ,
    path_asg ,
    path_ash ,
    path_asi ,
    path_asj ,
    path_ask ,
    path_asl ,
    path_asm ,
    path_asn ,
    path_aso ,
    path_asp ,
    path_asq ,
    path_asr ,
    path_ass ,
    path_ast ,
    path_asu ,
    path_asv ,
    path_asw ,
    path_asx ,
    path_asy ,
    path_asz ,
    path_ata ,
    path_atb ,
    path_atc ,
    path_atd ,
    path_ate ,
    path_atf ,
    path_atg ,
    path_ath ,
    path_ati ,
    path_atj ,
    path_atk ,
    path_atl ,
    path_atm ,
    path_atn ,
    path_ato ,
    path_atp ,
    path_atq ,
    path_atr ,
    path_ats ,
    path_att ,
    path_atu ,
    path_atv ,
    path_atw ,
    path_atx ,
    path_aty ,
    path_atz ,
    path_aua ,
    path_aub ,
    path_auc ,
    path_aud ,
    path_aue ,
    path_auf ,
    path_aug ,
    path_auh ,
    path_aui ,
    path_auj ,
    path_auk ,
    path_aul ,
    path_aum ,
    path_aun ,
    path_auo ,
    path_aup ,
    path_auq ,
    path_aur ,
    path_aus ,
    path_aut ,
    path_auu ,
    path_auv ,
    path_auw ,
    path_aux ,
    path_auy ,
    path_auz ,
    path_ava ,
    path_avb ,
    path_avc ,
    path_avd ,
    path_ave ,
    path_avf ,
    path_avg ,
    path_avh ,
    path_avi ,
    path_avj ,
    path_avk ,
    path_avl ,
    path_avm ,
    path_avn ,
    path_avo ,
    path_avp ,
    path_avq ,
    path_avr ,
    path_avs ,
    path_avt ,
    path_avu ,
    path_avv ,
    path_avw ,
    path_avx ,
    path_avy ,
    path_avz ,
    path_awa ,
    path_awb ,
    path_awc ,
    path_awd ,
    path_awe ,
    path_awf ,
    path_awg ,
    path_awh ,
    path_awi ,
    path_awj ,
    path_awk ,
    path_awl ,
    path_awm
);
Himki.push(
    path_awn ,
    path_awo ,
    path_awp ,
    path_awq ,
    path_awr ,
    path_aws ,
    path_awt ,
    path_awu ,
    path_awv
);
// Butovo.push(
// );
ZAO__x28_копия2_x29_.push(
    path_aww ,
    path_awx ,
    path_awy ,
    path_awz ,
    path_axa ,
    path_axb ,
    path_axc ,
    path_axd ,
    path_axe ,
    path_axf ,
    path_axg ,
    path_axh ,
    path_axi ,
    path_axj ,
    path_axk ,
    path_axl ,
    path_axm ,
    path_axn ,
    path_axo ,
    path_axp ,
    path_axq ,
    path_axr
);
Vidnoe.push(
    path_axs ,
    path_axt ,
    path_axu ,
    path_axv ,
    path_axw ,
    path_axx ,
    path_axy ,
    path_axz ,
    path_aya ,
    path_ayb
);
ZAO__x28_копия3_x29_.push(
    path_ayc ,
    path_ayd ,
    path_aye ,
    path_ayf ,
    path_ayg ,
    path_ayh ,
    path_ayi ,
    path_ayj ,
    path_ayk ,
    path_ayl ,
    path_aym ,
    path_ayn ,
    path_ayo ,
    path_ayp ,
    path_ayq ,
    path_ayr ,
    path_ays ,
    path_ayt ,
    path_ayu ,
    path_ayv ,
    path_ayw ,
    path_ayx
);
Dolgoprudni.push(
    path_ayy ,
    path_ayz ,
    path_aza ,
    path_azb ,
    path_azc ,
    path_azd ,
    path_aze ,
    path_azf ,
    path_azg ,
    path_azh ,
    path_azi ,
    path_azj ,
    path_azk ,
    path_azl ,
    path_azm ,
    path_azn ,
    path_azo
);
// sadkoltso.push(
// );
UZAO__x28_копия_x29__1_.push(
    circle_azp ,
    path_azq ,
    path_azr ,
    path_azs ,
    path_azt ,
    path_azu ,
    path_azv ,
    path_azw ,
    path_azx ,
    path_azy ,
    path_azz ,
    path_baa ,
    path_bab ,
    path_bac ,
    path_bad ,
    path_bae ,
    path_baf ,
    path_bag ,
    path_bah ,
    path_bai ,
    path_baj ,
    path_bak ,
    path_bal ,
    path_bam ,
    path_ban ,
    path_bao ,
    path_bap ,
    path_baq ,
    path_bar ,
    path_bas ,
    path_bat ,
    path_bau ,
    path_bav ,
    path_baw ,
    path_bax ,
    path_bay ,
    path_baz ,
    path_bba ,
    path_bbb ,
    path_bbc ,
    path_bbd ,
    path_bbe ,
    path_bbf ,
    path_bbg ,
    path_bbh ,
    path_bbi ,
    path_bbj ,
    path_bbk ,
    path_bbl ,
    path_bbm ,
    path_bbn ,
    path_bbo ,
    path_bbp ,
    path_bbq ,
    path_bbr ,
    path_bbs ,
    path_bbt ,
    path_bbu ,
    path_bbv ,
    path_bbw ,
    path_bbx ,
    path_bby ,
    path_bbz ,
    path_bca ,
    path_bcb ,
    path_bcc ,
    path_bcd ,
    path_bce ,
    path_bcf ,
    path_bcg
);
Krasnogorsk.push(
    path_bch ,
    path_bci ,
    path_bcj ,
    path_bck ,
    path_bcl
);

var regions = [];

regions.push(TSAO);
regions.push(ZAO);
regions.push(SZAO);
regions.push(SAO);
regions.push(SVAO);
regions.push(VAO);
regions.push(UVAO);
regions.push(UAO);
//regions.push(UZAO_1_);
regions.push(ZAO__x28_копия_x29_);
regions.push(Korolev);
regions.push(Shelkovo);
regions.push(Mitishi);
regions.push(Reutov);
regions.push(Zheldor);
regions.push(Lubertsi);
regions.push(Balashiha);
regions.push(Kotelniki);
regions.push(Dzerdginsky);
regions.push(Litkarino);
regions.push(Oktyabrsy);
regions.push(Himki);
//regions.push(Butovo);
regions.push(ZAO__x28_копия2_x29_);
regions.push(Vidnoe);
regions.push(ZAO__x28_копия3_x29_);
regions.push(Dolgoprudni);
//regions.push(sadkoltso);
regions.push(UZAO__x28_копия_x29__1_);
regions.push(Krasnogorsk);

rsr.setViewBox(0, 0, 1350, 1188, true);

rsr.canvas.setAttribute('preserveAspectRatio', 'none');

console.log(rsr)

// Iterate through the regions & change Yorkshire's fill colour to gold
for (var i = 0; i < regions.length; i++) {

    // Showing off
    regions[i].mouseover(function(e){
        this.node.style.opacity = 0.7;
        this.node.setAttribute('fill', '#FF0000')
        document.getElementById('region-name').innerHTML = this.data('region');
    });

    regions[i].mouseout(function(e){
        this.node.style.opacity = 1;
        this.node.setAttribute('fill', 'none')
    });
}

