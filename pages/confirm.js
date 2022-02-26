import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import { useRouter } from 'next/router'
import RideSelector from "./components/RideSelector";
import Link from 'next/link';

const confirm = () => {
    const router = useRouter();
    //from search page
    const { pickup, dropoff } = router.query;

    const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);

    const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0]);

    const getPickupCoordinates = (pickup) => {
        // const pickup = "Purnia";
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + new URLSearchParams({
            access_token: "pk.eyJ1Ijoic2phaW4yOCIsImEiOiJja2xlbW5kZWswdTFvMndwN3hlamI1ZjhqIn0.IMWeNFAFP62y3MckK02Tkw"
        }))
            .then(response => response.json())
            .then(data => {

                setPickupCoordinates(data.features[0].center)
            })
    }
    const getDropoffCoordinates = (dropoff) => {
        // const dropoff = "katihar";
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + new URLSearchParams({
            access_token: "pk.eyJ1Ijoic2phaW4yOCIsImEiOiJja2xlbW5kZWswdTFvMndwN3hlamI1ZjhqIn0.IMWeNFAFP62y3MckK02Tkw"
        }))
            .then(response => response.json())
            .then(data => {

                setDropoffCoordinates(data.features[0].center)
            })
    }

    useEffect(() => {
        getPickupCoordinates(pickup);
        getDropoffCoordinates(dropoff);
    }, [pickup, dropoff])

    return (
        <Wrapper>
            <ButtonContainer>
                <Link href="/search">
                    <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
                </Link>
            </ButtonContainer>
            <Map pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates} />
            <RideContainer>
                <RideSelector pickupCoordinates={pickupCoordinates}
                    dropoffCoordinates={dropoffCoordinates} />

                <ConfirmButtonContainer>
                    <ConfirmButton>
                        Confirm UberX
                    </ConfirmButton>

                </ConfirmButtonContainer>
            </RideContainer>
        </Wrapper>
    );
}

export default confirm;

const Wrapper = tw.div`
flex h-screen flex-col
`

const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`
const ConfirmButton = tw.div`
bg-black text-white text-center my-4 mx-4  py-4 text-xl cursor-pointer`

const ConfirmButtonContainer = tw.div`
    border-t-2
`
const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`
const BackButton = tw.img`
h-full object-contain
`