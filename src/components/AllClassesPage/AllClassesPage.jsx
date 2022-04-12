import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AllClassesPage() {

  const classes = [
    {
      id: 1,
      classname: "HIIT",
      description: "high intensity interval training",
      trainer_user_id: 2,
      date: "2022-04-12",
      start_time: "12:00:00",
      end_time: "13:00:00",
      location: "at the park?",
      class_size: 20
    },
    {
      id: 3,
      classname: "Kick boxing",
      description: "This is a class where we are going to kick and box",
      trainer_user_id: 1,
      date: "2022-04-13",
      start_time: "09:00:00",
      end_time: "10:00:00",
      location: "Near the truck",
      class_size: 18
    },
    {
      id: 2,
      classname: "Yoga",
      description: "Its yoga",
      trainer_user_id: 1,
      date: "2022-04-13",
      start_time: "14:00:00",
      end_time: "15:00:00",
      location: "Some place noisy",
      class_size: 10
    }
  ]

  return (
    <div>
      <h2>Nav bar here</h2>
      <ul>
      {classes.map((event, i) =>(
        <li key={i}>
        {event.date}
        {event.start_time}-{event.end_time}
        {event.classname} with {event.trainer_user_id}
        </li>
      ))}
      </ul>
    </div>
  );
}

export default AllClassesPage;
