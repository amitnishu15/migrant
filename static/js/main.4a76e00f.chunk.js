(this.webpackJsonpamitapp=this.webpackJsonpamitapp||[]).push([[0],{35:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},58:function(e,a,t){e.exports=t(85)},63:function(e,a,t){},64:function(e,a,t){},85:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(18),l=t.n(o),i=(t(63),t(10)),s=t(35),c=t.n(s),m=(t(64),t(8)),d=t(26),u=t.n(d);var h=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-dark"},r.a.createElement("a",{className:"navbar-brand ml-5",href:"#"},r.a.createElement("img",{src:c.a,alt:"logo",style:{width:"35px"}})),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-bars",style:{color:"#fff"}}))),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav m-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(m.b,{className:"nav-link text-white text-upperCase ml-5",to:"/"},"Home\xa0",r.a.createElement("i",{className:"fas fa-home"})," ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{className:"nav-link text-white text-upperCase ml-5",to:"/news"},"News")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{className:"nav-link text-white text-upperCase ml-5",to:"/contacts"},"Contact Us"))),r.a.createElement("form",{className:"form-inline my-2 my-lg-0"},r.a.createElement("input",{id:"search_terms",className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),r.a.createElement("button",{className:"btn btn-outline-primary my-2 my-sm-0 mr-sm-2",type:"submit"},"Search"))),r.a.createElement("button",{className:"btn btn-success my-2 my-sm-0",type:"button","data-toggle":"modal","data-target":"#exampleModal"},"Donate"),r.a.createElement("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"Donate"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},r.a.createElement("img",{src:"/migrant/images/QrCodeAmit2.jpg",style:{width:"230px"}}),r.a.createElement("div",{className:"separator mb-2"},"OR"),r.a.createElement("div",{className:"pm-button"},r.a.createElement("a",{href:"https://www.payumoney.com/paybypayumoney/#/2573CF1F08A477AD55C78B7DC754EA95"},r.a.createElement("img",{src:"https://www.payumoney.com/media/images/payby_payumoney/new_buttons/21.png"})))),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"),r.a.createElement("button",{type:"button",className:"btn btn-primary","data-dismiss":"modal",onClick:function(){u()("Thank you!","Thank you for your contribution!","success")}},"Done"))))))},p=t(57),b=t(88),g=t(89),f=t(56);var v=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],o=a[1],l=function(){return o(!1)},s=Object(n.useState)(""),c=Object(i.a)(s,2),m=c[0],d=c[1],h=Object(n.useState)(""),v=Object(i.a)(h,2),E=v[0],w=v[1],y=Object(n.useState)(""),N=Object(i.a)(y,2),k=N[0],C=N[1],j=Object(n.useState)(null),O=Object(i.a)(j,2),x=O[0],T=O[1],D=Object(n.useState)(null),S=Object(i.a)(D,2),Q=S[0],L=S[1],I={cursor:"pointer",transition:"color 200ms"},B=Object(n.useRef)(!0),P=Object(n.useState)(!0),M=Object(i.a)(P,2),G=M[0],J=M[1],A=Object(n.useState)(null),R=Object(i.a)(A,2),z=R[0],Y=(R[1],Object(n.useState)(null)),W=Object(i.a)(Y,2),K=W[0],F=W[1];Object(n.useEffect)((function(){B.current?B.current=!1:J(H())}),[x]);var H=function(){return""===x?(F("Ratings cant be blank!"),!0):(F(null),!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{className:"nav-link",href:"#",onClick:function(){return o(!0)}},"Feedback"),r.a.createElement(b.a,{show:t,onHide:l},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(e,a,t,n){var r={};r.name=e,r.phone=a,r.designation=t,r.rating=n,r.age=n,fetch("http://localhost:3000/api/employee/store",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return u()("Thank you!","Thank you for submitting the feedback!","success")})).catch((function(e){return u()("Oops!","Something went wrong!","error")}))}(m,E,k,x)}},r.a.createElement(b.a.Header,{closeButton:!0},r.a.createElement(b.a.Title,null,"Feedback")),r.a.createElement(b.a.Body,null,r.a.createElement("div",{className:"text-center mb-2"},Object(p.a)(Array(5)).map((function(e,a){var t=a+1;return r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"rating",style:{display:"none"},value:t,onClick:function(){return T(t)}}),K&&r.a.createElement("p",null,K),r.a.createElement(f.a,{style:I,color:t<=(Q||x)?"#ffc107":"#e4e5e9",size:50,onMouseEnter:function(){return L(t)},onMouseLeave:function(){return L(null)}}))})),r.a.createElement("p",{className:"d-none"},"The rating is ",x," ")),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("textarea",{type:"text",className:"form-control",value:k,onChange:function(e){return C(e.target.value)},placeholder:"Description..",rows:"3",style:{width:"100%"}}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-md-3 col-form-label"},"Name :"),r.a.createElement("div",{className:"col-md-9"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Optional..",value:m,name:"name",onChange:function(e){return d(e.target.value)}}),z&&r.a.createElement("p",null,z))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-md-3 col-form-label"},"Mobile No.:"),r.a.createElement("div",{className:"col-md-9"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Optional..",value:E,onChange:function(e){return w(e.target.value)}})))),r.a.createElement(b.a.Footer,null,r.a.createElement(g.a,{variant:"secondary",onClick:l},"Close"),r.a.createElement(g.a,{type:"submit",value:"Submit",className:"btn btn-primary",onClick:l,disabled:G},"Submit")))))};var E=function(){return r.a.createElement("div",{className:"col"},r.a.createElement("div",{style:{background:"gainsboro"},className:"justify-content-center row"},r.a.createElement(m.b,{className:"nav-link",to:"/covid-19"},"Covid-19"),r.a.createElement("div",{className:"dropdown"},r.a.createElement("a",{className:"nav-link dropdown-toggle","data-toggle":"dropdown",href:"#",target:"_blank","aria-haspopup":"true","aria-expanded":"false"},"Services"),r.a.createElement("div",{className:"dropdown-menu sm-menu dropdown-menu-right"},r.a.createElement("a",{className:"dropdown-item",href:"#",onClick:function(){return alert("Work in Progress....Coming Soon!")}},"Salon at Home"),r.a.createElement("a",{className:"dropdown-item",href:"#"},"Electrician"),r.a.createElement("a",{className:"dropdown-item",href:"#"},"Carpenter"))),r.a.createElement(m.b,{className:"nav-link",to:"/reports"},"Reports"),r.a.createElement(m.b,{className:"nav-link",to:"/learning"},"eLearning"),r.a.createElement(v,null)))},w=t(2),y=t(3),N=t(5),k=t(4),C=t(49),j=t.n(C),O=[{name:"item1"},{name:"item2"},{name:"item3"},{name:"item4"},{name:"item5"},{name:"item6"},{name:"item7"},{name:"item8"},{name:"item9"},{name:"item10"}],x=function(e){var a=e.text,t=e.selected;return r.a.createElement("div",{className:"menu-item ".concat(t?"active":"")},a)},T=function(e){var a=e.text,t=e.className;return r.a.createElement("div",{className:t},a)},D=T({text:"<",className:"arrow-prev"}),S=T({text:">",className:"arrow-next"}),Q=(n.Component,t(22)),L=t(20);function I(){var e=Object(Q.a)(["\n.footer-middle {\n    background: var(--mainDark);   \n    padding-top: 3rem;\n    color: var(--mainWhite);\n}\n\n.footer-bottom {\n    padding-top: 3rem;\n    padding-bottom: 2rem;\n}\n\nul li a {\n    color: var(--mainGrey);\n}\n\nul li a:hover {\n    color: var(--mainLightGrey);\n}\n"]);return I=function(){return e},e}var B=function(){return r.a.createElement(P,{className:"main-footer"},r.a.createElement("div",{className:"footer-middle"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 col-sm-6"},r.a.createElement("h4",null,"About Site"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement("a",{href:"#",onClick:function(){return alert("Work in Progress....Coming Soon!")}},"Terms and Conditions")),r.a.createElement("li",null,r.a.createElement("a",{href:"#",onClick:function(){return alert("Work in Progress....Coming Soon!")}},"Privacy Policy")),r.a.createElement("li",null,"Good Morning"),r.a.createElement("li",null,"Good Morning"))),r.a.createElement("div",{className:"col-md-3 col-sm-6"},r.a.createElement("h4",null,"Good"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement("a",{href:"#",onClick:function(){return alert("Work in Progress....Coming Soon!")}},"Career")),r.a.createElement("li",null,r.a.createElement("a",{href:"#",onClick:function(){return alert("Work in Progress....Coming Soon!")}},"Volunteer")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Good Morning")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Good Morning")))),r.a.createElement("div",{className:"col-md-3 col-sm-6"},r.a.createElement("h4",null,"Good"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Good Morning")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Good Morning")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Good Morning")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Good Morning")))),r.a.createElement("div",{className:"col-md-3 col-sm-6"},r.a.createElement("h4",null,"Good"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Good Morning")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Good Morning")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Good Morning")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Good Morning"))))),r.a.createElement("div",{className:"footer-bottom"},r.a.createElement("p",{className:"text-xs-center"},"Have a nice day")))))},P=L.default.footer(I()),M=t(53),G=t.n(M);var J=function(){return r.a.createElement("div",null,r.a.createElement(G.a,Object.assign({},{width:"300px",height:"400px",floating:!0},{steps:[{id:"1",message:"What is your name?",trigger:"2"},{id:"2",user:!0,trigger:"3"},{id:"3",message:"Hi {previousValue}, What is your Phone number?",trigger:"4"},{id:"4",user:!0,validator:function(e){return isNaN(e)?"Value should be a number":10==e.length||"Please enter a valid number"},trigger:5},{id:"5",message:"Thankyou! We will contact you soon.",end:!0}]})))};t(36);var A=t(19),R=[{id:1,headerTitle:"Donate Books",headerSubTitle:"Future of youth",headerText:"There are those who read great books and sleep. But the best leaders are those who read great books and put them into practice. Be one!",title:"Donate Books",description:"Books are the best friends of man. Even for a person who is physically challenged and unable to move from a bed or a chair, books server as the best friends. Books are the windows to the world and bring the entire world into your hand, without even moving from your place. Books are a treasure that should be reserved with great care and it takes a lot of passion, love and care to maintain book in the best condition. Great leaders, politicians, poets, storywriters have all been voracious readers of books. The knowledge gained from reading books can never be stolen from you, taken away by your friends an d has the tendency to grow more and more once you share it with others. Even in a journey through bus, train or flight, books are the best accomplice. There is no limit to the number of quotes on books and there is no limit to eh knowledge that you can get from them share the knowledge with your near and dear ones.",img:"/migrant/images/Books.jpg",maps:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1123.3850145412064!2d37.600589158335865!3d55.72774864513666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b0be3ac9d11%3A0x735806d25b3bdc55!2z0JzRg9C30LXQuSDRgdC-0LLRgNC10LzQtdC90L3QvtCz0L4g0LjRgdC60YPRgdGB0YLQstCwIMKr0JPQsNGA0LDQtsK7!5e0!3m2!1sru!2sru!4v1547763408711"},{id:2,headerTitle:"Donate Cloths",headerSubTitle:"Design Dreams",headerText:"What you wear is how you present yourself to the world, especially today, when human contacts are so quick",title:"Donate Cloths",description:"It can be difficult to articulate the power of style and fashion through words, but these icons managed to do so with quote-worthy, inspiring words of wisdom to live by. From the greatest fashion designers to legendary models and stylists, get inspired by these 50 quotes that will never go out of style.",img:"/migrant/images/cloths2.jpg",maps:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1530.8494832689219!2d37.59693065124095!3d55.74157162835216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54baea59877dd%3A0xb4d0c3eb557a1c98!2zwqvQnNCe0KHQmtCe0JLQodCa0JjQmSDQlNCe0Jwg0KTQntCi0J7Qk9Cg0JDQpNCY0JjCuw!5e0!3m2!1sru!2sru!4v1547845790316"},{id:3,headerTitle:"Donate Phone",headerSubTitle:"Mobile Learning",headerText:"Cell phone dependency is now called compulsive communicating. Chain dialers call continually to get another fix",title:"Donate Phone",description:"Technology can be our best friend, and technology can also be the biggest party pooper of our lives. It interrupts our own story, interrupts our ability to have a thought or a daydream, to imagine something wonderful, because we are too busy bridging the walk from the cafeteria back to the office on the cell phone.",img:"/migrant/images/mobile.jpg",maps:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17967.866965087615!2d37.60335432286895!3d55.74141791432578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb9384e1a3b2da434!2z0JPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INC80YPQt9C10Lkg0JAu0KEuINCf0YPRiNC60LjQvdCw!5e0!3m2!1sru!2sru!4v1547878731704"},{id:4,headerTitle:"Donate Bicycle",headerSubTitle:"Wheel of education",headerText:"Life is like a ten speed bicycle. Most of us have gears we never use.",title:"Donate Bicycle",description:"The journey of life is like a man riding a bicycle. We know he got on the bicycle and started to move. We know that at some point he will stop and get off. We know that if he stops moving and does not get off he will fall off.",img:"/migrant/images/bicycle.png",maps:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.9848620916428!2d37.618675215617316!3d55.741392000339864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afe32078357%3A0xa50d6e8b9a7b028f!2z0JPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QsNGPINCi0YDQtdGC0YzRj9C60L7QstGB0LrQsNGPINCz0LDQu9C10YDQtdGP!5e0!3m2!1sru!2sru!4v1547878659681"},{id:5,headerTitle:"Donate Blood",headerSubTitle:"Save the life",headerText:"Bring a life back to power. Make blood donation your responsibility",title:"Donate Blood",description:"Blood is the most precious gift that anyone can give to another person \u2014 the gift of life. A decision to donate your blood can save a life, or even several if your blood is separated into its components \u2014 red cells, platelets and plasma \u2014 which can be used individually for patients with specific conditions.",img:"/migrant/images/blood3.jpg",maps:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.9763498372804!2d37.59654121561725!3d55.741539900328505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54baea59877dd%3A0xb4d0c3eb557a1c98!2zwqvQnNCe0KHQmtCe0JLQodCa0JjQmSDQlNCe0Jwg0KTQntCi0J7Qk9Cg0JDQpNCY0JjCuw!5e0!3m2!1sru!2sru!4v1547878587877"},{id:6,headerTitle:"Donate Kitchenware",headerSubTitle:"Share the joy",headerText:"The fondest memories are made when gathered around the table",title:"Donate Kitchenware",description:"Kitchenware are the tools, utensils, appliances, dishes, and cookware used in food preparation, or the serving of food. Kitchenware can also be used to hold or store food before or after preparation.",img:"/migrant/images/Kitchenware.jpg",maps:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.397087990157!2d37.62463341561838!3d55.76897499821247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a68e2e342b7%3A0x934bc1e9948c826b!2z0KbQtdC90YLRgCDQnNCw0YDRgQ!5e0!3m2!1sru!2sru!4v1547878491776"}],z=[{id:1,headerTitle:"Download Books",headerText:"Download CBSE NCERT Books PDF Below \u2013 Class 1 to 12. Students can download these ebook pdf from the links shown further below",title:"Donate Books",description:"Books are the best friends of man. Even for a person who is physically challenged and unable to move from a bed or a chair, books server as the best friends. Books are the windows to the world and bring the entire world into your hand, without even moving from your place. Books are a treasure that should be reserved with great care and it takes a lot of passion, love and care to maintain book in the best condition. Great leaders, politicians, poets, storywriters have all been voracious readers of books. The knowledge gained from reading books can never be stolen from you, taken away by your friends an d has the tendency to grow more and more once you share it with others. Even in a journey through bus, train or flight, books are the best accomplice. There is no limit to the number of quotes on books and there is no limit to eh knowledge that you can get from them share the knowledge with your near and dear ones.",img:"/migrant/images/bookPdf.jpg",maps:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1123.3850145412064!2d37.600589158335865!3d55.72774864513666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b0be3ac9d11%3A0x735806d25b3bdc55!2z0JzRg9C30LXQuSDRgdC-0LLRgNC10LzQtdC90L3QvtCz0L4g0LjRgdC60YPRgdGB0YLQstCwIMKr0JPQsNGA0LDQtsK7!5e0!3m2!1sru!2sru!4v1547763408711"},{id:2,headerTitle:"Download Notes",headerText:"Download Handwritten Notes and Ebooks PDF for Science, Geography, History, Maths, Reasoning, Computer, Hindi, English, Economics, EVS, etc",title:"Donate Cloths",description:"It can be difficult to articulate the power of style and fashion through words, but these icons managed to do so with quote-worthy, inspiring words of wisdom to live by. From the greatest fashion designers to legendary models and stylists, get inspired by these 50 quotes that will never go out of style.",img:"/migrant/images/notes.jpg",maps:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1530.8494832689219!2d37.59693065124095!3d55.74157162835216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54baea59877dd%3A0xb4d0c3eb557a1c98!2zwqvQnNCe0KHQmtCe0JLQodCa0JjQmSDQlNCe0Jwg0KTQntCi0J7Qk9Cg0JDQpNCY0JjCuw!5e0!3m2!1sru!2sru!4v1547845790316"},{id:3,headerTitle:"Doubt Session",headerText:"Students can meet their teachers after the regular lectures and discuss their doubts in case they have any",title:"Donate Phone",description:"Technology can be our best friend, and technology can also be the biggest party pooper of our lives. It interrupts our own story, interrupts our ability to have a thought or a daydream, to imagine something wonderful, because we are too busy bridging the walk from the cafeteria back to the office on the cell phone.",img:"/migrant/images/onlineDoubt.jpg",maps:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17967.866965087615!2d37.60335432286895!3d55.74141791432578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb9384e1a3b2da434!2z0JPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INC80YPQt9C10Lkg0JAu0KEuINCf0YPRiNC60LjQvdCw!5e0!3m2!1sru!2sru!4v1547878731704"}],Y=[{id:1,name:"Deepak",avatar:"/migrant/avatars/avatar-1.png",comment:"This is the best online app I have ever downloaded! It has the best products and at low price at all."},{id:2,name:"Ankit",avatar:"/migrant/avatars/avatar-2.png",comment:"About 3 months back, I subscribed to this app by paying the subscription fee for one year. Since this app has stopped working on my phone. Whenever, I try to open the app and use it, the screen starts to flicker and then closes down. I have uninstalled."},{id:3,name:"Aashay",avatar:"/migrant/avatars/avatar-3.png",comment:"It is a great app!! We can find all the products we need whether for daily purpose or occasional everything is available."},{id:4,name:"Manav",avatar:"/migrant/avatars/avatar-4.png",comment:"The app is overall good, but the latest update is not so good. I want to tell you that I have been playing fun zone games almost every day but I never win a Amazon pay balance or gift although I am eligible for it. So I hope you can help me."},{id:5,name:"Amit",avatar:"/migrant/avatars/avatar-5.png",comment:"This app is great,I can say.Everything is alright but sometime problems regarding cashback take place...I faced it twice...I did not receive any cashback for referring the app twice to someone."}],W={id:1,headerTitle:"Donate Books",headerSubTitle:"Future of youth",headerText:"There are those who read great books and sleep. But the best leaders are those who read great books and put them into practice. Be one!",title:"Donate Books",description:"Books are the best friends of man. Even for a person who is physically challenged and unable to move from a bed or a chair, books server as the best friends. Books are the windows to the world and bring the entire world into your hand, without even moving from your place. Books are a treasure that should be reserved with great care and it takes a lot of passion, love and care to maintain book in the best condition. Great leaders, politicians, poets, storywriters have all been voracious readers of books. The knowledge gained from reading books can never be stolen from you, taken away by your friends an d has the tendency to grow more and more once you share it with others. Even in a journey through bus, train or flight, books are the best accomplice. There is no limit to the number of quotes on books and there is no limit to eh knowledge that you can get from them share the knowledge with your near and dear ones.",img:"/migrant/images/Books.jpg",maps:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1123.3850145412064!2d37.600589158335865!3d55.72774864513666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b0be3ac9d11%3A0x735806d25b3bdc55!2z0JzRg9C30LXQuSDRgdC-0LLRgNC10LzQtdC90L3QvtCz0L4g0LjRgdC60YPRgdGB0YLQstCwIMKr0JPQsNGA0LDQtsK7!5e0!3m2!1sru!2sru!4v1547763408711"},K=[{id:1,newsTitle:"Times of India",newsText:"Migrant app becomes fastest growing mobile app with 5k users in 13 days."},{id:2,newsTitle:"The Hindu",newsText:"India becomes worlds fastest-growing market for apps."},{id:3,newsTitle:"Dainik Jagran",newsText:"Migrant app has unveiled a new logo as it merges United Bank ... and access its services through net banking and PNBONE app."},{id:4,newsTitle:"Amar Ujala",newsText:"PM Narendra Modi launches Migrant portal, App to support Panchayati Raj institutions in India."},{id:5,newsTitle:"The Economic Times",newsText:"Over 5.72 lakh tickets booked in 24 hours for special trains running from June 1."},{id:6,newsTitle:"Patrika",newsText:"Migrant app integrates Swiggy on its Switch platform."}],F=r.a.createContext(),H=function(e){Object(N.a)(t,e);var a=Object(k.a)(t);function t(){var e;Object(w.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={info:R,reviews:Y,detailInfo:W,news:K,learningInfo:z},e.getItem=function(a){return e.state.info.find((function(e){return e.id===a}))},e.handleDetail=function(a){var t=e.getItem(a);e.setState((function(){return{detailInfo:t}}))},e.handleDetail2=function(a){var t=e.getItem(a);e.setState((function(){return{detailInfoLearning:t}}))},e}return Object(y.a)(t,[{key:"render",value:function(){return r.a.createElement(F.Provider,{value:{info:this.state.info,learningInfo:this.state.learningInfo,reviews:this.state.reviews,maps:this.state.maps,headerTitle:this.state.headerTitle,headerSubTitle:this.state.headerSubTitle,headerText:this.state.headerText,detailInfo:this.state.detailInfo,news:this.state.news,name:this.state.name,avatar:this.state.avatar,comment:this.state.comment,handleDetail:this.handleDetail,handleDetail2:this.handleDetail2}},this.props.children)}}]),t}(n.Component),q=F.Consumer,V=function(e){Object(N.a)(t,e);var a=Object(k.a)(t);function t(){return Object(w.a)(this,t),a.apply(this,arguments)}return Object(y.a)(t,[{key:"render",value:function(){var e=this.props.item,a=e.id,t=e.headerTitle,n=e.headerSubTitle,o=e.headerText,l=e.img;return r.a.createElement(q,null,(function(e){return r.a.createElement("div",{className:"col-10 col-lg-4 mx-auto mb-5"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:l,alt:t,className:"card-img-top"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",{className:"card-title text-uppercase"},t),r.a.createElement("h5",{className:"card-title"},n),r.a.createElement("p",{className:"card-text"},o),r.a.createElement(m.b,{onClick:function(){return e.handleDetail(a)},to:"/details",className:"btn btn-outline-primary text-uppercase"},"More Info"))))}))}}]),t}(n.Component),_=t(54),U=t.n(_),X=(n.Component,t(55));var $=function(){var e={duration:5e3,transitionDuration:500,infinite:!0,indicators:!0,arrows:!0,pauseOnHover:!0,onChange:function(e,a){}};return r.a.createElement("div",{className:"slide-container"},r.a.createElement(X.Slide,e,["/migrant/images/migrant2.jpg","/migrant/images/migrant3.jpg","/migrant/images/migrant5.jpg","/migrant/images/migrant6.jpg","/migrant/images/migrant8.jpg"].map((function(e){return r.a.createElement("div",{className:"each-slide"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(e,")")}}))}))))},Z=function(e){Object(N.a)(t,e);var a=Object(k.a)(t);function t(){return Object(w.a)(this,t),a.apply(this,arguments)}return Object(y.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("marquee",null))}}]),t}(n.Component),ee=function(e){Object(N.a)(t,e);var a=Object(k.a)(t);function t(){return Object(w.a)(this,t),a.apply(this,arguments)}return Object(y.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(Z,null),r.a.createElement($,null),r.a.createElement("div",{className:"row mt-3"},r.a.createElement(q,null,(function(e){return e.info.map((function(e){return r.a.createElement(V,{key:e.id,item:e})}))}))))}}]),t}(n.Component),ae=function(e){Object(N.a)(t,e);var a=Object(k.a)(t);function t(){return Object(w.a)(this,t),a.apply(this,arguments)}return Object(y.a)(t,[{key:"render",value:function(){var e=this.props.item,a=e.id,t=e.newsTitle,n=e.newsText;return r.a.createElement(q,null,(function(e){return r.a.createElement("div",{className:"card container mt-2 mb-3 p-5"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{key:a,className:"card-title"},t),r.a.createElement("p",{className:"card-text"},n),r.a.createElement(m.b,{className:"card-link"},"Read More")))}))}}]),t}(n.Component),te=function(e){Object(N.a)(t,e);var a=Object(k.a)(t);function t(){return Object(w.a)(this,t),a.apply(this,arguments)}return Object(y.a)(t,[{key:"render",value:function(){return r.a.createElement(q,null,(function(e){return e.news.map((function(e){return r.a.createElement(ae,{key:e.id,item:e})}))}))}}]),t}(n.Component),ne=function(e){Object(N.a)(t,e);var a=Object(k.a)(t);function t(){return Object(w.a)(this,t),a.apply(this,arguments)}return Object(y.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"my-5 py-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"well well-sm"},r.a.createElement("h3",null,r.a.createElement("strong",null,"Our Location")),r.a.createElement("h5",null,"11, Aswath Nagar, Marathahalli Bridge"),r.a.createElement("h5",null,"Bangalore, Karnataka"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-7"})))}}]),t}(n.Component),re=function(e){Object(N.a)(t,e);var a=Object(k.a)(t);function t(){return Object(w.a)(this,t),a.apply(this,arguments)}return Object(y.a)(t,[{key:"render",value:function(){var e=this.props.person,a=(e.id,e.name),t=e.avatar,n=e.comment;return r.a.createElement(q,null,(function(e){return r.a.createElement("div",{className:"media mt-5"},r.a.createElement("img",{src:t,alt:a,style:{width:"40px"},className:"mr-3"}),r.a.createElement("div",{className:"media-body"},r.a.createElement("h5",{className:"mt-0"},a),r.a.createElement("p",null,n)))}))}}]),t}(n.Component),oe=function(e){Object(N.a)(t,e);var a=Object(k.a)(t);function t(){return Object(w.a)(this,t),a.apply(this,arguments)}return Object(y.a)(t,[{key:"render",value:function(){return r.a.createElement(q,null,(function(e){return e.reviews.map((function(e){return r.a.createElement(re,{key:e.id,person:e})}))}))}}]),t}(n.Component);function le(){var e=Object(Q.a)(["\nbackground: linear-gradient(rgba(109, 109, 109), rgba(255, 255, 255));\nheight: 100vh;\ntext-transform: uppercase;\ncolor: var(--mainWhite);\ntext-align: center;\n\nh1 {\n    padding-top: 10%;\n    color: var(--mainDark);\n}\n\nh4 {\n    color: var(--mainDark);\n}\n\np {\n    padding-left: 10%;\n    padding-right: 10%;\n    margin-bottom: 10%;\n    color: var(--mainDark);\n}\n\ni {\n    font-size: 1.875rem;\n    color: var(--mainDark);\n}\n\ni: hover {\n    color: var(--mainBlue);\n    cursor: pointer;\n}\n\n.nav-item {\n    height: 18.75rem;\n}\n\n@media(max-width: 760px) {\n    h1,h4{\n        color: var(--mainWhite);\n    }\n}\n"]);return le=function(){return e},e}var ie=function(e){Object(N.a)(t,e);var a=Object(k.a)(t);function t(){return Object(w.a)(this,t),a.apply(this,arguments)}return Object(y.a)(t,[{key:"render",value:function(){return r.a.createElement(q,null,(function(e){var a=e.detailInfo,t=(a.id,a.headerTitle),n=a.headerSubTitle,o=a.headerText,l=a.img,i=a.title,s=a.maps,c=a.description;return r.a.createElement(r.a.Fragment,null,r.a.createElement(se,{className:"container-fluid align-items-center"},r.a.createElement("h1",{className:"font-weight-bold"},t),r.a.createElement("h4",{className:"display-5"},n),r.a.createElement("p",null,o),r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-2"},r.a.createElement("i",{className:"fab fa-facebook-f"})),r.a.createElement("div",{className:"col-2"},r.a.createElement("i",{className:"fab fa-twitter"})),r.a.createElement("div",{className:"col-2"},r.a.createElement("i",{className:"fab fa-google-plus-g"})),r.a.createElement("div",{className:"col-2"},r.a.createElement("i",{className:"fab fa-reddit"})),r.a.createElement("div",{className:"col-2"},r.a.createElement("i",{className:"fab fa-whatsapp"})),r.a.createElement("div",{className:"col-2"},r.a.createElement("i",{className:"fab fa-facebook-messenger"}))))),r.a.createElement("div",{className:"container"},r.a.createElement("ul",{className:"nav nav-tabs"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"#aboutPlace",className:"nav-link active",role:"tab","data-toggle":"tab"},"About Item")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"#reviews",className:"nav-link",role:"tab","data-toggle":"tab"},"Reviews")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"#map",className:"nav-link",role:"tab","data-toggle":"tab"},"Map")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"#",className:"nav-link",role:"tab","data-toggle":"tab",onClick:function(){return alert("Work in Progress....Coming Soon!")}},"Donate Now"))),r.a.createElement("div",{className:"tab-content mb-5"},r.a.createElement("div",{id:"aboutPlace",className:"tab-pane in active text-center mt-5",role:"tabpanel"},r.a.createElement("h2",{className:"mb-3"},i),r.a.createElement("p",null,c),r.a.createElement("img",{src:l,alt:i,className:"img-thumbnail img-fluid"})),r.a.createElement("div",{className:"tab-pane",id:"reviews",role:"tabpanel"},r.a.createElement(oe,null)),r.a.createElement("div",{className:"tab-pane",id:"map",role:"tabpanel"},r.a.createElement("iframe",{src:s,style:{border:"0",height:"28.125rem",width:"100%",frameborder:"0"}})))))}))}}]),t}(n.Component),se=L.default.header(le()),ce=function(e){Object(N.a)(t,e);var a=Object(k.a)(t);function t(){return Object(w.a)(this,t),a.apply(this,arguments)}return Object(y.a)(t,[{key:"componentDidMount",value:function(){var e=document.createElement("script");e.src="https://apps.elfsight.com/p/platform.js",e.async=!0,document.body.appendChild(e)}},{key:"render",value:function(){return r.a.createElement("section",{className:"py-5"},r.a.createElement("div",{className:"elfsight-app-cc1673c5-ac31-4e10-885f-2b53ee61a767"}))}}]),t}(n.Component),me=function(e){Object(N.a)(t,e);var a=Object(k.a)(t);function t(){return Object(w.a)(this,t),a.apply(this,arguments)}return Object(y.a)(t,[{key:"render",value:function(){var e=this.props.item,a=e.id,t=e.headerTitle,n=e.headerSubTitle,o=e.headerText,l=e.img;return r.a.createElement(q,null,(function(e){return r.a.createElement("div",{className:"col-10 col-lg-4 mx-auto mb-5"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:l,alt:t,className:"card-img-top"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",{className:"card-title text-uppercase"},t),r.a.createElement("h5",{className:"card-title"},n),r.a.createElement("p",{className:"card-text"},o),r.a.createElement(m.b,{onClick:function(){return e.handleDetail2(a)},to:"/detailsLearning",className:"btn btn-outline-primary text-uppercase"},"More Info"))))}))}}]),t}(n.Component),de=function(e){Object(N.a)(t,e);var a=Object(k.a)(t);function t(){return Object(w.a)(this,t),a.apply(this,arguments)}return Object(y.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mt-3"},r.a.createElement(q,null,(function(e){return e.learningInfo.map((function(e){return r.a.createElement(me,{key:e.id,item:e})}))}))))}}]),t}(n.Component),ue=function(e){Object(N.a)(t,e);var a=Object(k.a)(t);function t(){return Object(w.a)(this,t),a.apply(this,arguments)}return Object(y.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"my-5 py-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"well well-sm"},r.a.createElement("h3",null,r.a.createElement("strong",null,"Comming soon..")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-7"})))}}]),t}(n.Component);function he(){var e=Object(Q.a)(["\nbackground: linear-gradient(rgba(109, 109, 109), rgba(255, 255, 255));\nheight: 100vh;\ntext-transform: uppercase;\ncolor: var(--mainWhite);\ntext-align: center;\n\nh1 {\n    padding-top: 10%;\n    color: var(--mainDark);\n}\n\nh4 {\n    color: var(--mainDark);\n}\n\np {\n    padding-left: 10%;\n    padding-right: 10%;\n    margin-bottom: 10%;\n    color: var(--mainDark);\n}\n\ni {\n    font-size: 1.875rem;\n    color: var(--mainDark);\n}\n\ni: hover {\n    color: var(--mainBlue);\n    cursor: pointer;\n}\n\n.nav-item {\n    height: 18.75rem;\n}\n\n@media(max-width: 760px) {\n    h1,h4{\n        color: var(--mainWhite);\n    }\n}\n"]);return he=function(){return e},e}var pe=function(e){Object(N.a)(t,e);var a=Object(k.a)(t);function t(){return Object(w.a)(this,t),a.apply(this,arguments)}return Object(y.a)(t,[{key:"render",value:function(){return r.a.createElement(q,null,(function(e){var a=e.detailInfo,t=(a.id,a.headerTitle,a.headerSubTitle,a.headerText,a.img),n=a.title,o=a.maps,l=a.description;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"tab-content mb-5"},r.a.createElement("div",{id:"aboutPlace",className:"tab-pane in active text-center mt-5",role:"tabpanel"},r.a.createElement("h2",{className:"mb-3"},n),r.a.createElement("p",null,l),r.a.createElement("img",{src:t,alt:n,className:"img-thumbnail img-fluid"})),r.a.createElement("div",{className:"tab-pane",id:"reviews",role:"tabpanel"},r.a.createElement(oe,null)),r.a.createElement("div",{className:"tab-pane",id:"map",role:"tabpanel"},r.a.createElement("iframe",{src:o,style:{border:"0",height:"28.125rem",width:"100%",frameborder:"0"}})))))}))}}]),t}(n.Component);L.default.header(he()),n.Component;n.Component;var be=r.a.createContext(),ge=function(e){Object(N.a)(t,e);var a=Object(k.a)(t);function t(){return Object(w.a)(this,t),a.apply(this,arguments)}return Object(y.a)(t,[{key:"render",value:function(){var e=function(){return r.a.createElement(be.Consumer,null,(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"myname is ",e.name),r.a.createElement("h1",null,"myname is ",e.name))}))},a=function(){return r.a.createElement("div",null,r.a.createElement(be.Consumer,null,(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"myname is ",e.name),r.a.createElement("h1",null,"myname is ",e.name))})),r.a.createElement(e,null))},t=function(){return r.a.createElement(a,null)};return r.a.createElement("div",null,"Class component",r.a.createElement(be.Provider,{value:{name:"Amit",age:27}},r.a.createElement(t,null)))}}]),t}(n.Component);ge.contextType=be;var fe=function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("mode"))||!1),a=Object(i.a)(e,2),t=a[0];return a[1],Object(n.useEffect)((function(){localStorage.setItem("mode",JSON.stringify(t))}),[t]),r.a.createElement("div",{className:t?"App dark-mode":"App"},r.a.createElement(h,null),r.a.createElement(E,null),r.a.createElement(A.c,null,r.a.createElement(A.a,{exact:!0,path:"/",component:ee}),r.a.createElement(A.a,{path:"/news",component:te}),r.a.createElement(A.a,{path:"/contacts",component:ne}),r.a.createElement(A.a,{path:"/details",component:ie}),r.a.createElement(A.a,{path:"/details",component:ie}),r.a.createElement(A.a,{path:"/covid-19",component:ce}),r.a.createElement(A.a,{path:"/learning",component:de}),r.a.createElement(A.a,{path:"/reports",component:ue}),r.a.createElement(A.a,{path:"/detailsLearning",component:pe}),r.a.createElement(A.a,{component:ee})),r.a.createElement(J,null),r.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(83),t(84);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null,r.a.createElement(m.a,null,r.a.createElement(fe,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.4a76e00f.chunk.js.map