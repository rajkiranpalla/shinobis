import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      shinobis: [
        {
          "id": 1,
          "name": "Naruto Uzumaki",
          "firstName": "naruto",
          "age": 33,
          "birthdate": "October 10",
          "occupation": ["Hokage"],
          "classifaction": ["Jinchuriki", "Sage", "Sensor Type"],
          "clan": "Uzumaki Clan",
          "best_jutsus": ["Rasen-shuriken", "Bijuu Dama", "Odama Rasenghan"],
          "image_url": "https://wallpapercave.com/wp/wp8562124.jpg"
        },
        {
          "id": 2,
          "name": "Itachi Uchiha",
          "firstName": "itachi",
          "age": 38,
          "birthdate": "June 9",
          "occupation": ["Anbu Captain"],
          "classifaction": ["S-rank", "Missing-Nin"],
          "clan": "Uchiha Clan",
          "best_jutsus": [
            "Amaterasu",
            "Susanoo With Totsuka Blade",
            "Izanami",
            "Most Popular Character in Naruto Series"
          ],
          "image_url": "https://vignette.wikia.nocookie.net/naruto/images/b/bb/Itachi.png/revision/latest/scale-to-width-down/300?cb=20160125182202"
        },
        {
          "id": 3,
          "name": "Hatake Kakashi",
          "firstName": "kakashi",
          "age": 49,
          "birthdate": "September 15",
          "occupation": [
            "Anbu Captain",
            "Hokage",
            "Shinobi Forces",
            "Genin Exams Proctor"
          ],
          "classifaction": ["The Man who lost Everything", "Genius"],
          "clan": "Hatake Clan",
          "best_jutsus": [
            "Chidori",
            "Rasenghan",
            "Kamui",
            "Kamui Shuriken",
            "Susanoo "
          ],
          "image_url": "https://vignette.wikia.nocookie.net/naruto/images/2/27/Kakashi_Hatake.png/revision/latest/scale-to-width-down/300?cb=20170628120149"
        },
        {
          "id": 4,
          "name": "Sasuke Uchiha",
          "firstName": "sasuke",
          "age": 33,
          "birthdate": "July 23",
          "occupation": ["Head of Uchiha Clan"],
          "classifaction": ["Missing-Nin"],
          "clan": "Uchiha Clan",
          "best_jutsus": [
            "Indra's Arrow",
            "Rinneghan Body Switch",
            "Kirin",
            "Chidori",
            "Amaterasu",
            "Chibaku Tensei",
            "Susanoo "
          ],
          "image_url": "https://vignette.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_1.png/revision/latest/scale-to-width-down/300?cb=20170716092103"
        },
        {
          "id": 5,
          "name": "Sakura Haruno",
          "firstName": "sakura",
          "age": 29,
          "birthdate": "March 28",
          "occupation": [
            "Head of Konoha Medical Department",
            "Director of Konoha Children Mental",
            "Health Clinic"
          ],
          "classifaction": ["Medical-Nin"],
          "clan": "Uchiha Clan",
          "best_jutsus": [
            "Chakra Enhanced Strength",
            "Chakra Transfer Technique",
            "Creation Rebirth",
            "Katsuyu: Immense Network Healing"
          ],
          "image_url": "https://vignette.wikia.nocookie.net/naruto/images/6/64/Sakura_Part_1.png/revision/latest/scale-to-width-down/300?cb=20170726101444"
        },
        {
          "id": 6,
          "name": "Kurama",
          "firstName": "kurama",
          "age": "Long Time",
          "birthdate": "March 28",
          "occupation": ["Favourite Tailed Beast in the Show"],
          "classifaction": ["Tailed Beast", "Sage", "Sensor Type"],
          "village": "Konohagakure",
          "best_jutsus": [
            "Chakra Transfer Technique",
            "Continuous Tailed Beast Balls",
            "Tailed Beast Telepathy"
          ],
          "image_url": "https://vignette.wikia.nocookie.net/naruto/images/7/7b/Kurama2.png/revision/latest/scale-to-width-down/300?cb=20140818171718"
        },
        {
          "id": 7,
          "name": "Jiraiya",
          "firstName": "jiraiya",
          "age": 65,
          "birthdate": "November 11",
          "occupation": ["Writer", "Best Teacher in Show", "Funny Pervert"],
          "classifaction": ["The Legendary Sannin", "Sage"],
          "village": "Konohagakure",
          "best_jutsus": [
            "Big Ball Rasengan",
            "Barrier: Toad Gourd Prisons",
            "Summoning Technique (Toad)",
            "Turning into a Frog Technique"
          ],
          "image_url": "https://vignette.wikia.nocookie.net/naruto/images/2/21/Profile_Jiraiya.PNG/revision/latest/scale-to-width-down/300?cb=20160115173538"
        },
        {
          "id": 8,
          "name": "Might Guy",
          "firstName": "might guy",
          "age": 35,
          "birthdate": "January 1",
          "occupation": ["Academy Teacher"],
          "classifaction": [
            "The Greatest Hardworker",
            "The Strongest Taijutsu Character",
            "HardWork Beats Talent StereoType Breaker"
          ],
          "village": "Konohagakure",
          "best_jutsus": [
            "Night Guy",
            "Daytime Tiger",
            "Reverse Lotus",
            "Shadow of the Dancing Leaf"
          ],
          "image_url": "https://vignette.wikia.nocookie.net/naruto/images/3/31/Might_Guy.png/revision/latest/scale-to-width-down/300?cb=20150401084456"
        },
        {
          "id": 9,
          "name": "Minato Namikaze",
          "firstName": "minato",
          "age": 55,
          "birthdate": "January 25",
          "occupation": ["Hokage"],
          "classifaction": [
            "Jinchuriki",
            "Sage",
            "Sensor Type",
            "Fastest Character in the Show"
          ],
          "village": "Konohagakure",
          "best_jutsus": [
            "Flying Thunder God: Guiding Thunder",
            "Dead Demon Consuming Seal",
            "Sage Mode",
            "Spiralling Flash Super Round Dance Howl Style Three"
          ],
          "image_url": "https://vignette.wikia.nocookie.net/naruto/images/7/71/Minato_Namikaze.png/revision/latest/scale-to-width-down/300?cb=20160125175116"
        },
        {
          "id": 10,
          "name": "Shikamaru Nara",
          "firstName": "shikamaru",
          "age": 32,
          "birthdate": "September 25",
          "occupation": [
            "Hokage's Chief Aide",
            "Planner for the Shinobi Union",
            "Head of the Nara Clan"
          ],
          "classifaction": [
            "Most Genius Character in the show",
            "Laziest Person in Shinobi World",
            "A best and Good Friend of All"
          ],
          "clan": "Nara Clan",
          "best_jutsus": [
            "Earth Release: Practice Brick Technique",
            "Shadow Imitation Shuriken Technique",
            "Shadow Clone Technique",
            "Formation Ino–Shika–Chō"
          ],
          "image_url": "https://vignette.wikia.nocookie.net/naruto/images/4/44/Shikamaru_Part_I.png/revision/latest/scale-to-width-down/300?cb=20170419112314"
        },
        {
          "id": 11,
          "name": "Hinata Hyuga",
          "firstName": "hinata",
          "age": 29,
          "birthdate": "December 27",
          "occupation": ["Heiress of the Hyūga Clan"],
          "classifaction": [
            "Most innocent character in the show",
            "Beautiful Lady",
            "True Lover till the End"
          ],
          "clan": "Hyuga Clan",
          "best_jutsus": [
            "Eight Trigrams Twin Lions Crumbling Attack",
            "Eight Trigrams Sixty-Four Palms",
            "Gentle Step Spiralling Twin Lion Fists",
            "Mystical Palm Technique"
          ],
          "image_url": "https://vignette.wikia.nocookie.net/naruto/images/9/97/Hinata.png/revision/latest/scale-to-width-down/300?cb=20141010104729"
        },
        {
          "id": 12,
          "name": "Kiba Inuzuka",
          "firstName": "kiba",
          "age": 33,
          "birthdate": "July 7",
          "occupation": ["Dog Breeder", "Police Officer"],
          "classifaction": ["Hokage Dreamer", "Competitive Guy"],
          "clan": "Inuzuka Clan",
          "best_jutsus": [
            "Beast Human Clone",
            "Fang Rotating Fang",
            "Human Beast Mixture Transformation — Three-Headed Wolf",
            "Super Fang Wolf Fang"
          ],
          "image_url": "https://vignette.wikia.nocookie.net/naruto/images/0/03/Kiba.png/revision/latest/scale-to-width-down/300?cb=20180124105049"
        },
        {
          "id": 13,
          "name": "Shino Aburame",
          "firstName": "shino",
          "age": 33,
          "birthdate": "January 23",
          "occupation": ["Academy Teacher", "Chūnin Exams Proctor"],
          "classifaction": ["Insect Guy", "A generous Thinker"],
          "clan": "Aburame Clan",
          "best_jutsus": [
            "Human Cocoon Technique ",
            "Secret Technique: Insect Tornado ",
            "Parasitic Destruction Insect Technique (Giant Insect, Kidaichū, Kikaichū)",
            "Spindle Formation "
          ],
          "image_url": "https://vignette.wikia.nocookie.net/naruto/images/9/9c/Shino.png/revision/latest/scale-to-width-down/300?cb=20160924021327"
        },
        {
          "id": 14,
          "name": "Neji Hyuga",
          "firstName": "neji",
          "age": 33,
          "birthdate": "July 3",
          "occupation": ["A OP Jonin", "Hyuga's Best Fighter"],
          "classifaction": ["A genius Guy", "Best Uncle"],
          "clan": "Hyuga Clan",
          "best_jutsus": [
            "Eight Trigrams One Hundred Twenty-Eight Palms",
            "Eight Trigrams Palms Revolving Heaven",
            "Gentle Fist Art One Blow Body",
            "Gentle Fist: Tenketsu Needle "
          ],
          "image_url": "https://vignette.wikia.nocookie.net/naruto/images/8/8e/Neji_Part_I_Screenshot.png/revision/latest/scale-to-width-down/300?cb=20160118081119"
        },
        {
          "id": 15,
          "name": "Sai Yamanaka",
          "firstName": "sai",
          "age": 33,
          "birthdate": "November 25",
          "occupation": ["Anbu Chief", "Chūnin Exams Proctor"],
          "classifaction": ["A good Brother", "Always Smiling","Drawing Man"],
          "clan": "Yamanaka Clan",
          "best_jutsus": [
            "Assassination Technique",
            "Earth Release: Hiding Like a Mole Technique",
            "Sealing Technique: Tiger Vision Staring Bullet",
            "Super God Imitating Drawing"
          ],
          "image_url": "https://vignette.wikia.nocookie.net/naruto/images/0/07/Sai_Infobox.png/revision/latest/scale-to-width-down/300?cb=20180314110836"
        },
        {
          "id": 16,
          "name": "Ino Yamanaka",
          "firstName": "ino",
          "age": 29,
          "birthdate": "September 23",
          "occupation": ["Botanist", "Leader of the Konoha Barrier Team"],
          "classifaction": ["Sensor Type", "Medical-nin"],
          "clan": "Yamanaka Clan",
          "best_jutsus": [
            "Formation Ino–Shika–Chō",
            "Mind Body Disturbance Technique ",
            "Chakra Hair Trap Technique",
            "Psycho Mind Transmission "
          ],
          "image_url": "https://vignette.wikia.nocookie.net/naruto/images/d/dd/Ino.png/revision/latest/scale-to-width-down/300?cb=20170622102745"
        },
        {
          "id": 17,
          "name": "Choji Akimichi",
          "firstName": "choji",
          "age": 34,
          "birthdate": "May 1",
          "occupation": ["Police Member", "Member of the Konoha Barrier Team"],
          "classifaction": ["A True Friend", "Foodie"],
          "clan": "Akimichi Clan",
          "best_jutsus": [
            "Formation Ino–Shika–Chō",
            "Ballistic Waterwheel",
            "Super Open Hand Slap",
            "Spiked Human Bullet Tank"
          ],
          "image_url": "https://vignette.wikia.nocookie.net/naruto/images/7/7d/Ch%C5%8Dji_Akimichi.png/revision/latest/scale-to-width-down/300?cb=20200426204415"
        }
      ],
      searchField: ''
    };
  }

  componentDidMount() {
    //todo make a backend to fetch the naruto data
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(users => this.setState({ monsters: users }));

      //post request (Graphql --> jujutsu kaizen)
    //   const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({"query":"query media($id:Int,$page:Int){Media(id:$id){id characters(page:$page,sort:[ROLE,RELEVANCE,ID]){pageInfo{total perPage currentPage lastPage hasNextPage}edges{id role name voiceActorRoles(sort:[RELEVANCE,ID]){roleNotes dubGroup voiceActor{id name{userPreferred}language:languageV2 image{large}}}node{id name{userPreferred}image{large}}}}}}","variables":{"id":113415,"type":"ANIME","page":1}})
    // };
    // fetch('https://reqres.in/api/posts', requestOptions)
    //     .then(response => response.json())
    //     .then(data => console.log(data));
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const {shinobis, searchField } = this.state;
    const filteredShinobis = shinobis.filter(shinobi =>
      shinobi.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>Naruoto Anime Search</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList shinobis={filteredShinobis} />
      </div>
    );
  }
}

export default App;
