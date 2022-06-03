import { React, Component } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import GoogleMaps from "simple-react-google-maps"
export default class Maps extends Component{
    render(){
        return(
            <div>
                <div className="container">
                <GoogleMaps
                title
                apiKey={"AIzaSyC7At2Y0pD1N9NJV7aq1fN0j605kRJXGks"}
                style={{ height: "400px", width:"300px"}}
                zoom={12}
                center={{
                    lat:-33.39954869717938,
                    lng:-70.57622069217277
                }}
                markers={[
                    { lat:-33.399602699738374,lng:-70.57636353890796 }
                ]}
                
                />
                </div>
            </div>
        )
    }
}

