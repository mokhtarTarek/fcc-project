(this["webpackJsonprandom-machine-quote"]=this["webpackJsonprandom-machine-quote"]||[]).push([[0],{20:function(module,__webpack_exports__,__webpack_require__){"use strict";var E_WEB_FCC_FCC_PROJECTS_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__),isInvalidFormule=function(e){return/^[*/]|^[0]{2}|\.\w*\./.test(e)},isEndWithOperator=function(e){return/[=/*\-+.]$/.test(e)},isDotExist=function(e){return/[.]/.test(e)},isNumber=function(e){return/^[0123456789]/.test(e)},isOperator=function(e){return/[/\-*+]/.test(e)};function Calculator(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(E_WEB_FCC_FCC_PROJECTS_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),formule=_useState2[0],setFormule=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState4=Object(E_WEB_FCC_FCC_PROJECTS_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),display=_useState4[0],setDisplay=_useState4[1],clear=function(){setDisplay(""),setFormule("")},HandleResult=function HandleResult(){if(!/=\s\d*|[+\-/*]$/.test(formule)&&""!==formule){var rst=Math.round(1e8*eval(formule))/1e8;setDisplay(rst),setFormule(formule.concat(" = ".concat(rst)))}},HandleFormuleChanges=function(e){if(/=\s\d*/.test(formule)&&isOperator(e))return setFormule(display.toString().concat(e)),void setDisplay(e);var t=formule.concat(e);if(!isInvalidFormule(t))if(isEndWithOperator(formule)&&isOperator(e)){if(/\D-/.test(formule))return void setFormule(formule.slice(0,-2).concat(e));if("-"!==e)return void setFormule(formule.slice(0,-1).concat(e));"-"===e&&setFormule(formule.concat(e))}else setFormule(formule.concat(e));"."===e&&(isDotExist(display)||setDisplay(display.concat(e))),isNumber(e)?"0"===display&&"0"===e||setDisplay(display.toString().concat(e)):isOperator(e)&&setDisplay(e)};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"calculator-body",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"calculator__container",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"calculator__display",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span",{className:"calculator__display--formula",children:[" ",formule," "]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span",{id:"display",className:"calculator__display--result",children:[" ",""!==formule?display:0,"  "]})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{id:"clear",onClick:clear,className:"operator calculator__button",children:"AC"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{id:"divide",onClick:function(e){return HandleFormuleChanges("/")},className:"calculator__button operator",children:"/"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{id:"multiply",onClick:function(e){return HandleFormuleChanges("*")},className:"calculator__button operator",children:"x"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{id:"seven",onClick:function(e){return HandleFormuleChanges("7")},className:"calculator__button",children:"7"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{id:"eight",onClick:function(e){return HandleFormuleChanges("8")},className:"calculator__button",children:"8"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{id:"nine",onClick:function(e){return HandleFormuleChanges("9")},className:"calculator__button",children:"9"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{id:"subtract",onClick:function(e){return HandleFormuleChanges("-")},className:"calculator__button operator",children:"-"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{id:"four",onClick:function(e){return HandleFormuleChanges("4")},className:"calculator__button",children:"4"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{id:"five",onClick:function(e){return HandleFormuleChanges("5")},className:"calculator__button",children:"5"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{id:"six",onClick:function(e){return HandleFormuleChanges("6")},className:"calculator__button",children:"6"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{id:"add",onClick:function(e){return HandleFormuleChanges("+")},className:"calculator__button operator",children:"+"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{id:"one",onClick:function(e){return HandleFormuleChanges("1")},className:"calculator__button",children:"1"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{id:"two",onClick:function(e){return HandleFormuleChanges("2")},className:"calculator__button",children:"2"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{id:"three",onClick:function(e){return HandleFormuleChanges("3")},className:"calculator__button",children:"3"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{id:"equals",onClick:HandleResult,className:"calculator__button",children:"="}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{id:"zero",onClick:function(e){return HandleFormuleChanges("0")},className:"calculator__button",children:"0"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{id:"decimal",onClick:function(e){return HandleFormuleChanges(".")},className:"calculator__button",children:"."})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"calculator-copy",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:"designed and coded by "}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{href:"https://github.com/mokhtarTarek",children:"Mokhtar Tarek"})})]})]})}__webpack_exports__.a=Calculator},27:function(e,t,o){},28:function(e,t,o){},34:function(e,t,o){"use strict";o.r(t);var a=o(1),n=o.n(a),r=o(18),i=o.n(r),s=o(2),c=o(4),u=(o(27),o(28),o(10)),l=o(3),d={radomMachine:{colors:["#16a085","#27ae60","#2c3e50","#f39c12","#e74c3c","#9b59b6","#FB6964","#342224","#472E32","#BDBB99","#77B1A9","#73A857"],quotes:[{quote:"Life isn\u2019t about getting and having, it\u2019s about giving and being.",author:"Kevin Kruse"},{quote:"Whatever the mind of man can conceive and believe, it can achieve.",author:"Napoleon Hill"},{quote:"Strive not to be a success, but rather to be of value.",author:"Albert Einstein"},{quote:"Two roads diverged in a wood, and I\u2014I took the one less traveled by, And that has made all the difference.",author:"Robert Frost"},{quote:"I attribute my success to this: I never gave or took any excuse.",author:"Florence Nightingale"},{quote:"You miss 100% of the shots you don\u2019t take.",author:"Wayne Gretzky"},{quote:"I\u2019ve missed more than 9000 shots in my career. I\u2019ve lost almost 300 games. 26 times I\u2019ve been trusted to take the game winning shot and missed. I\u2019ve failed over and over and over again in my life. And that is why I succeed.",author:"Michael Jordan"},{quote:"The most difficult thing is the decision to act, the rest is merely tenacity.",author:"Amelia Earhart"},{quote:"Every strike brings me closer to the next home run.",author:"Babe Ruth"},{quote:"Definiteness of purpose is the starting point of all achievement.",author:"W. Clement Stone"},{quote:"We must balance conspicuous consumption with conscious capitalism.",author:"Kevin Kruse"},{quote:"Life is what happens to you while you\u2019re busy making other plans.",author:"John Lennon"},{quote:"We become what we think about.",author:"Earl Nightingale"},{quote:"Twenty years from now you will be more disappointed by the things that you didn\u2019t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.",author:"Mark Twain"},{quote:"Life is 10% what happens to me and 90% of how I react to it.",author:"Charles Swindoll"},{quote:"The most common way people give up their power is by thinking they don\u2019t have any.",author:"Alice Walker"},{quote:"The mind is everything. What you think you become.",author:"Buddha"},{quote:"The best time to plant a tree was 20 years ago. The second best time is now.",author:"Chinese Proverb"},{quote:"An unexamined life is not worth living.",author:"Socrates"},{quote:"Eighty percent of success is showing up.",author:"Woody Allen"},{quote:"Your time is limited, so don\u2019t waste it living someone else\u2019s life.",author:"Steve Jobs"},{quote:"Winning isn\u2019t everything, but wanting to win is.",author:"Vince Lombardi"},{quote:"I am not a product of my circumstances. I am a product of my decisions.",author:"Stephen Covey"},{quote:"Every child is an artist. The problem is how to remain an artist once he grows up.",author:"Pablo Picasso"},{quote:"You can never cross the ocean until you have the courage to lose sight of the shore.",author:"Christopher Columbus"},{quote:"I\u2019ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",author:"Maya Angelou"},{quote:"Either you run the day, or the day runs you.",author:"Jim Rohn"},{quote:"Whether you think you can or you think you can\u2019t, you\u2019re right.",author:"Henry Ford"},{quote:"The two most important days in your life are the day you are born and the day you find out why.",author:"Mark Twain"},{quote:"Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it.",author:"Johann Wolfgang von Goethe"},{quote:"The best revenge is massive success.",author:"Frank Sinatra"},{quote:"People often say that motivation doesn\u2019t last. Well, neither does bathing. That\u2019s why we recommend it daily.",author:"Zig Ziglar"},{quote:"Life shrinks or expands in proportion to one\u2019s courage.",author:"Anais Nin"},{quote:"If you hear a voice within you say \u201cyou cannot paint,\u201d then by all means paint and that voice will be silenced.",author:"Vincent Van Gogh"},{quote:"There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",author:"Aristotle"},{quote:"Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",author:"Jesus"},{quote:"The only person you are destined to become is the person you decide to be.",author:"Ralph Waldo Emerson"},{quote:"Go confidently in the direction of your dreams. Live the life you have imagined.",author:"Henry David Thoreau"},{quote:"When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.",author:"Erma Bombeck"},{quote:"Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.",author:"Booker T. Washington"},{quote:"Certain things catch your eye, but pursue only those that capture the heart.",author:" Ancient Indian Proverb"},{quote:"Believe you can and you\u2019re halfway there.",author:"Theodore Roosevelt"},{quote:"Everything you\u2019ve ever wanted is on the other side of fear.",author:"George Addair"},{quote:"We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",author:"Plato"},{quote:"Teach thy tongue to say, \u201cI do not know,\u201d and thous shalt progress.",author:"Maimonides"},{quote:"Start where you are. Use what you have. Do what you can.",author:"Arthur Ashe"},{quote:"When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down \u2018happy\u2019. They told me I didn\u2019t understand the assignment, and I told them they didn\u2019t understand life.",author:"John Lennon"},{quote:"Fall seven times and stand up eight.",author:"Japanese Proverb"},{quote:"When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.",author:"Helen Keller"},{quote:"Everything has beauty, but not everyone can see.",author:"Confucius"},{quote:"How wonderful it is that nobody need wait a single moment before starting to improve the world.",author:"Anne Frank"},{quote:"When I let go of what I am, I become what I might be.",author:"Lao Tzu"},{quote:"Life is not measured by the number of breaths we take, but by the moments that take our breath away.",author:"Maya Angelou"},{quote:"Happiness is not something readymade. It comes from your own actions.",author:"Dalai Lama"},{quote:"If you\u2019re offered a seat on a rocket ship, don\u2019t ask what seat! Just get on.",author:"Sheryl Sandberg"},{quote:"First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.",author:"Aristotle"},{quote:"If the wind will not serve, take to the oars.",author:"Latin Proverb"},{quote:"You can\u2019t fall if you don\u2019t climb. But there\u2019s no joy in living your whole life on the ground.",author:"Unknown"},{quote:"We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",author:"Marie Curie"},{quote:"Too many of us are not living our dreams because we are living our fears.",author:"Les Brown"},{quote:"Challenges are what make life interesting and overcoming them is what makes life meaningful.",author:"Joshua J. Marine"},{quote:"If you want to lift yourself up, lift up someone else.",author:"Booker T. Washington"},{quote:"I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",author:"Leonardo da Vinci"},{quote:"Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.",author:"Jamie Paolinetti"},{quote:"You take your life in your own hands, and what happens? A terrible thing, no one to blame.",author:"Erica Jong"},{quote:"What\u2019s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",author:"Bob Dylan"},{quote:"I didn\u2019t fail the test. I just found 100 ways to do it wrong.",author:"Benjamin Franklin"},{quote:"In order to succeed, your desire for success should be greater than your fear of failure.",author:"Bill Cosby"},{quote:"A person who never made a mistake never tried anything new.",author:" Albert Einstein"},{quote:"The person who says it cannot be done should not interrupt the person who is doing it.",author:"Chinese Proverb"},{quote:"There are no traffic jams along the extra mile.",author:"Roger Staubach"},{quote:"It is never too late to be what you might have been.",author:"George Eliot"},{quote:"You become what you believe.",author:"Oprah Winfrey"},{quote:"I would rather die of passion than of boredom.",author:"Vincent van Gogh"},{quote:"A truly rich man is one whose children run into his arms when his hands are empty.",author:"Unknown"},{quote:"It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.",author:"Ann Landers"},{quote:"If you want your children to turn out well, spend twice as much time with them, and half as much money.",author:"Abigail Van Buren"},{quote:"Build your own dreams, or someone else will hire you to build theirs.",author:"Farrah Gray"},{quote:"The battles that count aren\u2019t the ones for gold medals. The struggles within yourself\u2013the invisible battles inside all of us\u2013that\u2019s where it\u2019s at.",author:"Jesse Owens"},{quote:"Education costs money. But then so does ignorance.",author:"Sir Claus Moser"},{quote:"I have learned over the years that when one\u2019s mind is made up, this diminishes fear.",author:"Rosa Parks"},{quote:"It does not matter how slowly you go as long as you do not stop.",author:"Confucius"},{quote:"If you look at what you have in life, you\u2019ll always have more. If you look at what you don\u2019t have in life, you\u2019ll never have enough.",author:"Oprah Winfrey"},{quote:"Remember that not getting what you want is sometimes a wonderful stroke of luck.",author:"Dalai Lama"},{quote:"You can\u2019t use up creativity. The more you use, the more you have.",author:"Maya Angelou"},{quote:"Dream big and dare to fail.",author:"Norman Vaughan"},{quote:"Our lives begin to end the day we become silent about things that matter.",author:"Martin Luther King Jr."},{quote:"Do what you can, where you are, with what you have.",author:"Teddy Roosevelt"},{quote:"If you do what you\u2019ve always done, you\u2019ll get what you\u2019ve always gotten.",author:"Tony Robbins"},{quote:"Dreaming, after all, is a form of planning.",author:"Gloria Steinem"},{quote:"It\u2019s your place in the world; it\u2019s your life. Go on and do all you can with it, and make it the life you want to live.",author:"Mae Jemison"},{quote:"You may be disappointed if you fail, but you are doomed if you don\u2019t try.",author:"Beverly Sills"},{quote:"Remember no one can make you feel inferior without your consent.",author:"Eleanor Roosevelt"},{quote:"Life is what we make it, always has been, always will be.",author:"Grandma Moses"},{quote:"The question isn\u2019t who is going to let me; it\u2019s who is going to stop me.",author:"Ayn Rand"},{quote:"When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",author:"Henry Ford"},{quote:"It\u2019s not the years in your life that count. It\u2019s the life in your years.",author:"Abraham Lincoln"},{quote:"Change your thoughts and you change your world.",author:"Norman Vincent Peale"},{quote:"Either write something worth reading or do something worth writing.",author:"Benjamin Franklin"},{quote:"Nothing is impossible, the word itself says, \u201cI\u2019m possible!\u201d",author:"\u2013Audrey Hepburn"},{quote:"The only way to do great work is to love what you do.",author:"Steve Jobs"},{quote:"If you can dream it, you can achieve it.",author:"Zig Ziglar"}]},markdownPreviwer:{placeholder:"# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n"},drumMachine:{bankOne:[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],bankTwo:[{keyCode:81,keyTrigger:"Q",id:"Chord-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{keyCode:87,keyTrigger:"W",id:"Chord-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{keyCode:69,keyTrigger:"E",id:"Chord-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},{keyCode:65,keyTrigger:"A",id:"Shaker",url:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},{keyCode:83,keyTrigger:"S",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},{keyCode:68,keyTrigger:"D",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},{keyCode:90,keyTrigger:"Z",id:"Punchy-Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},{keyCode:88,keyTrigger:"X",id:"Side-Stick",url:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Snare",url:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}]}},h=o(0),m=function(){return d.radomMachine.quotes[Math.floor(Math.random()*d.radomMachine.quotes.length)]};var _=function(){var e=Object(a.useState)({quote:"",author:"",color:""}),t=Object(c.a)(e,2),o=t[0],n=t[1],r=function(){n({quote:m().quote,author:m().author,color:d.radomMachine.colors[Math.floor(Math.random()*d.radomMachine.colors.length)]})};return Object(a.useEffect)((function(){r()}),[]),Object(h.jsx)("div",{className:"randomQuotes-body",style:{backgroundColor:o.color,transition:"all 1s ease-out"},children:Object(h.jsxs)("div",{id:"quote-box",children:[Object(h.jsx)("div",{id:"text",children:Object(h.jsxs)("p",{style:{color:o.color,transition:"all 1s ease-out"},children:[Object(h.jsx)("i",{className:"fa fa-quote-left"}),"  ",o.quote]})}),Object(h.jsx)("div",{id:"author",children:Object(h.jsxs)("p",{children:["-",o.author]})}),Object(h.jsxs)("div",{className:"quote-footer",children:[Object(h.jsxs)("div",{id:"share-quote",children:[Object(h.jsx)("a",{id:"Tumblr-quote",className:"coustom-btn social-media-button",style:{backgroundColor:o.color},title:"Tumblr this quote!",target:"_top",href:"https://www.tumblr.com/widgets/share/tool",children:Object(h.jsx)("i",{className:"fa fa-tumblr"})}),Object(h.jsx)("a",{id:"tweet-quote",className:"coustom-btn social-media-button ",style:{backgroundColor:o.color},title:"Tweet this quote!",target:"_top",href:"https://twitter.com/intent/tweet",children:Object(h.jsx)("i",{className:"fa fa-twitter"})})]}),Object(h.jsx)("button",{id:"new-quote",className:"coustom-btn",style:{backgroundColor:o.color},onClick:r,children:"New"})]})]})})},b=Object(a.createContext)();var j=function(e){var t=e.title,o=e.themeChangesHandler,a=e.visible,r=n.a.useContext(b);return Object(h.jsxs)("div",{className:"markdown__toolbar",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("i",{className:"fas fa-i-cursor"}),Object(h.jsxs)("h3",{children:[" ",t," "]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("i",{className:r.classes.icon,onClick:"Markdown-Editor"===t?r.handlemaxEditor:r.handlemaxPreview}),Object(h.jsx)("i",{className:"fas fa-palette ".concat(a," "),onClick:o})]})]})};var f=function(e){var t=Object(a.useState)("markdown__editor--theme-dark"),o=Object(c.a)(t,2),r=o[0],i=o[1],s=n.a.useContext(b);return Object(h.jsxs)("div",{className:"markdown__editor ".concat(s.classes.editorClass," "),children:[Object(h.jsx)(j,{title:"Markdown-Editor",themeChangesHandler:function(){i("markdown__editor--theme-dark"===r?"markdown__editor--theme-light":"markdown__editor--theme-dark")}}),Object(h.jsx)("textarea",{className:"".concat(r),id:"editor",type:"text",onChange:e.textChangesHandler,value:e.text})]})},y=o(12),p=o.n(y),w=o(19),O=o.n(w);p.a.setOptions({breaks:!0});var g=function(e){var t=e.text,o=(e.minimize,n.a.useContext(b)),r=function(e){return Object(h.jsx)("div",{id:"preview",dangerouslySetInnerHTML:{__html:p()(e)}})};return Object(a.useEffect)((function(){r(t)}),[t]),Object(a.useEffect)((function(){O.a.highlightAll()}),[t]),Object(h.jsxs)("div",{className:"markdown__previewer language-js ".concat(o.classes.previewClass),children:[Object(h.jsx)(j,{title:"Markdown-Previwer",visible:"markdown__toolbar--hide-theme-Buttom"}),r,Object(h.jsx)("div",{id:"preview",dangerouslySetInnerHTML:{__html:p()(t)}})]})},v={icon:"fas fa-compress",editorClass:"markdown__editor--minimize",previewClass:"markdown__previewer--show"};var k=function(){var e=Object(a.useState)(d.markdownPreviwer.placeholder),t=Object(c.a)(e,2),o=t[0],n=t[1],r=Object(a.useState)(!0),i=Object(c.a)(r,2),s=i[0],u=i[1],l=Object(a.useState)(!0),m=Object(c.a)(l,2),_=m[0],j=m[1],y=Object(a.useState)(v),p=Object(c.a)(y,2),w=p[0],O=p[1],k={classes:w,handlemaxEditor:function(){u((function(e){return!e})),O(s?{icon:"fas fa-compress-arrows-alt",editorClass:"markdown__editor--maximize",previewClass:"markdown__previewer--hide"}:{icon:"fas fa-compress",editorClass:"markdown__editor--minimize",previewClass:"markdown__previewer--show"})},handlemaxPreview:function(){j((function(e){return!e})),O(_?{icon:"fas fa-compress-arrows-alt",editorClass:"markdown__editor--hide",previewClass:"markdown__previewer--maximize"}:{icon:"fas fa-compress",editorClass:"markdown__editor--show",previewClass:"markdown__previewer--minimize"})}};return Object(h.jsx)(b.Provider,{value:k,children:Object(h.jsxs)("div",{className:"markdown-body",children:[Object(h.jsx)(f,{text:o,textChangesHandler:function(e){n(e.target.value)}}),Object(h.jsx)(g,{text:o})]})})},x=o(20),C={audioBeep:new Audio,session_time:25,break_time:5,cycle:"Session",time_left:1500,switch_cycle:function(){"Session"===this.cycle?(this.cycle="Break",this.time_left=60*this.break_time+1):"Break"===this.cycle&&(this.cycle="Session",this.time_left=60*this.session_time+1)}};var E=function(){var e,t=Object(a.useState)(C),o=Object(c.a)(t,2),n=o[0],r=o[1],i=Object(a.useState)(0),u=Object(c.a)(i,2),l=u[0],d=u[1];return Object(a.useEffect)((function(){0===n.time_left&&(n.switch_cycle(),n.audioBeep.play())}),[n]),Object(h.jsx)("div",{className:"clock-body",children:Object(h.jsxs)("div",{className:"clock-container",children:[Object(h.jsxs)("div",{className:"clock-container__break",children:[Object(h.jsx)("h1",{id:"break-label",children:"Break Length"}),Object(h.jsx)("button",{id:"break-decrement",onClick:function(){1!==n.break_time&&r((function(e){return Object(s.a)(Object(s.a)({},e),{},{break_time:e.break_time-1})}))},children:Object(h.jsx)("i",{className:"fas fa-angle-double-left"})}),Object(h.jsxs)("h3",{id:"break-length",children:[" ",n.break_time," "]}),Object(h.jsx)("button",{id:"break-increment",onClick:function(){60!==n.break_time&&r((function(e){return Object(s.a)(Object(s.a)({},e),{},{break_time:e.break_time+1})}))},children:Object(h.jsx)("i",{className:"fas fa-angle-double-right"})})]}),Object(h.jsxs)("div",{className:"clock-container__session",children:[Object(h.jsx)("h1",{id:"session-label",children:"Session Length"}),Object(h.jsx)("button",{id:"session-decrement",onClick:function(){1!==n.session_time&&r((function(e){return Object(s.a)(Object(s.a)({},e),{},{session_time:e.session_time-1,time_left:60*(e.session_time-1)})}))},children:Object(h.jsx)("i",{className:"fas fa-angle-double-left"})}),Object(h.jsxs)("h3",{id:"session-length",children:[" ",n.session_time," "]}),Object(h.jsx)("button",{id:"session-increment",onClick:function(){60!==n.session_time&&r((function(e){return Object(s.a)(Object(s.a)({},e),{},{session_time:e.session_time+1,time_left:60*(e.session_time+1)})}))},children:Object(h.jsx)("i",{className:"fas fa-angle-double-right"})})]}),Object(h.jsxs)("div",{className:"clock-container__".concat(n.time_left>61?"display":"warning"," "),children:[Object(h.jsxs)("h1",{id:"timer-label",children:[" ",n.cycle," "]}),Object(h.jsxs)("h1",{id:"time-left",className:"clock-container__display-run",children:[" ",(e=n.time_left,3600===e?"60:00":new Date(1e3*e).toISOString().substr(14,5))," "]})]}),Object(h.jsxs)("div",{className:"clock-container__controls",children:[Object(h.jsxs)("button",{id:"start_stop",onClick:function(){if(l)return clearInterval(l),void d(0);var e=setInterval((function(){r((function(e){return Object(s.a)(Object(s.a)({},e),{},{time_left:e.time_left-1})}))}),1e3);d(e)},children:[Object(h.jsx)("i",{className:"far fa-play-circle"})," ",Object(h.jsx)("i",{className:"far fa-stop-circle"})]}),Object(h.jsx)("button",{id:"reset",onClick:function(){l&&(clearInterval(l),d(0)),n.audioBeep.pause(),n.audioBeep.currentTime=0,r((function(e){return Object(s.a)(Object(s.a)({},e),{},{session_time:25,break_time:5,cycle:"Session",time_left:1500})}))},children:Object(h.jsx)("i",{className:"fas fa-sync-alt"})})]}),Object(h.jsxs)("div",{className:"clock-container__author",children:[" ","Designed and Coded by ",Object(h.jsx)("br",{}),Object(h.jsx)("a",{href:"https://github.com/mokhtarTarek",children:"Mokhtar Tarek"})]}),Object(h.jsx)("audio",{id:"beep",preload:"auto",ref:function(e){n.audioBeep=e},src:"https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"})]})})},q=d.drumMachine.bankOne,T=d.drumMachine.bankTwo,M=function(e){return Object(a.useEffect)((function(){var t=function(t){var o=String.fromCharCode(t.keyCode);o===e.keyTrigger&&e.playAudio(o,e.id)};return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}}),[e]),Object(h.jsxs)("button",{className:"drum-pad drum-machine__pad",id:e.id,onClick:function(){return e.playAudio(e.keyTrigger,e.id)},children:[Object(h.jsx)("audio",{id:e.keyTrigger,src:e.url,className:"clip"}),e.keyTrigger]},e.keyCode)};var D=function(){var e=Object(a.useState)(!0),t=Object(c.a)(e,2),o=t[0],n=t[1],r=Object(a.useState)({name:"Heater",value:.3}),i=Object(c.a)(r,2),u=i[0],l=i[1],d=Object(a.useState)({name:"Heater",bank:q,val:!0}),m=Object(c.a)(d,2),_=m[0],b=m[1],j=function(e,t){if(o){var a=document.getElementById(e);a.volume=u.value,a.currentTime=0,a.play(),l((function(e){return Object(s.a)(Object(s.a)({},e),{},{name:t.replace(/-/g," ")})})),console.log(t)}};return Object(h.jsx)("div",{className:"drum-machine-body",children:Object(h.jsxs)("div",{className:"drum-machine",children:[Object(h.jsx)("div",{id:"drum-machine",className:"drum-machine__drumPad",children:_.bank.map((function(e){return Object(h.jsx)(M,{id:e.id,keyCode:e.keyCode,keyTrigger:e.keyTrigger,url:e.url,playAudio:j},e.id)}))}),Object(h.jsxs)("div",{className:"drum-machine__display",id:"display",children:[Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:u.name})}),Object(h.jsxs)("div",{className:"control-volume",children:[Object(h.jsxs)("h2",{children:[" ","Volume: "+Math.round(100*u.value)," "]}),Object(h.jsx)("input",{type:"range",min:"0",max:"1",step:"0.01",onChange:function(e){l((function(t){return Object(s.a)(Object(s.a)({},t),{},{value:e.target.value})}))},value:u.value})]}),Object(h.jsxs)("div",{className:"control-power",children:[Object(h.jsxs)("h2",{children:[" ",o?"Power On  ":"Power Off  "," "]}),Object(h.jsx)("div",{className:"control-power__container",onClick:function(){console.log(o),n(!o)},children:Object(h.jsx)("div",{className:"control-power__slider  ".concat(o?"control-power__slider-active":"control-power__slider-inactive","  ")})})]}),Object(h.jsxs)("div",{className:"control-power",children:[Object(h.jsxs)("h2",{children:[" ","Kit ".concat(_.name," ")," "]}),Object(h.jsx)("div",{className:"control-power__container",onClick:function(){b((function(e){return console.log("jjj"),e.val?Object(s.a)(Object(s.a)({},e),{},{name:"Piano",bank:T,val:!e.val}):Object(s.a)(Object(s.a)({},e),{},{name:"Heater",bank:q,val:!e.val})}))},children:Object(h.jsx)("div",{className:"control-power__slider  ".concat(_.val?"control-power__slider-active":"control-power__slider-inactive","  ")})})]})]})]})})};var P=function(e){var t=Object(a.useState)({linksVisibility:"",compVisibility:"none"}),o=Object(c.a)(t,2),n=o[0],r=o[1];Object(a.useEffect)((function(){window.history.pushState(null,null,window.location.pathname),window.addEventListener("popstate",(function(){r((function(e){return Object(s.a)(Object(s.a)({},e),{},{linksVisibility:"",compVisibility:"none"})}))}))}),[]);var i=function(){r((function(e){return Object(s.a)(Object(s.a)({},e),{},{linksVisibility:"none",compVisibility:""})}))};return Object(h.jsxs)(u.a,{children:[Object(h.jsx)("div",{className:"fcc-body",style:{display:n.linksVisibility},children:Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{className:"active",children:[" ",Object(h.jsx)(u.b,{to:"random_machine_quote",onClick:i,children:"Random Quote Machine"})]}),Object(h.jsx)("li",{children:Object(h.jsx)(u.b,{to:"markdown_preview",onClick:i,children:"Markdown Preview"})}),Object(h.jsx)("li",{children:Object(h.jsx)(u.b,{to:"claculator",onClick:i,children:"JS Calculator"})}),Object(h.jsx)("li",{children:Object(h.jsx)(u.b,{to:"drum_machine",onClick:i,children:"Drum Machine"})}),Object(h.jsx)("li",{children:Object(h.jsx)(u.b,{to:"clock",onClick:i,children:"25 +5 Clock"})})]})}),Object(h.jsx)("div",{style:{display:n.compVisibility},children:Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{path:"/clock",children:Object(h.jsx)(E,{})}),Object(h.jsx)(l.a,{path:"/drum_machine",children:Object(h.jsx)(D,{})}),Object(h.jsx)(l.a,{path:"/claculator",children:Object(h.jsx)(x.a,{})}),Object(h.jsx)(l.a,{path:"/random_machine_quote",children:Object(h.jsx)(_,{})}),Object(h.jsx)(l.a,{path:"/markdown_preview",children:Object(h.jsx)(k,{})})]})})]})};i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(P,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.0d448a7b.chunk.js.map