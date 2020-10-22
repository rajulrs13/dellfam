import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        product: "CICD",
        product_owner: "Anupam Piareji",
        manager: "Radhika Maramganti",
        location: "Hyderabad",
        email: "Anupam_Piareji@dell.com",
        description: "CICD automation based on different templates.",
      },
      {
        product: "Self Service Workspace Provisioning",
        product_owner: "Anne-Marie Duffy",
        manager: "Radhika Maramganti",
        location: "Ireland",
        email: "Anne_Marie@dell.com",
        description: "Automating workspace provisioning for greenplum and providing cheaper archival solutions.",
      },
      {
        product: "Denodo Integration",
        product_owner: "Atul Singh",
        manager: "Dinesh Kopadda",
        location: "Bangalore",
        email: "Atul_Singh@dell.com",
        description: "Denodo plugins and integration for faster database access.",
      },
      {
        product: "BlackDuck vulnerabilities removal ",
        product_owner: "Siva Dhandhekar",
        manager: "Ramesh Jampula",
        location: "Hyderabad",
        email: "Siva_Dhandhekar@dell.com",
        description: "Improving code quality before movement to production.",
      },
      {
        product: "SAP team",
        product_owner: "Jake Harris",
        manager: "James Stewart",
        location: "Round Rock",
        email: "Jake_Harris@dell.com",
        description: "Maintaining and managing SAP integrations across Dell.",
      },
      {
        product: "Project Zero",
        product_owner: "Ranjeetha Raja",
        manager: "Dinesh Kopadda",
        location: "Bangalore",
        email: "Ranjeetha_Raja@dell.com",
        description: "Managing and keeping checks on data extractions in Dell.",
      },
      {
        product: "Jarvis",
        product_owner: "Alfonzo Loha",
        manager: "Patrick O'Lio",
        location: "Malaysia",
        email: "Alfonzo_Loha@dell.com",
        description: "Chatbot for sales insights.",
      },
      {
        product: "Incident Miner",
        product_owner: "Marie Frankling",
        manager: "Thomas Sujai",
        location: "Bangalore",
        email: "Marie_Frankling@dell.com",
        description: "Automating incident approval and increasing the efficiency of the process.",
      },
      {
        product: "Near Real Time (NRT)",
        product_owner: "Chandra Sujana",
        manager: "Eric Wolf",
        location: "Mexico",
        email: "Chandra_Sujana@dell.com",
        description: "Increasing data access speed and updating of workspaces.",
      },
      {
        product: "Sales Insights",
        product_owner: "Vijay Kokatapatti",
        manager: "Soma Murthy",
        location: "Bangalore",
        email: "Atul_singh@dell.com",
        description: "Platform to get crucial sales insights of Dell APJC ",
      }
    ],
    my_groups: [
      {
        id: 1,
        img: "https://picsum.photos/500/300?image=15",
        title: "Group 1",
        description: "Description",
        member_count: "118",
        event_count: "5",
      },
      {
        id: 2,
        img: "https://picsum.photos/500/300?image=25",
        title: "Group 2",
        description: "Description 2",
        member_count: "234",
        event_count: "18",
      },
    ],
    public_events: [
      {
        img: "https://picsum.photos/500/300?image=15",
        title: "Event 1",
        date: "28/10/20",
        time: "17:30",
        members_attending: "97"
      },
      {
        img: "https://picsum.photos/500/300?image=20",
        title: "Event 2",
        date: "07/11/20",
        time: "20:30",
        members_attending: "243"
      },
    ],
    private_events: [
      {
        img: "https://picsum.photos/500/300?image=15",
        title: "Event 1",
        date: "28/10/20",
        time: "17:30",
        members_attending: "97"
      },
      {
        img: "https://picsum.photos/500/300?image=20",
        title: "Event 2",
        date: "07/11/20",
        time: "20:30",
        members_attending: "243"
      },
    ],
    games: [
      {
        id: 1,
        img: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
        description: "Description 1",
        title: "Title 1",
        waiting_time: "2",
      },
      {
        id: 2,
        img: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
        description: "Description 2",
        title: "Title 2",
        waiting_time: "3",
      },
      {
        id: 3,
        img: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
        description: "Description 3",
        title: "Title 3",
        waiting_time: "3",
      },
      {
        id: 4,
        img: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
        description: "Description 4",
        title: "Title 4",
        waiting_time: "5",
      },
      {
        id: 5,
        img: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
        description: "Description 5",
        title: "Title 5",
        waiting_time: "4",
      },
    ],
    my_workspace_requests: [
      {
        description: "sadas",
        end_time: "17:25",
        request_date: "2020-10-21",
        selected_date: "2020-10-30",
        selected_office: "Dell-6 Bangalore",
        start_time: "02:21",
        status: 0,
      },
      {
        description: "sadas",
        end_time: "17:25",
        request_date: "2020-10-20",
        selected_date: "2020-10-30",
        selected_office: "Dell-6 Bangalore",
        start_time: "02:21",
        status: 1,
      },
      {
        description: "sadas",
        end_time: "17:25",
        request_date: "2020-10-19",
        selected_date: "2020-10-30",
        selected_office: "Dell-6 Bangalore",
        start_time: "02:21",
        status: 2,
      },
    ],
  },
  getters: {
    products(state) {
      return state.products
    },
    my_groups(state) {
      return state.my_groups
    },
    public_events(state) {
      return state.public_events
    },
    private_events(state) {
      return state.private_events
    },
    games(state) {
      return state.games
    },
    my_workspace_requests(state) {
      return state.my_workspace_requests
    }
  },
  mutations: {
    submitRequest(state, payload) {
      let temp_requests = state.my_workspace_requests
      temp_requests.unshift(payload)
      state.my_workspace_requests = temp_requests
    }
  },
  actions: {
  },
  modules: {
  }
})
