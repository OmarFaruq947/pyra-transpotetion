import React, { useContext } from "react";
import "./Destination.css";
import { Col, Container, Row } from "react-bootstrap";
import Menu from "../menu/menu";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Map,
  Marker,
  InfoWindow,
} from "react-google-maps";
import App from "../../App";
import googleMap from "../../image/Map.png";

const Destination = () => {
  return (
    <div>
      <Menu></Menu>
      <br/><br/><br/><br/>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <div className="details">
                <span className="text innerDiv"> Pick From</span> <br />
                <input className="text_area" type="text"  /> <br />
                <span className="text"> Pick To</span> <br />
                <input className="text_area" type="text" /> <br/> <br/>
                <input className="text_area" type="datetime-local"/> <br/><br/>
                <button className="search_btn">Search</button>
            </div>
          </Col>
          <Col xs={10} md={8}>
            <img className="map_pic" src={googleMap} alt="googleMap" />

            {/* <Map google={this.props.google} zoom={14}>
                <Marker onClick={this.onMarkerClick}
                    name={'Current location'}/>

            <InfoWindow onClick={this.onInfoWindowClose}>
                <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                </div>
            </InfoWindow>
            </Map> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Destination;

// export default Destination({
//     apiKey: ("YOUR_GOOGLE_API_KEY_GOES_HERE")
// })(Destination)
