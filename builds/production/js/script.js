!function e(o,r,n){function t(c,i){if(!r[c]){if(!o[c]){var s="function"==typeof require&&require;if(!i&&s)return s(c,!0);if(a)return a(c,!0);throw new Error("Cannot find module '"+c+"'")}var u=r[c]={exports:{}};o[c][0].call(u.exports,function(e){var r=o[c][1][e];return t(r||e)},u,u.exports,e,o,r,n)}return r[c].exports}for(var a="function"==typeof require&&require,c=0;c<n.length;c++)t(n[c]);return t}({1:[function(e,o,r){d3.json("./data/sites.json",function(e,o){o.sites;L.mapbox.accessToken="pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiODRHdjBSWSJ9.lF4ymp-69zdGvZ5X4Tokzg";var r,n=new L.LatLngBounds(new L.LatLng(39.1982,-128.1445),new L.LatLng(50.5414,-68.2031)),t=L.mapbox.map("map","mapbox.light").setView([45.9703,-94.1748],7).on("ready",function(){t.maxZoom=8,t.minZoom=11}),a=omnivore.csv("./data/sites.csv").on("ready",function(e){this.eachLayer(function(e){e.setIcon(L.mapbox.marker.icon({"marker-color":"#7C84AE",opacity:".5","marker-size":"small"})),e.bindPopup(e.toGeoJSON().properties.site)})});a.on("ready",function(e){r=new L.MarkerClusterGroup,e.target.eachLayer(function(e){r.addLayer(e)}),t.addLayer(r)}),a.on("mouseover",function(e){e.layer.openPopup()}),a.on("mouseout",function(e){e.layer.closePopup()});var c=L.tileLayer("http://jeffhargarten.com/interactives/stars/blackmarble/{z}/{x}/{y}.png",{minZoom:0,maxZoom:11,bounds:n,opacity:.65});jQuery(document).ready(function(){jQuery("#lights_toggle").css("background-color","#333"),jQuery("#sites_toggle").css("background-color","#7C84AE"),jQuery("#lights_toggle input").on("change",function(){this.checked?(t.addLayer(c),jQuery("#lights_toggle").css("background-color","#7C84AE")):(t.removeLayer(c),jQuery("#lights_toggle").css("background-color","#333"))}),jQuery("#sites_toggle input").on("change",function(){this.checked?(t.addLayer(r),jQuery("#sites_toggle").css("background-color","#7C84AE")):(t.removeLayer(r),jQuery("#sites_toggle").css("background-color","#333"))})})})},{}]},{},[1]);