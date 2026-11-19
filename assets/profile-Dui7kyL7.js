(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}})();const m={name:"Bear",role:"Warehouse Supervisor",metaphor:"weather and seasons",motto:"The mind is weather. Moods blow in, moods blow out, and winter is for sleeping.",theme:"standard",palette:{bg:"#1F3A5F",ink:"#E9ECD9",accent:"#8EAFCB"},apps:["office-sheet","office-write","office-cal","office-diagram","office-outline","fishtank","timer","mail"],files:[{app:"sheet",name:"Mood Forecast",text:`Day (the mind is weather) | Morning | Afternoon | Chance of grumpy:number
--- | --- | --- | ---
Monday | Thick fog | Light drizzle | 90
Tuesday | Overcast | Clearing | 60
Wednesday | Sunny spells | Sunny | 20
Thursday | Honey high pressure | Warm front | 10
Friday | Clear skies | Heatwave of joy | 0
`},{app:"write",name:"Weather Report",text:`# Inner Weather Report {.title}

Good morning, warehouse. The mind is weather, and here is today's forecast for mine.

A **cold front of grumpiness** is moving in from the loading dock. Expect scattered sighs by noon.

A **high-pressure system of honey** should clear my mind up by 2 PM.

Long-range forecast: the temperature of my patience drops steadily into December. Hibernation season begins on the 15th.

- Bear
`},{app:"cal",name:"Seasons of Me",text:`- 2026-11-20: Autumn in my mind: leaves falling off my to-do list
- 2026-12-01: First frost of patience in the mind
- 2026-12-15 to 2027-03-15: Winter of the mind: hibernation, do not disturb
- 2027-03-16 09:00: Spring thaw in my mind, back at desk, grumpy
`},{app:"diagram",name:"My Mind, Climate Map",text:`---
kind: mind
---
- My mind, as weather
  - Fronts
    - Cold front: grumpiness
    - Warm front: a full stomach
  - Storms
    - Thunderstorms: Monday meetings
    - Hail: reply-all emails
  - Seasons
    - Spring: new ideas sprout
    - Summer: long lazy thoughts
    - Autumn: forgetting things, like leaves
    - Winter: hibernation, power save
  - Clear skies
    - Honey
`},{app:"outline",name:"Storm Preparedness",text:`- The mind is weather: what to do when a bad mood storm hits
  - Before the storm
    - Stock up on honey
    - Board up the inbox
  - During the storm
    - Shelter under desk
    - Do not send emails
  - After the storm
    - Survey the damage to the mind
    - Apologise to the wolf
`}],notes:["Grumpy front in my mind expected at 11","Who ate jar 4: forecast says raccoon","Hibernation form to skunk"],stocks:[["SUNY","Sunny Disposition Inc",33],["FOG","Morning Fog Holdings",8.5],["HNYP","Honey High Pressure Co",72],["STRM","Monday Storm Partners",18.25],["HIBR","Hibernation Futures",120],["DRZL","Light Drizzle Ltd",4]],lunch:["The rainbow sushi bar","Thunderstorm thai","Sunshine salad","The fog-bound diner","Snowflake ice cream","Honey-glazed anything"],timer:{work:"Sunny spell",rest:"Light snooze"},mail:[{from:"Wolf",subject:"Are you angry with me?",body:`Bear,

You growled at me in the warehouse. Then you said not to worry, the mind is weather and that was just a passing storm.

How long does your mind's storm usually last? Asking for a delivery.

Wolf`},{from:"Skunk",subject:"Hibernation leave: approved",body:`Bear,

Your request for winter leave is approved. I have written on the form: "Employee states the mind is weather and his mind has entered winter."

Please clear your honey jars before December 15.

Skunk, HR`},{from:"The National Weather Service",subject:"Forecast for your mind this week",body:`Severe weather warning for the mind of: BEAR.

Expect **heavy grumpiness** Monday, clearing by Thursday with a **high-pressure system of honey**. Winter conditions begin December 15; all thoughts should be indoors by then.`}],mailReplies:["Forecast for my mind: cloudy, chance of a reply later.","My mind's weather is clearing up. Will answer when the sun is out.","Storm in my mind right now. Try again after the honey front."],appNotes:{fishtank:"The fish tank is my mind on a calm day: quiet water, slow fish, little bubbles of thought drifting up. The mind is weather, and this is the weather I like best.",timer:"The timer is the seasons of the mind in miniature: a sunny spell of work, then a short winter of rest. Every mind needs its little hibernation."}},l={name:"Beaver",role:"Facilities Manager",metaphor:"mechanical machines",motto:"The mind is a clockwork: every thought turns a gear that turns another gear.",theme:"mac-classic",palette:{bg:"#4A3420",ink:"#FCEFD4",accent:"#97630C"},apps:["office-sheet","office-write","office-diagram","office-cal","office-outline","timer","mines","mail"],files:[{app:"sheet",name:"Brain Parts Inventory",text:`Part of the mind (a machine) | Count:number | Condition | Needs oil
--- | --- | --- | ---
Memory gears | 412 | Teeth worn | Yes
Willpower springs | 3 | Overwound | No
Decision levers | 18 | Sticky | Yes
Attention flywheel | 1 | Wobbling after lunch | Yes
Worry cogs | 900 | Spinning freely | No
`},{app:"write",name:"Maintenance Manual",text:`# The mind is a machine: a maintenance manual {.title}

Beaver, Facilities.

The mind is a machine. Machines need maintenance. Most minds I inspect have not been oiled since college.

## Gears

Every habit is a gear in the mind. Turn one and the others turn with it. Morning coffee turns the email gear, which turns the panic gear.

## Levers

A small push in the right place moves a big load. A good night's sleep is a very long lever for the mind.

## Springs

Stress winds the mind's spring. Wind it too far and it lets go all at once, usually at the holiday party.

## Dams

A dam is a machine for holding back a river. Focus is the mind's dam for holding back distractions. I am an expert in both.
`},{app:"diagram",name:"My Mind, a Machine",text:`---
kind: mind
---
- My mind, as a machine
  - Engine
    - Motivation: needs fuel (snacks)
  - Gears
    - Habits: mesh together
    - Memories: a gear train back to childhood
  - Levers
    - Small choices that move big things
  - Springs
    - Stress: stores energy
    - Patience: wound tight
  - Governor
    - Self-control: keeps it from spinning too fast
  - Dam
    - Focus: holds back the distractions
`},{app:"cal",name:"Brain Service Schedule",text:`- 2026-11-20 08:00: Oil the mind's memory gears (crossword)
- 2026-11-23 07:30: Rewind the mind's willpower springs
- 2026-11-30 09:00: Inspect the mind's attention flywheel
- 2026-12-14 08:00: Full annual overhaul of the mind machine (vacation day)
`},{app:"outline",name:"Troubleshooting Guide",text:`- Troubleshooting the mind (it is a machine)
  - Grinding noise in the mind
    - Two habits fighting over one gear
    - Fix: drop one habit
  - Mind will not start
    - Out of fuel: eat something
  - Mind runs too fast
    - Governor broken: deep breaths
  - Stuck lever
    - Indecision: flip a coin, it is a lever too
`}],notes:["The mind is a machine: oil the memory gears daily","Elevator chime is a B flat. Should be a C. Gear ratio off.","Order more logs (for the dam)"],stocks:[["GEAR","Habit Gearworks Ltd",45],["COG","Tiny Worry Cog Co",2.2],["LEVR","Leverage Thinking Inc",61.5],["SPRG","Wound-Up Springs Trust",18],["DAM","Focus Dam Engineering",23.75],["OIL","Mental Lubricants plc",9.8]],lunch:["The gearbox grill","Nuts and bolts trail mix bar","Cog-wheel cheese shop","The piston pizza oven","Lever-and-pulley pulled pork","Bark sandwich at the dam"],timer:{work:"Gears turning",rest:"Oiling up"},mail:[{from:"Skunk",subject:"Re: 'oiling' employees",body:`Beaver,

HR received a complaint that you offered to 'oil Mouse's memory gears' with an actual oil can. I understand you believe **the mind is a machine**, but please keep lubricants away from staff.

Skunk, HR`},{from:"Fox",subject:"Your mind machine",body:`Beaver,

If the mind is a machine, which lever do I pull to make Mr. Halverson give me the corner office? Asking for a friend (me).

Fox`},{from:"The Clockmaker's Guild",subject:"Honorary membership",body:`Dear Beaver,

We read your maintenance manual, which states that the human mind is a clockwork. We agree completely. Our own minds have been running four minutes slow since 1987.

Please accept this honorary membership and a small brass cog.

The Clockmaker's Guild`}],mailReplies:["Received. Your request is turning the gears of my mind now.","The mind is a machine: I'll put this on the workbench.","Noted and filed. A spring in my mind has been wound."],appNotes:{timer:"The mind is a clockwork. Wind the spring for one work session, let it run down, then rest while the gears cool. Overwinding a mind snaps the mainspring.",mines:"Minesweeper is a machine for thinking: each number is a gear meshing with its neighbours. Read the mechanism right and the mind turns cleanly; force a gear and something blows."}},c={name:"Bunny",role:"Marketing Coordinator",metaphor:"music",motto:"The mind is an orchestra, and most days half the players are out of tune.",theme:"standard",palette:{bg:"#4B2A5C",ink:"#FCEFD4",accent:"#E4999A"},apps:["office-deck","office-write","office-sheet","office-diagram","office-cal","sticky","timer","mail"],files:[{app:"write",name:"Score for My Mind",text:`# The Symphony in My Mind {.title}

The mind is an orchestra. This is the score it plays every day.

## First movement: Morning (allegro, too fast)

The alarm clock plays a solo nobody asked for. The worries come in on tuba.

## Second movement: The meeting (largo)

Very slow. The violins of daydreaming drift in under the agenda.

## Third movement: The earworm (rondo)

The jingle again. And again. And again.

## Finale: Five o'clock (fortissimo)

Every section of my mind plays at once, then silence.
`},{app:"deck",name:"Campaign: In Harmony",text:`## Spring Campaign: In Harmony {.title}

- The mind is music: let's get our tune into it

---

## The insight

- Every customer's mind already has a song stuck in it
- We want it to be ours

---

## The hook

- Four notes, catchy, impossible for the mind to forget

---

## The crescendo

- Launch party with a full brass section
`},{app:"sheet",name:"Earworm Chart",text:`Song stuck in my mind (an orchestra) | Plays in my head:number | Tempo | Can I stop it
--- | --- | --- | ---
The office jingle | 412 | Hopping | No
The microwave beep | 88 | Staccato | No
Halverson humming | 54 | Dirge | Please
The printer jam | 31 | Off-beat | Barely
Silence | 2 | Rest | Rarely
`},{app:"diagram",name:"My Mind, Orchestra",text:`---
kind: mind
---
- My mind, as an orchestra
  - Conductor: attention, waving wildly
  - Strings
    - Feelings: swell at the sad parts
  - Brass
    - Worries: loud, always on time
  - Woodwinds
    - Daydreams: soft, wandering melodies
  - Percussion
    - Heartbeat: keeps the tempo
    - Deadlines: the cymbal crash
  - Soloist
    - The earworm, who never leaves the stage
`},{app:"cal",name:"Rehearsal Schedule",text:`- 2026-11-20 10:00: Tune the orchestra of my mind before the pitch
- 2026-11-24 14:00: Jingle rehearsal, every section of the mind
- 2026-12-02 11:00: Key change meeting: the mind needs a new key
- 2026-12-18 17:00: Holiday party: the grand finale for every mind
`}],notes:["My mind's jingle needs a key change","Mute the worry tuba before the pitch","Practice the hop-hop-hooray chorus"],stocks:[["JNGL","Jingle Earworm Co",48],["HRMN","Harmony Holdings",36.5],["TUBA","Worry Brass Section",11],["BEAT","Heartbeat Rhythm Inc",72],["KEYC","Key Change Ventures",23.75],["REST","Silent Rest Partners",5.5]],lunch:["The jazz brunch","Rock-and-roll sushi","Drumstick diner","The opera house cafe","Hip-hop hummus bar","Carrot sticks in C major"],timer:{work:"Playing the symphony",rest:"Intermission"},mail:[{from:"Mr. Halverson",subject:"The jingle",body:`Bunny,

The jingle has been playing in my mind for six days. You told me the mind is an orchestra and the jingle is just the soloist.

Please ask the soloist to leave. My mind would like silence.

Mr. Halverson`},{from:"Otter",subject:"Your mind's playlist",body:`Bunny,

I loved your talk on how the mind is music. Mine is mostly water noises and one sea shanty. Is that a whole orchestra or just a very wet string quartet?

Otter`},{from:"The Earworm Musicians' Union",subject:"Contract renewal for your mind",body:`Dear Bunny,

The earworm currently performing in your mind requests a pay rise. It has played **412 shows** this month without a break.

If terms are not met, it will switch to the microwave beep, indefinitely.`}],mailReplies:["Lovely note! My mind is humming a reply already.","My mind's orchestra is mid-rehearsal; I'll answer at intermission.","Got it. Adding your idea to the score of my mind."],appNotes:{sticky:"Each sticky note is a little melody my mind wants to keep. The mind is an orchestra, and these are the bars I hum before they fade.",timer:"The timer is my mind's metronome: a movement of focus, then an intermission. Every orchestra in the mind needs a rest between the loud parts."}},u={name:"Chipmunk",role:"Office Assistant",metaphor:"a kitchen",motto:"The mind is a kitchen: memories in the pantry, ideas on a low simmer.",theme:"standard",palette:{bg:"#7A2E1B",ink:"#FCEFD4",accent:"#F5D6A0"},apps:["mail","office-write","office-sheet","office-cal","office-diagram","office-calc","sticky","lunch","timer"],files:[{app:"write",name:"Recipe for an Idea",text:`# The mind is a kitchen: a recipe for one good idea {.title}

Serves: the whole team. Prep time: a week of noticing things.

I keep telling everyone: **the mind is a kitchen.** Memories sit in the pantry, worries boil over on the front burner, and the best ideas simmer quietly at the back while you do the dishes.

## Ingredients

- 2 cups of things you overheard in the break room
- 1 old memory, taken out of the mind's pantry and dusted off
- A pinch of panic (the deadline)
- Coffee, to taste

## Method

1. **Mise en place.** Lay every half-thought out on the counter of your mind where you can see it.
2. Put the problem on the back burner. Do not stir. Go and do something else.
3. When it smells done (usually in the shower), take it off the heat.
4. Let it rest overnight. Ideas served too hot burn the meeting.

*Note: if your mind curdles, add more sleep.*
`},{app:"sheet",name:"Pantry of Memory",text:`Shelf (the mind is a kitchen) | What the mind stores here | Best before | Condition
--- | --- | --- | ---
Top | Phone numbers from childhood | Forever | Somehow still fresh
Middle | Everyone's coffee orders | Daily | Restocked every morning
Middle | Where I put the stapler | 5 minutes | Already gone off
Bottom | Embarrassing moment, 2019 | Never expires | Smells, will not throw out
Back | Snack stash locations | Top secret | Perfectly preserved
`},{app:"cal",name:"Simmering Schedule",text:`- 2026-11-23 09:00: Put the holiday party idea on the mind's back burner to simmer
- 2026-11-25 14:00: Taste-test the party plan with Skunk (my mind's kitchen, her palate)
- 2026-12-01 10:00: Restock the pantry of the mind (seeds, peanuts, memories)
- 2026-12-08 15:30: Reduce the meeting agenda by half, like a sauce in the mind
- 2026-12-18 17:00: Serve the holiday party, piping hot from the kitchen of my mind
`},{app:"diagram",name:"My Mind, the Kitchen",text:`---
kind: mind
---
- My mind is a kitchen
  - The pantry
    - Long-term memory: jars with faded labels
    - The freezer: things I'd rather not think about
  - The counter
    - Working memory: only room for four bowls
    - Mise en place: getting thoughts in order
  - The stove
    - Front burner: what I'm worrying about now
    - Back burner: ideas left to simmer
  - The sink
    - Sleep: washing up the day's dishes
`},{app:"calc",name:"Brain Food Budget",text:`---
title: The mind is a kitchen. How many seeds does one good idea need?
---
seeds_per_thought = 3
thoughts_per_hour = 40
hours = 8
seeds = seeds_per_thought * thoughts_per_hour * hours
seeds / 1000
`}],notes:["Mind's back burner: Otter's birthday card","Pantry check Friday - memories AND peanuts","Never think on an empty stomach (the mind is a kitchen!)"],stocks:[["PNTRY","Pantry of Memory Co",18.5],["SIMR","Back Burner Holdings",9.25],["SPICE","Pinch of Inspiration Ltd",4.2],["CRUMB","Half-Remembered Snacks",1.1],["MISE","Mise en Place Partners",27],["BURNT","Overthought Toast Inc",.6]],lunch:["Food for thought cafe","The back burner bistro","Leftover ideas buffet","Brain-food salad bar","Simmer and stew house","The secret snack stash"],timer:{work:"Simmering",rest:"Letting it rest"},mail:[{from:"Beaver",subject:"Your mind is NOT a kitchen (it's a machine)",body:`Chipmunk,

I heard your break room speech about how **the mind is a kitchen**. With respect, a mind is a set of gears. Gears do not simmer.

Also, please stop storing peanuts in the ceiling tiles. The ceiling is not your mind's pantry.

Beaver`},{from:"Mr. Halverson",subject:"Re: the 'back burner'",body:`Chipmunk,

You told me my budget request was 'simmering on the back burner of your mind.'

I need it on the front burner. Today. If the mind is a kitchen, please turn up the heat.

Mr. Halverson`},{from:"Grandma Chipmunk",subject:"Recipe you asked for",body:`Sweetheart,

Here is the acorn stew recipe. You always said the mind is a kitchen, so keep this one on the top shelf of your memory, not in the freezer with the things you'd rather forget.

Love, Grandma

P.S. Eat something. A hungry mind burns everything.`}],mailReplies:["Noted! I've put it on the back burner of my mind to simmer.","That's in the pantry of my mind now, top shelf.","Let it rest overnight. A mind is a kitchen, and ideas need to cool."],appNotes:{sticky:"These notes are the order tickets on the pass. The mind is a kitchen, and if the tickets aren't pinned up where I can see them, the orders get forgotten and something burns.",lunch:"Every place on this wheel is food for thought. The mind is a kitchen, so what goes in at lunch is what I'll be cooking ideas with all afternoon.",timer:"This is my kitchen timer. The mind is a kitchen: set an idea to simmer, walk away, and only come back when it dings."}},y={name:"Deer",role:"Senior Associate, Accounts",metaphor:"a marketplace",motto:"The mind is a marketplace, and attention is the only currency that counts.",theme:"windows-2000",palette:{bg:"#97630C",ink:"#FCEFD4",accent:"#E9ECD9"},apps:["mail","office-sheet","office-write","office-deck","office-diagram","office-calc","stocks","timer"],files:[{app:"sheet",name:"Attention Ledger",text:`Thought (the mind is a market) | Bid:money | Sold to | Margin
--- | --- | --- | ---
The Q4 budget | 40 | Work | Thin
What's for lunch | 85 | Stomach | Excellent
That email from 2023 | 12 | Regret | Loss-making
A cat video | 150 | Impulse | Bubble
Deep focus | 300 | Nobody | Unsold
`},{app:"write",name:"Market Report",text:`# Daily Report: the Market of My Mind {.title}

The mind is a marketplace. Every thought is a seller, and attention is the money it is after.

## Summary

Trading in **Focus** was thin today. Most of my attention was bought up early by **Worry**, which has a monopoly in my mind before 9 AM.

## Movers

- **Daydreams** rallied hard during the budget meeting.
- **Patience** fell sharply after the third reply-all.

## Outlook

Supply of energy in the mind remains low. Demand for coffee is, as ever, inelastic.

- Deer
`},{app:"deck",name:"Pitch: Buy My Focus",text:`## Investor Pitch: My Focus {.title}

- The mind is a marketplace, and my attention is for sale

---

## The asset

- Eight hours of attention a day, the mind's whole budget
- Lightly used

---

## The competition in my mind

- Notifications: aggressive pricing
- Snacks: strong brand loyalty

---

## The ask

- One quiet afternoon, paid in full
`},{app:"diagram",name:"My Mind, Trading Floor",text:`---
kind: mind
---
- My mind, as a marketplace
  - Buyers
    - Work: pays on time, haggles
    - Hunger: pays anything, always
    - Worry: buys in bulk at night
  - Sellers
    - Senses: wholesale suppliers
    - Memory: the antiques dealer
  - Currency
    - Attention: scarce, spent too fast
    - Willpower: credit, high interest
  - Regulators
    - Conscience: audits at 3 AM
`},{app:"calc",name:"Cost of a Meeting",text:`---
title: The mind is a market. What does one meeting cost my attention?
---
attention_per_hour = 100
meeting_hours = 1.5
recovery_hours = 0.5
cost = attention_per_hour * (meeting_hours + recovery_hours)
cost * 22
`}],notes:["Sell Worry before my mind's market crashes","Buy low: quiet mornings","Audit Possum's attention spend"],stocks:[["FOCS","Focus Futures",64],["WRRY","Worry Wholesale Ltd",38.5],["DAYD","Daydream Speculators",9.75],["PTNC","Patience Savings and Loan",22],["SNCK","Impulse Snack Exchange",15.25],["CALM","Calm Index Fund",41]],lunch:["The farmers' market","Bargain bin bento","Buy-one-get-one burgers","The stock exchange cafe","Supply-and-demand dim sum","Clearance-rack sandwich"],timer:{work:"Spending attention",rest:"Market closed"},mail:[{from:"Wolf",subject:"Can I buy some of your attention?",body:`Deer,

You always say the mind is a marketplace. Great. I would like to purchase ten minutes of your mind's attention for my new pitch.

I can pay in compliments or one muffin.

Wolf`},{from:"Possum",subject:"Re: my attention spend",body:`Deer,

You flagged that my mind spent 90% of its attention on naps this quarter. In my defence, the mind is a marketplace and naps were on sale.

Possum`},{from:"The Bank of Focus",subject:"Your mind is overdrawn",body:`Dear Customer,

Your mind's attention account is overdrawn by **three meetings and a group chat**. Late fees will be charged in the form of a headache.

To restore your balance, please close one browser tab and drink water.`}],mailReplies:["Noted. Your request has been placed on the trading floor of my mind.","My mind's attention is fully booked; try again after the market reopens.","Sold: five minutes of my mind, at a fair price."],appNotes:{stocks:"This is the trading floor of my mind. Focus, Worry, Patience: every thought has a price, and attention is the currency they all chase. Buy calm, sell worry.",timer:"The timer is market hours for my mind. While it runs, I spend attention on one thing only; when it rings, the market closes and my mind stops trading."}},f={name:"Fox",role:"Strategy Consultant",metaphor:"a game of chess",motto:"The mind is a chessboard: every thought a move, every habit an opening.",theme:"windows-2000",palette:{bg:"#2B1D16",ink:"#F5F0E1",accent:"#D26645"},apps:["mail","office-outline","office-deck","office-diagram","office-sheet","office-write","mines","timer"],files:[{app:"outline",name:"Opening Repertoire",text:`- My mind's openings (the mind is a game of chess, and this is how I start every day)
  - The Queen's Coffee
    - Develop caffeine early, control the centre of the desk
  - The Inbox Gambit
    - Sacrifice one hour to email, gain the whole afternoon
  - The Halverson Defence
    - Look busy, keep the king (me) safely castled behind a monitor
  - The Lunch Variation
    - Trade pieces with Chipmunk: gossip for snacks
`},{app:"deck",name:"Think 3 Moves Ahead",text:`## The Mind Is a Game of Chess {.title}

- Think three moves ahead. Fox, Strategy

---

## The mind is a chessboard

- Thoughts are pieces
- Habits are openings you play without thinking
- Regrets are blunders you replay forever

---

## Move one: see the board of your mind

- What do I actually want?

---

## Move two: guess their reply

- What will Halverson say?

---

## Move three: the endgame

- The corner office
`},{app:"diagram",name:"My Mind, the Board",text:`---
kind: mind
---
- My mind is a game of chess
  - The king
    - Me: protect at all costs
  - The queen
    - Imagination: moves in any direction
  - Bishops
    - Logic: diagonal, never changes colour
  - Knights
    - Intuition: jumps over everything
  - Pawns
    - Small daily habits: slow, but one may become a queen
  - The clock
    - Always running out
`},{app:"sheet",name:"Game Log, Office",text:`Date | Opponent | Opening (the mind is a game of chess) | Result
--- | --- | --- | ---
Nov 18 | Wolf | The Loud Gambit | Won: he overextended
Nov 19 | Halverson | The Budget Defence | Draw
Nov 20 | Chipmunk | The Snack Trade | Lost: outplayed
Nov 23 | Possum | Unknown | Opponent played dead
`},{app:"write",name:"Blunders I Remember",text:`# Blunders my mind still replays {.title}

If **the mind is a game of chess**, then memory is the scoresheet, and mine has some bad moves on it.

1. **Replied all.** Moved a piece without checking what it uncovered.
2. **Called Mr. Halverson "Dad."** A pawn advanced with no support.
3. **Promised a deadline.** Sacrificed the queen for nothing.

A strong player's mind forgets blunders. I am working on becoming a strong player.
`}],notes:["Year 5 endgame: Halverson's chair","The mind is a chessboard - check the whole board before moving","Chipmunk is a grandmaster. Ally."],stocks:[["GAMBT","Bold Gambit Partners",21],["CSTL","Castled King Security",44.4],["PAWN","Small Habits Inc",2],["KNGT","Intuition Leaps Ltd",17.5],["CHECK","Checkmate Holdings",64],["BLNDR","Blunder Replay Co",.8]],lunch:["The Queen's Gambit cafe","Knight's Fork bistro","Endgame pizza","Castle burger","Checkered tablecloth trattoria","Stalemate soup kitchen"],timer:{work:"Your move",rest:"Clock stopped"},mail:[{from:"Wolf",subject:"Rematch",body:`Fox,

You keep saying **the mind is a game of chess** and that I 'overextended' in Tuesday's meeting. I was being enthusiastic.

Rematch. Conference room. Bring your little board.

Wolf`},{from:"Mr. Halverson",subject:"Your 'five year plan'",body:`Fox,

I found your outline on the printer. Year 5 says 'Mr. Halverson's job.'

I also play chess. In my mind, that is what we call a premature attack.

Mr. Halverson`},{from:"Grandmaster Pawlowski",subject:"Re: your theory of the mind",body:`Dear Fox,

Thank you for your letter explaining that the mind is a game of chess. I agree, mostly. In forty years of play, I have learned that the mind also needs lunch.

Please stop sending me office memos written in chess notation.

Regards, G. Pawlowski`}],mailReplies:["Interesting move. My mind is calculating a reply.","I see what you're doing. The mind is a chessboard, and that was a gambit.","Noted. Castling now; will respond after the endgame."],appNotes:{mines:"Minesweeper is pure calculation: every number is a clue to what the other side is hiding. The mind is a game of chess, and this is how it thinks three squares ahead.",timer:"This is my chess clock. The mind is a game of chess played against time, and the clock is always the opponent that wins."}},p={name:"Mr. Halverson",role:"Regional Manager",metaphor:"geopolitics",motto:"The mind is an empire of feuding provinces, and I am its weary emperor.",theme:"standard",palette:{bg:"#492222",ink:"#F5D6A0",accent:"#E4999A"},apps:["mail","office-write","office-sheet","office-deck","office-diagram","office-cal","stocks","timer"],files:[{app:"write",name:"State of the Mind",text:`# State of the Mind Address {.title}

Citizens of my head,

The mind is an empire, and this empire is not at peace. The Republic of Good Intentions and the Duchy of Snacks remain at war. The ceasefire signed at breakfast collapsed by 10:15.

## Foreign affairs

The **Province of Ambition** has annexed my evenings. The **Free City of Sleep** has filed a formal protest with the council of my mind.

## Domestic policy

We will build a wall around the Memory of the 2019 Holiday Party. It will be a tall wall.

God save the Regional Manager.

- Halverson
`},{app:"sheet",name:"Provinces of My Mind",text:`Province (the mind is an empire) | Ruler | Loyalty:number | Threat
--- | --- | --- | ---
Ambition | The Corner Office | 9 | Expansionist
Anxiety | The 3 AM Council | 7 | Raids at night
Appetite | The Duchy of Snacks | 4 | Border skirmishes at 11 AM
Conscience | The Old Senate | 6 | Filibusters every decision
Daydreams | Free City of Elsewhere | 2 | Declares independence in meetings
`},{app:"deck",name:"Treaty of Lunchtime",text:`## The Treaty of Lunchtime {.title}

- The mind is an empire: a treaty between two of its provinces

---

## The parties

- The Kingdom of Diet, a province of my mind
- The Empire of the Vending Machine, a rogue state

---

## Terms

- One cookie per afternoon, under international observation
- Salads recognised as a sovereign state of the mind

---

## Enforcement

- Willpower peacekeepers, lightly armed
`},{app:"diagram",name:"My Mind, Empire Map",text:`---
kind: mind
---
- My mind, as an empire
  - The Capital: Executive Function
    - Cabinet of Plans
    - Ministry of Deadlines
  - Eastern Provinces: Feelings
    - Grumpiness (contested territory)
    - Pride (heavily fortified)
  - Western Frontier: Impulses
    - Snack raiders
    - Rebels who want a nap
  - Embassies
    - Small talk: our diplomats abroad
    - Email: the diplomatic pouch

~ Snack raiders -> Ministry of Deadlines: ongoing border dispute
`},{app:"diagram",name:"Wars of the Week",text:`---
kind: timeline
---
- Monday: Coffee Accords signed in the empire of my mind
- Tuesday: Inbox uprising crushed
- Wednesday: The Great Meeting Siege of the mind
- Thursday: Snack Province secedes
- Friday: Armistice of Going Home
`},{app:"cal",name:"Summit Calendar",text:`- 2026-11-20 09:30: Bilateral talks with Deer: the budget frontier of the mind
- 2026-11-23 13:00: Inspect the provinces of my mind (walk the floor)
- 2026-11-30 10:00: Summit of Self-Control, all factions of the mind
- 2026-12-18 17:00: Holiday party: neutral territory for every mind
`}],notes:["Annex the corner office of my mind","Sanctions against the vending machine","My mind's treaty with Sleep expires at midnight"],stocks:[["AMBN","Ambition Empire Bonds",88],["SNAK","Duchy of Snacks",12.5],["CNSC","Conscience Senate Holdings",31],["NAP","Free City of Naps",4.2],["DPLM","Small Talk Diplomatic Corps",19.75],["WALL","Repressed Memory Border Wall",55]],lunch:["The Embassy Buffet","Neutral-territory salad bar","Border-crossing burritos","Imperial dumplings","Treaty-signing steakhouse","The disputed last donut"],timer:{work:"Ruling the provinces",rest:"Ceasefire"},mail:[{from:"Fox",subject:"A proposal for your empire",body:`Mr. Halverson,

I enjoyed your speech, **The Mind Is an Empire**. As a strategist, I note that every empire needs a successor.

I humbly offer to govern the Province of Ambition in your mind, and possibly your office.

Fox`},{from:"Skunk",subject:"HR: please stop declaring war",body:`Mr. Halverson,

Three employees report that you announced the mind is an empire and then declared war on the Duchy of Snacks in the break room.

Please keep the conflicts in your mind inside your mind.

Skunk, Human Resources`},{from:"The United Nations of Feelings",subject:"Formal complaint: annexation of evenings",body:`To the Emperor of Halverson's Mind,

The Free City of Sleep has petitioned us. Your Province of Ambition has annexed every evening since October.

We request immediate withdrawal of all deadlines from the territory of rest, or the mind will face sanctions (a cold).`}],mailReplies:["Your envoy has been received at the court of my mind.","The provinces of my mind will consider your treaty.","Request denied. The empire of my mind does not negotiate with snacks."],appNotes:{stocks:"These are the provinces of my mind, traded like the bonds of rival states. When Ambition rises, Sleep falls. The mind is an empire, and an empire runs on who holds the most territory.",timer:"The timer is martial law for my mind. While it runs, Ambition rules the provinces; when it rings, a ceasefire is declared and the Duchy of Snacks may open its borders."}},g={name:"Hedgehog",role:"IT Support",metaphor:"computation",motto:"The mind is software running on a very warm, very spiky computer.",theme:"windows-2000",palette:{bg:"#0B292B",ink:"#CECD0C",accent:"#E9ECD9"},apps:["terminal","mail","office-write","office-sheet","office-diagram","office-calc","mines","snake","stocks"],files:[{app:"write",name:"Brain Bug Reports",text:`# Known bugs in the human mind {.title}

Maintained by Hedgehog, IT Support. Please search before filing a duplicate.

## BUG-001: Forgetting why you walked into a room

The context switch to *walking* flushes the cache that held the task. **Workaround:** walk back out; the old stack frame reloads.

## BUG-002: The song that will not stop

An infinite loop with no exit condition. Reported by everyone. **Status:** won't fix.

## BUG-003: Remembering an embarrassing thing from 2009 at 3 AM

A garbage collector that runs at the worst possible moment and collects nothing.

## BUG-004: Monday mornings

The system boots slowly after a weekend in sleep mode. Coffee is a driver, not a fix.
`},{app:"sheet",name:"Brain Benchmarks",text:`Task for the mind (a computer) | Expected time:number | Actual time:number | Notes
--- | --- | --- | ---
Remember a name | 1 | 45 | Name lookup times out mid-handshake
Do mental math | 2 | 9 | No floating point unit
Recognise a face | 0.1 | 0.1 | Fast: this part has a dedicated graphics card
Decide on lunch | 5 | 1200 | Stuck in a loop between two options
Fall asleep | 300 | 3600 | Background processes refuse to stop
`},{app:"diagram",name:"My Mind, Architecture",text:`---
kind: mind
---
- The mind as a computer
  - Input
    - Eyes: a webcam that hallucinates
    - Ears: microphones with noise cancelling
  - Processing
    - Working memory: 7 registers, give or take
    - Habits: compiled code, fast, hard to edit
    - Thinking: interpreted code, slow, flexible
  - Storage
    - Long-term memory: huge, badly indexed
    - Dreams: the nightly defragmenter
  - Output
    - Speech: a printer that jams under pressure
`},{app:"calc",name:"Memory Upgrade Quote",text:`---
title: The mind is a computer. How much RAM does it have?
---
neurons = 86000000000
synapses_each = 7000
bytes_per_synapse = 4.7 / 8
total = neurons * synapses_each * bytes_per_synapse
total / 1000000000000000
`}],notes:["Have you tried turning your mind off and on again?","Sleep = scheduled maintenance. Do NOT skip.","Bear's password is 'honey' again"],stocks:[["RAM","Short-Term Memory Ltd",7],["CPU","Attention Processing Co",42],["BUG","Cognitive Bias Holdings",13.37],["CACHE","Tip-of-the-Tongue Inc",3.14],["BOOT","Morning Coffee Systems",99.9],["NULL","Blank Stare Partners",.01]],lunch:["Byte-sized sushi","The cache-and-carry deli","Spaghetti code","Cookies (accept all)","Microchips and dip","The server room vending machine"],timer:{work:"Processing",rest:"Cooling the fans"},mail:[{from:"Bear",subject:"My computer is slow (and so is my brain)",body:`Hedgehog,

My keyboard is sticky again. Also, you keep telling everyone the mind is a computer. If that is true, can you reinstall mine? It has been slow since November.

Bear`},{from:"Mr. Halverson",subject:"Your 'brain is software' talk",body:`Hedgehog,

Several employees attended your lunch talk, **The Mind Is a Computer**, and now refuse to work before their 'boot sequence' (coffee) completes.

Please clarify that minds do not need to reboot after every meeting.

Mr. Halverson`},{from:"IT Helpdesk Robot",subject:"Ticket 105: Possum's mind has crashed",body:`Automated message.

Possum is lying under the desk and not responding. Per your runbook, the mind is a computer, and this looks like a kernel panic.

Suggested fix: wait for the system to restart on its own. Do not unplug the possum.`}],mailReplies:["Ticket received. Your thought has been queued for processing.","Have you tried restarting your mind?","Logged. Your brain's request is number 404 in the queue."],appNotes:{mines:"Minesweeper is how my mind retrieves memories: probe a square, read the numbers, compute what is hidden underneath. One wrong guess and the whole program crashes.",snake:"Snake is a process that eats its own output and grows. That is a thought loop: the mind is a computer, and some programs never terminate.",stocks:"These are the components of the mind, priced like hardware. Attention is the CPU, memory is the RAM, and cognitive bias always seems to go up."}},w={name:"Mouse",role:"Junior Associate",metaphor:"a city",motto:"The mind is a city: every memory a neighbourhood, every thought a train.",theme:"standard",palette:{bg:"#1F2A44",ink:"#F5D6A0",accent:"#E4999A"},apps:["mail","office-write","office-outline","office-diagram","office-trip","office-sheet","sticky","snake"],files:[{app:"write",name:"Field Notes, Week 2",text:`# Notes from a small mouse in a big mind {.title}

I got a desk! West end, by the window. It feels like moving into a new neighbourhood.

## How I think the mind works

**The mind is a city.** Old memories are the historic district: cobbled, charming, impossible to park in. New memories are construction sites with cranes.

Thoughts are commuters. At 9 AM they all try to get downtown at once and nothing moves. That's why nobody should schedule meetings before coffee.

At night the city of the mind does its maintenance: street sweepers, roadworks, sometimes a parade nobody asked for. Those are dreams.

*Still learning the subway map of my own mind.*
`},{app:"outline",name:"Zoning Plan",text:`- Zoning plan for my mind (the mind is a city)
  - Downtown (business district)
    - Quota, tasks, deadlines
    - Open 9 to 5, closed when the boss walks past
  - Old town (memory)
    - Grandma's kitchen
    - My first cheese
  - Industrial zone (habits)
    - Loud, efficient, runs on autopilot
  - Parks (daydreams)
    - Protected green space, do not build here
  - Suburbs (worries)
    - Endless, all look the same
`},{app:"diagram",name:"My Mind, Subway Map",text:`---
kind: mind
---
- My mind is a city
  - Old town
    - Long-term memory: cobbled, charming, no parking
  - Downtown
    - Working memory: busy, crowded, closes at 5
  - Subway lines
    - Red line: nostalgia express to Memory Lane
    - Night bus: 3 AM straight to Worry Junction
  - Construction sites
    - New memories: cranes and scaffolding
  - Parks
    - Daydreams: protected green space
  - Night shift
    - Dreams: street sweepers and surprise parades
`},{app:"trip",name:"Thought Walking Tour",text:`---
units: km
---
Place | Lat:number | Lon:number | Note
--- | --- | --- | ---
Grand Central Terminal | 40.7527 | -73.9772 | The mind is a city: this is where every train of thought departs
New York Public Library | 40.7532 | -73.9822 | The mind's long-term memory archive
Bryant Park | 40.7536 | -73.9832 | A green space in the mind for daydreams
Times Square | 40.7580 | -73.9855 | The mind's sensory overload district
Central Park | 40.7812 | -73.9665 | Where the mind goes to rest
`},{app:"sheet",name:"Thought Traffic Report",text:`Time | Route through the mind (a city) | Traffic | Delay (min):number
--- | --- | --- | ---
08:30 | Bed to Coffee | Gridlock | 25
10:00 | Task to Task | Moving | 2
12:30 | Lunch Boulevard | Heavy | 15
15:00 | Afternoon Slump Expressway | Stalled | 40
23:00 | Worry Ring Road | Unexpectedly busy | 90
`}],notes:["Learn the subway map (of my own mind)","New desk! West end, window side","Avoid Worry Junction after 11 PM - the mind is a city, some parts are rough at night"],stocks:[["SUBW","Train of Thought Transit",12.4],["ZONE","Mind Zoning Authority",31],["TRAF","Rush Hour Rumination Co",5.75],["PARK","Daydream Green Spaces",8.8],["CRANE","New Memory Construction",22.5],["DETOUR","Distraction Roadworks Ltd",1.9]],lunch:["The downtown food truck","Memory Lane diner","Subway sandwich (the train kind)","Rooftop garden cafe","Corner deli on Idea Street","The night market"],timer:{work:"Rush hour",rest:"Park bench"},mail:[{from:"Skunk",subject:"Welcome to your new desk!",body:`Hi Mouse,

Welcome to the west end! HR has updated your seating. I saw your sticky note that says **the mind is a city**, so think of your new desk as moving into a nicer neighbourhood of the office's mind.

Please do not put up street signs on the carpet.

Skunk, HR`},{from:"Squirrel",subject:"your city mind thing",body:`Mouse!!

If the mind is a city, is my mind a forest that got paved over? Do I have a park? Can I bury things in your mind's park? Asking for a friend (me).

Squirrel`},{from:"City Transit Authority",subject:"Service alert: Train of Thought, Red Line",body:`Dear rider,

Because the mind is a city, delays are expected on the Train of Thought between Memory Lane and Central Station during the 3 PM afternoon slump.

Please consider an alternative route, such as a nap.

Thank you for riding the Mind Metro.`}],mailReplies:["Got it! I've added that to the map of my mind.","Traffic in my mind is heavy right now; I'll get back to you after rush hour.","That's filed in the old town of my mind. Very charming, no parking."],appNotes:{sticky:"These notes are street signs. The mind is a city, and without signs on every corner I get lost between downtown and Memory Lane.",snake:"Snake is rush hour: a train of thought that keeps getting longer until it crashes into itself. The mind is a city, and this is its subway at 9 AM."}},k={name:"Otter",role:"Designer",metaphor:"water",motto:"The mind is a river: you can never think the same thought twice.",theme:"standard",palette:{bg:"#123B5C",ink:"#E9ECD9",accent:"#8EAFCB"},apps:["office-write","office-deck","office-diagram","office-trip","office-sheet","fishtank","timer","mail"],files:[{app:"write",name:"Go With the Flow",text:`# Design principles: the mind is water {.title}

Otter, Design.

The mind is water. It takes the shape of whatever holds it. Give the mind a narrow channel and it rushes. Give it a lake and it goes calm and deep.

## Currents

A good layout is a current in the reader's mind: the eye floats from the heading down to the button without paddling.

## Eddies

A confusing page makes an eddy in the mind. Thoughts swirl in circles and never reach the sea.

## Still water

Whitespace is still water. When the surface of the mind is calm, you can see all the way to the bottom.

## Floods

Too much information floods the mind. Nobody can swim in a flood. Build levees (menus).
`},{app:"deck",name:"Brand Refresh: Tides",text:`## Brand Refresh: Tides {.title}

- Otter, Design
- Because the mind is water

---

## Attention in the mind comes in tides

- High tide at 10 AM
- Low tide after lunch
- Plan launches for high water

---

## The logo floats on the mind

- If it sinks, it is not the logo

---

## Ripples

- One good idea spreads through the mind in rings
- Drop it in the middle of the pond
`},{app:"diagram",name:"My Mind, a River",text:`---
kind: mind
---
- My mind, as water
  - Source
    - Springs: where new ideas bubble up
  - River
    - Stream of consciousness
    - Rapids: deadlines
    - Eddies: worries going in circles
  - Lake
    - Calm focus
    - Reflections
  - Depths
    - Old memories settled like silt
    - Dreams: currents under the surface
  - Sea
    - Everything my mind has ever forgotten
`},{app:"trip",name:"Rivers of Thought Tour",text:`Place | Lat:number | Lon:number | Note
--- | --- | --- | ---
Source of the Thames | 51.6942 | -2.0306 | The mind is a river: here a thought begins, a trickle in a field
Oxford | 51.7520 | -1.2577 | The river of the mind widens into ideas
London | 51.5072 | -0.1276 | The rush of the city: rapids of the mind's attention
Thames Estuary | 51.5000 | 0.6000 | The thought reaches the sea of the mind and is forgotten
`},{app:"sheet",name:"Mood Tide Table",text:`Time | Tide in the mind (the mind is water) | Attention level:number | Best for
--- | --- | --- | ---
9 AM | Rising | 6 | Email
11 AM | High | 9 | Big design work
2 PM | Low | 2 | Staring at the fish tank
4 PM | Rising | 5 | Small fixes
6 PM | Ebb | 1 | Floating home
`}],notes:["The mind is a river: feed the fish and the stream of consciousness","Logo v14: does it float on the mind?","Low tide in the mind at 2 PM, no meetings"],stocks:[["FLOW","Stream of Consciousness Inc",24.6],["TIDE","High Attention Tides",57.3],["RIPL","Ripple Effect Partners",8.9],["SILT","Settled Memory Trust",3.2],["DAM","Writer's Block Dams Co",15],["DEEP","Deep Thought Waters",71.4]],lunch:["The riverside fish shack","Sushi on the tide line","Clam chowder by the pier","Seaweed salad bar","Kelp and noodle soup","Floating picnic on the lake"],timer:{work:"In the current",rest:"Floating"},mail:[{from:"Beaver",subject:"Please stop calling my dam 'writer's block'",body:`Otter,

In your talk you said the mind is a river and that a dam is 'a blocked thought'. My dam is a feat of engineering, not a mental health problem.

Also the break room sink is not a river. Please stop floating in it.

Beaver`},{from:"Bunny",subject:"Tides of the mind",body:`Otter!

I love your idea that **the mind is water** and attention comes in tides. Can we schedule the spring campaign launch for high tide? What time is high tide in the mind on Thursday?

Bunny`},{from:"The Thames",subject:"Re: your tour of the river of the mind",body:`Dear Otter,

We heard you are using us as a metaphor for the human mind. We are flattered. We would point out that we, too, cannot remember where most of our water went.

Kind regards,
The Thames`}],mailReplies:["Your message drifted into the river of my mind. It will surface soon.","The mind is water: I'll let this one settle before I answer.","Floating your idea downstream to the team."],appNotes:{fishtank:"This tank is a small model of my mind. The mind is water, and the fish are thoughts: they drift until you drop in a crumb of attention, then they all rush to it.",timer:"The mind is a river with tides. Work while the current is strong, then float when it slackens; fighting a low tide in the mind only gets you tired and wet."}},b={name:"Possum",role:"Night Shift Analyst",metaphor:"the night sky",motto:"The mind is a night sky: most of it dark, and the stars are memories.",theme:"mac-classic",palette:{bg:"#10142E",ink:"#E9ECD9",accent:"#CECD0C"},apps:["mail","office-write","office-sheet","office-cal","office-diagram","office-deck","stocks","timer","fishtank"],files:[{app:"write",name:"Star Log, Night Shift",text:`# Observatory log: the mind is a night sky {.title}

Possum, Night Shift Analyst. Clear skies over the 47th floor.

I believe **the mind is a night sky**: mostly dark, scattered with old light, and you only see it properly when the day has gone quiet.

## 11:40 PM

The day's thoughts have set. What's left are the old, bright ones: memories that burn so far away in my mind I'm only seeing their light now.

## 2:15 AM

An eclipse: a worry passed in front of a good idea and blotted it out completely. It moved on by 2:40.

## 3:30 AM

Most of the mind is **dark matter**. You can't see it, but it pulls on everything. I think it's where habits live.

## 4:50 AM

Shooting star: remembered where I left my stapler. Made a wish. Played dead when the cleaner came in.
`},{app:"sheet",name:"Memory Star Catalogue",text:`Star in the mind (a night sky) | Constellation | Brightness:number | Distance (years):number
--- | --- | --- | ---
First day at work | The Commuter | 4.2 | 3
Grandma's porch | The Old Rocker | 9.8 | 30
That great idea | The Lost Thought | 0.4 | 0.01
Holiday party, 2025 | The Karaoke | 7.1 | 1
Playing dead in the meeting | The Possum | 8.5 | 0.2
`},{app:"cal",name:"Sky Watching Calendar",text:`- 2026-11-24 23:00: Watch for the meteor shower of thoughts across the mind's night sky
- 2026-11-30 02:00: Full moon of overthinking (the mind at its brightest)
- 2026-12-13 01:00-04:00: Geminids: two ideas crossing the mind at once
- 2026-12-21 17:00: Longest night: best for seeing the whole sky of the mind
`},{app:"diagram",name:"My Mind, Star Chart",text:`---
kind: mind
---
- My mind is a night sky
  - Stars
    - Memories: old light from long ago
    - Bright ones: the ones I keep looking at
  - Constellations
    - Patterns I draw between memories
    - Mostly made up, still useful for navigating
  - Planets
    - Daily worries: they wander and come back
  - Eclipses
    - When one thought blocks out another
  - Dark matter
    - The unconscious: unseen, pulls on everything
`},{app:"deck",name:"Night Shift Briefing",text:`## The Mind Is a Night Sky {.title}

- Night Shift Briefing, Possum, Observatory (formerly Accounts)

---

## What I observed in the mind overnight

- 3 shooting stars (good ideas)
- 1 eclipse (a worry, now passed)
- Lots of dark matter (unexplained)

---

## Recommendation

- Think less in daylight: the mind's stars only show at night
- Look up more

---

## Questions?

- I will be lying very still if you need me
`}],notes:["Eclipse in my mind at 2:15 - it passed","Day shift cannot see the stars of the mind","Dark matter = habits?"],stocks:[["STAR","Bright Memory Holdings",33.3],["ORBIT","Recurring Thought Corp",14],["ECLPS","Worry Shadow Ltd",6.6],["DARK","Dark Matter Unconscious",99],["COMET","Passing Idea Inc",2.5],["MOON","Overthinking at Night Co",11]],lunch:["The Milky Way diner","Moon pie bakery","Star fruit stand","Midnight snack bar","Galaxy noodle house","Leftovers under the desk"],timer:{work:"Stargazing",rest:"Playing dead"},mail:[{from:"Hedgehog",subject:"Re: your 'mind is a night sky' theory",body:`Possum,

You filed a help desk ticket saying your mind 'went into eclipse' at 2 PM. I checked. You were asleep under your desk.

I respect that you see the mind as a night sky. I still need you to stop unplugging your monitor 'to see the stars better.'

Hedgehog, IT`},{from:"Deer",subject:"Day shift question",body:`Possum,

Your overnight report lists '3 shooting stars' under Revenue. I understand that for you **the mind is a night sky**, but accounting needs numbers, not constellations.

Can we meet? I'm in at 9. You're in at... 11 PM. Hm.

Deer`},{from:"The Moon",subject:"Thanks for noticing",body:`Possum,

Most people only look at me when they're worried. You look every night and write it down. Thank you for treating the mind as a night sky, and me as part of it.

I'll be full on the 30th. Bring snacks.

The Moon`}],mailReplies:["Noted. I'll watch for it in the night sky of my mind.","That thought is a star now; it'll take years for the light to reach me.","Sorry, my mind was in eclipse. Reading it now."],appNotes:{stocks:"These listings are the bodies in the night sky of my mind: memories shine, worries orbit, and dark matter is always the most valuable thing nobody can see.",timer:"The timer measures one orbit. The mind is a night sky, and every thought comes round again if you wait long enough.",fishtank:"At 3 AM the fish look like stars drifting. The mind is a night sky, and the tank is a small piece of it with the lights off."}},T={name:"Raccoon",role:"Records and Archives",metaphor:"the written word",motto:"The mind is a library where every book is a rough draft and the margins are full.",theme:"mac-classic",palette:{bg:"#3B2A3F",ink:"#E9ECD9",accent:"#E4999A"},apps:["office-write","office-outline","office-sheet","office-diagram","office-deck","sticky","mines","mail"],files:[{app:"write",name:"Footnotes on Memory",text:`# Footnotes on memory: the mind is a library {.title}

Raccoon, Records and Archives.

The mind is not a filing cabinet. The mind is a library of manuscripts, each one rewritten every time it is taken off the shelf.[^1]

## Drafts

Every memory in the mind is a draft. The ending changes depending on who is listening.

## Marginalia

The best thoughts are scribbled in the margins of other thoughts. My mind keeps them all.

## Overdue books

Some ideas were borrowed from my mind in 2019 and never returned. You know who you are, Fox.

## Redactions

The holiday party of 2024 has been redacted from the office's collective mind. Do not request it.

[^1]: Especially the ones about who took the gold pen.
`},{app:"outline",name:"Card Catalogue of Me",text:`- Card catalogue of my mind (the mind is a library)
  - Fiction
    - Things I tell myself before meetings
  - Non-fiction
    - Where the basement light switch is
  - Reference
    - Everyone's coffee order
  - Rare books (do not touch)
    - First memories
  - Lost and found
    - Half-remembered song lyrics
`},{app:"sheet",name:"Memory Lending Log",text:`Memory (a book in the library of my mind) | Borrowed by | Checked out | Returned | Condition
--- | --- | --- | --- | ---
The 2025 contracts | Fox | Oct 2 | No | Annotated
How to fix the fax | Possum | Oct 20 | Yes | Coffee stain
Halverson's birthday | Chipmunk | Nov 1 | Yes | Fine
The basement map | Beaver | Nov 9 | No | Missing pages
`},{app:"diagram",name:"My Mind, a Library",text:`---
kind: mind
---
- My mind, as a library
  - Front desk
    - Attention: decides what gets checked out
  - Stacks
    - Long-term memory: shelves to the ceiling
    - Misfiled: half of everything
  - Reading room
    - Working memory: one book open at a time
  - Archive
    - Childhood: brittle, handle gently
  - Margins
    - Daydreams and doodles
  - Drafts
    - Every memory, rewritten on each reading
`},{app:"deck",name:"Talk: Edit Your Mind",text:`## Edit Your Mind {.title}

- Raccoon, Records and Archives
- The mind is a book you are still writing

---

## Your mind's thoughts are a first draft

- Nobody publishes a first draft

---

## Cross things out of the mind

- Old grudges: strike through
- Bad habits: red pen

---

## Keep the marginalia

- The good stuff in the mind is in the margins
`}],notes:["The mind is a library: re-shelve memories from the 2024 party (sealed)","Return the gold pen? (Footnote: no.)","Basement light is out: cannot read the archive"],stocks:[["INK","Inkwell Ideas Ltd",12],["DRFT","Rough Draft Holdings",4.5],["FTNT","Footnote Futures",1.25],["SHLF","Long-Term Shelving Co",38],["MRGN","Marginalia Partners",7.7],["TYPO","Slip of the Tongue Inc",.3]],lunch:["Alphabet soup","The bookshop cafe","Club sandwich (the book club)","Leftovers from the archive fridge","Paperback pasta bar","Scroll-shaped wraps"],timer:{work:"Writing the chapter",rest:"Turning the page"},mail:[{from:"Fox",subject:"Re: overdue books",body:`Raccoon,

Your memo says I borrowed an idea from your mind in 2019 and never returned it. If **the mind is a library**, I would like to renew it for another seven years.

Fox`},{from:"Chipmunk",subject:"Library card",body:`Hi Raccoon!

Can I get a library card for your mind? I need to check out the memory of where Mr. Halverson keeps the birthday candles. I promise to return it with no coffee stains this time.

Chipmunk`},{from:"Proofreaders Anonymous",subject:"Your mind has a typo",body:`Dear Raccoon,

We read your claim that the mind is a library of rough drafts. We have found 412 typos in our own minds this week and wondered if you offer editing.

Yours, with corrections,
Proofreaders Anonymous`}],mailReplies:["Filed in the library of my mind, under 'later'.","Noted in the margins of my mind.","The mind is a library: your message is on hold at the front desk."],appNotes:{sticky:"These are the marginalia of my mind. The mind is a library, and every library needs scraps of paper tucked between the pages.",mines:"Minesweeper is reading a redacted page: each number is a clue in the margin, and the mind fills in the blacked-out words. Guess wrong and the manuscript burns."}},v={name:"Skunk",role:"Human Resources",metaphor:"theatre",motto:"The mind is a theatre, and every one of us is a whole cast in one costume.",theme:"standard",palette:{bg:"#2B1B2E",ink:"#F5D6A0",accent:"#D26645"},apps:["mail","office-write","office-outline","office-diagram","office-cal","office-sheet","sticky","lunch"],files:[{app:"write",name:"The Play of the Self",text:`# The Self: a Play in Five Acts {.title}

The mind is a theatre, and this is the play it puts on every working day.

*Dramatis personae, all played by one employee's mind:*

- **The Professional**, who says "per my last email"
- **The Inner Critic**, seated in the front row, heckling
- **The Child**, who wants to go home
- **The Understudy**, who takes over after 3 PM

## Act one

The Professional enters, smiling. The Inner Critic coughs loudly.

## Act five

The curtain falls at 5 PM. Nobody claps. Everybody goes home.
`},{app:"outline",name:"Casting Interviews",text:`- The mind is a theatre: interview questions for new hires (casting call)
  - What role does your mind play in meetings?
  - Who is your understudy when you are tired?
  - Can you stay in character on a Monday?
  - Do you suffer from stage fright on video calls?
  - Are you willing to wear the mask of enthusiasm?
`},{app:"diagram",name:"My Mind, The Cast",text:`---
kind: mind
---
- My mind, as a theatre
  - The stage: awareness, lit by a single spotlight
  - The cast
    - The Professional
    - The Inner Critic
    - The Dreamer
  - Backstage
    - Memories changing costume
    - Habits running the lights
  - The audience
    - Everyone I imagine is watching
  - The prompter
    - Conscience, whispering lines
`},{app:"cal",name:"Rehearsals and Shows",text:`- 2026-11-20 10:00: Rehearse the performance review face (the mind is a theatre)
- 2026-11-25 15:00: Dress rehearsal for the mind: fire drill
- 2026-12-04 11:00: Improv workshop: every mind plays a role
- 2026-12-18 17:00: Opening night for every mind: holiday party
`},{app:"sheet",name:"Masks Inventory",text:`Mask (the mind is a theatre) | Worn when | Comfort:number | Condition
--- | --- | --- | ---
Enthusiasm | All-hands meetings | 3 | Cracked
Calm | Complaints about the third floor | 5 | Holding up
Interested | Wolf's sales stories | 2 | Slipping
Sympathy | Bear's hibernation request | 8 | Genuine
Bravery | Talking to Halverson | 4 | Borrowed
`}],notes:["Stage fright in my mind before the all-hands: breathe","Recast the Inner Critic as a quiet extra","Bear's hibernation leave form"],stocks:[["MASK","Masks and Personas Ltd",27],["SPOT","Spotlight Attention Co",61],["CRTC","Inner Critic Holdings",14.5],["UNDR","Understudy Ventures",9.25],["APLS","Applause Futures",44],["FRGT","Stage Fright Insurance",6.75]],lunch:["The intermission bar","Backstage burritos","Dinner theatre buffet","The green room salad","Encore pizza","Curtain-call curry"],timer:{work:"On stage",rest:"Intermission"},mail:[{from:"Mouse",subject:"Which role am I?",body:`Skunk,

In orientation you said the mind is a theatre and everyone plays several roles. I think my mind only has one role so far: Nervous Intern.

Is there an audition for a second one?

Mouse`},{from:"Wolf",subject:"Complaint about my Inner Critic",body:`Skunk,

You told me the mind is a theatre and my Inner Critic is just a heckler in the front row. Can HR remove him? He keeps booing during my sales calls.

Wolf`},{from:"The Theatre of the Mind Box Office",subject:"Your tickets: tonight's performance",body:`Dear Skunk,

Thank you for booking **The Self**, now playing nightly in your mind. Tonight's cast includes the Professional, the Inner Critic and a surprise appearance by the 3 AM Worry.

Latecomers will be seated during an awkward silence.`}],mailReplies:["Thank you for your note. My mind's cast will review it in rehearsal.","The mind is a theatre: I'll put your request on stage tomorrow.","Noted. My Professional will reply once my Inner Critic stops heckling."],appNotes:{sticky:"Sticky notes are cue cards for my mind. The mind is a theatre, and every note is a line one of my characters must not forget on stage.",lunch:"Lunch Roulette is the casting director of my mind: spin the wheel and see which role plays the stomach today. Every lunch is a small performance."}},M={name:"Squirrel",role:"Procurement",metaphor:"nature",motto:"The mind is a forest: plant a thought, forget where, and a tree comes up in spring.",theme:"standard",palette:{bg:"#2E3B1F",ink:"#F5D6A0",accent:"#D26645"},apps:["office-write","office-sheet","office-outline","office-diagram","office-cal","stocks","lunch","sticky","mail"],files:[{app:"write",name:"The Mind Is a Forest",text:`# The mind is a forest {.title}

A memo from Squirrel, Procurement.

The human mind is a forest. Every idea you have is a seed. Most of them you bury and forget. That is fine. That is how forests work.

## Roots

The things you learned as a kit are the roots of the mind. You cannot see them, but they hold the whole tree up in a storm.

## Undergrowth

Worries are brambles in the mind's undergrowth. Cut a path through them every morning or they close back over the trail.

## Mycelium

Under the forest floor of the mind, every thought is quietly connected to every other thought by a fungus network. This is why thinking about acorns makes me think about pecans, then about winter, then about the budget.

## Recommendation

We should procure more planters. For the office, and for the mind. Not for burying things.
`},{app:"sheet",name:"Thought Seed Cache",text:`Idea (a seed in the forest of the mind) | Buried where | Date buried | Sprouted
--- | --- | --- | ---
New supplier for pens | Planter by the elevator | Oct 3 | Yes
Ask for a raise | Under desk 13 | Oct 19 | Not yet
Better filing system | Halverson's plant | Nov 2 | Seedling
Learn spreadsheets | Window planter | Nov 8 | Yes
That great idea from the shower | Unknown | Nov 12 | Lost to the forest
`},{app:"outline",name:"Seasons of a Thought",text:`- Seasons of a thought (the mind is a forest, and thoughts grow like trees)
  - Spring: the idea sprouts in the mind
    - Tiny, green, easily stepped on
    - Water it with attention
  - Summer: the idea grows leaves
    - Tell coworkers about it
    - Watch for deer (they eat new ideas)
  - Autumn: the idea drops seeds across the mind
    - Write it down before it falls
  - Winter: the idea sleeps
    - Do not dig it up to check on it
`},{app:"diagram",name:"My Mind, a Forest",text:`---
kind: mind
---
- My mind, as a forest
  - Roots
    - Childhood memories
    - Instincts: deep and old
  - Trunk
    - Who I am at work
  - Branches
    - Plans that fork
    - Daydreams that reach for light
  - Leaves
    - Moods: they change with the season
  - Forest floor
    - Forgotten seeds that might sprout
    - Mycelium: everything in the mind is connected
`},{app:"cal",name:"Growing Season",text:`- 2026-11-20 09:00: Plant a new idea in the forest of the mind (planning meeting)
- 2026-11-27: First frost in the mind; stop starting new projects
- 2026-12-05 10:00: Walk the mind's forest: check which ideas took root
- 2026-12-21: Winter solstice: let the forest of the mind lie fallow
`}],notes:["The mind is a forest: an idea buried is not an idea lost. Probably.","Water the window planter (and the forest of my mind)","BUY PECANS"],stocks:[["ACRN","Acorn Memory Futures",.55],["ROOT","Deep Roots Holdings",31.2],["MYC","Mycelium Network Co",12.8],["LEAF","Passing Mood Partners",4.4],["SEED","Forgotten Idea Trust",1.1],["OAK","Mighty Oak Capital",88]],lunch:["The acorn bar","Forest floor salad","Pinecone pizza","Wild mushroom soup","Berry bush buffet","Under the big oak (picnic)"],timer:{work:"Growing",rest:"Lying fallow"},mail:[{from:"Mr. Halverson",subject:"Nuts in my plant",body:`Squirrel,

I found eleven pecans in my office plant. When I asked, you said **the mind is a forest** and you were 'planting thoughts for later'.

Please plant your thoughts in your own mind, not in my ficus.

Mr. Halverson`},{from:"Deer",subject:"Re: your forest of the mind",body:`Squirrel,

I liked your memo saying the mind is a forest. But please stop telling people that deer 'eat new ideas'. I have never eaten an idea. I eat hedges.

Deer`},{from:"The Mycelium Network",subject:"You have 1 new connection",body:`Hello Squirrel,

A thought about acorns in your mind has connected to a thought about the Q4 budget, through the fungus under your forest floor.

The mind is a forest, and everything in it is connected. Reply to accept this connection.`}],mailReplies:["Planted your note in the forest of my mind. It will sprout by spring.","Noted. The mind is a forest, and your idea just took root.","Buried it somewhere safe. In my mind. Probably."],appNotes:{stocks:"In the forest of the mind, every idea is a seed with a price. Roots hold their value, moods drop like leaves, and forgotten seeds sometimes come back worth a fortune.",lunch:"The mind is a forest, and foraging is how it decides. Spin the wheel and let the forest pick where we feed today.",sticky:"These notes are seeds. The mind is a forest: I plant each thought here so I can find it again before winter."}},S={name:"Wolf",role:"Sales Lead",metaphor:"electricity",motto:"The mind is a power grid. Mine runs at 240 volts. Stand back.",theme:"standard",palette:{bg:"#1A1A40",ink:"#CECD0C",accent:"#F50D00"},apps:["office-deck","office-sheet","office-write","office-diagram","office-calc","stocks","lunch","mail"],files:[{app:"deck",name:"Pitch: High Voltage",text:`## High Voltage Selling {.title}

- Wolf, Sales Lead
- The mind is electricity. Sell to it.

---

## The customer's mind is a circuit

- Find the switch
- Close the loop
- Watch the bulb light up

---

## Charge builds up in the mind

- Every call adds a little voltage
- On call seven: the spark

---

## Keep your mind grounded

- Or you will blow a fuse in the meeting

---

## Questions?

- (static only, please)
`},{app:"sheet",name:"Lead Voltage Meter",text:`Lead | Contact | Charge in their mind (volts):number | Deal size:money | Status
--- | --- | --- | --- | ---
Riverbank Co | Dr. Reed | 220 | 88000 | Sparking
Acorn Holdings | Mr. Oak | 120 | 45000 | Warming up
Pinecone Partners | Ms. Fir | 12 | 12000 | Low battery
Burrow Bros | The Moles | 0 | 3000 | Short circuit
`},{app:"write",name:"Recharge Plan",text:`# Personal recharge plan {.title}

The mind is a battery wired into a power grid. Mine drains by 3 PM.

## Signs my mind is running low

- Flickering focus
- Buzzing sound in meetings (that is me humming)
- Calling Pinecone Partners for the ninth time

## How I recharge my mind

1. Plug in at the coffee machine.
2. Ten minutes of howling in the stairwell.
3. Avoid Possum, who drains every mind nearby.

## Do not

Do not touch me after a big close. My mind is still carrying a charge.
`},{app:"diagram",name:"My Mind, a Circuit",text:`---
kind: mind
---
- My mind, as electricity
  - Power source
    - Coffee: the main generator
    - Big deals: lightning strikes
  - Wiring
    - Neurons: millions of tiny wires
    - Habits: the circuits that are always on
  - Switches
    - Decisions: on or off
  - Fuses
    - Patience: blows easily
  - Grounding
    - Sleep
    - Long walks in the woods
`},{app:"calc",name:"Brainpower Wattage",text:`---
title: The mind is electricity. How many light bulbs does it run?
---
brain_watts = 20
hours_awake = 16
day_watt_hours = brain_watts * hours_awake
bulb_watts = 60
day_watt_hours / bulb_watts
`}],notes:["Call Riverbank: their mind is fully charged","The mind is a circuit: stay grounded in the pitch","Practice the howl (a power surge for the mind)"],stocks:[["VOLT","Big Idea Voltage Co",240],["SPRK","Sudden Insight Sparks",33.3],["AMP","Focus Amperage Ltd",15.5],["FUSE","Short Temper Holdings",6],["GRID","The Neural Grid Inc",120],["STATC","Static Brainfog Trust",.9]],lunch:["The power lunch steakhouse","Spark plug burritos","The live wire noodle bar","Lightning fast pizza","Charged-up energy bowl","The volt-age diner"],timer:{work:"Fully charged",rest:"Recharging"},mail:[{from:"Possum",subject:"I do not 'drain minds'",body:`Wolf,

Your recharge plan says I 'drain every mind nearby'. I am not a battery thief. I am just quiet.

Also if the mind is electricity, mine is on a dimmer switch, and that is a lifestyle choice.

Possum`},{from:"Hedgehog",subject:"Re: rewiring your brain",body:`Wolf,

You asked IT to 'rewire your mind for more voltage'. I support computers, not power grids. **The mind is not electricity**, it is software.

That said, please stop licking the stapler to 'get a spark'.

Hedgehog`},{from:"City Power Company",subject:"Unusual usage at desk 1",body:`Dear Wolf,

Our meters show a surge every time you close a deal. Your note says the mind is a power grid and yours runs at 240 volts.

Please install a surge protector on your enthusiasm.

City Power Company`}],mailReplies:["Got it! That just sent a spark straight through my mind.","The mind is electricity, and you just closed the circuit.","Charging up on this. Back to you at full voltage."],appNotes:{stocks:"The mind is a power grid, and these are its utilities. Big ideas run high voltage, insights spark and spike, and brain fog trades like static: worth almost nothing.",lunch:"My mind is electricity and lunch is the recharge. Spin the wheel, pick a power source, plug in."}},s={bear:m,beaver:l,bunny:c,chipmunk:u,deer:y,fox:f,halverson:p,hedgehog:g,mouse:w,otter:k,possum:b,raccoon:T,skunk:v,squirrel:M,wolf:S};function P(e){return Object.prototype.hasOwnProperty.call(s,e)?s[e]:null}function D(e){const t=e.app==="write"?"md":"txt";return`${e.name.replace(/[/\\:*?"<>|]/g,"-")}.${t}`}const C=/^[a-z0-9][a-z0-9-]{0,31}$/;function I(){let e=window.location,t=window;try{for(;t.parent!==t;){const o=t.parent;o.location.pathname,e=o.location,t=o}}catch{}return e}function h(e){const t=new URLSearchParams(e.search).get("who");return t!==null?t.trim().toLowerCase():e.pathname.split("/").filter(a=>a!=="").find(a=>Object.prototype.hasOwnProperty.call(s,a))??""}function R(){const e=h(window.location)||h(I());return C.test(e)?e:""}const d=R(),A=2;function B(e){return d===""?e:`${e}@${d}#${A}`}export{s as C,d as W,P as c,D as f,B as s};
