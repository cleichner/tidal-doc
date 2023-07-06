"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3414],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=l.createContext({}),s=function(e){var t=l.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=s(e.components);return l.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(a),k=n,c=u["".concat(d,".").concat(k)]||u[k]||m[k]||i;return a?l.createElement(c,r(r({ref:t},p),{},{components:a})):l.createElement(c,r({ref:t},p))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:n,r[1]=o;for(var s=2;s<i;s++)r[s]=a[s];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6321:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var l=a(3117),n=(a(7294),a(3905));const i={title:"Audio effects",id:"audio_effects"},r=void 0,o={unversionedId:"reference/audio_effects",id:"reference/audio_effects",title:"Audio effects",description:"Basic effects",source:"@site/docs/reference/effects.md",sourceDirName:"reference",slug:"/reference/audio_effects",permalink:"/docs/reference/audio_effects",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/effects.md",tags:[],version:"current",lastUpdatedAt:1688616827,formattedLastUpdatedAt:"Jul 6, 2023",frontMatter:{title:"Audio effects",id:"audio_effects"},sidebar:"reference",previous:{title:"Synthesizers",permalink:"/docs/reference/synthesizers"},next:{title:"Controls",permalink:"/docs/reference/controls"}},d={},s=[{value:"Basic effects",id:"basic-effects",level:2},{value:"Pitch",id:"pitch",level:3},{value:"Octer",id:"octer",level:4},{value:"Frequency Shifter",id:"frequency-shifter",level:4},{value:"Ring modulation",id:"ring-modulation",level:4},{value:"Tremolo",id:"tremolo",level:4},{value:"Time and Space",id:"time-and-space",level:3},{value:"Delay",id:"delay",level:4},{value:"Reverb",id:"reverb",level:4},{value:"Leslie",id:"leslie",level:4},{value:"Phaser",id:"phaser",level:4},{value:"Spectral delay",id:"spectral-delay",level:4},{value:"Magnitude Freeze",id:"magnitude-freeze",level:4},{value:"Envelope",id:"envelope",level:3},{value:"ASR Envelope",id:"asr-envelope",level:4},{value:"Legato",id:"legato",level:4},{value:"Filters",id:"filters",level:3},{value:"DJ Filter",id:"dj-filter",level:4},{value:"Lowpass filter",id:"lowpass-filter",level:4},{value:"Highpass filter",id:"highpass-filter",level:4},{value:"Bandpass filter",id:"bandpass-filter",level:4},{value:"Vowel",id:"vowel",level:4},{value:"Spectral comb filter",id:"spectral-comb-filter",level:4},{value:"Spectral high pass filter",id:"spectral-high-pass-filter",level:4},{value:"Spectral low pass filter",id:"spectral-low-pass-filter",level:4},{value:"Distortion",id:"distortion",level:3},{value:"Distort",id:"distort",level:4},{value:"Triode",id:"triode",level:4},{value:"Shape",id:"shape",level:4},{value:"Squiz",id:"squiz",level:4},{value:"Phasing",id:"phasing",level:3},{value:"Shaping",id:"shaping",level:3},{value:"Tremolo",id:"tremolo-1",level:3},{value:"Leslie",id:"leslie-1",level:3},{value:"Spectral",id:"spectral",level:3},{value:"Bits",id:"bits",level:3},{value:"Bin shifting",id:"bin-shifting",level:4},{value:"Bin scrambling",id:"bin-scrambling",level:4},{value:"Crush",id:"crush",level:4},{value:"Coarse",id:"coarse",level:4},{value:"Waveloss",id:"waveloss",level:4},{value:"Krush",id:"krush",level:4},{value:"Other",id:"other",level:3},{value:"Magnitude smearing",id:"magnitude-smearing",level:4},{value:"Spectral conformer",id:"spectral-conformer",level:4},{value:"Spectral enhance",id:"spectral-enhance",level:4}],p={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"basic-effects"},"Basic effects"),(0,n.kt)("h3",{id:"pitch"},"Pitch"),(0,n.kt)("h4",{id:"octer"},"Octer"),(0,n.kt)("p",null,"Made by Ben Gold. ",(0,n.kt)("a",{parentName:"p",href:"https://sonic-pi.net/"},"Sonic Pi"),"'s octaver."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"octer"),": octave harmonics"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"octersub"),": half-frequency harmonics"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"octersubsub"),": quarter-frequency harmonics")),(0,n.kt)("h4",{id:"frequency-shifter"},"Frequency Shifter"),(0,n.kt)("p",null,"Made by Ben Gold. Simple frequency shifter. Description taken from the SuperCollider ",(0,n.kt)("inlineCode",{parentName:"p"},"FreqShift")," object documentation:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"FreqShift implements single sideband amplitude modulation, also known as frequency shifting, but not to be confused with pitch shifting. Frequency shifting moves all the components of a signal by a fixed amount but does not preserve the original harmonic relationships.)")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"fshift"),": shift"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"fshiftnote"),":"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"fshiftphase"),": phase of the shifted frequency")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"The total shift (in hertz) is ",(0,n.kt)("inlineCode",{parentName:"p"},"fshift * fshiftnote"),".")),(0,n.kt)("h4",{id:"ring-modulation"},"Ring modulation"),(0,n.kt)("p",null,"Made by Ben Gold. Ring modulation:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ring"),": modulation amount"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ringf"),": modulation frequency"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ringdf"),": slide in modulation frequency")),(0,n.kt)("h4",{id:"tremolo"},"Tremolo"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"tremolodepth")," / ",(0,n.kt)("inlineCode",{parentName:"li"},"tremdp"),": tremolo depth"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"tremolorate")," / ",(0,n.kt)("inlineCode",{parentName:"li"},"tremr"),": tremolo speed")),(0,n.kt)("h3",{id:"time-and-space"},"Time and Space"),(0,n.kt)("h4",{id:"delay"},"Delay"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Tidal")," default delay effect:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"delay"),": wet/dry"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"delaytime")," / ",(0,n.kt)("inlineCode",{parentName:"li"},"delayt"),": delay time"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"delayfeedback")," / ",(0,n.kt)("inlineCode",{parentName:"li"},"delayfb"),": feedback amount"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"lock"),": a pattern of numbers. Specifies whether ",(0,n.kt)("inlineCode",{parentName:"li"},"delaytime")," is calculated relative to cps. When set to 1, ",(0,n.kt)("inlineCode",{parentName:"li"},"delaytime")," is a direct multiple of a cycle.")),(0,n.kt)("h4",{id:"reverb"},"Reverb"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Tidal")," default reverb effect, by Jost Muxfeld and James McCartney. Values from 0 to 1:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"dry"),": dry amount"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"room"),": room size"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"size")," / ",(0,n.kt)("inlineCode",{parentName:"li"},"sz"),": metaphor for depth")),(0,n.kt)("h4",{id:"leslie"},"Leslie"),(0,n.kt)("p",null,"Emulation of a Leslie speaker: speakers rotating in a wooden amplified cabinet:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"leslie"),": dry and wet amount"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"lrate"),": modulation rate (",(0,n.kt)("inlineCode",{parentName:"li"},"6.7")," for fast, ",(0,n.kt)("inlineCode",{parentName:"li"},"0.7")," for slow)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"lsize"),": physical size of the cabinet in meters. Be careful, it might be slightly larger than your computer. Affects the Doppler amount (pitch warble)")),(0,n.kt)("h4",{id:"phaser"},"Phaser"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"phaserrate")," / ",(0,n.kt)("inlineCode",{parentName:"li"},"phasr"),": speed"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"phaserdepth")," / ",(0,n.kt)("inlineCode",{parentName:"li"},"phasdp"),": depth")),(0,n.kt)("h4",{id:"spectral-delay"},"Spectral delay"),(0,n.kt)("p",null,"Spectral delay coded by ",(0,n.kt)("a",{parentName:"p",href:"https://madskjeldgaard.dk/"},"Mads Kjeldgaard"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"xsdelay"),": ???"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"tsdelay"),": ???")),(0,n.kt)("h4",{id:"magnitude-freeze"},"Magnitude Freeze"),(0,n.kt)("p",null,"Made by ",(0,n.kt)("a",{parentName:"p",href:"https://madskjeldgaard.dk/"},"Mads Kjeldgaard"),". Freeze magnitudes at current levels when ",(0,n.kt)("inlineCode",{parentName:"p"},"freze > 0")," and advances phase according to difference between frames to try and maintain current spectral quality:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"freeze"),": freeze amount")),(0,n.kt)("h3",{id:"envelope"},"Envelope"),(0,n.kt)("h4",{id:"asr-envelope"},"ASR Envelope"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"attack")," / ",(0,n.kt)("inlineCode",{parentName:"li"},"att"),": in seconds."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"hold")," : in seconds."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"release")," / ",(0,n.kt)("inlineCode",{parentName:"li"},"rel"),": in seconds.")),(0,n.kt)("h4",{id:"legato"},"Legato"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"legato"),": amount of overlap between two adjacent synth sounds. Values less than one (e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"0.5"),") will cut the sound off sooner. Values greater than one (e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"1.5"),") will cut the sound off later")),(0,n.kt)("h3",{id:"filters"},"Filters"),(0,n.kt)("h4",{id:"dj-filter"},"DJ Filter"),(0,n.kt)("p",null,"Made by Alex McLean. A fun classic DJ Filter. Low pass filter for the first half of the range, high pass for the rest:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"djf"),": 0 to 1")),(0,n.kt)("h4",{id:"lowpass-filter"},"Lowpass filter"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cutoff")," / ",(0,n.kt)("inlineCode",{parentName:"li"},"lpf"),": cutoff amount in hertz"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"resonance")," / ",(0,n.kt)("inlineCode",{parentName:"li"},"lpq"),": from 0 to 1")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Be gentle with the resonance amount")),(0,n.kt)("h4",{id:"highpass-filter"},"Highpass filter"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"hcutoff")," / ",(0,n.kt)("inlineCode",{parentName:"li"},"hpf"),": cutoff amount in hertz"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"hresonance")," / ",(0,n.kt)("inlineCode",{parentName:"li"},"hpq"),": resonance")),(0,n.kt)("h4",{id:"bandpass-filter"},"Bandpass filter"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bandf")," / ",(0,n.kt)("inlineCode",{parentName:"li"},"bpf"),": center frequency in hertz"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bandq")," / ",(0,n.kt)("inlineCode",{parentName:"li"},"bpq"),": resonance")),(0,n.kt)("h4",{id:"vowel"},"Vowel"),(0,n.kt)("p",null,"Formant filter to make things sound like vowels. You can use ",(0,n.kt)("inlineCode",{parentName:"p"},"a e i o u"),". Use a rest (",(0,n.kt)("inlineCode",{parentName:"p"},"~"),") to override the effect:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"vowel"),": choose a vowel or a pattern of vowels")),(0,n.kt)("h4",{id:"spectral-comb-filter"},"Spectral comb filter"),(0,n.kt)("p",null,"Made by ",(0,n.kt)("a",{parentName:"p",href:"https://madskjeldgaard.dk/"},"Mads Kjeldgaard"),". Number of teeth and width of the comb are all controlled using one floating point number:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"comb"),": number of teeths and width of the comb filter")),(0,n.kt)("h4",{id:"spectral-high-pass-filter"},"Spectral high pass filter"),(0,n.kt)("p",null,"Made by ",(0,n.kt)("a",{parentName:"p",href:"https://madskjeldgaard.dk/"},"Mads Kjeldgaard"),".\n*\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"hbrick"),": floats from ",(0,n.kt)("inlineCode",{parentName:"p"},"0.0")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"1.0")),(0,n.kt)("h4",{id:"spectral-low-pass-filter"},"Spectral low pass filter"),(0,n.kt)("p",null,"Made by ",(0,n.kt)("a",{parentName:"p",href:"https://madskjeldgaard.dk/"},"Mads Kjeldgaard"),".\n*\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"lbrick"),": floats from ",(0,n.kt)("inlineCode",{parentName:"p"},"0.0")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"1.0")),(0,n.kt)("h3",{id:"distortion"},"Distortion"),(0,n.kt)("h4",{id:"distort"},"Distort"),(0,n.kt)("p",null,"Made by Ben Gold. A crunchy distortion with a lot of high harmonics."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"distort"),": distortion amount")),(0,n.kt)("h4",{id:"triode"},"Triode"),(0,n.kt)("p",null,"Made by Ben Gold. Triode-like distortion, uses only one parameter."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"triode"),": distortion amount")),(0,n.kt)("h4",{id:"shape"},"Shape"),(0,n.kt)("p",null,"A type of amplifier:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"shape"),": values from 0 to 1")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"It might get loud")),(0,n.kt)("h4",{id:"squiz"},"Squiz"),(0,n.kt)("p",null,"Made by Calum Gunn. Reminiscent of some weird mixture of filter, ring-modulator and pitch-shifter. Try passing multiples of ",(0,n.kt)("inlineCode",{parentName:"p"},"2")," to it - ",(0,n.kt)("inlineCode",{parentName:"p"},"2"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"4"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"8")," etc. The SuperCollider manual defines ",(0,n.kt)("inlineCode",{parentName:"p"},"Squiz")," as:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"A simplistic pitch-raising algorithm. It's not meant to sound natural; its sound is reminiscent of some weird mixture of filter, ring-modulator and pitch-shifter, depending on the input. The algorithm works by cutting the signal into fragments (delimited by upwards-going zero-crossings) and squeezing those fragments in the time domain (i.e. simply playing them back faster than they came in), leaving silences inbetween. All the parameters apart from memlen can be modulated.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"squiz"),": squiz amount")),(0,n.kt)("h3",{id:"phasing"},"Phasing"),(0,n.kt)("h3",{id:"shaping"},"Shaping"),(0,n.kt)("h3",{id:"tremolo-1"},"Tremolo"),(0,n.kt)("h3",{id:"leslie-1"},"Leslie"),(0,n.kt)("h3",{id:"spectral"},"Spectral"),(0,n.kt)("h3",{id:"bits"},"Bits"),(0,n.kt)("h4",{id:"bin-shifting"},"Bin shifting"),(0,n.kt)("p",null,"Made by ",(0,n.kt)("a",{parentName:"p",href:"https://madskjeldgaard.dk/"},"Mads Kjeldgaard"),". Shift and scale the position of the bins. Can be used as a very crude frequency shifter/scaler:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"binshift"),": stretching and shifting of bins")),(0,n.kt)("h4",{id:"bin-scrambling"},"Bin scrambling"),(0,n.kt)("p",null,"Made by ",(0,n.kt)("a",{parentName:"p",href:"https://madskjeldgaard.dk/"},"Mads Kjeldgaard"),". Accepts floats to control the width and placement of the scrambling in the spectrum:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"scram"),": ???")),(0,n.kt)("h4",{id:"crush"},"Crush"),(0,n.kt)("p",null,"A classic bitcrushing effect:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"crush"),": 1 for a drastic reduction in bit-depth, 16 for barely no reduction")),(0,n.kt)("h4",{id:"coarse"},"Coarse"),(0,n.kt)("p",null,"Fake audio resampling:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"coarse"),": 1 for original, 2 for half, 3 for a third and so on")),(0,n.kt)("h4",{id:"waveloss"},"Waveloss"),(0,n.kt)("p",null,"Made by Calum Gunn. Divides an audio stream into tiny segments, using the signal's zero-crossings as segment boundaries, and discards a fraction of them. Takes a number between ",(0,n.kt)("inlineCode",{parentName:"p"},"1")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"100"),", denoted the percentage of segments to drop. The SuperCollider manual describes the Waveloss effect this way:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Divide an audio stream into tiny segments, using the signal's zero-crossings as segment boundaries, and discard a fraction of them (i.e. replace them with silence of the same length). The technique was described by Trevor Wishart in a lecture.\nParameters: the filter drops drop out of out of chunks. mode can be 1 to drop chunks in a simple deterministic fashion (e.g. always dropping the first 30 out of a set of 40 segments), or 2 to drop chunks randomly but in an appropriate proportion.)")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mode"),": ???"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"waveloss"),": ???")),(0,n.kt)("h4",{id:"krush"},"Krush"),(0,n.kt)("p",null,"Made by Ben Gold from ",(0,n.kt)("a",{parentName:"p",href:"https://sonic-pi.net/"},"Sonic Pi"),"'s ",(0,n.kt)("inlineCode",{parentName:"p"},"krush"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"krush"),": dry-wet (0 for dry)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"kcutoff"),": cutoff of the krush filter")),(0,n.kt)("h3",{id:"other"},"Other"),(0,n.kt)("h4",{id:"magnitude-smearing"},"Magnitude smearing"),(0,n.kt)("p",null,"Made by Mads Kjeldgaard. Accepts floats to determine the amount of smearing:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"smear"),": amount of smearing")),(0,n.kt)("h4",{id:"spectral-conformer"},"Spectral conformer"),(0,n.kt)("p",null,"Made by ",(0,n.kt)("a",{parentName:"p",href:"https://madskjeldgaard.dk/"},"Mads Kjeldgaard"),". SuperCollider description:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Applies the conformal mapping z \u2192 (z - a) / (1 - za*) to the phase vocoder bins z with a given by the real and imag inputs to the UGen. Makes a transformation of the complex plane so the output is full of phase vocoder artifacts but may be musically fun. Usually keep |a| < 1 but you can of course try bigger values to make it really noisy. a = 0 should give back the input mostly unperturbed.")),(0,n.kt)("p",null,"You can also check ",(0,n.kt)("a",{parentName:"p",href:"http://mathworld.wolfram.com/ConformalMapping.html"},"this link"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"real"),": ???"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"imag"),": ???")),(0,n.kt)("h4",{id:"spectral-enhance"},"Spectral enhance"),(0,n.kt)("p",null,"Made by ",(0,n.kt)("a",{parentName:"p",href:"https://madskjeldgaard.dk/"},"Mads Kjeldgaard"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"enhance"),": ???")))}u.isMDXComponent=!0}}]);