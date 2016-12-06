# Sleigh the Day
Move Santa's Sleigh to catch as many falling presents as you can before time runs out!
![alt tag](http://i.imgur.com/NEeNuDz.jpg)

## How to Play
Visit https://alonmatthew.github.io/Projects/ to play!

Use your mouse to control Santa's Sleigh left or right.
Each player has 30 seconds to catch the following objects:

|Items   |Value    |
|--------|---------|
|Presents|Score + 1|
|Coal    |Score - 3|
|Clocks  |Time + 5 |
|Bombs   |Time = 0 |

## Development Process
Technologies Used: HTML5, CSS, Javascript/jQuery

Divs are prepended to the page's body at random locations and are animated to fall down.
Another div is set to the bottom of the page to be used as the catcher.
The catcher is attached to an event listener of "mousemove" to follow where the mouse cursor is.
A function detects if the catcher and the falling div come into contact.
Points and seconds are added or deducted to each player's score board accordingly.

## User Stories
* As a user, I want to see a start button at the top of the screen
* As a user, I want to see a score board for each player
* As a user, I want to see Santa's Sleigh at the bottom of the screen
* As a user, when I click the start button, I want to see catchable objects fall from the top of the page at random locations
* As a user, when I click the start button, I want to see the timer start to count down
* As a user, I should be able to move the Sleigh left and right with my mouse to catch the objects
* As a user, when I catch an object, I should see the score or time increase or decrease accordingly
* As a user, when I see the time run out, I should see the 2nd player's score board change
* As a user, when the game is over, I should be able to see which player won at the end of the game

## Future Adjustments
* Make code **DRY**
* Create logic to speed up the development of objects as the score adds up
* Create separate button for player 2's start

### Acknowledgments
Credit to the following:
* Original creator of Egg Catcher game
* Owners of images used
