"use client"
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
export default function Map(){
  return (
    <div>
    <script type="module" src ="map.tsx">
    </script>
    <div id="map"></div>
    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAmIv1uVuHXSitT86XPl3FnZ6RwjoiTdhY&callback=initMap&libraries=places&v=weekly"
      defer
    ></script>
  </div>
);
}

let map: google.maps.Map;
let service: google.maps.places.PlacesService;
let infowindow: google.maps.InfoWindow;
let marker: google.maps.Marker;
let geocoder: google.maps.Geocoder;
let markers: google.maps.Marker[] = [];

function initMap(): void {
  const start = new google.maps.LatLng(37.23300584574463, -122.01392651889493);

  infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: start,
    zoom: 15,
    mapTypeControl: false,
  });
  geocoder = new google.maps.Geocoder();

  const inputText = document.createElement("input");

  inputText.type = "text";
  inputText.placeholder = "Enter a location";

  const submitButton = document.createElement("input");

  submitButton.type = "button";
  submitButton.value = "Search";
  submitButton.classList.add("button", "button-primary");

  const clearButton = document.createElement("input");

  clearButton.type = "button";
  clearButton.value = "Clear";
  clearButton.classList.add("button", "button-secondary");

  map.controls[google.maps.ControlPosition.TOP_LEFT].push(inputText);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(submitButton);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(clearButton);

  marker = new google.maps.Marker({
    map,
  });

  submitButton.addEventListener("click", () =>
  geocode({ address: inputText.value })
);

clearButton.addEventListener("click", () => {
  clear();
});

  const request = {
    location: start,
      radius: 500,
      query: 'chase atm'
  };

  service = new google.maps.places.PlacesService(map);

  service.textSearch(
    request,
    (
      results: google.maps.places.PlaceResult[] | null,
      status: google.maps.places.PlacesServiceStatus
    ) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        for (let i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }

        map.setCenter(results[0].geometry!.location!);
      }
    }
  );
}

function clear() {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}

function geocode(request: google.maps.GeocoderRequest): void {
  clear();

  geocoder
    .geocode(request)
    .then((result) => {
      const { results } = result;

      map.setCenter(results[0].geometry.location);
      const request = {
        location: results[0].geometry!.location!,
          radius: 500,
          query: 'chase atm'
      };

      service = new google.maps.places.PlacesService(map);

      service.textSearch(
        request,
        (
          results: google.maps.places.PlaceResult[] | null,
          status: google.maps.places.PlacesServiceStatus
        ) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && results) {
            for (let i = 0; i < results.length; i++) {
              createMarker(results[i]);
            }

            map.setCenter(results[0].geometry!.location!);
          }
        }
      );
      return results;
    })
    .catch((e) => {
      alert("Geocode was not successful for the following reason: " + e);
    });
}

function createMarker(place: google.maps.places.PlaceResult) {
  if (!place.geometry || !place.geometry.location) return;

  const marker = new google.maps.Marker({
    map,
    position: place.geometry.location,
  });

  markers.push(marker);

  google.maps.event.addListener(marker, "click", () => {
    infowindow.setContent(place.name || "");
    infowindow.open(map);
  });
}

initMap();
