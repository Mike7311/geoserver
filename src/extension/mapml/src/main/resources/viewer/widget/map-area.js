/*! @maps4html/web-map-custom-element 28-04-2023 */
/* (c) 2023 Open Source Geospatial Foundation - all rights reserved
 * This code is licensed under the GPL 2.0 license, available at the root
 * application directory.
 * Copyright (c) 2023 Canada Centrre for Mapping and Earth Observation, Natural
 * Resources Canada
 * Copyright © 2023 World Wide Web Consortium, (Massachusetts Institute of Technology, 
 * European Research Consortium for Informatics and Mathematics, Keio    
 * University, Beihang). All Rights Reserved. This work is distributed under the 
 * W3C® Software License [1] in the hope that it will be useful, but WITHOUT ANY 
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR 
 * A PARTICULAR PURPOSE.
 * [1] http://www.w3.org/Consortium/Legal/copyright-software
 * 
 */
import"./leaflet.js";import"./mapml.js";class MapArea extends HTMLAreaElement{static get observedAttributes(){return["coords","alt","href","shape","rel","type","target"]}get alt(){return this.hasAttribute("alt")?this.getAttribute("alt"):""}set alt(t){this.setAttribute("controls",t)}get coords(){return this.hasAttribute("coords")?this.getAttribute("coords"):""}set coords(t){}get href(){return this.hasAttribute("href")?this.getAttribute("href"):""}set href(t){this.href=t}get shape(){return this.hasAttribute("shape")?this.getAttribute("shape"):"default"}set shape(t){(t=t.toLowerCase()).search(/default|circle|rect|poly/)&&(this.shape=t)}get rel(){return this.hasAttribute("rel")?this.getAttribute("rel"):""}set rel(t){this.rel=t}get type(){return this.hasAttribute("type")?this.getAttribute("type"):""}set type(t){this.type=t}get target(){return this.hasAttribute("target")?this.getAttribute("target"):""}constructor(){super()}attributeChangedCallback(t,e,r){}connectedCallback(){this.parentElement._map&&this._attachedToMap()}_attachedToMap(){this._map=this.parentElement._map;var t=this.parentElement._map;if(!this._feature){var e,r,s=this._styleToPathOptions(window.getComputedStyle(this)),i=this.coords?this._coordsToArray(this.coords):null;if(i&&this.parentElement.poster)for(var a=(this.parentElement.poster.width-this.parentElement.width)/2,h=(this.parentElement.poster.height-this.parentElement.height)/2,o=0;o<i.length;o++)i[o][0]=i[o][0]-a,i[o][1]=i[o][1]-h;"circle"===this.shape?(r=parseInt(this.coords.split(",")[2]),e=L.point(i[0]).add(L.point(0,r)),r=t.containerPointToLatLng(e),e=t.containerPointToLatLng(i[0]),r=t.distance(e,r),this._feature=L.circle(e,r,s).addTo(t)):this.shape&&"rect"!==this.shape?"poly"===this.shape?this._feature=L.polygon(this._pointsToLatLngs(i),s).addTo(t):this._feature=L.rectangle(t.getBounds(),s).addTo(t):(r=L.latLngBounds(t.containerPointToLatLng(i[0]),t.containerPointToLatLng(i[1])),this._feature=L.rectangle(r,s).addTo(t)),this.alt&&(s=L.SVG.create("title"),t=document.createTextNode(this.alt),s.appendChild(t),this._feature._path.appendChild(s)),this.href&&this._feature.on("click",function(){this.href&&window.open(this.href)},this)}}disconnectedCallback(){this._map.removeLayer(this._feature),delete this._feature}_coordsToArray(t){for(var e=1,r=[],s=t.split(",");e<s.length;e+=2)r.push([parseInt(s[e-1]),parseInt(s[e])]);return r}_pointsToLatLngs(t){var e=[];if(this._map)for(var r=0,s=this._map;r<t.length;r++)e.push(s.containerPointToLatLng(t[r]));return e}_styleToPathOptions(t){var e={};return"none"!==t.stroke?(e.stroke=!0,e.color=t.stroke,e.opacity=t.strokeOpacity,e.weight=parseInt(t.strokeWidth),e.dashArray=t.strokeDasharray,e.lineCap=t.strokeLinecap,e.lineJoin=t.strokeLinejoin):e.stroke=!1,"none"!==t.fill?(e.fill=!0,e.fillColor=t.fill,e.fillOpacity=t.fillOpacity,e.fillRule=t.fillRule):e.fill=!1,e}}export{MapArea};
//# sourceMappingURL=map-area.js.map