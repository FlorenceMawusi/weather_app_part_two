import React from 'react'
import { Modal } from 'react-bootstrap'

export default function WeatherHistory({ newHistoryData, searchWeatherApi }) {
    
    
    
    return (
       <>
    <Modal.Dialog>
        <Modal.Body>
          <Modal.Title>Search History</Modal.Title>
            {newHistoryData.slice(newHistoryData.length - 5, newHistoryData.length).map(each => 
              <>
                <div className="card shadow">
                  <li onClick = {searchWeatherApi}><h6>{each?.location?.name}</h6></li>
                </div>
                <br />
              </>
              )}
        </Modal.Body>
    </Modal.Dialog>
       </>
    )
}
