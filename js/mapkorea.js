var areaInfo = {
	"KR-41" : {
		title: "Gyeonggi",
		toSeoul: {
			byKTX: {
				time: "N/A",
				cost: "N/A"
			},
			byLimo: {
				time: 35,
				cost: 15000
			}
		},
		knownFor: ["Universities", "Han River"],
		bigCities: ["Suwon", "Seongnam", "Goyang", "Yongin", "Bucheon", "Ansan"]
	},
	"KR-42" : {
		title: "Gangwon",
		toSeoul: {
			byKTX: {
				time: "N/A",
				cost: "N/A"
			},
			byLimo: {
				time: 40,
				cost: 17000
			}
		},
		knownFor: ["Seoraksan", "Skiing", "Hwanseongul"],
		bigCities: ["Chuncheon", "Gangneung", "Sokcho", "Wonju", "Donghae"]
	},
	"KR-28" : {
		title: "Incheon",
		toSeoul: {
			byKTX: {
				time: "N/A",
				cost: "N/A"
			},
			byLimo: {
				time: 35,
				cost: 15000
			}
		},
		knownFor: ["Airport", "Bupyeong Shopping Center", "Chinatown"],
		bigCities: ["Incheon"]
	},
	"KR-11" : {
		title: "Seoul",
		toSeoul: {
			byKTX: {
				time: "N/A",
				cost: "N/A"
			},
			byLimo: {
				time: "N/A",
				cost: "N/A"
			}
		},
		knownFor: ["Museums", "Nightlife", "International Food", "Universities"],
		bigCities: ["Seoul"]
	},
	"KR-44" : {
		title: "South Chungcheong",
		toSeoul: {
			byKTX: {
				time: 37,
				cost: 13600
			},
			byLimo: {
				time: 35,
				cost: 15000
			}
		},
		knownFor: ["Temples", "Beaches"],
		bigCities: ["Cheonan", "Asan"]
	},
	"KR-43" : {
		title: "North Chungcheong",
		toSeoul: {
			byKTX: {
				time: "N/A",
				cost: "N/A"
			},
			byLimo: {
				time: 35,
				cost: 15000
			}
		},
		knownFor: ["National Parks"],
		bigCities: ["Cheongju"]
	},
	"KR-47" : {
		title: "North Gyeongsang",
		toSeoul: {
			byKTX: {
				time: "N/A",
				cost: "N/A"
			},
			byLimo: {
				time: 35,
				cost: 15000
			}
		},
		knownFor: ["Mountains"],
		bigCities: ["Pohang", "Gyeongju"]
	},
	"KR-30" : {
		title: "Daejeon",
		toSeoul: {
			byKTX: {
				time: 59,
				cost: 22900
			},
			byLimo: {
				time: 35,
				cost: 15000
			}
		},
		knownFor: ["Universities", "Broadcasting", "Sports"],
		bigCities: ["Daejon"]
	},
	"KR-50" : {
		title: "Sejong",
		toSeoul: {
			byKTX: {
				time: "N/A",
				cost: "N/A"
			},
			byLimo: {
				time: 35,
				cost: 15000
			}
		},
		knownFor: ["Government Center"],
		bigCities: ["Sejong"]
	},
	"KR-45" : {
		title: "North Jeolla",
		toSeoul: {
			byKTX: {
				time: "N/A",
				cost: "N/A"
			},
			byLimo: {
				time: 35,
				cost: 15000
			}
		},
		knownFor: [],
		bigCities: ["Jeonju"]
	},
	"KR-48" : {
		title: "South Gyeongsang",
		toSeoul: {
			byKTX: {
				time: 139,
				cost: 39700
			},
			byLimo: {
				time: 35,
				cost: 15000
			}
		},
		knownFor: ["Beaches","Hot Springs"],
		bigCities: ["Changwon", "Gimhae"]
	},
	"KR-27" : {
		title: "Daegu",
		toSeoul: {
			byKTX: {
				time: 107,
				cost: 41100
			},
			byLimo: {
				time: 35,
				cost: 15000
			}
		},
		knownFor: ["Gatbawi", "Temples"],
		bigCities: ["Daegu"]
	},
	"KR-31" : {
		title: "Ulsan",
		toSeoul: {
			byKTX: {
				time: "N/A",
				cost: "N/A"
			},
			byLimo: {
				time: 35,
				cost: 15000
			}
		},
		knownFor: ["Industraial Center"],
		bigCities: ["Ulsan"]
	},
	"KR-26" : {
		title: "Busan",
		toSeoul: {
			byKTX: {
				time: 180,
				cost: 44800
			},
			byLimo: {
				time: 35,
				cost: 15000
			}
		},
		knownFor: ["Beaches", "Shinsegae Centum City", "Hot Springs"],
		bigCities: ["Busan"]
	},
	"KR-46" : {
		title: "South Jeolla",
		toSeoul: {
			byKTX: {
				time: 20,
				cost: 10000
			},
			byLimo: {
				time: 35,
				cost: 15000
			}
		},
		knownFor: ["Islands", "Agriculture"],
		bigCities: ["Yeosu","Mokpo"]
	},
	"KR-29" : {
		title: "Gwangju",
		toSeoul: {
			byKTX: {
				time: 20,
				cost: 10000
			},
			byLimo: {
				time: 35,
				cost: 15000
			}
		},
		knownFor: ["Cultural Centers"],
		bigCities: ["Gwangju"]
	},
	"KR-49" : {
		title: "Jeju",
		toSeoul: {
			byKTX: {
				time: 20,
				cost: 10000
			},
			byLimo: {
				time: 35,
				cost: 15000
			}
		},
		knownFor: ["Tourism", "Beaches", "Casino"],
		bigCities: ["Jeju"]
	},
};

var map = AmCharts.makeChart("mapdiv", {
	type: "map",
	theme: "dark",
	dragMap: false,

	dataProvider: {
		map: "southKoreaLow",
		getAreasFromMap: true
	},

	imageSettings: {
	},

	areasSettings: {
		autoZoom: false,
		selectedColor: "#CC0000",
		color: "#D46A6A",
		rollOverOutlineColor: "#fff",
		rollOverColor: "#4C72CB",
		selectable: true,
		showAsSelected: true
	},

	smallMap: { enabled: false },

	zoomControl: {
		zoomControlEnabled: false,
		homeButtonEnabled: false
	},
});

map.addListener("clickMapObject", handleMapObjectClick);

function handleMapObjectClick(evt){
	console.log(evt.mapObject.title + ' - ' + evt.mapObject.id);
	var id = evt.mapObject.id;
	var mapInfo = areaInfo[id];
	console.log(mapInfo);

	$('.map-area-title').text(mapInfo.title);
	$('.ktx-distance').text(mapInfo.toSeoul.byKTX.time);
	$('.ktx-cost').text(mapInfo.toSeoul.byKTX.cost);
	$('.limo-distance').text(mapInfo.toSeoul.byLimo.time);
	$('.limo-cost').text(mapInfo.toSeoul.byLimo.cost);

	$('.map-area-known-for').html('');
	for(var i = 0; i<mapInfo.knownFor.length; i++){
		var node = '<li>' + mapInfo.knownFor[i] + '</li>'
		$('.map-area-known-for').append(node);
	}

	$('.map-area-cities').html('');
	for(var i = 0; i<mapInfo.bigCities.length; i++){
		var node = '<li>' + mapInfo.bigCities[i] + '</li>'
		$('.map-area-cities').append(node);
	}
}