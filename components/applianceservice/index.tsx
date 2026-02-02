import Horizontalscroll from '../Horizontalscroll'
import React from 'react'

const Appliance = () => {
   const IMAGE_DATA = [
     { id: '1', uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&q=80' },
     { id: '2', uri: 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=500&q=80' },
     { id: '3', uri: 'https://images.unsplash.com/photo-1501854140884-074cf2b2c7c8?w=500&q=80' },
     { id: '4', uri: 'https://images.unsplash.com/photo-1501854140884-074cf2b2c7c8?w=500&q=80' },
     { id: '5', uri: 'https://images.unsplash.com/photo-1501854140884-074cf2b2c7c8?w=500&q=80' },
   ];
  return (
    <>
      <Horizontalscroll data={IMAGE_DATA} cardWidth={140} cardHeight={100} />
    </>
  )
}

export default Appliance;