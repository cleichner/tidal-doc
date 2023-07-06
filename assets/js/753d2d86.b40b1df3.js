"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2188],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,s=e.originalType,p=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),c=o(a),d=l,h=c["".concat(p,".").concat(d)]||c[d]||u[d]||s;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=a.length,i=new Array(s);i[0]=d;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[c]="string"==typeof e?e:l,i[1]=r;for(var o=2;o<s;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},778:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>o});var n=a(3117),l=(a(7294),a(3905));const s={title:"Samplers",id:"samplers"},i=void 0,r={unversionedId:"reference/samplers",id:"reference/samplers",title:"Samplers",description:"This page presents many functions related to the use of samples inside TidalCycles.",source:"@site/docs/reference/samplers.md",sourceDirName:"reference",slug:"/reference/samplers",permalink:"/docs/reference/samplers",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/samplers.md",tags:[],version:"current",lastUpdatedAt:1688616827,formattedLastUpdatedAt:"Jul 6, 2023",frontMatter:{title:"Samplers",id:"samplers"},sidebar:"reference",previous:{title:"Transitions",permalink:"/docs/reference/transitions"},next:{title:"Sampling",permalink:"/docs/reference/sampling"}},p={},o=[{value:"Basic sample manipulation",id:"basic-sample-manipulation",level:2},{value:"amp",id:"amp",level:3},{value:"begin",id:"begin",level:3},{value:"end",id:"end",level:3},{value:"gain",id:"gain",level:3},{value:"grain",id:"grain",level:3},{value:"grain&#39;",id:"grain-1",level:3},{value:"Sample effects",id:"sample-effects",level:2},{value:"accelerate",id:"accelerate",level:3},{value:"speed",id:"speed",level:3},{value:"sustain",id:"sustain",level:3},{value:"unit",id:"unit",level:3},{value:"Time stretching",id:"time-stretching",level:2},{value:"timescale",id:"timescale",level:3},{value:"timescalewin",id:"timescalewin",level:3}],m={toc:o};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This page presents many functions related to the use of samples inside TidalCycles."),(0,l.kt)("p",null,"For specific information about functions used to slice and loop samples see ",(0,l.kt)("a",{parentName:"p",href:"https://tidalcycles.org/docs/reference/sampling"},"Sampling"),"."),(0,l.kt)("p",null,"Each function will be presented following the same model:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Type signature"),": how the function is declared on the ",(0,l.kt)("strong",{parentName:"li"},"Haskell")," side."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Description"),": verbal description of the function."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples"),": a small list of examples that you can copy/paste in your editor.")),(0,l.kt)("h2",{id:"basic-sample-manipulation"},"Basic sample manipulation"),(0,l.kt)("h3",{id:"amp"},"amp"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: amp :: Pattern Double -> ControlPattern\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"amp")," is used to control the amplitude (volume) of the sound. It's very similar\nto ",(0,l.kt)("inlineCode",{parentName:"p"},"gain"),", but it uses a linear function. Its default value is ",(0,l.kt)("inlineCode",{parentName:"p"},"0.4"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "arpy" # amp 0.6\n')),(0,l.kt)("p",null,"This will play the first ",(0,l.kt)("inlineCode",{parentName:"p"},"arpy")," sample at a volume slightly louder than the default."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "arpy" # amp "<0.4 0.8 0.2>"\n')),(0,l.kt)("p",null,"In the above example, the volume changes at each cycle."),(0,l.kt)("h3",{id:"begin"},"begin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: begin :: Pattern Double -> ControlPattern\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"begin")," receives a pattern of numbers from 0 to 1. It skips the beginning of each sample. The numbers indicate the proportion of the samples that needs to be skipped (",(0,l.kt)("inlineCode",{parentName:"p"},"0")," would play the sample from the start, ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," would skip the whole sample, ",(0,l.kt)("inlineCode",{parentName:"p"},"0.25")," would cut off the first quarter from each sample). For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "bev" # begin 0.5 # legato 1\n')),(0,l.kt)("p",null,"In the above example, the sample is started from the half of its total length."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n "0 1 2" # s "ade" # begin "<0 0.25 0.5 0.75>" # legato 1\n')),(0,l.kt)("p",null,"In this other example, the first ",(0,l.kt)("inlineCode",{parentName:"p"},"3")," ",(0,l.kt)("inlineCode",{parentName:"p"},"ade")," samples are playied on every cycle, but the start point from which they are playied changes on each cycle."),(0,l.kt)("h3",{id:"end"},"end"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: end :: Pattern Double -> ControlPattern\n")),(0,l.kt)("p",null,"The same as ",(0,l.kt)("inlineCode",{parentName:"p"},"begin"),", but cuts off the end of samples, shortening them. For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"0.75")," will cut off the last quarter of each sample."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "bev" # begin 0.5 # end 0.65\n')),(0,l.kt)("p",null,"This will play only a small part of the sample: from ",(0,l.kt)("inlineCode",{parentName:"p"},"50%")," its length to ",(0,l.kt)("inlineCode",{parentName:"p"},"65%")," its length."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "bev" >| begin 0.5 >| end "[0.65 0.55]"\n')),(0,l.kt)("p",null,"The example above will play the sample two times for cycle, but the second time will play a shorter segment than the first time, creating some kind of canon effect."),(0,l.kt)("h3",{id:"gain"},"gain"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: gain :: Pattern Double -> ControlPattern\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"gain")," is used to control the amplitude (volume) of the sound. Values less than ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," make the sound quieter. Values greater than ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," make the sound louder."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"gain")," uses a power function, so the volume change around ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," is subtle, but it gets more noticable as it increases or decreases. Typical values for ",(0,l.kt)("inlineCode",{parentName:"p"},"gain")," are between ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"1.5"),". For the linear equivalent, see ",(0,l.kt)("inlineCode",{parentName:"p"},"amp"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "arpy" # gain 0.8\n')),(0,l.kt)("p",null,"This plays the first ",(0,l.kt)("inlineCode",{parentName:"p"},"arpy")," sample at a quieter level than the default."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "ab*16" # gain (range 0.8 1.3 $ sine)\n')),(0,l.kt)("p",null,"This plays a hihat sound, ",(0,l.kt)("inlineCode",{parentName:"p"},"16")," times per cycle, with a ",(0,l.kt)("inlineCode",{parentName:"p"},"gain")," moving from ",(0,l.kt)("inlineCode",{parentName:"p"},"0.8")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"1.3")," following a sine wave."),(0,l.kt)("h3",{id:"grain"},"grain"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: grain :: Pattern Double -> Pattern Double -> ControlPattern\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"grain")," is another way to specify what part of samples we want to play. Instead of specifying the ",(0,l.kt)("inlineCode",{parentName:"p"},"begin")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"end"),", here we write the ",(0,l.kt)("inlineCode",{parentName:"p"},"begin")," and the ",(0,l.kt)("inlineCode",{parentName:"p"},"length"),"."),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 2 $ s "bev" # grain 0.2 0.1 # legato 1\n')),(0,l.kt)("p",null,"is equivalent to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 2 $ s "bev" # begin 0.2 # end 0.3 # legato 1\n')),(0,l.kt)("h3",{id:"grain-1"},"grain'"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: grain' :: Pattern String -> ControlPattern\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"grain'")," is simply a fast shortcut to join a ",(0,l.kt)("inlineCode",{parentName:"p"},"begin")," and an ",(0,l.kt)("inlineCode",{parentName:"p"},"end"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 2 $ s "bev" # grain\' "0.2:0.3" # legato 1\n')),(0,l.kt)("p",null,"This example is equivalent to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 2 $ s "bev" # begin 0.2 # end 0.3 # legato 1\n')),(0,l.kt)("h2",{id:"sample-effects"},"Sample effects"),(0,l.kt)("h3",{id:"accelerate"},"accelerate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: accelerate :: Pattern Double -> ControlPattern\n")),(0,l.kt)("p",null,"A pattern of numbers that speed up (or slow down) samples while they play."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "arpy" # accelerate 2\n')),(0,l.kt)("p",null,"In this example, the sound starts at the original pitch, and gets higher as it plays. You can use a negative number to make the sound get lower."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ arp "up" $ note "c\'maj\'4" # s "arpy" # accelerateTake "susan" [0.2,1,-1]\n')),(0,l.kt)("p",null,"Using ",(0,l.kt)("a",{parentName:"p",href:"https://tidalcycles.org/docs/reference/state_values/#introduction-to-state-values"},"state values"),", in this example we apply a different acceleration to each played note."),(0,l.kt)("h3",{id:"speed"},"speed"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: speed :: Pattern Double -> ControlPattern\n")),(0,l.kt)("p",null,"A pattern of numbers which changes the speed of sample playback. As a result, the sample duration and pitch will be modified. Negative values will play the sample backwards."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 5 $ s "sax:5" # legato 1 # speed 0.5\n')),(0,l.kt)("p",null,"This will play the ",(0,l.kt)("inlineCode",{parentName:"p"},"sax:5")," sample at half its rate. As a result, the sample will last twice the normal time, and will be pitched a whole octave lower. This is equivalent to ",(0,l.kt)("inlineCode",{parentName:"p"},'d1 $ slow 5 $ s "sax:5" # legato 1 |- note 12'),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ fast 2 $ s "breaks125:1" # cps (125/60/4) # speed (-2)\n')),(0,l.kt)("p",null,"In the above example, the break (which lasts for exactly one bar at 125 BPM), will be played backwards, and at double speed (so, we use ",(0,l.kt)("inlineCode",{parentName:"p"},"fast 2")," to fill the whole cycle)."),(0,l.kt)("h3",{id:"sustain"},"sustain"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: sustain :: Pattern Double -> ControlPattern\n")),(0,l.kt)("p",null,"A pattern of numbers that indicates the total duration of sample playback in seconds."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"This ",(0,l.kt)("inlineCode",{parentName:"p"},"sustain")," refers to the whole playback duration, and is not to be confused with the sustain level of a typical ADSR envelope.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ fast 2 $ s "breaks125:1" # cps (120/60/4) # sustain 1\n')),(0,l.kt)("p",null,"At 120 BPM, a cycle lasts for two seconds. In the above example, we cut the sample so it plays just for one second, and repeat this part two times, so we fill the whole cycle. Note that sample pitch isn't modified."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "breaks125:2!3" # cps (120/60/4) # sustain "0.4 0.2 0.4" # begin "0 0 0.4"\n')),(0,l.kt)("p",null,"Here, we take advantage that ",(0,l.kt)("inlineCode",{parentName:"p"},"sustain")," receives a pattern to build a different break from the original sample."),(0,l.kt)("h3",{id:"unit"},"unit"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: unit :: Pattern String -> ControlPattern\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"unit")," is used in conjunction with ",(0,l.kt)("inlineCode",{parentName:"p"},"speed"),'. It accepts values of "r" (rate), "c" (cycles), or "s" (seconds).'),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'unit "r"')," is the default. See the above ",(0,l.kt)("inlineCode",{parentName:"p"},"speed")," section."),(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},'unit "c"')," means ",(0,l.kt)("inlineCode",{parentName:"p"},"speed")," will be interpreted in cycles. For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"speed 2")," means samples will be stretched to fill half a cycle:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ stack [\ns "sax:5" # legato 1 # speed 2 # unit "c",\ns "bd*2"\n]\n')),(0,l.kt)("h2",{id:"time-stretching"},"Time stretching"),(0,l.kt)("p",null,"According to Wikipedia, ",(0,l.kt)("em",{parentName:"p"},"time stretching")," is the process of changing the speed or duration of an audio signal without affecting its pitch."),(0,l.kt)("p",null,"This section presents the functions available in TidalCycles that let us time-stretch our samples at real time."),(0,l.kt)("h3",{id:"timescale"},"timescale"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: timescale :: Pattern Double -> ControlPattern\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"timescale")," is the main function used to activate time-stretching, and usually the only one you need. It receives a single parameter which is the stretching rate to apply."),(0,l.kt)("p",null,"You can use any positive number as the ratio, but the particular method used is designed for ratios greater than 1, and work reasonably well for values between 0.1 and 3."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 2 $ s "breaks152" # legato 1 # timescale (152/130) # cps (130/60/4)\n')),(0,l.kt)("p",null,"In the example above, we set tempo at 130 beats per minute. But we want to play one of the ",(0,l.kt)("inlineCode",{parentName:"p"},"breaks152")," samples, which are, as indicated, at 152 BPM. So, the ratio we want is 152 over 130. This will slow down the sample to fit in our 130 BPM tempo."),(0,l.kt)("h3",{id:"timescalewin"},"timescalewin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: timescalewin :: Pattern Double -> ControlPattern\n")),(0,l.kt)("p",null,"The algorithm used to time-stretch a sample divides our sample in many little parts, modifies them, and puts them all together again. It uses one particular parameter, called ",(0,l.kt)("inlineCode",{parentName:"p"},"windowSize"),", which is the length of each sample part."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"windowSize")," value is automatically calculated, but we can change it using ",(0,l.kt)("inlineCode",{parentName:"p"},"timescalewin"),". The ",(0,l.kt)("inlineCode",{parentName:"p"},"windowSize")," value is multiplied by the number we provide to ",(0,l.kt)("inlineCode",{parentName:"p"},"timescalewin"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"timescalewin")," can be used to improve the quality of time-stretching for some samples, or simply as an effect."),(0,l.kt)("p",null,"Let's compare the next two code examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 2 $ s "breaks152" # legato 1 # timescale (152/130) # timescalewin 0.01 # cps (130/60/4)\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 2 $ s "breaks152" # legato 1 # timescale (152/130) # timescalewin 10 # cps (130/60/4)\n')),(0,l.kt)("p",null,"In the first one, passing ",(0,l.kt)("inlineCode",{parentName:"p"},"0.01")," makes the window size a lot smaller, and the extreme chopping of the sample causes a rougher sound."),(0,l.kt)("p",null,"In the second one, passing ",(0,l.kt)("inlineCode",{parentName:"p"},"10")," makes the chunks a lot bigger. The method used overlaps the treated chunks when recomposing the sample, and, with the bigger window size, this overlap is noticeable and causes a kind of delay effect."))}c.isMDXComponent=!0}}]);