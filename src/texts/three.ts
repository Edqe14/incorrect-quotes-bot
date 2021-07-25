const prompts = [
  '{A}: {B} and I were crossing the street, and this dude drove by and honked at us \n {C}: *Sighing* What did {B} do? \n {A}: They chased him to the next red light, then reached into his window and... \n {B}: Who wants a steering wheel?',
  '{A}: What if I press the brake and gas at the same time? \n {B}: The car takes a screenshot. \n {C}: For the last time, get the fuck out.',
  '{A}: HELP! I TOLD {I} I’D COOK DINNER TONIGHT BUT I CAN’T COOK! \n {B}, pouring milk directly into the cereal bag: And you thought I could help?',
  "{A}: {B} and I don’t use pet names. \n {C}: I see. Hey, what do bees make? \n {A}: Honey? \n {B}: Yes, dear? \n {A}: \n {C}: Don't ever lie to my face again.",
  "{A}: I know you snuck out last night, {B}. \n {C}: Play dumb! \n {B}: Who's {B}? \n {C}: NOT THAT DUMB!!!",
  "{A}: {C} and I are having a baby. \n {B}: That's gre- \n {A}, slamming adoption papers on the table: It's you, sign here.",
  '*The group is getting into the car* \n {A}: I’m driving. \n {B}, out of view: Shotgun! \n {C}, turning to face {B}: Aww! But you had it on the way here- \n Everyone except {B}: WOAH- \n {B}, holding a shotgun: No! I found a shotgun! And I want the front seat! *Pumps gun*',
  "{A}: If you had to choose between {B} and all the money I have in my wallet, which would you choose? \n {C}: That depends, how much money are we taking about? \n {B}: {C}! \n {A}: 63 cents. \n {C}: I'll take the money. \n {B}: ***{I}!!!***",
  '{A}: We need to get through this locked door. {B}, give me your credit card. \n {B}: Here. \n {A}, pocketing it: Thanks. {C}, kick down the door.',
  "{A}: You have to apologize to {B} \n {C}: Fine. \n {C}: 'Unfuck you' or whatever.",
  '{A}: Dandelions symbolize everything I want to be in life \n {B}: Fluffy and dead with a gust of wind? \n {A}: Unapologetic. Hard to kill. Feral, filled with sunlight, bright, beautiful in a way that the conventional and controlling hate but cannot ever fully destroy. Stubborn. Happy. Bastardous. Friends with bees. Highly disapproving of lawns. Full of wishes that will be carried far after I die. \n {C}: edible',
  '{A}: Fitness tip: never stop pushing yourself. Some say 8 hours of sleep is enough. Why not keep going? Why not 9? Why not 10? Strive for greatness. \n {B}: Next time you’re working out do 15 push ups instead of 10. Run 3 miles instead of 2. Eat a whole cake instead of just a slice. Burn your ex’s house down. You can do it. I believe in you. \n {C}: There were so many mixed messages in that I can’t-',
  '{A}: Let me show you a picture from last night that really upset me \n {B}: Okay, but in my defense, {C} bet me 50 cents I couldn’t drink all that shampoo. \n {A}: That’s not what I wanted to- you drank SHAMPOO?!',
  "{A}: Are you the big spoon or the little spoon? \n {B}: I'm a knife. \n {C}, from across the room: They're the little spoon.",
  '{A}: Do you ever want to talk about your emotions, {B}? \n {B}: … No. \n {C}: I do! \n {A}: I know, {C}. \n {C}: I’m sad! \n {A}: I know, {C}.',
  '{A}: Who thinks I can fit 15 marshmallows in my mouth? \n {B}: You’re a hazard to society \n {C}: And a coward. DO TWENTY.',
  "{A}: Come on, I wasn’t that drunk last night. \n {B}: You were flirting with {C}. \n {A}: So what? They're my partner. \n {B}: You asked them if they were single. \n {A}: \n {B}: And then you cried when they said they weren't.",
  '{A}: What time is it? \n {B}: I don’t know; pass me that saxophone and we’ll find out \n {B}: *Plays sax loudly and extremely out of tune* \n {C}: WHO THE FUCK IS PLAYING THE SAXOPHONE AT TWO IN THE MORNING \n {B}: It’s 2 am',
  "{A}: In my defense, I was left unsupervised. \n {B}: Wasn't {C} with you? \n {C}: In my defense, I was also left unsupervised.",
  '{A}: I can’t believe you live nearby, and you won’t let anyone crash at your place. \n {B}: You people already know too much about me. \n {C}: I know exactly three facts about you, and one of them is that you won’t let any of us crash at your place.',
  "{A}: Would you stab your best friend in the leg for 10 million gold? \n {B}: You stab me, and then when my leg gets better, we buy a big-ass house. \n {C}: You can stab me too, then we'll have 20 million. \n {B}: Good thinking.",
  '{A}: If I die, my funeral is going to be the biggest party ever and you’re all invited \n {B}: If? \n {C}: Great, the only party I’ve ever been invited to and they might not even die.',
  '{A}, holding a python: Guys I impulsively bought a snake, what do I name him \n {B}: You did WHAT– \n {C}: William Snakepeare',
  '*The squad is having dinner together*\n{A}: {B}, can you pass the salt?\n{B}: *Throws {C} across the table*',
  "{A}: How's the sexiest person here~?\n{B}: I don't know, how are they~?\n{A}, flustered: I-\n{C}, from across the room: I'm doing great, thanks!",
  '{A}, whispering to {B}, who’s on the phone with {C}: Ask them something!\n{B}: How are you feeling?\n{C}: Fine.\n{A}: Something personal!\n{B}: At what age did you first get your period?',
  "{A}: I trust {B}.\n{C}: You think they know what they're doing?\n{A}: I wouldn't go that far.",
  '{A}: They stole from me first!\n{B}: Mhm.\n{A}: Stole my heart...\n{C}: It is still illegal to commit murder.',
  "{A}: Don't worry, I got a plan.\n{B}: Alright.\n{A}: TraitorSayWhat?\n{C}: Excuse me?\n{A}: What?\n{B}:\n{A}:\n{A}: No wait-",
  '{A}: Hey, {B}? Can I get some dating advice?\n{B}: Just because I’m with {C} doesn’t mean I know how I did it.',
  "The squad is trying to con some random guy\n{A}: Um, {B}, why are you pretending I'm this guy's family?\n{B}: We need money!\n{A}: You're scamming him?\n{B}: I was thinking more like flat-out stealing from him?\n{A}: What?! No way!\n{B}: Why not? We already stole {C}!\n{C}: Hey guys\n{A}: No, we didn't. {C} can think and talk for themself, they can do whatever they want!\n{C}: I wanna steal",
  "{A}: Why are you on the floor?\n{B}: I'm depressed.\n{B}: Also I was stabbed, can you get {C}, please.",
  "*The squad is talking about what it'd be like to open up a homemade Pokemon gym*\n{A}, joking: {B}'s just sitting at the end, juggling- fushigi-ing 2 glass balls, in super tight pants, just waiting for their kid delivery once they best their minions.\n{B}: Well they would be Pokeballs. And also it's not a kid delivery. There's no fucking guarantee that a kid that comes into the *beginning* of my crucible makes it to the *end* of it undefeated.\n{B}: In fact, I'm gonna stack this gym! With fuckin pros!\n{B}: It's- It's gonna be brutal. It's gonna be a torture gym.\n{C}: Well- Well what's the theme? Are you like- is it a bug theme, or like-\n{B}: YEAH, {I}. UH- UH- UH- UH YEAH {I}. IM GONNA OPEN UP A *BUG TYPE* POKEMON GYM. YOU ***IDIOT***.\n{B}: YEAH THAT'S WHAT I WANT, BECAUSE I WANNA GIVE- I WANNA SHIT OUT BADGES FOR EVERY HAM AND EGGER THAT COMES TO MY FRONT DOOR.\n{A}: *Cracking up*\n{B}: YEAH, {I}. 'Uhh, go Caterpie! >~>' That's me, you FUCKING imbecile. 'Yeah go- uhhh- d-do your best, Kakuna!'\n{B}: WHAT ARE YOU FUCKING TALKING ABOU- Yeah a ~bug type~ gym.\n{C}:\n{A}: Okaaay-\n{C}: Alright, um, I'm gonna go. I've embarrassed myself...\n{A}: Maybe fire? Fire type?\n{C}: Yeah fire-based? Like- have fires?{B}: Yeah, yeah I'll probably just- That's a good idea {A} I'll probably just do a fire type one... SO THAT *ONE* KID WITH *ONE* BLASTOISE CAN FUCK UP MY WHOLE SHOP.\n{B}: KILLED ALL OF US WITH ONE BLASTOISE, HUH? WOW. SHIT I SHOULD'VE-\n{C}: Just do rock, then! Just do rock type!\n{B}, voice dripping with contempt: ***The same Blastoise...***",
  "{A}: Are you sure this is the right direction?\n{B}: Certainly, I'm as sure as I am honest!\n{C}: In that case, we're *definitely* lost.",
  "{A}: Naturally, *we* are on the cutting edge of technology.\n{B}, amazed: Wow...\n{C}, to {B}: Well what does that mean?\n{B}: I don't know.\n{B}, to {A}: What does that mean?",
  '{A}, trying to ask {B} out: Would you like to stay for dinner?\n{C}: WOULD YOU LIKE TO STAY FOREVER?',
  '{A}: We need a distraction.\n{B}: Is anyone here good at jumping up and down and making weird noises?\n{C}, whispering: My time has come',
  '*{A} and {B} sitting in jail together*\n{B}: So who should we call?\n{A}: I’d call {C}, but I feel safer in jail',
  '{A}: I really like this whole ‘good guy, bad guy’ thing you guys have going on.\n{B}: It’s not an act, it’s just that I’m mean and {C} isn’t',
  '{A}: WHY. why did you give {C} a KNIFE?!\n{B}: I’m sorry. They said they felt unsafe.\n{A}: Now *I* feel unsafe!\n{B}: I’m sorry.\n{B}: ... would you like a knife?',
  "{A}: {B}, keep an eye on {C} today. They're going to say something to the wrong person and get punched.\n{B}: Sure, I’d love to see {C} get punched.\n{A}: Try again.\n{B}, sighing: I will stop {C} from getting punched.",
  '{A}, negotiating with {B}: We have {C}. Give us ten thousand dollars and they will be returned to you unharmed\n{C}: Whoa, whoa, wait, you think I’m only worth ten thousand dollars?\n{A}:\n{C}: MAKE IT ONE MILLION–\n{A}: {I} STOP',
  '{A}: Here’s a fun Christmas idea. We hang mistletoe, but instead of kissing, you have to FIGHT whoever else is under it.\n{B}: {A} no.\n{C}: Mistlefoe.\n{B}: Please stop encouraging them.',
  '{A}, to {B}: My life is in the hands of an idiot!\n{B}, motioning to themself and {C}: No no no no no, TWO idiots!',
  '{A}: In your opinion, what’s the height of stupidity?\n{B}: *turning to {C}* How tall are you?',
  "{A}: I love you guys, you're the best thing that's happened to me.\n{B}: We're the best thing that's ever happened to you?\n{A}: Yes!\n{C}: I'm starting to feel a little sorry for you.",
  "{A}: Tell {B} about the birds and the bees.\n{C}: They're disappearing at an alarming rate.",
  "{A}, at a restaurant: You guys should get the orange soda, it's amazing.\n{B}: Okay\nWaiter: Can I get you guys anything to drink?\n{A}: Orange soda, please!\n{B}: I'll have the strawberry soda.\n{C}: Me too, strawberry soda.\n{A}:",
  '{A}: So, what, now I’m just supposed to do anything that {B} does? I mean, what if they jumped off a cliff?\n{C}: If {B} were to jump off a cliff, they would’ve done their due diligence regarding the height of the cliff, the depth of the water, and the angle of entry, so yes. If you see {B} jump off a cliff, by all means, jump off a cliff.\n{A}: *You* jump off a cliff!\n{C}: Gladly. Provided {B} did first.',
  '{A}: {C}, can I talk to you for a second?\n{C}: Yeah, what’s up? Lemme guess. You and {B} are having problems and you want me to teach you how to kiss?\n{A}: What? No, stop that. I know how to kiss. I’ve read books.',
  '{A}: What do you think {B} will do for a distraction?\n{C}: They’ll probably, like, make a noise or throw a rock. That’s what I would do.\n*Building explodes and several car alarms go off*\n{C}: ... or they could do that.',
  "{A}: What's a word thats a mix between 'sad' and 'mad'?\n{B}: Disgruntled, miserable, desolated-\n{C}: Smad.",
  "{A}: Please bring home PURIFIED water with NO minerals added for taste\n{B}: We got spring water\n{A}: NO.\n{C}: with EXTRA minerals\n{B}: it's like licking a stalagmite\n{A}: DON'T COME HOME.\n{C}: Mmmmm cave water",
  "{A}: If I accidentally sat on a voodoo doll of myself, would I be trapped forever in that position, doomed to starve to death?\n{B}: How am I supposed to know?\n{C}: You say, as if we don’t use you as a source of knowledge of the occult.\n{B}: *sighs*\n{B}: You wouldn't be trapped.",
  '{A}, driving {B} and {C}: So how was your day?\n{B}: We almost got surprise adopted!\n{A}: What?\n{C}: We almost got kidnapped.\n{A}: Oh, okay.\n{A}: *slams on the breaks* WAIT WHAT?!',
  '{A}: While I’m gone, {B}, you’re in charge.\n{B}: Yes!!!\n{A}, whispering: {C}, you’re secretly in charge.\n{C}: Obviously.',
  '{A}: {B}, what do IDK, LY, and TTYL mean?\n{B}: I don’t know, love you, talk to you later\n{A}: Ok, I love you too, I’ll just ask {C}.',
  '{A}: Sometimes I drink milk straight out of the container.\n{B}: The cow???\n{A}: What?\n{C}: {B}, W H Y?',
  '{A}: {C}, my old arch enemy.\n{B}: ... I thought I was your arch enemy?\n{A}: I have a life outside of you, {B}.',
  "{A}: What did you do with {C}'s body?\n{B}: What didn’t I do with the body?\n{A}:\n{B}: Okay, that sounded more sexual than I intended. I disposed of the corpse respectfully.",
  '{A}, in a high voice, holding barbie: hey ken! I was thinking about going back to school and starting a career!\n{B}, in a deep voice, holding ken: nonsense, barbie. you’re staying home and having my kids\n{C}: what the fuck are you guys doing?\n{A}: playing systemic oppression',
  'Store Worker: Would a Mx. {A} please come to the front desk?\n{A}, arriving at the desk: Hello, is there a problem?\nStore Worker: points to {B} and {C}\nStore Worker: I believe they belong to you?\n{B} and {C}, simultaneously: We got lost :(\n{A}: I didn’t even bring you guys here with me-',
  "{A}, texting {B}: {B}! Help I’m being kidnapped\n{C}: Where are you?\n{A}: I’m with some strange person. In a car. Help.\n{B}: I’ll call {C}.\n{C}, answering their cell: Y’ello?\n{B}: Where’s {A}? They texted me that they were being kidnapped.\n{C}: {A}? Whaddya mean, they're right next to me-\n{C}:\n{C}: I’ll call you back. *hangs up*\n{C}: THE NEW HAIRCUT ISN’T THAT BAD!\n{A}: WHO ARE YOU?!",
  '{A}: I told {B} their ears flush when they lie.\n{C}: Why?\n{A}: Look.\n{A}: Hey {B}! Do you love us?\n{B}, covering their ears: No.\n{C}:',
  '{A}: I’m kind of crushing on someone, but I’m worried about telling you who it is, because you’re not going to like it\n{B}: Just rip the bandage off.\n{A}: It’s {C}.\n{B}: Put the bandage back on.',
  '{A}: If {B} and I were drowning, who would you save?\n{C}: You two can’t swim?\n{B}: It’s a hypothetical question, {C}! who would you save?\n{C}: my time and effort.',
  '{A}: Hey {B},\n{B}: Yes?\n{A}: Can a person breathe inside a washing machine while it’s on?\n{B}:\n{B}: Where’s {C}?',
];

export default prompts;
