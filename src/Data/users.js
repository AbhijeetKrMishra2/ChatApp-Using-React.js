import user from '../reducers/user';
 
export const data = {
    profile: {
      id: 1,
      name: "Abhijeet Kumar Mishra",
      image:user.image,
      
        // "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fbiography%2FChris-Hemsworth&psig=AOvVaw3feODZUGhHxppLpg2-K0Ya&ust=1687798795001000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLjy39Ly3v8CFQAAAAAdAAAAABAE",
      contacts: [
        {
          id: 2,
          name: "Robin",
          image:
            "https://st.depositphotos.com/12982378/52204/i/600/depositphotos_522040706-stock-photo-portrait-bearded-asian-man-stylish.jpg",
          chatlog: [
            {
              text: "Hello brother,How are you ?",
              timestamp: "12:36 PM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I am fine Robin. What about you ?",
              timestamp: "12:37 PM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "I am great, Abhijeet.",
              timestamp: "1:00 PM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "lets meet",
              timestamp: "01:01 PM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "Okay bro",
              timestamp: "01:05 PM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 3,
          name: "Glen",
          image:"https://st.depositphotos.com/12982378/56356/i/600/depositphotos_563563796-stock-photo-young-brunette-man-looking-away.jpg",
            // "https://media.istockphoto.com/photos/portrait-of-a-confident-young-man-picture-id1141737652?b=1&k=20&m=1141737652&s=170667a&w=0&h=1Ni7irJ6VB9BXN7LbJIdNHP0h5EMoyJcRyvXl5_nzDs=",
          chatlog: [
            {
              text: "Hi",
              timestamp: "3:00 PM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I am fine Glen, What's about you ?",
              timestamp: "3:02 PM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "I am great,Dear.",
              timestamp: "3:03 PM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "Or maybe not, let me check something and call you. Give me sometime",
              timestamp: "3:30 PM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "Where are you ?",
              timestamp: "4:00 PM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 4,
          name: "Amyla",
          image:
            "https://st3.depositphotos.com/12674628/16943/i/600/depositphotos_169431528-stock-photo-beautiful-student-with-books.jpg",
          chatlog: [
            {
              text: "Hi Abhijeet,!",
              timestamp: "4:30 PM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I am fine Andrew. What about you!",
              timestamp: "04:32 PM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "I am great ,  Abhijeet.",
              timestamp: "04:40 PM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "Are you busy?",
              timestamp: "04:45 PM",
              sender: "user",
              message_id: 4,
            },
            {
              text: " no",
              timestamp: "04:50 PM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 5,
          name: "Charles",
          image:
            "https://st3.depositphotos.com/1743476/16188/i/600/depositphotos_161885550-stock-photo-proud-latin-man.jpg",
          chatlog: [],
        },
        {
          id: 6,
          name: "James",
          image:
            "https://st3.depositphotos.com/11233746/13899/i/600/depositphotos_138998024-stock-photo-handsome-young-man.jpg",
          chatlog: [
            {
              text: "Hey Abhijeet, where is your friend, Simens?",
              timestamp: "05:00 PM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I don't know bro!",
              timestamp: "05:01 PM", 
              sender: "me",
              message_id: 2,
            },
            {
              text: "Are you sure, Abhijeet ?.",
              timestamp: "05:05 PM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "Yes bro, I am damn sure",
              timestamp: "05:07 PM",
              sender: "me",
              message_id: 4,
            },
            {
              text: "All right James",
              timestamp: "05:09 PM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 7,
          name: "Chris",
          image:
            "https://st3.depositphotos.com/33359910/37659/i/600/depositphotos_376597274-stock-photo-handsome-smiling-young-man-isolated.jpghttps://st3.depositphotos.com/33359910/37659/i/600/depositphotos_376597274-stock-photo-handsome-smiling-young-man-isolated.jpg",
          chatlog: [
            {
              text: "Where are you bro ?",
              timestamp: "7:00 PM",
              sender: "me",
              message_id: 1,
            },
            {
              text: "I'm in Market now",
              timestamp: "07:07 PM",
              sender: "user",
              message_id: 2,
            },
            {
              text: "call me ASAP",
              timestamp: "07:07 PM",
              sender: "me",
              message_id: 3,
            },
            {
              text: "ok",
              timestamp: "07:09 PM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "Is everything fine ?",
              timestamp: "07:10 PM",
              sender: "me",
              message_id: 5,
            },
            {
              text: "Yeah !!",
              timestamp: "07:12 PM",
              sender: "user",
              message_id: 6,
            },
          ],
        },
        {
          id: 8,
          name: "Rosy",
          image:"https://st4.depositphotos.com/20363444/28853/i/600/depositphotos_288537332-stock-photo-focused-young-girl-casual-clothes.jpg",
            // "https://global-uploads.webflow.com/5d121ce15cf154f8f7d91740/5fb7e016798aa0ccca2ca0ba_Abhishek%20Dwivedi.jpg",
          chatlog: [],
        },
        {
          id: 9,
          name: "Stokes",
          image:
            "https://st2.depositphotos.com/1273995/8790/i/600/depositphotos_87904862-stock-photo-portrait-of-bearded-man.jpg",
          chatlog: [],
        },
      ],
    },
  };