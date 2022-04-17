/**
 * pedernal
 * 15-04-2022
 * A Noicy Night
 *
 * A front-end script that will run a short web text adventure
**/

//Global variables
var parte = 0; //counter that tells orchestrator function what part of the story to continue
var hasGun = false; //determines options if player has picked gun on safe or not
var goodEnding = false; //determines what ending to output based on user interaction

//PRINT STORY FUNCTIONS
/**@desc print the first part of the story*/
function part1()
{
	const parPt1 = `You are a single dad, you find yourself in the study room, you closed the door to nullify any chances that your typing could wake up Zach, your seven year old son. He is sleeping in his room that is upstairs by the end of the hallway.`;
	const parPt2 = `Although you have a stable job as a system administrator, you are also a renegaded writer. You are once again in front of your desk late at night writing, or rather attempting to write, your fourth horror book which is a collection of scary original tales–that you'll self-publish through Amazon an nobody will read–but you are stuck, scary situations are just not coming to mind.`;
	const parPt3 = `You think, you think, you think and just when a foggy sense of an idea was starting to materialize in your head, a sudden clangorous noise pierces through the peaceful serenity of midnight. It takes you several fractions of a second to realize what is happening, first you identify that is coming from within the house, second you realize that it's the sound of broken windows, flying pans, plates smashing against the floor, silverware tossed around like rice at a wedding, and apparently something as big as an rhinoceros is stomping around because you cannot just hear but also feel the vibrations underneath your feet. "The kitchen!" you realize.`;

	prGenerator(parPt1, "segment_begining");
	prGenerator(parPt2, "segment");
	prGenerator(parPt3, "segment_end");
}

/**@desc print the second part of the story*/
function part2()
{
	const story = `And so it begins again, the noise is not confined to a place, the mess is now moving, whatever is making such noises is now rushing away from the kitchen! It's now going from room to room. You can hear every detail, you can hear it launching its huge mass against the walls and corners, knocking stuff and small furniture to the ground and then kicking it, glass breaks, wood cracks, fabric tears…`;
	prGenerator(story);
}

/**@desc print the third part of the story*/
function part3()
{
	const story = `Suddenly, you hear IT once more, now moving with a clear direction, it's heading towards the stairs, it's going up, its massiveness popping the railing off of the stairs to make way for itself as it climbs.`;
	prGenerator(story);
}

/**@desc print the ending 1 (the 'bad' one)*/
function ending1()
{
	const story = `You hear a door upstairs violently being demolished, you only have time for one thought, not even, just one word. Zach. Immediately, you hear him scream, then silence. “ZACH!!!” you yell as you leave the study room and run towards the stairs, you leap steps, almost getting to the very top in just three hops, you turn on the light of the hallway as you pass bay, and you see it, Zach's door room is… down? Not attached to its door frame but also not destroyed, is like someone took the screws of the hinges off and then carefully laid the door on the ground parallel to the hallway. "Zach!" you yell again. You get rapidly closer and closer but it feels like time is slowing down. You arrive. You are in front of the door frame and… nothing. Your heart sinks, you feel like you're going to pass out. The room is only illuminated by the moonlight entering through the open window that is at the opposite wall from the door frame, a gentle breeze moves the edges of the semi-translucent curtain that has been moved away to allow the essence of the calmed night permeate the room, which is in immaculate condition. You flip the light switch. This is not right. Zach's school notebooks and supplies are neatly arranged in his desk, the chair has been aligned and tucked in, all the books and manga that he loves so much are on their shelf above the desk, ordered alphabetically and with their spine facing you and there's not a single piece of clothing lying on the floor. You have never seen this room so clean. Never. But worst of all is the bed. There's no mess anywhere… there's no Zach anywhere. The bed, where Zach should sleeping right now, is made. You sprint to it and you undo it. "No!" you exclaim. You toss around the sheets and the pillows as you scream you boy's name over and over and over again, you look under the bed. You run to the window and lift the mosquito mesh, “Maybe he's outside?” you think, you peak your head out and call for him to no avail. Once you give up on that, you turn around and that's when you see it… carved in the wall of the hallway, framed by the door-less door frame, it is written, "YOU HAVe YOUR SCARY TALe NOW."`;
	prGenerator(story);
	prGenerator("Fin", "dialog"); //dialog just fits the css style
}

