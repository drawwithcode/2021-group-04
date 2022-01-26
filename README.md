# About
METANOISE is a virtual space created for the course of Creative Coding at Politecnico di Milano. 
If there was a button to restart your whole life, would you press it? In this website people will be asked to answer to question like the one above, all based on “intrusive thoughts”:  unwanted thoughts that can pop into our heads without warnings. These thoughts, that reveal parts of the inner reality of a human being, regard 5 dimensions: identity, beliefs, relationships, sexuality and violence. By answering, the users will leave a path that will be “translated” into an “intimate postcard”. Each postcard is unique: it represents the reflection of the user’s inner self. At the end of the experience the image will be collected in our “archive” where all the postcards generated can be visualized together. Now go find a safe place and enjoy this intimate experience.

**Table of Contents**
1. Project idea<br>
a. [Concept](#concept)<br>
b. [Context of use](#context-of-use)<br>

2. Structure<br>
a. [Homepage](#homepage)<br>
b. [Questions](#questions)<br>
c. [Archive](#archive)<br>

3. The Code<br>
a. [Design challenges](#design-challenges)<br>
b. [Coding challenges](#coding-challenges)<br>

4. [Team](#team)<br>


# Project idea
## Concept
The concept translates the idea of metamorphosis into a transformation of data into images. The users’ thoughts are processed by the algorithm in order to obtain a representation of their inner selves. 

The site is proposed as a virtual space in which people can leave a trace, looking in particular at intrusive thoughts, which, by their nature, are hidden in a personal dimension without finding outlet in the outside world.

The user provides data by answering to questions about the five spheres of intrusive thoughts: violence, identity, sexuality, religious beliefs and relationships. The questions touch upon those mental intrusions defined by Rachman as "every recurring, unacceptable, unwanted thought accompanied by a subjective emotional discomfort". The algorithm interprets the way users interact with the questions, giving back to them images. All data are recorded locally to ensure the protection of privacy.

## Context of use
The questions posed by the website, as mentioned, concern a particularly intimate sphere of human thoughts: for this reason, the experience requires some control over the surrounding environment that shouldn’t present any distractions. At the discretion of each user, the choice of the preferred device (which is developed to work both on mobile device - first - and desktop).

# Structure

// immagine struttura html //

## Homepage

// gif homepage con animazione e interazioni //

The homepage has the goal to show the key elements of the website. First the user will see Metanoise’s logo. The naming “metanoise” indicates a transformation, the metamorphosis, in the path from raw data to meaning. The word “metanoise” is commonly used in the cybernetic contest referring to inaccurate and irrelevant data, generated in systems with a scheme based on an uncontrolled vocabulary. Declining this meaning inside the cognitive sphere, Metanoise represents the set of unconscious and unwanted thoughts that self-generate and create disturbing noise (discomfort).
The animation on the background gives an idea of how the “visualizing mapping thoughts”, the artwork that will be generated at the end of the questions, will be. Thanks to this the user will have the first approach with the result of the project. 

Before accessing to the question’s page, the user will interact with two alerts. The first one concerns the use of data, which are temporarily collected in anonymous form and safely, only to generate parameters that will define the final artwork. The second alert is focused on the surrounded physic space around the user: the environment has to be quiet and comfortable.

When the user is ready to start can press play.

## Questions
The web pages dedicated to questions are the main section of the project, and it is where the user can make an experience in between a psychotherapeutic session and a confessional.

All the questions are grouped under five categories and they were chosen according to some consistency criteria: we didn’t want to deal with sensitive topics that could hurt someone.

Each question has been analyzed in order to establish what kind of answers it needed: some answer are articulated by using sliders, some by an answer box, and some by multiple choice. 

// gif con i tre tipi di risposta //

The peculiarity of the question’s webpage, highlighted by a darker background color, is to be a safe section, controlled and without distraction. Because of this the web page doesn’t have any graphic connections with the others (homepage and archive): here the users’ attention must be as high as possible to create a strictly personal final artwork. The visual mapping thoughts would have to represent the image of the inner debate that these topics will raise.

## Archive

// gif con interazioni archivio //

The metamorphosis is completed in the archive: a web page that collects all the images generated by the algorithm. Each visualizing mapping thoughts belongs to a single anonymous person. Therefore, the archive it is a gallery of representation of our subconscious that tells you about connections and differences between people without make it explicit. 

Metanoise takes shape when exists a place where are collected data that are usually considered ephemeral, incomplete, non-identifying, which, however, concern the emotional sphere, private thoughts and the judgments that constitute us as persons, as individual identities. 




# The Code

## Design challenges
The design of the webpage is focused on the overall perception of the user’s experience, a helpful atmosphere created in order to introduce people into their introspective path. The main colors of the page are two different shades of gray: for the homepage and archive a light gray (#DFDEE2), almost aseptic and scientific, while a deeper shade (#2E2D2C) for the section dedicated to questions that suggests an immersive atmosphere of reflection.

// img palette pagine //

The font selected for the project is named Everett, released in 2021 and designed by Paparelli for the foundry type.weltkren. [Directly from the specimen: «Strong typographic details add a high tension while keeping a reading comfort, finding the right balance between a font that is graphic yet fluid.»] 
The symmetry of the font puts the user in a visually comfortable situation, the interruptions of the lines refer to the concept of METANOISE: the recording of ephemeral data, usually defined as useless, that inside the project become protagonists. 

// img everett con citazione dallo specimen //

Another challenge refers to the parameterization of the artwork. The visual parameters taken into consideration are:
* The number of the squares per grid,
* The color palette, 
* The specific shade of each color,
* The blur effect of the overall image created.

The grid is determined by the average of characters typed within the open questions:

// img differenti griglie //

> 1 to 16 characters = 6x6 grid, 17 to 33 = 9x9 grid, 34 to infinity = 12x12 grid.

Each section has been assigned a color in two different shades. The percentage of a particular color is determined by the time spent in the section associated with it: if in an artwork is strong the presence of red, it means that the user treats the subject of violence with caution, taking more time to get to the bottom of what you think. The hue is determined by the option of your choice. 

// img ego + differenti tonalità //

We’ve also assigned two different shades to each color connected to the intrusive thoughts (violence: #FE0000, #FF6432; sexuality: #FF1493, #FE3EEF; identity: #7722F6, #B44EF2; beliefs: #1D64FF #37C3FF; relationships: #ABFF38, #D6FA26). The percentage of a particular color is defined by the time spent by the users on each section: if an artwork characterized by a strong presence of red, it means that an user treats the subject of violence with caution. The hue is determined by the option chosen by the user on the multiple choice kind of answers. 

// img blur? //

Finally, the blur effect is defined by the average percentage of the sliders: the closer you are to the center, sharper the image.




## Coding challenges

#### Inline code

`$ npm install marked`

#### Javascript　

```javascript
function test(){
	console.log("Hello world!");
}
 
(function(){
    var box = function(){
        return box.fn.init();
    };

    box.prototype = box.fn = {
        init : function(){
            console.log('box.init()');

			return this;
        },

		add : function(str){
			alert("add", str);

			return this;
		},

		remove : function(str){
			alert("remove", str);

			return this;
		}
    };
    
    box.fn.init.prototype = box.fn;
    
    window.box =box;
})();

var testBox = box();
testBox.add("jQuery").remove("jQuery");
```

#### HTML code

```html
<!DOCTYPE html>
<html>
    <head>
        <mate charest="utf-8" />
        <title>Hello world!</title>
    </head>
    <body>
        <h1>Hello world!</h1>
    </body>
</html>
```


# TEAM

// img team //

- Mina Bavosi
- Andrea Benedetto
- Antonio Federico Brunetti
- Maria Paola Canali
- Rosalba Difonzo
- Elisabetta Vignali


2021-team-work-group-4 created by GitHub Classroom

## Credits
Draw With Code: Creative Coding 2021/2022 <br>
Politecnico di Milano – Dipartimento di Design

### Faculty
- Michele Mauri
- Tommaso Elli
- Andrea Benedetti
