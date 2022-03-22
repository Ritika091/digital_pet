# digital_pet



The Task:
Create a playable digital pet with:

an SVG representation of the digital pet
a text display area for messages
a text display area for your pets food points
an interface for starting/restarting/controlling the game actions
Each time the game is started, your pet should have 60 points, and an interval of 1000ms.  The pet dies if it runs out of food.  Your pet should compliment the player by name(dynamic name input, no hardcoding), have variable metabolism, and eat random food with a chances of getting food poisoning(dependant on the food values). 

The pet must have an animated face with 4 states(neutral, happy, angry, sad), and a talk animation.  Each state can have more than 1 phrase.  This means that each phrase entry will have a mood(limit the number of mood types to 4: happy, sad, angry, jokey) and a phrase. 

All phrasing, art, code, and interfaces must be unique for each student.  Use ES6 Class structure to make your project.

Create The Interface:
The Interface for your game must include:
An Area for displaying the pet
A text entry field for taking in a name
An area for the display of game action text.  This area will show:
Any food the pet eats, whether they lose or gain health points, and how many points are gained/lost
The mood phrase of the pet
Any compliment the pet gives, with the name in the compliment coming from the text entry field
An area for the display of the pets food points
This area must update each time the number of food points for the pet changes
must stop updating when the pet runs out of food points
An area with clickable controls for:
starting/restarting the game
getting the pet to compliment the user
getting the pet to eat a random food
speeding the pets metabolism
slowing the pets metabolism
starting feast mode
Feast mode will loop through your list of foods eating 1 of each type until all foods are depleted or the pet has run out of food points. 
Create The Data:
Create a data json file that will hold
mood and phrase data(as per the previous digipet project) - 25 Entries
All phrases must be full sentences in english.  No weird animal noises!
Only 4 options for mood.  The only moods allowed are:
Happy
Sad
Angry
Jokey
food data with name, points, quantity, and chance of food poisoning - 12 Entries minimum. Please be creative with your food choices.  Here is what each piece of food data represents.
name:  The name of your food - String
points:  The number of food points the food has - Number
quantity:  How many of that food item the pet has.  When the quantity reaches 0, splice out the food item from the array.  The pet only eats one of the food item at a time. - Number
chance of food poisoning:  How likely the pet will get sick after eating the item - Number between 0 and 1
compliment phrases - 10 Entries
a list of compliments your pet will use to woo you.  In each phrase, have a specific marker you will replace with a name in the full function
Make The Class:
Convert the Repo to ES6
Make the ES6 class take in:
a location on the screen where your SVG of the pet is placed
the name of the data file that will be loaded via a fetch command in the class
Add the following functions to the Class
a function for speeding the pets metabolism(name is up to you).  The function should speed up the metabolism by a percentage determined by you.
a function for slowing the pets metabolism(name is up to you).  The function should slow down the metabolism by a percentage determined by you.
a function for feeding the pet a random food from your data
If the pet is out of that kind of food.  Splice the food item out of the array and search for another food.
use the chance of food poisoning in the food data. Compare it to a random number to see if the pet has food poisoning
if the pet has food poisoning, remove the a number of points equal to the food points from the pets health
if the pet did not get food poisoning, add the number of points the food contained to the pets health
a function that takes in a name and substitutes the holder text in a random compliment phrase with the name.
a function for starting feast mode.  In feast mode, the pet will randomly eat food until either, the pet is entirely out of foods or has no food points left due to food poisoning.
Add functions for controlling animation to the Class
a function for starting the mouth moving
a function for stopping the mouth from moving
a function for making the pets face tween to the happy face
a function for making the pets face tween to the sad face
a function for making the pets face tween to the angry face
a function for making the pets face tween to the neutral face
Pet Behaviour Guidelines
When the pet runs out of food the game ends, as well as all intervals and timers
When the pet says something happy, compliments, successfully eats a food, or tells a joke, it:
shows a happy face and does a talk animation, then returns to neutral
When the pet says something sad or gets food poisoning, it:
shows a sad face and does a talk animation, then returns to neutral
when the pet says something angry, it:
shows an angry face and does a talk animation, then returns to neutral
if the pet starves change it's eyes to X's
on restarting the game, reset the pets food points to 60 and make it have regular eyes for your art
Your pet svg must have:
an animation for the pet to appear to talk
Make animations to move to the following expressions
happy expression
sad expression
angry expression
neutral expression
Have two different kinds of eyes
Alive eyes
Crossed out eyes for sick, or starved states
Please note that there is no grace period for this assignment.  Your project must be submitted by December 13th at 11:59pm.
