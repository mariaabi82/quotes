const quotes = [
    {
        name: 'Hillary Clinton',
        quote: 'To all the little girls who are watching this, never doubt that you are valuable and powerful, and deserving of every chance and opportunity in the world to pursue and achieve your own dreams.'
    },
    {
        name: 'Malala Yousafzai',
        quote: 'I raise up my voice—not so that I can shout, but so that those without a voice can be heard. … We cannot all succeed when half of us are held back.'
    },
    {
        name: 'Margaret Thatcher',
        quote: 'If you want something said, ask a man; if you want something done, ask a woman.'
    },
    {
        name: 'Madonna',
        quote: 'I am tough, ambitious, and I know exactly what I want. If that makes me a bitch, okay.'
    },
    {
        name: 'Madeleine Albright',
        quote: 'It took me quite a long time to develop a voice, and now that I have it, I am not going to be silent.'
    },
    {
        name: 'Chimamanda Ngozi Adichie',
        quote: 'Of course I am not worried about intimidating men. The type of man who will be intimidated by me is exactly the type of man I have no interest in.'
    },
    {
        name: 'G.D. Anderson',
        quote: "Feminism isn't about making women stronger. Women are already strong, it's about changing the way the world perceives that strength."
    },
    {
        name: 'Gloria Steinem',
        quote: "Women are always saying, 'We can do anything that men can do.' But men should be saying, 'We can do anything that women can do.'"
    },
    {
        name: 'Maya Angelou',
        quote: "I love to see a young girl go out and grab the world by the lapels. Life's a bitch. You've got to go out and kick ass."
    },
    {
        name: 'Ruth Bader Ginsburg',
        quote: "Women belong in all places where decisions are being made. … It shouldn't be that women are the exception."
    },
    {
        name: 'Erin McKean',
        quote: "You don't have to be pretty. You don't owe prettiness to anyone. Not to your boyfriend/spouse/partner, not to your co-workers, especially not to random men on the street. You don't owe it to your mother, you don't owe it to your children, you don't owe it to civilization in general. Prettiness is not a rent you pay for occupying a space marked 'female.'"
    },
    {
        name: 'Melinda Gates',
        quote: "A woman with a voice is, by definition, a strong woman."
    },
    {
        name: 'Gloria Steinem',
        quote: "A feminist is anyone who recognizes the equality and full humanity of women and men."
    },
    {
        name: 'Rihanna',
        quote: "There's something so special about a woman who dominates in a man's world. It takes a certain grace, strength, intelligence, fearlessness, and the nerve to never take no for an answer."
    },
    {
        name: 'Michelle Obama',
        quote: "There is no limit to what we, as women, can accomplish."
    },
    {
        name: 'Bette Davis',
        quote: "When a man gives his opinion, he's a man; when a woman gives her opinion, she's a bitch."
    },
    {
        name: 'Diane von Furstenberg',
        quote: "I always wanted to be a femme fatale. Even when I was a young girl, I never really wanted to be a girl. I wanted to be a woman."
    },
    {
        name: 'Audre Lorde',
        quote: "I am not free while any woman is unfree, even when her shackles are very different from my own."
    },
    {
        name: 'Hillary Clinton',
        quote: "When there are no ceilings, the sky's the limit. So let's keep going—let's keep going until every one of the 161 million women and girls across America has the opportunity she deserves to have."
    },
    {
        name: 'bell hooks',
        quote: 'Feminism is for everybody'
    },
    {
        name: 'Nancy Pelosi',
        quote: "Women are leaders everywhere you look—from the CEO who runs a Fortune 500 company to the housewife who raises her children and heads her household. Our country was built by strong women, and we will continue to break down walls and defy stereotypes."
    },
    {
        name: 'Emma Watson',
        quote: "The more I have spoken about feminism the more I have realized that fighting for women's rights has too often become synonymous with man-hating. If there is one thing I know for certain, it is that this has to stop."
    },
    {
        name: 'Shonda Rhimes',
        quote: "Words have power. TV has power. My pen has power."
    },
    {
        name: 'Sheryl Sandberg',
        quote: "We need women at all levels, including the top, to change the dynamic, reshape the conversation, to make sure women's voices are heard and heeded, not overlooked and ignored."
    },
    {
        name: 'Hillary Clinton',
        quote: "Whether I am meant to or not, I challenge assumptions about women. I do make some people uncomfortable, which I'm well aware of, but that's just part of coming to grips with what I believe is still one of the most important pieces of unfinished business in human history—empowering women to be able to stand up for themselves."
    },
    {
        name: 'Beyoncé',
        quote: "We need to reshape our own perception of how we view ourselves. We have to step up as women and take the lead."
    },
    {
        name: 'Eleanor Roosevelt',
        quote: "Women must learn to play the game as men do."
    },
    {
        name: 'Meryl Streep',
        quote: "You could make a case that, along with the technological revolution, the most provocative upending destabilizing thrilling change in the course of human history is that we’re finally in it. … We're here now, women are in the world, and we will not be bullied."
    },
    {
        name: 'Kamala Harris',
        quote: "No woman should be told she can't make decisions about her own body. When women's rights are under attack, we fight back."
    },
    {
        name: 'Janelle Monáe',
        quote: "Women will be hidden no more. We will not remain hidden figures. We have names. … It was woman that gave you Dr. Martin Luther King, Jr. It was woman that gave you Malcolm X. And according to the Bible, it was a woman that gave you Jesus. Don't you ever forget it."
    },
    {
        name: 'Amy Schumer',
        quote: "I am a woman with thoughts and questions and shit to say. I say if I'm beautiful. I say if I'm strong. You will not determine my story—I will."
    },
    {
        name: 'Naomi Wolf',
        quote: "For I conclude that the enemy is not lipstick, but guilt itself; we deserve lipstick, if we want it, AND free speech; we deserve to be sexual AND serious—or whatever we please. We are entitled to wear cowboy boots to our own revolution."
    },
    {
        name: 'Harriet Beecher Stowe',
        quote: "I feel now that the time is come when even a woman or a child who can speak a word for freedom and humanity is bound to speak. I feel now that the time is come when even a woman or a child who can speak a word for freedom and humanity is bound to speak."
    },
    {
        name: 'Hillary Clinton',
        quote: "Human rights are women's rights and women's rights are human rights, once and for all."
    },
    {
        name: 'Rosa Luxemburg',
        quote: "Women's freedom is the sign of social freedom."
    },
    {
        name: 'Gia Tolentino',
        quote: "Women’s speech—and the fact that we are now listening to it—has enraged men in a way that makes them determined to reëstablish the longstanding hierarchy of power in America. ... And yet this awful truth will not stop women from speaking, and I do not think that it will turn a movement into a moment. It has become clear that there is not nearly enough left to lose."
    },
    {
        name: 'Alexandria Ocasio-Cortez',
        quote: "Justice is about making sure that being polite is not the same thing as being quiet. In fact, often times, the most righteous thing you can do is shake the table."
    },
    {
        name: 'Ilhan Omar',
        quote: "They cannot stand that a refugee, a black woman, an immigrant, a Muslim, shows up in Congress thinking she's equal to them. But I say to them, 'How else did you expect me to show up?'"
    },
    {
        name: 'Angela Davis',
        quote: "In my opinion, the most exciting potential of women of color formations resides in the possibility of politicizing this identity—basing the identity on politics rather than the politics on identity."
    },
    {
        name: 'Toni Morrison',
        quote: "Freeing yourself was one thing, claiming ownership of that freed self was another."
    },
    {
        name: 'Edith Warton',
        quote: "I have sometimes thought that a woman's nature is like a great house full of rooms: there is the hall, through which everyone passes in going in and out; the drawingroom, where one receives formal visits; the sitting-room, where the members of the family come and go as they list; but beyond that, far beyond, are other rooms, the handles of whose doors perhaps are never turned; no one knows the way to them, no one knows whither they lead; and in the innermost room, the holy of holies, the soul sits alone and waits for a footstep that never comes."
    },
    {
        name: 'Nellie Bly',
        quote: "'It is impossible for you to do it,' was the terrible verdict. 'In the first place you are a woman and would need a protector, and even if it were possible for you to travel alone you would need to carry so much baggage that it would detain you in making rapid changes. Besides you speak nothing but English, so there is no use talking about it; no one but a man can do this. 'Very well,' I said angrily, 'Start the man, and I'll start the same day for some other newspaper and beat him."
    },
    {
        name: 'Jane Austen',
        quote: "I hate to hear you talking so like a fine gentleman, and as if women were all fine ladies, instead of rational creatures. We none of us expect to be in smooth water all our days."
    },
    {
        name: 'Angelina Jolie',
        quote: "Around the world there are countless examples of women rising, taking leadership, taking their destiny into their own hands, inspiring all of us. But women and girls are still the majority of the victims of war. They are over half of all refugees, and the vast majority of the victims of rape and other sexual and gender-based violence."
    },
    {
        name: 'Angela Davis',
        quote: "Black women have had to develop a larger vision of our society than perhaps any other group. They have had to understand white men, white women, and black men. And they have had to understand themselves. When black women win victories, it is a boost for virtually every segment of society."
    },
    {
        name: 'Assata Sakur',
        quote: "A revolutionary woman can't have no reactionary man."
    },
    {
        name: 'Chanel Miller',
        quote: "When a woman is assaulted, one of the first questions people ask is, Did you say no? This question assumes that the answer was always yes, and that it is her job to revoke the agreement. To defuse the bomb she was given. But why are they allowed to touch us until we physically fight them off? Why is the door open until we have to slam it shut?"
    },
    {
        name: 'Virginia Wolf',
        quote: "There is no gate, no lock, no bolt that you can set upon the freedom of my mind."
    }
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote () {
    let number = Math.floor(Math.random()*quotes.length);

    console.log(number);

}