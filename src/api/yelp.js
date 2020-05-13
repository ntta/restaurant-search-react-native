import axios from'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer Om7o9BoujNHNNQSzxwTjMvF2yA5QCjoZQ0EjQK5cFUBoEiKqcVt8bCB1Cv5792mTNB1haNo55HeiNPiWepB0Ur8dQ-Tdn-PwSFXz6MAe4nsZf2TVWiIQjEVJoYW7XnYx'
  }
});
