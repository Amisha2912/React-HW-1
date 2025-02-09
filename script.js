const heading=React.createElement("div",{id:"heading"},
    [React.createElement("h1",{},"Topics Covered"),
    React.createElement("p",{},"The following is a list of all the topics we cover in the MDN learning area.")
]);

const div1=React.createElement("div",{},
    [React.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Learn_web_development"},"Getting start with the web"),
     
     React.createElement("p",{},"Provides a practical introduction to web development for complete beginners")
    ]
)

const div2=React.createElement("div",{},
    [React.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content"},"HTML — Structuring the web"),
     
     React.createElement("p",{},"HTML is the language that we use to structure the different parts of our content and define what their meaning or purpos is.")
    ]
)

const div3=React.createElement("div",{},
    [React.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics"},"CSS — Styling the web"),
     
     React.createElement("p",{},"CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation.")
    ]
)


const parent=React.createElement("div",{id:"parent"},heading,div1,div2,div3);
const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);