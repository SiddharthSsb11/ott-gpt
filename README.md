# OTT_GPT
> Finding movie by writing the mood you want to watch.

A platform to watch movies and series as per the category.
You can also search movies as per your mood by writing a prompt just like chat-gpt.

```
Currently working on Client side Code for media screen and making it mobile friendly.
Also working on clicking the Movie card and showing a modal with movie discription and reviews.

In case you find any bugs you can report it to me.
Pull requests are always welcome. For major changes, 
please open an issue first to discuss what you would like to change.
```

<hr>

## Hosted/Deployed

https://ott-gpt-ace5e.web.app/

## Tech Stack

<table width="1000">
	<tr>
        <td align="center"><a href="https://reactjs.org/"><img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" width="110px;" height="75px;" alt="Javascript"/><br /><b><font color="#777">React</font></b></a></td>
		<td align="center"><a href="https://tailwindcss.com/"><img src="https://avatars.githubusercontent.com/u/67109815?s=200&v=4" width="75px;" height="75px;" alt="Tailwind"/><br /><b><font color="#777">Tailwind</font></b></a></td>
        <td align="center"><a href="https://redux.js.org/"><img src="https://avatars.githubusercontent.com/u/13142323?s=200&v=4" width="75px;" height="75px;" alt="Redux"/><br /><b><font color="#777">Redux</font></b></a></td>
        <td align="center"><a href="https://chat.openai.com/g/g-I1XNbsyDK-api-docs"><img src="https://raw.githubusercontent.com/github/explore/ea47449629d663f4ca24763890b9b8b395069d3b/topics/chatgpt-api/chatgpt-api.png" width="75px;" height="75px;" alt="Redux"/><br /><b><font color="#777">ChatGptApi</font></b></a></td>
        <td align="center"><a href=""><img src="https://play-lh.googleusercontent.com/VgyD9nxsxISYNjNdGMq3ClUVLrKoMSWdwNHHqGSfFaiR4HMaPf6zOvqQfaD6eQ8P3x4" width="75px;" height="75px;" alt="TMDB"/><br /><b><font color="#777">TMDB</font></b></a></td>



	</tr>	
</table>

## Features
- Login/Sign Up
    - Sign In /Sign up Form
    - redirect to Browse Page
- Browse (after authentication)
    - Header
    - Main Movie
        - Tailer in Background
        - Title & Description
        - MovieSuggestions
            - MovieLists * N 
- OTT-GPT
    - Search Bar
    - Movie Suggestions as per the prompt

- Latest features of JavaScript i.e. ES6, ES7, ES8 is used
- [React JS Hooks](https://reactjs.org/docs/hooks-intro.html) are used with Functional components
- ES8 `async/await` is used



## Project Setup
- Before starting the project please add .env file and add TMDB and OPENAI KEY into it.