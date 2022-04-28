# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Jobanpreet Singh**

Time spent: **4.75** hours spent in total

Link to project: (https://glitch.com/edit/#!/cumbersome-buttered-cross)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] Add patterns and frequencies with common muscial tones
- [ ] Allow the user to choose the pattern length and number of buttons

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

The first gif shows the user winning while making one mistake. 
![](https://github.com/programmerjoban/simple-memory-game/blob/main/walkthrough1.gif)

The second gif shows the user playing a different pattern and losing after 3 mistakes
![](https://github.com/programmerjoban/simple-memory-game/blob/main/walkthrough2.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
 * https://www.geeksforgeeks.org/css-display-property/, 
 * https://www.w3schools.com/css/css_align.asp, 
 * https://www.w3schools.com/colors/colors_names.asp, 
 * https://devdocs.io/javascript/

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

    While completing the prework, a challenge I encountered was speeding up the clue playback on each turn to make the game harder. At first, I decided to reduce the clue playback speed by 25 ms each turn, but this caused an issue with small patterns. For instance, when the pattern array had a length of five, the clue playback was slow for the user. Then, I changed the variable, clueHoldTime, to 300 ms and came across another issue. The playback was incomprehensible if I reduced the hold time by more than 200 ms. Applying brute force to this feature was not the best solution. After a while, I noticed a relationship between the speed that is comprehensible and the length of the pattern. I decided to reduce the initial hold time of 1000 ms each turn by the ratio of 200/pattern length. Thus, the clue hold time will be 200 ms faster than the starting point at the end of the progression of the pattern.
    
    Another challenge I overcame while completing the prework was relearning the syntax of javascript. About two years ago, I was assigned to create a portfolio webpage using HTML and CSS. I wanted to add additional features to my webpage, so I self-taught the basic syntax of javascript. To implement the code in javascript for the prework, I reviewed the syntax by reading the javascript documentation and sample code online. Overall, I enjoyed working on these challenges because I used my previous knowledge and multiple strategies.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

    The prework was intriguing, and after completing the assignment, I had multiple questions about web development. The first question I have is how is the data updated from an API in real-time on a webpage? It will be great to learn this feature because then I can implement a webpage that can keep track of the stock market. It will alert the users when there is a chance of profit from the selected stock. Talking about alerts leads to my second question, how can I create different alert messages? Being familiar with other kinds of alert messages will make the webpage more user-friendly. In general, I want to improve my knowledge of interacting with servers in the backend and the visual appearance of a webpage.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
    
    To improve the current prework submission, I would like to create different difficulty levels and produce musical patterns. The difficulty can be increased by increasing the speed and limiting the time to repeat the patterns. Time can be added to the webpage using the javascript timer functions such as setInterval and clearInterval. Also, it would be great to build a visual timer using CSS. Furthermore, I realized all musical notes have unique frequencies. The frequencies could generate a random pattern of a musical sound that the users can use to practice remembering musical tones. Overall, adding these functions will make the game more intriguing and user-friendly.


## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/3c6b86291baa4601b155451e11fd9e6b)

## License

    Copyright [Jobanpreet Singh]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
