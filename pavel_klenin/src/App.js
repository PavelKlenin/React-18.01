import React from 'react';
import ReactDOM from 'react-dom';

import Developer from './components/Developer';
import WelcomeModal from './components/WelcomeModal';
import Blog from './components/Blog';

import style from './style/App.css';

class App extends React.Component {
    render () {
        const posts = [
            {
                title: "The gorilla joke", 
                postBody:"A gorilla went into a bar and ordered a whisky. The barman thought that it was"+
                    "unusual to see a gorilla in a bar drinking whisky and, thinking that gorillas"+
                    "must be stupid, he thought he would try to take advantage of the situation and"+
                    "overcharge him. He served the gorilla the whisky and said, 'That'll be fifty"+
                    "dollars please'. The gorilla immediately took out his wallet and paid the"+
                    "barman, who was very happy. The gorilla drank his whisky quietly and then"+
                    "ordered another. The barman served him and charged him another fifty"+
                    "dollars. As the gorilla was drinking his whisky, the barman got curious and"+
                    "decided to find out why the gorilla was in the bar. So, to strike up a"+
                    "conversation, he said, 'It's funny, we don't get many gorillas in here'."+
                    "'I'm not surprised with the price of your whisky.' the gorilla replied.", 
                date:"01.01.2000", 
                author:"Jonh D.",
            },
            {
                title: "The meeting", 
                postBody:"The meeting was interesting. Mr Wong invited me to The Italian Kitchen at"+
                    "The Quay. We ordered a drink and talked for a while before he wanted to start"+
                    "talking business. However, soon after we asked for the menu, he said he"+
                    "wished to get straight to the point and asked what I thought about the new"+
                    "factory project. I hinted that I thought it was located in the wrong place and"+
                    "asked him if he had considered moving it to Shanghai. He agreed that that"+
                    "would be a better idea.",
                date:"10.10.2010", 
                author:"James R.",
            },
            {
                title: "Daily routine", 
                postBody:"She gets up at about 7 o'clock and then drinks a cup of coffee. When she"+
                    "feels a bit more alert she showers and changes. She buys breakfast at the"+
                    "café below her block and takes it to work to eat. She likes something sweet in"+
                    "the morning so she gets croissants and Danish pastries."+
                    "She travels to work on the underground and arrives at about 8.45. She chats"+
                    "to her colleagues for a while and starts work at nine o'clock. She checks her"+
                    "email and then spends the rest of the morning on the telephone to customers."+
                    "She leaves the office for lunch at 12 o'clock."+
                    "She goes home after work or sometimes eats out or meets her friends for a"+
                    "drink. She goes to bed at midnight most weekdays and saves her energy for"+
                    "the weekends.", 
                date:"22.22.2015", 
                author:"Pierre O.",
            },
            {
                title: "Stained Lips", 
                postBody:"She dabs her lips with Faithful Fawn. He hovers behind, runs his fingers"+
                    "through his graying hair, eyes fixed on his reflection. How do I look? Her mouth"+
                    "forms a perfect “O,” presses shut. Handsome. He points. When you move your mouth"+ 
                    "that way, you look like a fish. Her mind recedes to their rehearsal dinner. The"+ 
                    "baby photos her mother had blown up. Adorable, she’d said when she saw his. Your"+ 
                    "forehead’s so high, he’d responded. She drops her stained tissue in the toilet."+ 
                    "Flushes. What’s that lip color? he asks. Fawn, she answers, and flashes her broad"+ 
                    "smile.", 
                date:"01.10.2009", 
                author:"Jan E.",
            },
            {
                title: "An Addition to the Family", 
                postBody:"They smell the same, your woman and child, drenched in the sweet"+ 
                    "of milk and the salt of sweat. They look the same, curled into each other"+ 
                    "like a snail and its shell, on the shifting sands of the queen-sized bed."+ 
                    "They breathe the same, their chests rising and falling, attuned to a single"+
                    "tide. They had seemed for a day, a moment, to be two, but really, they were"+
                    "always one. And you, adrift in the moon lit white, with no blanket, no"+ 
                    "pillow, only the weight of wondering, now, if it is you who is the plus one.", 
                date:"28.02.2010", 
                author:"Lavanya V.",
            },
        ]

        const developer = new Developer();
        developer.showDev();

        return (
            <div className={style.container}>
                <WelcomeModal/>
                <Blog posts={posts}/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.root'));


