Template.sensorPage.rendered = function(){
	var result;
	var dat3 = []
	// result = HTTP.call("GET", "https://sp.grandala.se/json.php",function (error, result) {
 //            if (!error) {
 //            	console.log(result);
 //              $.each(JSON.parse(result.content),function(i,j){
 //              	//console.log(i.data);
 //              	//console.log(i);
 //              	var time = new Date(j[1]).getTime();
 //              	var val = j[2];
 //              	var id = j[3];
 //              	if(id == '158714868259502#a82ka'){
 //              		dat3.push([time, val]);
 //              		//console.log(time);
 //              	}
 //              });
 //            }});
    

     HTTP.call("GET", "https://sp.grandala.se/json.php",function (error, result) {
            if (!error) {
            	$.each(JSON.parse(result.content),function(i,j){
              	//console.log(i.data);
              	//console.log(i);
              	var time = new Date(j[1]).getTime();
              	var val = j[2];
              	var id = j[3];
              	if(id == '158714868259502#a82ka'){
              		if(time > (new Date().getTime()-10000000))
              		dat3.push([time, val]);
              		//console.log(time);
              	}
              });
              

              plot = $.plot("#placeholder", [
			// { 
			// 	data: dat1, label: "dat1"
			// },
			// { 
			// 	data: dat2, label: "dat2" 
			// },
			{ 
				data: dat3, label: "Temperature Forecast - Borås" 
			}
		], {
			series: {
				lines: {
					show: true
				}
			},
			crosshair: {
				mode: "x"
			},
			grid: {
				hoverable: true,
				autoHighlight: false
			},
			xaxis: {
					mode: "time",
					minTickSize: [1, "minute"],
					min: new Date(_.min(dat3, function(dat){ return dat[0]; })[0]).getTime(),
					max: new Date(_.max(dat3, function(dat){ return dat[0]; })[0]).getTime()
			},
			yaxis: {
				min: _.min(dat3, function(dat){ return dat[1]; })[1]-1,
				max: _.max(dat3, function(dat){ return dat[1]; })[1]+1
			}
		});

		var legends = $("#placeholder .legendLabel");

		legends.each(function () {
			// fix the widths so they don't jump around
			$(this).css('width', $(this).width());
		});

		var updateLegendTimeout = null;
		var latestPosition = null;

		$("#footer").prepend("Flot " + $.plot.version + " &ndash; ");

            }});

  //} catch (e) {
    // Got a network error, time-out or HTTP error in the 400 or 500 range.
  //  return false;
  //}	

	// var dat1 = [[1395263918952,1],[1395263928952,2],[1395263938952,3],[1395263968952,2]];
	// var dat2 = [[1395263918952,2],[1395263928952,2],[1395263938952,2],[1395263958952,1]];
	

		// function updateLegend() {

		// 	updateLegendTimeout = null;

		// 	var pos = latestPosition;

		// 	var axes = plot.getAxes();
		// 	if (pos.x < axes.xaxis.min || pos.x > axes.xaxis.max ||
		// 		pos.y < axes.yaxis.min || pos.y > axes.yaxis.max) {
		// 		return;
		// 	}

		// 	var i, j, dataset = plot.getData();
		// 	for (i = 0; i < dataset.length; ++i) {

		// 		var series = dataset[i];

		// 		// Find the nearest points, x-wise

		// 		for (j = 0; j < series.data.length; ++j) {
		// 			if (series.data[j][0] > pos.x) {
		// 				break;
		// 			}
		// 		}

		// 		// Now Interpolate

		// 		var y,
		// 			p1 = series.data[j - 1],
		// 			p2 = series.data[j];

		// 		if (p1 == null) {
		// 			y = p2[1];
		// 		} else if (p2 == null) {
		// 			y = p1[1];
		// 		} else {
		// 			y = p1[1] + (p2[1] - p1[1]) * (pos.x - p1[0]) / (p2[0] - p1[0]);
		// 		}

		// 		legends.eq(i).text(series.label.replace(/=.*/, "= " + y.toFixed(2)));
		// 	}
		// }

		// $("#placeholder").bind("plothover",  function (event, pos, item) {
		// 	latestPosition = pos;
		// 	if (!updateLegendTimeout) {
		// 		updateLegendTimeout = setTimeout(updateLegend, 50);
		// 	}
		// });

		// Add the Flot version string to the footer

		
};