/**@desc print the ending 1 (the 'good' one)*/
function ending2()
{
	const parPt1 = `You start walking around the area and there area 'hot spots' that induce you more nervousness than others. Weapon in hand and with a strong sense of unease, you triangulate… something based on where you heard the destruction and where you feel unease. From now on, you're decisions are being made entirely by the primal part of your brain that goes, "I don't know what's going one but better safe than sorry." You point the gun at nothing, you suppress the last rational thought that crosses your head and you pull the trigger. *BANG!*`;
	const parPt2 = `The bullet went right through the drywall, who knows what other damage you caused beyond the very visible hole. A few seconds pass, you stare at the bullet hole with your eyes wide open, not believing what you just did. Your ears are ringing. You collect your thoughts, you need to check on Zach, he most be terrified. You drop the gun, walk up the stairs and head to his room, you open his door and turn on the light. His room is a mess and his bed undone but he's not there. You call for him softly, "Zach?" His head peaks from under the bed, he's visibly shaking.`;
	const parPt3 = `Despite the circumstances–and maybe is just psychological, maybe this entire experience was entirely psychological, maybe you are getting mad–you feel like an untold weight has been lifted off your shoulders. "I'm sorry, buddy. That was my bad, I made a big oopsie." you said to him trying to sound as nonchalant as possible to calm him down.`;

	prGenerator(parPt1, "segment_begining");
	prGenerator(parPt2, "segment");
	prGenerator(parPt3, "segment_end");
	prGenerator(`"What happened?"`, "dialog");
	prGenerator(`"I was accidentally being dumb. Are you OK?"`, "dialog");
	prGenerator(`"Uh-huh"–Zach pauses for a second–"I was dreaming."`, "dialog");
	prGenerator(`"Yeah. I was dreaming that you and I had to hide from something very big running around the house."`, "dialog");
	prGenerator("Fin", "dialog"); //dialog just fits the css style
}

//USER INPUT FUNCTIONS
/**@desc function to advance the story, it incrases the global parte variable and the orchestrator function to execute the next part of the story*/
function advancePart()
{
	++parte; //increase global varialbe for switch at orchestrator function
	console.log("Story part to run: " + parte);
	orchestrator(); //call the orchestrator function again to to continue the story
}

/**@desc Part of the story where player decided to */
function investigate()
{
	//let input = {value: -1}; //where user input will be saved
	const options = [];
	const groupName = "options1";

	const story = `As soon as you twist the door knob, the noise stops. just like when you hit pause in your music player, abruptly without latent effect, not even the echoes or reverb of whatever was going on can be heard. The only thing that can be heard in the quiet night is the distant electrical humming of appliances and the muted singing of crickets. As for the mess? You go to inspect the source of the noise and there is no destruction whatsoever. Everything is exactly as it should be, or at least that's what it looks like at first glance, a few moments ago it sounded as if hurricane came to visit. What is going on? Are you developing dementia or something? There's no history of something like that in your family and you're far too young for any of that sorts. You know what you heard and you don't feel… alone.`;
	prGenerator(story);

	options.push(createOption("option2", groupName, "a", "Check on Zach"));
	options.push(createOption("option2", groupName, "b", "Return to the study room"));
	if (hasGun) //if player does not have gun, open this option
	{
		options.push(createOption("option3", groupName, "c", "Use gun"));
	}

	//nested function to be executed once user enter input from options
	const lambExec = (input) => {
		//console.log("pased input to lambExec: " + input);

		const storyOption1 = `You just want to make sure Zach is OK, if he got awake or something, so you head up stairs and walk the hallway to his room turning the lights on on your way. You carefully open his door room and peak in, just enough to get a glance of his silhouette. He's there, sleeping in his bed, you pay attention and you can hear him bread profoundly and calmly, everything is alright.`;
		const storyOption2 = `Since you couldn't find anything, you head back to the study room.`;

		switch (input)
		{
			case "a": //branches out to check zach story
				prGenerator(storyOption1);
				break;
			case "b": //branches out to return to study room
				prGenerator(storyOption2);
				break;
			case "c": //we used the gun so we won and jump directly to the ending, because advancePart is going to run later, we set it to 2 instead of 3
				parte = 2;
				goodEnding = true;
				break;
			default:
				prGenerator("ERROR: Internal logic error passing lambda function for event triggered by from", "err-rep");
				break;
		}

		advancePart(); //end of 'branch,' now we advance to the next part of the story
	};

	createRadioInput("form1", groupName, options, lambExec); //create input options and handle event
}

