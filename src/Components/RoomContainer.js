import React from 'react'
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { withRoomConsumer } from '../Context';
import Loading from './Loading';



function RoomContainer({context}){
const {loading,sortedRooms, rooms} = context;
if (loading){
   return <Loading/>;
}
   return (
   <>
      <RoomsFilter rooms={rooms}/>
      <RoomsList rooms={sortedRooms}/>
   </>
   );
}
export default withRoomConsumer(RoomContainer);
//export default function RoomContainer() {
    //return (
       // <>
     //   <RoomConsumer>
         //   {}
      //  </RoomConsumer>
      //  <div>
     //      hello from rooms container. 
     //      <RoomsFilter />
      //     <RoomsList />
    //    </div>
   //     </>
   // )
//}
