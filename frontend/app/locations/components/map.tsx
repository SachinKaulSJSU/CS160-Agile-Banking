'use client';
import React, {useEffect, useMemo} from 'react';
import {Loader} from '@googlemaps/js-api-loader';

export default function Map() {
    const mapRef = React.useRef<HTMLDivElement>(null);
    const markers: google.maps.marker.AdvancedMarkerElement[] = [];

    useEffect(() => {

        const initMap = async () => {
            const loader = new Loader({
                apiKey: 'AIzaSyBcts6yg8uuKT4MK3a2lygaRjvDzEoJqLg',
                version: 'beta'
            });

            const {Map} = await loader.importLibrary('maps');

            const position = {
                lat: 37.23300584574463,
                lng: -122.01392651889493
            }

            //map options
            const mapOptions: google.maps.MapOptions = {
                center: position,
                zoom: 13,
                mapTypeControl: false,
                mapId: 'AGILE_BANK_ID'
            }

            //Map Setup
            const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

            const { Place } = await google.maps.importLibrary("places") as google.maps.PlacesLibrary;
            const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

            const request = {
                textQuery: 'Chase atm',
                fields: ['displayName', 'location'],
                includedType: 'atm',
                locationBias: { lat: 37.4161493, lng: -122.0812166 },
                language: 'en-US',
                maxResultCount: 10,
                useStrictTypeFiltering: false,
            };

            //@ts-ignore
            const { places } = await Place.searchByText(request);

            //@ts-ignore
            const placeAutocomplete = new google.maps.places.PlaceAutocompleteElement();
            //@ts-ignore
            placeAutocomplete.id = 'place-autocomplete-input';

            //const card = document.getElementById('place-autocomplete-card') as HTMLElement;
            //@ts-ignore
            //card.appendChild(placeAutocomplete);
            placeAutocomplete.setAttribute("style", 
                "background-color: #fff; border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; margin: 10px; padding: 5px; font-family: Roboto, sans-serif; font-size: large; font-weight: bold;");
            map.controls[google.maps.ControlPosition.TOP_LEFT].push(placeAutocomplete);

            // Add the gmp-placeselect listener, and display the results on the map.
            //@ts-ignore
            placeAutocomplete.addEventListener('gmp-placeselect', async ({ place }) => {
                for(var i = 0; i < markers.length; i++){
                    markers[i].position = null;
                }
                await place.fetchFields({ fields: ['displayName', 'formattedAddress', 'location'] });

                
                map.setCenter(place.location);
                map.setZoom(13);

                const requestAC = {
                    textQuery: 'Chase atm',
                    fields: ['displayName', 'location'],
                    includedType: 'atm',
                    locationBias: place.location,
                    language: 'en-US',
                    maxResultCount: 10,
                    useStrictTypeFiltering: false,
                };

                const { places } = await Place.searchByText(requestAC);
                
                if (places.length) {
                    console.log(places);
    
                    const { LatLngBounds } = await google.maps.importLibrary("core") as google.maps.CoreLibrary;
                    const bounds = new LatLngBounds();
    
                    // Loop through and get all the results.
                    places.forEach((place) => {
                        const markerView = new AdvancedMarkerElement({
                            map,
                            position: place.location,
                            title: place.displayName,
                        });
                        
                        markers.push(markerView);
                        bounds.extend(place.location as google.maps.LatLng);
                        console.log(place);
                    });
    
                    map.fitBounds(bounds);
                }
            });

            if (places.length) {
                console.log(places);

                const { LatLngBounds } = await google.maps.importLibrary("core") as google.maps.CoreLibrary;
                const bounds = new LatLngBounds();

                // Loop through and get all the results.
                places.forEach((place) => {
                    const markerView = new AdvancedMarkerElement({
                        map,
                        position: place.location,
                        title: place.displayName,
                    });
                    
                    markers.push(markerView);
                    bounds.extend(place.location as google.maps.LatLng);
                    console.log(place);
                });

                map.fitBounds(bounds);

            } else {
                console.log('No results');
            }
    }

    initMap();
}, []);

    return (
        <div>
            <div id="place-autocomplete-card">
                
            </div>
            <div style={{height: '600px'}} ref={mapRef}></div>
        </div>
    )
}
