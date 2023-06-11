import React from "react";
import MapDetailButton from "./MapDetailButton";
const MapDetail = () => {

  return (
    <>
      <div className="map-detail-body">
        <div className="map-detail-Container-title">Campus Map 건물별 정보</div>
        <div className="map-detail-Container-body">
          <div className="map-detail-Container-body-button">
            <MapDetailButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default MapDetail;
