
import tw from "tailwind-styled-components";
import mapboxgl from '!mapbox-gl';
import { useEffect } from "react";

mapboxgl.accessToken = 'pk.eyJ1Ijoic2phaW4yOCIsImEiOiJja2xlbW5kZWswdTFvMndwN3hlamI1ZjhqIn0.IMWeNFAFP62y3MckK02Tkw';
const Map = (props) => {

    useEffect(() => {
        // initialize map only once
        const map = new mapboxgl.Map({
            container: "map",
            style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
            center: [87.47764161, 25.77153569],
            zoom: 3,
        });
        if (props.pickupCoordinates) {
            addToMap(map, props.pickupCoordinates);
        }
        if (props.dropoffCoordinates) {
            addToMap(map, props.dropoffCoordinates);
        }
        if (props.pickupCoordinates && props.dropoffCoordinates) {
            map.fitBounds([
                props.dropoffCoordinates,
                props.pickupCoordinates,
            ], {
                padding: 60,
            })
        }

    }, [props.dropoffCoordinates, props.pickupCoordinates]);

    const addToMap = (map, coordinates) => {
        const marker1 = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map);
    }


    return (
        <Wrapper id="map">Map</Wrapper>
    )
}

export default Map;
const Wrapper = tw.div`
  flex-1 h-1/2
`