/**@desc part of the story that handles the search of the study room*/
function searchStudy()
{
	const options = [];
	const groupName = "options2";

	const story = `Hell is breaking loose inside your house and your office is filled with lots of things but none of them are useful for self defense, except for one of your revolvers that you keep in the safe in the bookshelf.`;
	prGenerator(story);

	//options for player input
	options.push(createOption("option2", groupName, "b", "Do not open safe"));
	options.push(createOption("option1", groupName, "a", "Open the safe"));

	//lambda to execute after whether player opens safe or not, it contains an inner prompting of action
	const lambExec = (input) => {
		switch (input)
		{
			case "a": //player opens the safe; creates sub-interaction
				prGenerator("You found a gun in the safe.");
				//Options for the sub-interaction that trigers if player decides to open the safe
				const subOptions = [];
				const subGroupName = "subOptions2";
				subOptions.push(createOption("suboption2", subGroupName, "n", "Don not take gun"));
				subOptions.push(createOption("suboption1", subGroupName, "y", "Take gun"));
				//sub-lambda to be called during event handeling of subform2 that is created when handeling the event trigered by the form2... just check labmExec, and see that it is passed  for form2...
				const subLambExec = (input) => {
					switch (input)
					{
						case "y": //set state for when player decides to take the gun
							hasGun = true; //global variable
						break;
						case "n": //player decided not to take the gun
							prGenerator(`You are sure you won't need it.`);
						break;
						default:
							prGenerator("ERROR: Internal logic error passing lambda function for event triggered by from", "err-rep");
							break;
					}
					advancePart(); //end of 'branch' interaction
				};
				createRadioInput("subform2", subGroupName, subOptions, subLambExec);
				break;
			case "b": //player does not open the safe
				prGenerator(`You are sure it won't be necesary.`);
				advancePart(); //the other end of 'branch' interaction
				break;
			default:
				prGenerator("ERROR: Internal logic error passing lambda function for event triggered by from", "err-rep");
				break;
		}
	};

	createRadioInput("form2", groupName, options, lambExec);
}

/**@desc used to decide where to branch off in the story*/
function decider()
{
	//cration of options
	const options = [];
	const groupName = "options3";
	options.push(createOption("option1", groupName, "a", "Investigate"));
	options.push(createOption("option2", groupName, "b", "Ignore it"));
	if (!hasGun) //third option to include if player has taken the gun yet
	{
		options.push(createOption("option3", groupName, "c", "Explore study room to find somehting useful"));
	}

	//lambda to pass to form so it gets executed when event is trigered
	const lambExec = (input) => {
		switch (input) {
			case "a": //player decided to inverstabe the source of the noice
				investigate();
				//story is advanced in investigate func
				break;
			case "b": //player decided to igore the source of the noice
				prGenerator("Must be just your imagination.");
				advancePart(); //end of 'branch' interaction
				break;
			case "c": //player decides to search the study room for something useful
				searchStudy();
				//the sotory is advanced in the searchStudy func
				break;
			default:
				prGenerator("ERROR: Internal logic error passing lambda function for event triggered by from", "err-rep");
		}
	};
	createRadioInput("form3", groupName, options, lambExec); //create input options and handle event
}

