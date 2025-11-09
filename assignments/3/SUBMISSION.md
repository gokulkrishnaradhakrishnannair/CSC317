# CSC 317 Assignment 3 Group Submission

**Group Members:**
- [Abraham Cardenas] - [916872183] - [Acardenas96]
- [Jerome Fernando] - [918473002] - [jm-fernando]
- [Mario Jimenez] - [924810481] - [nochinxx]
- [Gokul Krishna Radhakrishnan Nair] - [924469621] - [gokulkrishnaradhakrishnannair]

**Elected Submitter:** [Abraham Cardenas - Acardenas96]
**Repository Link:** https://github.com/Acardenas96/CSC317/tree/main/assignments/3

# Portfolio Styling Assignment Analysis

## Group Analysis (250-500 words)
Mario's version of the group work:

As a group, our project brought together different design perspectives and workflows. Abraham focused on building the cyberpunk-style CSS, aiming for something bold, tech-inspired, and expressive. His design used neon colors, glitch effects, and brush-style headings to create a “Vice City meets glitchy student showcase” atmosphere. He also organized and pushed the Git repo for the others to work on.

On the other hand, the collaborative process itself was more challenging than expected. Communication was inconsistent, and not every team member participated equally, which made it difficult to coordinate changes or reach a shared design direction. In practice, everyone ended up working quite independently on their own section. This meant our final styles showed strong individual voices but lacked a single cohesive design language.

Even with those challenges, the project was an exciting learning experience. It showed how different creative approaches—manual design, AI-assisted generation, and hybrid refinement—can each bring something valuable. For example, the AI versions helped establish a strong base for visual polish, while the handwritten and hybrid CSS gave us room to experiment with structure, spacing, and responsiveness.

The biggest takeaway from this collaboration was that design projects need early communication and consistent visual standards to feel unified. Establishing shared color palettes, spacing rules, and layout conventions from the start would have saved time and made the portfolio look more cohesive. Still, the experience pushed us to solve problems individually, learn from each other’s techniques, and adapt when teamwork got complicated.

Overall, the project combined technical creativity with lessons about collaboration. It reminded us that great design isn’t just about how something looks—it’s about how well a team can communicate, coordinate, and merge ideas into a single vision.

Abraham original text: [For my part, I focused on building out the cyberpunk CSS for our portfolio. I wanted it to feel bold and techy but still readable—kind of like Vice City meets glitchy student showcase. I used neon colors, glitchy borders, and brush-style headers to give it personality, while keeping the layout clean and modular. I also handled the Git stuff for our branch (ai-1-css), making sure everything was organized and pushed properly. One thing I learned was how much small design choices affect the vibe—like hover effects and font pairings. I also wrote the AI prompt that generated the CSS, so it’s documented and repeatable. Overall, I tried to mix creativity with structure and make something that actually feels like me while still hitting the assignment goals.]


## Individual Reflections

### [Abraham Cardenas] - Hand-written CSS (Part 1)
While working on the hand-written CSS portion of our project, I discovered that the line height: var(--heading-height); inside the header {} block was creating excessive white space between my profile image and the text below it. Removing that line immediately resolved the spacing issue and made the layout feel more balanced. This taught me how even a single CSS variable can dramatically affect visual flow, especially when working with custom properties. It also reminded me to inspect inherited styles and test layout changes iteratively. Aside from that fix, I primarily focused on refining the header structure and ensuring the visual hierarchy felt intuitive.

### [Mario Jimenez] - Hand-written CSS (Part 2)
I worked mainly on the section styling, since one of our teammates didn’t submit their part. I took responsibility for making the whole section consistent while especially focusing on the About Me area.

One of my biggest challenges was controlling margins and paddings so the layout looked balanced and centered. Getting the <h3> and <ul> elements perfectly aligned required experimenting with spacing and resetting default browser margins.

Another big part of my work was the theme switcher.
I modified the professor’s original code so that it would stay sticky at the bottom but not block the footer. I added padding, border-radius, and a light shadow so it looks more modern and blends with the site design.

Overall, my CSS aimed to keep a clean, readable layout that followed the color variables defined in our root while staying functional and responsive.


### [Jerome Fernando] - AI Text Prompt CSS
When creating one of the AI generated CSS stylesheets, my main goal was to experiment with design and gain an understanding of how styling choices can really have an impact on the personality of a webpage. Design choice direction was also one of my biggest struggles for this assignment. Ultimately I settled for prompting AI to create a cleaner looking stylesheet - with the sections separated into their own flexboxes for added design flexibility, a simple font for easy readability, and a softer color scheme that is visually pleasing. One of the other biggest lessons I learned was how to navigate the direction I wanted the AI to go through prompting. Being ultra specific on key details really helped me ensure that the AI is doing exactly what I want it to do and that it did not stray too far and generate the code in a way that I can still understand and maybe pick up some things to use in the future. 

### [Gokul Krishna Radhakrishnan Nair] - AI Image+Text Prompt CSS
On creating the AI prompt for CSS, I envisioned the webpage to look professional and easily readable. The stylesheet encompasses elements like .project card to amplify the transition from each section. Moreover, I preferred to highlight the parts for h1 and h2 and ended up getting alternating colors and typography. I realized from the AI generated code, that its size and boldness differs from h1 to h3 elements and have padding for subsection to encapsulate the list items.

## Group Preferred Version
Our preferred version is the Hybrid theme, since it combines the best design ideas from both the AI-generated and handwritten styles, still keeping things simple and personal.

## Collaboration Experience
[Mario] Even though the process was a bit of a communication hustle, I still think the project was exciting. It pushed us to experiment, take creative risks, and learn to adjust our designs to different styles. In the future, I’d like to see more early coordination and shared design guidelines so that everyone’s section feels more cohesive.