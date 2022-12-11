

const app = Vue.createApp({
 data() {
    return {
    //Friends list: An array of objects containing key:value pairs for friend info
	  friends: [
        {id: 'manuel', 
        name: 'Manuel Lorenz',
        phone: '01234 578 991',
        email: 'manuel@localhost.com',
        },
        {id: 'julie',
        name: 'Julie Jones',
        phone: '09876 543 221',
        email: 'julie@localhost.com'
        }
      ],
      //The data property below does not conflict with component data
      //But is now unneccessary
      //By default, details aren't visible
     // detailsAreVisible: false
    };
  }//, 
  //The methods below do not conflict with its' component as it is a separate entity.
  //But, they are now unneccessary
  //methods: {
    //Show and hide details of friend profile
    //toggleDetails() {
        //this.detailsAreVisible = !this.detailsAreVisible
   // }
  });

//Components are like mini Vue apps
//Component must be above the mounting of the app

//New component with arguements identifier of 'friend-contact' & the config object
app.component('friend-contact', {
  //The component will now contain all of this code --->
  //The V-For loop is removed because each individual component should contain 1 friend
	template: `
        <li>
          <h2> {{ friend.name }}</h2>
          <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide': 'Show'}}</button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }} </li>
            <li><strong>Email:</strong> {{ friend.email }} </li>
          </ul>
        </li>
    `,
  //Define data and methods of component
  data() {
    return {
      detailsAreVisible: false,
      friend:
       {id: 'manuel', 
        name: 'Manuel Lorenz',
        phone: '01234 578 991',
        email: 'manuel@localhost.com'
      }
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible
    }
  }
});

app.mount('#app'); //App 1