//ELEMENT FACTORIES AND HELPER FUNCTIONS
/**@param formName unique name for the group of input radio elements
 * @param groupName the name of the relevant radio input elements
 * @param options list of option object (see createOptions function) that will be used to append  to the main HTML element
 * @param exec passed lambda to rexecute after sumition
 * @desc given a name and an list of options, it will create and append the input radio elments into the main HTML element**/
function createRadioInput(formName, groupName, options, exec)
{
	let input = -1;
	const main = document.getElementById("main"); //getting parent HTML element to append
	let newForm = document.createElement("form"); //creating form
	newForm.action = "#"; //form's data stays on the page
	newForm.name = formName;

	//this function to execute after form detects subition event
	const handleSubmition = (event) => {
		const group = document.getElementsByName(groupName); //get relevant group of options
		for (let i = 0; i < group.length; ++i)
		{
			if (group[i].checked)
			{
				input = group[i].value;
				console.log("submited: " + input);
			}
			group[i].disabled = true;
		}
		//console.log("input before passing to exec() inside handleSubmition inside createRadioInput: " + input);

		exec(input); //part of the story to execute after submition

		event.preventDefault(); //to avoid reloading after sumition
	};
	newForm.addEventListener("submit", handleSubmition); //add a new event listener

	options[0].input.checked = "checked"; //FIXME: maybe we don't want this... make the first option the default
	//innerinner function as a lambda to apply to each element in otpions
	const lambForEach = (current) => {
		newForm.appendChild(current.input);
		newForm.appendChild(current.label);
		const br = document.createElement("br");
		newForm.appendChild(br);
	};
	options.forEach(lambForEach); //append option

	//appending the submit element
	const submit = document.createElement("input");
	submit.name = groupName;
	submit.type = "submit";
	submit.value = "Continue";
	newForm.appendChild(submit);

	prGenerator("Whad do you do?", "prompt");
	main.appendChild(newForm);
}

/**@param id the ID for the input
 * @param name name for the radio input
 * @param value the value to be returned if slected
 * @param text the inner text for the label of input
 * @desc helper function to create user input of type radio*/
function createOption(id, name, value, text)
{
	//creating the input radio element
	let newInput = document.createElement("input");
	newInput.type = "radio";
	newInput.id = id;
	newInput.name = name;
	newInput.value = value;

	//creating the lable
	let newLabel = document.createElement("label");
	newLabel.for = id;
	newLabel.innerHTML = text;

	return {input: newInput, label: newLabel};
}

/**@param str string to display on the website
 * @desc automatizes the creation of pr elements*/
function prGenerator(str)
{
	/*const main = document.getElementById("main");
	const pr = document.createElement("p");
	pr.innerHTML = str;
	main.appendChild(pr);*/
	prGenerator(str, "paragraph");
}
/**@param str string to display on the website
 * @param id the id for the p element
 * @desc automatizes the creation of pr elements*/
function prGenerator(str, id)
{
	const main = document.getElementById("main");
	const pr = document.createElement("p");
	pr.id = id;
	pr.innerHTML = str;
	main.appendChild(pr);
}

/**@desc The 'render' fundtion called on the HTML index file, it also controlls the flow of the story. Function to be passed to advancePart function*/
function orchestrator()
{
	//Swith to determinate what part of the story to advance to:
	switch(parte)
	{
		case 0: //print part one and decide what to do after user input
			part1();
			decider();
			break;
		case 1: //print part two and decide what to do after user input
			part2();
			decider();
			break;
		case 2: //print part three and decide what to do after user input
			part3();
			decider();
			break;
		case 3: //based on previous user actions, print corresponding ending.
			let ending = (goodEnding)? ending2 : ending1;
			ending();
			break;
		default: //error, maybe something went wrong.
			const errMess = "ERROR for orchestrator function: Something went wrong with either the switch in this function, the calling of this function or the advancePart function."
			prGenerator(errMess, "err-rep");
			console.error();
			break;
	}
}
