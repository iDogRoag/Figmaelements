(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode(`/*! tailwindcss v4.1.12 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-divide-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-duration:initial;--tw-ease:initial;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-animation-delay:0s;--tw-animation-direction:normal;--tw-animation-duration:initial;--tw-animation-fill-mode:none;--tw-animation-iteration-count:1;--tw-enter-blur:0;--tw-enter-opacity:1;--tw-enter-rotate:0;--tw-enter-scale:1;--tw-enter-translate-x:0;--tw-enter-translate-y:0;--tw-exit-blur:0;--tw-exit-opacity:1;--tw-exit-rotate:0;--tw-exit-scale:1;--tw-exit-translate-x:0;--tw-exit-translate-y:0}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-100:oklch(93.6% .032 17.717);--color-red-200:oklch(88.5% .062 18.334);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-800:oklch(44.4% .177 26.899);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-600:oklch(64.6% .222 41.116);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-200:oklch(92.4% .12 95.746);--color-amber-600:oklch(66.6% .179 58.318);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-yellow-700:oklch(55.4% .135 66.442);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-600:oklch(55.8% .288 302.321);--color-purple-800:oklch(43.8% .218 303.724);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-md:28rem;--container-lg:32rem;--container-2xl:42rem;--container-3xl:48rem;--container-4xl:56rem;--container-5xl:64rem;--container-6xl:72rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5/2.25);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wider:.05em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-xs:.125rem;--ease-in-out:cubic-bezier(.4,0,.2,1);--animate-spin:spin 1s linear infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}*{border-color:var(--border);outline-color:var(--ring)}@supports (color:color-mix(in lab,red,red)){*{outline-color:color-mix(in oklab,var(--ring)50%,transparent)}}body{background-color:var(--background);color:var(--foreground)}html{font-size:var(--font-size)}h1{font-size:var(--text-2xl);font-weight:var(--font-weight-medium);line-height:1.5}h2{font-size:var(--text-xl);font-weight:var(--font-weight-medium);line-height:1.5}h3{font-size:var(--text-lg);font-weight:var(--font-weight-medium);line-height:1.5}h4,label,button{font-size:var(--text-base);font-weight:var(--font-weight-medium);line-height:1.5}input{font-size:var(--text-base);font-weight:var(--font-weight-normal);line-height:1.5}}@layer components;@layer utilities{.\\@container\\/card-header{container:card-header/inline-size}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.inset-y-0{inset-block:calc(var(--spacing)*0)}.top-0{top:calc(var(--spacing)*0)}.top-1\\/2{top:50%}.top-3{top:calc(var(--spacing)*3)}.top-4{top:calc(var(--spacing)*4)}.top-\\[50\\%\\]{top:50%}.top-full{top:100%}.right-0{right:calc(var(--spacing)*0)}.right-2{right:calc(var(--spacing)*2)}.right-3{right:calc(var(--spacing)*3)}.right-4{right:calc(var(--spacing)*4)}.bottom-0{bottom:calc(var(--spacing)*0)}.bottom-full{bottom:100%}.left-0{left:calc(var(--spacing)*0)}.left-1\\/2{left:50%}.left-2{left:calc(var(--spacing)*2)}.left-3{left:calc(var(--spacing)*3)}.left-\\[50\\%\\]{left:50%}.z-10{z-index:10}.z-40{z-index:40}.z-50{z-index:50}.col-start-2{grid-column-start:2}.row-span-2{grid-row:span 2/span 2}.row-start-1{grid-row-start:1}.-mx-1{margin-inline:calc(var(--spacing)*-1)}.mx-4{margin-inline:calc(var(--spacing)*4)}.mx-auto{margin-inline:auto}.my-1{margin-block:calc(var(--spacing)*1)}.my-6{margin-block:calc(var(--spacing)*6)}.-mt-2{margin-top:calc(var(--spacing)*-2)}.mt-0\\.5{margin-top:calc(var(--spacing)*.5)}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-6{margin-top:calc(var(--spacing)*6)}.mt-8{margin-top:calc(var(--spacing)*8)}.mr-1{margin-right:calc(var(--spacing)*1)}.mr-2{margin-right:calc(var(--spacing)*2)}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-8{margin-bottom:calc(var(--spacing)*8)}.ml-auto{margin-left:auto}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline-flex{display:inline-flex}.field-sizing-content{field-sizing:content}.aspect-square{aspect-ratio:1}.size-2{width:calc(var(--spacing)*2);height:calc(var(--spacing)*2)}.size-3\\.5{width:calc(var(--spacing)*3.5);height:calc(var(--spacing)*3.5)}.size-4{width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.size-9{width:calc(var(--spacing)*9);height:calc(var(--spacing)*9)}.h-0\\.5{height:calc(var(--spacing)*.5)}.h-1\\.5{height:calc(var(--spacing)*1.5)}.h-2{height:calc(var(--spacing)*2)}.h-3{height:calc(var(--spacing)*3)}.h-4{height:calc(var(--spacing)*4)}.h-5{height:calc(var(--spacing)*5)}.h-6{height:calc(var(--spacing)*6)}.h-8{height:calc(var(--spacing)*8)}.h-9{height:calc(var(--spacing)*9)}.h-10{height:calc(var(--spacing)*10)}.h-12{height:calc(var(--spacing)*12)}.h-16{height:calc(var(--spacing)*16)}.h-20{height:calc(var(--spacing)*20)}.h-32{height:calc(var(--spacing)*32)}.h-\\[1\\.15rem\\]{height:1.15rem}.h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}.h-auto{height:auto}.h-full{height:100%}.h-px{height:1px}.max-h-\\(--radix-dropdown-menu-content-available-height\\){max-height:var(--radix-dropdown-menu-content-available-height)}.max-h-\\(--radix-select-content-available-height\\){max-height:var(--radix-select-content-available-height)}.max-h-64{max-height:calc(var(--spacing)*64)}.max-h-\\[90vh\\]{max-height:90vh}.min-h-16{min-height:calc(var(--spacing)*16)}.min-h-24{min-height:calc(var(--spacing)*24)}.min-h-\\[200px\\]{min-height:200px}.w-2{width:calc(var(--spacing)*2)}.w-3{width:calc(var(--spacing)*3)}.w-4{width:calc(var(--spacing)*4)}.w-5{width:calc(var(--spacing)*5)}.w-6{width:calc(var(--spacing)*6)}.w-8{width:calc(var(--spacing)*8)}.w-10{width:calc(var(--spacing)*10)}.w-12{width:calc(var(--spacing)*12)}.w-16{width:calc(var(--spacing)*16)}.w-20{width:calc(var(--spacing)*20)}.w-64{width:calc(var(--spacing)*64)}.w-fit{width:fit-content}.w-full{width:100%}.max-w-2xl{max-width:var(--container-2xl)}.max-w-3xl{max-width:var(--container-3xl)}.max-w-4xl{max-width:var(--container-4xl)}.max-w-5xl{max-width:var(--container-5xl)}.max-w-6xl{max-width:var(--container-6xl)}.max-w-\\[calc\\(100\\%-2rem\\)\\]{max-width:calc(100% - 2rem)}.max-w-lg{max-width:var(--container-lg)}.max-w-md{max-width:var(--container-md)}.max-w-xs{max-width:var(--container-xs)}.min-w-0{min-width:calc(var(--spacing)*0)}.min-w-\\[8rem\\]{min-width:8rem}.min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}.flex-1{flex:1}.flex-shrink-0,.shrink-0{flex-shrink:0}.origin-\\(--radix-dropdown-menu-content-transform-origin\\){transform-origin:var(--radix-dropdown-menu-content-transform-origin)}.origin-\\(--radix-select-content-transform-origin\\){transform-origin:var(--radix-select-content-transform-origin)}.-translate-x-1\\/2{--tw-translate-x: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-x-full{--tw-translate-x:-100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x)var(--tw-translate-y)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-spin{animation:var(--animate-spin)}.cursor-default{cursor:default}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.resize-none{resize:none}.scroll-my-1{scroll-margin-block:calc(var(--spacing)*1)}.auto-rows-min{grid-auto-rows:min-content}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-rows-\\[auto_auto\\]{grid-template-rows:auto auto}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-1{gap:calc(var(--spacing)*1)}.gap-1\\.5{gap:calc(var(--spacing)*1.5)}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}.gap-6{gap:calc(var(--spacing)*6)}:where(.space-y-0\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*.5)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*.5)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*3)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*6)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*6)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-8>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*8)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*8)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*2)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-x-reverse)))}:where(.divide-y>:not(:last-child)){--tw-divide-y-reverse:0;border-bottom-style:var(--tw-border-style);border-top-style:var(--tw-border-style);border-top-width:calc(1px*var(--tw-divide-y-reverse));border-bottom-width:calc(1px*calc(1 - var(--tw-divide-y-reverse)))}:where(.divide-gray-200>:not(:last-child)){border-color:var(--color-gray-200)}.self-start{align-self:flex-start}.justify-self-end{justify-self:flex-end}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-\\[4px\\]{border-radius:4px}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius)}.rounded-md{border-radius:calc(var(--radius) - 2px)}.rounded-sm{border-radius:calc(var(--radius) - 4px)}.rounded-xl{border-radius:calc(var(--radius) + 4px)}.rounded-xs{border-radius:var(--radius-xs)}.rounded-t-lg{border-top-left-radius:var(--radius);border-top-right-radius:var(--radius)}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-4{border-style:var(--tw-border-style);border-width:4px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-b-2{border-bottom-style:var(--tw-border-style);border-bottom-width:2px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-\\[\\#326389\\]{border-color:#326389}.border-amber-200{border-color:var(--color-amber-200)}.border-blue-200{border-color:var(--color-blue-200)}.border-gray-100{border-color:var(--color-gray-100)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-300{border-color:var(--color-gray-300)}.border-green-200{border-color:var(--color-green-200)}.border-input{border-color:var(--input)}.border-red-200{border-color:var(--color-red-200)}.border-transparent{border-color:#0000}.border-t-gray-900{border-top-color:var(--color-gray-900)}.bg-\\[\\#326389\\]{background-color:#326389}.bg-\\[\\#326389\\]\\/5{background-color:#3263890d}.bg-amber-50{background-color:var(--color-amber-50)}.bg-background{background-color:var(--background)}.bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){.bg-black\\/50{background-color:color-mix(in oklab,var(--color-black)50%,transparent)}}.bg-blue-50{background-color:var(--color-blue-50)}.bg-blue-100{background-color:var(--color-blue-100)}.bg-border{background-color:var(--border)}.bg-card{background-color:var(--card)}.bg-destructive{background-color:var(--destructive)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-900{background-color:var(--color-gray-900)}.bg-green-50{background-color:var(--color-green-50)}.bg-green-100{background-color:var(--color-green-100)}.bg-input-background{background-color:var(--input-background)}.bg-orange-50{background-color:var(--color-orange-50)}.bg-orange-100{background-color:var(--color-orange-100)}.bg-popover{background-color:var(--popover)}.bg-primary,.bg-primary\\/20{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.bg-primary\\/20{background-color:color-mix(in oklab,var(--primary)20%,transparent)}}.bg-purple-50{background-color:var(--color-purple-50)}.bg-purple-100{background-color:var(--color-purple-100)}.bg-red-50{background-color:var(--color-red-50)}.bg-red-100{background-color:var(--color-red-100)}.bg-red-600{background-color:var(--color-red-600)}.bg-secondary{background-color:var(--secondary)}.bg-white{background-color:var(--color-white)}.bg-white\\/10{background-color:#ffffff1a}@supports (color:color-mix(in lab,red,red)){.bg-white\\/10{background-color:color-mix(in oklab,var(--color-white)10%,transparent)}}.bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){.bg-white\\/50{background-color:color-mix(in oklab,var(--color-white)50%,transparent)}}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.bg-gradient-to-r{--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-\\[\\#326389\\]{--tw-gradient-from:#326389;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.from-purple-600{--tw-gradient-from:var(--color-purple-600);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-\\[\\#4a7ba7\\]{--tw-gradient-to:#4a7ba7;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-blue-600{--tw-gradient-to:var(--color-blue-600);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.fill-current{fill:currentColor}.fill-primary{fill:var(--primary)}.p-0{padding:calc(var(--spacing)*0)}.p-1{padding:calc(var(--spacing)*1)}.p-1\\.5{padding:calc(var(--spacing)*1.5)}.p-2{padding:calc(var(--spacing)*2)}.p-3{padding:calc(var(--spacing)*3)}.p-4{padding:calc(var(--spacing)*4)}.p-5{padding:calc(var(--spacing)*5)}.p-6{padding:calc(var(--spacing)*6)}.p-8{padding:calc(var(--spacing)*8)}.p-12{padding:calc(var(--spacing)*12)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-2\\.5{padding-inline:calc(var(--spacing)*2.5)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-6{padding-inline:calc(var(--spacing)*6)}.py-0\\.5{padding-block:calc(var(--spacing)*.5)}.py-1{padding-block:calc(var(--spacing)*1)}.py-1\\.5{padding-block:calc(var(--spacing)*1.5)}.py-2{padding-block:calc(var(--spacing)*2)}.py-3{padding-block:calc(var(--spacing)*3)}.py-4{padding-block:calc(var(--spacing)*4)}.py-6{padding-block:calc(var(--spacing)*6)}.py-8{padding-block:calc(var(--spacing)*8)}.py-12{padding-block:calc(var(--spacing)*12)}.pt-2{padding-top:calc(var(--spacing)*2)}.pt-3{padding-top:calc(var(--spacing)*3)}.pt-4{padding-top:calc(var(--spacing)*4)}.pt-6{padding-top:calc(var(--spacing)*6)}.pt-\\[44px\\]{padding-top:44px}.pr-2{padding-right:calc(var(--spacing)*2)}.pr-8{padding-right:calc(var(--spacing)*8)}.pb-3{padding-bottom:calc(var(--spacing)*3)}.pb-4{padding-bottom:calc(var(--spacing)*4)}.pb-6{padding-bottom:calc(var(--spacing)*6)}.pb-32{padding-bottom:calc(var(--spacing)*32)}.pl-2{padding-left:calc(var(--spacing)*2)}.pl-7{padding-left:calc(var(--spacing)*7)}.pl-8{padding-left:calc(var(--spacing)*8)}.pl-10{padding-left:calc(var(--spacing)*10)}.text-center{text-align:center}.text-left{text-align:left}.text-right{text-align:right}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.leading-none{--tw-leading:1;line-height:1}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-wider{--tw-tracking:var(--tracking-wider);letter-spacing:var(--tracking-wider)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.whitespace-nowrap{white-space:nowrap}.whitespace-pre-line{white-space:pre-line}.text-\\[\\#326389\\]{color:#326389}.text-amber-600{color:var(--color-amber-600)}.text-amber-800{color:var(--color-amber-800)}.text-blue-100{color:var(--color-blue-100)}.text-blue-600{color:var(--color-blue-600)}.text-blue-800{color:var(--color-blue-800)}.text-blue-900{color:var(--color-blue-900)}.text-card-foreground{color:var(--card-foreground)}.text-current{color:currentColor}.text-destructive{color:var(--destructive)}.text-foreground{color:var(--foreground)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-900{color:var(--color-gray-900)}.text-green-600{color:var(--color-green-600)}.text-green-700{color:var(--color-green-700)}.text-green-800{color:var(--color-green-800)}.text-muted-foreground{color:var(--muted-foreground)}.text-orange-600{color:var(--color-orange-600)}.text-orange-700{color:var(--color-orange-700)}.text-popover-foreground{color:var(--popover-foreground)}.text-primary{color:var(--primary)}.text-primary-foreground{color:var(--primary-foreground)}.text-purple-600{color:var(--color-purple-600)}.text-purple-800{color:var(--color-purple-800)}.text-red-500{color:var(--color-red-500)}.text-red-600{color:var(--color-red-600)}.text-red-700{color:var(--color-red-700)}.text-red-800{color:var(--color-red-800)}.text-secondary-foreground{color:var(--secondary-foreground)}.text-white{color:var(--color-white)}.text-yellow-700{color:var(--color-yellow-700)}.uppercase{text-transform:uppercase}.underline-offset-4{text-underline-offset:4px}.opacity-0{opacity:0}.opacity-50{opacity:.5}.opacity-60{opacity:.6}.opacity-70{opacity:.7}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xs{--tw-shadow:0 1px 2px 0 var(--tw-shadow-color,#0000000d);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-0{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(0px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-2{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-4{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(4px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-\\[\\#326389\\]\\/20{--tw-ring-color:oklab(48.2835% -.0355592 -.0731156/.2)}.ring-offset-background{--tw-ring-offset-color:var(--background)}.outline-hidden{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.outline-hidden{outline-offset:2px;outline:2px solid #0000}}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.transition-\\[color\\,box-shadow\\]{transition-property:color,box-shadow;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-shadow{transition-property:box-shadow;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-none{transition-property:none}.duration-200{--tw-duration:.2s;transition-duration:.2s}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.outline-none{--tw-outline-style:none;outline-style:none}.select-none{-webkit-user-select:none;user-select:none}@media(hover:hover){.group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}}.group-data-\\[disabled\\=true\\]\\:pointer-events-none:is(:where(.group)[data-disabled=true] *){pointer-events:none}.group-data-\\[disabled\\=true\\]\\:opacity-50:is(:where(.group)[data-disabled=true] *){opacity:.5}.peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}.peer-disabled\\:opacity-50:is(:where(.peer):disabled~*){opacity:.5}.selection\\:bg-primary ::selection{background-color:var(--primary)}.selection\\:bg-primary::selection{background-color:var(--primary)}.selection\\:text-primary-foreground ::selection{color:var(--primary-foreground)}.selection\\:text-primary-foreground::selection{color:var(--primary-foreground)}.file\\:inline-flex::file-selector-button{display:inline-flex}.file\\:h-7::file-selector-button{height:calc(var(--spacing)*7)}.file\\:border-0::file-selector-button{border-style:var(--tw-border-style);border-width:0}.file\\:bg-transparent::file-selector-button{background-color:#0000}.file\\:text-sm::file-selector-button{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.file\\:font-medium::file-selector-button{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.file\\:text-foreground::file-selector-button{color:var(--foreground)}.placeholder\\:text-muted-foreground::placeholder{color:var(--muted-foreground)}.last\\:border-0:last-child{border-style:var(--tw-border-style);border-width:0}.last\\:pb-0:last-child{padding-bottom:calc(var(--spacing)*0)}@media(hover:hover){.hover\\:scale-110:hover{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x)var(--tw-scale-y)}.hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}.hover\\:bg-\\[\\#2a5474\\]:hover{background-color:#2a5474}.hover\\:bg-\\[\\#326389\\]:hover{background-color:#326389}.hover\\:bg-\\[\\#326389\\]\\/80:hover{background-color:#326389cc}.hover\\:bg-\\[\\#326389\\]\\/90:hover{background-color:#326389e6}.hover\\:bg-accent:hover{background-color:var(--accent)}.hover\\:bg-blue-50:hover{background-color:var(--color-blue-50)}.hover\\:bg-destructive\\/90:hover{background-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-destructive\\/90:hover{background-color:color-mix(in oklab,var(--destructive)90%,transparent)}}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-green-100:hover{background-color:var(--color-green-100)}.hover\\:bg-primary\\/90:hover{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-primary\\/90:hover{background-color:color-mix(in oklab,var(--primary)90%,transparent)}}.hover\\:bg-red-50:hover{background-color:var(--color-red-50)}.hover\\:bg-red-700:hover{background-color:var(--color-red-700)}.hover\\:bg-secondary\\/80:hover{background-color:var(--secondary)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-secondary\\/80:hover{background-color:color-mix(in oklab,var(--secondary)80%,transparent)}}.hover\\:bg-white\\/20:hover{background-color:#fff3}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-white\\/20:hover{background-color:color-mix(in oklab,var(--color-white)20%,transparent)}}.hover\\:text-\\[\\#2a5474\\]:hover{color:#2a5474}.hover\\:text-\\[\\#326389\\]:hover{color:#326389}.hover\\:text-accent-foreground:hover{color:var(--accent-foreground)}.hover\\:text-gray-900:hover{color:var(--color-gray-900)}.hover\\:text-red-600:hover{color:var(--color-red-600)}.hover\\:text-red-700:hover{color:var(--color-red-700)}.hover\\:text-white:hover{color:var(--color-white)}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:opacity-100:hover{opacity:1}.hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.hover\\:shadow-md:hover{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.focus\\:bg-accent:focus{background-color:var(--accent)}.focus\\:text-accent-foreground:focus{color:var(--accent-foreground)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-ring:focus{--tw-ring-color:var(--ring)}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.focus\\:outline-hidden:focus{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.focus\\:outline-hidden:focus{outline-offset:2px;outline:2px solid #0000}}.focus-visible\\:border-ring:focus-visible{border-color:var(--ring)}.focus-visible\\:ring-\\[3px\\]:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(3px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-visible\\:ring-destructive\\/20:focus-visible{--tw-ring-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){.focus-visible\\:ring-destructive\\/20:focus-visible{--tw-ring-color:color-mix(in oklab,var(--destructive)20%,transparent)}}.focus-visible\\:ring-ring\\/50:focus-visible{--tw-ring-color:var(--ring)}@supports (color:color-mix(in lab,red,red)){.focus-visible\\:ring-ring\\/50:focus-visible{--tw-ring-color:color-mix(in oklab,var(--ring)50%,transparent)}}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}.has-data-\\[slot\\=card-action\\]\\:grid-cols-\\[1fr_auto\\]:has([data-slot=card-action]){grid-template-columns:1fr auto}.has-\\[\\>svg\\]\\:px-2\\.5:has(>svg){padding-inline:calc(var(--spacing)*2.5)}.has-\\[\\>svg\\]\\:px-3:has(>svg){padding-inline:calc(var(--spacing)*3)}.has-\\[\\>svg\\]\\:px-4:has(>svg){padding-inline:calc(var(--spacing)*4)}.aria-invalid\\:border-destructive[aria-invalid=true]{border-color:var(--destructive)}.aria-invalid\\:ring-destructive\\/20[aria-invalid=true]{--tw-ring-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){.aria-invalid\\:ring-destructive\\/20[aria-invalid=true]{--tw-ring-color:color-mix(in oklab,var(--destructive)20%,transparent)}}.data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}.data-\\[error\\=true\\]\\:text-destructive[data-error=true]{color:var(--destructive)}.data-\\[inset\\]\\:pl-8[data-inset]{padding-left:calc(var(--spacing)*8)}.data-\\[orientation\\=horizontal\\]\\:h-px[data-orientation=horizontal]{height:1px}.data-\\[orientation\\=horizontal\\]\\:w-full[data-orientation=horizontal]{width:100%}.data-\\[orientation\\=vertical\\]\\:h-full[data-orientation=vertical]{height:100%}.data-\\[orientation\\=vertical\\]\\:w-px[data-orientation=vertical]{width:1px}.data-\\[placeholder\\]\\:text-muted-foreground[data-placeholder]{color:var(--muted-foreground)}.data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:calc(var(--spacing)*1);translate:var(--tw-translate-x)var(--tw-translate-y)}.data-\\[side\\=bottom\\]\\:slide-in-from-top-2[data-side=bottom]{--tw-enter-translate-y:calc(var(--spacing)*2*-1)}.data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.data-\\[side\\=left\\]\\:slide-in-from-right-2[data-side=left]{--tw-enter-translate-x:calc(var(--spacing)*2)}.data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:calc(var(--spacing)*1);translate:var(--tw-translate-x)var(--tw-translate-y)}.data-\\[side\\=right\\]\\:slide-in-from-left-2[data-side=right]{--tw-enter-translate-x:calc(var(--spacing)*2*-1)}.data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.data-\\[side\\=top\\]\\:slide-in-from-bottom-2[data-side=top]{--tw-enter-translate-y:calc(var(--spacing)*2)}.data-\\[size\\=default\\]\\:h-9[data-size=default]{height:calc(var(--spacing)*9)}.data-\\[size\\=sm\\]\\:h-8[data-size=sm]{height:calc(var(--spacing)*8)}:is(.\\*\\:data-\\[slot\\=select-value\\]\\:line-clamp-1>*)[data-slot=select-value]{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}:is(.\\*\\:data-\\[slot\\=select-value\\]\\:flex>*)[data-slot=select-value]{display:flex}:is(.\\*\\:data-\\[slot\\=select-value\\]\\:items-center>*)[data-slot=select-value]{align-items:center}:is(.\\*\\:data-\\[slot\\=select-value\\]\\:gap-2>*)[data-slot=select-value]{gap:calc(var(--spacing)*2)}.data-\\[state\\=checked\\]\\:translate-x-\\[calc\\(100\\%-2px\\)\\][data-state=checked]{--tw-translate-x: calc(100% - 2px) ;translate:var(--tw-translate-x)var(--tw-translate-y)}.data-\\[state\\=checked\\]\\:border-primary[data-state=checked]{border-color:var(--primary)}.data-\\[state\\=checked\\]\\:bg-primary[data-state=checked]{background-color:var(--primary)}.data-\\[state\\=checked\\]\\:text-primary-foreground[data-state=checked]{color:var(--primary-foreground)}.data-\\[state\\=closed\\]\\:animate-out[data-state=closed]{animation:exit var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none)}.data-\\[state\\=closed\\]\\:fade-out-0[data-state=closed]{--tw-exit-opacity:0}.data-\\[state\\=closed\\]\\:zoom-out-95[data-state=closed]{--tw-exit-scale:.95}.data-\\[state\\=open\\]\\:animate-in[data-state=open]{animation:enter var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none)}.data-\\[state\\=open\\]\\:bg-accent[data-state=open]{background-color:var(--accent)}.data-\\[state\\=open\\]\\:text-accent-foreground[data-state=open]{color:var(--accent-foreground)}.data-\\[state\\=open\\]\\:text-muted-foreground[data-state=open]{color:var(--muted-foreground)}.data-\\[state\\=open\\]\\:fade-in-0[data-state=open]{--tw-enter-opacity:0}.data-\\[state\\=open\\]\\:zoom-in-95[data-state=open]{--tw-enter-scale:.95}.data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.data-\\[state\\=unchecked\\]\\:bg-switch-background[data-state=unchecked]{background-color:var(--switch-background)}.data-\\[variant\\=destructive\\]\\:text-destructive[data-variant=destructive]{color:var(--destructive)}.data-\\[variant\\=destructive\\]\\:focus\\:bg-destructive\\/10[data-variant=destructive]:focus{background-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){.data-\\[variant\\=destructive\\]\\:focus\\:bg-destructive\\/10[data-variant=destructive]:focus{background-color:color-mix(in oklab,var(--destructive)10%,transparent)}}.data-\\[variant\\=destructive\\]\\:focus\\:text-destructive[data-variant=destructive]:focus{color:var(--destructive)}@media(min-width:40rem){.sm\\:block{display:block}.sm\\:w-auto{width:auto}.sm\\:max-w-lg{max-width:var(--container-lg)}.sm\\:flex-none{flex:none}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:flex-row{flex-direction:row}.sm\\:justify-end{justify-content:flex-end}.sm\\:px-6{padding-inline:calc(var(--spacing)*6)}.sm\\:text-left{text-align:left}}@media(min-width:48rem){.md\\:flex{display:flex}.md\\:hidden{display:none}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.md\\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}}@media(min-width:64rem){.lg\\:col-span-2{grid-column:span 2/span 2}.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.lg\\:px-8{padding-inline:calc(var(--spacing)*8)}}@media(min-width:80rem){.xl\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}.dark\\:border-input:is(.dark *){border-color:var(--input)}.dark\\:bg-destructive\\/60:is(.dark *){background-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-destructive\\/60:is(.dark *){background-color:color-mix(in oklab,var(--destructive)60%,transparent)}}.dark\\:bg-input\\/30:is(.dark *){background-color:var(--input)}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-input\\/30:is(.dark *){background-color:color-mix(in oklab,var(--input)30%,transparent)}}@media(hover:hover){.dark\\:hover\\:bg-accent\\/50:is(.dark *):hover{background-color:var(--accent)}@supports (color:color-mix(in lab,red,red)){.dark\\:hover\\:bg-accent\\/50:is(.dark *):hover{background-color:color-mix(in oklab,var(--accent)50%,transparent)}}.dark\\:hover\\:bg-input\\/50:is(.dark *):hover{background-color:var(--input)}@supports (color:color-mix(in lab,red,red)){.dark\\:hover\\:bg-input\\/50:is(.dark *):hover{background-color:color-mix(in oklab,var(--input)50%,transparent)}}}.dark\\:focus-visible\\:ring-destructive\\/40:is(.dark *):focus-visible{--tw-ring-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){.dark\\:focus-visible\\:ring-destructive\\/40:is(.dark *):focus-visible{--tw-ring-color:color-mix(in oklab,var(--destructive)40%,transparent)}}.dark\\:aria-invalid\\:ring-destructive\\/40:is(.dark *)[aria-invalid=true]{--tw-ring-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){.dark\\:aria-invalid\\:ring-destructive\\/40:is(.dark *)[aria-invalid=true]{--tw-ring-color:color-mix(in oklab,var(--destructive)40%,transparent)}}.dark\\:data-\\[state\\=checked\\]\\:bg-primary:is(.dark *)[data-state=checked]{background-color:var(--primary)}.dark\\:data-\\[state\\=checked\\]\\:bg-primary-foreground:is(.dark *)[data-state=checked]{background-color:var(--primary-foreground)}.dark\\:data-\\[state\\=unchecked\\]\\:bg-card-foreground:is(.dark *)[data-state=unchecked]{background-color:var(--card-foreground)}.dark\\:data-\\[state\\=unchecked\\]\\:bg-input\\/80:is(.dark *)[data-state=unchecked]{background-color:var(--input)}@supports (color:color-mix(in lab,red,red)){.dark\\:data-\\[state\\=unchecked\\]\\:bg-input\\/80:is(.dark *)[data-state=unchecked]{background-color:color-mix(in oklab,var(--input)80%,transparent)}}.dark\\:data-\\[variant\\=destructive\\]\\:focus\\:bg-destructive\\/20:is(.dark *)[data-variant=destructive]:focus{background-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){.dark\\:data-\\[variant\\=destructive\\]\\:focus\\:bg-destructive\\/20:is(.dark *)[data-variant=destructive]:focus{background-color:color-mix(in oklab,var(--destructive)20%,transparent)}}.\\[\\&_svg\\]\\:pointer-events-none svg{pointer-events:none}.\\[\\&_svg\\]\\:shrink-0 svg{flex-shrink:0}.\\[\\&_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-4 svg:not([class*=size-]){width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.\\[\\&_svg\\:not\\(\\[class\\*\\=\\'text-\\'\\]\\)\\]\\:text-muted-foreground svg:not([class*=text-]){color:var(--muted-foreground)}.\\[\\.border-b\\]\\:pb-6.border-b{padding-bottom:calc(var(--spacing)*6)}.\\[\\.border-t\\]\\:pt-6.border-t{padding-top:calc(var(--spacing)*6)}:is(.\\*\\:\\[span\\]\\:last\\:flex>*):is(span):last-child{display:flex}:is(.\\*\\:\\[span\\]\\:last\\:items-center>*):is(span):last-child{align-items:center}:is(.\\*\\:\\[span\\]\\:last\\:gap-2>*):is(span):last-child{gap:calc(var(--spacing)*2)}:is(.data-\\[variant\\=destructive\\]\\:\\*\\:\\[svg\\]\\:\\!text-destructive[data-variant=destructive]>*):is(svg){color:var(--destructive)!important}.\\[\\&\\:last-child\\]\\:pb-6:last-child{padding-bottom:calc(var(--spacing)*6)}.\\[\\&\\>svg\\]\\:pointer-events-none>svg{pointer-events:none}.\\[\\&\\>svg\\]\\:size-3>svg{width:calc(var(--spacing)*3);height:calc(var(--spacing)*3)}@media(hover:hover){a.\\[a\\&\\]\\:hover\\:bg-accent:hover{background-color:var(--accent)}a.\\[a\\&\\]\\:hover\\:bg-destructive\\/90:hover{background-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){a.\\[a\\&\\]\\:hover\\:bg-destructive\\/90:hover{background-color:color-mix(in oklab,var(--destructive)90%,transparent)}}a.\\[a\\&\\]\\:hover\\:bg-primary\\/90:hover{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){a.\\[a\\&\\]\\:hover\\:bg-primary\\/90:hover{background-color:color-mix(in oklab,var(--primary)90%,transparent)}}a.\\[a\\&\\]\\:hover\\:bg-secondary\\/90:hover{background-color:var(--secondary)}@supports (color:color-mix(in lab,red,red)){a.\\[a\\&\\]\\:hover\\:bg-secondary\\/90:hover{background-color:color-mix(in oklab,var(--secondary)90%,transparent)}}a.\\[a\\&\\]\\:hover\\:text-accent-foreground:hover{color:var(--accent-foreground)}}}@property --tw-animation-delay{syntax:"*";inherits:false;initial-value:0s}@property --tw-animation-direction{syntax:"*";inherits:false;initial-value:normal}@property --tw-animation-duration{syntax:"*";inherits:false}@property --tw-animation-fill-mode{syntax:"*";inherits:false;initial-value:none}@property --tw-animation-iteration-count{syntax:"*";inherits:false;initial-value:1}@property --tw-enter-blur{syntax:"*";inherits:false;initial-value:0}@property --tw-enter-opacity{syntax:"*";inherits:false;initial-value:1}@property --tw-enter-rotate{syntax:"*";inherits:false;initial-value:0}@property --tw-enter-scale{syntax:"*";inherits:false;initial-value:1}@property --tw-enter-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-enter-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-blur{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-opacity{syntax:"*";inherits:false;initial-value:1}@property --tw-exit-rotate{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-scale{syntax:"*";inherits:false;initial-value:1}@property --tw-exit-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-translate-y{syntax:"*";inherits:false;initial-value:0}:root{--font-size:16px;--background:#fff;--foreground:oklch(14.5% 0 0);--card:#fff;--card-foreground:oklch(14.5% 0 0);--popover:oklch(100% 0 0);--popover-foreground:oklch(14.5% 0 0);--primary:#030213;--primary-foreground:oklch(100% 0 0);--secondary:oklch(95% .0058 264.53);--secondary-foreground:#030213;--muted:#ececf0;--muted-foreground:#717182;--accent:#e9ebef;--accent-foreground:#030213;--destructive:#d4183d;--destructive-foreground:#fff;--border:#0000001a;--input:transparent;--input-background:#f3f3f5;--switch-background:#cbced4;--font-weight-medium:500;--font-weight-normal:400;--ring:oklch(70.8% 0 0);--chart-1:oklch(64.6% .222 41.116);--chart-2:oklch(60% .118 184.704);--chart-3:oklch(39.8% .07 227.392);--chart-4:oklch(82.8% .189 84.429);--chart-5:oklch(76.9% .188 70.08);--radius:.625rem;--sidebar:oklch(98.5% 0 0);--sidebar-foreground:oklch(14.5% 0 0);--sidebar-primary:#030213;--sidebar-primary-foreground:oklch(98.5% 0 0);--sidebar-accent:oklch(97% 0 0);--sidebar-accent-foreground:oklch(20.5% 0 0);--sidebar-border:oklch(92.2% 0 0);--sidebar-ring:oklch(70.8% 0 0)}.dark{--background:oklch(14.5% 0 0);--foreground:oklch(98.5% 0 0);--card:oklch(14.5% 0 0);--card-foreground:oklch(98.5% 0 0);--popover:oklch(14.5% 0 0);--popover-foreground:oklch(98.5% 0 0);--primary:oklch(98.5% 0 0);--primary-foreground:oklch(20.5% 0 0);--secondary:oklch(26.9% 0 0);--secondary-foreground:oklch(98.5% 0 0);--muted:oklch(26.9% 0 0);--muted-foreground:oklch(70.8% 0 0);--accent:oklch(26.9% 0 0);--accent-foreground:oklch(98.5% 0 0);--destructive:oklch(39.6% .141 25.723);--destructive-foreground:oklch(63.7% .237 25.331);--border:oklch(26.9% 0 0);--input:oklch(26.9% 0 0);--ring:oklch(43.9% 0 0);--font-weight-medium:500;--font-weight-normal:400;--chart-1:oklch(48.8% .243 264.376);--chart-2:oklch(69.6% .17 162.48);--chart-3:oklch(76.9% .188 70.08);--chart-4:oklch(62.7% .265 303.9);--chart-5:oklch(64.5% .246 16.439);--sidebar:oklch(20.5% 0 0);--sidebar-foreground:oklch(98.5% 0 0);--sidebar-primary:oklch(48.8% .243 264.376);--sidebar-primary-foreground:oklch(98.5% 0 0);--sidebar-accent:oklch(26.9% 0 0);--sidebar-accent-foreground:oklch(98.5% 0 0);--sidebar-border:oklch(26.9% 0 0);--sidebar-ring:oklch(43.9% 0 0)}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-divide-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@keyframes spin{to{transform:rotate(360deg)}}@keyframes enter{0%{opacity:var(--tw-enter-opacity,1);transform:translate3d(var(--tw-enter-translate-x,0),var(--tw-enter-translate-y,0),0)scale3d(var(--tw-enter-scale,1),var(--tw-enter-scale,1),var(--tw-enter-scale,1))rotate(var(--tw-enter-rotate,0));filter:blur(var(--tw-enter-blur,0))}}@keyframes exit{to{opacity:var(--tw-exit-opacity,1);transform:translate3d(var(--tw-exit-translate-x,0),var(--tw-exit-translate-y,0),0)scale3d(var(--tw-exit-scale,1),var(--tw-exit-scale,1),var(--tw-exit-scale,1))rotate(var(--tw-exit-rotate,0));filter:blur(var(--tw-exit-blur,0))}}`)),document.head.appendChild(r)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
function x0(n, o) {
  for (var a = 0; a < o.length; a++) {
    const i = o[a];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const c in i)
        if (c !== "default" && !(c in n)) {
          const u = Object.getOwnPropertyDescriptor(i, c);
          u && Object.defineProperty(n, c, u.get ? u : {
            enumerable: !0,
            get: () => i[c]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
function Mi(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Ic = { exports: {} }, Ma = {}, zc = { exports: {} }, Ie = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rh;
function v0() {
  if (rh) return Ie;
  rh = 1;
  var n = Symbol.for("react.element"), o = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), f = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), x = Symbol.iterator;
  function b(_) {
    return _ === null || typeof _ != "object" ? null : (_ = x && _[x] || _["@@iterator"], typeof _ == "function" ? _ : null);
  }
  var S = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, j = Object.assign, N = {};
  function C(_, z, oe) {
    this.props = _, this.context = z, this.refs = N, this.updater = oe || S;
  }
  C.prototype.isReactComponent = {}, C.prototype.setState = function(_, z) {
    if (typeof _ != "object" && typeof _ != "function" && _ != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, _, z, "setState");
  }, C.prototype.forceUpdate = function(_) {
    this.updater.enqueueForceUpdate(this, _, "forceUpdate");
  };
  function P() {
  }
  P.prototype = C.prototype;
  function E(_, z, oe) {
    this.props = _, this.context = z, this.refs = N, this.updater = oe || S;
  }
  var O = E.prototype = new P();
  O.constructor = E, j(O, C.prototype), O.isPureReactComponent = !0;
  var F = Array.isArray, D = Object.prototype.hasOwnProperty, Y = { current: null }, H = { key: !0, ref: !0, __self: !0, __source: !0 };
  function B(_, z, oe) {
    var ue, ce = {}, je = null, K = null;
    if (z != null) for (ue in z.ref !== void 0 && (K = z.ref), z.key !== void 0 && (je = "" + z.key), z) D.call(z, ue) && !H.hasOwnProperty(ue) && (ce[ue] = z[ue]);
    var ge = arguments.length - 2;
    if (ge === 1) ce.children = oe;
    else if (1 < ge) {
      for (var Ee = Array(ge), Ae = 0; Ae < ge; Ae++) Ee[Ae] = arguments[Ae + 2];
      ce.children = Ee;
    }
    if (_ && _.defaultProps) for (ue in ge = _.defaultProps, ge) ce[ue] === void 0 && (ce[ue] = ge[ue]);
    return { $$typeof: n, type: _, key: je, ref: K, props: ce, _owner: Y.current };
  }
  function re(_, z) {
    return { $$typeof: n, type: _.type, key: z, ref: _.ref, props: _.props, _owner: _._owner };
  }
  function me(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === n;
  }
  function J(_) {
    var z = { "=": "=0", ":": "=2" };
    return "$" + _.replace(/[=:]/g, function(oe) {
      return z[oe];
    });
  }
  var X = /\/+/g;
  function W(_, z) {
    return typeof _ == "object" && _ !== null && _.key != null ? J("" + _.key) : z.toString(36);
  }
  function le(_, z, oe, ue, ce) {
    var je = typeof _;
    (je === "undefined" || je === "boolean") && (_ = null);
    var K = !1;
    if (_ === null) K = !0;
    else switch (je) {
      case "string":
      case "number":
        K = !0;
        break;
      case "object":
        switch (_.$$typeof) {
          case n:
          case o:
            K = !0;
        }
    }
    if (K) return K = _, ce = ce(K), _ = ue === "" ? "." + W(K, 0) : ue, F(ce) ? (oe = "", _ != null && (oe = _.replace(X, "$&/") + "/"), le(ce, z, oe, "", function(Ae) {
      return Ae;
    })) : ce != null && (me(ce) && (ce = re(ce, oe + (!ce.key || K && K.key === ce.key ? "" : ("" + ce.key).replace(X, "$&/") + "/") + _)), z.push(ce)), 1;
    if (K = 0, ue = ue === "" ? "." : ue + ":", F(_)) for (var ge = 0; ge < _.length; ge++) {
      je = _[ge];
      var Ee = ue + W(je, ge);
      K += le(je, z, oe, Ee, ce);
    }
    else if (Ee = b(_), typeof Ee == "function") for (_ = Ee.call(_), ge = 0; !(je = _.next()).done; ) je = je.value, Ee = ue + W(je, ge++), K += le(je, z, oe, Ee, ce);
    else if (je === "object") throw z = String(_), Error("Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead.");
    return K;
  }
  function ye(_, z, oe) {
    if (_ == null) return _;
    var ue = [], ce = 0;
    return le(_, ue, "", "", function(je) {
      return z.call(oe, je, ce++);
    }), ue;
  }
  function ae(_) {
    if (_._status === -1) {
      var z = _._result;
      z = z(), z.then(function(oe) {
        (_._status === 0 || _._status === -1) && (_._status = 1, _._result = oe);
      }, function(oe) {
        (_._status === 0 || _._status === -1) && (_._status = 2, _._result = oe);
      }), _._status === -1 && (_._status = 0, _._result = z);
    }
    if (_._status === 1) return _._result.default;
    throw _._result;
  }
  var de = { current: null }, M = { transition: null }, U = { ReactCurrentDispatcher: de, ReactCurrentBatchConfig: M, ReactCurrentOwner: Y };
  function G() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Ie.Children = { map: ye, forEach: function(_, z, oe) {
    ye(_, function() {
      z.apply(this, arguments);
    }, oe);
  }, count: function(_) {
    var z = 0;
    return ye(_, function() {
      z++;
    }), z;
  }, toArray: function(_) {
    return ye(_, function(z) {
      return z;
    }) || [];
  }, only: function(_) {
    if (!me(_)) throw Error("React.Children.only expected to receive a single React element child.");
    return _;
  } }, Ie.Component = C, Ie.Fragment = a, Ie.Profiler = c, Ie.PureComponent = E, Ie.StrictMode = i, Ie.Suspense = p, Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = U, Ie.act = G, Ie.cloneElement = function(_, z, oe) {
    if (_ == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
    var ue = j({}, _.props), ce = _.key, je = _.ref, K = _._owner;
    if (z != null) {
      if (z.ref !== void 0 && (je = z.ref, K = Y.current), z.key !== void 0 && (ce = "" + z.key), _.type && _.type.defaultProps) var ge = _.type.defaultProps;
      for (Ee in z) D.call(z, Ee) && !H.hasOwnProperty(Ee) && (ue[Ee] = z[Ee] === void 0 && ge !== void 0 ? ge[Ee] : z[Ee]);
    }
    var Ee = arguments.length - 2;
    if (Ee === 1) ue.children = oe;
    else if (1 < Ee) {
      ge = Array(Ee);
      for (var Ae = 0; Ae < Ee; Ae++) ge[Ae] = arguments[Ae + 2];
      ue.children = ge;
    }
    return { $$typeof: n, type: _.type, key: ce, ref: je, props: ue, _owner: K };
  }, Ie.createContext = function(_) {
    return _ = { $$typeof: f, _currentValue: _, _currentValue2: _, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, _.Provider = { $$typeof: u, _context: _ }, _.Consumer = _;
  }, Ie.createElement = B, Ie.createFactory = function(_) {
    var z = B.bind(null, _);
    return z.type = _, z;
  }, Ie.createRef = function() {
    return { current: null };
  }, Ie.forwardRef = function(_) {
    return { $$typeof: m, render: _ };
  }, Ie.isValidElement = me, Ie.lazy = function(_) {
    return { $$typeof: v, _payload: { _status: -1, _result: _ }, _init: ae };
  }, Ie.memo = function(_, z) {
    return { $$typeof: g, type: _, compare: z === void 0 ? null : z };
  }, Ie.startTransition = function(_) {
    var z = M.transition;
    M.transition = {};
    try {
      _();
    } finally {
      M.transition = z;
    }
  }, Ie.unstable_act = G, Ie.useCallback = function(_, z) {
    return de.current.useCallback(_, z);
  }, Ie.useContext = function(_) {
    return de.current.useContext(_);
  }, Ie.useDebugValue = function() {
  }, Ie.useDeferredValue = function(_) {
    return de.current.useDeferredValue(_);
  }, Ie.useEffect = function(_, z) {
    return de.current.useEffect(_, z);
  }, Ie.useId = function() {
    return de.current.useId();
  }, Ie.useImperativeHandle = function(_, z, oe) {
    return de.current.useImperativeHandle(_, z, oe);
  }, Ie.useInsertionEffect = function(_, z) {
    return de.current.useInsertionEffect(_, z);
  }, Ie.useLayoutEffect = function(_, z) {
    return de.current.useLayoutEffect(_, z);
  }, Ie.useMemo = function(_, z) {
    return de.current.useMemo(_, z);
  }, Ie.useReducer = function(_, z, oe) {
    return de.current.useReducer(_, z, oe);
  }, Ie.useRef = function(_) {
    return de.current.useRef(_);
  }, Ie.useState = function(_) {
    return de.current.useState(_);
  }, Ie.useSyncExternalStore = function(_, z, oe) {
    return de.current.useSyncExternalStore(_, z, oe);
  }, Ie.useTransition = function() {
    return de.current.useTransition();
  }, Ie.version = "18.3.1", Ie;
}
var sh;
function Au() {
  return sh || (sh = 1, zc.exports = v0()), zc.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ah;
function y0() {
  if (ah) return Ma;
  ah = 1;
  var n = Au(), o = Symbol.for("react.element"), a = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, c = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(m, p, g) {
    var v, x = {}, b = null, S = null;
    g !== void 0 && (b = "" + g), p.key !== void 0 && (b = "" + p.key), p.ref !== void 0 && (S = p.ref);
    for (v in p) i.call(p, v) && !u.hasOwnProperty(v) && (x[v] = p[v]);
    if (m && m.defaultProps) for (v in p = m.defaultProps, p) x[v] === void 0 && (x[v] = p[v]);
    return { $$typeof: o, type: m, key: b, ref: S, props: x, _owner: c.current };
  }
  return Ma.Fragment = a, Ma.jsx = f, Ma.jsxs = f, Ma;
}
var oh;
function w0() {
  return oh || (oh = 1, Ic.exports = y0()), Ic.exports;
}
var r = w0(), w = Au();
const Te = /* @__PURE__ */ Mi(w), b0 = /* @__PURE__ */ x0({
  __proto__: null,
  default: Te
}, [w]);
var oi = {}, Vc = { exports: {} }, $t = {}, $c = { exports: {} }, Bc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ih;
function N0() {
  return ih || (ih = 1, (function(n) {
    function o(M, U) {
      var G = M.length;
      M.push(U);
      e: for (; 0 < G; ) {
        var _ = G - 1 >>> 1, z = M[_];
        if (0 < c(z, U)) M[_] = U, M[G] = z, G = _;
        else break e;
      }
    }
    function a(M) {
      return M.length === 0 ? null : M[0];
    }
    function i(M) {
      if (M.length === 0) return null;
      var U = M[0], G = M.pop();
      if (G !== U) {
        M[0] = G;
        e: for (var _ = 0, z = M.length, oe = z >>> 1; _ < oe; ) {
          var ue = 2 * (_ + 1) - 1, ce = M[ue], je = ue + 1, K = M[je];
          if (0 > c(ce, G)) je < z && 0 > c(K, ce) ? (M[_] = K, M[je] = G, _ = je) : (M[_] = ce, M[ue] = G, _ = ue);
          else if (je < z && 0 > c(K, G)) M[_] = K, M[je] = G, _ = je;
          else break e;
        }
      }
      return U;
    }
    function c(M, U) {
      var G = M.sortIndex - U.sortIndex;
      return G !== 0 ? G : M.id - U.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var u = performance;
      n.unstable_now = function() {
        return u.now();
      };
    } else {
      var f = Date, m = f.now();
      n.unstable_now = function() {
        return f.now() - m;
      };
    }
    var p = [], g = [], v = 1, x = null, b = 3, S = !1, j = !1, N = !1, C = typeof setTimeout == "function" ? setTimeout : null, P = typeof clearTimeout == "function" ? clearTimeout : null, E = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function O(M) {
      for (var U = a(g); U !== null; ) {
        if (U.callback === null) i(g);
        else if (U.startTime <= M) i(g), U.sortIndex = U.expirationTime, o(p, U);
        else break;
        U = a(g);
      }
    }
    function F(M) {
      if (N = !1, O(M), !j) if (a(p) !== null) j = !0, ae(D);
      else {
        var U = a(g);
        U !== null && de(F, U.startTime - M);
      }
    }
    function D(M, U) {
      j = !1, N && (N = !1, P(B), B = -1), S = !0;
      var G = b;
      try {
        for (O(U), x = a(p); x !== null && (!(x.expirationTime > U) || M && !J()); ) {
          var _ = x.callback;
          if (typeof _ == "function") {
            x.callback = null, b = x.priorityLevel;
            var z = _(x.expirationTime <= U);
            U = n.unstable_now(), typeof z == "function" ? x.callback = z : x === a(p) && i(p), O(U);
          } else i(p);
          x = a(p);
        }
        if (x !== null) var oe = !0;
        else {
          var ue = a(g);
          ue !== null && de(F, ue.startTime - U), oe = !1;
        }
        return oe;
      } finally {
        x = null, b = G, S = !1;
      }
    }
    var Y = !1, H = null, B = -1, re = 5, me = -1;
    function J() {
      return !(n.unstable_now() - me < re);
    }
    function X() {
      if (H !== null) {
        var M = n.unstable_now();
        me = M;
        var U = !0;
        try {
          U = H(!0, M);
        } finally {
          U ? W() : (Y = !1, H = null);
        }
      } else Y = !1;
    }
    var W;
    if (typeof E == "function") W = function() {
      E(X);
    };
    else if (typeof MessageChannel < "u") {
      var le = new MessageChannel(), ye = le.port2;
      le.port1.onmessage = X, W = function() {
        ye.postMessage(null);
      };
    } else W = function() {
      C(X, 0);
    };
    function ae(M) {
      H = M, Y || (Y = !0, W());
    }
    function de(M, U) {
      B = C(function() {
        M(n.unstable_now());
      }, U);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, n.unstable_continueExecution = function() {
      j || S || (j = !0, ae(D));
    }, n.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : re = 0 < M ? Math.floor(1e3 / M) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return b;
    }, n.unstable_getFirstCallbackNode = function() {
      return a(p);
    }, n.unstable_next = function(M) {
      switch (b) {
        case 1:
        case 2:
        case 3:
          var U = 3;
          break;
        default:
          U = b;
      }
      var G = b;
      b = U;
      try {
        return M();
      } finally {
        b = G;
      }
    }, n.unstable_pauseExecution = function() {
    }, n.unstable_requestPaint = function() {
    }, n.unstable_runWithPriority = function(M, U) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var G = b;
      b = M;
      try {
        return U();
      } finally {
        b = G;
      }
    }, n.unstable_scheduleCallback = function(M, U, G) {
      var _ = n.unstable_now();
      switch (typeof G == "object" && G !== null ? (G = G.delay, G = typeof G == "number" && 0 < G ? _ + G : _) : G = _, M) {
        case 1:
          var z = -1;
          break;
        case 2:
          z = 250;
          break;
        case 5:
          z = 1073741823;
          break;
        case 4:
          z = 1e4;
          break;
        default:
          z = 5e3;
      }
      return z = G + z, M = { id: v++, callback: U, priorityLevel: M, startTime: G, expirationTime: z, sortIndex: -1 }, G > _ ? (M.sortIndex = G, o(g, M), a(p) === null && M === a(g) && (N ? (P(B), B = -1) : N = !0, de(F, G - _))) : (M.sortIndex = z, o(p, M), j || S || (j = !0, ae(D))), M;
    }, n.unstable_shouldYield = J, n.unstable_wrapCallback = function(M) {
      var U = b;
      return function() {
        var G = b;
        b = U;
        try {
          return M.apply(this, arguments);
        } finally {
          b = G;
        }
      };
    };
  })(Bc)), Bc;
}
var lh;
function j0() {
  return lh || (lh = 1, $c.exports = N0()), $c.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ch;
function S0() {
  if (ch) return $t;
  ch = 1;
  var n = Au(), o = j0();
  function a(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, s = 1; s < arguments.length; s++) t += "&args[]=" + encodeURIComponent(arguments[s]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var i = /* @__PURE__ */ new Set(), c = {};
  function u(e, t) {
    f(e, t), f(e + "Capture", t);
  }
  function f(e, t) {
    for (c[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
  }
  var m = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), p = Object.prototype.hasOwnProperty, g = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, v = {}, x = {};
  function b(e) {
    return p.call(x, e) ? !0 : p.call(v, e) ? !1 : g.test(e) ? x[e] = !0 : (v[e] = !0, !1);
  }
  function S(e, t, s, l) {
    if (s !== null && s.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return l ? !1 : s !== null ? !s.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function j(e, t, s, l) {
    if (t === null || typeof t > "u" || S(e, t, s, l)) return !0;
    if (l) return !1;
    if (s !== null) switch (s.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
    return !1;
  }
  function N(e, t, s, l, d, h, y) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = l, this.attributeNamespace = d, this.mustUseProperty = s, this.propertyName = e, this.type = t, this.sanitizeURL = h, this.removeEmptyString = y;
  }
  var C = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    C[e] = new N(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    C[t] = new N(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    C[e] = new N(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    C[e] = new N(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    C[e] = new N(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    C[e] = new N(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    C[e] = new N(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    C[e] = new N(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    C[e] = new N(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var P = /[\-:]([a-z])/g;
  function E(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      P,
      E
    );
    C[t] = new N(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(P, E);
    C[t] = new N(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(P, E);
    C[t] = new N(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    C[e] = new N(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), C.xlinkHref = new N("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    C[e] = new N(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function O(e, t, s, l) {
    var d = C.hasOwnProperty(t) ? C[t] : null;
    (d !== null ? d.type !== 0 : l || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (j(t, s, d, l) && (s = null), l || d === null ? b(t) && (s === null ? e.removeAttribute(t) : e.setAttribute(t, "" + s)) : d.mustUseProperty ? e[d.propertyName] = s === null ? d.type === 3 ? !1 : "" : s : (t = d.attributeName, l = d.attributeNamespace, s === null ? e.removeAttribute(t) : (d = d.type, s = d === 3 || d === 4 && s === !0 ? "" : "" + s, l ? e.setAttributeNS(l, t, s) : e.setAttribute(t, s))));
  }
  var F = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, D = Symbol.for("react.element"), Y = Symbol.for("react.portal"), H = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), re = Symbol.for("react.profiler"), me = Symbol.for("react.provider"), J = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), le = Symbol.for("react.suspense_list"), ye = Symbol.for("react.memo"), ae = Symbol.for("react.lazy"), de = Symbol.for("react.offscreen"), M = Symbol.iterator;
  function U(e) {
    return e === null || typeof e != "object" ? null : (e = M && e[M] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var G = Object.assign, _;
  function z(e) {
    if (_ === void 0) try {
      throw Error();
    } catch (s) {
      var t = s.stack.trim().match(/\n( *(at )?)/);
      _ = t && t[1] || "";
    }
    return `
` + _ + e;
  }
  var oe = !1;
  function ue(e, t) {
    if (!e || oe) return "";
    oe = !0;
    var s = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch ($) {
          var l = $;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch ($) {
          l = $;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch ($) {
          l = $;
        }
        e();
      }
    } catch ($) {
      if ($ && l && typeof $.stack == "string") {
        for (var d = $.stack.split(`
`), h = l.stack.split(`
`), y = d.length - 1, k = h.length - 1; 1 <= y && 0 <= k && d[y] !== h[k]; ) k--;
        for (; 1 <= y && 0 <= k; y--, k--) if (d[y] !== h[k]) {
          if (y !== 1 || k !== 1)
            do
              if (y--, k--, 0 > k || d[y] !== h[k]) {
                var A = `
` + d[y].replace(" at new ", " at ");
                return e.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", e.displayName)), A;
              }
            while (1 <= y && 0 <= k);
          break;
        }
      }
    } finally {
      oe = !1, Error.prepareStackTrace = s;
    }
    return (e = e ? e.displayName || e.name : "") ? z(e) : "";
  }
  function ce(e) {
    switch (e.tag) {
      case 5:
        return z(e.type);
      case 16:
        return z("Lazy");
      case 13:
        return z("Suspense");
      case 19:
        return z("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = ue(e.type, !1), e;
      case 11:
        return e = ue(e.type.render, !1), e;
      case 1:
        return e = ue(e.type, !0), e;
      default:
        return "";
    }
  }
  function je(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case H:
        return "Fragment";
      case Y:
        return "Portal";
      case re:
        return "Profiler";
      case B:
        return "StrictMode";
      case W:
        return "Suspense";
      case le:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case J:
        return (e.displayName || "Context") + ".Consumer";
      case me:
        return (e._context.displayName || "Context") + ".Provider";
      case X:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ye:
        return t = e.displayName || null, t !== null ? t : je(e.type) || "Memo";
      case ae:
        t = e._payload, e = e._init;
        try {
          return je(e(t));
        } catch {
        }
    }
    return null;
  }
  function K(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return je(t);
      case 8:
        return t === B ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function ge(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Ee(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Ae(e) {
    var t = Ee(e) ? "checked" : "value", s = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), l = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof s < "u" && typeof s.get == "function" && typeof s.set == "function") {
      var d = s.get, h = s.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return d.call(this);
      }, set: function(y) {
        l = "" + y, h.call(this, y);
      } }), Object.defineProperty(e, t, { enumerable: s.enumerable }), { getValue: function() {
        return l;
      }, setValue: function(y) {
        l = "" + y;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Oe(e) {
    e._valueTracker || (e._valueTracker = Ae(e));
  }
  function Fe(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var s = t.getValue(), l = "";
    return e && (l = Ee(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== s ? (t.setValue(e), !0) : !1;
  }
  function ft(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Nt(e, t) {
    var s = t.checked;
    return G({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: s ?? e._wrapperState.initialChecked });
  }
  function bn(e, t) {
    var s = t.defaultValue == null ? "" : t.defaultValue, l = t.checked != null ? t.checked : t.defaultChecked;
    s = ge(t.value != null ? t.value : s), e._wrapperState = { initialChecked: l, initialValue: s, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function an(e, t) {
    t = t.checked, t != null && O(e, "checked", t, !1);
  }
  function Xt(e, t) {
    an(e, t);
    var s = ge(t.value), l = t.type;
    if (s != null) l === "number" ? (s === 0 && e.value === "" || e.value != s) && (e.value = "" + s) : e.value !== "" + s && (e.value = "" + s);
    else if (l === "submit" || l === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Nn(e, t.type, s) : t.hasOwnProperty("defaultValue") && Nn(e, t.type, ge(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Qr(e, t, s) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var l = t.type;
      if (!(l !== "submit" && l !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, s || t === e.value || (e.value = t), e.defaultValue = t;
    }
    s = e.name, s !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, s !== "" && (e.name = s);
  }
  function Nn(e, t, s) {
    (t !== "number" || ft(e.ownerDocument) !== e) && (s == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + s && (e.defaultValue = "" + s));
  }
  var Xr = Array.isArray;
  function On(e, t, s, l) {
    if (e = e.options, t) {
      t = {};
      for (var d = 0; d < s.length; d++) t["$" + s[d]] = !0;
      for (s = 0; s < e.length; s++) d = t.hasOwnProperty("$" + e[s].value), e[s].selected !== d && (e[s].selected = d), d && l && (e[s].defaultSelected = !0);
    } else {
      for (s = "" + ge(s), t = null, d = 0; d < e.length; d++) {
        if (e[d].value === s) {
          e[d].selected = !0, l && (e[d].defaultSelected = !0);
          return;
        }
        t !== null || e[d].disabled || (t = e[d]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function R(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(a(91));
    return G({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function V(e, t) {
    var s = t.value;
    if (s == null) {
      if (s = t.children, t = t.defaultValue, s != null) {
        if (t != null) throw Error(a(92));
        if (Xr(s)) {
          if (1 < s.length) throw Error(a(93));
          s = s[0];
        }
        t = s;
      }
      t == null && (t = ""), s = t;
    }
    e._wrapperState = { initialValue: ge(s) };
  }
  function q(e, t) {
    var s = ge(t.value), l = ge(t.defaultValue);
    s != null && (s = "" + s, s !== e.value && (e.value = s), t.defaultValue == null && e.defaultValue !== s && (e.defaultValue = s)), l != null && (e.defaultValue = "" + l);
  }
  function he(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function ie(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function te(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? ie(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var xe, Ue = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, s, l, d) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, s, l, d);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (xe = xe || document.createElement("div"), xe.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = xe.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Xe(e, t) {
    if (t) {
      var s = e.firstChild;
      if (s && s === e.lastChild && s.nodeType === 3) {
        s.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var st = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Xi = ["Webkit", "ms", "Moz", "O"];
  Object.keys(st).forEach(function(e) {
    Xi.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), st[t] = st[e];
    });
  });
  function Zr(e, t, s) {
    return t == null || typeof t == "boolean" || t === "" ? "" : s || typeof t != "number" || t === 0 || st.hasOwnProperty(e) && st[e] ? ("" + t).trim() : t + "px";
  }
  function Jr(e, t) {
    e = e.style;
    for (var s in t) if (t.hasOwnProperty(s)) {
      var l = s.indexOf("--") === 0, d = Zr(s, t[s], l);
      s === "float" && (s = "cssFloat"), l ? e.setProperty(s, d) : e[s] = d;
    }
  }
  var Zi = G({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function es(e, t) {
    if (t) {
      if (Zi[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(a(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(a(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(a(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(a(62));
    }
  }
  function Xs(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var ts = null;
  function Ji(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var el = null, ns = null, rs = null;
  function yd(e) {
    if (e = ya(e)) {
      if (typeof el != "function") throw Error(a(280));
      var t = e.stateNode;
      t && (t = bo(t), el(e.stateNode, e.type, t));
    }
  }
  function wd(e) {
    ns ? rs ? rs.push(e) : rs = [e] : ns = e;
  }
  function bd() {
    if (ns) {
      var e = ns, t = rs;
      if (rs = ns = null, yd(e), t) for (e = 0; e < t.length; e++) yd(t[e]);
    }
  }
  function Nd(e, t) {
    return e(t);
  }
  function jd() {
  }
  var tl = !1;
  function Sd(e, t, s) {
    if (tl) return e(t, s);
    tl = !0;
    try {
      return Nd(e, t, s);
    } finally {
      tl = !1, (ns !== null || rs !== null) && (jd(), bd());
    }
  }
  function Zs(e, t) {
    var s = e.stateNode;
    if (s === null) return null;
    var l = bo(s);
    if (l === null) return null;
    s = l[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (s && typeof s != "function") throw Error(a(231, t, typeof s));
    return s;
  }
  var nl = !1;
  if (m) try {
    var Js = {};
    Object.defineProperty(Js, "passive", { get: function() {
      nl = !0;
    } }), window.addEventListener("test", Js, Js), window.removeEventListener("test", Js, Js);
  } catch {
    nl = !1;
  }
  function jv(e, t, s, l, d, h, y, k, A) {
    var $ = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(s, $);
    } catch (Z) {
      this.onError(Z);
    }
  }
  var ea = !1, Za = null, Ja = !1, rl = null, Sv = { onError: function(e) {
    ea = !0, Za = e;
  } };
  function Cv(e, t, s, l, d, h, y, k, A) {
    ea = !1, Za = null, jv.apply(Sv, arguments);
  }
  function kv(e, t, s, l, d, h, y, k, A) {
    if (Cv.apply(this, arguments), ea) {
      if (ea) {
        var $ = Za;
        ea = !1, Za = null;
      } else throw Error(a(198));
      Ja || (Ja = !0, rl = $);
    }
  }
  function kr(e) {
    var t = e, s = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (s = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? s : null;
  }
  function Cd(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function kd(e) {
    if (kr(e) !== e) throw Error(a(188));
  }
  function Ev(e) {
    var t = e.alternate;
    if (!t) {
      if (t = kr(e), t === null) throw Error(a(188));
      return t !== e ? null : e;
    }
    for (var s = e, l = t; ; ) {
      var d = s.return;
      if (d === null) break;
      var h = d.alternate;
      if (h === null) {
        if (l = d.return, l !== null) {
          s = l;
          continue;
        }
        break;
      }
      if (d.child === h.child) {
        for (h = d.child; h; ) {
          if (h === s) return kd(d), e;
          if (h === l) return kd(d), t;
          h = h.sibling;
        }
        throw Error(a(188));
      }
      if (s.return !== l.return) s = d, l = h;
      else {
        for (var y = !1, k = d.child; k; ) {
          if (k === s) {
            y = !0, s = d, l = h;
            break;
          }
          if (k === l) {
            y = !0, l = d, s = h;
            break;
          }
          k = k.sibling;
        }
        if (!y) {
          for (k = h.child; k; ) {
            if (k === s) {
              y = !0, s = h, l = d;
              break;
            }
            if (k === l) {
              y = !0, l = h, s = d;
              break;
            }
            k = k.sibling;
          }
          if (!y) throw Error(a(189));
        }
      }
      if (s.alternate !== l) throw Error(a(190));
    }
    if (s.tag !== 3) throw Error(a(188));
    return s.stateNode.current === s ? e : t;
  }
  function Ed(e) {
    return e = Ev(e), e !== null ? Pd(e) : null;
  }
  function Pd(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Pd(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var _d = o.unstable_scheduleCallback, Rd = o.unstable_cancelCallback, Pv = o.unstable_shouldYield, _v = o.unstable_requestPaint, lt = o.unstable_now, Rv = o.unstable_getCurrentPriorityLevel, sl = o.unstable_ImmediatePriority, Ad = o.unstable_UserBlockingPriority, eo = o.unstable_NormalPriority, Av = o.unstable_LowPriority, Td = o.unstable_IdlePriority, to = null, jn = null;
  function Tv(e) {
    if (jn && typeof jn.onCommitFiberRoot == "function") try {
      jn.onCommitFiberRoot(to, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var on = Math.clz32 ? Math.clz32 : Ov, Dv = Math.log, Mv = Math.LN2;
  function Ov(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Dv(e) / Mv | 0) | 0;
  }
  var no = 64, ro = 4194304;
  function ta(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function so(e, t) {
    var s = e.pendingLanes;
    if (s === 0) return 0;
    var l = 0, d = e.suspendedLanes, h = e.pingedLanes, y = s & 268435455;
    if (y !== 0) {
      var k = y & ~d;
      k !== 0 ? l = ta(k) : (h &= y, h !== 0 && (l = ta(h)));
    } else y = s & ~d, y !== 0 ? l = ta(y) : h !== 0 && (l = ta(h));
    if (l === 0) return 0;
    if (t !== 0 && t !== l && (t & d) === 0 && (d = l & -l, h = t & -t, d >= h || d === 16 && (h & 4194240) !== 0)) return t;
    if ((l & 4) !== 0 && (l |= s & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= l; 0 < t; ) s = 31 - on(t), d = 1 << s, l |= e[s], t &= ~d;
    return l;
  }
  function Fv(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Lv(e, t) {
    for (var s = e.suspendedLanes, l = e.pingedLanes, d = e.expirationTimes, h = e.pendingLanes; 0 < h; ) {
      var y = 31 - on(h), k = 1 << y, A = d[y];
      A === -1 ? ((k & s) === 0 || (k & l) !== 0) && (d[y] = Fv(k, t)) : A <= t && (e.expiredLanes |= k), h &= ~k;
    }
  }
  function al(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Dd() {
    var e = no;
    return no <<= 1, (no & 4194240) === 0 && (no = 64), e;
  }
  function ol(e) {
    for (var t = [], s = 0; 31 > s; s++) t.push(e);
    return t;
  }
  function na(e, t, s) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - on(t), e[t] = s;
  }
  function Iv(e, t) {
    var s = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var l = e.eventTimes;
    for (e = e.expirationTimes; 0 < s; ) {
      var d = 31 - on(s), h = 1 << d;
      t[d] = 0, l[d] = -1, e[d] = -1, s &= ~h;
    }
  }
  function il(e, t) {
    var s = e.entangledLanes |= t;
    for (e = e.entanglements; s; ) {
      var l = 31 - on(s), d = 1 << l;
      d & t | e[l] & t && (e[l] |= t), s &= ~d;
    }
  }
  var Ge = 0;
  function Md(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Od, ll, Fd, Ld, Id, cl = !1, ao = [], Zn = null, Jn = null, er = null, ra = /* @__PURE__ */ new Map(), sa = /* @__PURE__ */ new Map(), tr = [], zv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function zd(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Zn = null;
        break;
      case "dragenter":
      case "dragleave":
        Jn = null;
        break;
      case "mouseover":
      case "mouseout":
        er = null;
        break;
      case "pointerover":
      case "pointerout":
        ra.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        sa.delete(t.pointerId);
    }
  }
  function aa(e, t, s, l, d, h) {
    return e === null || e.nativeEvent !== h ? (e = { blockedOn: t, domEventName: s, eventSystemFlags: l, nativeEvent: h, targetContainers: [d] }, t !== null && (t = ya(t), t !== null && ll(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, d !== null && t.indexOf(d) === -1 && t.push(d), e);
  }
  function Vv(e, t, s, l, d) {
    switch (t) {
      case "focusin":
        return Zn = aa(Zn, e, t, s, l, d), !0;
      case "dragenter":
        return Jn = aa(Jn, e, t, s, l, d), !0;
      case "mouseover":
        return er = aa(er, e, t, s, l, d), !0;
      case "pointerover":
        var h = d.pointerId;
        return ra.set(h, aa(ra.get(h) || null, e, t, s, l, d)), !0;
      case "gotpointercapture":
        return h = d.pointerId, sa.set(h, aa(sa.get(h) || null, e, t, s, l, d)), !0;
    }
    return !1;
  }
  function Vd(e) {
    var t = Er(e.target);
    if (t !== null) {
      var s = kr(t);
      if (s !== null) {
        if (t = s.tag, t === 13) {
          if (t = Cd(s), t !== null) {
            e.blockedOn = t, Id(e.priority, function() {
              Fd(s);
            });
            return;
          }
        } else if (t === 3 && s.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function oo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var s = dl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (s === null) {
        s = e.nativeEvent;
        var l = new s.constructor(s.type, s);
        ts = l, s.target.dispatchEvent(l), ts = null;
      } else return t = ya(s), t !== null && ll(t), e.blockedOn = s, !1;
      t.shift();
    }
    return !0;
  }
  function $d(e, t, s) {
    oo(e) && s.delete(t);
  }
  function $v() {
    cl = !1, Zn !== null && oo(Zn) && (Zn = null), Jn !== null && oo(Jn) && (Jn = null), er !== null && oo(er) && (er = null), ra.forEach($d), sa.forEach($d);
  }
  function oa(e, t) {
    e.blockedOn === t && (e.blockedOn = null, cl || (cl = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, $v)));
  }
  function ia(e) {
    function t(d) {
      return oa(d, e);
    }
    if (0 < ao.length) {
      oa(ao[0], e);
      for (var s = 1; s < ao.length; s++) {
        var l = ao[s];
        l.blockedOn === e && (l.blockedOn = null);
      }
    }
    for (Zn !== null && oa(Zn, e), Jn !== null && oa(Jn, e), er !== null && oa(er, e), ra.forEach(t), sa.forEach(t), s = 0; s < tr.length; s++) l = tr[s], l.blockedOn === e && (l.blockedOn = null);
    for (; 0 < tr.length && (s = tr[0], s.blockedOn === null); ) Vd(s), s.blockedOn === null && tr.shift();
  }
  var ss = F.ReactCurrentBatchConfig, io = !0;
  function Bv(e, t, s, l) {
    var d = Ge, h = ss.transition;
    ss.transition = null;
    try {
      Ge = 1, ul(e, t, s, l);
    } finally {
      Ge = d, ss.transition = h;
    }
  }
  function Uv(e, t, s, l) {
    var d = Ge, h = ss.transition;
    ss.transition = null;
    try {
      Ge = 4, ul(e, t, s, l);
    } finally {
      Ge = d, ss.transition = h;
    }
  }
  function ul(e, t, s, l) {
    if (io) {
      var d = dl(e, t, s, l);
      if (d === null) Pl(e, t, l, lo, s), zd(e, l);
      else if (Vv(d, e, t, s, l)) l.stopPropagation();
      else if (zd(e, l), t & 4 && -1 < zv.indexOf(e)) {
        for (; d !== null; ) {
          var h = ya(d);
          if (h !== null && Od(h), h = dl(e, t, s, l), h === null && Pl(e, t, l, lo, s), h === d) break;
          d = h;
        }
        d !== null && l.stopPropagation();
      } else Pl(e, t, l, null, s);
    }
  }
  var lo = null;
  function dl(e, t, s, l) {
    if (lo = null, e = Ji(l), e = Er(e), e !== null) if (t = kr(e), t === null) e = null;
    else if (s = t.tag, s === 13) {
      if (e = Cd(t), e !== null) return e;
      e = null;
    } else if (s === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return lo = e, null;
  }
  function Bd(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Rv()) {
          case sl:
            return 1;
          case Ad:
            return 4;
          case eo:
          case Av:
            return 16;
          case Td:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var nr = null, fl = null, co = null;
  function Ud() {
    if (co) return co;
    var e, t = fl, s = t.length, l, d = "value" in nr ? nr.value : nr.textContent, h = d.length;
    for (e = 0; e < s && t[e] === d[e]; e++) ;
    var y = s - e;
    for (l = 1; l <= y && t[s - l] === d[h - l]; l++) ;
    return co = d.slice(e, 1 < l ? 1 - l : void 0);
  }
  function uo(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function fo() {
    return !0;
  }
  function Wd() {
    return !1;
  }
  function Bt(e) {
    function t(s, l, d, h, y) {
      this._reactName = s, this._targetInst = d, this.type = l, this.nativeEvent = h, this.target = y, this.currentTarget = null;
      for (var k in e) e.hasOwnProperty(k) && (s = e[k], this[k] = s ? s(h) : h[k]);
      return this.isDefaultPrevented = (h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1) ? fo : Wd, this.isPropagationStopped = Wd, this;
    }
    return G(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var s = this.nativeEvent;
      s && (s.preventDefault ? s.preventDefault() : typeof s.returnValue != "unknown" && (s.returnValue = !1), this.isDefaultPrevented = fo);
    }, stopPropagation: function() {
      var s = this.nativeEvent;
      s && (s.stopPropagation ? s.stopPropagation() : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0), this.isPropagationStopped = fo);
    }, persist: function() {
    }, isPersistent: fo }), t;
  }
  var as = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ml = Bt(as), la = G({}, as, { view: 0, detail: 0 }), Wv = Bt(la), hl, pl, ca, mo = G({}, la, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: xl, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== ca && (ca && e.type === "mousemove" ? (hl = e.screenX - ca.screenX, pl = e.screenY - ca.screenY) : pl = hl = 0, ca = e), hl);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : pl;
  } }), Hd = Bt(mo), Hv = G({}, mo, { dataTransfer: 0 }), Gv = Bt(Hv), qv = G({}, la, { relatedTarget: 0 }), gl = Bt(qv), Yv = G({}, as, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Kv = Bt(Yv), Qv = G({}, as, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Xv = Bt(Qv), Zv = G({}, as, { data: 0 }), Gd = Bt(Zv), Jv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, ey = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, ty = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function ny(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = ty[e]) ? !!t[e] : !1;
  }
  function xl() {
    return ny;
  }
  var ry = G({}, la, { key: function(e) {
    if (e.key) {
      var t = Jv[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = uo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ey[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: xl, charCode: function(e) {
    return e.type === "keypress" ? uo(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? uo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), sy = Bt(ry), ay = G({}, mo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), qd = Bt(ay), oy = G({}, la, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: xl }), iy = Bt(oy), ly = G({}, as, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), cy = Bt(ly), uy = G({}, mo, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), dy = Bt(uy), fy = [9, 13, 27, 32], vl = m && "CompositionEvent" in window, ua = null;
  m && "documentMode" in document && (ua = document.documentMode);
  var my = m && "TextEvent" in window && !ua, Yd = m && (!vl || ua && 8 < ua && 11 >= ua), Kd = " ", Qd = !1;
  function Xd(e, t) {
    switch (e) {
      case "keyup":
        return fy.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Zd(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var os = !1;
  function hy(e, t) {
    switch (e) {
      case "compositionend":
        return Zd(t);
      case "keypress":
        return t.which !== 32 ? null : (Qd = !0, Kd);
      case "textInput":
        return e = t.data, e === Kd && Qd ? null : e;
      default:
        return null;
    }
  }
  function py(e, t) {
    if (os) return e === "compositionend" || !vl && Xd(e, t) ? (e = Ud(), co = fl = nr = null, os = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Yd && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var gy = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Jd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!gy[e.type] : t === "textarea";
  }
  function ef(e, t, s, l) {
    wd(l), t = vo(t, "onChange"), 0 < t.length && (s = new ml("onChange", "change", null, s, l), e.push({ event: s, listeners: t }));
  }
  var da = null, fa = null;
  function xy(e) {
    yf(e, 0);
  }
  function ho(e) {
    var t = ds(e);
    if (Fe(t)) return e;
  }
  function vy(e, t) {
    if (e === "change") return t;
  }
  var tf = !1;
  if (m) {
    var yl;
    if (m) {
      var wl = "oninput" in document;
      if (!wl) {
        var nf = document.createElement("div");
        nf.setAttribute("oninput", "return;"), wl = typeof nf.oninput == "function";
      }
      yl = wl;
    } else yl = !1;
    tf = yl && (!document.documentMode || 9 < document.documentMode);
  }
  function rf() {
    da && (da.detachEvent("onpropertychange", sf), fa = da = null);
  }
  function sf(e) {
    if (e.propertyName === "value" && ho(fa)) {
      var t = [];
      ef(t, fa, e, Ji(e)), Sd(xy, t);
    }
  }
  function yy(e, t, s) {
    e === "focusin" ? (rf(), da = t, fa = s, da.attachEvent("onpropertychange", sf)) : e === "focusout" && rf();
  }
  function wy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return ho(fa);
  }
  function by(e, t) {
    if (e === "click") return ho(t);
  }
  function Ny(e, t) {
    if (e === "input" || e === "change") return ho(t);
  }
  function jy(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var ln = typeof Object.is == "function" ? Object.is : jy;
  function ma(e, t) {
    if (ln(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var s = Object.keys(e), l = Object.keys(t);
    if (s.length !== l.length) return !1;
    for (l = 0; l < s.length; l++) {
      var d = s[l];
      if (!p.call(t, d) || !ln(e[d], t[d])) return !1;
    }
    return !0;
  }
  function af(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function of(e, t) {
    var s = af(e);
    e = 0;
    for (var l; s; ) {
      if (s.nodeType === 3) {
        if (l = e + s.textContent.length, e <= t && l >= t) return { node: s, offset: t - e };
        e = l;
      }
      e: {
        for (; s; ) {
          if (s.nextSibling) {
            s = s.nextSibling;
            break e;
          }
          s = s.parentNode;
        }
        s = void 0;
      }
      s = af(s);
    }
  }
  function lf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? lf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function cf() {
    for (var e = window, t = ft(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var s = typeof t.contentWindow.location.href == "string";
      } catch {
        s = !1;
      }
      if (s) e = t.contentWindow;
      else break;
      t = ft(e.document);
    }
    return t;
  }
  function bl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Sy(e) {
    var t = cf(), s = e.focusedElem, l = e.selectionRange;
    if (t !== s && s && s.ownerDocument && lf(s.ownerDocument.documentElement, s)) {
      if (l !== null && bl(s)) {
        if (t = l.start, e = l.end, e === void 0 && (e = t), "selectionStart" in s) s.selectionStart = t, s.selectionEnd = Math.min(e, s.value.length);
        else if (e = (t = s.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var d = s.textContent.length, h = Math.min(l.start, d);
          l = l.end === void 0 ? h : Math.min(l.end, d), !e.extend && h > l && (d = l, l = h, h = d), d = of(s, h);
          var y = of(
            s,
            l
          );
          d && y && (e.rangeCount !== 1 || e.anchorNode !== d.node || e.anchorOffset !== d.offset || e.focusNode !== y.node || e.focusOffset !== y.offset) && (t = t.createRange(), t.setStart(d.node, d.offset), e.removeAllRanges(), h > l ? (e.addRange(t), e.extend(y.node, y.offset)) : (t.setEnd(y.node, y.offset), e.addRange(t)));
        }
      }
      for (t = [], e = s; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof s.focus == "function" && s.focus(), s = 0; s < t.length; s++) e = t[s], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Cy = m && "documentMode" in document && 11 >= document.documentMode, is = null, Nl = null, ha = null, jl = !1;
  function uf(e, t, s) {
    var l = s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    jl || is == null || is !== ft(l) || (l = is, "selectionStart" in l && bl(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = { anchorNode: l.anchorNode, anchorOffset: l.anchorOffset, focusNode: l.focusNode, focusOffset: l.focusOffset }), ha && ma(ha, l) || (ha = l, l = vo(Nl, "onSelect"), 0 < l.length && (t = new ml("onSelect", "select", null, t, s), e.push({ event: t, listeners: l }), t.target = is)));
  }
  function po(e, t) {
    var s = {};
    return s[e.toLowerCase()] = t.toLowerCase(), s["Webkit" + e] = "webkit" + t, s["Moz" + e] = "moz" + t, s;
  }
  var ls = { animationend: po("Animation", "AnimationEnd"), animationiteration: po("Animation", "AnimationIteration"), animationstart: po("Animation", "AnimationStart"), transitionend: po("Transition", "TransitionEnd") }, Sl = {}, df = {};
  m && (df = document.createElement("div").style, "AnimationEvent" in window || (delete ls.animationend.animation, delete ls.animationiteration.animation, delete ls.animationstart.animation), "TransitionEvent" in window || delete ls.transitionend.transition);
  function go(e) {
    if (Sl[e]) return Sl[e];
    if (!ls[e]) return e;
    var t = ls[e], s;
    for (s in t) if (t.hasOwnProperty(s) && s in df) return Sl[e] = t[s];
    return e;
  }
  var ff = go("animationend"), mf = go("animationiteration"), hf = go("animationstart"), pf = go("transitionend"), gf = /* @__PURE__ */ new Map(), xf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function rr(e, t) {
    gf.set(e, t), u(t, [e]);
  }
  for (var Cl = 0; Cl < xf.length; Cl++) {
    var kl = xf[Cl], ky = kl.toLowerCase(), Ey = kl[0].toUpperCase() + kl.slice(1);
    rr(ky, "on" + Ey);
  }
  rr(ff, "onAnimationEnd"), rr(mf, "onAnimationIteration"), rr(hf, "onAnimationStart"), rr("dblclick", "onDoubleClick"), rr("focusin", "onFocus"), rr("focusout", "onBlur"), rr(pf, "onTransitionEnd"), f("onMouseEnter", ["mouseout", "mouseover"]), f("onMouseLeave", ["mouseout", "mouseover"]), f("onPointerEnter", ["pointerout", "pointerover"]), f("onPointerLeave", ["pointerout", "pointerover"]), u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var pa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Py = new Set("cancel close invalid load scroll toggle".split(" ").concat(pa));
  function vf(e, t, s) {
    var l = e.type || "unknown-event";
    e.currentTarget = s, kv(l, t, void 0, e), e.currentTarget = null;
  }
  function yf(e, t) {
    t = (t & 4) !== 0;
    for (var s = 0; s < e.length; s++) {
      var l = e[s], d = l.event;
      l = l.listeners;
      e: {
        var h = void 0;
        if (t) for (var y = l.length - 1; 0 <= y; y--) {
          var k = l[y], A = k.instance, $ = k.currentTarget;
          if (k = k.listener, A !== h && d.isPropagationStopped()) break e;
          vf(d, k, $), h = A;
        }
        else for (y = 0; y < l.length; y++) {
          if (k = l[y], A = k.instance, $ = k.currentTarget, k = k.listener, A !== h && d.isPropagationStopped()) break e;
          vf(d, k, $), h = A;
        }
      }
    }
    if (Ja) throw e = rl, Ja = !1, rl = null, e;
  }
  function Je(e, t) {
    var s = t[Ml];
    s === void 0 && (s = t[Ml] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    s.has(l) || (wf(t, e, 2, !1), s.add(l));
  }
  function El(e, t, s) {
    var l = 0;
    t && (l |= 4), wf(s, e, l, t);
  }
  var xo = "_reactListening" + Math.random().toString(36).slice(2);
  function ga(e) {
    if (!e[xo]) {
      e[xo] = !0, i.forEach(function(s) {
        s !== "selectionchange" && (Py.has(s) || El(s, !1, e), El(s, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[xo] || (t[xo] = !0, El("selectionchange", !1, t));
    }
  }
  function wf(e, t, s, l) {
    switch (Bd(t)) {
      case 1:
        var d = Bv;
        break;
      case 4:
        d = Uv;
        break;
      default:
        d = ul;
    }
    s = d.bind(null, t, s, e), d = void 0, !nl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (d = !0), l ? d !== void 0 ? e.addEventListener(t, s, { capture: !0, passive: d }) : e.addEventListener(t, s, !0) : d !== void 0 ? e.addEventListener(t, s, { passive: d }) : e.addEventListener(t, s, !1);
  }
  function Pl(e, t, s, l, d) {
    var h = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null) e: for (; ; ) {
      if (l === null) return;
      var y = l.tag;
      if (y === 3 || y === 4) {
        var k = l.stateNode.containerInfo;
        if (k === d || k.nodeType === 8 && k.parentNode === d) break;
        if (y === 4) for (y = l.return; y !== null; ) {
          var A = y.tag;
          if ((A === 3 || A === 4) && (A = y.stateNode.containerInfo, A === d || A.nodeType === 8 && A.parentNode === d)) return;
          y = y.return;
        }
        for (; k !== null; ) {
          if (y = Er(k), y === null) return;
          if (A = y.tag, A === 5 || A === 6) {
            l = h = y;
            continue e;
          }
          k = k.parentNode;
        }
      }
      l = l.return;
    }
    Sd(function() {
      var $ = h, Z = Ji(s), ee = [];
      e: {
        var Q = gf.get(e);
        if (Q !== void 0) {
          var pe = ml, we = e;
          switch (e) {
            case "keypress":
              if (uo(s) === 0) break e;
            case "keydown":
            case "keyup":
              pe = sy;
              break;
            case "focusin":
              we = "focus", pe = gl;
              break;
            case "focusout":
              we = "blur", pe = gl;
              break;
            case "beforeblur":
            case "afterblur":
              pe = gl;
              break;
            case "click":
              if (s.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              pe = Hd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              pe = Gv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              pe = iy;
              break;
            case ff:
            case mf:
            case hf:
              pe = Kv;
              break;
            case pf:
              pe = cy;
              break;
            case "scroll":
              pe = Wv;
              break;
            case "wheel":
              pe = dy;
              break;
            case "copy":
            case "cut":
            case "paste":
              pe = Xv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              pe = qd;
          }
          var Se = (t & 4) !== 0, ct = !Se && e === "scroll", L = Se ? Q !== null ? Q + "Capture" : null : Q;
          Se = [];
          for (var T = $, I; T !== null; ) {
            I = T;
            var ne = I.stateNode;
            if (I.tag === 5 && ne !== null && (I = ne, L !== null && (ne = Zs(T, L), ne != null && Se.push(xa(T, ne, I)))), ct) break;
            T = T.return;
          }
          0 < Se.length && (Q = new pe(Q, we, null, s, Z), ee.push({ event: Q, listeners: Se }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (Q = e === "mouseover" || e === "pointerover", pe = e === "mouseout" || e === "pointerout", Q && s !== ts && (we = s.relatedTarget || s.fromElement) && (Er(we) || we[Fn])) break e;
          if ((pe || Q) && (Q = Z.window === Z ? Z : (Q = Z.ownerDocument) ? Q.defaultView || Q.parentWindow : window, pe ? (we = s.relatedTarget || s.toElement, pe = $, we = we ? Er(we) : null, we !== null && (ct = kr(we), we !== ct || we.tag !== 5 && we.tag !== 6) && (we = null)) : (pe = null, we = $), pe !== we)) {
            if (Se = Hd, ne = "onMouseLeave", L = "onMouseEnter", T = "mouse", (e === "pointerout" || e === "pointerover") && (Se = qd, ne = "onPointerLeave", L = "onPointerEnter", T = "pointer"), ct = pe == null ? Q : ds(pe), I = we == null ? Q : ds(we), Q = new Se(ne, T + "leave", pe, s, Z), Q.target = ct, Q.relatedTarget = I, ne = null, Er(Z) === $ && (Se = new Se(L, T + "enter", we, s, Z), Se.target = I, Se.relatedTarget = ct, ne = Se), ct = ne, pe && we) t: {
              for (Se = pe, L = we, T = 0, I = Se; I; I = cs(I)) T++;
              for (I = 0, ne = L; ne; ne = cs(ne)) I++;
              for (; 0 < T - I; ) Se = cs(Se), T--;
              for (; 0 < I - T; ) L = cs(L), I--;
              for (; T--; ) {
                if (Se === L || L !== null && Se === L.alternate) break t;
                Se = cs(Se), L = cs(L);
              }
              Se = null;
            }
            else Se = null;
            pe !== null && bf(ee, Q, pe, Se, !1), we !== null && ct !== null && bf(ee, ct, we, Se, !0);
          }
        }
        e: {
          if (Q = $ ? ds($) : window, pe = Q.nodeName && Q.nodeName.toLowerCase(), pe === "select" || pe === "input" && Q.type === "file") var ke = vy;
          else if (Jd(Q)) if (tf) ke = Ny;
          else {
            ke = wy;
            var _e = yy;
          }
          else (pe = Q.nodeName) && pe.toLowerCase() === "input" && (Q.type === "checkbox" || Q.type === "radio") && (ke = by);
          if (ke && (ke = ke(e, $))) {
            ef(ee, ke, s, Z);
            break e;
          }
          _e && _e(e, Q, $), e === "focusout" && (_e = Q._wrapperState) && _e.controlled && Q.type === "number" && Nn(Q, "number", Q.value);
        }
        switch (_e = $ ? ds($) : window, e) {
          case "focusin":
            (Jd(_e) || _e.contentEditable === "true") && (is = _e, Nl = $, ha = null);
            break;
          case "focusout":
            ha = Nl = is = null;
            break;
          case "mousedown":
            jl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            jl = !1, uf(ee, s, Z);
            break;
          case "selectionchange":
            if (Cy) break;
          case "keydown":
          case "keyup":
            uf(ee, s, Z);
        }
        var Re;
        if (vl) e: {
          switch (e) {
            case "compositionstart":
              var De = "onCompositionStart";
              break e;
            case "compositionend":
              De = "onCompositionEnd";
              break e;
            case "compositionupdate":
              De = "onCompositionUpdate";
              break e;
          }
          De = void 0;
        }
        else os ? Xd(e, s) && (De = "onCompositionEnd") : e === "keydown" && s.keyCode === 229 && (De = "onCompositionStart");
        De && (Yd && s.locale !== "ko" && (os || De !== "onCompositionStart" ? De === "onCompositionEnd" && os && (Re = Ud()) : (nr = Z, fl = "value" in nr ? nr.value : nr.textContent, os = !0)), _e = vo($, De), 0 < _e.length && (De = new Gd(De, e, null, s, Z), ee.push({ event: De, listeners: _e }), Re ? De.data = Re : (Re = Zd(s), Re !== null && (De.data = Re)))), (Re = my ? hy(e, s) : py(e, s)) && ($ = vo($, "onBeforeInput"), 0 < $.length && (Z = new Gd("onBeforeInput", "beforeinput", null, s, Z), ee.push({ event: Z, listeners: $ }), Z.data = Re));
      }
      yf(ee, t);
    });
  }
  function xa(e, t, s) {
    return { instance: e, listener: t, currentTarget: s };
  }
  function vo(e, t) {
    for (var s = t + "Capture", l = []; e !== null; ) {
      var d = e, h = d.stateNode;
      d.tag === 5 && h !== null && (d = h, h = Zs(e, s), h != null && l.unshift(xa(e, h, d)), h = Zs(e, t), h != null && l.push(xa(e, h, d))), e = e.return;
    }
    return l;
  }
  function cs(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function bf(e, t, s, l, d) {
    for (var h = t._reactName, y = []; s !== null && s !== l; ) {
      var k = s, A = k.alternate, $ = k.stateNode;
      if (A !== null && A === l) break;
      k.tag === 5 && $ !== null && (k = $, d ? (A = Zs(s, h), A != null && y.unshift(xa(s, A, k))) : d || (A = Zs(s, h), A != null && y.push(xa(s, A, k)))), s = s.return;
    }
    y.length !== 0 && e.push({ event: t, listeners: y });
  }
  var _y = /\r\n?/g, Ry = /\u0000|\uFFFD/g;
  function Nf(e) {
    return (typeof e == "string" ? e : "" + e).replace(_y, `
`).replace(Ry, "");
  }
  function yo(e, t, s) {
    if (t = Nf(t), Nf(e) !== t && s) throw Error(a(425));
  }
  function wo() {
  }
  var _l = null, Rl = null;
  function Al(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Tl = typeof setTimeout == "function" ? setTimeout : void 0, Ay = typeof clearTimeout == "function" ? clearTimeout : void 0, jf = typeof Promise == "function" ? Promise : void 0, Ty = typeof queueMicrotask == "function" ? queueMicrotask : typeof jf < "u" ? function(e) {
    return jf.resolve(null).then(e).catch(Dy);
  } : Tl;
  function Dy(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Dl(e, t) {
    var s = t, l = 0;
    do {
      var d = s.nextSibling;
      if (e.removeChild(s), d && d.nodeType === 8) if (s = d.data, s === "/$") {
        if (l === 0) {
          e.removeChild(d), ia(t);
          return;
        }
        l--;
      } else s !== "$" && s !== "$?" && s !== "$!" || l++;
      s = d;
    } while (s);
    ia(t);
  }
  function sr(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Sf(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var s = e.data;
        if (s === "$" || s === "$!" || s === "$?") {
          if (t === 0) return e;
          t--;
        } else s === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var us = Math.random().toString(36).slice(2), Sn = "__reactFiber$" + us, va = "__reactProps$" + us, Fn = "__reactContainer$" + us, Ml = "__reactEvents$" + us, My = "__reactListeners$" + us, Oy = "__reactHandles$" + us;
  function Er(e) {
    var t = e[Sn];
    if (t) return t;
    for (var s = e.parentNode; s; ) {
      if (t = s[Fn] || s[Sn]) {
        if (s = t.alternate, t.child !== null || s !== null && s.child !== null) for (e = Sf(e); e !== null; ) {
          if (s = e[Sn]) return s;
          e = Sf(e);
        }
        return t;
      }
      e = s, s = e.parentNode;
    }
    return null;
  }
  function ya(e) {
    return e = e[Sn] || e[Fn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function ds(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(a(33));
  }
  function bo(e) {
    return e[va] || null;
  }
  var Ol = [], fs = -1;
  function ar(e) {
    return { current: e };
  }
  function et(e) {
    0 > fs || (e.current = Ol[fs], Ol[fs] = null, fs--);
  }
  function Ze(e, t) {
    fs++, Ol[fs] = e.current, e.current = t;
  }
  var or = {}, kt = ar(or), Ft = ar(!1), Pr = or;
  function ms(e, t) {
    var s = e.type.contextTypes;
    if (!s) return or;
    var l = e.stateNode;
    if (l && l.__reactInternalMemoizedUnmaskedChildContext === t) return l.__reactInternalMemoizedMaskedChildContext;
    var d = {}, h;
    for (h in s) d[h] = t[h];
    return l && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = d), d;
  }
  function Lt(e) {
    return e = e.childContextTypes, e != null;
  }
  function No() {
    et(Ft), et(kt);
  }
  function Cf(e, t, s) {
    if (kt.current !== or) throw Error(a(168));
    Ze(kt, t), Ze(Ft, s);
  }
  function kf(e, t, s) {
    var l = e.stateNode;
    if (t = t.childContextTypes, typeof l.getChildContext != "function") return s;
    l = l.getChildContext();
    for (var d in l) if (!(d in t)) throw Error(a(108, K(e) || "Unknown", d));
    return G({}, s, l);
  }
  function jo(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || or, Pr = kt.current, Ze(kt, e), Ze(Ft, Ft.current), !0;
  }
  function Ef(e, t, s) {
    var l = e.stateNode;
    if (!l) throw Error(a(169));
    s ? (e = kf(e, t, Pr), l.__reactInternalMemoizedMergedChildContext = e, et(Ft), et(kt), Ze(kt, e)) : et(Ft), Ze(Ft, s);
  }
  var Ln = null, So = !1, Fl = !1;
  function Pf(e) {
    Ln === null ? Ln = [e] : Ln.push(e);
  }
  function Fy(e) {
    So = !0, Pf(e);
  }
  function ir() {
    if (!Fl && Ln !== null) {
      Fl = !0;
      var e = 0, t = Ge;
      try {
        var s = Ln;
        for (Ge = 1; e < s.length; e++) {
          var l = s[e];
          do
            l = l(!0);
          while (l !== null);
        }
        Ln = null, So = !1;
      } catch (d) {
        throw Ln !== null && (Ln = Ln.slice(e + 1)), _d(sl, ir), d;
      } finally {
        Ge = t, Fl = !1;
      }
    }
    return null;
  }
  var hs = [], ps = 0, Co = null, ko = 0, Zt = [], Jt = 0, _r = null, In = 1, zn = "";
  function Rr(e, t) {
    hs[ps++] = ko, hs[ps++] = Co, Co = e, ko = t;
  }
  function _f(e, t, s) {
    Zt[Jt++] = In, Zt[Jt++] = zn, Zt[Jt++] = _r, _r = e;
    var l = In;
    e = zn;
    var d = 32 - on(l) - 1;
    l &= ~(1 << d), s += 1;
    var h = 32 - on(t) + d;
    if (30 < h) {
      var y = d - d % 5;
      h = (l & (1 << y) - 1).toString(32), l >>= y, d -= y, In = 1 << 32 - on(t) + d | s << d | l, zn = h + e;
    } else In = 1 << h | s << d | l, zn = e;
  }
  function Ll(e) {
    e.return !== null && (Rr(e, 1), _f(e, 1, 0));
  }
  function Il(e) {
    for (; e === Co; ) Co = hs[--ps], hs[ps] = null, ko = hs[--ps], hs[ps] = null;
    for (; e === _r; ) _r = Zt[--Jt], Zt[Jt] = null, zn = Zt[--Jt], Zt[Jt] = null, In = Zt[--Jt], Zt[Jt] = null;
  }
  var Ut = null, Wt = null, tt = !1, cn = null;
  function Rf(e, t) {
    var s = rn(5, null, null, 0);
    s.elementType = "DELETED", s.stateNode = t, s.return = e, t = e.deletions, t === null ? (e.deletions = [s], e.flags |= 16) : t.push(s);
  }
  function Af(e, t) {
    switch (e.tag) {
      case 5:
        var s = e.type;
        return t = t.nodeType !== 1 || s.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ut = e, Wt = sr(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ut = e, Wt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (s = _r !== null ? { id: In, overflow: zn } : null, e.memoizedState = { dehydrated: t, treeContext: s, retryLane: 1073741824 }, s = rn(18, null, null, 0), s.stateNode = t, s.return = e, e.child = s, Ut = e, Wt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function zl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Vl(e) {
    if (tt) {
      var t = Wt;
      if (t) {
        var s = t;
        if (!Af(e, t)) {
          if (zl(e)) throw Error(a(418));
          t = sr(s.nextSibling);
          var l = Ut;
          t && Af(e, t) ? Rf(l, s) : (e.flags = e.flags & -4097 | 2, tt = !1, Ut = e);
        }
      } else {
        if (zl(e)) throw Error(a(418));
        e.flags = e.flags & -4097 | 2, tt = !1, Ut = e;
      }
    }
  }
  function Tf(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Ut = e;
  }
  function Eo(e) {
    if (e !== Ut) return !1;
    if (!tt) return Tf(e), tt = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Al(e.type, e.memoizedProps)), t && (t = Wt)) {
      if (zl(e)) throw Df(), Error(a(418));
      for (; t; ) Rf(e, t), t = sr(t.nextSibling);
    }
    if (Tf(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(a(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var s = e.data;
            if (s === "/$") {
              if (t === 0) {
                Wt = sr(e.nextSibling);
                break e;
              }
              t--;
            } else s !== "$" && s !== "$!" && s !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Wt = null;
      }
    } else Wt = Ut ? sr(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Df() {
    for (var e = Wt; e; ) e = sr(e.nextSibling);
  }
  function gs() {
    Wt = Ut = null, tt = !1;
  }
  function $l(e) {
    cn === null ? cn = [e] : cn.push(e);
  }
  var Ly = F.ReactCurrentBatchConfig;
  function wa(e, t, s) {
    if (e = s.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (s._owner) {
        if (s = s._owner, s) {
          if (s.tag !== 1) throw Error(a(309));
          var l = s.stateNode;
        }
        if (!l) throw Error(a(147, e));
        var d = l, h = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === h ? t.ref : (t = function(y) {
          var k = d.refs;
          y === null ? delete k[h] : k[h] = y;
        }, t._stringRef = h, t);
      }
      if (typeof e != "string") throw Error(a(284));
      if (!s._owner) throw Error(a(290, e));
    }
    return e;
  }
  function Po(e, t) {
    throw e = Object.prototype.toString.call(t), Error(a(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Mf(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Of(e) {
    function t(L, T) {
      if (e) {
        var I = L.deletions;
        I === null ? (L.deletions = [T], L.flags |= 16) : I.push(T);
      }
    }
    function s(L, T) {
      if (!e) return null;
      for (; T !== null; ) t(L, T), T = T.sibling;
      return null;
    }
    function l(L, T) {
      for (L = /* @__PURE__ */ new Map(); T !== null; ) T.key !== null ? L.set(T.key, T) : L.set(T.index, T), T = T.sibling;
      return L;
    }
    function d(L, T) {
      return L = pr(L, T), L.index = 0, L.sibling = null, L;
    }
    function h(L, T, I) {
      return L.index = I, e ? (I = L.alternate, I !== null ? (I = I.index, I < T ? (L.flags |= 2, T) : I) : (L.flags |= 2, T)) : (L.flags |= 1048576, T);
    }
    function y(L) {
      return e && L.alternate === null && (L.flags |= 2), L;
    }
    function k(L, T, I, ne) {
      return T === null || T.tag !== 6 ? (T = Tc(I, L.mode, ne), T.return = L, T) : (T = d(T, I), T.return = L, T);
    }
    function A(L, T, I, ne) {
      var ke = I.type;
      return ke === H ? Z(L, T, I.props.children, ne, I.key) : T !== null && (T.elementType === ke || typeof ke == "object" && ke !== null && ke.$$typeof === ae && Mf(ke) === T.type) ? (ne = d(T, I.props), ne.ref = wa(L, T, I), ne.return = L, ne) : (ne = Zo(I.type, I.key, I.props, null, L.mode, ne), ne.ref = wa(L, T, I), ne.return = L, ne);
    }
    function $(L, T, I, ne) {
      return T === null || T.tag !== 4 || T.stateNode.containerInfo !== I.containerInfo || T.stateNode.implementation !== I.implementation ? (T = Dc(I, L.mode, ne), T.return = L, T) : (T = d(T, I.children || []), T.return = L, T);
    }
    function Z(L, T, I, ne, ke) {
      return T === null || T.tag !== 7 ? (T = Ir(I, L.mode, ne, ke), T.return = L, T) : (T = d(T, I), T.return = L, T);
    }
    function ee(L, T, I) {
      if (typeof T == "string" && T !== "" || typeof T == "number") return T = Tc("" + T, L.mode, I), T.return = L, T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case D:
            return I = Zo(T.type, T.key, T.props, null, L.mode, I), I.ref = wa(L, null, T), I.return = L, I;
          case Y:
            return T = Dc(T, L.mode, I), T.return = L, T;
          case ae:
            var ne = T._init;
            return ee(L, ne(T._payload), I);
        }
        if (Xr(T) || U(T)) return T = Ir(T, L.mode, I, null), T.return = L, T;
        Po(L, T);
      }
      return null;
    }
    function Q(L, T, I, ne) {
      var ke = T !== null ? T.key : null;
      if (typeof I == "string" && I !== "" || typeof I == "number") return ke !== null ? null : k(L, T, "" + I, ne);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case D:
            return I.key === ke ? A(L, T, I, ne) : null;
          case Y:
            return I.key === ke ? $(L, T, I, ne) : null;
          case ae:
            return ke = I._init, Q(
              L,
              T,
              ke(I._payload),
              ne
            );
        }
        if (Xr(I) || U(I)) return ke !== null ? null : Z(L, T, I, ne, null);
        Po(L, I);
      }
      return null;
    }
    function pe(L, T, I, ne, ke) {
      if (typeof ne == "string" && ne !== "" || typeof ne == "number") return L = L.get(I) || null, k(T, L, "" + ne, ke);
      if (typeof ne == "object" && ne !== null) {
        switch (ne.$$typeof) {
          case D:
            return L = L.get(ne.key === null ? I : ne.key) || null, A(T, L, ne, ke);
          case Y:
            return L = L.get(ne.key === null ? I : ne.key) || null, $(T, L, ne, ke);
          case ae:
            var _e = ne._init;
            return pe(L, T, I, _e(ne._payload), ke);
        }
        if (Xr(ne) || U(ne)) return L = L.get(I) || null, Z(T, L, ne, ke, null);
        Po(T, ne);
      }
      return null;
    }
    function we(L, T, I, ne) {
      for (var ke = null, _e = null, Re = T, De = T = 0, wt = null; Re !== null && De < I.length; De++) {
        Re.index > De ? (wt = Re, Re = null) : wt = Re.sibling;
        var He = Q(L, Re, I[De], ne);
        if (He === null) {
          Re === null && (Re = wt);
          break;
        }
        e && Re && He.alternate === null && t(L, Re), T = h(He, T, De), _e === null ? ke = He : _e.sibling = He, _e = He, Re = wt;
      }
      if (De === I.length) return s(L, Re), tt && Rr(L, De), ke;
      if (Re === null) {
        for (; De < I.length; De++) Re = ee(L, I[De], ne), Re !== null && (T = h(Re, T, De), _e === null ? ke = Re : _e.sibling = Re, _e = Re);
        return tt && Rr(L, De), ke;
      }
      for (Re = l(L, Re); De < I.length; De++) wt = pe(Re, L, De, I[De], ne), wt !== null && (e && wt.alternate !== null && Re.delete(wt.key === null ? De : wt.key), T = h(wt, T, De), _e === null ? ke = wt : _e.sibling = wt, _e = wt);
      return e && Re.forEach(function(gr) {
        return t(L, gr);
      }), tt && Rr(L, De), ke;
    }
    function Se(L, T, I, ne) {
      var ke = U(I);
      if (typeof ke != "function") throw Error(a(150));
      if (I = ke.call(I), I == null) throw Error(a(151));
      for (var _e = ke = null, Re = T, De = T = 0, wt = null, He = I.next(); Re !== null && !He.done; De++, He = I.next()) {
        Re.index > De ? (wt = Re, Re = null) : wt = Re.sibling;
        var gr = Q(L, Re, He.value, ne);
        if (gr === null) {
          Re === null && (Re = wt);
          break;
        }
        e && Re && gr.alternate === null && t(L, Re), T = h(gr, T, De), _e === null ? ke = gr : _e.sibling = gr, _e = gr, Re = wt;
      }
      if (He.done) return s(
        L,
        Re
      ), tt && Rr(L, De), ke;
      if (Re === null) {
        for (; !He.done; De++, He = I.next()) He = ee(L, He.value, ne), He !== null && (T = h(He, T, De), _e === null ? ke = He : _e.sibling = He, _e = He);
        return tt && Rr(L, De), ke;
      }
      for (Re = l(L, Re); !He.done; De++, He = I.next()) He = pe(Re, L, De, He.value, ne), He !== null && (e && He.alternate !== null && Re.delete(He.key === null ? De : He.key), T = h(He, T, De), _e === null ? ke = He : _e.sibling = He, _e = He);
      return e && Re.forEach(function(g0) {
        return t(L, g0);
      }), tt && Rr(L, De), ke;
    }
    function ct(L, T, I, ne) {
      if (typeof I == "object" && I !== null && I.type === H && I.key === null && (I = I.props.children), typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case D:
            e: {
              for (var ke = I.key, _e = T; _e !== null; ) {
                if (_e.key === ke) {
                  if (ke = I.type, ke === H) {
                    if (_e.tag === 7) {
                      s(L, _e.sibling), T = d(_e, I.props.children), T.return = L, L = T;
                      break e;
                    }
                  } else if (_e.elementType === ke || typeof ke == "object" && ke !== null && ke.$$typeof === ae && Mf(ke) === _e.type) {
                    s(L, _e.sibling), T = d(_e, I.props), T.ref = wa(L, _e, I), T.return = L, L = T;
                    break e;
                  }
                  s(L, _e);
                  break;
                } else t(L, _e);
                _e = _e.sibling;
              }
              I.type === H ? (T = Ir(I.props.children, L.mode, ne, I.key), T.return = L, L = T) : (ne = Zo(I.type, I.key, I.props, null, L.mode, ne), ne.ref = wa(L, T, I), ne.return = L, L = ne);
            }
            return y(L);
          case Y:
            e: {
              for (_e = I.key; T !== null; ) {
                if (T.key === _e) if (T.tag === 4 && T.stateNode.containerInfo === I.containerInfo && T.stateNode.implementation === I.implementation) {
                  s(L, T.sibling), T = d(T, I.children || []), T.return = L, L = T;
                  break e;
                } else {
                  s(L, T);
                  break;
                }
                else t(L, T);
                T = T.sibling;
              }
              T = Dc(I, L.mode, ne), T.return = L, L = T;
            }
            return y(L);
          case ae:
            return _e = I._init, ct(L, T, _e(I._payload), ne);
        }
        if (Xr(I)) return we(L, T, I, ne);
        if (U(I)) return Se(L, T, I, ne);
        Po(L, I);
      }
      return typeof I == "string" && I !== "" || typeof I == "number" ? (I = "" + I, T !== null && T.tag === 6 ? (s(L, T.sibling), T = d(T, I), T.return = L, L = T) : (s(L, T), T = Tc(I, L.mode, ne), T.return = L, L = T), y(L)) : s(L, T);
    }
    return ct;
  }
  var xs = Of(!0), Ff = Of(!1), _o = ar(null), Ro = null, vs = null, Bl = null;
  function Ul() {
    Bl = vs = Ro = null;
  }
  function Wl(e) {
    var t = _o.current;
    et(_o), e._currentValue = t;
  }
  function Hl(e, t, s) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === s) break;
      e = e.return;
    }
  }
  function ys(e, t) {
    Ro = e, Bl = vs = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (It = !0), e.firstContext = null);
  }
  function en(e) {
    var t = e._currentValue;
    if (Bl !== e) if (e = { context: e, memoizedValue: t, next: null }, vs === null) {
      if (Ro === null) throw Error(a(308));
      vs = e, Ro.dependencies = { lanes: 0, firstContext: e };
    } else vs = vs.next = e;
    return t;
  }
  var Ar = null;
  function Gl(e) {
    Ar === null ? Ar = [e] : Ar.push(e);
  }
  function Lf(e, t, s, l) {
    var d = t.interleaved;
    return d === null ? (s.next = s, Gl(t)) : (s.next = d.next, d.next = s), t.interleaved = s, Vn(e, l);
  }
  function Vn(e, t) {
    e.lanes |= t;
    var s = e.alternate;
    for (s !== null && (s.lanes |= t), s = e, e = e.return; e !== null; ) e.childLanes |= t, s = e.alternate, s !== null && (s.childLanes |= t), s = e, e = e.return;
    return s.tag === 3 ? s.stateNode : null;
  }
  var lr = !1;
  function ql(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function If(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function $n(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function cr(e, t, s) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (We & 2) !== 0) {
      var d = l.pending;
      return d === null ? t.next = t : (t.next = d.next, d.next = t), l.pending = t, Vn(e, s);
    }
    return d = l.interleaved, d === null ? (t.next = t, Gl(l)) : (t.next = d.next, d.next = t), l.interleaved = t, Vn(e, s);
  }
  function Ao(e, t, s) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (s & 4194240) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, s |= l, t.lanes = s, il(e, s);
    }
  }
  function zf(e, t) {
    var s = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, s === l)) {
      var d = null, h = null;
      if (s = s.firstBaseUpdate, s !== null) {
        do {
          var y = { eventTime: s.eventTime, lane: s.lane, tag: s.tag, payload: s.payload, callback: s.callback, next: null };
          h === null ? d = h = y : h = h.next = y, s = s.next;
        } while (s !== null);
        h === null ? d = h = t : h = h.next = t;
      } else d = h = t;
      s = { baseState: l.baseState, firstBaseUpdate: d, lastBaseUpdate: h, shared: l.shared, effects: l.effects }, e.updateQueue = s;
      return;
    }
    e = s.lastBaseUpdate, e === null ? s.firstBaseUpdate = t : e.next = t, s.lastBaseUpdate = t;
  }
  function To(e, t, s, l) {
    var d = e.updateQueue;
    lr = !1;
    var h = d.firstBaseUpdate, y = d.lastBaseUpdate, k = d.shared.pending;
    if (k !== null) {
      d.shared.pending = null;
      var A = k, $ = A.next;
      A.next = null, y === null ? h = $ : y.next = $, y = A;
      var Z = e.alternate;
      Z !== null && (Z = Z.updateQueue, k = Z.lastBaseUpdate, k !== y && (k === null ? Z.firstBaseUpdate = $ : k.next = $, Z.lastBaseUpdate = A));
    }
    if (h !== null) {
      var ee = d.baseState;
      y = 0, Z = $ = A = null, k = h;
      do {
        var Q = k.lane, pe = k.eventTime;
        if ((l & Q) === Q) {
          Z !== null && (Z = Z.next = {
            eventTime: pe,
            lane: 0,
            tag: k.tag,
            payload: k.payload,
            callback: k.callback,
            next: null
          });
          e: {
            var we = e, Se = k;
            switch (Q = t, pe = s, Se.tag) {
              case 1:
                if (we = Se.payload, typeof we == "function") {
                  ee = we.call(pe, ee, Q);
                  break e;
                }
                ee = we;
                break e;
              case 3:
                we.flags = we.flags & -65537 | 128;
              case 0:
                if (we = Se.payload, Q = typeof we == "function" ? we.call(pe, ee, Q) : we, Q == null) break e;
                ee = G({}, ee, Q);
                break e;
              case 2:
                lr = !0;
            }
          }
          k.callback !== null && k.lane !== 0 && (e.flags |= 64, Q = d.effects, Q === null ? d.effects = [k] : Q.push(k));
        } else pe = { eventTime: pe, lane: Q, tag: k.tag, payload: k.payload, callback: k.callback, next: null }, Z === null ? ($ = Z = pe, A = ee) : Z = Z.next = pe, y |= Q;
        if (k = k.next, k === null) {
          if (k = d.shared.pending, k === null) break;
          Q = k, k = Q.next, Q.next = null, d.lastBaseUpdate = Q, d.shared.pending = null;
        }
      } while (!0);
      if (Z === null && (A = ee), d.baseState = A, d.firstBaseUpdate = $, d.lastBaseUpdate = Z, t = d.shared.interleaved, t !== null) {
        d = t;
        do
          y |= d.lane, d = d.next;
        while (d !== t);
      } else h === null && (d.shared.lanes = 0);
      Mr |= y, e.lanes = y, e.memoizedState = ee;
    }
  }
  function Vf(e, t, s) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var l = e[t], d = l.callback;
      if (d !== null) {
        if (l.callback = null, l = s, typeof d != "function") throw Error(a(191, d));
        d.call(l);
      }
    }
  }
  var ba = {}, Cn = ar(ba), Na = ar(ba), ja = ar(ba);
  function Tr(e) {
    if (e === ba) throw Error(a(174));
    return e;
  }
  function Yl(e, t) {
    switch (Ze(ja, t), Ze(Na, e), Ze(Cn, ba), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : te(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = te(t, e);
    }
    et(Cn), Ze(Cn, t);
  }
  function ws() {
    et(Cn), et(Na), et(ja);
  }
  function $f(e) {
    Tr(ja.current);
    var t = Tr(Cn.current), s = te(t, e.type);
    t !== s && (Ze(Na, e), Ze(Cn, s));
  }
  function Kl(e) {
    Na.current === e && (et(Cn), et(Na));
  }
  var nt = ar(0);
  function Do(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var s = t.memoizedState;
        if (s !== null && (s = s.dehydrated, s === null || s.data === "$?" || s.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Ql = [];
  function Xl() {
    for (var e = 0; e < Ql.length; e++) Ql[e]._workInProgressVersionPrimary = null;
    Ql.length = 0;
  }
  var Mo = F.ReactCurrentDispatcher, Zl = F.ReactCurrentBatchConfig, Dr = 0, rt = null, ht = null, vt = null, Oo = !1, Sa = !1, Ca = 0, Iy = 0;
  function Et() {
    throw Error(a(321));
  }
  function Jl(e, t) {
    if (t === null) return !1;
    for (var s = 0; s < t.length && s < e.length; s++) if (!ln(e[s], t[s])) return !1;
    return !0;
  }
  function ec(e, t, s, l, d, h) {
    if (Dr = h, rt = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Mo.current = e === null || e.memoizedState === null ? By : Uy, e = s(l, d), Sa) {
      h = 0;
      do {
        if (Sa = !1, Ca = 0, 25 <= h) throw Error(a(301));
        h += 1, vt = ht = null, t.updateQueue = null, Mo.current = Wy, e = s(l, d);
      } while (Sa);
    }
    if (Mo.current = Io, t = ht !== null && ht.next !== null, Dr = 0, vt = ht = rt = null, Oo = !1, t) throw Error(a(300));
    return e;
  }
  function tc() {
    var e = Ca !== 0;
    return Ca = 0, e;
  }
  function kn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return vt === null ? rt.memoizedState = vt = e : vt = vt.next = e, vt;
  }
  function tn() {
    if (ht === null) {
      var e = rt.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ht.next;
    var t = vt === null ? rt.memoizedState : vt.next;
    if (t !== null) vt = t, ht = e;
    else {
      if (e === null) throw Error(a(310));
      ht = e, e = { memoizedState: ht.memoizedState, baseState: ht.baseState, baseQueue: ht.baseQueue, queue: ht.queue, next: null }, vt === null ? rt.memoizedState = vt = e : vt = vt.next = e;
    }
    return vt;
  }
  function ka(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function nc(e) {
    var t = tn(), s = t.queue;
    if (s === null) throw Error(a(311));
    s.lastRenderedReducer = e;
    var l = ht, d = l.baseQueue, h = s.pending;
    if (h !== null) {
      if (d !== null) {
        var y = d.next;
        d.next = h.next, h.next = y;
      }
      l.baseQueue = d = h, s.pending = null;
    }
    if (d !== null) {
      h = d.next, l = l.baseState;
      var k = y = null, A = null, $ = h;
      do {
        var Z = $.lane;
        if ((Dr & Z) === Z) A !== null && (A = A.next = { lane: 0, action: $.action, hasEagerState: $.hasEagerState, eagerState: $.eagerState, next: null }), l = $.hasEagerState ? $.eagerState : e(l, $.action);
        else {
          var ee = {
            lane: Z,
            action: $.action,
            hasEagerState: $.hasEagerState,
            eagerState: $.eagerState,
            next: null
          };
          A === null ? (k = A = ee, y = l) : A = A.next = ee, rt.lanes |= Z, Mr |= Z;
        }
        $ = $.next;
      } while ($ !== null && $ !== h);
      A === null ? y = l : A.next = k, ln(l, t.memoizedState) || (It = !0), t.memoizedState = l, t.baseState = y, t.baseQueue = A, s.lastRenderedState = l;
    }
    if (e = s.interleaved, e !== null) {
      d = e;
      do
        h = d.lane, rt.lanes |= h, Mr |= h, d = d.next;
      while (d !== e);
    } else d === null && (s.lanes = 0);
    return [t.memoizedState, s.dispatch];
  }
  function rc(e) {
    var t = tn(), s = t.queue;
    if (s === null) throw Error(a(311));
    s.lastRenderedReducer = e;
    var l = s.dispatch, d = s.pending, h = t.memoizedState;
    if (d !== null) {
      s.pending = null;
      var y = d = d.next;
      do
        h = e(h, y.action), y = y.next;
      while (y !== d);
      ln(h, t.memoizedState) || (It = !0), t.memoizedState = h, t.baseQueue === null && (t.baseState = h), s.lastRenderedState = h;
    }
    return [h, l];
  }
  function Bf() {
  }
  function Uf(e, t) {
    var s = rt, l = tn(), d = t(), h = !ln(l.memoizedState, d);
    if (h && (l.memoizedState = d, It = !0), l = l.queue, sc(Gf.bind(null, s, l, e), [e]), l.getSnapshot !== t || h || vt !== null && vt.memoizedState.tag & 1) {
      if (s.flags |= 2048, Ea(9, Hf.bind(null, s, l, d, t), void 0, null), yt === null) throw Error(a(349));
      (Dr & 30) !== 0 || Wf(s, t, d);
    }
    return d;
  }
  function Wf(e, t, s) {
    e.flags |= 16384, e = { getSnapshot: t, value: s }, t = rt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, rt.updateQueue = t, t.stores = [e]) : (s = t.stores, s === null ? t.stores = [e] : s.push(e));
  }
  function Hf(e, t, s, l) {
    t.value = s, t.getSnapshot = l, qf(t) && Yf(e);
  }
  function Gf(e, t, s) {
    return s(function() {
      qf(t) && Yf(e);
    });
  }
  function qf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var s = t();
      return !ln(e, s);
    } catch {
      return !0;
    }
  }
  function Yf(e) {
    var t = Vn(e, 1);
    t !== null && mn(t, e, 1, -1);
  }
  function Kf(e) {
    var t = kn();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ka, lastRenderedState: e }, t.queue = e, e = e.dispatch = $y.bind(null, rt, e), [t.memoizedState, e];
  }
  function Ea(e, t, s, l) {
    return e = { tag: e, create: t, destroy: s, deps: l, next: null }, t = rt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, rt.updateQueue = t, t.lastEffect = e.next = e) : (s = t.lastEffect, s === null ? t.lastEffect = e.next = e : (l = s.next, s.next = e, e.next = l, t.lastEffect = e)), e;
  }
  function Qf() {
    return tn().memoizedState;
  }
  function Fo(e, t, s, l) {
    var d = kn();
    rt.flags |= e, d.memoizedState = Ea(1 | t, s, void 0, l === void 0 ? null : l);
  }
  function Lo(e, t, s, l) {
    var d = tn();
    l = l === void 0 ? null : l;
    var h = void 0;
    if (ht !== null) {
      var y = ht.memoizedState;
      if (h = y.destroy, l !== null && Jl(l, y.deps)) {
        d.memoizedState = Ea(t, s, h, l);
        return;
      }
    }
    rt.flags |= e, d.memoizedState = Ea(1 | t, s, h, l);
  }
  function Xf(e, t) {
    return Fo(8390656, 8, e, t);
  }
  function sc(e, t) {
    return Lo(2048, 8, e, t);
  }
  function Zf(e, t) {
    return Lo(4, 2, e, t);
  }
  function Jf(e, t) {
    return Lo(4, 4, e, t);
  }
  function em(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function tm(e, t, s) {
    return s = s != null ? s.concat([e]) : null, Lo(4, 4, em.bind(null, t, e), s);
  }
  function ac() {
  }
  function nm(e, t) {
    var s = tn();
    t = t === void 0 ? null : t;
    var l = s.memoizedState;
    return l !== null && t !== null && Jl(t, l[1]) ? l[0] : (s.memoizedState = [e, t], e);
  }
  function rm(e, t) {
    var s = tn();
    t = t === void 0 ? null : t;
    var l = s.memoizedState;
    return l !== null && t !== null && Jl(t, l[1]) ? l[0] : (e = e(), s.memoizedState = [e, t], e);
  }
  function sm(e, t, s) {
    return (Dr & 21) === 0 ? (e.baseState && (e.baseState = !1, It = !0), e.memoizedState = s) : (ln(s, t) || (s = Dd(), rt.lanes |= s, Mr |= s, e.baseState = !0), t);
  }
  function zy(e, t) {
    var s = Ge;
    Ge = s !== 0 && 4 > s ? s : 4, e(!0);
    var l = Zl.transition;
    Zl.transition = {};
    try {
      e(!1), t();
    } finally {
      Ge = s, Zl.transition = l;
    }
  }
  function am() {
    return tn().memoizedState;
  }
  function Vy(e, t, s) {
    var l = mr(e);
    if (s = { lane: l, action: s, hasEagerState: !1, eagerState: null, next: null }, om(e)) im(t, s);
    else if (s = Lf(e, t, s, l), s !== null) {
      var d = At();
      mn(s, e, l, d), lm(s, t, l);
    }
  }
  function $y(e, t, s) {
    var l = mr(e), d = { lane: l, action: s, hasEagerState: !1, eagerState: null, next: null };
    if (om(e)) im(t, d);
    else {
      var h = e.alternate;
      if (e.lanes === 0 && (h === null || h.lanes === 0) && (h = t.lastRenderedReducer, h !== null)) try {
        var y = t.lastRenderedState, k = h(y, s);
        if (d.hasEagerState = !0, d.eagerState = k, ln(k, y)) {
          var A = t.interleaved;
          A === null ? (d.next = d, Gl(t)) : (d.next = A.next, A.next = d), t.interleaved = d;
          return;
        }
      } catch {
      } finally {
      }
      s = Lf(e, t, d, l), s !== null && (d = At(), mn(s, e, l, d), lm(s, t, l));
    }
  }
  function om(e) {
    var t = e.alternate;
    return e === rt || t !== null && t === rt;
  }
  function im(e, t) {
    Sa = Oo = !0;
    var s = e.pending;
    s === null ? t.next = t : (t.next = s.next, s.next = t), e.pending = t;
  }
  function lm(e, t, s) {
    if ((s & 4194240) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, s |= l, t.lanes = s, il(e, s);
    }
  }
  var Io = { readContext: en, useCallback: Et, useContext: Et, useEffect: Et, useImperativeHandle: Et, useInsertionEffect: Et, useLayoutEffect: Et, useMemo: Et, useReducer: Et, useRef: Et, useState: Et, useDebugValue: Et, useDeferredValue: Et, useTransition: Et, useMutableSource: Et, useSyncExternalStore: Et, useId: Et, unstable_isNewReconciler: !1 }, By = { readContext: en, useCallback: function(e, t) {
    return kn().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: en, useEffect: Xf, useImperativeHandle: function(e, t, s) {
    return s = s != null ? s.concat([e]) : null, Fo(
      4194308,
      4,
      em.bind(null, t, e),
      s
    );
  }, useLayoutEffect: function(e, t) {
    return Fo(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Fo(4, 2, e, t);
  }, useMemo: function(e, t) {
    var s = kn();
    return t = t === void 0 ? null : t, e = e(), s.memoizedState = [e, t], e;
  }, useReducer: function(e, t, s) {
    var l = kn();
    return t = s !== void 0 ? s(t) : t, l.memoizedState = l.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, l.queue = e, e = e.dispatch = Vy.bind(null, rt, e), [l.memoizedState, e];
  }, useRef: function(e) {
    var t = kn();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Kf, useDebugValue: ac, useDeferredValue: function(e) {
    return kn().memoizedState = e;
  }, useTransition: function() {
    var e = Kf(!1), t = e[0];
    return e = zy.bind(null, e[1]), kn().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, s) {
    var l = rt, d = kn();
    if (tt) {
      if (s === void 0) throw Error(a(407));
      s = s();
    } else {
      if (s = t(), yt === null) throw Error(a(349));
      (Dr & 30) !== 0 || Wf(l, t, s);
    }
    d.memoizedState = s;
    var h = { value: s, getSnapshot: t };
    return d.queue = h, Xf(Gf.bind(
      null,
      l,
      h,
      e
    ), [e]), l.flags |= 2048, Ea(9, Hf.bind(null, l, h, s, t), void 0, null), s;
  }, useId: function() {
    var e = kn(), t = yt.identifierPrefix;
    if (tt) {
      var s = zn, l = In;
      s = (l & ~(1 << 32 - on(l) - 1)).toString(32) + s, t = ":" + t + "R" + s, s = Ca++, 0 < s && (t += "H" + s.toString(32)), t += ":";
    } else s = Iy++, t = ":" + t + "r" + s.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Uy = {
    readContext: en,
    useCallback: nm,
    useContext: en,
    useEffect: sc,
    useImperativeHandle: tm,
    useInsertionEffect: Zf,
    useLayoutEffect: Jf,
    useMemo: rm,
    useReducer: nc,
    useRef: Qf,
    useState: function() {
      return nc(ka);
    },
    useDebugValue: ac,
    useDeferredValue: function(e) {
      var t = tn();
      return sm(t, ht.memoizedState, e);
    },
    useTransition: function() {
      var e = nc(ka)[0], t = tn().memoizedState;
      return [e, t];
    },
    useMutableSource: Bf,
    useSyncExternalStore: Uf,
    useId: am,
    unstable_isNewReconciler: !1
  }, Wy = { readContext: en, useCallback: nm, useContext: en, useEffect: sc, useImperativeHandle: tm, useInsertionEffect: Zf, useLayoutEffect: Jf, useMemo: rm, useReducer: rc, useRef: Qf, useState: function() {
    return rc(ka);
  }, useDebugValue: ac, useDeferredValue: function(e) {
    var t = tn();
    return ht === null ? t.memoizedState = e : sm(t, ht.memoizedState, e);
  }, useTransition: function() {
    var e = rc(ka)[0], t = tn().memoizedState;
    return [e, t];
  }, useMutableSource: Bf, useSyncExternalStore: Uf, useId: am, unstable_isNewReconciler: !1 };
  function un(e, t) {
    if (e && e.defaultProps) {
      t = G({}, t), e = e.defaultProps;
      for (var s in e) t[s] === void 0 && (t[s] = e[s]);
      return t;
    }
    return t;
  }
  function oc(e, t, s, l) {
    t = e.memoizedState, s = s(l, t), s = s == null ? t : G({}, t, s), e.memoizedState = s, e.lanes === 0 && (e.updateQueue.baseState = s);
  }
  var zo = { isMounted: function(e) {
    return (e = e._reactInternals) ? kr(e) === e : !1;
  }, enqueueSetState: function(e, t, s) {
    e = e._reactInternals;
    var l = At(), d = mr(e), h = $n(l, d);
    h.payload = t, s != null && (h.callback = s), t = cr(e, h, d), t !== null && (mn(t, e, d, l), Ao(t, e, d));
  }, enqueueReplaceState: function(e, t, s) {
    e = e._reactInternals;
    var l = At(), d = mr(e), h = $n(l, d);
    h.tag = 1, h.payload = t, s != null && (h.callback = s), t = cr(e, h, d), t !== null && (mn(t, e, d, l), Ao(t, e, d));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var s = At(), l = mr(e), d = $n(s, l);
    d.tag = 2, t != null && (d.callback = t), t = cr(e, d, l), t !== null && (mn(t, e, l, s), Ao(t, e, l));
  } };
  function cm(e, t, s, l, d, h, y) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, h, y) : t.prototype && t.prototype.isPureReactComponent ? !ma(s, l) || !ma(d, h) : !0;
  }
  function um(e, t, s) {
    var l = !1, d = or, h = t.contextType;
    return typeof h == "object" && h !== null ? h = en(h) : (d = Lt(t) ? Pr : kt.current, l = t.contextTypes, h = (l = l != null) ? ms(e, d) : or), t = new t(s, h), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = zo, e.stateNode = t, t._reactInternals = e, l && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = d, e.__reactInternalMemoizedMaskedChildContext = h), t;
  }
  function dm(e, t, s, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(s, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(s, l), t.state !== e && zo.enqueueReplaceState(t, t.state, null);
  }
  function ic(e, t, s, l) {
    var d = e.stateNode;
    d.props = s, d.state = e.memoizedState, d.refs = {}, ql(e);
    var h = t.contextType;
    typeof h == "object" && h !== null ? d.context = en(h) : (h = Lt(t) ? Pr : kt.current, d.context = ms(e, h)), d.state = e.memoizedState, h = t.getDerivedStateFromProps, typeof h == "function" && (oc(e, t, h, s), d.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (t = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), t !== d.state && zo.enqueueReplaceState(d, d.state, null), To(e, s, d, l), d.state = e.memoizedState), typeof d.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function bs(e, t) {
    try {
      var s = "", l = t;
      do
        s += ce(l), l = l.return;
      while (l);
      var d = s;
    } catch (h) {
      d = `
Error generating stack: ` + h.message + `
` + h.stack;
    }
    return { value: e, source: t, stack: d, digest: null };
  }
  function lc(e, t, s) {
    return { value: e, source: null, stack: s ?? null, digest: t ?? null };
  }
  function cc(e, t) {
    try {
      console.error(t.value);
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  var Hy = typeof WeakMap == "function" ? WeakMap : Map;
  function fm(e, t, s) {
    s = $n(-1, s), s.tag = 3, s.payload = { element: null };
    var l = t.value;
    return s.callback = function() {
      Go || (Go = !0, Sc = l), cc(e, t);
    }, s;
  }
  function mm(e, t, s) {
    s = $n(-1, s), s.tag = 3;
    var l = e.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var d = t.value;
      s.payload = function() {
        return l(d);
      }, s.callback = function() {
        cc(e, t);
      };
    }
    var h = e.stateNode;
    return h !== null && typeof h.componentDidCatch == "function" && (s.callback = function() {
      cc(e, t), typeof l != "function" && (dr === null ? dr = /* @__PURE__ */ new Set([this]) : dr.add(this));
      var y = t.stack;
      this.componentDidCatch(t.value, { componentStack: y !== null ? y : "" });
    }), s;
  }
  function hm(e, t, s) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Hy();
      var d = /* @__PURE__ */ new Set();
      l.set(t, d);
    } else d = l.get(t), d === void 0 && (d = /* @__PURE__ */ new Set(), l.set(t, d));
    d.has(s) || (d.add(s), e = a0.bind(null, e, t, s), t.then(e, e));
  }
  function pm(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function gm(e, t, s, l, d) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, s.flags |= 131072, s.flags &= -52805, s.tag === 1 && (s.alternate === null ? s.tag = 17 : (t = $n(-1, 1), t.tag = 2, cr(s, t, 1))), s.lanes |= 1), e) : (e.flags |= 65536, e.lanes = d, e);
  }
  var Gy = F.ReactCurrentOwner, It = !1;
  function Rt(e, t, s, l) {
    t.child = e === null ? Ff(t, null, s, l) : xs(t, e.child, s, l);
  }
  function xm(e, t, s, l, d) {
    s = s.render;
    var h = t.ref;
    return ys(t, d), l = ec(e, t, s, l, h, d), s = tc(), e !== null && !It ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~d, Bn(e, t, d)) : (tt && s && Ll(t), t.flags |= 1, Rt(e, t, l, d), t.child);
  }
  function vm(e, t, s, l, d) {
    if (e === null) {
      var h = s.type;
      return typeof h == "function" && !Ac(h) && h.defaultProps === void 0 && s.compare === null && s.defaultProps === void 0 ? (t.tag = 15, t.type = h, ym(e, t, h, l, d)) : (e = Zo(s.type, null, l, t, t.mode, d), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (h = e.child, (e.lanes & d) === 0) {
      var y = h.memoizedProps;
      if (s = s.compare, s = s !== null ? s : ma, s(y, l) && e.ref === t.ref) return Bn(e, t, d);
    }
    return t.flags |= 1, e = pr(h, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function ym(e, t, s, l, d) {
    if (e !== null) {
      var h = e.memoizedProps;
      if (ma(h, l) && e.ref === t.ref) if (It = !1, t.pendingProps = l = h, (e.lanes & d) !== 0) (e.flags & 131072) !== 0 && (It = !0);
      else return t.lanes = e.lanes, Bn(e, t, d);
    }
    return uc(e, t, s, l, d);
  }
  function wm(e, t, s) {
    var l = t.pendingProps, d = l.children, h = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ze(js, Ht), Ht |= s;
    else {
      if ((s & 1073741824) === 0) return e = h !== null ? h.baseLanes | s : s, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ze(js, Ht), Ht |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, l = h !== null ? h.baseLanes : s, Ze(js, Ht), Ht |= l;
    }
    else h !== null ? (l = h.baseLanes | s, t.memoizedState = null) : l = s, Ze(js, Ht), Ht |= l;
    return Rt(e, t, d, s), t.child;
  }
  function bm(e, t) {
    var s = t.ref;
    (e === null && s !== null || e !== null && e.ref !== s) && (t.flags |= 512, t.flags |= 2097152);
  }
  function uc(e, t, s, l, d) {
    var h = Lt(s) ? Pr : kt.current;
    return h = ms(t, h), ys(t, d), s = ec(e, t, s, l, h, d), l = tc(), e !== null && !It ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~d, Bn(e, t, d)) : (tt && l && Ll(t), t.flags |= 1, Rt(e, t, s, d), t.child);
  }
  function Nm(e, t, s, l, d) {
    if (Lt(s)) {
      var h = !0;
      jo(t);
    } else h = !1;
    if (ys(t, d), t.stateNode === null) $o(e, t), um(t, s, l), ic(t, s, l, d), l = !0;
    else if (e === null) {
      var y = t.stateNode, k = t.memoizedProps;
      y.props = k;
      var A = y.context, $ = s.contextType;
      typeof $ == "object" && $ !== null ? $ = en($) : ($ = Lt(s) ? Pr : kt.current, $ = ms(t, $));
      var Z = s.getDerivedStateFromProps, ee = typeof Z == "function" || typeof y.getSnapshotBeforeUpdate == "function";
      ee || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (k !== l || A !== $) && dm(t, y, l, $), lr = !1;
      var Q = t.memoizedState;
      y.state = Q, To(t, l, y, d), A = t.memoizedState, k !== l || Q !== A || Ft.current || lr ? (typeof Z == "function" && (oc(t, s, Z, l), A = t.memoizedState), (k = lr || cm(t, s, k, l, Q, A, $)) ? (ee || typeof y.UNSAFE_componentWillMount != "function" && typeof y.componentWillMount != "function" || (typeof y.componentWillMount == "function" && y.componentWillMount(), typeof y.UNSAFE_componentWillMount == "function" && y.UNSAFE_componentWillMount()), typeof y.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof y.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = A), y.props = l, y.state = A, y.context = $, l = k) : (typeof y.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      y = t.stateNode, If(e, t), k = t.memoizedProps, $ = t.type === t.elementType ? k : un(t.type, k), y.props = $, ee = t.pendingProps, Q = y.context, A = s.contextType, typeof A == "object" && A !== null ? A = en(A) : (A = Lt(s) ? Pr : kt.current, A = ms(t, A));
      var pe = s.getDerivedStateFromProps;
      (Z = typeof pe == "function" || typeof y.getSnapshotBeforeUpdate == "function") || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (k !== ee || Q !== A) && dm(t, y, l, A), lr = !1, Q = t.memoizedState, y.state = Q, To(t, l, y, d);
      var we = t.memoizedState;
      k !== ee || Q !== we || Ft.current || lr ? (typeof pe == "function" && (oc(t, s, pe, l), we = t.memoizedState), ($ = lr || cm(t, s, $, l, Q, we, A) || !1) ? (Z || typeof y.UNSAFE_componentWillUpdate != "function" && typeof y.componentWillUpdate != "function" || (typeof y.componentWillUpdate == "function" && y.componentWillUpdate(l, we, A), typeof y.UNSAFE_componentWillUpdate == "function" && y.UNSAFE_componentWillUpdate(l, we, A)), typeof y.componentDidUpdate == "function" && (t.flags |= 4), typeof y.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof y.componentDidUpdate != "function" || k === e.memoizedProps && Q === e.memoizedState || (t.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && Q === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = we), y.props = l, y.state = we, y.context = A, l = $) : (typeof y.componentDidUpdate != "function" || k === e.memoizedProps && Q === e.memoizedState || (t.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && Q === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return dc(e, t, s, l, h, d);
  }
  function dc(e, t, s, l, d, h) {
    bm(e, t);
    var y = (t.flags & 128) !== 0;
    if (!l && !y) return d && Ef(t, s, !1), Bn(e, t, h);
    l = t.stateNode, Gy.current = t;
    var k = y && typeof s.getDerivedStateFromError != "function" ? null : l.render();
    return t.flags |= 1, e !== null && y ? (t.child = xs(t, e.child, null, h), t.child = xs(t, null, k, h)) : Rt(e, t, k, h), t.memoizedState = l.state, d && Ef(t, s, !0), t.child;
  }
  function jm(e) {
    var t = e.stateNode;
    t.pendingContext ? Cf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Cf(e, t.context, !1), Yl(e, t.containerInfo);
  }
  function Sm(e, t, s, l, d) {
    return gs(), $l(d), t.flags |= 256, Rt(e, t, s, l), t.child;
  }
  var fc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function mc(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Cm(e, t, s) {
    var l = t.pendingProps, d = nt.current, h = !1, y = (t.flags & 128) !== 0, k;
    if ((k = y) || (k = e !== null && e.memoizedState === null ? !1 : (d & 2) !== 0), k ? (h = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (d |= 1), Ze(nt, d & 1), e === null)
      return Vl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (y = l.children, e = l.fallback, h ? (l = t.mode, h = t.child, y = { mode: "hidden", children: y }, (l & 1) === 0 && h !== null ? (h.childLanes = 0, h.pendingProps = y) : h = Jo(y, l, 0, null), e = Ir(e, l, s, null), h.return = t, e.return = t, h.sibling = e, t.child = h, t.child.memoizedState = mc(s), t.memoizedState = fc, e) : hc(t, y));
    if (d = e.memoizedState, d !== null && (k = d.dehydrated, k !== null)) return qy(e, t, y, l, k, d, s);
    if (h) {
      h = l.fallback, y = t.mode, d = e.child, k = d.sibling;
      var A = { mode: "hidden", children: l.children };
      return (y & 1) === 0 && t.child !== d ? (l = t.child, l.childLanes = 0, l.pendingProps = A, t.deletions = null) : (l = pr(d, A), l.subtreeFlags = d.subtreeFlags & 14680064), k !== null ? h = pr(k, h) : (h = Ir(h, y, s, null), h.flags |= 2), h.return = t, l.return = t, l.sibling = h, t.child = l, l = h, h = t.child, y = e.child.memoizedState, y = y === null ? mc(s) : { baseLanes: y.baseLanes | s, cachePool: null, transitions: y.transitions }, h.memoizedState = y, h.childLanes = e.childLanes & ~s, t.memoizedState = fc, l;
    }
    return h = e.child, e = h.sibling, l = pr(h, { mode: "visible", children: l.children }), (t.mode & 1) === 0 && (l.lanes = s), l.return = t, l.sibling = null, e !== null && (s = t.deletions, s === null ? (t.deletions = [e], t.flags |= 16) : s.push(e)), t.child = l, t.memoizedState = null, l;
  }
  function hc(e, t) {
    return t = Jo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Vo(e, t, s, l) {
    return l !== null && $l(l), xs(t, e.child, null, s), e = hc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function qy(e, t, s, l, d, h, y) {
    if (s)
      return t.flags & 256 ? (t.flags &= -257, l = lc(Error(a(422))), Vo(e, t, y, l)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (h = l.fallback, d = t.mode, l = Jo({ mode: "visible", children: l.children }, d, 0, null), h = Ir(h, d, y, null), h.flags |= 2, l.return = t, h.return = t, l.sibling = h, t.child = l, (t.mode & 1) !== 0 && xs(t, e.child, null, y), t.child.memoizedState = mc(y), t.memoizedState = fc, h);
    if ((t.mode & 1) === 0) return Vo(e, t, y, null);
    if (d.data === "$!") {
      if (l = d.nextSibling && d.nextSibling.dataset, l) var k = l.dgst;
      return l = k, h = Error(a(419)), l = lc(h, l, void 0), Vo(e, t, y, l);
    }
    if (k = (y & e.childLanes) !== 0, It || k) {
      if (l = yt, l !== null) {
        switch (y & -y) {
          case 4:
            d = 2;
            break;
          case 16:
            d = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            d = 32;
            break;
          case 536870912:
            d = 268435456;
            break;
          default:
            d = 0;
        }
        d = (d & (l.suspendedLanes | y)) !== 0 ? 0 : d, d !== 0 && d !== h.retryLane && (h.retryLane = d, Vn(e, d), mn(l, e, d, -1));
      }
      return Rc(), l = lc(Error(a(421))), Vo(e, t, y, l);
    }
    return d.data === "$?" ? (t.flags |= 128, t.child = e.child, t = o0.bind(null, e), d._reactRetry = t, null) : (e = h.treeContext, Wt = sr(d.nextSibling), Ut = t, tt = !0, cn = null, e !== null && (Zt[Jt++] = In, Zt[Jt++] = zn, Zt[Jt++] = _r, In = e.id, zn = e.overflow, _r = t), t = hc(t, l.children), t.flags |= 4096, t);
  }
  function km(e, t, s) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), Hl(e.return, t, s);
  }
  function pc(e, t, s, l, d) {
    var h = e.memoizedState;
    h === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: l, tail: s, tailMode: d } : (h.isBackwards = t, h.rendering = null, h.renderingStartTime = 0, h.last = l, h.tail = s, h.tailMode = d);
  }
  function Em(e, t, s) {
    var l = t.pendingProps, d = l.revealOrder, h = l.tail;
    if (Rt(e, t, l.children, s), l = nt.current, (l & 2) !== 0) l = l & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && km(e, s, t);
        else if (e.tag === 19) km(e, s, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      l &= 1;
    }
    if (Ze(nt, l), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (d) {
      case "forwards":
        for (s = t.child, d = null; s !== null; ) e = s.alternate, e !== null && Do(e) === null && (d = s), s = s.sibling;
        s = d, s === null ? (d = t.child, t.child = null) : (d = s.sibling, s.sibling = null), pc(t, !1, d, s, h);
        break;
      case "backwards":
        for (s = null, d = t.child, t.child = null; d !== null; ) {
          if (e = d.alternate, e !== null && Do(e) === null) {
            t.child = d;
            break;
          }
          e = d.sibling, d.sibling = s, s = d, d = e;
        }
        pc(t, !0, s, null, h);
        break;
      case "together":
        pc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function $o(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Bn(e, t, s) {
    if (e !== null && (t.dependencies = e.dependencies), Mr |= t.lanes, (s & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(a(153));
    if (t.child !== null) {
      for (e = t.child, s = pr(e, e.pendingProps), t.child = s, s.return = t; e.sibling !== null; ) e = e.sibling, s = s.sibling = pr(e, e.pendingProps), s.return = t;
      s.sibling = null;
    }
    return t.child;
  }
  function Yy(e, t, s) {
    switch (t.tag) {
      case 3:
        jm(t), gs();
        break;
      case 5:
        $f(t);
        break;
      case 1:
        Lt(t.type) && jo(t);
        break;
      case 4:
        Yl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var l = t.type._context, d = t.memoizedProps.value;
        Ze(_o, l._currentValue), l._currentValue = d;
        break;
      case 13:
        if (l = t.memoizedState, l !== null)
          return l.dehydrated !== null ? (Ze(nt, nt.current & 1), t.flags |= 128, null) : (s & t.child.childLanes) !== 0 ? Cm(e, t, s) : (Ze(nt, nt.current & 1), e = Bn(e, t, s), e !== null ? e.sibling : null);
        Ze(nt, nt.current & 1);
        break;
      case 19:
        if (l = (s & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (l) return Em(e, t, s);
          t.flags |= 128;
        }
        if (d = t.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), Ze(nt, nt.current), l) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, wm(e, t, s);
    }
    return Bn(e, t, s);
  }
  var Pm, gc, _m, Rm;
  Pm = function(e, t) {
    for (var s = t.child; s !== null; ) {
      if (s.tag === 5 || s.tag === 6) e.appendChild(s.stateNode);
      else if (s.tag !== 4 && s.child !== null) {
        s.child.return = s, s = s.child;
        continue;
      }
      if (s === t) break;
      for (; s.sibling === null; ) {
        if (s.return === null || s.return === t) return;
        s = s.return;
      }
      s.sibling.return = s.return, s = s.sibling;
    }
  }, gc = function() {
  }, _m = function(e, t, s, l) {
    var d = e.memoizedProps;
    if (d !== l) {
      e = t.stateNode, Tr(Cn.current);
      var h = null;
      switch (s) {
        case "input":
          d = Nt(e, d), l = Nt(e, l), h = [];
          break;
        case "select":
          d = G({}, d, { value: void 0 }), l = G({}, l, { value: void 0 }), h = [];
          break;
        case "textarea":
          d = R(e, d), l = R(e, l), h = [];
          break;
        default:
          typeof d.onClick != "function" && typeof l.onClick == "function" && (e.onclick = wo);
      }
      es(s, l);
      var y;
      s = null;
      for ($ in d) if (!l.hasOwnProperty($) && d.hasOwnProperty($) && d[$] != null) if ($ === "style") {
        var k = d[$];
        for (y in k) k.hasOwnProperty(y) && (s || (s = {}), s[y] = "");
      } else $ !== "dangerouslySetInnerHTML" && $ !== "children" && $ !== "suppressContentEditableWarning" && $ !== "suppressHydrationWarning" && $ !== "autoFocus" && (c.hasOwnProperty($) ? h || (h = []) : (h = h || []).push($, null));
      for ($ in l) {
        var A = l[$];
        if (k = d != null ? d[$] : void 0, l.hasOwnProperty($) && A !== k && (A != null || k != null)) if ($ === "style") if (k) {
          for (y in k) !k.hasOwnProperty(y) || A && A.hasOwnProperty(y) || (s || (s = {}), s[y] = "");
          for (y in A) A.hasOwnProperty(y) && k[y] !== A[y] && (s || (s = {}), s[y] = A[y]);
        } else s || (h || (h = []), h.push(
          $,
          s
        )), s = A;
        else $ === "dangerouslySetInnerHTML" ? (A = A ? A.__html : void 0, k = k ? k.__html : void 0, A != null && k !== A && (h = h || []).push($, A)) : $ === "children" ? typeof A != "string" && typeof A != "number" || (h = h || []).push($, "" + A) : $ !== "suppressContentEditableWarning" && $ !== "suppressHydrationWarning" && (c.hasOwnProperty($) ? (A != null && $ === "onScroll" && Je("scroll", e), h || k === A || (h = [])) : (h = h || []).push($, A));
      }
      s && (h = h || []).push("style", s);
      var $ = h;
      (t.updateQueue = $) && (t.flags |= 4);
    }
  }, Rm = function(e, t, s, l) {
    s !== l && (t.flags |= 4);
  };
  function Pa(e, t) {
    if (!tt) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var s = null; t !== null; ) t.alternate !== null && (s = t), t = t.sibling;
        s === null ? e.tail = null : s.sibling = null;
        break;
      case "collapsed":
        s = e.tail;
        for (var l = null; s !== null; ) s.alternate !== null && (l = s), s = s.sibling;
        l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
    }
  }
  function Pt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, s = 0, l = 0;
    if (t) for (var d = e.child; d !== null; ) s |= d.lanes | d.childLanes, l |= d.subtreeFlags & 14680064, l |= d.flags & 14680064, d.return = e, d = d.sibling;
    else for (d = e.child; d !== null; ) s |= d.lanes | d.childLanes, l |= d.subtreeFlags, l |= d.flags, d.return = e, d = d.sibling;
    return e.subtreeFlags |= l, e.childLanes = s, t;
  }
  function Ky(e, t, s) {
    var l = t.pendingProps;
    switch (Il(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Pt(t), null;
      case 1:
        return Lt(t.type) && No(), Pt(t), null;
      case 3:
        return l = t.stateNode, ws(), et(Ft), et(kt), Xl(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (Eo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, cn !== null && (Ec(cn), cn = null))), gc(e, t), Pt(t), null;
      case 5:
        Kl(t);
        var d = Tr(ja.current);
        if (s = t.type, e !== null && t.stateNode != null) _m(e, t, s, l, d), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(a(166));
            return Pt(t), null;
          }
          if (e = Tr(Cn.current), Eo(t)) {
            l = t.stateNode, s = t.type;
            var h = t.memoizedProps;
            switch (l[Sn] = t, l[va] = h, e = (t.mode & 1) !== 0, s) {
              case "dialog":
                Je("cancel", l), Je("close", l);
                break;
              case "iframe":
              case "object":
              case "embed":
                Je("load", l);
                break;
              case "video":
              case "audio":
                for (d = 0; d < pa.length; d++) Je(pa[d], l);
                break;
              case "source":
                Je("error", l);
                break;
              case "img":
              case "image":
              case "link":
                Je(
                  "error",
                  l
                ), Je("load", l);
                break;
              case "details":
                Je("toggle", l);
                break;
              case "input":
                bn(l, h), Je("invalid", l);
                break;
              case "select":
                l._wrapperState = { wasMultiple: !!h.multiple }, Je("invalid", l);
                break;
              case "textarea":
                V(l, h), Je("invalid", l);
            }
            es(s, h), d = null;
            for (var y in h) if (h.hasOwnProperty(y)) {
              var k = h[y];
              y === "children" ? typeof k == "string" ? l.textContent !== k && (h.suppressHydrationWarning !== !0 && yo(l.textContent, k, e), d = ["children", k]) : typeof k == "number" && l.textContent !== "" + k && (h.suppressHydrationWarning !== !0 && yo(
                l.textContent,
                k,
                e
              ), d = ["children", "" + k]) : c.hasOwnProperty(y) && k != null && y === "onScroll" && Je("scroll", l);
            }
            switch (s) {
              case "input":
                Oe(l), Qr(l, h, !0);
                break;
              case "textarea":
                Oe(l), he(l);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof h.onClick == "function" && (l.onclick = wo);
            }
            l = d, t.updateQueue = l, l !== null && (t.flags |= 4);
          } else {
            y = d.nodeType === 9 ? d : d.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ie(s)), e === "http://www.w3.org/1999/xhtml" ? s === "script" ? (e = y.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof l.is == "string" ? e = y.createElement(s, { is: l.is }) : (e = y.createElement(s), s === "select" && (y = e, l.multiple ? y.multiple = !0 : l.size && (y.size = l.size))) : e = y.createElementNS(e, s), e[Sn] = t, e[va] = l, Pm(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (y = Xs(s, l), s) {
                case "dialog":
                  Je("cancel", e), Je("close", e), d = l;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Je("load", e), d = l;
                  break;
                case "video":
                case "audio":
                  for (d = 0; d < pa.length; d++) Je(pa[d], e);
                  d = l;
                  break;
                case "source":
                  Je("error", e), d = l;
                  break;
                case "img":
                case "image":
                case "link":
                  Je(
                    "error",
                    e
                  ), Je("load", e), d = l;
                  break;
                case "details":
                  Je("toggle", e), d = l;
                  break;
                case "input":
                  bn(e, l), d = Nt(e, l), Je("invalid", e);
                  break;
                case "option":
                  d = l;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!l.multiple }, d = G({}, l, { value: void 0 }), Je("invalid", e);
                  break;
                case "textarea":
                  V(e, l), d = R(e, l), Je("invalid", e);
                  break;
                default:
                  d = l;
              }
              es(s, d), k = d;
              for (h in k) if (k.hasOwnProperty(h)) {
                var A = k[h];
                h === "style" ? Jr(e, A) : h === "dangerouslySetInnerHTML" ? (A = A ? A.__html : void 0, A != null && Ue(e, A)) : h === "children" ? typeof A == "string" ? (s !== "textarea" || A !== "") && Xe(e, A) : typeof A == "number" && Xe(e, "" + A) : h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && h !== "autoFocus" && (c.hasOwnProperty(h) ? A != null && h === "onScroll" && Je("scroll", e) : A != null && O(e, h, A, y));
              }
              switch (s) {
                case "input":
                  Oe(e), Qr(e, l, !1);
                  break;
                case "textarea":
                  Oe(e), he(e);
                  break;
                case "option":
                  l.value != null && e.setAttribute("value", "" + ge(l.value));
                  break;
                case "select":
                  e.multiple = !!l.multiple, h = l.value, h != null ? On(e, !!l.multiple, h, !1) : l.defaultValue != null && On(
                    e,
                    !!l.multiple,
                    l.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof d.onClick == "function" && (e.onclick = wo);
              }
              switch (s) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l = !!l.autoFocus;
                  break e;
                case "img":
                  l = !0;
                  break e;
                default:
                  l = !1;
              }
            }
            l && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return Pt(t), null;
      case 6:
        if (e && t.stateNode != null) Rm(e, t, e.memoizedProps, l);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(a(166));
          if (s = Tr(ja.current), Tr(Cn.current), Eo(t)) {
            if (l = t.stateNode, s = t.memoizedProps, l[Sn] = t, (h = l.nodeValue !== s) && (e = Ut, e !== null)) switch (e.tag) {
              case 3:
                yo(l.nodeValue, s, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && yo(l.nodeValue, s, (e.mode & 1) !== 0);
            }
            h && (t.flags |= 4);
          } else l = (s.nodeType === 9 ? s : s.ownerDocument).createTextNode(l), l[Sn] = t, t.stateNode = l;
        }
        return Pt(t), null;
      case 13:
        if (et(nt), l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (tt && Wt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Df(), gs(), t.flags |= 98560, h = !1;
          else if (h = Eo(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!h) throw Error(a(318));
              if (h = t.memoizedState, h = h !== null ? h.dehydrated : null, !h) throw Error(a(317));
              h[Sn] = t;
            } else gs(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Pt(t), h = !1;
          } else cn !== null && (Ec(cn), cn = null), h = !0;
          if (!h) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = s, t) : (l = l !== null, l !== (e !== null && e.memoizedState !== null) && l && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (nt.current & 1) !== 0 ? pt === 0 && (pt = 3) : Rc())), t.updateQueue !== null && (t.flags |= 4), Pt(t), null);
      case 4:
        return ws(), gc(e, t), e === null && ga(t.stateNode.containerInfo), Pt(t), null;
      case 10:
        return Wl(t.type._context), Pt(t), null;
      case 17:
        return Lt(t.type) && No(), Pt(t), null;
      case 19:
        if (et(nt), h = t.memoizedState, h === null) return Pt(t), null;
        if (l = (t.flags & 128) !== 0, y = h.rendering, y === null) if (l) Pa(h, !1);
        else {
          if (pt !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (y = Do(e), y !== null) {
              for (t.flags |= 128, Pa(h, !1), l = y.updateQueue, l !== null && (t.updateQueue = l, t.flags |= 4), t.subtreeFlags = 0, l = s, s = t.child; s !== null; ) h = s, e = l, h.flags &= 14680066, y = h.alternate, y === null ? (h.childLanes = 0, h.lanes = e, h.child = null, h.subtreeFlags = 0, h.memoizedProps = null, h.memoizedState = null, h.updateQueue = null, h.dependencies = null, h.stateNode = null) : (h.childLanes = y.childLanes, h.lanes = y.lanes, h.child = y.child, h.subtreeFlags = 0, h.deletions = null, h.memoizedProps = y.memoizedProps, h.memoizedState = y.memoizedState, h.updateQueue = y.updateQueue, h.type = y.type, e = y.dependencies, h.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), s = s.sibling;
              return Ze(nt, nt.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          h.tail !== null && lt() > Ss && (t.flags |= 128, l = !0, Pa(h, !1), t.lanes = 4194304);
        }
        else {
          if (!l) if (e = Do(y), e !== null) {
            if (t.flags |= 128, l = !0, s = e.updateQueue, s !== null && (t.updateQueue = s, t.flags |= 4), Pa(h, !0), h.tail === null && h.tailMode === "hidden" && !y.alternate && !tt) return Pt(t), null;
          } else 2 * lt() - h.renderingStartTime > Ss && s !== 1073741824 && (t.flags |= 128, l = !0, Pa(h, !1), t.lanes = 4194304);
          h.isBackwards ? (y.sibling = t.child, t.child = y) : (s = h.last, s !== null ? s.sibling = y : t.child = y, h.last = y);
        }
        return h.tail !== null ? (t = h.tail, h.rendering = t, h.tail = t.sibling, h.renderingStartTime = lt(), t.sibling = null, s = nt.current, Ze(nt, l ? s & 1 | 2 : s & 1), t) : (Pt(t), null);
      case 22:
      case 23:
        return _c(), l = t.memoizedState !== null, e !== null && e.memoizedState !== null !== l && (t.flags |= 8192), l && (t.mode & 1) !== 0 ? (Ht & 1073741824) !== 0 && (Pt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Pt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(a(156, t.tag));
  }
  function Qy(e, t) {
    switch (Il(t), t.tag) {
      case 1:
        return Lt(t.type) && No(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return ws(), et(Ft), et(kt), Xl(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Kl(t), null;
      case 13:
        if (et(nt), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(a(340));
          gs();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return et(nt), null;
      case 4:
        return ws(), null;
      case 10:
        return Wl(t.type._context), null;
      case 22:
      case 23:
        return _c(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Bo = !1, _t = !1, Xy = typeof WeakSet == "function" ? WeakSet : Set, ve = null;
  function Ns(e, t) {
    var s = e.ref;
    if (s !== null) if (typeof s == "function") try {
      s(null);
    } catch (l) {
      at(e, t, l);
    }
    else s.current = null;
  }
  function xc(e, t, s) {
    try {
      s();
    } catch (l) {
      at(e, t, l);
    }
  }
  var Am = !1;
  function Zy(e, t) {
    if (_l = io, e = cf(), bl(e)) {
      if ("selectionStart" in e) var s = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        s = (s = e.ownerDocument) && s.defaultView || window;
        var l = s.getSelection && s.getSelection();
        if (l && l.rangeCount !== 0) {
          s = l.anchorNode;
          var d = l.anchorOffset, h = l.focusNode;
          l = l.focusOffset;
          try {
            s.nodeType, h.nodeType;
          } catch {
            s = null;
            break e;
          }
          var y = 0, k = -1, A = -1, $ = 0, Z = 0, ee = e, Q = null;
          t: for (; ; ) {
            for (var pe; ee !== s || d !== 0 && ee.nodeType !== 3 || (k = y + d), ee !== h || l !== 0 && ee.nodeType !== 3 || (A = y + l), ee.nodeType === 3 && (y += ee.nodeValue.length), (pe = ee.firstChild) !== null; )
              Q = ee, ee = pe;
            for (; ; ) {
              if (ee === e) break t;
              if (Q === s && ++$ === d && (k = y), Q === h && ++Z === l && (A = y), (pe = ee.nextSibling) !== null) break;
              ee = Q, Q = ee.parentNode;
            }
            ee = pe;
          }
          s = k === -1 || A === -1 ? null : { start: k, end: A };
        } else s = null;
      }
      s = s || { start: 0, end: 0 };
    } else s = null;
    for (Rl = { focusedElem: e, selectionRange: s }, io = !1, ve = t; ve !== null; ) if (t = ve, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ve = e;
    else for (; ve !== null; ) {
      t = ve;
      try {
        var we = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (we !== null) {
              var Se = we.memoizedProps, ct = we.memoizedState, L = t.stateNode, T = L.getSnapshotBeforeUpdate(t.elementType === t.type ? Se : un(t.type, Se), ct);
              L.__reactInternalSnapshotBeforeUpdate = T;
            }
            break;
          case 3:
            var I = t.stateNode.containerInfo;
            I.nodeType === 1 ? I.textContent = "" : I.nodeType === 9 && I.documentElement && I.removeChild(I.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(a(163));
        }
      } catch (ne) {
        at(t, t.return, ne);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, ve = e;
        break;
      }
      ve = t.return;
    }
    return we = Am, Am = !1, we;
  }
  function _a(e, t, s) {
    var l = t.updateQueue;
    if (l = l !== null ? l.lastEffect : null, l !== null) {
      var d = l = l.next;
      do {
        if ((d.tag & e) === e) {
          var h = d.destroy;
          d.destroy = void 0, h !== void 0 && xc(t, s, h);
        }
        d = d.next;
      } while (d !== l);
    }
  }
  function Uo(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var s = t = t.next;
      do {
        if ((s.tag & e) === e) {
          var l = s.create;
          s.destroy = l();
        }
        s = s.next;
      } while (s !== t);
    }
  }
  function vc(e) {
    var t = e.ref;
    if (t !== null) {
      var s = e.stateNode;
      switch (e.tag) {
        case 5:
          e = s;
          break;
        default:
          e = s;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Tm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Tm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Sn], delete t[va], delete t[Ml], delete t[My], delete t[Oy])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Dm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Mm(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Dm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function yc(e, t, s) {
    var l = e.tag;
    if (l === 5 || l === 6) e = e.stateNode, t ? s.nodeType === 8 ? s.parentNode.insertBefore(e, t) : s.insertBefore(e, t) : (s.nodeType === 8 ? (t = s.parentNode, t.insertBefore(e, s)) : (t = s, t.appendChild(e)), s = s._reactRootContainer, s != null || t.onclick !== null || (t.onclick = wo));
    else if (l !== 4 && (e = e.child, e !== null)) for (yc(e, t, s), e = e.sibling; e !== null; ) yc(e, t, s), e = e.sibling;
  }
  function wc(e, t, s) {
    var l = e.tag;
    if (l === 5 || l === 6) e = e.stateNode, t ? s.insertBefore(e, t) : s.appendChild(e);
    else if (l !== 4 && (e = e.child, e !== null)) for (wc(e, t, s), e = e.sibling; e !== null; ) wc(e, t, s), e = e.sibling;
  }
  var jt = null, dn = !1;
  function ur(e, t, s) {
    for (s = s.child; s !== null; ) Om(e, t, s), s = s.sibling;
  }
  function Om(e, t, s) {
    if (jn && typeof jn.onCommitFiberUnmount == "function") try {
      jn.onCommitFiberUnmount(to, s);
    } catch {
    }
    switch (s.tag) {
      case 5:
        _t || Ns(s, t);
      case 6:
        var l = jt, d = dn;
        jt = null, ur(e, t, s), jt = l, dn = d, jt !== null && (dn ? (e = jt, s = s.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(s) : e.removeChild(s)) : jt.removeChild(s.stateNode));
        break;
      case 18:
        jt !== null && (dn ? (e = jt, s = s.stateNode, e.nodeType === 8 ? Dl(e.parentNode, s) : e.nodeType === 1 && Dl(e, s), ia(e)) : Dl(jt, s.stateNode));
        break;
      case 4:
        l = jt, d = dn, jt = s.stateNode.containerInfo, dn = !0, ur(e, t, s), jt = l, dn = d;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!_t && (l = s.updateQueue, l !== null && (l = l.lastEffect, l !== null))) {
          d = l = l.next;
          do {
            var h = d, y = h.destroy;
            h = h.tag, y !== void 0 && ((h & 2) !== 0 || (h & 4) !== 0) && xc(s, t, y), d = d.next;
          } while (d !== l);
        }
        ur(e, t, s);
        break;
      case 1:
        if (!_t && (Ns(s, t), l = s.stateNode, typeof l.componentWillUnmount == "function")) try {
          l.props = s.memoizedProps, l.state = s.memoizedState, l.componentWillUnmount();
        } catch (k) {
          at(s, t, k);
        }
        ur(e, t, s);
        break;
      case 21:
        ur(e, t, s);
        break;
      case 22:
        s.mode & 1 ? (_t = (l = _t) || s.memoizedState !== null, ur(e, t, s), _t = l) : ur(e, t, s);
        break;
      default:
        ur(e, t, s);
    }
  }
  function Fm(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var s = e.stateNode;
      s === null && (s = e.stateNode = new Xy()), t.forEach(function(l) {
        var d = i0.bind(null, e, l);
        s.has(l) || (s.add(l), l.then(d, d));
      });
    }
  }
  function fn(e, t) {
    var s = t.deletions;
    if (s !== null) for (var l = 0; l < s.length; l++) {
      var d = s[l];
      try {
        var h = e, y = t, k = y;
        e: for (; k !== null; ) {
          switch (k.tag) {
            case 5:
              jt = k.stateNode, dn = !1;
              break e;
            case 3:
              jt = k.stateNode.containerInfo, dn = !0;
              break e;
            case 4:
              jt = k.stateNode.containerInfo, dn = !0;
              break e;
          }
          k = k.return;
        }
        if (jt === null) throw Error(a(160));
        Om(h, y, d), jt = null, dn = !1;
        var A = d.alternate;
        A !== null && (A.return = null), d.return = null;
      } catch ($) {
        at(d, t, $);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Lm(t, e), t = t.sibling;
  }
  function Lm(e, t) {
    var s = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (fn(t, e), En(e), l & 4) {
          try {
            _a(3, e, e.return), Uo(3, e);
          } catch (Se) {
            at(e, e.return, Se);
          }
          try {
            _a(5, e, e.return);
          } catch (Se) {
            at(e, e.return, Se);
          }
        }
        break;
      case 1:
        fn(t, e), En(e), l & 512 && s !== null && Ns(s, s.return);
        break;
      case 5:
        if (fn(t, e), En(e), l & 512 && s !== null && Ns(s, s.return), e.flags & 32) {
          var d = e.stateNode;
          try {
            Xe(d, "");
          } catch (Se) {
            at(e, e.return, Se);
          }
        }
        if (l & 4 && (d = e.stateNode, d != null)) {
          var h = e.memoizedProps, y = s !== null ? s.memoizedProps : h, k = e.type, A = e.updateQueue;
          if (e.updateQueue = null, A !== null) try {
            k === "input" && h.type === "radio" && h.name != null && an(d, h), Xs(k, y);
            var $ = Xs(k, h);
            for (y = 0; y < A.length; y += 2) {
              var Z = A[y], ee = A[y + 1];
              Z === "style" ? Jr(d, ee) : Z === "dangerouslySetInnerHTML" ? Ue(d, ee) : Z === "children" ? Xe(d, ee) : O(d, Z, ee, $);
            }
            switch (k) {
              case "input":
                Xt(d, h);
                break;
              case "textarea":
                q(d, h);
                break;
              case "select":
                var Q = d._wrapperState.wasMultiple;
                d._wrapperState.wasMultiple = !!h.multiple;
                var pe = h.value;
                pe != null ? On(d, !!h.multiple, pe, !1) : Q !== !!h.multiple && (h.defaultValue != null ? On(
                  d,
                  !!h.multiple,
                  h.defaultValue,
                  !0
                ) : On(d, !!h.multiple, h.multiple ? [] : "", !1));
            }
            d[va] = h;
          } catch (Se) {
            at(e, e.return, Se);
          }
        }
        break;
      case 6:
        if (fn(t, e), En(e), l & 4) {
          if (e.stateNode === null) throw Error(a(162));
          d = e.stateNode, h = e.memoizedProps;
          try {
            d.nodeValue = h;
          } catch (Se) {
            at(e, e.return, Se);
          }
        }
        break;
      case 3:
        if (fn(t, e), En(e), l & 4 && s !== null && s.memoizedState.isDehydrated) try {
          ia(t.containerInfo);
        } catch (Se) {
          at(e, e.return, Se);
        }
        break;
      case 4:
        fn(t, e), En(e);
        break;
      case 13:
        fn(t, e), En(e), d = e.child, d.flags & 8192 && (h = d.memoizedState !== null, d.stateNode.isHidden = h, !h || d.alternate !== null && d.alternate.memoizedState !== null || (jc = lt())), l & 4 && Fm(e);
        break;
      case 22:
        if (Z = s !== null && s.memoizedState !== null, e.mode & 1 ? (_t = ($ = _t) || Z, fn(t, e), _t = $) : fn(t, e), En(e), l & 8192) {
          if ($ = e.memoizedState !== null, (e.stateNode.isHidden = $) && !Z && (e.mode & 1) !== 0) for (ve = e, Z = e.child; Z !== null; ) {
            for (ee = ve = Z; ve !== null; ) {
              switch (Q = ve, pe = Q.child, Q.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  _a(4, Q, Q.return);
                  break;
                case 1:
                  Ns(Q, Q.return);
                  var we = Q.stateNode;
                  if (typeof we.componentWillUnmount == "function") {
                    l = Q, s = Q.return;
                    try {
                      t = l, we.props = t.memoizedProps, we.state = t.memoizedState, we.componentWillUnmount();
                    } catch (Se) {
                      at(l, s, Se);
                    }
                  }
                  break;
                case 5:
                  Ns(Q, Q.return);
                  break;
                case 22:
                  if (Q.memoizedState !== null) {
                    Vm(ee);
                    continue;
                  }
              }
              pe !== null ? (pe.return = Q, ve = pe) : Vm(ee);
            }
            Z = Z.sibling;
          }
          e: for (Z = null, ee = e; ; ) {
            if (ee.tag === 5) {
              if (Z === null) {
                Z = ee;
                try {
                  d = ee.stateNode, $ ? (h = d.style, typeof h.setProperty == "function" ? h.setProperty("display", "none", "important") : h.display = "none") : (k = ee.stateNode, A = ee.memoizedProps.style, y = A != null && A.hasOwnProperty("display") ? A.display : null, k.style.display = Zr("display", y));
                } catch (Se) {
                  at(e, e.return, Se);
                }
              }
            } else if (ee.tag === 6) {
              if (Z === null) try {
                ee.stateNode.nodeValue = $ ? "" : ee.memoizedProps;
              } catch (Se) {
                at(e, e.return, Se);
              }
            } else if ((ee.tag !== 22 && ee.tag !== 23 || ee.memoizedState === null || ee === e) && ee.child !== null) {
              ee.child.return = ee, ee = ee.child;
              continue;
            }
            if (ee === e) break e;
            for (; ee.sibling === null; ) {
              if (ee.return === null || ee.return === e) break e;
              Z === ee && (Z = null), ee = ee.return;
            }
            Z === ee && (Z = null), ee.sibling.return = ee.return, ee = ee.sibling;
          }
        }
        break;
      case 19:
        fn(t, e), En(e), l & 4 && Fm(e);
        break;
      case 21:
        break;
      default:
        fn(
          t,
          e
        ), En(e);
    }
  }
  function En(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var s = e.return; s !== null; ) {
            if (Dm(s)) {
              var l = s;
              break e;
            }
            s = s.return;
          }
          throw Error(a(160));
        }
        switch (l.tag) {
          case 5:
            var d = l.stateNode;
            l.flags & 32 && (Xe(d, ""), l.flags &= -33);
            var h = Mm(e);
            wc(e, h, d);
            break;
          case 3:
          case 4:
            var y = l.stateNode.containerInfo, k = Mm(e);
            yc(e, k, y);
            break;
          default:
            throw Error(a(161));
        }
      } catch (A) {
        at(e, e.return, A);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Jy(e, t, s) {
    ve = e, Im(e);
  }
  function Im(e, t, s) {
    for (var l = (e.mode & 1) !== 0; ve !== null; ) {
      var d = ve, h = d.child;
      if (d.tag === 22 && l) {
        var y = d.memoizedState !== null || Bo;
        if (!y) {
          var k = d.alternate, A = k !== null && k.memoizedState !== null || _t;
          k = Bo;
          var $ = _t;
          if (Bo = y, (_t = A) && !$) for (ve = d; ve !== null; ) y = ve, A = y.child, y.tag === 22 && y.memoizedState !== null ? $m(d) : A !== null ? (A.return = y, ve = A) : $m(d);
          for (; h !== null; ) ve = h, Im(h), h = h.sibling;
          ve = d, Bo = k, _t = $;
        }
        zm(e);
      } else (d.subtreeFlags & 8772) !== 0 && h !== null ? (h.return = d, ve = h) : zm(e);
    }
  }
  function zm(e) {
    for (; ve !== null; ) {
      var t = ve;
      if ((t.flags & 8772) !== 0) {
        var s = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              _t || Uo(5, t);
              break;
            case 1:
              var l = t.stateNode;
              if (t.flags & 4 && !_t) if (s === null) l.componentDidMount();
              else {
                var d = t.elementType === t.type ? s.memoizedProps : un(t.type, s.memoizedProps);
                l.componentDidUpdate(d, s.memoizedState, l.__reactInternalSnapshotBeforeUpdate);
              }
              var h = t.updateQueue;
              h !== null && Vf(t, h, l);
              break;
            case 3:
              var y = t.updateQueue;
              if (y !== null) {
                if (s = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    s = t.child.stateNode;
                    break;
                  case 1:
                    s = t.child.stateNode;
                }
                Vf(t, y, s);
              }
              break;
            case 5:
              var k = t.stateNode;
              if (s === null && t.flags & 4) {
                s = k;
                var A = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    A.autoFocus && s.focus();
                    break;
                  case "img":
                    A.src && (s.src = A.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var $ = t.alternate;
                if ($ !== null) {
                  var Z = $.memoizedState;
                  if (Z !== null) {
                    var ee = Z.dehydrated;
                    ee !== null && ia(ee);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(a(163));
          }
          _t || t.flags & 512 && vc(t);
        } catch (Q) {
          at(t, t.return, Q);
        }
      }
      if (t === e) {
        ve = null;
        break;
      }
      if (s = t.sibling, s !== null) {
        s.return = t.return, ve = s;
        break;
      }
      ve = t.return;
    }
  }
  function Vm(e) {
    for (; ve !== null; ) {
      var t = ve;
      if (t === e) {
        ve = null;
        break;
      }
      var s = t.sibling;
      if (s !== null) {
        s.return = t.return, ve = s;
        break;
      }
      ve = t.return;
    }
  }
  function $m(e) {
    for (; ve !== null; ) {
      var t = ve;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var s = t.return;
            try {
              Uo(4, t);
            } catch (A) {
              at(t, s, A);
            }
            break;
          case 1:
            var l = t.stateNode;
            if (typeof l.componentDidMount == "function") {
              var d = t.return;
              try {
                l.componentDidMount();
              } catch (A) {
                at(t, d, A);
              }
            }
            var h = t.return;
            try {
              vc(t);
            } catch (A) {
              at(t, h, A);
            }
            break;
          case 5:
            var y = t.return;
            try {
              vc(t);
            } catch (A) {
              at(t, y, A);
            }
        }
      } catch (A) {
        at(t, t.return, A);
      }
      if (t === e) {
        ve = null;
        break;
      }
      var k = t.sibling;
      if (k !== null) {
        k.return = t.return, ve = k;
        break;
      }
      ve = t.return;
    }
  }
  var e0 = Math.ceil, Wo = F.ReactCurrentDispatcher, bc = F.ReactCurrentOwner, nn = F.ReactCurrentBatchConfig, We = 0, yt = null, mt = null, St = 0, Ht = 0, js = ar(0), pt = 0, Ra = null, Mr = 0, Ho = 0, Nc = 0, Aa = null, zt = null, jc = 0, Ss = 1 / 0, Un = null, Go = !1, Sc = null, dr = null, qo = !1, fr = null, Yo = 0, Ta = 0, Cc = null, Ko = -1, Qo = 0;
  function At() {
    return (We & 6) !== 0 ? lt() : Ko !== -1 ? Ko : Ko = lt();
  }
  function mr(e) {
    return (e.mode & 1) === 0 ? 1 : (We & 2) !== 0 && St !== 0 ? St & -St : Ly.transition !== null ? (Qo === 0 && (Qo = Dd()), Qo) : (e = Ge, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Bd(e.type)), e);
  }
  function mn(e, t, s, l) {
    if (50 < Ta) throw Ta = 0, Cc = null, Error(a(185));
    na(e, s, l), ((We & 2) === 0 || e !== yt) && (e === yt && ((We & 2) === 0 && (Ho |= s), pt === 4 && hr(e, St)), Vt(e, l), s === 1 && We === 0 && (t.mode & 1) === 0 && (Ss = lt() + 500, So && ir()));
  }
  function Vt(e, t) {
    var s = e.callbackNode;
    Lv(e, t);
    var l = so(e, e === yt ? St : 0);
    if (l === 0) s !== null && Rd(s), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = l & -l, e.callbackPriority !== t) {
      if (s != null && Rd(s), t === 1) e.tag === 0 ? Fy(Um.bind(null, e)) : Pf(Um.bind(null, e)), Ty(function() {
        (We & 6) === 0 && ir();
      }), s = null;
      else {
        switch (Md(l)) {
          case 1:
            s = sl;
            break;
          case 4:
            s = Ad;
            break;
          case 16:
            s = eo;
            break;
          case 536870912:
            s = Td;
            break;
          default:
            s = eo;
        }
        s = Xm(s, Bm.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = s;
    }
  }
  function Bm(e, t) {
    if (Ko = -1, Qo = 0, (We & 6) !== 0) throw Error(a(327));
    var s = e.callbackNode;
    if (Cs() && e.callbackNode !== s) return null;
    var l = so(e, e === yt ? St : 0);
    if (l === 0) return null;
    if ((l & 30) !== 0 || (l & e.expiredLanes) !== 0 || t) t = Xo(e, l);
    else {
      t = l;
      var d = We;
      We |= 2;
      var h = Hm();
      (yt !== e || St !== t) && (Un = null, Ss = lt() + 500, Fr(e, t));
      do
        try {
          r0();
          break;
        } catch (k) {
          Wm(e, k);
        }
      while (!0);
      Ul(), Wo.current = h, We = d, mt !== null ? t = 0 : (yt = null, St = 0, t = pt);
    }
    if (t !== 0) {
      if (t === 2 && (d = al(e), d !== 0 && (l = d, t = kc(e, d))), t === 1) throw s = Ra, Fr(e, 0), hr(e, l), Vt(e, lt()), s;
      if (t === 6) hr(e, l);
      else {
        if (d = e.current.alternate, (l & 30) === 0 && !t0(d) && (t = Xo(e, l), t === 2 && (h = al(e), h !== 0 && (l = h, t = kc(e, h))), t === 1)) throw s = Ra, Fr(e, 0), hr(e, l), Vt(e, lt()), s;
        switch (e.finishedWork = d, e.finishedLanes = l, t) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            Lr(e, zt, Un);
            break;
          case 3:
            if (hr(e, l), (l & 130023424) === l && (t = jc + 500 - lt(), 10 < t)) {
              if (so(e, 0) !== 0) break;
              if (d = e.suspendedLanes, (d & l) !== l) {
                At(), e.pingedLanes |= e.suspendedLanes & d;
                break;
              }
              e.timeoutHandle = Tl(Lr.bind(null, e, zt, Un), t);
              break;
            }
            Lr(e, zt, Un);
            break;
          case 4:
            if (hr(e, l), (l & 4194240) === l) break;
            for (t = e.eventTimes, d = -1; 0 < l; ) {
              var y = 31 - on(l);
              h = 1 << y, y = t[y], y > d && (d = y), l &= ~h;
            }
            if (l = d, l = lt() - l, l = (120 > l ? 120 : 480 > l ? 480 : 1080 > l ? 1080 : 1920 > l ? 1920 : 3e3 > l ? 3e3 : 4320 > l ? 4320 : 1960 * e0(l / 1960)) - l, 10 < l) {
              e.timeoutHandle = Tl(Lr.bind(null, e, zt, Un), l);
              break;
            }
            Lr(e, zt, Un);
            break;
          case 5:
            Lr(e, zt, Un);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return Vt(e, lt()), e.callbackNode === s ? Bm.bind(null, e) : null;
  }
  function kc(e, t) {
    var s = Aa;
    return e.current.memoizedState.isDehydrated && (Fr(e, t).flags |= 256), e = Xo(e, t), e !== 2 && (t = zt, zt = s, t !== null && Ec(t)), e;
  }
  function Ec(e) {
    zt === null ? zt = e : zt.push.apply(zt, e);
  }
  function t0(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var s = t.updateQueue;
        if (s !== null && (s = s.stores, s !== null)) for (var l = 0; l < s.length; l++) {
          var d = s[l], h = d.getSnapshot;
          d = d.value;
          try {
            if (!ln(h(), d)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (s = t.child, t.subtreeFlags & 16384 && s !== null) s.return = t, t = s;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function hr(e, t) {
    for (t &= ~Nc, t &= ~Ho, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var s = 31 - on(t), l = 1 << s;
      e[s] = -1, t &= ~l;
    }
  }
  function Um(e) {
    if ((We & 6) !== 0) throw Error(a(327));
    Cs();
    var t = so(e, 0);
    if ((t & 1) === 0) return Vt(e, lt()), null;
    var s = Xo(e, t);
    if (e.tag !== 0 && s === 2) {
      var l = al(e);
      l !== 0 && (t = l, s = kc(e, l));
    }
    if (s === 1) throw s = Ra, Fr(e, 0), hr(e, t), Vt(e, lt()), s;
    if (s === 6) throw Error(a(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Lr(e, zt, Un), Vt(e, lt()), null;
  }
  function Pc(e, t) {
    var s = We;
    We |= 1;
    try {
      return e(t);
    } finally {
      We = s, We === 0 && (Ss = lt() + 500, So && ir());
    }
  }
  function Or(e) {
    fr !== null && fr.tag === 0 && (We & 6) === 0 && Cs();
    var t = We;
    We |= 1;
    var s = nn.transition, l = Ge;
    try {
      if (nn.transition = null, Ge = 1, e) return e();
    } finally {
      Ge = l, nn.transition = s, We = t, (We & 6) === 0 && ir();
    }
  }
  function _c() {
    Ht = js.current, et(js);
  }
  function Fr(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var s = e.timeoutHandle;
    if (s !== -1 && (e.timeoutHandle = -1, Ay(s)), mt !== null) for (s = mt.return; s !== null; ) {
      var l = s;
      switch (Il(l), l.tag) {
        case 1:
          l = l.type.childContextTypes, l != null && No();
          break;
        case 3:
          ws(), et(Ft), et(kt), Xl();
          break;
        case 5:
          Kl(l);
          break;
        case 4:
          ws();
          break;
        case 13:
          et(nt);
          break;
        case 19:
          et(nt);
          break;
        case 10:
          Wl(l.type._context);
          break;
        case 22:
        case 23:
          _c();
      }
      s = s.return;
    }
    if (yt = e, mt = e = pr(e.current, null), St = Ht = t, pt = 0, Ra = null, Nc = Ho = Mr = 0, zt = Aa = null, Ar !== null) {
      for (t = 0; t < Ar.length; t++) if (s = Ar[t], l = s.interleaved, l !== null) {
        s.interleaved = null;
        var d = l.next, h = s.pending;
        if (h !== null) {
          var y = h.next;
          h.next = d, l.next = y;
        }
        s.pending = l;
      }
      Ar = null;
    }
    return e;
  }
  function Wm(e, t) {
    do {
      var s = mt;
      try {
        if (Ul(), Mo.current = Io, Oo) {
          for (var l = rt.memoizedState; l !== null; ) {
            var d = l.queue;
            d !== null && (d.pending = null), l = l.next;
          }
          Oo = !1;
        }
        if (Dr = 0, vt = ht = rt = null, Sa = !1, Ca = 0, bc.current = null, s === null || s.return === null) {
          pt = 1, Ra = t, mt = null;
          break;
        }
        e: {
          var h = e, y = s.return, k = s, A = t;
          if (t = St, k.flags |= 32768, A !== null && typeof A == "object" && typeof A.then == "function") {
            var $ = A, Z = k, ee = Z.tag;
            if ((Z.mode & 1) === 0 && (ee === 0 || ee === 11 || ee === 15)) {
              var Q = Z.alternate;
              Q ? (Z.updateQueue = Q.updateQueue, Z.memoizedState = Q.memoizedState, Z.lanes = Q.lanes) : (Z.updateQueue = null, Z.memoizedState = null);
            }
            var pe = pm(y);
            if (pe !== null) {
              pe.flags &= -257, gm(pe, y, k, h, t), pe.mode & 1 && hm(h, $, t), t = pe, A = $;
              var we = t.updateQueue;
              if (we === null) {
                var Se = /* @__PURE__ */ new Set();
                Se.add(A), t.updateQueue = Se;
              } else we.add(A);
              break e;
            } else {
              if ((t & 1) === 0) {
                hm(h, $, t), Rc();
                break e;
              }
              A = Error(a(426));
            }
          } else if (tt && k.mode & 1) {
            var ct = pm(y);
            if (ct !== null) {
              (ct.flags & 65536) === 0 && (ct.flags |= 256), gm(ct, y, k, h, t), $l(bs(A, k));
              break e;
            }
          }
          h = A = bs(A, k), pt !== 4 && (pt = 2), Aa === null ? Aa = [h] : Aa.push(h), h = y;
          do {
            switch (h.tag) {
              case 3:
                h.flags |= 65536, t &= -t, h.lanes |= t;
                var L = fm(h, A, t);
                zf(h, L);
                break e;
              case 1:
                k = A;
                var T = h.type, I = h.stateNode;
                if ((h.flags & 128) === 0 && (typeof T.getDerivedStateFromError == "function" || I !== null && typeof I.componentDidCatch == "function" && (dr === null || !dr.has(I)))) {
                  h.flags |= 65536, t &= -t, h.lanes |= t;
                  var ne = mm(h, k, t);
                  zf(h, ne);
                  break e;
                }
            }
            h = h.return;
          } while (h !== null);
        }
        qm(s);
      } catch (ke) {
        t = ke, mt === s && s !== null && (mt = s = s.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Hm() {
    var e = Wo.current;
    return Wo.current = Io, e === null ? Io : e;
  }
  function Rc() {
    (pt === 0 || pt === 3 || pt === 2) && (pt = 4), yt === null || (Mr & 268435455) === 0 && (Ho & 268435455) === 0 || hr(yt, St);
  }
  function Xo(e, t) {
    var s = We;
    We |= 2;
    var l = Hm();
    (yt !== e || St !== t) && (Un = null, Fr(e, t));
    do
      try {
        n0();
        break;
      } catch (d) {
        Wm(e, d);
      }
    while (!0);
    if (Ul(), We = s, Wo.current = l, mt !== null) throw Error(a(261));
    return yt = null, St = 0, pt;
  }
  function n0() {
    for (; mt !== null; ) Gm(mt);
  }
  function r0() {
    for (; mt !== null && !Pv(); ) Gm(mt);
  }
  function Gm(e) {
    var t = Qm(e.alternate, e, Ht);
    e.memoizedProps = e.pendingProps, t === null ? qm(e) : mt = t, bc.current = null;
  }
  function qm(e) {
    var t = e;
    do {
      var s = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (s = Ky(s, t, Ht), s !== null) {
          mt = s;
          return;
        }
      } else {
        if (s = Qy(s, t), s !== null) {
          s.flags &= 32767, mt = s;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          pt = 6, mt = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        mt = t;
        return;
      }
      mt = t = e;
    } while (t !== null);
    pt === 0 && (pt = 5);
  }
  function Lr(e, t, s) {
    var l = Ge, d = nn.transition;
    try {
      nn.transition = null, Ge = 1, s0(e, t, s, l);
    } finally {
      nn.transition = d, Ge = l;
    }
    return null;
  }
  function s0(e, t, s, l) {
    do
      Cs();
    while (fr !== null);
    if ((We & 6) !== 0) throw Error(a(327));
    s = e.finishedWork;
    var d = e.finishedLanes;
    if (s === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, s === e.current) throw Error(a(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var h = s.lanes | s.childLanes;
    if (Iv(e, h), e === yt && (mt = yt = null, St = 0), (s.subtreeFlags & 2064) === 0 && (s.flags & 2064) === 0 || qo || (qo = !0, Xm(eo, function() {
      return Cs(), null;
    })), h = (s.flags & 15990) !== 0, (s.subtreeFlags & 15990) !== 0 || h) {
      h = nn.transition, nn.transition = null;
      var y = Ge;
      Ge = 1;
      var k = We;
      We |= 4, bc.current = null, Zy(e, s), Lm(s, e), Sy(Rl), io = !!_l, Rl = _l = null, e.current = s, Jy(s), _v(), We = k, Ge = y, nn.transition = h;
    } else e.current = s;
    if (qo && (qo = !1, fr = e, Yo = d), h = e.pendingLanes, h === 0 && (dr = null), Tv(s.stateNode), Vt(e, lt()), t !== null) for (l = e.onRecoverableError, s = 0; s < t.length; s++) d = t[s], l(d.value, { componentStack: d.stack, digest: d.digest });
    if (Go) throw Go = !1, e = Sc, Sc = null, e;
    return (Yo & 1) !== 0 && e.tag !== 0 && Cs(), h = e.pendingLanes, (h & 1) !== 0 ? e === Cc ? Ta++ : (Ta = 0, Cc = e) : Ta = 0, ir(), null;
  }
  function Cs() {
    if (fr !== null) {
      var e = Md(Yo), t = nn.transition, s = Ge;
      try {
        if (nn.transition = null, Ge = 16 > e ? 16 : e, fr === null) var l = !1;
        else {
          if (e = fr, fr = null, Yo = 0, (We & 6) !== 0) throw Error(a(331));
          var d = We;
          for (We |= 4, ve = e.current; ve !== null; ) {
            var h = ve, y = h.child;
            if ((ve.flags & 16) !== 0) {
              var k = h.deletions;
              if (k !== null) {
                for (var A = 0; A < k.length; A++) {
                  var $ = k[A];
                  for (ve = $; ve !== null; ) {
                    var Z = ve;
                    switch (Z.tag) {
                      case 0:
                      case 11:
                      case 15:
                        _a(8, Z, h);
                    }
                    var ee = Z.child;
                    if (ee !== null) ee.return = Z, ve = ee;
                    else for (; ve !== null; ) {
                      Z = ve;
                      var Q = Z.sibling, pe = Z.return;
                      if (Tm(Z), Z === $) {
                        ve = null;
                        break;
                      }
                      if (Q !== null) {
                        Q.return = pe, ve = Q;
                        break;
                      }
                      ve = pe;
                    }
                  }
                }
                var we = h.alternate;
                if (we !== null) {
                  var Se = we.child;
                  if (Se !== null) {
                    we.child = null;
                    do {
                      var ct = Se.sibling;
                      Se.sibling = null, Se = ct;
                    } while (Se !== null);
                  }
                }
                ve = h;
              }
            }
            if ((h.subtreeFlags & 2064) !== 0 && y !== null) y.return = h, ve = y;
            else e: for (; ve !== null; ) {
              if (h = ve, (h.flags & 2048) !== 0) switch (h.tag) {
                case 0:
                case 11:
                case 15:
                  _a(9, h, h.return);
              }
              var L = h.sibling;
              if (L !== null) {
                L.return = h.return, ve = L;
                break e;
              }
              ve = h.return;
            }
          }
          var T = e.current;
          for (ve = T; ve !== null; ) {
            y = ve;
            var I = y.child;
            if ((y.subtreeFlags & 2064) !== 0 && I !== null) I.return = y, ve = I;
            else e: for (y = T; ve !== null; ) {
              if (k = ve, (k.flags & 2048) !== 0) try {
                switch (k.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Uo(9, k);
                }
              } catch (ke) {
                at(k, k.return, ke);
              }
              if (k === y) {
                ve = null;
                break e;
              }
              var ne = k.sibling;
              if (ne !== null) {
                ne.return = k.return, ve = ne;
                break e;
              }
              ve = k.return;
            }
          }
          if (We = d, ir(), jn && typeof jn.onPostCommitFiberRoot == "function") try {
            jn.onPostCommitFiberRoot(to, e);
          } catch {
          }
          l = !0;
        }
        return l;
      } finally {
        Ge = s, nn.transition = t;
      }
    }
    return !1;
  }
  function Ym(e, t, s) {
    t = bs(s, t), t = fm(e, t, 1), e = cr(e, t, 1), t = At(), e !== null && (na(e, 1, t), Vt(e, t));
  }
  function at(e, t, s) {
    if (e.tag === 3) Ym(e, e, s);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Ym(t, e, s);
        break;
      } else if (t.tag === 1) {
        var l = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (dr === null || !dr.has(l))) {
          e = bs(s, e), e = mm(t, e, 1), t = cr(t, e, 1), e = At(), t !== null && (na(t, 1, e), Vt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function a0(e, t, s) {
    var l = e.pingCache;
    l !== null && l.delete(t), t = At(), e.pingedLanes |= e.suspendedLanes & s, yt === e && (St & s) === s && (pt === 4 || pt === 3 && (St & 130023424) === St && 500 > lt() - jc ? Fr(e, 0) : Nc |= s), Vt(e, t);
  }
  function Km(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = ro, ro <<= 1, (ro & 130023424) === 0 && (ro = 4194304)));
    var s = At();
    e = Vn(e, t), e !== null && (na(e, t, s), Vt(e, s));
  }
  function o0(e) {
    var t = e.memoizedState, s = 0;
    t !== null && (s = t.retryLane), Km(e, s);
  }
  function i0(e, t) {
    var s = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode, d = e.memoizedState;
        d !== null && (s = d.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      default:
        throw Error(a(314));
    }
    l !== null && l.delete(t), Km(e, s);
  }
  var Qm;
  Qm = function(e, t, s) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Ft.current) It = !0;
    else {
      if ((e.lanes & s) === 0 && (t.flags & 128) === 0) return It = !1, Yy(e, t, s);
      It = (e.flags & 131072) !== 0;
    }
    else It = !1, tt && (t.flags & 1048576) !== 0 && _f(t, ko, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var l = t.type;
        $o(e, t), e = t.pendingProps;
        var d = ms(t, kt.current);
        ys(t, s), d = ec(null, t, l, e, d, s);
        var h = tc();
        return t.flags |= 1, typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Lt(l) ? (h = !0, jo(t)) : h = !1, t.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, ql(t), d.updater = zo, t.stateNode = d, d._reactInternals = t, ic(t, l, e, s), t = dc(null, t, l, !0, h, s)) : (t.tag = 0, tt && h && Ll(t), Rt(null, t, d, s), t = t.child), t;
      case 16:
        l = t.elementType;
        e: {
          switch ($o(e, t), e = t.pendingProps, d = l._init, l = d(l._payload), t.type = l, d = t.tag = c0(l), e = un(l, e), d) {
            case 0:
              t = uc(null, t, l, e, s);
              break e;
            case 1:
              t = Nm(null, t, l, e, s);
              break e;
            case 11:
              t = xm(null, t, l, e, s);
              break e;
            case 14:
              t = vm(null, t, l, un(l.type, e), s);
              break e;
          }
          throw Error(a(
            306,
            l,
            ""
          ));
        }
        return t;
      case 0:
        return l = t.type, d = t.pendingProps, d = t.elementType === l ? d : un(l, d), uc(e, t, l, d, s);
      case 1:
        return l = t.type, d = t.pendingProps, d = t.elementType === l ? d : un(l, d), Nm(e, t, l, d, s);
      case 3:
        e: {
          if (jm(t), e === null) throw Error(a(387));
          l = t.pendingProps, h = t.memoizedState, d = h.element, If(e, t), To(t, l, null, s);
          var y = t.memoizedState;
          if (l = y.element, h.isDehydrated) if (h = { element: l, isDehydrated: !1, cache: y.cache, pendingSuspenseBoundaries: y.pendingSuspenseBoundaries, transitions: y.transitions }, t.updateQueue.baseState = h, t.memoizedState = h, t.flags & 256) {
            d = bs(Error(a(423)), t), t = Sm(e, t, l, s, d);
            break e;
          } else if (l !== d) {
            d = bs(Error(a(424)), t), t = Sm(e, t, l, s, d);
            break e;
          } else for (Wt = sr(t.stateNode.containerInfo.firstChild), Ut = t, tt = !0, cn = null, s = Ff(t, null, l, s), t.child = s; s; ) s.flags = s.flags & -3 | 4096, s = s.sibling;
          else {
            if (gs(), l === d) {
              t = Bn(e, t, s);
              break e;
            }
            Rt(e, t, l, s);
          }
          t = t.child;
        }
        return t;
      case 5:
        return $f(t), e === null && Vl(t), l = t.type, d = t.pendingProps, h = e !== null ? e.memoizedProps : null, y = d.children, Al(l, d) ? y = null : h !== null && Al(l, h) && (t.flags |= 32), bm(e, t), Rt(e, t, y, s), t.child;
      case 6:
        return e === null && Vl(t), null;
      case 13:
        return Cm(e, t, s);
      case 4:
        return Yl(t, t.stateNode.containerInfo), l = t.pendingProps, e === null ? t.child = xs(t, null, l, s) : Rt(e, t, l, s), t.child;
      case 11:
        return l = t.type, d = t.pendingProps, d = t.elementType === l ? d : un(l, d), xm(e, t, l, d, s);
      case 7:
        return Rt(e, t, t.pendingProps, s), t.child;
      case 8:
        return Rt(e, t, t.pendingProps.children, s), t.child;
      case 12:
        return Rt(e, t, t.pendingProps.children, s), t.child;
      case 10:
        e: {
          if (l = t.type._context, d = t.pendingProps, h = t.memoizedProps, y = d.value, Ze(_o, l._currentValue), l._currentValue = y, h !== null) if (ln(h.value, y)) {
            if (h.children === d.children && !Ft.current) {
              t = Bn(e, t, s);
              break e;
            }
          } else for (h = t.child, h !== null && (h.return = t); h !== null; ) {
            var k = h.dependencies;
            if (k !== null) {
              y = h.child;
              for (var A = k.firstContext; A !== null; ) {
                if (A.context === l) {
                  if (h.tag === 1) {
                    A = $n(-1, s & -s), A.tag = 2;
                    var $ = h.updateQueue;
                    if ($ !== null) {
                      $ = $.shared;
                      var Z = $.pending;
                      Z === null ? A.next = A : (A.next = Z.next, Z.next = A), $.pending = A;
                    }
                  }
                  h.lanes |= s, A = h.alternate, A !== null && (A.lanes |= s), Hl(
                    h.return,
                    s,
                    t
                  ), k.lanes |= s;
                  break;
                }
                A = A.next;
              }
            } else if (h.tag === 10) y = h.type === t.type ? null : h.child;
            else if (h.tag === 18) {
              if (y = h.return, y === null) throw Error(a(341));
              y.lanes |= s, k = y.alternate, k !== null && (k.lanes |= s), Hl(y, s, t), y = h.sibling;
            } else y = h.child;
            if (y !== null) y.return = h;
            else for (y = h; y !== null; ) {
              if (y === t) {
                y = null;
                break;
              }
              if (h = y.sibling, h !== null) {
                h.return = y.return, y = h;
                break;
              }
              y = y.return;
            }
            h = y;
          }
          Rt(e, t, d.children, s), t = t.child;
        }
        return t;
      case 9:
        return d = t.type, l = t.pendingProps.children, ys(t, s), d = en(d), l = l(d), t.flags |= 1, Rt(e, t, l, s), t.child;
      case 14:
        return l = t.type, d = un(l, t.pendingProps), d = un(l.type, d), vm(e, t, l, d, s);
      case 15:
        return ym(e, t, t.type, t.pendingProps, s);
      case 17:
        return l = t.type, d = t.pendingProps, d = t.elementType === l ? d : un(l, d), $o(e, t), t.tag = 1, Lt(l) ? (e = !0, jo(t)) : e = !1, ys(t, s), um(t, l, d), ic(t, l, d, s), dc(null, t, l, !0, e, s);
      case 19:
        return Em(e, t, s);
      case 22:
        return wm(e, t, s);
    }
    throw Error(a(156, t.tag));
  };
  function Xm(e, t) {
    return _d(e, t);
  }
  function l0(e, t, s, l) {
    this.tag = e, this.key = s, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function rn(e, t, s, l) {
    return new l0(e, t, s, l);
  }
  function Ac(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function c0(e) {
    if (typeof e == "function") return Ac(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === X) return 11;
      if (e === ye) return 14;
    }
    return 2;
  }
  function pr(e, t) {
    var s = e.alternate;
    return s === null ? (s = rn(e.tag, t, e.key, e.mode), s.elementType = e.elementType, s.type = e.type, s.stateNode = e.stateNode, s.alternate = e, e.alternate = s) : (s.pendingProps = t, s.type = e.type, s.flags = 0, s.subtreeFlags = 0, s.deletions = null), s.flags = e.flags & 14680064, s.childLanes = e.childLanes, s.lanes = e.lanes, s.child = e.child, s.memoizedProps = e.memoizedProps, s.memoizedState = e.memoizedState, s.updateQueue = e.updateQueue, t = e.dependencies, s.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, s.sibling = e.sibling, s.index = e.index, s.ref = e.ref, s;
  }
  function Zo(e, t, s, l, d, h) {
    var y = 2;
    if (l = e, typeof e == "function") Ac(e) && (y = 1);
    else if (typeof e == "string") y = 5;
    else e: switch (e) {
      case H:
        return Ir(s.children, d, h, t);
      case B:
        y = 8, d |= 8;
        break;
      case re:
        return e = rn(12, s, t, d | 2), e.elementType = re, e.lanes = h, e;
      case W:
        return e = rn(13, s, t, d), e.elementType = W, e.lanes = h, e;
      case le:
        return e = rn(19, s, t, d), e.elementType = le, e.lanes = h, e;
      case de:
        return Jo(s, d, h, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case me:
            y = 10;
            break e;
          case J:
            y = 9;
            break e;
          case X:
            y = 11;
            break e;
          case ye:
            y = 14;
            break e;
          case ae:
            y = 16, l = null;
            break e;
        }
        throw Error(a(130, e == null ? e : typeof e, ""));
    }
    return t = rn(y, s, t, d), t.elementType = e, t.type = l, t.lanes = h, t;
  }
  function Ir(e, t, s, l) {
    return e = rn(7, e, l, t), e.lanes = s, e;
  }
  function Jo(e, t, s, l) {
    return e = rn(22, e, l, t), e.elementType = de, e.lanes = s, e.stateNode = { isHidden: !1 }, e;
  }
  function Tc(e, t, s) {
    return e = rn(6, e, null, t), e.lanes = s, e;
  }
  function Dc(e, t, s) {
    return t = rn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = s, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function u0(e, t, s, l, d) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ol(0), this.expirationTimes = ol(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ol(0), this.identifierPrefix = l, this.onRecoverableError = d, this.mutableSourceEagerHydrationData = null;
  }
  function Mc(e, t, s, l, d, h, y, k, A) {
    return e = new u0(e, t, s, k, A), t === 1 ? (t = 1, h === !0 && (t |= 8)) : t = 0, h = rn(3, null, null, t), e.current = h, h.stateNode = e, h.memoizedState = { element: l, isDehydrated: s, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ql(h), e;
  }
  function d0(e, t, s) {
    var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Y, key: l == null ? null : "" + l, children: e, containerInfo: t, implementation: s };
  }
  function Zm(e) {
    if (!e) return or;
    e = e._reactInternals;
    e: {
      if (kr(e) !== e || e.tag !== 1) throw Error(a(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Lt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(a(171));
    }
    if (e.tag === 1) {
      var s = e.type;
      if (Lt(s)) return kf(e, s, t);
    }
    return t;
  }
  function Jm(e, t, s, l, d, h, y, k, A) {
    return e = Mc(s, l, !0, e, d, h, y, k, A), e.context = Zm(null), s = e.current, l = At(), d = mr(s), h = $n(l, d), h.callback = t ?? null, cr(s, h, d), e.current.lanes = d, na(e, d, l), Vt(e, l), e;
  }
  function ei(e, t, s, l) {
    var d = t.current, h = At(), y = mr(d);
    return s = Zm(s), t.context === null ? t.context = s : t.pendingContext = s, t = $n(h, y), t.payload = { element: e }, l = l === void 0 ? null : l, l !== null && (t.callback = l), e = cr(d, t, y), e !== null && (mn(e, d, y, h), Ao(e, d, y)), y;
  }
  function ti(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function eh(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var s = e.retryLane;
      e.retryLane = s !== 0 && s < t ? s : t;
    }
  }
  function Oc(e, t) {
    eh(e, t), (e = e.alternate) && eh(e, t);
  }
  function f0() {
    return null;
  }
  var th = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Fc(e) {
    this._internalRoot = e;
  }
  ni.prototype.render = Fc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(a(409));
    ei(e, t, null, null);
  }, ni.prototype.unmount = Fc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Or(function() {
        ei(null, e, null, null);
      }), t[Fn] = null;
    }
  };
  function ni(e) {
    this._internalRoot = e;
  }
  ni.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Ld();
      e = { blockedOn: null, target: e, priority: t };
      for (var s = 0; s < tr.length && t !== 0 && t < tr[s].priority; s++) ;
      tr.splice(s, 0, e), s === 0 && Vd(e);
    }
  };
  function Lc(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function ri(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function nh() {
  }
  function m0(e, t, s, l, d) {
    if (d) {
      if (typeof l == "function") {
        var h = l;
        l = function() {
          var $ = ti(y);
          h.call($);
        };
      }
      var y = Jm(t, l, e, 0, null, !1, !1, "", nh);
      return e._reactRootContainer = y, e[Fn] = y.current, ga(e.nodeType === 8 ? e.parentNode : e), Or(), y;
    }
    for (; d = e.lastChild; ) e.removeChild(d);
    if (typeof l == "function") {
      var k = l;
      l = function() {
        var $ = ti(A);
        k.call($);
      };
    }
    var A = Mc(e, 0, !1, null, null, !1, !1, "", nh);
    return e._reactRootContainer = A, e[Fn] = A.current, ga(e.nodeType === 8 ? e.parentNode : e), Or(function() {
      ei(t, A, s, l);
    }), A;
  }
  function si(e, t, s, l, d) {
    var h = s._reactRootContainer;
    if (h) {
      var y = h;
      if (typeof d == "function") {
        var k = d;
        d = function() {
          var A = ti(y);
          k.call(A);
        };
      }
      ei(t, y, e, d);
    } else y = m0(s, t, e, d, l);
    return ti(y);
  }
  Od = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var s = ta(t.pendingLanes);
          s !== 0 && (il(t, s | 1), Vt(t, lt()), (We & 6) === 0 && (Ss = lt() + 500, ir()));
        }
        break;
      case 13:
        Or(function() {
          var l = Vn(e, 1);
          if (l !== null) {
            var d = At();
            mn(l, e, 1, d);
          }
        }), Oc(e, 1);
    }
  }, ll = function(e) {
    if (e.tag === 13) {
      var t = Vn(e, 134217728);
      if (t !== null) {
        var s = At();
        mn(t, e, 134217728, s);
      }
      Oc(e, 134217728);
    }
  }, Fd = function(e) {
    if (e.tag === 13) {
      var t = mr(e), s = Vn(e, t);
      if (s !== null) {
        var l = At();
        mn(s, e, t, l);
      }
      Oc(e, t);
    }
  }, Ld = function() {
    return Ge;
  }, Id = function(e, t) {
    var s = Ge;
    try {
      return Ge = e, t();
    } finally {
      Ge = s;
    }
  }, el = function(e, t, s) {
    switch (t) {
      case "input":
        if (Xt(e, s), t = s.name, s.type === "radio" && t != null) {
          for (s = e; s.parentNode; ) s = s.parentNode;
          for (s = s.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < s.length; t++) {
            var l = s[t];
            if (l !== e && l.form === e.form) {
              var d = bo(l);
              if (!d) throw Error(a(90));
              Fe(l), Xt(l, d);
            }
          }
        }
        break;
      case "textarea":
        q(e, s);
        break;
      case "select":
        t = s.value, t != null && On(e, !!s.multiple, t, !1);
    }
  }, Nd = Pc, jd = Or;
  var h0 = { usingClientEntryPoint: !1, Events: [ya, ds, bo, wd, bd, Pc] }, Da = { findFiberByHostInstance: Er, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, p0 = { bundleType: Da.bundleType, version: Da.version, rendererPackageName: Da.rendererPackageName, rendererConfig: Da.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: F.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Ed(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Da.findFiberByHostInstance || f0, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ai = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ai.isDisabled && ai.supportsFiber) try {
      to = ai.inject(p0), jn = ai;
    } catch {
    }
  }
  return $t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = h0, $t.createPortal = function(e, t) {
    var s = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Lc(t)) throw Error(a(200));
    return d0(e, t, null, s);
  }, $t.createRoot = function(e, t) {
    if (!Lc(e)) throw Error(a(299));
    var s = !1, l = "", d = th;
    return t != null && (t.unstable_strictMode === !0 && (s = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (d = t.onRecoverableError)), t = Mc(e, 1, !1, null, null, s, !1, l, d), e[Fn] = t.current, ga(e.nodeType === 8 ? e.parentNode : e), new Fc(t);
  }, $t.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(a(188)) : (e = Object.keys(e).join(","), Error(a(268, e)));
    return e = Ed(t), e = e === null ? null : e.stateNode, e;
  }, $t.flushSync = function(e) {
    return Or(e);
  }, $t.hydrate = function(e, t, s) {
    if (!ri(t)) throw Error(a(200));
    return si(null, e, t, !0, s);
  }, $t.hydrateRoot = function(e, t, s) {
    if (!Lc(e)) throw Error(a(405));
    var l = s != null && s.hydratedSources || null, d = !1, h = "", y = th;
    if (s != null && (s.unstable_strictMode === !0 && (d = !0), s.identifierPrefix !== void 0 && (h = s.identifierPrefix), s.onRecoverableError !== void 0 && (y = s.onRecoverableError)), t = Jm(t, null, e, 1, s ?? null, d, !1, h, y), e[Fn] = t.current, ga(e), l) for (e = 0; e < l.length; e++) s = l[e], d = s._getVersion, d = d(s._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [s, d] : t.mutableSourceEagerHydrationData.push(
      s,
      d
    );
    return new ni(t);
  }, $t.render = function(e, t, s) {
    if (!ri(t)) throw Error(a(200));
    return si(null, e, t, !1, s);
  }, $t.unmountComponentAtNode = function(e) {
    if (!ri(e)) throw Error(a(40));
    return e._reactRootContainer ? (Or(function() {
      si(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Fn] = null;
      });
    }), !0) : !1;
  }, $t.unstable_batchedUpdates = Pc, $t.unstable_renderSubtreeIntoContainer = function(e, t, s, l) {
    if (!ri(s)) throw Error(a(200));
    if (e == null || e._reactInternals === void 0) throw Error(a(38));
    return si(e, t, s, !1, l);
  }, $t.version = "18.3.1-next-f1338f8080-20240426", $t;
}
var uh;
function gp() {
  if (uh) return Vc.exports;
  uh = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (o) {
        console.error(o);
      }
  }
  return n(), Vc.exports = S0(), Vc.exports;
}
var dh;
function C0() {
  if (dh) return oi;
  dh = 1;
  var n = gp();
  return oi.createRoot = n.createRoot, oi.hydrateRoot = n.hydrateRoot, oi;
}
var k0 = C0(), qa = gp();
const E0 = /* @__PURE__ */ Mi(qa);
function P0(n) {
  if (typeof document > "u") return;
  let o = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
  a.type = "text/css", o.appendChild(a), a.styleSheet ? a.styleSheet.cssText = n : a.appendChild(document.createTextNode(n));
}
Array(12).fill(0);
let cu = 1;
class _0 {
  constructor() {
    this.subscribe = (o) => (this.subscribers.push(o), () => {
      const a = this.subscribers.indexOf(o);
      this.subscribers.splice(a, 1);
    }), this.publish = (o) => {
      this.subscribers.forEach((a) => a(o));
    }, this.addToast = (o) => {
      this.publish(o), this.toasts = [
        ...this.toasts,
        o
      ];
    }, this.create = (o) => {
      var a;
      const { message: i, ...c } = o, u = typeof (o == null ? void 0 : o.id) == "number" || ((a = o.id) == null ? void 0 : a.length) > 0 ? o.id : cu++, f = this.toasts.find((p) => p.id === u), m = o.dismissible === void 0 ? !0 : o.dismissible;
      return this.dismissedToasts.has(u) && this.dismissedToasts.delete(u), f ? this.toasts = this.toasts.map((p) => p.id === u ? (this.publish({
        ...p,
        ...o,
        id: u,
        title: i
      }), {
        ...p,
        ...o,
        id: u,
        dismissible: m,
        title: i
      }) : p) : this.addToast({
        title: i,
        ...c,
        dismissible: m,
        id: u
      }), u;
    }, this.dismiss = (o) => (o ? (this.dismissedToasts.add(o), requestAnimationFrame(() => this.subscribers.forEach((a) => a({
      id: o,
      dismiss: !0
    })))) : this.toasts.forEach((a) => {
      this.subscribers.forEach((i) => i({
        id: a.id,
        dismiss: !0
      }));
    }), o), this.message = (o, a) => this.create({
      ...a,
      message: o
    }), this.error = (o, a) => this.create({
      ...a,
      message: o,
      type: "error"
    }), this.success = (o, a) => this.create({
      ...a,
      type: "success",
      message: o
    }), this.info = (o, a) => this.create({
      ...a,
      type: "info",
      message: o
    }), this.warning = (o, a) => this.create({
      ...a,
      type: "warning",
      message: o
    }), this.loading = (o, a) => this.create({
      ...a,
      type: "loading",
      message: o
    }), this.promise = (o, a) => {
      if (!a)
        return;
      let i;
      a.loading !== void 0 && (i = this.create({
        ...a,
        promise: o,
        type: "loading",
        message: a.loading,
        description: typeof a.description != "function" ? a.description : void 0
      }));
      const c = Promise.resolve(o instanceof Function ? o() : o);
      let u = i !== void 0, f;
      const m = c.then(async (g) => {
        if (f = [
          "resolve",
          g
        ], Te.isValidElement(g))
          u = !1, this.create({
            id: i,
            type: "default",
            message: g
          });
        else if (A0(g) && !g.ok) {
          u = !1;
          const x = typeof a.error == "function" ? await a.error(`HTTP error! status: ${g.status}`) : a.error, b = typeof a.description == "function" ? await a.description(`HTTP error! status: ${g.status}`) : a.description, j = typeof x == "object" && !Te.isValidElement(x) ? x : {
            message: x
          };
          this.create({
            id: i,
            type: "error",
            description: b,
            ...j
          });
        } else if (g instanceof Error) {
          u = !1;
          const x = typeof a.error == "function" ? await a.error(g) : a.error, b = typeof a.description == "function" ? await a.description(g) : a.description, j = typeof x == "object" && !Te.isValidElement(x) ? x : {
            message: x
          };
          this.create({
            id: i,
            type: "error",
            description: b,
            ...j
          });
        } else if (a.success !== void 0) {
          u = !1;
          const x = typeof a.success == "function" ? await a.success(g) : a.success, b = typeof a.description == "function" ? await a.description(g) : a.description, j = typeof x == "object" && !Te.isValidElement(x) ? x : {
            message: x
          };
          this.create({
            id: i,
            type: "success",
            description: b,
            ...j
          });
        }
      }).catch(async (g) => {
        if (f = [
          "reject",
          g
        ], a.error !== void 0) {
          u = !1;
          const v = typeof a.error == "function" ? await a.error(g) : a.error, x = typeof a.description == "function" ? await a.description(g) : a.description, S = typeof v == "object" && !Te.isValidElement(v) ? v : {
            message: v
          };
          this.create({
            id: i,
            type: "error",
            description: x,
            ...S
          });
        }
      }).finally(() => {
        u && (this.dismiss(i), i = void 0), a.finally == null || a.finally.call(a);
      }), p = () => new Promise((g, v) => m.then(() => f[0] === "reject" ? v(f[1]) : g(f[1])).catch(v));
      return typeof i != "string" && typeof i != "number" ? {
        unwrap: p
      } : Object.assign(i, {
        unwrap: p
      });
    }, this.custom = (o, a) => {
      const i = (a == null ? void 0 : a.id) || cu++;
      return this.create({
        jsx: o(i),
        id: i,
        ...a
      }), i;
    }, this.getActiveToasts = () => this.toasts.filter((o) => !this.dismissedToasts.has(o.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}
const sn = new _0(), R0 = (n, o) => {
  const a = (o == null ? void 0 : o.id) || cu++;
  return sn.addToast({
    title: n,
    ...o,
    id: a
  }), a;
}, A0 = (n) => n && typeof n == "object" && "ok" in n && typeof n.ok == "boolean" && "status" in n && typeof n.status == "number", T0 = R0, D0 = () => sn.toasts, M0 = () => sn.getActiveToasts(), qt = Object.assign(T0, {
  success: sn.success,
  info: sn.info,
  warning: sn.warning,
  error: sn.error,
  custom: sn.custom,
  message: sn.message,
  promise: sn.promise,
  dismiss: sn.dismiss,
  loading: sn.loading
}, {
  getHistory: D0,
  getToasts: M0
});
P0("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}[data-sonner-toaster][data-lifted=true]{transform:translateY(-8px)}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O0 = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), F0 = (n) => n.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (o, a, i) => i ? i.toUpperCase() : a.toLowerCase()
), fh = (n) => {
  const o = F0(n);
  return o.charAt(0).toUpperCase() + o.slice(1);
}, xp = (...n) => n.filter((o, a, i) => !!o && o.trim() !== "" && i.indexOf(o) === a).join(" ").trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var L0 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I0 = w.forwardRef(
  ({
    color: n = "currentColor",
    size: o = 24,
    strokeWidth: a = 2,
    absoluteStrokeWidth: i,
    className: c = "",
    children: u,
    iconNode: f,
    ...m
  }, p) => w.createElement(
    "svg",
    {
      ref: p,
      ...L0,
      width: o,
      height: o,
      stroke: n,
      strokeWidth: i ? Number(a) * 24 / Number(o) : a,
      className: xp("lucide", c),
      ...m
    },
    [
      ...f.map(([g, v]) => w.createElement(g, v)),
      ...Array.isArray(u) ? u : [u]
    ]
  )
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $e = (n, o) => {
  const a = w.forwardRef(
    ({ className: i, ...c }, u) => w.createElement(I0, {
      ref: u,
      iconNode: o,
      className: xp(
        `lucide-${O0(fh(n))}`,
        `lucide-${n}`,
        i
      ),
      ...c
    })
  );
  return a.displayName = fh(n), a;
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z0 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], Ya = $e("arrow-left", z0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V0 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], Tu = $e("calendar", V0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $0 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Ha = $e("check", $0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B0 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Du = $e("chevron-down", B0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U0 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], vp = $e("chevron-up", U0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W0 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], $a = $e("circle-alert", W0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H0 = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], G0 = $e("circle-check-big", H0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q0 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], uu = $e("circle-check", q0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y0 = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], K0 = $e("circle", Y0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q0 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
], Ls = $e("clock", Q0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X0 = [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
], Oi = $e("credit-card", X0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z0 = [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
], J0 = $e("database", Z0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ew = [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
], bi = $e("dollar-sign", ew);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tw = [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
], du = $e("download", tw);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nw = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], rw = $e("eye", nw);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sw = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], Ba = $e("file-text", sw);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aw = [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0"
    }
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]
], Fi = $e("graduation-cap", aw);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ow = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt"
    }
  ]
], yp = $e("house", ow);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iw = [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
  ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
  ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]
], lw = $e("layout-dashboard", iw);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cw = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], Mu = $e("loader-circle", cw);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uw = [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
], wp = $e("log-out", uw);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dw = [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
], Us = $e("mail", dw);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fw = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
], Ou = $e("map-pin", fw);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mw = [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
], bp = $e("menu", mw);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hw = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
], pw = $e("pencil", hw);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gw = [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
], xw = $e("phone", gw);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vw = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Ts = $e("plus", vw);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yw = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
], Uc = $e("rotate-ccw", yw);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ww = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
], Np = $e("search", ww);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bw = [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Nw = $e("settings", bw);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jw = [
  ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
  ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506"
    }
  ]
], Sw = $e("shopping-cart", jw);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cw = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2"
    }
  ]
], kw = $e("square-pen", Cw);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ew = [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
], Pw = $e("tag", Ew);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _w = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
], Fu = $e("trash-2", _w);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rw = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
], Ws = $e("user-plus", Rw);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Aw = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
], Li = $e("users", Aw);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tw = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Lu = $e("x", Tw), mh = [
  { id: 1, label: "Student Info" },
  { id: 2, label: "Class Selection" },
  { id: 3, label: "Waivers" },
  { id: 4, label: "Payment" }
];
function Dw({ currentStage: n, onStageClick: o, completedStages: a = [] }) {
  if (n === 0 || n === "success") return null;
  const i = n === "1b" ? 1 : n, c = (u) => u === i || a.includes(u);
  return /* @__PURE__ */ r.jsx("div", { className: "w-full bg-white border-b border-gray-200", children: /* @__PURE__ */ r.jsx("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6", children: /* @__PURE__ */ r.jsx("nav", { "aria-label": "Progress", children: /* @__PURE__ */ r.jsx("ol", { className: "flex items-center justify-between", children: mh.map((u, f) => {
    const m = u.id < i, p = u.id === i, g = u.id > i, v = c(u.id);
    return /* @__PURE__ */ r.jsx("li", { className: "flex-1 relative", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col items-center flex-shrink-0", children: [
        /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            onClick: () => v && (o == null ? void 0 : o(u.id)),
            disabled: !v,
            title: v ? `Go to ${u.label}` : u.label,
            className: `
                          w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200
                          ${m ? "bg-[#326389] text-white hover:bg-[#326389]/80" : ""}
                          ${p ? "bg-[#326389] text-white ring-4 ring-[#326389]/20" : ""}
                          ${g ? "bg-gray-200 text-gray-500" : ""}
                          ${v && !p ? "cursor-pointer hover:scale-110 hover:shadow-md" : ""}
                          ${v ? "" : "cursor-not-allowed"}
                        `,
            "aria-current": p ? "step" : void 0,
            "aria-label": `Go to ${u.label}`,
            children: m ? /* @__PURE__ */ r.jsx(Ha, { className: "w-5 h-5" }) : /* @__PURE__ */ r.jsx("span", { className: "text-sm font-semibold", children: u.id })
          }
        ),
        /* @__PURE__ */ r.jsx(
          "span",
          {
            className: `
                          mt-2 text-xs font-medium whitespace-nowrap
                          ${p ? "text-[#326389]" : ""}
                          ${m ? "text-gray-700" : ""}
                          ${g ? "text-gray-400" : ""}
                        `,
            children: u.label
          }
        )
      ] }),
      f < mh.length - 1 && /* @__PURE__ */ r.jsx(
        "div",
        {
          className: `
                          flex-1 h-0.5 mx-4 transition-all duration-200
                          ${m ? "bg-[#326389]" : "bg-gray-200"}
                        `
        }
      )
    ] }) }, u.id);
  }) }) }) }) });
}
function hh(n, o) {
  if (typeof n == "function")
    return n(o);
  n != null && (n.current = o);
}
function jp(...n) {
  return (o) => {
    let a = !1;
    const i = n.map((c) => {
      const u = hh(c, o);
      return !a && typeof u == "function" && (a = !0), u;
    });
    if (a)
      return () => {
        for (let c = 0; c < i.length; c++) {
          const u = i[c];
          typeof u == "function" ? u() : hh(n[c], null);
        }
      };
  };
}
function qe(...n) {
  return w.useCallback(jp(...n), n);
}
var br = w.forwardRef((n, o) => {
  const { children: a, ...i } = n, c = w.Children.toArray(a), u = c.find(Mw);
  if (u) {
    const f = u.props.children, m = c.map((p) => p === u ? w.Children.count(f) > 1 ? w.Children.only(null) : w.isValidElement(f) ? f.props.children : null : p);
    return /* @__PURE__ */ r.jsx(fu, { ...i, ref: o, children: w.isValidElement(f) ? w.cloneElement(f, void 0, m) : null });
  }
  return /* @__PURE__ */ r.jsx(fu, { ...i, ref: o, children: a });
});
br.displayName = "Slot";
var fu = w.forwardRef((n, o) => {
  const { children: a, ...i } = n;
  if (w.isValidElement(a)) {
    const c = Fw(a), u = Ow(i, a.props);
    return a.type !== w.Fragment && (u.ref = o ? jp(o, c) : c), w.cloneElement(a, u);
  }
  return w.Children.count(a) > 1 ? w.Children.only(null) : null;
});
fu.displayName = "SlotClone";
var Sp = ({ children: n }) => /* @__PURE__ */ r.jsx(r.Fragment, { children: n });
function Mw(n) {
  return w.isValidElement(n) && n.type === Sp;
}
function Ow(n, o) {
  const a = { ...o };
  for (const i in o) {
    const c = n[i], u = o[i];
    /^on[A-Z]/.test(i) ? c && u ? a[i] = (...m) => {
      u(...m), c(...m);
    } : c && (a[i] = c) : i === "style" ? a[i] = { ...c, ...u } : i === "className" && (a[i] = [c, u].filter(Boolean).join(" "));
  }
  return { ...n, ...a };
}
function Fw(n) {
  var i, c;
  let o = (i = Object.getOwnPropertyDescriptor(n.props, "ref")) == null ? void 0 : i.get, a = o && "isReactWarning" in o && o.isReactWarning;
  return a ? n.ref : (o = (c = Object.getOwnPropertyDescriptor(n, "ref")) == null ? void 0 : c.get, a = o && "isReactWarning" in o && o.isReactWarning, a ? n.props.ref : n.props.ref || n.ref);
}
function Cp(n) {
  var o, a, i = "";
  if (typeof n == "string" || typeof n == "number") i += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var c = n.length;
    for (o = 0; o < c; o++) n[o] && (a = Cp(n[o])) && (i && (i += " "), i += a);
  } else for (a in n) n[a] && (i && (i += " "), i += a);
  return i;
}
function kp() {
  for (var n, o, a = 0, i = "", c = arguments.length; a < c; a++) (n = arguments[a]) && (o = Cp(n)) && (i && (i += " "), i += o);
  return i;
}
const ph = (n) => typeof n == "boolean" ? `${n}` : n === 0 ? "0" : n, gh = kp, Ep = (n, o) => (a) => {
  var i;
  if ((o == null ? void 0 : o.variants) == null) return gh(n, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
  const { variants: c, defaultVariants: u } = o, f = Object.keys(c).map((g) => {
    const v = a == null ? void 0 : a[g], x = u == null ? void 0 : u[g];
    if (v === null) return null;
    const b = ph(v) || ph(x);
    return c[g][b];
  }), m = a && Object.entries(a).reduce((g, v) => {
    let [x, b] = v;
    return b === void 0 || (g[x] = b), g;
  }, {}), p = o == null || (i = o.compoundVariants) === null || i === void 0 ? void 0 : i.reduce((g, v) => {
    let { class: x, className: b, ...S } = v;
    return Object.entries(S).every((j) => {
      let [N, C] = j;
      return Array.isArray(C) ? C.includes({
        ...u,
        ...m
      }[N]) : {
        ...u,
        ...m
      }[N] === C;
    }) ? [
      ...g,
      x,
      b
    ] : g;
  }, []);
  return gh(n, f, p, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
}, Iu = "-", Lw = (n) => {
  const o = zw(n), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: i
  } = n;
  return {
    getClassGroupId: (f) => {
      const m = f.split(Iu);
      return m[0] === "" && m.length !== 1 && m.shift(), Pp(m, o) || Iw(f);
    },
    getConflictingClassGroupIds: (f, m) => {
      const p = a[f] || [];
      return m && i[f] ? [...p, ...i[f]] : p;
    }
  };
}, Pp = (n, o) => {
  var f;
  if (n.length === 0)
    return o.classGroupId;
  const a = n[0], i = o.nextPart.get(a), c = i ? Pp(n.slice(1), i) : void 0;
  if (c)
    return c;
  if (o.validators.length === 0)
    return;
  const u = n.join(Iu);
  return (f = o.validators.find(({
    validator: m
  }) => m(u))) == null ? void 0 : f.classGroupId;
}, xh = /^\[(.+)\]$/, Iw = (n) => {
  if (xh.test(n)) {
    const o = xh.exec(n)[1], a = o == null ? void 0 : o.substring(0, o.indexOf(":"));
    if (a)
      return "arbitrary.." + a;
  }
}, zw = (n) => {
  const {
    theme: o,
    classGroups: a
  } = n, i = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const c in a)
    mu(a[c], i, c, o);
  return i;
}, mu = (n, o, a, i) => {
  n.forEach((c) => {
    if (typeof c == "string") {
      const u = c === "" ? o : vh(o, c);
      u.classGroupId = a;
      return;
    }
    if (typeof c == "function") {
      if (Vw(c)) {
        mu(c(i), o, a, i);
        return;
      }
      o.validators.push({
        validator: c,
        classGroupId: a
      });
      return;
    }
    Object.entries(c).forEach(([u, f]) => {
      mu(f, vh(o, u), a, i);
    });
  });
}, vh = (n, o) => {
  let a = n;
  return o.split(Iu).forEach((i) => {
    a.nextPart.has(i) || a.nextPart.set(i, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(i);
  }), a;
}, Vw = (n) => n.isThemeGetter, $w = (n) => {
  if (n < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let o = 0, a = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  const c = (u, f) => {
    a.set(u, f), o++, o > n && (o = 0, i = a, a = /* @__PURE__ */ new Map());
  };
  return {
    get(u) {
      let f = a.get(u);
      if (f !== void 0)
        return f;
      if ((f = i.get(u)) !== void 0)
        return c(u, f), f;
    },
    set(u, f) {
      a.has(u) ? a.set(u, f) : c(u, f);
    }
  };
}, hu = "!", pu = ":", Bw = pu.length, Uw = (n) => {
  const {
    prefix: o,
    experimentalParseClassName: a
  } = n;
  let i = (c) => {
    const u = [];
    let f = 0, m = 0, p = 0, g;
    for (let j = 0; j < c.length; j++) {
      let N = c[j];
      if (f === 0 && m === 0) {
        if (N === pu) {
          u.push(c.slice(p, j)), p = j + Bw;
          continue;
        }
        if (N === "/") {
          g = j;
          continue;
        }
      }
      N === "[" ? f++ : N === "]" ? f-- : N === "(" ? m++ : N === ")" && m--;
    }
    const v = u.length === 0 ? c : c.substring(p), x = Ww(v), b = x !== v, S = g && g > p ? g - p : void 0;
    return {
      modifiers: u,
      hasImportantModifier: b,
      baseClassName: x,
      maybePostfixModifierPosition: S
    };
  };
  if (o) {
    const c = o + pu, u = i;
    i = (f) => f.startsWith(c) ? u(f.substring(c.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: f,
      maybePostfixModifierPosition: void 0
    };
  }
  if (a) {
    const c = i;
    i = (u) => a({
      className: u,
      parseClassName: c
    });
  }
  return i;
}, Ww = (n) => n.endsWith(hu) ? n.substring(0, n.length - 1) : n.startsWith(hu) ? n.substring(1) : n, Hw = (n) => {
  const o = Object.fromEntries(n.orderSensitiveModifiers.map((i) => [i, !0]));
  return (i) => {
    if (i.length <= 1)
      return i;
    const c = [];
    let u = [];
    return i.forEach((f) => {
      f[0] === "[" || o[f] ? (c.push(...u.sort(), f), u = []) : u.push(f);
    }), c.push(...u.sort()), c;
  };
}, Gw = (n) => ({
  cache: $w(n.cacheSize),
  parseClassName: Uw(n),
  sortModifiers: Hw(n),
  ...Lw(n)
}), qw = /\s+/, Yw = (n, o) => {
  const {
    parseClassName: a,
    getClassGroupId: i,
    getConflictingClassGroupIds: c,
    sortModifiers: u
  } = o, f = [], m = n.trim().split(qw);
  let p = "";
  for (let g = m.length - 1; g >= 0; g -= 1) {
    const v = m[g], {
      isExternal: x,
      modifiers: b,
      hasImportantModifier: S,
      baseClassName: j,
      maybePostfixModifierPosition: N
    } = a(v);
    if (x) {
      p = v + (p.length > 0 ? " " + p : p);
      continue;
    }
    let C = !!N, P = i(C ? j.substring(0, N) : j);
    if (!P) {
      if (!C) {
        p = v + (p.length > 0 ? " " + p : p);
        continue;
      }
      if (P = i(j), !P) {
        p = v + (p.length > 0 ? " " + p : p);
        continue;
      }
      C = !1;
    }
    const E = u(b).join(":"), O = S ? E + hu : E, F = O + P;
    if (f.includes(F))
      continue;
    f.push(F);
    const D = c(P, C);
    for (let Y = 0; Y < D.length; ++Y) {
      const H = D[Y];
      f.push(O + H);
    }
    p = v + (p.length > 0 ? " " + p : p);
  }
  return p;
};
function Kw() {
  let n = 0, o, a, i = "";
  for (; n < arguments.length; )
    (o = arguments[n++]) && (a = _p(o)) && (i && (i += " "), i += a);
  return i;
}
const _p = (n) => {
  if (typeof n == "string")
    return n;
  let o, a = "";
  for (let i = 0; i < n.length; i++)
    n[i] && (o = _p(n[i])) && (a && (a += " "), a += o);
  return a;
};
function Qw(n, ...o) {
  let a, i, c, u = f;
  function f(p) {
    const g = o.reduce((v, x) => x(v), n());
    return a = Gw(g), i = a.cache.get, c = a.cache.set, u = m, m(p);
  }
  function m(p) {
    const g = i(p);
    if (g)
      return g;
    const v = Yw(p, a);
    return c(p, v), v;
  }
  return function() {
    return u(Kw.apply(null, arguments));
  };
}
const gt = (n) => {
  const o = (a) => a[n] || [];
  return o.isThemeGetter = !0, o;
}, Rp = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ap = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Xw = /^\d+\/\d+$/, Zw = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Jw = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, e1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, t1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, n1 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ks = (n) => Xw.test(n), Le = (n) => !!n && !Number.isNaN(Number(n)), xr = (n) => !!n && Number.isInteger(Number(n)), Wc = (n) => n.endsWith("%") && Le(n.slice(0, -1)), Wn = (n) => Zw.test(n), r1 = () => !0, s1 = (n) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Jw.test(n) && !e1.test(n)
), Tp = () => !1, a1 = (n) => t1.test(n), o1 = (n) => n1.test(n), i1 = (n) => !be(n) && !Ne(n), l1 = (n) => Hs(n, Op, Tp), be = (n) => Rp.test(n), zr = (n) => Hs(n, Fp, s1), Hc = (n) => Hs(n, m1, Le), yh = (n) => Hs(n, Dp, Tp), c1 = (n) => Hs(n, Mp, o1), ii = (n) => Hs(n, Lp, a1), Ne = (n) => Ap.test(n), Oa = (n) => Gs(n, Fp), u1 = (n) => Gs(n, h1), wh = (n) => Gs(n, Dp), d1 = (n) => Gs(n, Op), f1 = (n) => Gs(n, Mp), li = (n) => Gs(n, Lp, !0), Hs = (n, o, a) => {
  const i = Rp.exec(n);
  return i ? i[1] ? o(i[1]) : a(i[2]) : !1;
}, Gs = (n, o, a = !1) => {
  const i = Ap.exec(n);
  return i ? i[1] ? o(i[1]) : a : !1;
}, Dp = (n) => n === "position" || n === "percentage", Mp = (n) => n === "image" || n === "url", Op = (n) => n === "length" || n === "size" || n === "bg-size", Fp = (n) => n === "length", m1 = (n) => n === "number", h1 = (n) => n === "family-name", Lp = (n) => n === "shadow", p1 = () => {
  const n = gt("color"), o = gt("font"), a = gt("text"), i = gt("font-weight"), c = gt("tracking"), u = gt("leading"), f = gt("breakpoint"), m = gt("container"), p = gt("spacing"), g = gt("radius"), v = gt("shadow"), x = gt("inset-shadow"), b = gt("text-shadow"), S = gt("drop-shadow"), j = gt("blur"), N = gt("perspective"), C = gt("aspect"), P = gt("ease"), E = gt("animate"), O = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], F = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], D = () => [...F(), Ne, be], Y = () => ["auto", "hidden", "clip", "visible", "scroll"], H = () => ["auto", "contain", "none"], B = () => [Ne, be, p], re = () => [ks, "full", "auto", ...B()], me = () => [xr, "none", "subgrid", Ne, be], J = () => ["auto", {
    span: ["full", xr, Ne, be]
  }, xr, Ne, be], X = () => [xr, "auto", Ne, be], W = () => ["auto", "min", "max", "fr", Ne, be], le = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], ye = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], ae = () => ["auto", ...B()], de = () => [ks, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...B()], M = () => [n, Ne, be], U = () => [...F(), wh, yh, {
    position: [Ne, be]
  }], G = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], _ = () => ["auto", "cover", "contain", d1, l1, {
    size: [Ne, be]
  }], z = () => [Wc, Oa, zr], oe = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    g,
    Ne,
    be
  ], ue = () => ["", Le, Oa, zr], ce = () => ["solid", "dashed", "dotted", "double"], je = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], K = () => [Le, Wc, wh, yh], ge = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    j,
    Ne,
    be
  ], Ee = () => ["none", Le, Ne, be], Ae = () => ["none", Le, Ne, be], Oe = () => [Le, Ne, be], Fe = () => [ks, "full", ...B()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Wn],
      breakpoint: [Wn],
      color: [r1],
      container: [Wn],
      "drop-shadow": [Wn],
      ease: ["in", "out", "in-out"],
      font: [i1],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Wn],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Wn],
      shadow: [Wn],
      spacing: ["px", Le],
      text: [Wn],
      "text-shadow": [Wn],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", ks, be, Ne, C]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Le, be, Ne, m]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": O()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": O()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: D()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: Y()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": Y()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": Y()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: H()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": H()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": H()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: re()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": re()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": re()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: re()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: re()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: re()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: re()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: re()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: re()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [xr, "auto", Ne, be]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ks, "full", "auto", m, ...B()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [Le, ks, "auto", "initial", "none", be]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Le, Ne, be]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Le, Ne, be]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [xr, "first", "last", "none", Ne, be]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": me()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: J()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": X()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": X()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": me()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: J()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": X()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": X()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": W()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": W()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: B()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": B()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": B()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...le(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...ye(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...ye()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...le()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...ye(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...ye(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": le()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...ye(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...ye()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: B()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: B()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: B()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: B()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: B()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: B()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: B()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: B()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: B()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: ae()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: ae()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: ae()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: ae()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: ae()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: ae()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: ae()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: ae()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: ae()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": B()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": B()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: de()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [m, "screen", ...de()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          m,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...de()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          m,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [f]
          },
          ...de()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...de()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...de()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...de()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", a, Oa, zr]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [i, Ne, Hc]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Wc, be]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [u1, be, o]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [c, Ne, be]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [Le, "none", Ne, Hc]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          u,
          ...B()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Ne, be]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", Ne, be]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: M()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: M()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...ce(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [Le, "from-font", "auto", Ne, zr]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: M()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [Le, "auto", Ne, be]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: B()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Ne, be]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", Ne, be]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: U()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: G()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: _()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, xr, Ne, be],
          radial: ["", Ne, be],
          conic: [xr, Ne, be]
        }, f1, c1]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: M()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: z()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: z()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: z()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: M()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: M()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: M()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: oe()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": oe()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": oe()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": oe()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": oe()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": oe()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": oe()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": oe()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": oe()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": oe()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": oe()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": oe()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": oe()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": oe()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": oe()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: ue()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": ue()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": ue()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": ue()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": ue()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": ue()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": ue()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": ue()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": ue()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": ue()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": ue()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...ce(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...ce(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: M()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": M()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": M()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": M()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": M()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": M()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": M()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": M()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": M()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: M()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...ce(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Le, Ne, be]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", Le, Oa, zr]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: M()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          v,
          li,
          ii
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: M()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", x, li, ii]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": M()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: ue()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: M()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [Le, zr]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": M()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": ue()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": M()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", b, li, ii]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": M()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [Le, Ne, be]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...je(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": je()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [Le]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": K()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": K()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": M()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": M()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": K()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": K()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": M()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": M()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": K()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": K()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": M()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": M()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": K()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": K()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": M()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": M()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": K()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": K()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": M()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": M()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": K()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": K()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": M()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": M()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": K()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": K()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": M()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": M()
      }],
      "mask-image-radial": [{
        "mask-radial": [Ne, be]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": K()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": K()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": M()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": M()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": F()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [Le]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": K()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": K()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": M()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": M()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: U()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: G()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: _()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", Ne, be]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          Ne,
          be
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: ge()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [Le, Ne, be]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Le, Ne, be]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          S,
          li,
          ii
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": M()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", Le, Ne, be]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Le, Ne, be]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Le, Ne, be]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Le, Ne, be]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Le, Ne, be]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          Ne,
          be
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": ge()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [Le, Ne, be]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Le, Ne, be]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Le, Ne, be]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Le, Ne, be]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Le, Ne, be]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Le, Ne, be]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Le, Ne, be]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Le, Ne, be]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": B()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": B()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": B()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", Ne, be]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [Le, "initial", Ne, be]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", P, Ne, be]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [Le, Ne, be]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", E, Ne, be]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [N, Ne, be]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": D()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Ee()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Ee()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Ee()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Ee()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: Ae()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": Ae()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": Ae()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": Ae()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: Oe()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Oe()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Oe()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [Ne, be, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: D()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: Fe()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Fe()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Fe()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Fe()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: M()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: M()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Ne, be]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": B()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": B()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": B()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": B()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": B()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": B()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": B()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": B()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": B()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": B()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": B()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": B()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": B()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": B()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": B()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": B()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": B()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": B()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", Ne, be]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...M()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Le, Oa, zr, Hc]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...M()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, g1 = /* @__PURE__ */ Qw(p1);
function Be(...n) {
  return g1(kp(n));
}
const zu = Ep(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9 rounded-md"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Ce = w.forwardRef(({ className: n, variant: o, size: a, asChild: i = !1, ...c }, u) => {
  const f = i ? br : "button";
  return /* @__PURE__ */ r.jsx(
    f,
    {
      "data-slot": "button",
      className: Be(zu({ variant: o, size: a, className: n })),
      ref: u,
      ...c
    }
  );
});
Ce.displayName = "Button";
const Pe = w.forwardRef(
  ({ className: n, type: o, ...a }, i) => /* @__PURE__ */ r.jsx(
    "input",
    {
      type: o,
      "data-slot": "input",
      className: Be(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        n
      ),
      ref: i,
      ...a
    }
  )
);
Pe.displayName = "Input";
var x1 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], Ve = x1.reduce((n, o) => {
  const a = w.forwardRef((i, c) => {
    const { asChild: u, ...f } = i, m = u ? br : o;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ r.jsx(m, { ...f, ref: c });
  });
  return a.displayName = `Primitive.${o}`, { ...n, [o]: a };
}, {});
function v1(n, o) {
  n && qa.flushSync(() => n.dispatchEvent(o));
}
var y1 = "Label", Ip = w.forwardRef((n, o) => /* @__PURE__ */ r.jsx(
  Ve.label,
  {
    ...n,
    ref: o,
    onMouseDown: (a) => {
      var c;
      a.target.closest("button, input, select, textarea") || ((c = n.onMouseDown) == null || c.call(n, a), !a.defaultPrevented && a.detail > 1 && a.preventDefault());
    }
  }
));
Ip.displayName = y1;
var w1 = Ip;
function se({
  className: n,
  ...o
}) {
  return /* @__PURE__ */ r.jsx(
    w1,
    {
      "data-slot": "label",
      className: Be(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        n
      ),
      ...o
    }
  );
}
function b1({ onAuthComplete: n }) {
  const [o, a] = w.useState(""), [i, c] = w.useState(""), [u, f] = w.useState(!1), [m, p] = w.useState(!1), g = async (x) => {
    x.preventDefault(), p(!0), setTimeout(() => {
      n({
        memberId: "member_" + Date.now(),
        email: o,
        isReturning: !u
      }), p(!1);
    }, 800);
  }, v = (x) => {
    p(!0), setTimeout(() => {
      n({
        memberId: "member_sso_" + Date.now(),
        email: `user@${x}.com`,
        isReturning: Math.random() > 0.5
      }), p(!1);
    }, 1e3);
  };
  return /* @__PURE__ */ r.jsx("div", { className: "w-full bg-gray-50 flex flex-col items-center justify-center p-4", children: /* @__PURE__ */ r.jsxs("div", { className: "w-full max-w-md", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ r.jsx("h1", { className: "text-3xl font-bold text-[#326389] mb-2", children: "The New Hebrew Program" }),
      /* @__PURE__ */ r.jsx("p", { className: "text-gray-600", children: u ? "Create an account to register" : "Sign in to continue" })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "bg-white rounded-xl shadow-sm border border-gray-200 p-8", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "space-y-3 mb-6", children: [
        /* @__PURE__ */ r.jsxs(
          Ce,
          {
            type: "button",
            variant: "outline",
            className: "w-full h-12 flex items-center justify-center gap-3",
            onClick: () => v("google"),
            disabled: m,
            children: [
              /* @__PURE__ */ r.jsxs("svg", { className: "w-5 h-5", viewBox: "0 0 24 24", children: [
                /* @__PURE__ */ r.jsx(
                  "path",
                  {
                    fill: "#4285F4",
                    d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  "path",
                  {
                    fill: "#34A853",
                    d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  "path",
                  {
                    fill: "#FBBC05",
                    d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  "path",
                  {
                    fill: "#EA4335",
                    d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  }
                )
              ] }),
              "Continue with Google"
            ]
          }
        ),
        /* @__PURE__ */ r.jsxs(
          Ce,
          {
            type: "button",
            variant: "outline",
            className: "w-full h-12 flex items-center justify-center gap-3",
            onClick: () => v("apple"),
            disabled: m,
            children: [
              /* @__PURE__ */ r.jsx("svg", { className: "w-5 h-5", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ r.jsx("path", { d: "M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" }) }),
              "Continue with Apple"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "relative my-6", children: [
        /* @__PURE__ */ r.jsx("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ r.jsx("div", { className: "w-full border-t border-gray-200" }) }),
        /* @__PURE__ */ r.jsx("div", { className: "relative flex justify-center text-sm", children: /* @__PURE__ */ r.jsx("span", { className: "px-4 bg-white text-gray-500", children: "Or continue with email" }) })
      ] }),
      /* @__PURE__ */ r.jsxs("form", { onSubmit: g, className: "space-y-4", children: [
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx(se, { htmlFor: "email", children: "Email" }),
          /* @__PURE__ */ r.jsx(
            Pe,
            {
              id: "email",
              type: "email",
              placeholder: "parent@example.com",
              value: o,
              onChange: (x) => a(x.target.value),
              required: !0,
              className: "mt-1"
            }
          )
        ] }),
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx(se, { htmlFor: "password", children: "Password" }),
          /* @__PURE__ */ r.jsx(
            Pe,
            {
              id: "password",
              type: "password",
              placeholder: "••••••••",
              value: i,
              onChange: (x) => c(x.target.value),
              required: !0,
              className: "mt-1"
            }
          )
        ] }),
        /* @__PURE__ */ r.jsxs(
          Ce,
          {
            type: "submit",
            className: "w-full h-12 bg-[#326389] hover:bg-[#326389]/90",
            disabled: m,
            children: [
              /* @__PURE__ */ r.jsx(Us, { className: "w-4 h-4 mr-2" }),
              u ? "Create Account" : "Sign In"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ r.jsx("div", { className: "mt-6 text-center", children: /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          onClick: () => f(!u),
          className: "text-sm text-[#326389] hover:underline",
          disabled: m,
          children: u ? "Already have an account? Sign in" : "Don't have an account? Sign up"
        }
      ) })
    ] }),
    /* @__PURE__ */ r.jsxs("p", { className: "text-center text-sm text-gray-500 mt-6", children: [
      "Need help? Contact us at",
      " ",
      /* @__PURE__ */ r.jsx("a", { href: "mailto:support@newhebrewprogram.org", className: "text-[#326389] hover:underline", children: "support@newhebrewprogram.org" })
    ] })
  ] }) });
}
function Me({ className: n, ...o }) {
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      "data-slot": "card",
      className: Be(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",
        n
      ),
      ...o
    }
  );
}
function ot({ className: n, ...o }) {
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      "data-slot": "card-header",
      className: Be(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        n
      ),
      ...o
    }
  );
}
function it({ className: n, ...o }) {
  return /* @__PURE__ */ r.jsx(
    "h4",
    {
      "data-slot": "card-title",
      className: Be("leading-none", n),
      ...o
    }
  );
}
function Fa({ className: n, ...o }) {
  return /* @__PURE__ */ r.jsx(
    "p",
    {
      "data-slot": "card-description",
      className: Be("text-muted-foreground", n),
      ...o
    }
  );
}
function Ke({ className: n, ...o }) {
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      "data-slot": "card-content",
      className: Be("px-6 [&:last-child]:pb-6", n),
      ...o
    }
  );
}
function bh(n, [o, a]) {
  return Math.min(a, Math.max(o, n));
}
function ze(n, o, { checkForDefaultPrevented: a = !0 } = {}) {
  return function(c) {
    if (n == null || n(c), a === !1 || !c.defaultPrevented)
      return o == null ? void 0 : o(c);
  };
}
function N1(n, o) {
  const a = w.createContext(o), i = (u) => {
    const { children: f, ...m } = u, p = w.useMemo(() => m, Object.values(m));
    return /* @__PURE__ */ r.jsx(a.Provider, { value: p, children: f });
  };
  i.displayName = n + "Provider";
  function c(u) {
    const f = w.useContext(a);
    if (f) return f;
    if (o !== void 0) return o;
    throw new Error(`\`${u}\` must be used within \`${n}\``);
  }
  return [i, c];
}
function yn(n, o = []) {
  let a = [];
  function i(u, f) {
    const m = w.createContext(f), p = a.length;
    a = [...a, f];
    const g = (x) => {
      var P;
      const { scope: b, children: S, ...j } = x, N = ((P = b == null ? void 0 : b[n]) == null ? void 0 : P[p]) || m, C = w.useMemo(() => j, Object.values(j));
      return /* @__PURE__ */ r.jsx(N.Provider, { value: C, children: S });
    };
    g.displayName = u + "Provider";
    function v(x, b) {
      var N;
      const S = ((N = b == null ? void 0 : b[n]) == null ? void 0 : N[p]) || m, j = w.useContext(S);
      if (j) return j;
      if (f !== void 0) return f;
      throw new Error(`\`${x}\` must be used within \`${u}\``);
    }
    return [g, v];
  }
  const c = () => {
    const u = a.map((f) => w.createContext(f));
    return function(m) {
      const p = (m == null ? void 0 : m[n]) || u;
      return w.useMemo(
        () => ({ [`__scope${n}`]: { ...m, [n]: p } }),
        [m, p]
      );
    };
  };
  return c.scopeName = n, [i, j1(c, ...o)];
}
function j1(...n) {
  const o = n[0];
  if (n.length === 1) return o;
  const a = () => {
    const i = n.map((c) => ({
      useScope: c(),
      scopeName: c.scopeName
    }));
    return function(u) {
      const f = i.reduce((m, { useScope: p, scopeName: g }) => {
        const x = p(u)[`__scope${g}`];
        return { ...m, ...x };
      }, {});
      return w.useMemo(() => ({ [`__scope${o.scopeName}`]: f }), [f]);
    };
  };
  return a.scopeName = o.scopeName, a;
}
function zp(n) {
  const o = n + "CollectionProvider", [a, i] = yn(o), [c, u] = a(
    o,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), f = (S) => {
    const { scope: j, children: N } = S, C = Te.useRef(null), P = Te.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ r.jsx(c, { scope: j, itemMap: P, collectionRef: C, children: N });
  };
  f.displayName = o;
  const m = n + "CollectionSlot", p = Te.forwardRef(
    (S, j) => {
      const { scope: N, children: C } = S, P = u(m, N), E = qe(j, P.collectionRef);
      return /* @__PURE__ */ r.jsx(br, { ref: E, children: C });
    }
  );
  p.displayName = m;
  const g = n + "CollectionItemSlot", v = "data-radix-collection-item", x = Te.forwardRef(
    (S, j) => {
      const { scope: N, children: C, ...P } = S, E = Te.useRef(null), O = qe(j, E), F = u(g, N);
      return Te.useEffect(() => (F.itemMap.set(E, { ref: E, ...P }), () => void F.itemMap.delete(E))), /* @__PURE__ */ r.jsx(br, { [v]: "", ref: O, children: C });
    }
  );
  x.displayName = g;
  function b(S) {
    const j = u(n + "CollectionConsumer", S);
    return Te.useCallback(() => {
      const C = j.collectionRef.current;
      if (!C) return [];
      const P = Array.from(C.querySelectorAll(`[${v}]`));
      return Array.from(j.itemMap.values()).sort(
        (F, D) => P.indexOf(F.ref.current) - P.indexOf(D.ref.current)
      );
    }, [j.collectionRef, j.itemMap]);
  }
  return [
    { Provider: f, Slot: p, ItemSlot: x },
    b,
    i
  ];
}
var S1 = w.createContext(void 0);
function Vu(n) {
  const o = w.useContext(S1);
  return n || o || "ltr";
}
function Dn(n) {
  const o = w.useRef(n);
  return w.useEffect(() => {
    o.current = n;
  }), w.useMemo(() => (...a) => {
    var i;
    return (i = o.current) == null ? void 0 : i.call(o, ...a);
  }, []);
}
function C1(n, o = globalThis == null ? void 0 : globalThis.document) {
  const a = Dn(n);
  w.useEffect(() => {
    const i = (c) => {
      c.key === "Escape" && a(c);
    };
    return o.addEventListener("keydown", i, { capture: !0 }), () => o.removeEventListener("keydown", i, { capture: !0 });
  }, [a, o]);
}
var k1 = "DismissableLayer", gu = "dismissableLayer.update", E1 = "dismissableLayer.pointerDownOutside", P1 = "dismissableLayer.focusOutside", Nh, Vp = w.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), $u = w.forwardRef(
  (n, o) => {
    const {
      disableOutsidePointerEvents: a = !1,
      onEscapeKeyDown: i,
      onPointerDownOutside: c,
      onFocusOutside: u,
      onInteractOutside: f,
      onDismiss: m,
      ...p
    } = n, g = w.useContext(Vp), [v, x] = w.useState(null), b = (v == null ? void 0 : v.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, S] = w.useState({}), j = qe(o, (H) => x(H)), N = Array.from(g.layers), [C] = [...g.layersWithOutsidePointerEventsDisabled].slice(-1), P = N.indexOf(C), E = v ? N.indexOf(v) : -1, O = g.layersWithOutsidePointerEventsDisabled.size > 0, F = E >= P, D = A1((H) => {
      const B = H.target, re = [...g.branches].some((me) => me.contains(B));
      !F || re || (c == null || c(H), f == null || f(H), H.defaultPrevented || m == null || m());
    }, b), Y = T1((H) => {
      const B = H.target;
      [...g.branches].some((me) => me.contains(B)) || (u == null || u(H), f == null || f(H), H.defaultPrevented || m == null || m());
    }, b);
    return C1((H) => {
      E === g.layers.size - 1 && (i == null || i(H), !H.defaultPrevented && m && (H.preventDefault(), m()));
    }, b), w.useEffect(() => {
      if (v)
        return a && (g.layersWithOutsidePointerEventsDisabled.size === 0 && (Nh = b.body.style.pointerEvents, b.body.style.pointerEvents = "none"), g.layersWithOutsidePointerEventsDisabled.add(v)), g.layers.add(v), jh(), () => {
          a && g.layersWithOutsidePointerEventsDisabled.size === 1 && (b.body.style.pointerEvents = Nh);
        };
    }, [v, b, a, g]), w.useEffect(() => () => {
      v && (g.layers.delete(v), g.layersWithOutsidePointerEventsDisabled.delete(v), jh());
    }, [v, g]), w.useEffect(() => {
      const H = () => S({});
      return document.addEventListener(gu, H), () => document.removeEventListener(gu, H);
    }, []), /* @__PURE__ */ r.jsx(
      Ve.div,
      {
        ...p,
        ref: j,
        style: {
          pointerEvents: O ? F ? "auto" : "none" : void 0,
          ...n.style
        },
        onFocusCapture: ze(n.onFocusCapture, Y.onFocusCapture),
        onBlurCapture: ze(n.onBlurCapture, Y.onBlurCapture),
        onPointerDownCapture: ze(
          n.onPointerDownCapture,
          D.onPointerDownCapture
        )
      }
    );
  }
);
$u.displayName = k1;
var _1 = "DismissableLayerBranch", R1 = w.forwardRef((n, o) => {
  const a = w.useContext(Vp), i = w.useRef(null), c = qe(o, i);
  return w.useEffect(() => {
    const u = i.current;
    if (u)
      return a.branches.add(u), () => {
        a.branches.delete(u);
      };
  }, [a.branches]), /* @__PURE__ */ r.jsx(Ve.div, { ...n, ref: c });
});
R1.displayName = _1;
function A1(n, o = globalThis == null ? void 0 : globalThis.document) {
  const a = Dn(n), i = w.useRef(!1), c = w.useRef(() => {
  });
  return w.useEffect(() => {
    const u = (m) => {
      if (m.target && !i.current) {
        let p = function() {
          $p(
            E1,
            a,
            g,
            { discrete: !0 }
          );
        };
        const g = { originalEvent: m };
        m.pointerType === "touch" ? (o.removeEventListener("click", c.current), c.current = p, o.addEventListener("click", c.current, { once: !0 })) : p();
      } else
        o.removeEventListener("click", c.current);
      i.current = !1;
    }, f = window.setTimeout(() => {
      o.addEventListener("pointerdown", u);
    }, 0);
    return () => {
      window.clearTimeout(f), o.removeEventListener("pointerdown", u), o.removeEventListener("click", c.current);
    };
  }, [o, a]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => i.current = !0
  };
}
function T1(n, o = globalThis == null ? void 0 : globalThis.document) {
  const a = Dn(n), i = w.useRef(!1);
  return w.useEffect(() => {
    const c = (u) => {
      u.target && !i.current && $p(P1, a, { originalEvent: u }, {
        discrete: !1
      });
    };
    return o.addEventListener("focusin", c), () => o.removeEventListener("focusin", c);
  }, [o, a]), {
    onFocusCapture: () => i.current = !0,
    onBlurCapture: () => i.current = !1
  };
}
function jh() {
  const n = new CustomEvent(gu);
  document.dispatchEvent(n);
}
function $p(n, o, a, { discrete: i }) {
  const c = a.originalEvent.target, u = new CustomEvent(n, { bubbles: !1, cancelable: !0, detail: a });
  o && c.addEventListener(n, o, { once: !0 }), i ? v1(c, u) : c.dispatchEvent(u);
}
var Gc = 0;
function Bp() {
  w.useEffect(() => {
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", n[0] ?? Sh()), document.body.insertAdjacentElement("beforeend", n[1] ?? Sh()), Gc++, () => {
      Gc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((o) => o.remove()), Gc--;
    };
  }, []);
}
function Sh() {
  const n = document.createElement("span");
  return n.setAttribute("data-radix-focus-guard", ""), n.tabIndex = 0, n.style.outline = "none", n.style.opacity = "0", n.style.position = "fixed", n.style.pointerEvents = "none", n;
}
var qc = "focusScope.autoFocusOnMount", Yc = "focusScope.autoFocusOnUnmount", Ch = { bubbles: !1, cancelable: !0 }, D1 = "FocusScope", Bu = w.forwardRef((n, o) => {
  const {
    loop: a = !1,
    trapped: i = !1,
    onMountAutoFocus: c,
    onUnmountAutoFocus: u,
    ...f
  } = n, [m, p] = w.useState(null), g = Dn(c), v = Dn(u), x = w.useRef(null), b = qe(o, (N) => p(N)), S = w.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  w.useEffect(() => {
    if (i) {
      let N = function(O) {
        if (S.paused || !m) return;
        const F = O.target;
        m.contains(F) ? x.current = F : vr(x.current, { select: !0 });
      }, C = function(O) {
        if (S.paused || !m) return;
        const F = O.relatedTarget;
        F !== null && (m.contains(F) || vr(x.current, { select: !0 }));
      }, P = function(O) {
        if (document.activeElement === document.body)
          for (const D of O)
            D.removedNodes.length > 0 && vr(m);
      };
      document.addEventListener("focusin", N), document.addEventListener("focusout", C);
      const E = new MutationObserver(P);
      return m && E.observe(m, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", N), document.removeEventListener("focusout", C), E.disconnect();
      };
    }
  }, [i, m, S.paused]), w.useEffect(() => {
    if (m) {
      Eh.add(S);
      const N = document.activeElement;
      if (!m.contains(N)) {
        const P = new CustomEvent(qc, Ch);
        m.addEventListener(qc, g), m.dispatchEvent(P), P.defaultPrevented || (M1(z1(Up(m)), { select: !0 }), document.activeElement === N && vr(m));
      }
      return () => {
        m.removeEventListener(qc, g), setTimeout(() => {
          const P = new CustomEvent(Yc, Ch);
          m.addEventListener(Yc, v), m.dispatchEvent(P), P.defaultPrevented || vr(N ?? document.body, { select: !0 }), m.removeEventListener(Yc, v), Eh.remove(S);
        }, 0);
      };
    }
  }, [m, g, v, S]);
  const j = w.useCallback(
    (N) => {
      if (!a && !i || S.paused) return;
      const C = N.key === "Tab" && !N.altKey && !N.ctrlKey && !N.metaKey, P = document.activeElement;
      if (C && P) {
        const E = N.currentTarget, [O, F] = O1(E);
        O && F ? !N.shiftKey && P === F ? (N.preventDefault(), a && vr(O, { select: !0 })) : N.shiftKey && P === O && (N.preventDefault(), a && vr(F, { select: !0 })) : P === E && N.preventDefault();
      }
    },
    [a, i, S.paused]
  );
  return /* @__PURE__ */ r.jsx(Ve.div, { tabIndex: -1, ...f, ref: b, onKeyDown: j });
});
Bu.displayName = D1;
function M1(n, { select: o = !1 } = {}) {
  const a = document.activeElement;
  for (const i of n)
    if (vr(i, { select: o }), document.activeElement !== a) return;
}
function O1(n) {
  const o = Up(n), a = kh(o, n), i = kh(o.reverse(), n);
  return [a, i];
}
function Up(n) {
  const o = [], a = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (i) => {
      const c = i.tagName === "INPUT" && i.type === "hidden";
      return i.disabled || i.hidden || c ? NodeFilter.FILTER_SKIP : i.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; a.nextNode(); ) o.push(a.currentNode);
  return o;
}
function kh(n, o) {
  for (const a of n)
    if (!F1(a, { upTo: o })) return a;
}
function F1(n, { upTo: o }) {
  if (getComputedStyle(n).visibility === "hidden") return !0;
  for (; n; ) {
    if (o !== void 0 && n === o) return !1;
    if (getComputedStyle(n).display === "none") return !0;
    n = n.parentElement;
  }
  return !1;
}
function L1(n) {
  return n instanceof HTMLInputElement && "select" in n;
}
function vr(n, { select: o = !1 } = {}) {
  if (n && n.focus) {
    const a = document.activeElement;
    n.focus({ preventScroll: !0 }), n !== a && L1(n) && o && n.select();
  }
}
var Eh = I1();
function I1() {
  let n = [];
  return {
    add(o) {
      const a = n[0];
      o !== a && (a == null || a.pause()), n = Ph(n, o), n.unshift(o);
    },
    remove(o) {
      var a;
      n = Ph(n, o), (a = n[0]) == null || a.resume();
    }
  };
}
function Ph(n, o) {
  const a = [...n], i = a.indexOf(o);
  return i !== -1 && a.splice(i, 1), a;
}
function z1(n) {
  return n.filter((o) => o.tagName !== "A");
}
var Ot = globalThis != null && globalThis.document ? w.useLayoutEffect : () => {
}, V1 = b0.useId || (() => {
}), $1 = 0;
function Ur(n) {
  const [o, a] = w.useState(V1());
  return Ot(() => {
    a((i) => i ?? String($1++));
  }, [n]), n || (o ? `radix-${o}` : "");
}
const B1 = ["top", "right", "bottom", "left"], Nr = Math.min, Kt = Math.max, Ni = Math.round, ci = Math.floor, Tn = (n) => ({
  x: n,
  y: n
}), U1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function xu(n, o, a) {
  return Kt(n, Nr(o, a));
}
function Yn(n, o) {
  return typeof n == "function" ? n(o) : n;
}
function Kn(n) {
  return n.split("-")[0];
}
function qs(n) {
  return n.split("-")[1];
}
function Uu(n) {
  return n === "x" ? "y" : "x";
}
function Wu(n) {
  return n === "y" ? "height" : "width";
}
function Rn(n) {
  const o = n[0];
  return o === "t" || o === "b" ? "y" : "x";
}
function Hu(n) {
  return Uu(Rn(n));
}
function W1(n, o, a) {
  a === void 0 && (a = !1);
  const i = qs(n), c = Hu(n), u = Wu(c);
  let f = c === "x" ? i === (a ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return o.reference[u] > o.floating[u] && (f = ji(f)), [f, ji(f)];
}
function H1(n) {
  const o = ji(n);
  return [vu(n), o, vu(o)];
}
function vu(n) {
  return n.includes("start") ? n.replace("start", "end") : n.replace("end", "start");
}
const _h = ["left", "right"], Rh = ["right", "left"], G1 = ["top", "bottom"], q1 = ["bottom", "top"];
function Y1(n, o, a) {
  switch (n) {
    case "top":
    case "bottom":
      return a ? o ? Rh : _h : o ? _h : Rh;
    case "left":
    case "right":
      return o ? G1 : q1;
    default:
      return [];
  }
}
function K1(n, o, a, i) {
  const c = qs(n);
  let u = Y1(Kn(n), a === "start", i);
  return c && (u = u.map((f) => f + "-" + c), o && (u = u.concat(u.map(vu)))), u;
}
function ji(n) {
  const o = Kn(n);
  return U1[o] + n.slice(o.length);
}
function Q1(n) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...n
  };
}
function Wp(n) {
  return typeof n != "number" ? Q1(n) : {
    top: n,
    right: n,
    bottom: n,
    left: n
  };
}
function Si(n) {
  const {
    x: o,
    y: a,
    width: i,
    height: c
  } = n;
  return {
    width: i,
    height: c,
    top: a,
    left: o,
    right: o + i,
    bottom: a + c,
    x: o,
    y: a
  };
}
function Ah(n, o, a) {
  let {
    reference: i,
    floating: c
  } = n;
  const u = Rn(o), f = Hu(o), m = Wu(f), p = Kn(o), g = u === "y", v = i.x + i.width / 2 - c.width / 2, x = i.y + i.height / 2 - c.height / 2, b = i[m] / 2 - c[m] / 2;
  let S;
  switch (p) {
    case "top":
      S = {
        x: v,
        y: i.y - c.height
      };
      break;
    case "bottom":
      S = {
        x: v,
        y: i.y + i.height
      };
      break;
    case "right":
      S = {
        x: i.x + i.width,
        y: x
      };
      break;
    case "left":
      S = {
        x: i.x - c.width,
        y: x
      };
      break;
    default:
      S = {
        x: i.x,
        y: i.y
      };
  }
  switch (qs(o)) {
    case "start":
      S[f] -= b * (a && g ? -1 : 1);
      break;
    case "end":
      S[f] += b * (a && g ? -1 : 1);
      break;
  }
  return S;
}
async function X1(n, o) {
  var a;
  o === void 0 && (o = {});
  const {
    x: i,
    y: c,
    platform: u,
    rects: f,
    elements: m,
    strategy: p
  } = n, {
    boundary: g = "clippingAncestors",
    rootBoundary: v = "viewport",
    elementContext: x = "floating",
    altBoundary: b = !1,
    padding: S = 0
  } = Yn(o, n), j = Wp(S), C = m[b ? x === "floating" ? "reference" : "floating" : x], P = Si(await u.getClippingRect({
    element: (a = await (u.isElement == null ? void 0 : u.isElement(C))) == null || a ? C : C.contextElement || await (u.getDocumentElement == null ? void 0 : u.getDocumentElement(m.floating)),
    boundary: g,
    rootBoundary: v,
    strategy: p
  })), E = x === "floating" ? {
    x: i,
    y: c,
    width: f.floating.width,
    height: f.floating.height
  } : f.reference, O = await (u.getOffsetParent == null ? void 0 : u.getOffsetParent(m.floating)), F = await (u.isElement == null ? void 0 : u.isElement(O)) ? await (u.getScale == null ? void 0 : u.getScale(O)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, D = Si(u.convertOffsetParentRelativeRectToViewportRelativeRect ? await u.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: m,
    rect: E,
    offsetParent: O,
    strategy: p
  }) : E);
  return {
    top: (P.top - D.top + j.top) / F.y,
    bottom: (D.bottom - P.bottom + j.bottom) / F.y,
    left: (P.left - D.left + j.left) / F.x,
    right: (D.right - P.right + j.right) / F.x
  };
}
const Z1 = 50, J1 = async (n, o, a) => {
  const {
    placement: i = "bottom",
    strategy: c = "absolute",
    middleware: u = [],
    platform: f
  } = a, m = f.detectOverflow ? f : {
    ...f,
    detectOverflow: X1
  }, p = await (f.isRTL == null ? void 0 : f.isRTL(o));
  let g = await f.getElementRects({
    reference: n,
    floating: o,
    strategy: c
  }), {
    x: v,
    y: x
  } = Ah(g, i, p), b = i, S = 0;
  const j = {};
  for (let N = 0; N < u.length; N++) {
    const C = u[N];
    if (!C)
      continue;
    const {
      name: P,
      fn: E
    } = C, {
      x: O,
      y: F,
      data: D,
      reset: Y
    } = await E({
      x: v,
      y: x,
      initialPlacement: i,
      placement: b,
      strategy: c,
      middlewareData: j,
      rects: g,
      platform: m,
      elements: {
        reference: n,
        floating: o
      }
    });
    v = O ?? v, x = F ?? x, j[P] = {
      ...j[P],
      ...D
    }, Y && S < Z1 && (S++, typeof Y == "object" && (Y.placement && (b = Y.placement), Y.rects && (g = Y.rects === !0 ? await f.getElementRects({
      reference: n,
      floating: o,
      strategy: c
    }) : Y.rects), {
      x: v,
      y: x
    } = Ah(g, b, p)), N = -1);
  }
  return {
    x: v,
    y: x,
    placement: b,
    strategy: c,
    middlewareData: j
  };
}, eb = (n) => ({
  name: "arrow",
  options: n,
  async fn(o) {
    const {
      x: a,
      y: i,
      placement: c,
      rects: u,
      platform: f,
      elements: m,
      middlewareData: p
    } = o, {
      element: g,
      padding: v = 0
    } = Yn(n, o) || {};
    if (g == null)
      return {};
    const x = Wp(v), b = {
      x: a,
      y: i
    }, S = Hu(c), j = Wu(S), N = await f.getDimensions(g), C = S === "y", P = C ? "top" : "left", E = C ? "bottom" : "right", O = C ? "clientHeight" : "clientWidth", F = u.reference[j] + u.reference[S] - b[S] - u.floating[j], D = b[S] - u.reference[S], Y = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(g));
    let H = Y ? Y[O] : 0;
    (!H || !await (f.isElement == null ? void 0 : f.isElement(Y))) && (H = m.floating[O] || u.floating[j]);
    const B = F / 2 - D / 2, re = H / 2 - N[j] / 2 - 1, me = Nr(x[P], re), J = Nr(x[E], re), X = me, W = H - N[j] - J, le = H / 2 - N[j] / 2 + B, ye = xu(X, le, W), ae = !p.arrow && qs(c) != null && le !== ye && u.reference[j] / 2 - (le < X ? me : J) - N[j] / 2 < 0, de = ae ? le < X ? le - X : le - W : 0;
    return {
      [S]: b[S] + de,
      data: {
        [S]: ye,
        centerOffset: le - ye - de,
        ...ae && {
          alignmentOffset: de
        }
      },
      reset: ae
    };
  }
}), tb = function(n) {
  return n === void 0 && (n = {}), {
    name: "flip",
    options: n,
    async fn(o) {
      var a, i;
      const {
        placement: c,
        middlewareData: u,
        rects: f,
        initialPlacement: m,
        platform: p,
        elements: g
      } = o, {
        mainAxis: v = !0,
        crossAxis: x = !0,
        fallbackPlacements: b,
        fallbackStrategy: S = "bestFit",
        fallbackAxisSideDirection: j = "none",
        flipAlignment: N = !0,
        ...C
      } = Yn(n, o);
      if ((a = u.arrow) != null && a.alignmentOffset)
        return {};
      const P = Kn(c), E = Rn(m), O = Kn(m) === m, F = await (p.isRTL == null ? void 0 : p.isRTL(g.floating)), D = b || (O || !N ? [ji(m)] : H1(m)), Y = j !== "none";
      !b && Y && D.push(...K1(m, N, j, F));
      const H = [m, ...D], B = await p.detectOverflow(o, C), re = [];
      let me = ((i = u.flip) == null ? void 0 : i.overflows) || [];
      if (v && re.push(B[P]), x) {
        const le = W1(c, f, F);
        re.push(B[le[0]], B[le[1]]);
      }
      if (me = [...me, {
        placement: c,
        overflows: re
      }], !re.every((le) => le <= 0)) {
        var J, X;
        const le = (((J = u.flip) == null ? void 0 : J.index) || 0) + 1, ye = H[le];
        if (ye && (!(x === "alignment" ? E !== Rn(ye) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        me.every((M) => Rn(M.placement) === E ? M.overflows[0] > 0 : !0)))
          return {
            data: {
              index: le,
              overflows: me
            },
            reset: {
              placement: ye
            }
          };
        let ae = (X = me.filter((de) => de.overflows[0] <= 0).sort((de, M) => de.overflows[1] - M.overflows[1])[0]) == null ? void 0 : X.placement;
        if (!ae)
          switch (S) {
            case "bestFit": {
              var W;
              const de = (W = me.filter((M) => {
                if (Y) {
                  const U = Rn(M.placement);
                  return U === E || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  U === "y";
                }
                return !0;
              }).map((M) => [M.placement, M.overflows.filter((U) => U > 0).reduce((U, G) => U + G, 0)]).sort((M, U) => M[1] - U[1])[0]) == null ? void 0 : W[0];
              de && (ae = de);
              break;
            }
            case "initialPlacement":
              ae = m;
              break;
          }
        if (c !== ae)
          return {
            reset: {
              placement: ae
            }
          };
      }
      return {};
    }
  };
};
function Th(n, o) {
  return {
    top: n.top - o.height,
    right: n.right - o.width,
    bottom: n.bottom - o.height,
    left: n.left - o.width
  };
}
function Dh(n) {
  return B1.some((o) => n[o] >= 0);
}
const nb = function(n) {
  return n === void 0 && (n = {}), {
    name: "hide",
    options: n,
    async fn(o) {
      const {
        rects: a,
        platform: i
      } = o, {
        strategy: c = "referenceHidden",
        ...u
      } = Yn(n, o);
      switch (c) {
        case "referenceHidden": {
          const f = await i.detectOverflow(o, {
            ...u,
            elementContext: "reference"
          }), m = Th(f, a.reference);
          return {
            data: {
              referenceHiddenOffsets: m,
              referenceHidden: Dh(m)
            }
          };
        }
        case "escaped": {
          const f = await i.detectOverflow(o, {
            ...u,
            altBoundary: !0
          }), m = Th(f, a.floating);
          return {
            data: {
              escapedOffsets: m,
              escaped: Dh(m)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Hp = /* @__PURE__ */ new Set(["left", "top"]);
async function rb(n, o) {
  const {
    placement: a,
    platform: i,
    elements: c
  } = n, u = await (i.isRTL == null ? void 0 : i.isRTL(c.floating)), f = Kn(a), m = qs(a), p = Rn(a) === "y", g = Hp.has(f) ? -1 : 1, v = u && p ? -1 : 1, x = Yn(o, n);
  let {
    mainAxis: b,
    crossAxis: S,
    alignmentAxis: j
  } = typeof x == "number" ? {
    mainAxis: x,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: x.mainAxis || 0,
    crossAxis: x.crossAxis || 0,
    alignmentAxis: x.alignmentAxis
  };
  return m && typeof j == "number" && (S = m === "end" ? j * -1 : j), p ? {
    x: S * v,
    y: b * g
  } : {
    x: b * g,
    y: S * v
  };
}
const sb = function(n) {
  return n === void 0 && (n = 0), {
    name: "offset",
    options: n,
    async fn(o) {
      var a, i;
      const {
        x: c,
        y: u,
        placement: f,
        middlewareData: m
      } = o, p = await rb(o, n);
      return f === ((a = m.offset) == null ? void 0 : a.placement) && (i = m.arrow) != null && i.alignmentOffset ? {} : {
        x: c + p.x,
        y: u + p.y,
        data: {
          ...p,
          placement: f
        }
      };
    }
  };
}, ab = function(n) {
  return n === void 0 && (n = {}), {
    name: "shift",
    options: n,
    async fn(o) {
      const {
        x: a,
        y: i,
        placement: c,
        platform: u
      } = o, {
        mainAxis: f = !0,
        crossAxis: m = !1,
        limiter: p = {
          fn: (P) => {
            let {
              x: E,
              y: O
            } = P;
            return {
              x: E,
              y: O
            };
          }
        },
        ...g
      } = Yn(n, o), v = {
        x: a,
        y: i
      }, x = await u.detectOverflow(o, g), b = Rn(Kn(c)), S = Uu(b);
      let j = v[S], N = v[b];
      if (f) {
        const P = S === "y" ? "top" : "left", E = S === "y" ? "bottom" : "right", O = j + x[P], F = j - x[E];
        j = xu(O, j, F);
      }
      if (m) {
        const P = b === "y" ? "top" : "left", E = b === "y" ? "bottom" : "right", O = N + x[P], F = N - x[E];
        N = xu(O, N, F);
      }
      const C = p.fn({
        ...o,
        [S]: j,
        [b]: N
      });
      return {
        ...C,
        data: {
          x: C.x - a,
          y: C.y - i,
          enabled: {
            [S]: f,
            [b]: m
          }
        }
      };
    }
  };
}, ob = function(n) {
  return n === void 0 && (n = {}), {
    options: n,
    fn(o) {
      const {
        x: a,
        y: i,
        placement: c,
        rects: u,
        middlewareData: f
      } = o, {
        offset: m = 0,
        mainAxis: p = !0,
        crossAxis: g = !0
      } = Yn(n, o), v = {
        x: a,
        y: i
      }, x = Rn(c), b = Uu(x);
      let S = v[b], j = v[x];
      const N = Yn(m, o), C = typeof N == "number" ? {
        mainAxis: N,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...N
      };
      if (p) {
        const O = b === "y" ? "height" : "width", F = u.reference[b] - u.floating[O] + C.mainAxis, D = u.reference[b] + u.reference[O] - C.mainAxis;
        S < F ? S = F : S > D && (S = D);
      }
      if (g) {
        var P, E;
        const O = b === "y" ? "width" : "height", F = Hp.has(Kn(c)), D = u.reference[x] - u.floating[O] + (F && ((P = f.offset) == null ? void 0 : P[x]) || 0) + (F ? 0 : C.crossAxis), Y = u.reference[x] + u.reference[O] + (F ? 0 : ((E = f.offset) == null ? void 0 : E[x]) || 0) - (F ? C.crossAxis : 0);
        j < D ? j = D : j > Y && (j = Y);
      }
      return {
        [b]: S,
        [x]: j
      };
    }
  };
}, ib = function(n) {
  return n === void 0 && (n = {}), {
    name: "size",
    options: n,
    async fn(o) {
      var a, i;
      const {
        placement: c,
        rects: u,
        platform: f,
        elements: m
      } = o, {
        apply: p = () => {
        },
        ...g
      } = Yn(n, o), v = await f.detectOverflow(o, g), x = Kn(c), b = qs(c), S = Rn(c) === "y", {
        width: j,
        height: N
      } = u.floating;
      let C, P;
      x === "top" || x === "bottom" ? (C = x, P = b === (await (f.isRTL == null ? void 0 : f.isRTL(m.floating)) ? "start" : "end") ? "left" : "right") : (P = x, C = b === "end" ? "top" : "bottom");
      const E = N - v.top - v.bottom, O = j - v.left - v.right, F = Nr(N - v[C], E), D = Nr(j - v[P], O), Y = !o.middlewareData.shift;
      let H = F, B = D;
      if ((a = o.middlewareData.shift) != null && a.enabled.x && (B = O), (i = o.middlewareData.shift) != null && i.enabled.y && (H = E), Y && !b) {
        const me = Kt(v.left, 0), J = Kt(v.right, 0), X = Kt(v.top, 0), W = Kt(v.bottom, 0);
        S ? B = j - 2 * (me !== 0 || J !== 0 ? me + J : Kt(v.left, v.right)) : H = N - 2 * (X !== 0 || W !== 0 ? X + W : Kt(v.top, v.bottom));
      }
      await p({
        ...o,
        availableWidth: B,
        availableHeight: H
      });
      const re = await f.getDimensions(m.floating);
      return j !== re.width || N !== re.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ii() {
  return typeof window < "u";
}
function Ys(n) {
  return Gp(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function Qt(n) {
  var o;
  return (n == null || (o = n.ownerDocument) == null ? void 0 : o.defaultView) || window;
}
function Mn(n) {
  var o;
  return (o = (Gp(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : o.documentElement;
}
function Gp(n) {
  return Ii() ? n instanceof Node || n instanceof Qt(n).Node : !1;
}
function xn(n) {
  return Ii() ? n instanceof Element || n instanceof Qt(n).Element : !1;
}
function Qn(n) {
  return Ii() ? n instanceof HTMLElement || n instanceof Qt(n).HTMLElement : !1;
}
function Mh(n) {
  return !Ii() || typeof ShadowRoot > "u" ? !1 : n instanceof ShadowRoot || n instanceof Qt(n).ShadowRoot;
}
function Ka(n) {
  const {
    overflow: o,
    overflowX: a,
    overflowY: i,
    display: c
  } = vn(n);
  return /auto|scroll|overlay|hidden|clip/.test(o + i + a) && c !== "inline" && c !== "contents";
}
function lb(n) {
  return /^(table|td|th)$/.test(Ys(n));
}
function zi(n) {
  try {
    if (n.matches(":popover-open"))
      return !0;
  } catch {
  }
  try {
    return n.matches(":modal");
  } catch {
    return !1;
  }
}
const cb = /transform|translate|scale|rotate|perspective|filter/, ub = /paint|layout|strict|content/, Vr = (n) => !!n && n !== "none";
let Kc;
function Gu(n) {
  const o = xn(n) ? vn(n) : n;
  return Vr(o.transform) || Vr(o.translate) || Vr(o.scale) || Vr(o.rotate) || Vr(o.perspective) || !qu() && (Vr(o.backdropFilter) || Vr(o.filter)) || cb.test(o.willChange || "") || ub.test(o.contain || "");
}
function db(n) {
  let o = jr(n);
  for (; Qn(o) && !Is(o); ) {
    if (Gu(o))
      return o;
    if (zi(o))
      return null;
    o = jr(o);
  }
  return null;
}
function qu() {
  return Kc == null && (Kc = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Kc;
}
function Is(n) {
  return /^(html|body|#document)$/.test(Ys(n));
}
function vn(n) {
  return Qt(n).getComputedStyle(n);
}
function Vi(n) {
  return xn(n) ? {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  } : {
    scrollLeft: n.scrollX,
    scrollTop: n.scrollY
  };
}
function jr(n) {
  if (Ys(n) === "html")
    return n;
  const o = (
    // Step into the shadow DOM of the parent of a slotted node.
    n.assignedSlot || // DOM Element detected.
    n.parentNode || // ShadowRoot detected.
    Mh(n) && n.host || // Fallback.
    Mn(n)
  );
  return Mh(o) ? o.host : o;
}
function qp(n) {
  const o = jr(n);
  return Is(o) ? n.ownerDocument ? n.ownerDocument.body : n.body : Qn(o) && Ka(o) ? o : qp(o);
}
function Ga(n, o, a) {
  var i;
  o === void 0 && (o = []), a === void 0 && (a = !0);
  const c = qp(n), u = c === ((i = n.ownerDocument) == null ? void 0 : i.body), f = Qt(c);
  if (u) {
    const m = yu(f);
    return o.concat(f, f.visualViewport || [], Ka(c) ? c : [], m && a ? Ga(m) : []);
  } else
    return o.concat(c, Ga(c, [], a));
}
function yu(n) {
  return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
function Yp(n) {
  const o = vn(n);
  let a = parseFloat(o.width) || 0, i = parseFloat(o.height) || 0;
  const c = Qn(n), u = c ? n.offsetWidth : a, f = c ? n.offsetHeight : i, m = Ni(a) !== u || Ni(i) !== f;
  return m && (a = u, i = f), {
    width: a,
    height: i,
    $: m
  };
}
function Yu(n) {
  return xn(n) ? n : n.contextElement;
}
function Ds(n) {
  const o = Yu(n);
  if (!Qn(o))
    return Tn(1);
  const a = o.getBoundingClientRect(), {
    width: i,
    height: c,
    $: u
  } = Yp(o);
  let f = (u ? Ni(a.width) : a.width) / i, m = (u ? Ni(a.height) : a.height) / c;
  return (!f || !Number.isFinite(f)) && (f = 1), (!m || !Number.isFinite(m)) && (m = 1), {
    x: f,
    y: m
  };
}
const fb = /* @__PURE__ */ Tn(0);
function Kp(n) {
  const o = Qt(n);
  return !qu() || !o.visualViewport ? fb : {
    x: o.visualViewport.offsetLeft,
    y: o.visualViewport.offsetTop
  };
}
function mb(n, o, a) {
  return o === void 0 && (o = !1), !a || o && a !== Qt(n) ? !1 : o;
}
function Hr(n, o, a, i) {
  o === void 0 && (o = !1), a === void 0 && (a = !1);
  const c = n.getBoundingClientRect(), u = Yu(n);
  let f = Tn(1);
  o && (i ? xn(i) && (f = Ds(i)) : f = Ds(n));
  const m = mb(u, a, i) ? Kp(u) : Tn(0);
  let p = (c.left + m.x) / f.x, g = (c.top + m.y) / f.y, v = c.width / f.x, x = c.height / f.y;
  if (u) {
    const b = Qt(u), S = i && xn(i) ? Qt(i) : i;
    let j = b, N = yu(j);
    for (; N && i && S !== j; ) {
      const C = Ds(N), P = N.getBoundingClientRect(), E = vn(N), O = P.left + (N.clientLeft + parseFloat(E.paddingLeft)) * C.x, F = P.top + (N.clientTop + parseFloat(E.paddingTop)) * C.y;
      p *= C.x, g *= C.y, v *= C.x, x *= C.y, p += O, g += F, j = Qt(N), N = yu(j);
    }
  }
  return Si({
    width: v,
    height: x,
    x: p,
    y: g
  });
}
function $i(n, o) {
  const a = Vi(n).scrollLeft;
  return o ? o.left + a : Hr(Mn(n)).left + a;
}
function Qp(n, o) {
  const a = n.getBoundingClientRect(), i = a.left + o.scrollLeft - $i(n, a), c = a.top + o.scrollTop;
  return {
    x: i,
    y: c
  };
}
function hb(n) {
  let {
    elements: o,
    rect: a,
    offsetParent: i,
    strategy: c
  } = n;
  const u = c === "fixed", f = Mn(i), m = o ? zi(o.floating) : !1;
  if (i === f || m && u)
    return a;
  let p = {
    scrollLeft: 0,
    scrollTop: 0
  }, g = Tn(1);
  const v = Tn(0), x = Qn(i);
  if ((x || !x && !u) && ((Ys(i) !== "body" || Ka(f)) && (p = Vi(i)), x)) {
    const S = Hr(i);
    g = Ds(i), v.x = S.x + i.clientLeft, v.y = S.y + i.clientTop;
  }
  const b = f && !x && !u ? Qp(f, p) : Tn(0);
  return {
    width: a.width * g.x,
    height: a.height * g.y,
    x: a.x * g.x - p.scrollLeft * g.x + v.x + b.x,
    y: a.y * g.y - p.scrollTop * g.y + v.y + b.y
  };
}
function pb(n) {
  return Array.from(n.getClientRects());
}
function gb(n) {
  const o = Mn(n), a = Vi(n), i = n.ownerDocument.body, c = Kt(o.scrollWidth, o.clientWidth, i.scrollWidth, i.clientWidth), u = Kt(o.scrollHeight, o.clientHeight, i.scrollHeight, i.clientHeight);
  let f = -a.scrollLeft + $i(n);
  const m = -a.scrollTop;
  return vn(i).direction === "rtl" && (f += Kt(o.clientWidth, i.clientWidth) - c), {
    width: c,
    height: u,
    x: f,
    y: m
  };
}
const Oh = 25;
function xb(n, o) {
  const a = Qt(n), i = Mn(n), c = a.visualViewport;
  let u = i.clientWidth, f = i.clientHeight, m = 0, p = 0;
  if (c) {
    u = c.width, f = c.height;
    const v = qu();
    (!v || v && o === "fixed") && (m = c.offsetLeft, p = c.offsetTop);
  }
  const g = $i(i);
  if (g <= 0) {
    const v = i.ownerDocument, x = v.body, b = getComputedStyle(x), S = v.compatMode === "CSS1Compat" && parseFloat(b.marginLeft) + parseFloat(b.marginRight) || 0, j = Math.abs(i.clientWidth - x.clientWidth - S);
    j <= Oh && (u -= j);
  } else g <= Oh && (u += g);
  return {
    width: u,
    height: f,
    x: m,
    y: p
  };
}
function vb(n, o) {
  const a = Hr(n, !0, o === "fixed"), i = a.top + n.clientTop, c = a.left + n.clientLeft, u = Qn(n) ? Ds(n) : Tn(1), f = n.clientWidth * u.x, m = n.clientHeight * u.y, p = c * u.x, g = i * u.y;
  return {
    width: f,
    height: m,
    x: p,
    y: g
  };
}
function Fh(n, o, a) {
  let i;
  if (o === "viewport")
    i = xb(n, a);
  else if (o === "document")
    i = gb(Mn(n));
  else if (xn(o))
    i = vb(o, a);
  else {
    const c = Kp(n);
    i = {
      x: o.x - c.x,
      y: o.y - c.y,
      width: o.width,
      height: o.height
    };
  }
  return Si(i);
}
function Xp(n, o) {
  const a = jr(n);
  return a === o || !xn(a) || Is(a) ? !1 : vn(a).position === "fixed" || Xp(a, o);
}
function yb(n, o) {
  const a = o.get(n);
  if (a)
    return a;
  let i = Ga(n, [], !1).filter((m) => xn(m) && Ys(m) !== "body"), c = null;
  const u = vn(n).position === "fixed";
  let f = u ? jr(n) : n;
  for (; xn(f) && !Is(f); ) {
    const m = vn(f), p = Gu(f);
    !p && m.position === "fixed" && (c = null), (u ? !p && !c : !p && m.position === "static" && !!c && (c.position === "absolute" || c.position === "fixed") || Ka(f) && !p && Xp(n, f)) ? i = i.filter((v) => v !== f) : c = m, f = jr(f);
  }
  return o.set(n, i), i;
}
function wb(n) {
  let {
    element: o,
    boundary: a,
    rootBoundary: i,
    strategy: c
  } = n;
  const f = [...a === "clippingAncestors" ? zi(o) ? [] : yb(o, this._c) : [].concat(a), i], m = Fh(o, f[0], c);
  let p = m.top, g = m.right, v = m.bottom, x = m.left;
  for (let b = 1; b < f.length; b++) {
    const S = Fh(o, f[b], c);
    p = Kt(S.top, p), g = Nr(S.right, g), v = Nr(S.bottom, v), x = Kt(S.left, x);
  }
  return {
    width: g - x,
    height: v - p,
    x,
    y: p
  };
}
function bb(n) {
  const {
    width: o,
    height: a
  } = Yp(n);
  return {
    width: o,
    height: a
  };
}
function Nb(n, o, a) {
  const i = Qn(o), c = Mn(o), u = a === "fixed", f = Hr(n, !0, u, o);
  let m = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const p = Tn(0);
  function g() {
    p.x = $i(c);
  }
  if (i || !i && !u)
    if ((Ys(o) !== "body" || Ka(c)) && (m = Vi(o)), i) {
      const S = Hr(o, !0, u, o);
      p.x = S.x + o.clientLeft, p.y = S.y + o.clientTop;
    } else c && g();
  u && !i && c && g();
  const v = c && !i && !u ? Qp(c, m) : Tn(0), x = f.left + m.scrollLeft - p.x - v.x, b = f.top + m.scrollTop - p.y - v.y;
  return {
    x,
    y: b,
    width: f.width,
    height: f.height
  };
}
function Qc(n) {
  return vn(n).position === "static";
}
function Lh(n, o) {
  if (!Qn(n) || vn(n).position === "fixed")
    return null;
  if (o)
    return o(n);
  let a = n.offsetParent;
  return Mn(n) === a && (a = a.ownerDocument.body), a;
}
function Zp(n, o) {
  const a = Qt(n);
  if (zi(n))
    return a;
  if (!Qn(n)) {
    let c = jr(n);
    for (; c && !Is(c); ) {
      if (xn(c) && !Qc(c))
        return c;
      c = jr(c);
    }
    return a;
  }
  let i = Lh(n, o);
  for (; i && lb(i) && Qc(i); )
    i = Lh(i, o);
  return i && Is(i) && Qc(i) && !Gu(i) ? a : i || db(n) || a;
}
const jb = async function(n) {
  const o = this.getOffsetParent || Zp, a = this.getDimensions, i = await a(n.floating);
  return {
    reference: Nb(n.reference, await o(n.floating), n.strategy),
    floating: {
      x: 0,
      y: 0,
      width: i.width,
      height: i.height
    }
  };
};
function Sb(n) {
  return vn(n).direction === "rtl";
}
const Cb = {
  convertOffsetParentRelativeRectToViewportRelativeRect: hb,
  getDocumentElement: Mn,
  getClippingRect: wb,
  getOffsetParent: Zp,
  getElementRects: jb,
  getClientRects: pb,
  getDimensions: bb,
  getScale: Ds,
  isElement: xn,
  isRTL: Sb
};
function Jp(n, o) {
  return n.x === o.x && n.y === o.y && n.width === o.width && n.height === o.height;
}
function kb(n, o) {
  let a = null, i;
  const c = Mn(n);
  function u() {
    var m;
    clearTimeout(i), (m = a) == null || m.disconnect(), a = null;
  }
  function f(m, p) {
    m === void 0 && (m = !1), p === void 0 && (p = 1), u();
    const g = n.getBoundingClientRect(), {
      left: v,
      top: x,
      width: b,
      height: S
    } = g;
    if (m || o(), !b || !S)
      return;
    const j = ci(x), N = ci(c.clientWidth - (v + b)), C = ci(c.clientHeight - (x + S)), P = ci(v), O = {
      rootMargin: -j + "px " + -N + "px " + -C + "px " + -P + "px",
      threshold: Kt(0, Nr(1, p)) || 1
    };
    let F = !0;
    function D(Y) {
      const H = Y[0].intersectionRatio;
      if (H !== p) {
        if (!F)
          return f();
        H ? f(!1, H) : i = setTimeout(() => {
          f(!1, 1e-7);
        }, 1e3);
      }
      H === 1 && !Jp(g, n.getBoundingClientRect()) && f(), F = !1;
    }
    try {
      a = new IntersectionObserver(D, {
        ...O,
        // Handle <iframe>s
        root: c.ownerDocument
      });
    } catch {
      a = new IntersectionObserver(D, O);
    }
    a.observe(n);
  }
  return f(!0), u;
}
function Eb(n, o, a, i) {
  i === void 0 && (i = {});
  const {
    ancestorScroll: c = !0,
    ancestorResize: u = !0,
    elementResize: f = typeof ResizeObserver == "function",
    layoutShift: m = typeof IntersectionObserver == "function",
    animationFrame: p = !1
  } = i, g = Yu(n), v = c || u ? [...g ? Ga(g) : [], ...o ? Ga(o) : []] : [];
  v.forEach((P) => {
    c && P.addEventListener("scroll", a, {
      passive: !0
    }), u && P.addEventListener("resize", a);
  });
  const x = g && m ? kb(g, a) : null;
  let b = -1, S = null;
  f && (S = new ResizeObserver((P) => {
    let [E] = P;
    E && E.target === g && S && o && (S.unobserve(o), cancelAnimationFrame(b), b = requestAnimationFrame(() => {
      var O;
      (O = S) == null || O.observe(o);
    })), a();
  }), g && !p && S.observe(g), o && S.observe(o));
  let j, N = p ? Hr(n) : null;
  p && C();
  function C() {
    const P = Hr(n);
    N && !Jp(N, P) && a(), N = P, j = requestAnimationFrame(C);
  }
  return a(), () => {
    var P;
    v.forEach((E) => {
      c && E.removeEventListener("scroll", a), u && E.removeEventListener("resize", a);
    }), x == null || x(), (P = S) == null || P.disconnect(), S = null, p && cancelAnimationFrame(j);
  };
}
const Pb = sb, _b = ab, Rb = tb, Ab = ib, Tb = nb, Ih = eb, Db = ob, Mb = (n, o, a) => {
  const i = /* @__PURE__ */ new Map(), c = {
    platform: Cb,
    ...a
  }, u = {
    ...c.platform,
    _c: i
  };
  return J1(n, o, {
    ...c,
    platform: u
  });
};
var Ob = typeof document < "u", Fb = function() {
}, gi = Ob ? w.useLayoutEffect : Fb;
function Ci(n, o) {
  if (n === o)
    return !0;
  if (typeof n != typeof o)
    return !1;
  if (typeof n == "function" && n.toString() === o.toString())
    return !0;
  let a, i, c;
  if (n && o && typeof n == "object") {
    if (Array.isArray(n)) {
      if (a = n.length, a !== o.length) return !1;
      for (i = a; i-- !== 0; )
        if (!Ci(n[i], o[i]))
          return !1;
      return !0;
    }
    if (c = Object.keys(n), a = c.length, a !== Object.keys(o).length)
      return !1;
    for (i = a; i-- !== 0; )
      if (!{}.hasOwnProperty.call(o, c[i]))
        return !1;
    for (i = a; i-- !== 0; ) {
      const u = c[i];
      if (!(u === "_owner" && n.$$typeof) && !Ci(n[u], o[u]))
        return !1;
    }
    return !0;
  }
  return n !== n && o !== o;
}
function eg(n) {
  return typeof window > "u" ? 1 : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function zh(n, o) {
  const a = eg(n);
  return Math.round(o * a) / a;
}
function Xc(n) {
  const o = w.useRef(n);
  return gi(() => {
    o.current = n;
  }), o;
}
function Lb(n) {
  n === void 0 && (n = {});
  const {
    placement: o = "bottom",
    strategy: a = "absolute",
    middleware: i = [],
    platform: c,
    elements: {
      reference: u,
      floating: f
    } = {},
    transform: m = !0,
    whileElementsMounted: p,
    open: g
  } = n, [v, x] = w.useState({
    x: 0,
    y: 0,
    strategy: a,
    placement: o,
    middlewareData: {},
    isPositioned: !1
  }), [b, S] = w.useState(i);
  Ci(b, i) || S(i);
  const [j, N] = w.useState(null), [C, P] = w.useState(null), E = w.useCallback((M) => {
    M !== Y.current && (Y.current = M, N(M));
  }, []), O = w.useCallback((M) => {
    M !== H.current && (H.current = M, P(M));
  }, []), F = u || j, D = f || C, Y = w.useRef(null), H = w.useRef(null), B = w.useRef(v), re = p != null, me = Xc(p), J = Xc(c), X = Xc(g), W = w.useCallback(() => {
    if (!Y.current || !H.current)
      return;
    const M = {
      placement: o,
      strategy: a,
      middleware: b
    };
    J.current && (M.platform = J.current), Mb(Y.current, H.current, M).then((U) => {
      const G = {
        ...U,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: X.current !== !1
      };
      le.current && !Ci(B.current, G) && (B.current = G, qa.flushSync(() => {
        x(G);
      }));
    });
  }, [b, o, a, J, X]);
  gi(() => {
    g === !1 && B.current.isPositioned && (B.current.isPositioned = !1, x((M) => ({
      ...M,
      isPositioned: !1
    })));
  }, [g]);
  const le = w.useRef(!1);
  gi(() => (le.current = !0, () => {
    le.current = !1;
  }), []), gi(() => {
    if (F && (Y.current = F), D && (H.current = D), F && D) {
      if (me.current)
        return me.current(F, D, W);
      W();
    }
  }, [F, D, W, me, re]);
  const ye = w.useMemo(() => ({
    reference: Y,
    floating: H,
    setReference: E,
    setFloating: O
  }), [E, O]), ae = w.useMemo(() => ({
    reference: F,
    floating: D
  }), [F, D]), de = w.useMemo(() => {
    const M = {
      position: a,
      left: 0,
      top: 0
    };
    if (!ae.floating)
      return M;
    const U = zh(ae.floating, v.x), G = zh(ae.floating, v.y);
    return m ? {
      ...M,
      transform: "translate(" + U + "px, " + G + "px)",
      ...eg(ae.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: a,
      left: U,
      top: G
    };
  }, [a, m, ae.floating, v.x, v.y]);
  return w.useMemo(() => ({
    ...v,
    update: W,
    refs: ye,
    elements: ae,
    floatingStyles: de
  }), [v, W, ye, ae, de]);
}
const Ib = (n) => {
  function o(a) {
    return {}.hasOwnProperty.call(a, "current");
  }
  return {
    name: "arrow",
    options: n,
    fn(a) {
      const {
        element: i,
        padding: c
      } = typeof n == "function" ? n(a) : n;
      return i && o(i) ? i.current != null ? Ih({
        element: i.current,
        padding: c
      }).fn(a) : {} : i ? Ih({
        element: i,
        padding: c
      }).fn(a) : {};
    }
  };
}, zb = (n, o) => {
  const a = Pb(n);
  return {
    name: a.name,
    fn: a.fn,
    options: [n, o]
  };
}, Vb = (n, o) => {
  const a = _b(n);
  return {
    name: a.name,
    fn: a.fn,
    options: [n, o]
  };
}, $b = (n, o) => ({
  fn: Db(n).fn,
  options: [n, o]
}), Bb = (n, o) => {
  const a = Rb(n);
  return {
    name: a.name,
    fn: a.fn,
    options: [n, o]
  };
}, Ub = (n, o) => {
  const a = Ab(n);
  return {
    name: a.name,
    fn: a.fn,
    options: [n, o]
  };
}, Wb = (n, o) => {
  const a = Tb(n);
  return {
    name: a.name,
    fn: a.fn,
    options: [n, o]
  };
}, Hb = (n, o) => {
  const a = Ib(n);
  return {
    name: a.name,
    fn: a.fn,
    options: [n, o]
  };
};
var Gb = "Arrow", tg = w.forwardRef((n, o) => {
  const { children: a, width: i = 10, height: c = 5, ...u } = n;
  return /* @__PURE__ */ r.jsx(
    Ve.svg,
    {
      ...u,
      ref: o,
      width: i,
      height: c,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: n.asChild ? a : /* @__PURE__ */ r.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
tg.displayName = Gb;
var qb = tg;
function Bi(n) {
  const [o, a] = w.useState(void 0);
  return Ot(() => {
    if (n) {
      a({ width: n.offsetWidth, height: n.offsetHeight });
      const i = new ResizeObserver((c) => {
        if (!Array.isArray(c) || !c.length)
          return;
        const u = c[0];
        let f, m;
        if ("borderBoxSize" in u) {
          const p = u.borderBoxSize, g = Array.isArray(p) ? p[0] : p;
          f = g.inlineSize, m = g.blockSize;
        } else
          f = n.offsetWidth, m = n.offsetHeight;
        a({ width: f, height: m });
      });
      return i.observe(n, { box: "border-box" }), () => i.unobserve(n);
    } else
      a(void 0);
  }, [n]), o;
}
var Ku = "Popper", [ng, rg] = yn(Ku), [Yb, sg] = ng(Ku), ag = (n) => {
  const { __scopePopper: o, children: a } = n, [i, c] = w.useState(null);
  return /* @__PURE__ */ r.jsx(Yb, { scope: o, anchor: i, onAnchorChange: c, children: a });
};
ag.displayName = Ku;
var og = "PopperAnchor", ig = w.forwardRef(
  (n, o) => {
    const { __scopePopper: a, virtualRef: i, ...c } = n, u = sg(og, a), f = w.useRef(null), m = qe(o, f);
    return w.useEffect(() => {
      u.onAnchorChange((i == null ? void 0 : i.current) || f.current);
    }), i ? null : /* @__PURE__ */ r.jsx(Ve.div, { ...c, ref: m });
  }
);
ig.displayName = og;
var Qu = "PopperContent", [Kb, Qb] = ng(Qu), lg = w.forwardRef(
  (n, o) => {
    var K, ge, Ee, Ae, Oe, Fe;
    const {
      __scopePopper: a,
      side: i = "bottom",
      sideOffset: c = 0,
      align: u = "center",
      alignOffset: f = 0,
      arrowPadding: m = 0,
      avoidCollisions: p = !0,
      collisionBoundary: g = [],
      collisionPadding: v = 0,
      sticky: x = "partial",
      hideWhenDetached: b = !1,
      updatePositionStrategy: S = "optimized",
      onPlaced: j,
      ...N
    } = n, C = sg(Qu, a), [P, E] = w.useState(null), O = qe(o, (ft) => E(ft)), [F, D] = w.useState(null), Y = Bi(F), H = (Y == null ? void 0 : Y.width) ?? 0, B = (Y == null ? void 0 : Y.height) ?? 0, re = i + (u !== "center" ? "-" + u : ""), me = typeof v == "number" ? v : { top: 0, right: 0, bottom: 0, left: 0, ...v }, J = Array.isArray(g) ? g : [g], X = J.length > 0, W = {
      padding: me,
      boundary: J.filter(Zb),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: X
    }, { refs: le, floatingStyles: ye, placement: ae, isPositioned: de, middlewareData: M } = Lb({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: re,
      whileElementsMounted: (...ft) => Eb(...ft, {
        animationFrame: S === "always"
      }),
      elements: {
        reference: C.anchor
      },
      middleware: [
        zb({ mainAxis: c + B, alignmentAxis: f }),
        p && Vb({
          mainAxis: !0,
          crossAxis: !1,
          limiter: x === "partial" ? $b() : void 0,
          ...W
        }),
        p && Bb({ ...W }),
        Ub({
          ...W,
          apply: ({ elements: ft, rects: Nt, availableWidth: bn, availableHeight: an }) => {
            const { width: Xt, height: Qr } = Nt.reference, Nn = ft.floating.style;
            Nn.setProperty("--radix-popper-available-width", `${bn}px`), Nn.setProperty("--radix-popper-available-height", `${an}px`), Nn.setProperty("--radix-popper-anchor-width", `${Xt}px`), Nn.setProperty("--radix-popper-anchor-height", `${Qr}px`);
          }
        }),
        F && Hb({ element: F, padding: m }),
        Jb({ arrowWidth: H, arrowHeight: B }),
        b && Wb({ strategy: "referenceHidden", ...W })
      ]
    }), [U, G] = dg(ae), _ = Dn(j);
    Ot(() => {
      de && (_ == null || _());
    }, [de, _]);
    const z = (K = M.arrow) == null ? void 0 : K.x, oe = (ge = M.arrow) == null ? void 0 : ge.y, ue = ((Ee = M.arrow) == null ? void 0 : Ee.centerOffset) !== 0, [ce, je] = w.useState();
    return Ot(() => {
      P && je(window.getComputedStyle(P).zIndex);
    }, [P]), /* @__PURE__ */ r.jsx(
      "div",
      {
        ref: le.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...ye,
          transform: de ? ye.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: ce,
          "--radix-popper-transform-origin": [
            (Ae = M.transformOrigin) == null ? void 0 : Ae.x,
            (Oe = M.transformOrigin) == null ? void 0 : Oe.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((Fe = M.hide) == null ? void 0 : Fe.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: n.dir,
        children: /* @__PURE__ */ r.jsx(
          Kb,
          {
            scope: a,
            placedSide: U,
            onArrowChange: D,
            arrowX: z,
            arrowY: oe,
            shouldHideArrow: ue,
            children: /* @__PURE__ */ r.jsx(
              Ve.div,
              {
                "data-side": U,
                "data-align": G,
                ...N,
                ref: O,
                style: {
                  ...N.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: de ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
lg.displayName = Qu;
var cg = "PopperArrow", Xb = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, ug = w.forwardRef(function(o, a) {
  const { __scopePopper: i, ...c } = o, u = Qb(cg, i), f = Xb[u.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ r.jsx(
      "span",
      {
        ref: u.onArrowChange,
        style: {
          position: "absolute",
          left: u.arrowX,
          top: u.arrowY,
          [f]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[u.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[u.placedSide],
          visibility: u.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ r.jsx(
          qb,
          {
            ...c,
            ref: a,
            style: {
              ...c.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
ug.displayName = cg;
function Zb(n) {
  return n !== null;
}
var Jb = (n) => ({
  name: "transformOrigin",
  options: n,
  fn(o) {
    var C, P, E;
    const { placement: a, rects: i, middlewareData: c } = o, f = ((C = c.arrow) == null ? void 0 : C.centerOffset) !== 0, m = f ? 0 : n.arrowWidth, p = f ? 0 : n.arrowHeight, [g, v] = dg(a), x = { start: "0%", center: "50%", end: "100%" }[v], b = (((P = c.arrow) == null ? void 0 : P.x) ?? 0) + m / 2, S = (((E = c.arrow) == null ? void 0 : E.y) ?? 0) + p / 2;
    let j = "", N = "";
    return g === "bottom" ? (j = f ? x : `${b}px`, N = `${-p}px`) : g === "top" ? (j = f ? x : `${b}px`, N = `${i.floating.height + p}px`) : g === "right" ? (j = `${-p}px`, N = f ? x : `${S}px`) : g === "left" && (j = `${i.floating.width + p}px`, N = f ? x : `${S}px`), { data: { x: j, y: N } };
  }
});
function dg(n) {
  const [o, a = "center"] = n.split("-");
  return [o, a];
}
var eN = ag, tN = ig, nN = lg, rN = ug, sN = "Portal", Xu = w.forwardRef((n, o) => {
  var m;
  const { container: a, ...i } = n, [c, u] = w.useState(!1);
  Ot(() => u(!0), []);
  const f = a || c && ((m = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : m.body);
  return f ? E0.createPortal(/* @__PURE__ */ r.jsx(Ve.div, { ...i, ref: o }), f) : null;
});
Xu.displayName = sN;
function Gr({
  prop: n,
  defaultProp: o,
  onChange: a = () => {
  }
}) {
  const [i, c] = aN({ defaultProp: o, onChange: a }), u = n !== void 0, f = u ? n : i, m = Dn(a), p = w.useCallback(
    (g) => {
      if (u) {
        const x = typeof g == "function" ? g(n) : g;
        x !== n && m(x);
      } else
        c(g);
    },
    [u, n, c, m]
  );
  return [f, p];
}
function aN({
  defaultProp: n,
  onChange: o
}) {
  const a = w.useState(n), [i] = a, c = w.useRef(i), u = Dn(o);
  return w.useEffect(() => {
    c.current !== i && (u(i), c.current = i);
  }, [i, c, u]), a;
}
function Ui(n) {
  const o = w.useRef({ value: n, previous: n });
  return w.useMemo(() => (o.current.value !== n && (o.current.previous = o.current.value, o.current.value = n), o.current.previous), [n]);
}
var oN = "VisuallyHidden", fg = w.forwardRef(
  (n, o) => /* @__PURE__ */ r.jsx(
    Ve.span,
    {
      ...n,
      ref: o,
      style: {
        // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...n.style
      }
    }
  )
);
fg.displayName = oN;
var iN = function(n) {
  if (typeof document > "u")
    return null;
  var o = Array.isArray(n) ? n[0] : n;
  return o.ownerDocument.body;
}, Es = /* @__PURE__ */ new WeakMap(), ui = /* @__PURE__ */ new WeakMap(), di = {}, Zc = 0, mg = function(n) {
  return n && (n.host || mg(n.parentNode));
}, lN = function(n, o) {
  return o.map(function(a) {
    if (n.contains(a))
      return a;
    var i = mg(a);
    return i && n.contains(i) ? i : (console.error("aria-hidden", a, "in not contained inside", n, ". Doing nothing"), null);
  }).filter(function(a) {
    return !!a;
  });
}, cN = function(n, o, a, i) {
  var c = lN(o, Array.isArray(n) ? n : [n]);
  di[a] || (di[a] = /* @__PURE__ */ new WeakMap());
  var u = di[a], f = [], m = /* @__PURE__ */ new Set(), p = new Set(c), g = function(x) {
    !x || m.has(x) || (m.add(x), g(x.parentNode));
  };
  c.forEach(g);
  var v = function(x) {
    !x || p.has(x) || Array.prototype.forEach.call(x.children, function(b) {
      if (m.has(b))
        v(b);
      else
        try {
          var S = b.getAttribute(i), j = S !== null && S !== "false", N = (Es.get(b) || 0) + 1, C = (u.get(b) || 0) + 1;
          Es.set(b, N), u.set(b, C), f.push(b), N === 1 && j && ui.set(b, !0), C === 1 && b.setAttribute(a, "true"), j || b.setAttribute(i, "true");
        } catch (P) {
          console.error("aria-hidden: cannot operate on ", b, P);
        }
    });
  };
  return v(o), m.clear(), Zc++, function() {
    f.forEach(function(x) {
      var b = Es.get(x) - 1, S = u.get(x) - 1;
      Es.set(x, b), u.set(x, S), b || (ui.has(x) || x.removeAttribute(i), ui.delete(x)), S || x.removeAttribute(a);
    }), Zc--, Zc || (Es = /* @__PURE__ */ new WeakMap(), Es = /* @__PURE__ */ new WeakMap(), ui = /* @__PURE__ */ new WeakMap(), di = {});
  };
}, hg = function(n, o, a) {
  a === void 0 && (a = "data-aria-hidden");
  var i = Array.from(Array.isArray(n) ? n : [n]), c = iN(n);
  return c ? (i.push.apply(i, Array.from(c.querySelectorAll("[aria-live], script"))), cN(i, c, a, "aria-hidden")) : function() {
    return null;
  };
}, _n = function() {
  return _n = Object.assign || function(o) {
    for (var a, i = 1, c = arguments.length; i < c; i++) {
      a = arguments[i];
      for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (o[u] = a[u]);
    }
    return o;
  }, _n.apply(this, arguments);
};
function pg(n, o) {
  var a = {};
  for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && o.indexOf(i) < 0 && (a[i] = n[i]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var c = 0, i = Object.getOwnPropertySymbols(n); c < i.length; c++)
      o.indexOf(i[c]) < 0 && Object.prototype.propertyIsEnumerable.call(n, i[c]) && (a[i[c]] = n[i[c]]);
  return a;
}
function uN(n, o, a) {
  if (a || arguments.length === 2) for (var i = 0, c = o.length, u; i < c; i++)
    (u || !(i in o)) && (u || (u = Array.prototype.slice.call(o, 0, i)), u[i] = o[i]);
  return n.concat(u || Array.prototype.slice.call(o));
}
var xi = "right-scroll-bar-position", vi = "width-before-scroll-bar", dN = "with-scroll-bars-hidden", fN = "--removed-body-scroll-bar-size";
function Jc(n, o) {
  return typeof n == "function" ? n(o) : n && (n.current = o), n;
}
function mN(n, o) {
  var a = w.useState(function() {
    return {
      // value
      value: n,
      // last callback
      callback: o,
      // "memoized" public interface
      facade: {
        get current() {
          return a.value;
        },
        set current(i) {
          var c = a.value;
          c !== i && (a.value = i, a.callback(i, c));
        }
      }
    };
  })[0];
  return a.callback = o, a.facade;
}
var hN = typeof window < "u" ? w.useLayoutEffect : w.useEffect, Vh = /* @__PURE__ */ new WeakMap();
function pN(n, o) {
  var a = mN(null, function(i) {
    return n.forEach(function(c) {
      return Jc(c, i);
    });
  });
  return hN(function() {
    var i = Vh.get(a);
    if (i) {
      var c = new Set(i), u = new Set(n), f = a.current;
      c.forEach(function(m) {
        u.has(m) || Jc(m, null);
      }), u.forEach(function(m) {
        c.has(m) || Jc(m, f);
      });
    }
    Vh.set(a, n);
  }, [n]), a;
}
function gN(n) {
  return n;
}
function xN(n, o) {
  o === void 0 && (o = gN);
  var a = [], i = !1, c = {
    read: function() {
      if (i)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return a.length ? a[a.length - 1] : n;
    },
    useMedium: function(u) {
      var f = o(u, i);
      return a.push(f), function() {
        a = a.filter(function(m) {
          return m !== f;
        });
      };
    },
    assignSyncMedium: function(u) {
      for (i = !0; a.length; ) {
        var f = a;
        a = [], f.forEach(u);
      }
      a = {
        push: function(m) {
          return u(m);
        },
        filter: function() {
          return a;
        }
      };
    },
    assignMedium: function(u) {
      i = !0;
      var f = [];
      if (a.length) {
        var m = a;
        a = [], m.forEach(u), f = a;
      }
      var p = function() {
        var v = f;
        f = [], v.forEach(u);
      }, g = function() {
        return Promise.resolve().then(p);
      };
      g(), a = {
        push: function(v) {
          f.push(v), g();
        },
        filter: function(v) {
          return f = f.filter(v), a;
        }
      };
    }
  };
  return c;
}
function vN(n) {
  n === void 0 && (n = {});
  var o = xN(null);
  return o.options = _n({ async: !0, ssr: !1 }, n), o;
}
var gg = function(n) {
  var o = n.sideCar, a = pg(n, ["sideCar"]);
  if (!o)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var i = o.read();
  if (!i)
    throw new Error("Sidecar medium not found");
  return w.createElement(i, _n({}, a));
};
gg.isSideCarExport = !0;
function yN(n, o) {
  return n.useMedium(o), gg;
}
var xg = vN(), eu = function() {
}, Wi = w.forwardRef(function(n, o) {
  var a = w.useRef(null), i = w.useState({
    onScrollCapture: eu,
    onWheelCapture: eu,
    onTouchMoveCapture: eu
  }), c = i[0], u = i[1], f = n.forwardProps, m = n.children, p = n.className, g = n.removeScrollBar, v = n.enabled, x = n.shards, b = n.sideCar, S = n.noRelative, j = n.noIsolation, N = n.inert, C = n.allowPinchZoom, P = n.as, E = P === void 0 ? "div" : P, O = n.gapMode, F = pg(n, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), D = b, Y = pN([a, o]), H = _n(_n({}, F), c);
  return w.createElement(
    w.Fragment,
    null,
    v && w.createElement(D, { sideCar: xg, removeScrollBar: g, shards: x, noRelative: S, noIsolation: j, inert: N, setCallbacks: u, allowPinchZoom: !!C, lockRef: a, gapMode: O }),
    f ? w.cloneElement(w.Children.only(m), _n(_n({}, H), { ref: Y })) : w.createElement(E, _n({}, H, { className: p, ref: Y }), m)
  );
});
Wi.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Wi.classNames = {
  fullWidth: vi,
  zeroRight: xi
};
var wN = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function bN() {
  if (!document)
    return null;
  var n = document.createElement("style");
  n.type = "text/css";
  var o = wN();
  return o && n.setAttribute("nonce", o), n;
}
function NN(n, o) {
  n.styleSheet ? n.styleSheet.cssText = o : n.appendChild(document.createTextNode(o));
}
function jN(n) {
  var o = document.head || document.getElementsByTagName("head")[0];
  o.appendChild(n);
}
var SN = function() {
  var n = 0, o = null;
  return {
    add: function(a) {
      n == 0 && (o = bN()) && (NN(o, a), jN(o)), n++;
    },
    remove: function() {
      n--, !n && o && (o.parentNode && o.parentNode.removeChild(o), o = null);
    }
  };
}, CN = function() {
  var n = SN();
  return function(o, a) {
    w.useEffect(function() {
      return n.add(o), function() {
        n.remove();
      };
    }, [o && a]);
  };
}, vg = function() {
  var n = CN(), o = function(a) {
    var i = a.styles, c = a.dynamic;
    return n(i, c), null;
  };
  return o;
}, kN = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, tu = function(n) {
  return parseInt(n || "", 10) || 0;
}, EN = function(n) {
  var o = window.getComputedStyle(document.body), a = o[n === "padding" ? "paddingLeft" : "marginLeft"], i = o[n === "padding" ? "paddingTop" : "marginTop"], c = o[n === "padding" ? "paddingRight" : "marginRight"];
  return [tu(a), tu(i), tu(c)];
}, PN = function(n) {
  if (n === void 0 && (n = "margin"), typeof window > "u")
    return kN;
  var o = EN(n), a = document.documentElement.clientWidth, i = window.innerWidth;
  return {
    left: o[0],
    top: o[1],
    right: o[2],
    gap: Math.max(0, i - a + o[2] - o[0])
  };
}, _N = vg(), Ms = "data-scroll-locked", RN = function(n, o, a, i) {
  var c = n.left, u = n.top, f = n.right, m = n.gap;
  return a === void 0 && (a = "margin"), `
  .`.concat(dN, ` {
   overflow: hidden `).concat(i, `;
   padding-right: `).concat(m, "px ").concat(i, `;
  }
  body[`).concat(Ms, `] {
    overflow: hidden `).concat(i, `;
    overscroll-behavior: contain;
    `).concat([
    o && "position: relative ".concat(i, ";"),
    a === "margin" && `
    padding-left: `.concat(c, `px;
    padding-top: `).concat(u, `px;
    padding-right: `).concat(f, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(m, "px ").concat(i, `;
    `),
    a === "padding" && "padding-right: ".concat(m, "px ").concat(i, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(xi, ` {
    right: `).concat(m, "px ").concat(i, `;
  }
  
  .`).concat(vi, ` {
    margin-right: `).concat(m, "px ").concat(i, `;
  }
  
  .`).concat(xi, " .").concat(xi, ` {
    right: 0 `).concat(i, `;
  }
  
  .`).concat(vi, " .").concat(vi, ` {
    margin-right: 0 `).concat(i, `;
  }
  
  body[`).concat(Ms, `] {
    `).concat(fN, ": ").concat(m, `px;
  }
`);
}, $h = function() {
  var n = parseInt(document.body.getAttribute(Ms) || "0", 10);
  return isFinite(n) ? n : 0;
}, AN = function() {
  w.useEffect(function() {
    return document.body.setAttribute(Ms, ($h() + 1).toString()), function() {
      var n = $h() - 1;
      n <= 0 ? document.body.removeAttribute(Ms) : document.body.setAttribute(Ms, n.toString());
    };
  }, []);
}, TN = function(n) {
  var o = n.noRelative, a = n.noImportant, i = n.gapMode, c = i === void 0 ? "margin" : i;
  AN();
  var u = w.useMemo(function() {
    return PN(c);
  }, [c]);
  return w.createElement(_N, { styles: RN(u, !o, c, a ? "" : "!important") });
}, wu = !1;
if (typeof window < "u")
  try {
    var fi = Object.defineProperty({}, "passive", {
      get: function() {
        return wu = !0, !0;
      }
    });
    window.addEventListener("test", fi, fi), window.removeEventListener("test", fi, fi);
  } catch {
    wu = !1;
  }
var Ps = wu ? { passive: !1 } : !1, DN = function(n) {
  return n.tagName === "TEXTAREA";
}, yg = function(n, o) {
  if (!(n instanceof Element))
    return !1;
  var a = window.getComputedStyle(n);
  return (
    // not-not-scrollable
    a[o] !== "hidden" && // contains scroll inside self
    !(a.overflowY === a.overflowX && !DN(n) && a[o] === "visible")
  );
}, MN = function(n) {
  return yg(n, "overflowY");
}, ON = function(n) {
  return yg(n, "overflowX");
}, Bh = function(n, o) {
  var a = o.ownerDocument, i = o;
  do {
    typeof ShadowRoot < "u" && i instanceof ShadowRoot && (i = i.host);
    var c = wg(n, i);
    if (c) {
      var u = bg(n, i), f = u[1], m = u[2];
      if (f > m)
        return !0;
    }
    i = i.parentNode;
  } while (i && i !== a.body);
  return !1;
}, FN = function(n) {
  var o = n.scrollTop, a = n.scrollHeight, i = n.clientHeight;
  return [
    o,
    a,
    i
  ];
}, LN = function(n) {
  var o = n.scrollLeft, a = n.scrollWidth, i = n.clientWidth;
  return [
    o,
    a,
    i
  ];
}, wg = function(n, o) {
  return n === "v" ? MN(o) : ON(o);
}, bg = function(n, o) {
  return n === "v" ? FN(o) : LN(o);
}, IN = function(n, o) {
  return n === "h" && o === "rtl" ? -1 : 1;
}, zN = function(n, o, a, i, c) {
  var u = IN(n, window.getComputedStyle(o).direction), f = u * i, m = a.target, p = o.contains(m), g = !1, v = f > 0, x = 0, b = 0;
  do {
    if (!m)
      break;
    var S = bg(n, m), j = S[0], N = S[1], C = S[2], P = N - C - u * j;
    (j || P) && wg(n, m) && (x += P, b += j);
    var E = m.parentNode;
    m = E && E.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? E.host : E;
  } while (
    // portaled content
    !p && m !== document.body || // self content
    p && (o.contains(m) || o === m)
  );
  return (v && Math.abs(x) < 1 || !v && Math.abs(b) < 1) && (g = !0), g;
}, mi = function(n) {
  return "changedTouches" in n ? [n.changedTouches[0].clientX, n.changedTouches[0].clientY] : [0, 0];
}, Uh = function(n) {
  return [n.deltaX, n.deltaY];
}, Wh = function(n) {
  return n && "current" in n ? n.current : n;
}, VN = function(n, o) {
  return n[0] === o[0] && n[1] === o[1];
}, $N = function(n) {
  return `
  .block-interactivity-`.concat(n, ` {pointer-events: none;}
  .allow-interactivity-`).concat(n, ` {pointer-events: all;}
`);
}, BN = 0, _s = [];
function UN(n) {
  var o = w.useRef([]), a = w.useRef([0, 0]), i = w.useRef(), c = w.useState(BN++)[0], u = w.useState(vg)[0], f = w.useRef(n);
  w.useEffect(function() {
    f.current = n;
  }, [n]), w.useEffect(function() {
    if (n.inert) {
      document.body.classList.add("block-interactivity-".concat(c));
      var N = uN([n.lockRef.current], (n.shards || []).map(Wh), !0).filter(Boolean);
      return N.forEach(function(C) {
        return C.classList.add("allow-interactivity-".concat(c));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(c)), N.forEach(function(C) {
          return C.classList.remove("allow-interactivity-".concat(c));
        });
      };
    }
  }, [n.inert, n.lockRef.current, n.shards]);
  var m = w.useCallback(function(N, C) {
    if ("touches" in N && N.touches.length === 2 || N.type === "wheel" && N.ctrlKey)
      return !f.current.allowPinchZoom;
    var P = mi(N), E = a.current, O = "deltaX" in N ? N.deltaX : E[0] - P[0], F = "deltaY" in N ? N.deltaY : E[1] - P[1], D, Y = N.target, H = Math.abs(O) > Math.abs(F) ? "h" : "v";
    if ("touches" in N && H === "h" && Y.type === "range")
      return !1;
    var B = window.getSelection(), re = B && B.anchorNode, me = re ? re === Y || re.contains(Y) : !1;
    if (me)
      return !1;
    var J = Bh(H, Y);
    if (!J)
      return !0;
    if (J ? D = H : (D = H === "v" ? "h" : "v", J = Bh(H, Y)), !J)
      return !1;
    if (!i.current && "changedTouches" in N && (O || F) && (i.current = D), !D)
      return !0;
    var X = i.current || D;
    return zN(X, C, N, X === "h" ? O : F);
  }, []), p = w.useCallback(function(N) {
    var C = N;
    if (!(!_s.length || _s[_s.length - 1] !== u)) {
      var P = "deltaY" in C ? Uh(C) : mi(C), E = o.current.filter(function(D) {
        return D.name === C.type && (D.target === C.target || C.target === D.shadowParent) && VN(D.delta, P);
      })[0];
      if (E && E.should) {
        C.cancelable && C.preventDefault();
        return;
      }
      if (!E) {
        var O = (f.current.shards || []).map(Wh).filter(Boolean).filter(function(D) {
          return D.contains(C.target);
        }), F = O.length > 0 ? m(C, O[0]) : !f.current.noIsolation;
        F && C.cancelable && C.preventDefault();
      }
    }
  }, []), g = w.useCallback(function(N, C, P, E) {
    var O = { name: N, delta: C, target: P, should: E, shadowParent: WN(P) };
    o.current.push(O), setTimeout(function() {
      o.current = o.current.filter(function(F) {
        return F !== O;
      });
    }, 1);
  }, []), v = w.useCallback(function(N) {
    a.current = mi(N), i.current = void 0;
  }, []), x = w.useCallback(function(N) {
    g(N.type, Uh(N), N.target, m(N, n.lockRef.current));
  }, []), b = w.useCallback(function(N) {
    g(N.type, mi(N), N.target, m(N, n.lockRef.current));
  }, []);
  w.useEffect(function() {
    return _s.push(u), n.setCallbacks({
      onScrollCapture: x,
      onWheelCapture: x,
      onTouchMoveCapture: b
    }), document.addEventListener("wheel", p, Ps), document.addEventListener("touchmove", p, Ps), document.addEventListener("touchstart", v, Ps), function() {
      _s = _s.filter(function(N) {
        return N !== u;
      }), document.removeEventListener("wheel", p, Ps), document.removeEventListener("touchmove", p, Ps), document.removeEventListener("touchstart", v, Ps);
    };
  }, []);
  var S = n.removeScrollBar, j = n.inert;
  return w.createElement(
    w.Fragment,
    null,
    j ? w.createElement(u, { styles: $N(c) }) : null,
    S ? w.createElement(TN, { noRelative: n.noRelative, gapMode: n.gapMode }) : null
  );
}
function WN(n) {
  for (var o = null; n !== null; )
    n instanceof ShadowRoot && (o = n.host, n = n.host), n = n.parentNode;
  return o;
}
const HN = yN(xg, UN);
var Zu = w.forwardRef(function(n, o) {
  return w.createElement(Wi, _n({}, n, { ref: o, sideCar: HN }));
});
Zu.classNames = Wi.classNames;
var GN = [" ", "Enter", "ArrowUp", "ArrowDown"], qN = [" ", "Enter"], Qa = "Select", [Hi, Gi, YN] = zp(Qa), [Ks] = yn(Qa, [
  YN,
  rg
]), qi = rg(), [KN, Sr] = Ks(Qa), [QN, XN] = Ks(Qa), Ng = (n) => {
  const {
    __scopeSelect: o,
    children: a,
    open: i,
    defaultOpen: c,
    onOpenChange: u,
    value: f,
    defaultValue: m,
    onValueChange: p,
    dir: g,
    name: v,
    autoComplete: x,
    disabled: b,
    required: S,
    form: j
  } = n, N = qi(o), [C, P] = w.useState(null), [E, O] = w.useState(null), [F, D] = w.useState(!1), Y = Vu(g), [H = !1, B] = Gr({
    prop: i,
    defaultProp: c,
    onChange: u
  }), [re, me] = Gr({
    prop: f,
    defaultProp: m,
    onChange: p
  }), J = w.useRef(null), X = C ? j || !!C.closest("form") : !0, [W, le] = w.useState(/* @__PURE__ */ new Set()), ye = Array.from(W).map((ae) => ae.props.value).join(";");
  return /* @__PURE__ */ r.jsx(eN, { ...N, children: /* @__PURE__ */ r.jsxs(
    KN,
    {
      required: S,
      scope: o,
      trigger: C,
      onTriggerChange: P,
      valueNode: E,
      onValueNodeChange: O,
      valueNodeHasChildren: F,
      onValueNodeHasChildrenChange: D,
      contentId: Ur(),
      value: re,
      onValueChange: me,
      open: H,
      onOpenChange: B,
      dir: Y,
      triggerPointerDownPosRef: J,
      disabled: b,
      children: [
        /* @__PURE__ */ r.jsx(Hi.Provider, { scope: o, children: /* @__PURE__ */ r.jsx(
          QN,
          {
            scope: n.__scopeSelect,
            onNativeOptionAdd: w.useCallback((ae) => {
              le((de) => new Set(de).add(ae));
            }, []),
            onNativeOptionRemove: w.useCallback((ae) => {
              le((de) => {
                const M = new Set(de);
                return M.delete(ae), M;
              });
            }, []),
            children: a
          }
        ) }),
        X ? /* @__PURE__ */ r.jsxs(
          Hg,
          {
            "aria-hidden": !0,
            required: S,
            tabIndex: -1,
            name: v,
            autoComplete: x,
            value: re,
            onChange: (ae) => me(ae.target.value),
            disabled: b,
            form: j,
            children: [
              re === void 0 ? /* @__PURE__ */ r.jsx("option", { value: "" }) : null,
              Array.from(W)
            ]
          },
          ye
        ) : null
      ]
    }
  ) });
};
Ng.displayName = Qa;
var jg = "SelectTrigger", Sg = w.forwardRef(
  (n, o) => {
    const { __scopeSelect: a, disabled: i = !1, ...c } = n, u = qi(a), f = Sr(jg, a), m = f.disabled || i, p = qe(o, f.onTriggerChange), g = Gi(a), v = w.useRef("touch"), [x, b, S] = Gg((N) => {
      const C = g().filter((O) => !O.disabled), P = C.find((O) => O.value === f.value), E = qg(C, N, P);
      E !== void 0 && f.onValueChange(E.value);
    }), j = (N) => {
      m || (f.onOpenChange(!0), S()), N && (f.triggerPointerDownPosRef.current = {
        x: Math.round(N.pageX),
        y: Math.round(N.pageY)
      });
    };
    return /* @__PURE__ */ r.jsx(tN, { asChild: !0, ...u, children: /* @__PURE__ */ r.jsx(
      Ve.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": f.contentId,
        "aria-expanded": f.open,
        "aria-required": f.required,
        "aria-autocomplete": "none",
        dir: f.dir,
        "data-state": f.open ? "open" : "closed",
        disabled: m,
        "data-disabled": m ? "" : void 0,
        "data-placeholder": Wg(f.value) ? "" : void 0,
        ...c,
        ref: p,
        onClick: ze(c.onClick, (N) => {
          N.currentTarget.focus(), v.current !== "mouse" && j(N);
        }),
        onPointerDown: ze(c.onPointerDown, (N) => {
          v.current = N.pointerType;
          const C = N.target;
          C.hasPointerCapture(N.pointerId) && C.releasePointerCapture(N.pointerId), N.button === 0 && N.ctrlKey === !1 && N.pointerType === "mouse" && (j(N), N.preventDefault());
        }),
        onKeyDown: ze(c.onKeyDown, (N) => {
          const C = x.current !== "";
          !(N.ctrlKey || N.altKey || N.metaKey) && N.key.length === 1 && b(N.key), !(C && N.key === " ") && GN.includes(N.key) && (j(), N.preventDefault());
        })
      }
    ) });
  }
);
Sg.displayName = jg;
var Cg = "SelectValue", kg = w.forwardRef(
  (n, o) => {
    const { __scopeSelect: a, className: i, style: c, children: u, placeholder: f = "", ...m } = n, p = Sr(Cg, a), { onValueNodeHasChildrenChange: g } = p, v = u !== void 0, x = qe(o, p.onValueNodeChange);
    return Ot(() => {
      g(v);
    }, [g, v]), /* @__PURE__ */ r.jsx(
      Ve.span,
      {
        ...m,
        ref: x,
        style: { pointerEvents: "none" },
        children: Wg(p.value) ? /* @__PURE__ */ r.jsx(r.Fragment, { children: f }) : u
      }
    );
  }
);
kg.displayName = Cg;
var ZN = "SelectIcon", Eg = w.forwardRef(
  (n, o) => {
    const { __scopeSelect: a, children: i, ...c } = n;
    return /* @__PURE__ */ r.jsx(Ve.span, { "aria-hidden": !0, ...c, ref: o, children: i || "▼" });
  }
);
Eg.displayName = ZN;
var JN = "SelectPortal", Pg = (n) => /* @__PURE__ */ r.jsx(Xu, { asChild: !0, ...n });
Pg.displayName = JN;
var qr = "SelectContent", _g = w.forwardRef(
  (n, o) => {
    const a = Sr(qr, n.__scopeSelect), [i, c] = w.useState();
    if (Ot(() => {
      c(new DocumentFragment());
    }, []), !a.open) {
      const u = i;
      return u ? qa.createPortal(
        /* @__PURE__ */ r.jsx(Rg, { scope: n.__scopeSelect, children: /* @__PURE__ */ r.jsx(Hi.Slot, { scope: n.__scopeSelect, children: /* @__PURE__ */ r.jsx("div", { children: n.children }) }) }),
        u
      ) : null;
    }
    return /* @__PURE__ */ r.jsx(Ag, { ...n, ref: o });
  }
);
_g.displayName = qr;
var hn = 10, [Rg, Cr] = Ks(qr), ej = "SelectContentImpl", Ag = w.forwardRef(
  (n, o) => {
    const {
      __scopeSelect: a,
      position: i = "item-aligned",
      onCloseAutoFocus: c,
      onEscapeKeyDown: u,
      onPointerDownOutside: f,
      //
      // PopperContent props
      side: m,
      sideOffset: p,
      align: g,
      alignOffset: v,
      arrowPadding: x,
      collisionBoundary: b,
      collisionPadding: S,
      sticky: j,
      hideWhenDetached: N,
      avoidCollisions: C,
      //
      ...P
    } = n, E = Sr(qr, a), [O, F] = w.useState(null), [D, Y] = w.useState(null), H = qe(o, (K) => F(K)), [B, re] = w.useState(null), [me, J] = w.useState(
      null
    ), X = Gi(a), [W, le] = w.useState(!1), ye = w.useRef(!1);
    w.useEffect(() => {
      if (O) return hg(O);
    }, [O]), Bp();
    const ae = w.useCallback(
      (K) => {
        const [ge, ...Ee] = X().map((Fe) => Fe.ref.current), [Ae] = Ee.slice(-1), Oe = document.activeElement;
        for (const Fe of K)
          if (Fe === Oe || (Fe == null || Fe.scrollIntoView({ block: "nearest" }), Fe === ge && D && (D.scrollTop = 0), Fe === Ae && D && (D.scrollTop = D.scrollHeight), Fe == null || Fe.focus(), document.activeElement !== Oe)) return;
      },
      [X, D]
    ), de = w.useCallback(
      () => ae([B, O]),
      [ae, B, O]
    );
    w.useEffect(() => {
      W && de();
    }, [W, de]);
    const { onOpenChange: M, triggerPointerDownPosRef: U } = E;
    w.useEffect(() => {
      if (O) {
        let K = { x: 0, y: 0 };
        const ge = (Ae) => {
          var Oe, Fe;
          K = {
            x: Math.abs(Math.round(Ae.pageX) - (((Oe = U.current) == null ? void 0 : Oe.x) ?? 0)),
            y: Math.abs(Math.round(Ae.pageY) - (((Fe = U.current) == null ? void 0 : Fe.y) ?? 0))
          };
        }, Ee = (Ae) => {
          K.x <= 10 && K.y <= 10 ? Ae.preventDefault() : O.contains(Ae.target) || M(!1), document.removeEventListener("pointermove", ge), U.current = null;
        };
        return U.current !== null && (document.addEventListener("pointermove", ge), document.addEventListener("pointerup", Ee, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", ge), document.removeEventListener("pointerup", Ee, { capture: !0 });
        };
      }
    }, [O, M, U]), w.useEffect(() => {
      const K = () => M(!1);
      return window.addEventListener("blur", K), window.addEventListener("resize", K), () => {
        window.removeEventListener("blur", K), window.removeEventListener("resize", K);
      };
    }, [M]);
    const [G, _] = Gg((K) => {
      const ge = X().filter((Oe) => !Oe.disabled), Ee = ge.find((Oe) => Oe.ref.current === document.activeElement), Ae = qg(ge, K, Ee);
      Ae && setTimeout(() => Ae.ref.current.focus());
    }), z = w.useCallback(
      (K, ge, Ee) => {
        const Ae = !ye.current && !Ee;
        (E.value !== void 0 && E.value === ge || Ae) && (re(K), Ae && (ye.current = !0));
      },
      [E.value]
    ), oe = w.useCallback(() => O == null ? void 0 : O.focus(), [O]), ue = w.useCallback(
      (K, ge, Ee) => {
        const Ae = !ye.current && !Ee;
        (E.value !== void 0 && E.value === ge || Ae) && J(K);
      },
      [E.value]
    ), ce = i === "popper" ? bu : Tg, je = ce === bu ? {
      side: m,
      sideOffset: p,
      align: g,
      alignOffset: v,
      arrowPadding: x,
      collisionBoundary: b,
      collisionPadding: S,
      sticky: j,
      hideWhenDetached: N,
      avoidCollisions: C
    } : {};
    return /* @__PURE__ */ r.jsx(
      Rg,
      {
        scope: a,
        content: O,
        viewport: D,
        onViewportChange: Y,
        itemRefCallback: z,
        selectedItem: B,
        onItemLeave: oe,
        itemTextRefCallback: ue,
        focusSelectedItem: de,
        selectedItemText: me,
        position: i,
        isPositioned: W,
        searchRef: G,
        children: /* @__PURE__ */ r.jsx(Zu, { as: br, allowPinchZoom: !0, children: /* @__PURE__ */ r.jsx(
          Bu,
          {
            asChild: !0,
            trapped: E.open,
            onMountAutoFocus: (K) => {
              K.preventDefault();
            },
            onUnmountAutoFocus: ze(c, (K) => {
              var ge;
              (ge = E.trigger) == null || ge.focus({ preventScroll: !0 }), K.preventDefault();
            }),
            children: /* @__PURE__ */ r.jsx(
              $u,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: u,
                onPointerDownOutside: f,
                onFocusOutside: (K) => K.preventDefault(),
                onDismiss: () => E.onOpenChange(!1),
                children: /* @__PURE__ */ r.jsx(
                  ce,
                  {
                    role: "listbox",
                    id: E.contentId,
                    "data-state": E.open ? "open" : "closed",
                    dir: E.dir,
                    onContextMenu: (K) => K.preventDefault(),
                    ...P,
                    ...je,
                    onPlaced: () => le(!0),
                    ref: H,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...P.style
                    },
                    onKeyDown: ze(P.onKeyDown, (K) => {
                      const ge = K.ctrlKey || K.altKey || K.metaKey;
                      if (K.key === "Tab" && K.preventDefault(), !ge && K.key.length === 1 && _(K.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(K.key)) {
                        let Ae = X().filter((Oe) => !Oe.disabled).map((Oe) => Oe.ref.current);
                        if (["ArrowUp", "End"].includes(K.key) && (Ae = Ae.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(K.key)) {
                          const Oe = K.target, Fe = Ae.indexOf(Oe);
                          Ae = Ae.slice(Fe + 1);
                        }
                        setTimeout(() => ae(Ae)), K.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Ag.displayName = ej;
var tj = "SelectItemAlignedPosition", Tg = w.forwardRef((n, o) => {
  const { __scopeSelect: a, onPlaced: i, ...c } = n, u = Sr(qr, a), f = Cr(qr, a), [m, p] = w.useState(null), [g, v] = w.useState(null), x = qe(o, (H) => v(H)), b = Gi(a), S = w.useRef(!1), j = w.useRef(!0), { viewport: N, selectedItem: C, selectedItemText: P, focusSelectedItem: E } = f, O = w.useCallback(() => {
    if (u.trigger && u.valueNode && m && g && N && C && P) {
      const H = u.trigger.getBoundingClientRect(), B = g.getBoundingClientRect(), re = u.valueNode.getBoundingClientRect(), me = P.getBoundingClientRect();
      if (u.dir !== "rtl") {
        const Oe = me.left - B.left, Fe = re.left - Oe, ft = H.left - Fe, Nt = H.width + ft, bn = Math.max(Nt, B.width), an = window.innerWidth - hn, Xt = bh(Fe, [
          hn,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(hn, an - bn)
        ]);
        m.style.minWidth = Nt + "px", m.style.left = Xt + "px";
      } else {
        const Oe = B.right - me.right, Fe = window.innerWidth - re.right - Oe, ft = window.innerWidth - H.right - Fe, Nt = H.width + ft, bn = Math.max(Nt, B.width), an = window.innerWidth - hn, Xt = bh(Fe, [
          hn,
          Math.max(hn, an - bn)
        ]);
        m.style.minWidth = Nt + "px", m.style.right = Xt + "px";
      }
      const J = b(), X = window.innerHeight - hn * 2, W = N.scrollHeight, le = window.getComputedStyle(g), ye = parseInt(le.borderTopWidth, 10), ae = parseInt(le.paddingTop, 10), de = parseInt(le.borderBottomWidth, 10), M = parseInt(le.paddingBottom, 10), U = ye + ae + W + M + de, G = Math.min(C.offsetHeight * 5, U), _ = window.getComputedStyle(N), z = parseInt(_.paddingTop, 10), oe = parseInt(_.paddingBottom, 10), ue = H.top + H.height / 2 - hn, ce = X - ue, je = C.offsetHeight / 2, K = C.offsetTop + je, ge = ye + ae + K, Ee = U - ge;
      if (ge <= ue) {
        const Oe = J.length > 0 && C === J[J.length - 1].ref.current;
        m.style.bottom = "0px";
        const Fe = g.clientHeight - N.offsetTop - N.offsetHeight, ft = Math.max(
          ce,
          je + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (Oe ? oe : 0) + Fe + de
        ), Nt = ge + ft;
        m.style.height = Nt + "px";
      } else {
        const Oe = J.length > 0 && C === J[0].ref.current;
        m.style.top = "0px";
        const ft = Math.max(
          ue,
          ye + N.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (Oe ? z : 0) + je
        ) + Ee;
        m.style.height = ft + "px", N.scrollTop = ge - ue + N.offsetTop;
      }
      m.style.margin = `${hn}px 0`, m.style.minHeight = G + "px", m.style.maxHeight = X + "px", i == null || i(), requestAnimationFrame(() => S.current = !0);
    }
  }, [
    b,
    u.trigger,
    u.valueNode,
    m,
    g,
    N,
    C,
    P,
    u.dir,
    i
  ]);
  Ot(() => O(), [O]);
  const [F, D] = w.useState();
  Ot(() => {
    g && D(window.getComputedStyle(g).zIndex);
  }, [g]);
  const Y = w.useCallback(
    (H) => {
      H && j.current === !0 && (O(), E == null || E(), j.current = !1);
    },
    [O, E]
  );
  return /* @__PURE__ */ r.jsx(
    rj,
    {
      scope: a,
      contentWrapper: m,
      shouldExpandOnScrollRef: S,
      onScrollButtonChange: Y,
      children: /* @__PURE__ */ r.jsx(
        "div",
        {
          ref: p,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: F
          },
          children: /* @__PURE__ */ r.jsx(
            Ve.div,
            {
              ...c,
              ref: x,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...c.style
              }
            }
          )
        }
      )
    }
  );
});
Tg.displayName = tj;
var nj = "SelectPopperPosition", bu = w.forwardRef((n, o) => {
  const {
    __scopeSelect: a,
    align: i = "start",
    collisionPadding: c = hn,
    ...u
  } = n, f = qi(a);
  return /* @__PURE__ */ r.jsx(
    nN,
    {
      ...f,
      ...u,
      ref: o,
      align: i,
      collisionPadding: c,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...u.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
bu.displayName = nj;
var [rj, Ju] = Ks(qr, {}), Nu = "SelectViewport", Dg = w.forwardRef(
  (n, o) => {
    const { __scopeSelect: a, nonce: i, ...c } = n, u = Cr(Nu, a), f = Ju(Nu, a), m = qe(o, u.onViewportChange), p = w.useRef(0);
    return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: i
        }
      ),
      /* @__PURE__ */ r.jsx(Hi.Slot, { scope: a, children: /* @__PURE__ */ r.jsx(
        Ve.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...c,
          ref: m,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...c.style
          },
          onScroll: ze(c.onScroll, (g) => {
            const v = g.currentTarget, { contentWrapper: x, shouldExpandOnScrollRef: b } = f;
            if (b != null && b.current && x) {
              const S = Math.abs(p.current - v.scrollTop);
              if (S > 0) {
                const j = window.innerHeight - hn * 2, N = parseFloat(x.style.minHeight), C = parseFloat(x.style.height), P = Math.max(N, C);
                if (P < j) {
                  const E = P + S, O = Math.min(j, E), F = E - O;
                  x.style.height = O + "px", x.style.bottom === "0px" && (v.scrollTop = F > 0 ? F : 0, x.style.justifyContent = "flex-end");
                }
              }
            }
            p.current = v.scrollTop;
          })
        }
      ) })
    ] });
  }
);
Dg.displayName = Nu;
var Mg = "SelectGroup", [sj, aj] = Ks(Mg), oj = w.forwardRef(
  (n, o) => {
    const { __scopeSelect: a, ...i } = n, c = Ur();
    return /* @__PURE__ */ r.jsx(sj, { scope: a, id: c, children: /* @__PURE__ */ r.jsx(Ve.div, { role: "group", "aria-labelledby": c, ...i, ref: o }) });
  }
);
oj.displayName = Mg;
var Og = "SelectLabel", ij = w.forwardRef(
  (n, o) => {
    const { __scopeSelect: a, ...i } = n, c = aj(Og, a);
    return /* @__PURE__ */ r.jsx(Ve.div, { id: c.id, ...i, ref: o });
  }
);
ij.displayName = Og;
var ki = "SelectItem", [lj, Fg] = Ks(ki), Lg = w.forwardRef(
  (n, o) => {
    const {
      __scopeSelect: a,
      value: i,
      disabled: c = !1,
      textValue: u,
      ...f
    } = n, m = Sr(ki, a), p = Cr(ki, a), g = m.value === i, [v, x] = w.useState(u ?? ""), [b, S] = w.useState(!1), j = qe(
      o,
      (E) => {
        var O;
        return (O = p.itemRefCallback) == null ? void 0 : O.call(p, E, i, c);
      }
    ), N = Ur(), C = w.useRef("touch"), P = () => {
      c || (m.onValueChange(i), m.onOpenChange(!1));
    };
    if (i === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ r.jsx(
      lj,
      {
        scope: a,
        value: i,
        disabled: c,
        textId: N,
        isSelected: g,
        onItemTextChange: w.useCallback((E) => {
          x((O) => O || ((E == null ? void 0 : E.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ r.jsx(
          Hi.ItemSlot,
          {
            scope: a,
            value: i,
            disabled: c,
            textValue: v,
            children: /* @__PURE__ */ r.jsx(
              Ve.div,
              {
                role: "option",
                "aria-labelledby": N,
                "data-highlighted": b ? "" : void 0,
                "aria-selected": g && b,
                "data-state": g ? "checked" : "unchecked",
                "aria-disabled": c || void 0,
                "data-disabled": c ? "" : void 0,
                tabIndex: c ? void 0 : -1,
                ...f,
                ref: j,
                onFocus: ze(f.onFocus, () => S(!0)),
                onBlur: ze(f.onBlur, () => S(!1)),
                onClick: ze(f.onClick, () => {
                  C.current !== "mouse" && P();
                }),
                onPointerUp: ze(f.onPointerUp, () => {
                  C.current === "mouse" && P();
                }),
                onPointerDown: ze(f.onPointerDown, (E) => {
                  C.current = E.pointerType;
                }),
                onPointerMove: ze(f.onPointerMove, (E) => {
                  var O;
                  C.current = E.pointerType, c ? (O = p.onItemLeave) == null || O.call(p) : C.current === "mouse" && E.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: ze(f.onPointerLeave, (E) => {
                  var O;
                  E.currentTarget === document.activeElement && ((O = p.onItemLeave) == null || O.call(p));
                }),
                onKeyDown: ze(f.onKeyDown, (E) => {
                  var F;
                  ((F = p.searchRef) == null ? void 0 : F.current) !== "" && E.key === " " || (qN.includes(E.key) && P(), E.key === " " && E.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Lg.displayName = ki;
var Va = "SelectItemText", Ig = w.forwardRef(
  (n, o) => {
    const { __scopeSelect: a, className: i, style: c, ...u } = n, f = Sr(Va, a), m = Cr(Va, a), p = Fg(Va, a), g = XN(Va, a), [v, x] = w.useState(null), b = qe(
      o,
      (P) => x(P),
      p.onItemTextChange,
      (P) => {
        var E;
        return (E = m.itemTextRefCallback) == null ? void 0 : E.call(m, P, p.value, p.disabled);
      }
    ), S = v == null ? void 0 : v.textContent, j = w.useMemo(
      () => /* @__PURE__ */ r.jsx("option", { value: p.value, disabled: p.disabled, children: S }, p.value),
      [p.disabled, p.value, S]
    ), { onNativeOptionAdd: N, onNativeOptionRemove: C } = g;
    return Ot(() => (N(j), () => C(j)), [N, C, j]), /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsx(Ve.span, { id: p.textId, ...u, ref: b }),
      p.isSelected && f.valueNode && !f.valueNodeHasChildren ? qa.createPortal(u.children, f.valueNode) : null
    ] });
  }
);
Ig.displayName = Va;
var zg = "SelectItemIndicator", Vg = w.forwardRef(
  (n, o) => {
    const { __scopeSelect: a, ...i } = n;
    return Fg(zg, a).isSelected ? /* @__PURE__ */ r.jsx(Ve.span, { "aria-hidden": !0, ...i, ref: o }) : null;
  }
);
Vg.displayName = zg;
var ju = "SelectScrollUpButton", $g = w.forwardRef((n, o) => {
  const a = Cr(ju, n.__scopeSelect), i = Ju(ju, n.__scopeSelect), [c, u] = w.useState(!1), f = qe(o, i.onScrollButtonChange);
  return Ot(() => {
    if (a.viewport && a.isPositioned) {
      let m = function() {
        const g = p.scrollTop > 0;
        u(g);
      };
      const p = a.viewport;
      return m(), p.addEventListener("scroll", m), () => p.removeEventListener("scroll", m);
    }
  }, [a.viewport, a.isPositioned]), c ? /* @__PURE__ */ r.jsx(
    Ug,
    {
      ...n,
      ref: f,
      onAutoScroll: () => {
        const { viewport: m, selectedItem: p } = a;
        m && p && (m.scrollTop = m.scrollTop - p.offsetHeight);
      }
    }
  ) : null;
});
$g.displayName = ju;
var Su = "SelectScrollDownButton", Bg = w.forwardRef((n, o) => {
  const a = Cr(Su, n.__scopeSelect), i = Ju(Su, n.__scopeSelect), [c, u] = w.useState(!1), f = qe(o, i.onScrollButtonChange);
  return Ot(() => {
    if (a.viewport && a.isPositioned) {
      let m = function() {
        const g = p.scrollHeight - p.clientHeight, v = Math.ceil(p.scrollTop) < g;
        u(v);
      };
      const p = a.viewport;
      return m(), p.addEventListener("scroll", m), () => p.removeEventListener("scroll", m);
    }
  }, [a.viewport, a.isPositioned]), c ? /* @__PURE__ */ r.jsx(
    Ug,
    {
      ...n,
      ref: f,
      onAutoScroll: () => {
        const { viewport: m, selectedItem: p } = a;
        m && p && (m.scrollTop = m.scrollTop + p.offsetHeight);
      }
    }
  ) : null;
});
Bg.displayName = Su;
var Ug = w.forwardRef((n, o) => {
  const { __scopeSelect: a, onAutoScroll: i, ...c } = n, u = Cr("SelectScrollButton", a), f = w.useRef(null), m = Gi(a), p = w.useCallback(() => {
    f.current !== null && (window.clearInterval(f.current), f.current = null);
  }, []);
  return w.useEffect(() => () => p(), [p]), Ot(() => {
    var v;
    const g = m().find((x) => x.ref.current === document.activeElement);
    (v = g == null ? void 0 : g.ref.current) == null || v.scrollIntoView({ block: "nearest" });
  }, [m]), /* @__PURE__ */ r.jsx(
    Ve.div,
    {
      "aria-hidden": !0,
      ...c,
      ref: o,
      style: { flexShrink: 0, ...c.style },
      onPointerDown: ze(c.onPointerDown, () => {
        f.current === null && (f.current = window.setInterval(i, 50));
      }),
      onPointerMove: ze(c.onPointerMove, () => {
        var g;
        (g = u.onItemLeave) == null || g.call(u), f.current === null && (f.current = window.setInterval(i, 50));
      }),
      onPointerLeave: ze(c.onPointerLeave, () => {
        p();
      })
    }
  );
}), cj = "SelectSeparator", uj = w.forwardRef(
  (n, o) => {
    const { __scopeSelect: a, ...i } = n;
    return /* @__PURE__ */ r.jsx(Ve.div, { "aria-hidden": !0, ...i, ref: o });
  }
);
uj.displayName = cj;
var Cu = "SelectArrow", dj = w.forwardRef(
  (n, o) => {
    const { __scopeSelect: a, ...i } = n, c = qi(a), u = Sr(Cu, a), f = Cr(Cu, a);
    return u.open && f.position === "popper" ? /* @__PURE__ */ r.jsx(rN, { ...c, ...i, ref: o }) : null;
  }
);
dj.displayName = Cu;
function Wg(n) {
  return n === "" || n === void 0;
}
var Hg = w.forwardRef(
  (n, o) => {
    const { value: a, ...i } = n, c = w.useRef(null), u = qe(o, c), f = Ui(a);
    return w.useEffect(() => {
      const m = c.current, p = window.HTMLSelectElement.prototype, v = Object.getOwnPropertyDescriptor(
        p,
        "value"
      ).set;
      if (f !== a && v) {
        const x = new Event("change", { bubbles: !0 });
        v.call(m, a), m.dispatchEvent(x);
      }
    }, [f, a]), /* @__PURE__ */ r.jsx(fg, { asChild: !0, children: /* @__PURE__ */ r.jsx("select", { ...i, ref: u, defaultValue: a }) });
  }
);
Hg.displayName = "BubbleSelect";
function Gg(n) {
  const o = Dn(n), a = w.useRef(""), i = w.useRef(0), c = w.useCallback(
    (f) => {
      const m = a.current + f;
      o(m), (function p(g) {
        a.current = g, window.clearTimeout(i.current), g !== "" && (i.current = window.setTimeout(() => p(""), 1e3));
      })(m);
    },
    [o]
  ), u = w.useCallback(() => {
    a.current = "", window.clearTimeout(i.current);
  }, []);
  return w.useEffect(() => () => window.clearTimeout(i.current), []), [a, c, u];
}
function qg(n, o, a) {
  const c = o.length > 1 && Array.from(o).every((g) => g === o[0]) ? o[0] : o, u = a ? n.indexOf(a) : -1;
  let f = fj(n, Math.max(u, 0));
  c.length === 1 && (f = f.filter((g) => g !== a));
  const p = f.find(
    (g) => g.textValue.toLowerCase().startsWith(c.toLowerCase())
  );
  return p !== a ? p : void 0;
}
function fj(n, o) {
  return n.map((a, i) => n[(o + i) % n.length]);
}
var mj = Ng, hj = Sg, pj = kg, gj = Eg, xj = Pg, vj = _g, yj = Dg, wj = Lg, bj = Ig, Nj = Vg, jj = $g, Sj = Bg;
function zs({
  ...n
}) {
  return /* @__PURE__ */ r.jsx(mj, { "data-slot": "select", ...n });
}
function Vs({
  ...n
}) {
  return /* @__PURE__ */ r.jsx(pj, { "data-slot": "select-value", ...n });
}
function $s({
  className: n,
  size: o = "default",
  children: a,
  ...i
}) {
  return /* @__PURE__ */ r.jsxs(
    hj,
    {
      "data-slot": "select-trigger",
      "data-size": o,
      className: Be(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-full items-center justify-between gap-2 rounded-md border bg-input-background px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        n
      ),
      ...i,
      children: [
        a,
        /* @__PURE__ */ r.jsx(gj, { asChild: !0, children: /* @__PURE__ */ r.jsx(Du, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function Bs({
  className: n,
  children: o,
  position: a = "popper",
  ...i
}) {
  return /* @__PURE__ */ r.jsx(xj, { children: /* @__PURE__ */ r.jsxs(
    vj,
    {
      "data-slot": "select-content",
      className: Be(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        a === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        n
      ),
      position: a,
      ...i,
      children: [
        /* @__PURE__ */ r.jsx(Cj, {}),
        /* @__PURE__ */ r.jsx(
          yj,
          {
            className: Be(
              "p-1",
              a === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: o
          }
        ),
        /* @__PURE__ */ r.jsx(kj, {})
      ]
    }
  ) });
}
function Mt({
  className: n,
  children: o,
  ...a
}) {
  return /* @__PURE__ */ r.jsxs(
    wj,
    {
      "data-slot": "select-item",
      className: Be(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        n
      ),
      ...a,
      children: [
        /* @__PURE__ */ r.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(Nj, { children: /* @__PURE__ */ r.jsx(Ha, { className: "size-4" }) }) }),
        /* @__PURE__ */ r.jsx(bj, { children: o })
      ]
    }
  );
}
function Cj({
  className: n,
  ...o
}) {
  return /* @__PURE__ */ r.jsx(
    jj,
    {
      "data-slot": "select-scroll-up-button",
      className: Be(
        "flex cursor-default items-center justify-center py-1",
        n
      ),
      ...o,
      children: /* @__PURE__ */ r.jsx(vp, { className: "size-4" })
    }
  );
}
function kj({
  className: n,
  ...o
}) {
  return /* @__PURE__ */ r.jsx(
    Sj,
    {
      "data-slot": "select-scroll-down-button",
      className: Be(
        "flex cursor-default items-center justify-center py-1",
        n
      ),
      ...o,
      children: /* @__PURE__ */ r.jsx(Du, { className: "size-4" })
    }
  );
}
function Ej(n, o) {
  if (!n.days.some((m) => o.days.includes(m))) return !1;
  const i = hi(n.startTime), c = hi(n.endTime), u = hi(o.startTime), f = hi(o.endTime);
  return i < f && u < c;
}
function hi(n) {
  const [o, a] = n.split(":").map(Number);
  return o * 60 + a;
}
function Pj(n, o, a) {
  return o.selectedClasses.some((i) => {
    if (i.classId === n.id) return !1;
    const c = a.find((u) => u.id === i.classId);
    return c && Ej(n, c);
  });
}
function _j(n) {
  const o = new Date(n), a = /* @__PURE__ */ new Date();
  let i = a.getFullYear() - o.getFullYear();
  const c = a.getMonth() - o.getMonth();
  return (c < 0 || c === 0 && a.getDate() < o.getDate()) && i--, i;
}
function Rj(n, o) {
  const a = _j(n), i = parseInt(o.replace(/\D/g, "")), c = i === 0 ? 5 : i + 5;
  return Math.abs(a - c) <= 2;
}
function bt(n) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(n);
}
function Aj() {
  return "temp_" + Math.random().toString(36).substring(2) + Date.now().toString(36);
}
function Tj(n) {
  const o = Math.floor(n / 60), a = n % 60;
  return `${o}:${a.toString().padStart(2, "0")}`;
}
function Hh(n) {
  return {
    K: "Kindergarten",
    1: "1st Grade",
    2: "2nd Grade",
    3: "3rd Grade",
    4: "4th Grade",
    5: "5th Grade",
    6: "6th Grade",
    7: "7th Grade",
    8: "8th Grade"
  }[n] || n;
}
const Dj = ["K", "1", "2", "3", "4", "5", "6", "7", "8"];
function Mj({
  studentsInSession: n,
  onStudentAdded: o,
  onStudentUpdated: a,
  onStudentDeleted: i,
  onContinue: c,
  onBack: u
}) {
  const [f, m] = w.useState(n.length === 0), [p, g] = w.useState(null), [v, x] = w.useState(""), [b, S] = w.useState(""), [j, N] = w.useState(""), [C, P] = w.useState("non-speaker"), [E, O] = w.useState(""), [F, D] = w.useState(""), Y = (J) => {
    if (O(J), J && j) {
      const X = Rj(J, j);
      D(X ? "" : "Age may not match selected grade");
    }
  }, H = (J) => {
    var X, W;
    if (J.preventDefault(), p) {
      const le = {
        id: p,
        firstName: v,
        lastName: b,
        grade: j,
        proficiency: C,
        dob: E,
        selectedClasses: ((X = n.find((ye) => ye.id === p)) == null ? void 0 : X.selectedClasses) || [],
        additionalQuestions: (W = n.find((ye) => ye.id === p)) == null ? void 0 : W.additionalQuestions
      };
      a(p, le), g(null);
    } else {
      const le = {
        id: Aj(),
        firstName: v,
        lastName: b,
        grade: j,
        proficiency: C,
        dob: E,
        selectedClasses: []
      };
      o(le);
    }
    x(""), S(""), N(""), P("non-speaker"), O(""), D(""), m(!1);
  }, B = (J) => {
    g(J.id), x(J.firstName), S(J.lastName), N(J.grade), P(J.proficiency), O(J.dob), m(!0);
  }, re = (J) => {
    confirm("Are you sure you want to remove this student?") && i(J);
  }, me = () => {
    g(null), x(""), S(""), N(""), P("non-speaker"), O(""), D(""), m(!1);
  };
  return /* @__PURE__ */ r.jsx("div", { className: "w-full bg-gray-50 py-8", children: /* @__PURE__ */ r.jsxs("div", { className: "max-w-2xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    u && /* @__PURE__ */ r.jsxs(
      "button",
      {
        onClick: u,
        className: "flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors",
        children: [
          /* @__PURE__ */ r.jsx(Ya, { className: "w-4 h-4" }),
          /* @__PURE__ */ r.jsx("span", { className: "text-sm font-medium", children: "Back" })
        ]
      }
    ),
    /* @__PURE__ */ r.jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ r.jsx("h2", { className: "text-2xl font-bold text-gray-900", children: "Student Information" }),
      /* @__PURE__ */ r.jsx("p", { className: "mt-2 text-gray-600", children: "Add students you'd like to register for classes" })
    ] }),
    n.length > 0 && !f && /* @__PURE__ */ r.jsxs("div", { className: "space-y-4 mb-6", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "text-sm font-medium text-gray-700", children: "Students Being Registered" }),
      n.map((J) => /* @__PURE__ */ r.jsx(Me, { className: "p-4", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsxs("p", { className: "font-semibold text-gray-900", children: [
            J.firstName,
            " ",
            J.lastName
          ] }),
          /* @__PURE__ */ r.jsxs("p", { className: "text-sm text-gray-600 mt-1", children: [
            Hh(J.grade),
            " • ",
            J.proficiency === "speaker" ? "Hebrew Speaker" : "Non-Hebrew Speaker"
          ] })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ r.jsx(
            "button",
            {
              onClick: () => B(J),
              className: "p-2 text-gray-600 hover:text-[#326389] hover:bg-gray-100 rounded-lg transition-colors",
              title: "Edit student",
              children: /* @__PURE__ */ r.jsx(pw, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              onClick: () => re(J.id),
              className: "p-2 text-gray-600 hover:text-red-600 hover:bg-gray-100 rounded-lg transition-colors",
              title: "Remove student",
              children: /* @__PURE__ */ r.jsx(Fu, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }) }, J.id))
    ] }),
    !f && /* @__PURE__ */ r.jsxs(
      Ce,
      {
        type: "button",
        variant: "outline",
        className: "w-full h-12 mb-6",
        onClick: () => m(!0),
        children: [
          /* @__PURE__ */ r.jsx(Ws, { className: "w-4 h-4 mr-2" }),
          "Add New Student"
        ]
      }
    ),
    f && /* @__PURE__ */ r.jsx(Me, { className: "p-6", children: /* @__PURE__ */ r.jsxs("form", { onSubmit: H, className: "space-y-6", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx(se, { htmlFor: "firstName", children: "First Name *" }),
          /* @__PURE__ */ r.jsx(
            Pe,
            {
              id: "firstName",
              type: "text",
              value: v,
              onChange: (J) => x(J.target.value),
              required: !0,
              className: "mt-1",
              placeholder: "Sarah"
            }
          )
        ] }),
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx(se, { htmlFor: "lastName", children: "Last Name *" }),
          /* @__PURE__ */ r.jsx(
            Pe,
            {
              id: "lastName",
              type: "text",
              value: b,
              onChange: (J) => S(J.target.value),
              required: !0,
              className: "mt-1",
              placeholder: "Cohen"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx(se, { htmlFor: "grade", children: "Grade *" }),
        /* @__PURE__ */ r.jsxs(zs, { value: j, onValueChange: N, required: !0, children: [
          /* @__PURE__ */ r.jsx($s, { id: "grade", className: "mt-1", children: /* @__PURE__ */ r.jsx(Vs, { placeholder: "Select grade" }) }),
          /* @__PURE__ */ r.jsx(Bs, { children: Dj.map((J) => /* @__PURE__ */ r.jsx(Mt, { value: J, children: Hh(J) }, J)) })
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx(se, { children: "Hebrew Proficiency *" }),
        /* @__PURE__ */ r.jsxs("div", { className: "mt-2 flex gap-3", children: [
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              onClick: () => P("speaker"),
              className: `
                      flex-1 py-3 px-4 rounded-lg border-2 text-sm font-medium transition-all
                      ${C === "speaker" ? "border-[#326389] bg-[#326389]/5 text-[#326389]" : "border-gray-200 text-gray-700 hover:border-gray-300"}
                    `,
              children: "Hebrew Speaker"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              onClick: () => P("non-speaker"),
              className: `
                      flex-1 py-3 px-4 rounded-lg border-2 text-sm font-medium transition-all
                      ${C === "non-speaker" ? "border-[#326389] bg-[#326389]/5 text-[#326389]" : "border-gray-200 text-gray-700 hover:border-gray-300"}
                    `,
              children: "Non-Hebrew Speaker"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx(se, { htmlFor: "dob", children: "Date of Birth *" }),
        /* @__PURE__ */ r.jsx(
          Pe,
          {
            id: "dob",
            type: "date",
            value: E,
            onChange: (J) => Y(J.target.value),
            required: !0,
            className: "mt-1",
            max: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
          }
        ),
        F && /* @__PURE__ */ r.jsx("p", { className: "text-sm text-amber-600 mt-1", children: F })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "flex gap-3 pt-4", children: [
        n.length > 0 && /* @__PURE__ */ r.jsx(
          Ce,
          {
            type: "button",
            variant: "outline",
            className: "flex-1",
            onClick: me,
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ r.jsx(
          Ce,
          {
            type: "submit",
            className: "flex-1 bg-[#326389] hover:bg-[#326389]/90",
            children: p ? "Update Student" : "Save Student & Continue"
          }
        )
      ] })
    ] }) }),
    n.length > 0 && !f && /* @__PURE__ */ r.jsx(
      Ce,
      {
        onClick: c,
        className: "w-full h-12 bg-[#326389] hover:bg-[#326389]/90 mt-6",
        children: "Continue to Class Selection"
      }
    )
  ] }) });
}
const Pn = w.forwardRef(
  ({ className: n, ...o }, a) => /* @__PURE__ */ r.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: Be(
        "resize-none border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-input-background px-3 py-2 text-base transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        n
      ),
      ref: a,
      ...o
    }
  )
);
Pn.displayName = "Textarea";
var nu = "rovingFocusGroup.onEntryFocus", Oj = { bubbles: !1, cancelable: !0 }, Yi = "RovingFocusGroup", [ku, Yg, Fj] = zp(Yi), [Lj, Kg] = yn(
  Yi,
  [Fj]
), [Ij, zj] = Lj(Yi), Qg = w.forwardRef(
  (n, o) => /* @__PURE__ */ r.jsx(ku.Provider, { scope: n.__scopeRovingFocusGroup, children: /* @__PURE__ */ r.jsx(ku.Slot, { scope: n.__scopeRovingFocusGroup, children: /* @__PURE__ */ r.jsx(Vj, { ...n, ref: o }) }) })
);
Qg.displayName = Yi;
var Vj = w.forwardRef((n, o) => {
  const {
    __scopeRovingFocusGroup: a,
    orientation: i,
    loop: c = !1,
    dir: u,
    currentTabStopId: f,
    defaultCurrentTabStopId: m,
    onCurrentTabStopIdChange: p,
    onEntryFocus: g,
    preventScrollOnEntryFocus: v = !1,
    ...x
  } = n, b = w.useRef(null), S = qe(o, b), j = Vu(u), [N = null, C] = Gr({
    prop: f,
    defaultProp: m,
    onChange: p
  }), [P, E] = w.useState(!1), O = Dn(g), F = Yg(a), D = w.useRef(!1), [Y, H] = w.useState(0);
  return w.useEffect(() => {
    const B = b.current;
    if (B)
      return B.addEventListener(nu, O), () => B.removeEventListener(nu, O);
  }, [O]), /* @__PURE__ */ r.jsx(
    Ij,
    {
      scope: a,
      orientation: i,
      dir: j,
      loop: c,
      currentTabStopId: N,
      onItemFocus: w.useCallback(
        (B) => C(B),
        [C]
      ),
      onItemShiftTab: w.useCallback(() => E(!0), []),
      onFocusableItemAdd: w.useCallback(
        () => H((B) => B + 1),
        []
      ),
      onFocusableItemRemove: w.useCallback(
        () => H((B) => B - 1),
        []
      ),
      children: /* @__PURE__ */ r.jsx(
        Ve.div,
        {
          tabIndex: P || Y === 0 ? -1 : 0,
          "data-orientation": i,
          ...x,
          ref: S,
          style: { outline: "none", ...n.style },
          onMouseDown: ze(n.onMouseDown, () => {
            D.current = !0;
          }),
          onFocus: ze(n.onFocus, (B) => {
            const re = !D.current;
            if (B.target === B.currentTarget && re && !P) {
              const me = new CustomEvent(nu, Oj);
              if (B.currentTarget.dispatchEvent(me), !me.defaultPrevented) {
                const J = F().filter((ae) => ae.focusable), X = J.find((ae) => ae.active), W = J.find((ae) => ae.id === N), ye = [X, W, ...J].filter(
                  Boolean
                ).map((ae) => ae.ref.current);
                Jg(ye, v);
              }
            }
            D.current = !1;
          }),
          onBlur: ze(n.onBlur, () => E(!1))
        }
      )
    }
  );
}), Xg = "RovingFocusGroupItem", Zg = w.forwardRef(
  (n, o) => {
    const {
      __scopeRovingFocusGroup: a,
      focusable: i = !0,
      active: c = !1,
      tabStopId: u,
      ...f
    } = n, m = Ur(), p = u || m, g = zj(Xg, a), v = g.currentTabStopId === p, x = Yg(a), { onFocusableItemAdd: b, onFocusableItemRemove: S } = g;
    return w.useEffect(() => {
      if (i)
        return b(), () => S();
    }, [i, b, S]), /* @__PURE__ */ r.jsx(
      ku.ItemSlot,
      {
        scope: a,
        id: p,
        focusable: i,
        active: c,
        children: /* @__PURE__ */ r.jsx(
          Ve.span,
          {
            tabIndex: v ? 0 : -1,
            "data-orientation": g.orientation,
            ...f,
            ref: o,
            onMouseDown: ze(n.onMouseDown, (j) => {
              i ? g.onItemFocus(p) : j.preventDefault();
            }),
            onFocus: ze(n.onFocus, () => g.onItemFocus(p)),
            onKeyDown: ze(n.onKeyDown, (j) => {
              if (j.key === "Tab" && j.shiftKey) {
                g.onItemShiftTab();
                return;
              }
              if (j.target !== j.currentTarget) return;
              const N = Uj(j, g.orientation, g.dir);
              if (N !== void 0) {
                if (j.metaKey || j.ctrlKey || j.altKey || j.shiftKey) return;
                j.preventDefault();
                let P = x().filter((E) => E.focusable).map((E) => E.ref.current);
                if (N === "last") P.reverse();
                else if (N === "prev" || N === "next") {
                  N === "prev" && P.reverse();
                  const E = P.indexOf(j.currentTarget);
                  P = g.loop ? Wj(P, E + 1) : P.slice(E + 1);
                }
                setTimeout(() => Jg(P));
              }
            })
          }
        )
      }
    );
  }
);
Zg.displayName = Xg;
var $j = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Bj(n, o) {
  return o !== "rtl" ? n : n === "ArrowLeft" ? "ArrowRight" : n === "ArrowRight" ? "ArrowLeft" : n;
}
function Uj(n, o, a) {
  const i = Bj(n.key, a);
  if (!(o === "vertical" && ["ArrowLeft", "ArrowRight"].includes(i)) && !(o === "horizontal" && ["ArrowUp", "ArrowDown"].includes(i)))
    return $j[i];
}
function Jg(n, o = !1) {
  const a = document.activeElement;
  for (const i of n)
    if (i === a || (i.focus({ preventScroll: o }), document.activeElement !== a)) return;
}
function Wj(n, o) {
  return n.map((a, i) => n[(o + i) % n.length]);
}
var Hj = Qg, Gj = Zg;
function qj(n, o) {
  return w.useReducer((a, i) => o[a][i] ?? a, n);
}
var Qs = (n) => {
  const { present: o, children: a } = n, i = Yj(o), c = typeof a == "function" ? a({ present: i.isPresent }) : w.Children.only(a), u = qe(i.ref, Kj(c));
  return typeof a == "function" || i.isPresent ? w.cloneElement(c, { ref: u }) : null;
};
Qs.displayName = "Presence";
function Yj(n) {
  const [o, a] = w.useState(), i = w.useRef({}), c = w.useRef(n), u = w.useRef("none"), f = n ? "mounted" : "unmounted", [m, p] = qj(f, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return w.useEffect(() => {
    const g = pi(i.current);
    u.current = m === "mounted" ? g : "none";
  }, [m]), Ot(() => {
    const g = i.current, v = c.current;
    if (v !== n) {
      const b = u.current, S = pi(g);
      n ? p("MOUNT") : S === "none" || (g == null ? void 0 : g.display) === "none" ? p("UNMOUNT") : p(v && b !== S ? "ANIMATION_OUT" : "UNMOUNT"), c.current = n;
    }
  }, [n, p]), Ot(() => {
    if (o) {
      let g;
      const v = o.ownerDocument.defaultView ?? window, x = (S) => {
        const N = pi(i.current).includes(S.animationName);
        if (S.target === o && N && (p("ANIMATION_END"), !c.current)) {
          const C = o.style.animationFillMode;
          o.style.animationFillMode = "forwards", g = v.setTimeout(() => {
            o.style.animationFillMode === "forwards" && (o.style.animationFillMode = C);
          });
        }
      }, b = (S) => {
        S.target === o && (u.current = pi(i.current));
      };
      return o.addEventListener("animationstart", b), o.addEventListener("animationcancel", x), o.addEventListener("animationend", x), () => {
        v.clearTimeout(g), o.removeEventListener("animationstart", b), o.removeEventListener("animationcancel", x), o.removeEventListener("animationend", x);
      };
    } else
      p("ANIMATION_END");
  }, [o, p]), {
    isPresent: ["mounted", "unmountSuspended"].includes(m),
    ref: w.useCallback((g) => {
      g && (i.current = getComputedStyle(g)), a(g);
    }, [])
  };
}
function pi(n) {
  return (n == null ? void 0 : n.animationName) || "none";
}
function Kj(n) {
  var i, c;
  let o = (i = Object.getOwnPropertyDescriptor(n.props, "ref")) == null ? void 0 : i.get, a = o && "isReactWarning" in o && o.isReactWarning;
  return a ? n.ref : (o = (c = Object.getOwnPropertyDescriptor(n, "ref")) == null ? void 0 : c.get, a = o && "isReactWarning" in o && o.isReactWarning, a ? n.props.ref : n.props.ref || n.ref);
}
var ed = "Radio", [Qj, ex] = yn(ed), [Xj, Zj] = Qj(ed), tx = w.forwardRef(
  (n, o) => {
    const {
      __scopeRadio: a,
      name: i,
      checked: c = !1,
      required: u,
      disabled: f,
      value: m = "on",
      onCheck: p,
      form: g,
      ...v
    } = n, [x, b] = w.useState(null), S = qe(o, (C) => b(C)), j = w.useRef(!1), N = x ? g || !!x.closest("form") : !0;
    return /* @__PURE__ */ r.jsxs(Xj, { scope: a, checked: c, disabled: f, children: [
      /* @__PURE__ */ r.jsx(
        Ve.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": c,
          "data-state": sx(c),
          "data-disabled": f ? "" : void 0,
          disabled: f,
          value: m,
          ...v,
          ref: S,
          onClick: ze(n.onClick, (C) => {
            c || p == null || p(), N && (j.current = C.isPropagationStopped(), j.current || C.stopPropagation());
          })
        }
      ),
      N && /* @__PURE__ */ r.jsx(
        Jj,
        {
          control: x,
          bubbles: !j.current,
          name: i,
          value: m,
          checked: c,
          required: u,
          disabled: f,
          form: g,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
tx.displayName = ed;
var nx = "RadioIndicator", rx = w.forwardRef(
  (n, o) => {
    const { __scopeRadio: a, forceMount: i, ...c } = n, u = Zj(nx, a);
    return /* @__PURE__ */ r.jsx(Qs, { present: i || u.checked, children: /* @__PURE__ */ r.jsx(
      Ve.span,
      {
        "data-state": sx(u.checked),
        "data-disabled": u.disabled ? "" : void 0,
        ...c,
        ref: o
      }
    ) });
  }
);
rx.displayName = nx;
var Jj = (n) => {
  const { control: o, checked: a, bubbles: i = !0, ...c } = n, u = w.useRef(null), f = Ui(a), m = Bi(o);
  return w.useEffect(() => {
    const p = u.current, g = window.HTMLInputElement.prototype, x = Object.getOwnPropertyDescriptor(g, "checked").set;
    if (f !== a && x) {
      const b = new Event("click", { bubbles: i });
      x.call(p, a), p.dispatchEvent(b);
    }
  }, [f, a, i]), /* @__PURE__ */ r.jsx(
    "input",
    {
      type: "radio",
      "aria-hidden": !0,
      defaultChecked: a,
      ...c,
      tabIndex: -1,
      ref: u,
      style: {
        ...n.style,
        ...m,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function sx(n) {
  return n ? "checked" : "unchecked";
}
var e2 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], td = "RadioGroup", [t2] = yn(td, [
  Kg,
  ex
]), ax = Kg(), ox = ex(), [n2, r2] = t2(td), ix = w.forwardRef(
  (n, o) => {
    const {
      __scopeRadioGroup: a,
      name: i,
      defaultValue: c,
      value: u,
      required: f = !1,
      disabled: m = !1,
      orientation: p,
      dir: g,
      loop: v = !0,
      onValueChange: x,
      ...b
    } = n, S = ax(a), j = Vu(g), [N, C] = Gr({
      prop: u,
      defaultProp: c,
      onChange: x
    });
    return /* @__PURE__ */ r.jsx(
      n2,
      {
        scope: a,
        name: i,
        required: f,
        disabled: m,
        value: N,
        onValueChange: C,
        children: /* @__PURE__ */ r.jsx(
          Hj,
          {
            asChild: !0,
            ...S,
            orientation: p,
            dir: j,
            loop: v,
            children: /* @__PURE__ */ r.jsx(
              Ve.div,
              {
                role: "radiogroup",
                "aria-required": f,
                "aria-orientation": p,
                "data-disabled": m ? "" : void 0,
                dir: j,
                ...b,
                ref: o
              }
            )
          }
        )
      }
    );
  }
);
ix.displayName = td;
var lx = "RadioGroupItem", cx = w.forwardRef(
  (n, o) => {
    const { __scopeRadioGroup: a, disabled: i, ...c } = n, u = r2(lx, a), f = u.disabled || i, m = ax(a), p = ox(a), g = w.useRef(null), v = qe(o, g), x = u.value === c.value, b = w.useRef(!1);
    return w.useEffect(() => {
      const S = (N) => {
        e2.includes(N.key) && (b.current = !0);
      }, j = () => b.current = !1;
      return document.addEventListener("keydown", S), document.addEventListener("keyup", j), () => {
        document.removeEventListener("keydown", S), document.removeEventListener("keyup", j);
      };
    }, []), /* @__PURE__ */ r.jsx(
      Gj,
      {
        asChild: !0,
        ...m,
        focusable: !f,
        active: x,
        children: /* @__PURE__ */ r.jsx(
          tx,
          {
            disabled: f,
            required: u.required,
            checked: x,
            ...p,
            ...c,
            name: u.name,
            ref: v,
            onCheck: () => u.onValueChange(c.value),
            onKeyDown: ze((S) => {
              S.key === "Enter" && S.preventDefault();
            }),
            onFocus: ze(c.onFocus, () => {
              var S;
              b.current && ((S = g.current) == null || S.click());
            })
          }
        )
      }
    );
  }
);
cx.displayName = lx;
var s2 = "RadioGroupIndicator", ux = w.forwardRef(
  (n, o) => {
    const { __scopeRadioGroup: a, ...i } = n, c = ox(a);
    return /* @__PURE__ */ r.jsx(rx, { ...c, ...i, ref: o });
  }
);
ux.displayName = s2;
var a2 = ix, o2 = cx, i2 = ux;
function l2({
  className: n,
  ...o
}) {
  return /* @__PURE__ */ r.jsx(
    a2,
    {
      "data-slot": "radio-group",
      className: Be("grid gap-3", n),
      ...o
    }
  );
}
function Gh({
  className: n,
  ...o
}) {
  return /* @__PURE__ */ r.jsx(
    o2,
    {
      "data-slot": "radio-group-item",
      className: Be(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n
      ),
      ...o,
      children: /* @__PURE__ */ r.jsx(
        i2,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ r.jsx(K0, { className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
        }
      )
    }
  );
}
function $r({
  title: n,
  defaultOpen: o = !1,
  children: a
}) {
  const [i, c] = w.useState(o);
  return /* @__PURE__ */ r.jsxs(Me, { className: "overflow-hidden", children: [
    /* @__PURE__ */ r.jsxs(
      "button",
      {
        type: "button",
        onClick: () => c((u) => !u),
        className: "w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors",
        children: [
          /* @__PURE__ */ r.jsx("h3", { className: "text-base font-semibold text-gray-900", children: n }),
          i ? /* @__PURE__ */ r.jsx(vp, { className: "w-5 h-5 text-gray-400 flex-shrink-0" }) : /* @__PURE__ */ r.jsx(Du, { className: "w-5 h-5 text-gray-400 flex-shrink-0" })
        ]
      }
    ),
    i && /* @__PURE__ */ r.jsx("div", { className: "px-6 pb-6 border-t border-gray-100", children: /* @__PURE__ */ r.jsx("div", { className: "pt-4 space-y-4", children: a }) })
  ] });
}
function c2({
  student: n,
  onQuestionsComplete: o,
  onBack: a
}) {
  const [i, c] = w.useState({
    hebrewName: "",
    previousHebrewEducation: "none",
    yearsOfHebrewStudy: "",
    hebrewSchoolName: "",
    specialNeeds: "",
    medicalConditions: "",
    allergies: "",
    medications: "",
    dietaryRestrictions: "",
    emergencyContact1Name: "",
    emergencyContact1Phone: "",
    emergencyContact1Relationship: "",
    emergencyContact2Name: "",
    emergencyContact2Phone: "",
    emergencyContact2Relationship: "",
    parentCell: "",
    parentWork: "",
    additionalNotes: "",
    photoPermission: "yes",
    pickupAuthorization: []
  }), [u, f] = w.useState({ name: "", relationship: "" }), m = (x, b) => c((S) => ({ ...S, [x]: b })), p = () => {
    u.name && u.relationship && (m("pickupAuthorization", [
      ...i.pickupAuthorization || [],
      u
    ]), f({ name: "", relationship: "" }));
  }, g = (x) => {
    var b;
    m(
      "pickupAuthorization",
      ((b = i.pickupAuthorization) == null ? void 0 : b.filter((S, j) => j !== x)) || []
    );
  }, v = (x) => {
    x.preventDefault(), o(n.id, i);
  };
  return /* @__PURE__ */ r.jsx("div", { className: "w-full bg-gray-50 py-8", children: /* @__PURE__ */ r.jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ r.jsxs(
      "button",
      {
        onClick: a,
        className: "flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors",
        children: [
          /* @__PURE__ */ r.jsx(Ya, { className: "w-4 h-4" }),
          /* @__PURE__ */ r.jsx("span", { className: "text-sm font-medium", children: "Back" })
        ]
      }
    ),
    /* @__PURE__ */ r.jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ r.jsx("h2", { className: "text-2xl font-bold text-gray-900", children: "Additional Information" }),
      /* @__PURE__ */ r.jsxs("p", { className: "mt-2 text-gray-600", children: [
        "For ",
        n.firstName,
        " ",
        n.lastName
      ] }),
      /* @__PURE__ */ r.jsx("p", { className: "mt-1 text-sm text-gray-500", children: "Expand each section to fill in details. Only emergency contact is required." })
    ] }),
    /* @__PURE__ */ r.jsxs("form", { onSubmit: v, className: "space-y-3", children: [
      /* @__PURE__ */ r.jsxs($r, { title: "Hebrew Background", defaultOpen: !0, children: [
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx(se, { htmlFor: "hebrewName", children: "Hebrew Name (if applicable)" }),
          /* @__PURE__ */ r.jsx(
            Pe,
            {
              id: "hebrewName",
              type: "text",
              value: i.hebrewName,
              onChange: (x) => m("hebrewName", x.target.value),
              className: "mt-1",
              placeholder: "e.g., David ben Avraham"
            }
          )
        ] }),
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx(se, { htmlFor: "previousEducation", children: "Previous Hebrew Education" }),
          /* @__PURE__ */ r.jsxs(
            zs,
            {
              value: i.previousHebrewEducation,
              onValueChange: (x) => m("previousHebrewEducation", x),
              children: [
                /* @__PURE__ */ r.jsx($s, { id: "previousEducation", className: "mt-1", children: /* @__PURE__ */ r.jsx(Vs, {}) }),
                /* @__PURE__ */ r.jsxs(Bs, { children: [
                  /* @__PURE__ */ r.jsx(Mt, { value: "none", children: "None" }),
                  /* @__PURE__ */ r.jsx(Mt, { value: "home", children: "At Home" }),
                  /* @__PURE__ */ r.jsx(Mt, { value: "synagogue", children: "Synagogue/Temple" }),
                  /* @__PURE__ */ r.jsx(Mt, { value: "hebrew-school", children: "Hebrew School" }),
                  /* @__PURE__ */ r.jsx(Mt, { value: "day-school", children: "Jewish Day School" }),
                  /* @__PURE__ */ r.jsx(Mt, { value: "other", children: "Other" })
                ] })
              ]
            }
          )
        ] }),
        i.previousHebrewEducation !== "none" && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsxs("div", { children: [
            /* @__PURE__ */ r.jsx(se, { htmlFor: "yearsOfStudy", children: "Years of Study" }),
            /* @__PURE__ */ r.jsx(
              Pe,
              {
                id: "yearsOfStudy",
                type: "text",
                value: i.yearsOfHebrewStudy,
                onChange: (x) => m("yearsOfHebrewStudy", x.target.value),
                className: "mt-1",
                placeholder: "e.g., 2 years"
              }
            )
          ] }),
          /* @__PURE__ */ r.jsxs("div", { children: [
            /* @__PURE__ */ r.jsx(se, { htmlFor: "schoolName", children: "School/Program Name (if applicable)" }),
            /* @__PURE__ */ r.jsx(
              Pe,
              {
                id: "schoolName",
                type: "text",
                value: i.hebrewSchoolName,
                onChange: (x) => m("hebrewSchoolName", x.target.value),
                className: "mt-1",
                placeholder: "Name of previous school or program"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs($r, { title: "Emergency Contacts", defaultOpen: !0, children: [
        /* @__PURE__ */ r.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ r.jsx("h4", { className: "font-medium text-gray-700 text-sm", children: "Primary Emergency Contact *" }),
          /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ r.jsxs("div", { children: [
              /* @__PURE__ */ r.jsx(se, { htmlFor: "ec1Name", children: "Full Name *" }),
              /* @__PURE__ */ r.jsx(
                Pe,
                {
                  id: "ec1Name",
                  type: "text",
                  value: i.emergencyContact1Name,
                  onChange: (x) => m("emergencyContact1Name", x.target.value),
                  required: !0,
                  className: "mt-1",
                  placeholder: "Jane Smith"
                }
              )
            ] }),
            /* @__PURE__ */ r.jsxs("div", { children: [
              /* @__PURE__ */ r.jsx(se, { htmlFor: "ec1Relationship", children: "Relationship *" }),
              /* @__PURE__ */ r.jsx(
                Pe,
                {
                  id: "ec1Relationship",
                  type: "text",
                  value: i.emergencyContact1Relationship,
                  onChange: (x) => m("emergencyContact1Relationship", x.target.value),
                  required: !0,
                  className: "mt-1",
                  placeholder: "Mother"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { children: [
            /* @__PURE__ */ r.jsx(se, { htmlFor: "ec1Phone", children: "Phone Number *" }),
            /* @__PURE__ */ r.jsx(
              Pe,
              {
                id: "ec1Phone",
                type: "tel",
                value: i.emergencyContact1Phone,
                onChange: (x) => m("emergencyContact1Phone", x.target.value),
                required: !0,
                className: "mt-1",
                placeholder: "(555) 123-4567"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "space-y-4 pt-4 border-t border-gray-100", children: [
          /* @__PURE__ */ r.jsx("h4", { className: "font-medium text-gray-700 text-sm", children: "Secondary Emergency Contact" }),
          /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ r.jsxs("div", { children: [
              /* @__PURE__ */ r.jsx(se, { htmlFor: "ec2Name", children: "Full Name" }),
              /* @__PURE__ */ r.jsx(
                Pe,
                {
                  id: "ec2Name",
                  type: "text",
                  value: i.emergencyContact2Name,
                  onChange: (x) => m("emergencyContact2Name", x.target.value),
                  className: "mt-1",
                  placeholder: "John Smith"
                }
              )
            ] }),
            /* @__PURE__ */ r.jsxs("div", { children: [
              /* @__PURE__ */ r.jsx(se, { htmlFor: "ec2Relationship", children: "Relationship" }),
              /* @__PURE__ */ r.jsx(
                Pe,
                {
                  id: "ec2Relationship",
                  type: "text",
                  value: i.emergencyContact2Relationship,
                  onChange: (x) => m("emergencyContact2Relationship", x.target.value),
                  className: "mt-1",
                  placeholder: "Father"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { children: [
            /* @__PURE__ */ r.jsx(se, { htmlFor: "ec2Phone", children: "Phone Number" }),
            /* @__PURE__ */ r.jsx(
              Pe,
              {
                id: "ec2Phone",
                type: "tel",
                value: i.emergencyContact2Phone,
                onChange: (x) => m("emergencyContact2Phone", x.target.value),
                className: "mt-1",
                placeholder: "(555) 987-6543"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs($r, { title: "Medical & Special Needs", children: [
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx(se, { htmlFor: "allergies", children: "Allergies (food, environmental, medications)" }),
          /* @__PURE__ */ r.jsx(
            Pn,
            {
              id: "allergies",
              value: i.allergies,
              onChange: (x) => m("allergies", x.target.value),
              className: "mt-1",
              placeholder: "Please list any allergies...",
              rows: 2
            }
          )
        ] }),
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx(se, { htmlFor: "medications", children: "Current Medications (include dosage if needed during class)" }),
          /* @__PURE__ */ r.jsx(
            Pn,
            {
              id: "medications",
              value: i.medications,
              onChange: (x) => m("medications", x.target.value),
              className: "mt-1",
              placeholder: "Please list any medications...",
              rows: 2
            }
          )
        ] }),
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx(se, { htmlFor: "medicalConditions", children: "Medical Conditions (asthma, diabetes, seizures, etc.)" }),
          /* @__PURE__ */ r.jsx(
            Pn,
            {
              id: "medicalConditions",
              value: i.medicalConditions,
              onChange: (x) => m("medicalConditions", x.target.value),
              className: "mt-1",
              placeholder: "Please list any medical conditions staff should be aware of...",
              rows: 2
            }
          )
        ] }),
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx(se, { htmlFor: "dietaryRestrictions", children: "Dietary Restrictions (kosher, vegetarian, vegan, etc.)" }),
          /* @__PURE__ */ r.jsx(
            Pn,
            {
              id: "dietaryRestrictions",
              value: i.dietaryRestrictions,
              onChange: (x) => m("dietaryRestrictions", x.target.value),
              className: "mt-1",
              placeholder: "Please list any dietary restrictions...",
              rows: 2
            }
          )
        ] }),
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx(se, { htmlFor: "specialNeeds", children: "Special Needs or Accommodations (learning, behavioral, physical)" }),
          /* @__PURE__ */ r.jsx(
            Pn,
            {
              id: "specialNeeds",
              value: i.specialNeeds,
              onChange: (x) => m("specialNeeds", x.target.value),
              className: "mt-1",
              placeholder: "Please describe any accommodations needed...",
              rows: 3
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ r.jsx($r, { title: "Additional Parent/Guardian Contact", children: /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx(se, { htmlFor: "parentCell", children: "Cell Phone" }),
          /* @__PURE__ */ r.jsx(
            Pe,
            {
              id: "parentCell",
              type: "tel",
              value: i.parentCell,
              onChange: (x) => m("parentCell", x.target.value),
              className: "mt-1",
              placeholder: "(555) 123-4567"
            }
          )
        ] }),
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx(se, { htmlFor: "parentWork", children: "Work Phone" }),
          /* @__PURE__ */ r.jsx(
            Pe,
            {
              id: "parentWork",
              type: "tel",
              value: i.parentWork,
              onChange: (x) => m("parentWork", x.target.value),
              className: "mt-1",
              placeholder: "(555) 987-6543"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ r.jsxs($r, { title: "Authorized Pickup Persons", children: [
        /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600 -mt-2", children: "List anyone authorized to pick up your child (other than parents/guardians)" }),
        i.pickupAuthorization && i.pickupAuthorization.length > 0 && /* @__PURE__ */ r.jsx("div", { className: "space-y-2", children: i.pickupAuthorization.map((x, b) => /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "flex items-center justify-between p-3 bg-gray-50 rounded-lg",
            children: [
              /* @__PURE__ */ r.jsxs("div", { children: [
                /* @__PURE__ */ r.jsx("p", { className: "font-medium text-sm", children: x.name }),
                /* @__PURE__ */ r.jsx("p", { className: "text-xs text-gray-600", children: x.relationship })
              ] }),
              /* @__PURE__ */ r.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => g(b),
                  className: "text-red-600 hover:text-red-700 text-sm",
                  children: "Remove"
                }
              )
            ]
          },
          b
        )) }),
        /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ r.jsxs("div", { children: [
            /* @__PURE__ */ r.jsx(se, { htmlFor: "pickupName", children: "Name" }),
            /* @__PURE__ */ r.jsx(
              Pe,
              {
                id: "pickupName",
                type: "text",
                value: u.name,
                onChange: (x) => f((b) => ({ ...b, name: x.target.value })),
                className: "mt-1",
                placeholder: "Grandparent, Aunt, etc."
              }
            )
          ] }),
          /* @__PURE__ */ r.jsxs("div", { children: [
            /* @__PURE__ */ r.jsx(se, { htmlFor: "pickupRelationship", children: "Relationship" }),
            /* @__PURE__ */ r.jsx(
              Pe,
              {
                id: "pickupRelationship",
                type: "text",
                value: u.relationship,
                onChange: (x) => f((b) => ({ ...b, relationship: x.target.value })),
                className: "mt-1",
                placeholder: "Grandmother"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ r.jsx(
          Ce,
          {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: p,
            disabled: !u.name || !u.relationship,
            children: "Add Person"
          }
        )
      ] }),
      /* @__PURE__ */ r.jsx($r, { title: "Photo & Media Permission", children: /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx(se, { children: "May we photograph/video your child for promotional materials, social media, or our website?" }),
        /* @__PURE__ */ r.jsxs(
          l2,
          {
            value: i.photoPermission,
            onValueChange: (x) => m("photoPermission", x),
            className: "mt-2",
            children: [
              /* @__PURE__ */ r.jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ r.jsx(Gh, { value: "yes", id: "photo-yes" }),
                /* @__PURE__ */ r.jsx(se, { htmlFor: "photo-yes", className: "font-normal cursor-pointer", children: "Yes, I grant permission" })
              ] }),
              /* @__PURE__ */ r.jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ r.jsx(Gh, { value: "no", id: "photo-no" }),
                /* @__PURE__ */ r.jsx(se, { htmlFor: "photo-no", className: "font-normal cursor-pointer", children: "No, I do not grant permission" })
              ] })
            ]
          }
        )
      ] }) }),
      /* @__PURE__ */ r.jsx($r, { title: "Additional Notes", children: /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx(se, { htmlFor: "additionalNotes", children: "Is there anything else we should know about your child?" }),
        /* @__PURE__ */ r.jsx(
          Pn,
          {
            id: "additionalNotes",
            value: i.additionalNotes,
            onChange: (x) => m("additionalNotes", x.target.value),
            className: "mt-1",
            placeholder: "Any other information that would help us better support your child's learning experience...",
            rows: 4
          }
        )
      ] }) }),
      /* @__PURE__ */ r.jsxs("div", { className: "flex gap-4 pt-4", children: [
        /* @__PURE__ */ r.jsx(Ce, { type: "button", variant: "outline", onClick: a, className: "flex-1", children: "Back" }),
        /* @__PURE__ */ r.jsx(Ce, { type: "submit", className: "flex-1 bg-[#326389] hover:bg-[#326389]/90", children: "Save & Continue" })
      ] })
    ] })
  ] }) });
}
const u2 = Ep(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Wr({
  className: n,
  variant: o,
  asChild: a = !1,
  ...i
}) {
  const c = a ? br : "span";
  return /* @__PURE__ */ r.jsx(
    c,
    {
      "data-slot": "badge",
      className: Be(u2({ variant: o }), n),
      ...i
    }
  );
}
var nd = "Progress", rd = 100, [d2] = yn(nd), [f2, m2] = d2(nd), dx = w.forwardRef(
  (n, o) => {
    const {
      __scopeProgress: a,
      value: i = null,
      max: c,
      getValueLabel: u = h2,
      ...f
    } = n;
    (c || c === 0) && !qh(c) && console.error(p2(`${c}`, "Progress"));
    const m = qh(c) ? c : rd;
    i !== null && !Yh(i, m) && console.error(g2(`${i}`, "Progress"));
    const p = Yh(i, m) ? i : null, g = Ei(p) ? u(p, m) : void 0;
    return /* @__PURE__ */ r.jsx(f2, { scope: a, value: p, max: m, children: /* @__PURE__ */ r.jsx(
      Ve.div,
      {
        "aria-valuemax": m,
        "aria-valuemin": 0,
        "aria-valuenow": Ei(p) ? p : void 0,
        "aria-valuetext": g,
        role: "progressbar",
        "data-state": hx(p, m),
        "data-value": p ?? void 0,
        "data-max": m,
        ...f,
        ref: o
      }
    ) });
  }
);
dx.displayName = nd;
var fx = "ProgressIndicator", mx = w.forwardRef(
  (n, o) => {
    const { __scopeProgress: a, ...i } = n, c = m2(fx, a);
    return /* @__PURE__ */ r.jsx(
      Ve.div,
      {
        "data-state": hx(c.value, c.max),
        "data-value": c.value ?? void 0,
        "data-max": c.max,
        ...i,
        ref: o
      }
    );
  }
);
mx.displayName = fx;
function h2(n, o) {
  return `${Math.round(n / o * 100)}%`;
}
function hx(n, o) {
  return n == null ? "indeterminate" : n === o ? "complete" : "loading";
}
function Ei(n) {
  return typeof n == "number";
}
function qh(n) {
  return Ei(n) && !isNaN(n) && n > 0;
}
function Yh(n, o) {
  return Ei(n) && !isNaN(n) && n <= o && n >= 0;
}
function p2(n, o) {
  return `Invalid prop \`max\` of value \`${n}\` supplied to \`${o}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${rd}\`.`;
}
function g2(n, o) {
  return `Invalid prop \`value\` of value \`${n}\` supplied to \`${o}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${rd} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var x2 = dx, v2 = mx;
function y2({
  className: n,
  value: o,
  ...a
}) {
  return /* @__PURE__ */ r.jsx(
    x2,
    {
      "data-slot": "progress",
      className: Be(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        n
      ),
      ...a,
      children: /* @__PURE__ */ r.jsx(
        v2,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (o || 0)}%)` }
        }
      )
    }
  );
}
function w2({
  students: n,
  currentStudent: o,
  allClasses: a,
  onClassSelected: i,
  onClassRemoved: c,
  onContinue: u,
  onAddAnotherStudent: f,
  onCapacityExpired: m,
  onBack: p
}) {
  const [g, v] = w.useState(!1), [x, b] = w.useState({}), j = g ? a : a.filter(
    (D) => D.grade === o.grade && D.proficiency === o.proficiency
  ), N = n.reduce((D, Y) => D + Y.selectedClasses.reduce((H, B) => {
    const re = a.find((me) => me.id === B.classId);
    return H + ((re == null ? void 0 : re.price) || 0);
  }, 0), 0), C = n.reduce(
    (D, Y) => D + Y.selectedClasses.length,
    0
  );
  w.useEffect(() => {
    const D = setInterval(() => {
      b((Y) => {
        const H = { ...Y };
        let B = !1;
        return Object.keys(H).forEach((re) => {
          H[re] > 0 ? (H[re]--, B = !0) : H[re] === 0 && (m(re), delete H[re], B = !0);
        }), B ? H : Y;
      });
    }, 1e3);
    return () => clearInterval(D);
  }, [m]);
  const P = (D) => {
    i(o.id, D), b((Y) => ({ ...Y, [D]: 900 }));
  }, E = (D, Y) => {
    c(D, Y), b((H) => {
      const B = { ...H };
      return delete B[Y], B;
    });
  }, O = (D) => o.selectedClasses.some((Y) => Y.classId === D), F = (D) => Pj(D, o, a);
  return /* @__PURE__ */ r.jsxs("div", { className: "w-full bg-gray-50 pb-32", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
      /* @__PURE__ */ r.jsxs(
        "button",
        {
          onClick: p,
          className: "flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors",
          children: [
            /* @__PURE__ */ r.jsx(Ya, { className: "w-4 h-4" }),
            /* @__PURE__ */ r.jsx("span", { className: "text-sm font-medium", children: "Back to Student Info" })
          ]
        }
      ),
      /* @__PURE__ */ r.jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ r.jsxs("h2", { className: "text-2xl font-bold text-gray-900", children: [
          "Select Classes for ",
          o.firstName
        ] }),
        /* @__PURE__ */ r.jsx("p", { className: "mt-2 text-gray-600", children: "Choose from our available classes" })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "flex flex-wrap gap-2 mb-6", children: [
        /* @__PURE__ */ r.jsxs(Wr, { variant: "secondary", className: "py-1.5 px-3", children: [
          "Grade: ",
          o.grade
        ] }),
        /* @__PURE__ */ r.jsxs(Wr, { variant: "secondary", className: "py-1.5 px-3", children: [
          "Proficiency: ",
          o.proficiency === "speaker" ? "Hebrew Speaker" : "Non-Hebrew Speaker"
        ] }),
        !g && j.length < a.length && /* @__PURE__ */ r.jsxs(
          "button",
          {
            onClick: () => v(!0),
            className: "text-sm text-[#326389] hover:underline font-medium",
            children: [
              "View All ",
              a.length,
              " Classes"
            ]
          }
        ),
        g && /* @__PURE__ */ r.jsx(
          "button",
          {
            onClick: () => v(!1),
            className: "text-sm text-[#326389] hover:underline font-medium",
            children: "Show Recommended Only"
          }
        )
      ] }),
      j.length === 0 ? /* @__PURE__ */ r.jsxs(Me, { className: "p-8 text-center", children: [
        /* @__PURE__ */ r.jsx($a, { className: "w-12 h-12 text-gray-400 mx-auto mb-4" }),
        /* @__PURE__ */ r.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "No matching classes found" }),
        /* @__PURE__ */ r.jsx("p", { className: "text-gray-600 mb-4", children: "Try viewing all classes to see more options" }),
        /* @__PURE__ */ r.jsx(Ce, { onClick: () => v(!0), variant: "outline", children: "View All Classes" })
      ] }) : /* @__PURE__ */ r.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: j.map((D) => {
        const Y = O(D.id), H = F(D), B = D.spotsRemaining === 0, re = D.spotsRemaining / D.totalCapacity * 100, me = x[D.id];
        return /* @__PURE__ */ r.jsx(
          Me,
          {
            className: `
                    p-5 transition-all
                    ${Y ? "border-[#326389] ring-2 ring-[#326389]/20" : ""}
                    ${H || B ? "opacity-60" : ""}
                  `,
            children: /* @__PURE__ */ r.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ r.jsxs("div", { children: [
                /* @__PURE__ */ r.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                  /* @__PURE__ */ r.jsx("h3", { className: "font-semibold text-gray-900 leading-tight", children: D.title }),
                  /* @__PURE__ */ r.jsx(
                    Wr,
                    {
                      variant: D.proficiency === "speaker" ? "default" : "secondary",
                      className: "shrink-0",
                      children: D.proficiency === "speaker" ? "Speaker" : "Non-Speaker"
                    }
                  )
                ] }),
                D.teacher && /* @__PURE__ */ r.jsxs("p", { className: "text-sm text-gray-600 mt-1", children: [
                  "with ",
                  D.teacher
                ] })
              ] }),
              /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-600", children: [
                /* @__PURE__ */ r.jsx(Ls, { className: "w-4 h-4" }),
                /* @__PURE__ */ r.jsxs("span", { children: [
                  D.days.join(", "),
                  " • ",
                  D.startTime,
                  " - ",
                  D.endTime
                ] })
              ] }),
              /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-600", children: [
                /* @__PURE__ */ r.jsx(Ou, { className: "w-4 h-4" }),
                /* @__PURE__ */ r.jsx("span", { children: D.location })
              ] }),
              /* @__PURE__ */ r.jsxs("div", { children: [
                /* @__PURE__ */ r.jsx("div", { className: "flex items-center justify-between text-sm mb-1", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2 text-gray-600", children: [
                  /* @__PURE__ */ r.jsx(Li, { className: "w-4 h-4" }),
                  /* @__PURE__ */ r.jsxs("span", { children: [
                    D.spotsRemaining,
                    " of ",
                    D.totalCapacity,
                    " spots available"
                  ] })
                ] }) }),
                /* @__PURE__ */ r.jsx(y2, { value: re, className: "h-1.5" })
              ] }),
              /* @__PURE__ */ r.jsx("div", { className: "text-lg font-bold text-gray-900", children: bt(D.price) }),
              H && /* @__PURE__ */ r.jsxs("div", { className: "flex items-start gap-2 p-2 bg-amber-50 border border-amber-200 rounded text-sm text-amber-800", children: [
                /* @__PURE__ */ r.jsx($a, { className: "w-4 h-4 shrink-0 mt-0.5" }),
                /* @__PURE__ */ r.jsx("span", { children: "Time conflict with selected class" })
              ] }),
              B && /* @__PURE__ */ r.jsxs("div", { className: "flex items-start gap-2 p-2 bg-gray-50 border border-gray-200 rounded text-sm text-gray-600", children: [
                /* @__PURE__ */ r.jsx($a, { className: "w-4 h-4 shrink-0 mt-0.5" }),
                /* @__PURE__ */ r.jsx("span", { children: "This class is currently full" })
              ] }),
              Y && me && /* @__PURE__ */ r.jsxs(
                "div",
                {
                  className: `
                          flex items-center gap-2 p-2 rounded text-sm
                          ${me < 300 ? "bg-red-50 border border-red-200 text-red-800" : "bg-blue-50 border border-blue-200 text-blue-800"}
                        `,
                  children: [
                    /* @__PURE__ */ r.jsx(Ls, { className: "w-4 h-4 shrink-0" }),
                    /* @__PURE__ */ r.jsxs("span", { children: [
                      "Spot reserved for ",
                      Tj(me)
                    ] })
                  ]
                }
              ),
              Y ? /* @__PURE__ */ r.jsx(
                Ce,
                {
                  variant: "outline",
                  className: "w-full",
                  onClick: () => E(o.id, D.id),
                  children: "Remove from Cart"
                }
              ) : /* @__PURE__ */ r.jsx(
                Ce,
                {
                  className: "w-full bg-[#326389] hover:bg-[#326389]/90",
                  disabled: H || B,
                  onClick: () => P(D.id),
                  children: "Add to Cart"
                }
              )
            ] })
          },
          D.id
        );
      }) })
    ] }),
    C > 0 && /* @__PURE__ */ r.jsx("div", { className: "fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg", children: /* @__PURE__ */ r.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-4", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ r.jsx(Sw, { className: "w-5 h-5 text-gray-600" }),
            /* @__PURE__ */ r.jsxs("span", { className: "font-semibold text-gray-900", children: [
              C,
              " ",
              C === 1 ? "class" : "classes",
              " selected"
            ] })
          ] }),
          /* @__PURE__ */ r.jsx("div", { className: "text-2xl font-bold text-gray-900", children: bt(N) })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "flex gap-3 w-full sm:w-auto", children: [
          /* @__PURE__ */ r.jsx(
            Ce,
            {
              variant: "outline",
              onClick: f,
              className: "flex-1 sm:flex-none",
              children: "Add Another Student"
            }
          ),
          /* @__PURE__ */ r.jsx(
            Ce,
            {
              onClick: u,
              className: "flex-1 sm:flex-none bg-[#326389] hover:bg-[#326389]/90",
              children: "Proceed to Waivers"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ r.jsx("div", { className: "flex flex-wrap gap-2 mt-3", children: n.map((D) => D.selectedClasses.length > 0 && /* @__PURE__ */ r.jsx(
        "div",
        {
          className: "inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full text-sm",
          children: /* @__PURE__ */ r.jsxs("span", { children: [
            /* @__PURE__ */ r.jsxs("strong", { children: [
              D.firstName,
              ":"
            ] }),
            " ",
            D.selectedClasses.length,
            " ",
            D.selectedClasses.length === 1 ? "class" : "classes"
          ] })
        },
        D.id
      )) })
    ] }) })
  ] });
}
function Eu() {
  return Eu = Object.assign ? Object.assign.bind() : function(n) {
    for (var o = 1; o < arguments.length; o++) {
      var a = arguments[o];
      for (var i in a) ({}).hasOwnProperty.call(a, i) && (n[i] = a[i]);
    }
    return n;
  }, Eu.apply(null, arguments);
}
function b2(n, o) {
  if (n == null) return {};
  var a = {};
  for (var i in n) if ({}.hasOwnProperty.call(n, i)) {
    if (o.indexOf(i) !== -1) continue;
    a[i] = n[i];
  }
  return a;
}
function N2(n, o) {
  if (n == null) return {};
  var a, i, c = b2(n, o);
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(n);
    for (i = 0; i < u.length; i++) a = u[i], o.indexOf(a) === -1 && {}.propertyIsEnumerable.call(n, a) && (c[a] = n[a]);
  }
  return c;
}
function Pu(n) {
  "@babel/helpers - typeof";
  return Pu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, Pu(n);
}
function j2(n, o, a) {
  return Object.defineProperty(n, "prototype", {
    writable: !1
  }), n;
}
function S2(n, o) {
  if (!(n instanceof o)) throw new TypeError("Cannot call a class as a function");
}
function _u(n, o) {
  return _u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, i) {
    return a.__proto__ = i, a;
  }, _u(n, o);
}
function C2(n, o) {
  if (typeof o != "function" && o !== null) throw new TypeError("Super expression must either be null or a function");
  n.prototype = Object.create(o && o.prototype, {
    constructor: {
      value: n,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(n, "prototype", {
    writable: !1
  }), o && _u(n, o);
}
function Pi(n) {
  return Pi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, Pi(n);
}
function px() {
  try {
    var n = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (px = function() {
    return !!n;
  })();
}
function k2(n) {
  if (n === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function E2(n, o) {
  if (o && (Pu(o) == "object" || typeof o == "function")) return o;
  if (o !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return k2(n);
}
function P2(n) {
  var o = px();
  return function() {
    var a, i = Pi(n);
    if (o) {
      var c = Pi(this).constructor;
      a = Reflect.construct(i, arguments, c);
    } else a = i.apply(this, arguments);
    return E2(this, a);
  };
}
var ru = { exports: {} }, su, Kh;
function _2() {
  if (Kh) return su;
  Kh = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return su = n, su;
}
var au, Qh;
function R2() {
  if (Qh) return au;
  Qh = 1;
  var n = /* @__PURE__ */ _2();
  function o() {
  }
  function a() {
  }
  return a.resetWarningCache = o, au = function() {
    function i(f, m, p, g, v, x) {
      if (x !== n) {
        var b = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw b.name = "Invariant Violation", b;
      }
    }
    i.isRequired = i;
    function c() {
      return i;
    }
    var u = {
      array: i,
      bigint: i,
      bool: i,
      func: i,
      number: i,
      object: i,
      string: i,
      symbol: i,
      any: i,
      arrayOf: c,
      element: i,
      elementType: i,
      instanceOf: c,
      node: i,
      objectOf: c,
      oneOf: c,
      oneOfType: c,
      shape: c,
      exact: c,
      checkPropTypes: a,
      resetWarningCache: o
    };
    return u.PropTypes = u, u;
  }, au;
}
var Xh;
function A2() {
  return Xh || (Xh = 1, ru.exports = /* @__PURE__ */ R2()()), ru.exports;
}
var T2 = /* @__PURE__ */ A2();
const Gt = /* @__PURE__ */ Mi(T2);
/*!
 * Signature Pad v2.3.2
 * https://github.com/szimek/signature_pad
 *
 * Copyright 2017 Szymon Nowak
 * Released under the MIT license
 *
 * The main idea and some parts of the code (e.g. drawing variable width Bézier curve) are taken from:
 * http://corner.squareup.com/2012/07/smoother-signatures.html
 *
 * Implementation of interpolation using cubic Bézier curves is taken from:
 * http://benknowscode.wordpress.com/2012/09/14/path-interpolation-using-cubic-bezier-and-control-point-estimation-in-javascript
 *
 * Algorithm for approximated length of a Bézier curve is taken from:
 * http://www.lemoda.net/maths/bezier-length/index.html
 *
 */
function Yr(n, o, a) {
  this.x = n, this.y = o, this.time = a || (/* @__PURE__ */ new Date()).getTime();
}
Yr.prototype.velocityFrom = function(n) {
  return this.time !== n.time ? this.distanceTo(n) / (this.time - n.time) : 1;
};
Yr.prototype.distanceTo = function(n) {
  return Math.sqrt(Math.pow(this.x - n.x, 2) + Math.pow(this.y - n.y, 2));
};
Yr.prototype.equals = function(n) {
  return this.x === n.x && this.y === n.y && this.time === n.time;
};
function sd(n, o, a, i) {
  this.startPoint = n, this.control1 = o, this.control2 = a, this.endPoint = i;
}
sd.prototype.length = function() {
  for (var n = 10, o = 0, a = void 0, i = void 0, c = 0; c <= n; c += 1) {
    var u = c / n, f = this._point(u, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x), m = this._point(u, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);
    if (c > 0) {
      var p = f - a, g = m - i;
      o += Math.sqrt(p * p + g * g);
    }
    a = f, i = m;
  }
  return o;
};
sd.prototype._point = function(n, o, a, i, c) {
  return o * (1 - n) * (1 - n) * (1 - n) + 3 * a * (1 - n) * (1 - n) * n + 3 * i * (1 - n) * n * n + c * n * n * n;
};
function D2(n, o, a) {
  var i, c, u, f = null, m = 0;
  a || (a = {});
  var p = function() {
    m = a.leading === !1 ? 0 : Date.now(), f = null, u = n.apply(i, c), f || (i = c = null);
  };
  return function() {
    var g = Date.now();
    !m && a.leading === !1 && (m = g);
    var v = o - (g - m);
    return i = this, c = arguments, v <= 0 || v > o ? (f && (clearTimeout(f), f = null), m = g, u = n.apply(i, c), f || (i = c = null)) : !f && a.trailing !== !1 && (f = setTimeout(p, v)), u;
  };
}
function Qe(n, o) {
  var a = this, i = o || {};
  this.velocityFilterWeight = i.velocityFilterWeight || 0.7, this.minWidth = i.minWidth || 0.5, this.maxWidth = i.maxWidth || 2.5, this.throttle = "throttle" in i ? i.throttle : 16, this.minDistance = "minDistance" in i ? i.minDistance : 5, this.throttle ? this._strokeMoveUpdate = D2(Qe.prototype._strokeUpdate, this.throttle) : this._strokeMoveUpdate = Qe.prototype._strokeUpdate, this.dotSize = i.dotSize || function() {
    return (this.minWidth + this.maxWidth) / 2;
  }, this.penColor = i.penColor || "black", this.backgroundColor = i.backgroundColor || "rgba(0,0,0,0)", this.onBegin = i.onBegin, this.onEnd = i.onEnd, this._canvas = n, this._ctx = n.getContext("2d"), this.clear(), this._handleMouseDown = function(c) {
    c.which === 1 && (a._mouseButtonDown = !0, a._strokeBegin(c));
  }, this._handleMouseMove = function(c) {
    a._mouseButtonDown && a._strokeMoveUpdate(c);
  }, this._handleMouseUp = function(c) {
    c.which === 1 && a._mouseButtonDown && (a._mouseButtonDown = !1, a._strokeEnd(c));
  }, this._handleTouchStart = function(c) {
    if (c.targetTouches.length === 1) {
      var u = c.changedTouches[0];
      a._strokeBegin(u);
    }
  }, this._handleTouchMove = function(c) {
    c.preventDefault();
    var u = c.targetTouches[0];
    a._strokeMoveUpdate(u);
  }, this._handleTouchEnd = function(c) {
    var u = c.target === a._canvas;
    u && (c.preventDefault(), a._strokeEnd(c));
  }, this.on();
}
Qe.prototype.clear = function() {
  var n = this._ctx, o = this._canvas;
  n.fillStyle = this.backgroundColor, n.clearRect(0, 0, o.width, o.height), n.fillRect(0, 0, o.width, o.height), this._data = [], this._reset(), this._isEmpty = !0;
};
Qe.prototype.fromDataURL = function(n) {
  var o = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = new Image(), c = a.ratio || window.devicePixelRatio || 1, u = a.width || this._canvas.width / c, f = a.height || this._canvas.height / c;
  this._reset(), i.src = n, i.onload = function() {
    o._ctx.drawImage(i, 0, 0, u, f);
  }, this._isEmpty = !1;
};
Qe.prototype.toDataURL = function(n) {
  var o;
  switch (n) {
    case "image/svg+xml":
      return this._toSVG();
    default:
      for (var a = arguments.length, i = Array(a > 1 ? a - 1 : 0), c = 1; c < a; c++)
        i[c - 1] = arguments[c];
      return (o = this._canvas).toDataURL.apply(o, [n].concat(i));
  }
};
Qe.prototype.on = function() {
  this._handleMouseEvents(), this._handleTouchEvents();
};
Qe.prototype.off = function() {
  this._canvas.removeEventListener("mousedown", this._handleMouseDown), this._canvas.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), this._canvas.removeEventListener("touchstart", this._handleTouchStart), this._canvas.removeEventListener("touchmove", this._handleTouchMove), this._canvas.removeEventListener("touchend", this._handleTouchEnd);
};
Qe.prototype.isEmpty = function() {
  return this._isEmpty;
};
Qe.prototype._strokeBegin = function(n) {
  this._data.push([]), this._reset(), this._strokeUpdate(n), typeof this.onBegin == "function" && this.onBegin(n);
};
Qe.prototype._strokeUpdate = function(n) {
  var o = n.clientX, a = n.clientY, i = this._createPoint(o, a), c = this._data[this._data.length - 1], u = c && c[c.length - 1], f = u && i.distanceTo(u) < this.minDistance;
  if (!(u && f)) {
    var m = this._addPoint(i), p = m.curve, g = m.widths;
    p && g && this._drawCurve(p, g.start, g.end), this._data[this._data.length - 1].push({
      x: i.x,
      y: i.y,
      time: i.time,
      color: this.penColor
    });
  }
};
Qe.prototype._strokeEnd = function(n) {
  var o = this.points.length > 2, a = this.points[0];
  if (!o && a && this._drawDot(a), a) {
    var i = this._data[this._data.length - 1], c = i[i.length - 1];
    a.equals(c) || i.push({
      x: a.x,
      y: a.y,
      time: a.time,
      color: this.penColor
    });
  }
  typeof this.onEnd == "function" && this.onEnd(n);
};
Qe.prototype._handleMouseEvents = function() {
  this._mouseButtonDown = !1, this._canvas.addEventListener("mousedown", this._handleMouseDown), this._canvas.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
};
Qe.prototype._handleTouchEvents = function() {
  this._canvas.style.msTouchAction = "none", this._canvas.style.touchAction = "none", this._canvas.addEventListener("touchstart", this._handleTouchStart), this._canvas.addEventListener("touchmove", this._handleTouchMove), this._canvas.addEventListener("touchend", this._handleTouchEnd);
};
Qe.prototype._reset = function() {
  this.points = [], this._lastVelocity = 0, this._lastWidth = (this.minWidth + this.maxWidth) / 2, this._ctx.fillStyle = this.penColor;
};
Qe.prototype._createPoint = function(n, o, a) {
  var i = this._canvas.getBoundingClientRect();
  return new Yr(n - i.left, o - i.top, a || (/* @__PURE__ */ new Date()).getTime());
};
Qe.prototype._addPoint = function(n) {
  var o = this.points, a = void 0;
  if (o.push(n), o.length > 2) {
    o.length === 3 && o.unshift(o[0]), a = this._calculateCurveControlPoints(o[0], o[1], o[2]);
    var i = a.c2;
    a = this._calculateCurveControlPoints(o[1], o[2], o[3]);
    var c = a.c1, u = new sd(o[1], i, c, o[2]), f = this._calculateCurveWidths(u);
    return o.shift(), { curve: u, widths: f };
  }
  return {};
};
Qe.prototype._calculateCurveControlPoints = function(n, o, a) {
  var i = n.x - o.x, c = n.y - o.y, u = o.x - a.x, f = o.y - a.y, m = { x: (n.x + o.x) / 2, y: (n.y + o.y) / 2 }, p = { x: (o.x + a.x) / 2, y: (o.y + a.y) / 2 }, g = Math.sqrt(i * i + c * c), v = Math.sqrt(u * u + f * f), x = m.x - p.x, b = m.y - p.y, S = v / (g + v), j = { x: p.x + x * S, y: p.y + b * S }, N = o.x - j.x, C = o.y - j.y;
  return {
    c1: new Yr(m.x + N, m.y + C),
    c2: new Yr(p.x + N, p.y + C)
  };
};
Qe.prototype._calculateCurveWidths = function(n) {
  var o = n.startPoint, a = n.endPoint, i = { start: null, end: null }, c = this.velocityFilterWeight * a.velocityFrom(o) + (1 - this.velocityFilterWeight) * this._lastVelocity, u = this._strokeWidth(c);
  return i.start = this._lastWidth, i.end = u, this._lastVelocity = c, this._lastWidth = u, i;
};
Qe.prototype._strokeWidth = function(n) {
  return Math.max(this.maxWidth / (n + 1), this.minWidth);
};
Qe.prototype._drawPoint = function(n, o, a) {
  var i = this._ctx;
  i.moveTo(n, o), i.arc(n, o, a, 0, 2 * Math.PI, !1), this._isEmpty = !1;
};
Qe.prototype._drawCurve = function(n, o, a) {
  var i = this._ctx, c = a - o, u = Math.floor(n.length());
  i.beginPath();
  for (var f = 0; f < u; f += 1) {
    var m = f / u, p = m * m, g = p * m, v = 1 - m, x = v * v, b = x * v, S = b * n.startPoint.x;
    S += 3 * x * m * n.control1.x, S += 3 * v * p * n.control2.x, S += g * n.endPoint.x;
    var j = b * n.startPoint.y;
    j += 3 * x * m * n.control1.y, j += 3 * v * p * n.control2.y, j += g * n.endPoint.y;
    var N = o + g * c;
    this._drawPoint(S, j, N);
  }
  i.closePath(), i.fill();
};
Qe.prototype._drawDot = function(n) {
  var o = this._ctx, a = typeof this.dotSize == "function" ? this.dotSize() : this.dotSize;
  o.beginPath(), this._drawPoint(n.x, n.y, a), o.closePath(), o.fill();
};
Qe.prototype._fromData = function(n, o, a) {
  for (var i = 0; i < n.length; i += 1) {
    var c = n[i];
    if (c.length > 1)
      for (var u = 0; u < c.length; u += 1) {
        var f = c[u], m = new Yr(f.x, f.y, f.time), p = f.color;
        if (u === 0)
          this.penColor = p, this._reset(), this._addPoint(m);
        else if (u !== c.length - 1) {
          var g = this._addPoint(m), v = g.curve, x = g.widths;
          v && x && o(v, x, p);
        }
      }
    else {
      this._reset();
      var b = c[0];
      a(b);
    }
  }
};
Qe.prototype._toSVG = function() {
  var n = this, o = this._data, a = this._canvas, i = Math.max(window.devicePixelRatio || 1, 1), c = 0, u = 0, f = a.width / i, m = a.height / i, p = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  p.setAttributeNS(null, "width", a.width), p.setAttributeNS(null, "height", a.height), this._fromData(o, function(P, E, O) {
    var F = document.createElement("path");
    if (!isNaN(P.control1.x) && !isNaN(P.control1.y) && !isNaN(P.control2.x) && !isNaN(P.control2.y)) {
      var D = "M " + P.startPoint.x.toFixed(3) + "," + P.startPoint.y.toFixed(3) + " " + ("C " + P.control1.x.toFixed(3) + "," + P.control1.y.toFixed(3) + " ") + (P.control2.x.toFixed(3) + "," + P.control2.y.toFixed(3) + " ") + (P.endPoint.x.toFixed(3) + "," + P.endPoint.y.toFixed(3));
      F.setAttribute("d", D), F.setAttribute("stroke-width", (E.end * 2.25).toFixed(3)), F.setAttribute("stroke", O), F.setAttribute("fill", "none"), F.setAttribute("stroke-linecap", "round"), p.appendChild(F);
    }
  }, function(P) {
    var E = document.createElement("circle"), O = typeof n.dotSize == "function" ? n.dotSize() : n.dotSize;
    E.setAttribute("r", O), E.setAttribute("cx", P.x), E.setAttribute("cy", P.y), E.setAttribute("fill", P.color), p.appendChild(E);
  });
  var g = "data:image/svg+xml;base64,", v = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"' + (' viewBox="' + c + " " + u + " " + f + " " + m + '"') + (' width="' + f + '"') + (' height="' + m + '"') + ">", x = p.innerHTML;
  if (x === void 0) {
    var b = document.createElement("dummy"), S = p.childNodes;
    b.innerHTML = "";
    for (var j = 0; j < S.length; j += 1)
      b.appendChild(S[j].cloneNode(!0));
    x = b.innerHTML;
  }
  var N = "</svg>", C = v + x + N;
  return g + btoa(C);
};
Qe.prototype.fromData = function(n) {
  var o = this;
  this.clear(), this._fromData(n, function(a, i) {
    return o._drawCurve(a, i.start, i.end);
  }, function(a) {
    return o._drawDot(a);
  }), this._data = n;
};
Qe.prototype.toData = function() {
  return this._data;
};
var yi = { exports: {} }, M2 = yi.exports, Zh;
function O2() {
  return Zh || (Zh = 1, (function(n, o) {
    (function(a, i) {
      n.exports = i();
    })(M2, function() {
      return (function(a) {
        function i(u) {
          if (c[u]) return c[u].exports;
          var f = c[u] = { exports: {}, id: u, loaded: !1 };
          return a[u].call(f.exports, f, f.exports, i), f.loaded = !0, f.exports;
        }
        var c = {};
        return i.m = a, i.c = c, i.p = "", i(0);
      })([function(a, i) {
        function c(g) {
          var v = g.getContext("2d"), x = g.width, b = g.height, S = v.getImageData(0, 0, x, b).data, j = m(!0, x, b, S), N = m(!1, x, b, S), C = p(!0, x, b, S), P = p(!1, x, b, S), E = P - C + 1, O = N - j + 1, F = v.getImageData(C, j, E, O);
          return g.width = E, g.height = O, v.clearRect(0, 0, E, O), v.putImageData(F, 0, 0), g;
        }
        function u(g, v, x, b) {
          return { red: b[4 * (x * v + g)], green: b[4 * (x * v + g) + 1], blue: b[4 * (x * v + g) + 2], alpha: b[4 * (x * v + g) + 3] };
        }
        function f(g, v, x, b) {
          return u(g, v, x, b).alpha;
        }
        function m(g, v, x, b) {
          for (var S = g ? 1 : -1, j = g ? 0 : x - 1, N = j; g ? N < x : N > -1; N += S) for (var C = 0; C < v; C++) if (f(C, N, v, b)) return N;
          return null;
        }
        function p(g, v, x, b) {
          for (var S = g ? 1 : -1, j = g ? 0 : v - 1, N = j; g ? N < v : N > -1; N += S) for (var C = 0; C < x; C++) if (f(N, C, v, b)) return N;
          return null;
        }
        Object.defineProperty(i, "__esModule", { value: !0 }), i.default = c;
      }]);
    });
  })(yi)), yi.exports;
}
var F2 = O2();
const L2 = /* @__PURE__ */ Mi(F2);
var I2 = ["canvasProps", "clearOnResize"], Os = /* @__PURE__ */ (function(n) {
  C2(a, n);
  var o = P2(a);
  function a() {
    var i;
    S2(this, a);
    for (var c = arguments.length, u = new Array(c), f = 0; f < c; f++)
      u[f] = arguments[f];
    return i = o.call.apply(o, [this].concat(u)), i.staticThis = i.constructor, i._sigPad = null, i._canvas = null, i.setRef = function(m) {
      i._canvas = m, i._canvas === null && (i._sigPad = null);
    }, i._excludeOurProps = function() {
      var m = i.props;
      m.canvasProps, m.clearOnResize;
      var p = N2(m, I2);
      return p;
    }, i.componentDidMount = function() {
      var m = i.getCanvas();
      i._sigPad = new Qe(m, i._excludeOurProps()), i._resizeCanvas(), i.on();
    }, i.componentWillUnmount = function() {
      i.off();
    }, i.componentDidUpdate = function() {
      Object.assign(i._sigPad, i._excludeOurProps());
    }, i.getCanvas = function() {
      if (i._canvas === null)
        throw i.staticThis.refNullError;
      return i._canvas;
    }, i.getTrimmedCanvas = function() {
      var m = i.getCanvas(), p = document.createElement("canvas");
      return p.width = m.width, p.height = m.height, p.getContext("2d").drawImage(m, 0, 0), L2(p);
    }, i.getSignaturePad = function() {
      if (i._sigPad === null)
        throw i.staticThis.refNullError;
      return i._sigPad;
    }, i._checkClearOnResize = function() {
      i.props.clearOnResize && i._resizeCanvas();
    }, i._resizeCanvas = function() {
      var m, p, g = (m = i.props.canvasProps) !== null && m !== void 0 ? m : {}, v = g.width, x = g.height;
      if (!(typeof v < "u" && typeof x < "u")) {
        var b = i.getCanvas(), S = Math.max((p = window.devicePixelRatio) !== null && p !== void 0 ? p : 1, 1);
        typeof v > "u" && (b.width = b.offsetWidth * S), typeof x > "u" && (b.height = b.offsetHeight * S), b.getContext("2d").scale(S, S), i.clear();
      }
    }, i.render = function() {
      var m = i.props.canvasProps;
      return /* @__PURE__ */ Te.createElement("canvas", Eu({
        ref: i.setRef
      }, m));
    }, i.on = function() {
      return window.addEventListener("resize", i._checkClearOnResize), i.getSignaturePad().on();
    }, i.off = function() {
      return window.removeEventListener("resize", i._checkClearOnResize), i.getSignaturePad().off();
    }, i.clear = function() {
      return i.getSignaturePad().clear();
    }, i.isEmpty = function() {
      return i.getSignaturePad().isEmpty();
    }, i.fromDataURL = function(m, p) {
      return i.getSignaturePad().fromDataURL(m, p);
    }, i.toDataURL = function(m, p) {
      return i.getSignaturePad().toDataURL(m, p);
    }, i.fromData = function(m) {
      return i.getSignaturePad().fromData(m);
    }, i.toData = function() {
      return i.getSignaturePad().toData();
    }, i;
  }
  return j2(a);
})(w.Component);
Os.propTypes = {
  // signature_pad's props
  velocityFilterWeight: Gt.number,
  minWidth: Gt.number,
  maxWidth: Gt.number,
  minDistance: Gt.number,
  dotSize: Gt.oneOfType([Gt.number, Gt.func]),
  penColor: Gt.string,
  throttle: Gt.number,
  onEnd: Gt.func,
  onBegin: Gt.func,
  // props specific to the React wrapper
  canvasProps: Gt.object,
  clearOnResize: Gt.bool
};
Os.defaultProps = {
  clearOnResize: !0
};
Os.refNullError = new Error("react-signature-canvas is currently mounting or unmounting: React refs are null during this phase.");
var ad = "Checkbox", [z2] = yn(ad), [V2, $2] = z2(ad), gx = w.forwardRef(
  (n, o) => {
    const {
      __scopeCheckbox: a,
      name: i,
      checked: c,
      defaultChecked: u,
      required: f,
      disabled: m,
      value: p = "on",
      onCheckedChange: g,
      form: v,
      ...x
    } = n, [b, S] = w.useState(null), j = qe(o, (F) => S(F)), N = w.useRef(!1), C = b ? v || !!b.closest("form") : !0, [P = !1, E] = Gr({
      prop: c,
      defaultProp: u,
      onChange: g
    }), O = w.useRef(P);
    return w.useEffect(() => {
      const F = b == null ? void 0 : b.form;
      if (F) {
        const D = () => E(O.current);
        return F.addEventListener("reset", D), () => F.removeEventListener("reset", D);
      }
    }, [b, E]), /* @__PURE__ */ r.jsxs(V2, { scope: a, state: P, disabled: m, children: [
      /* @__PURE__ */ r.jsx(
        Ve.button,
        {
          type: "button",
          role: "checkbox",
          "aria-checked": wr(P) ? "mixed" : P,
          "aria-required": f,
          "data-state": yx(P),
          "data-disabled": m ? "" : void 0,
          disabled: m,
          value: p,
          ...x,
          ref: j,
          onKeyDown: ze(n.onKeyDown, (F) => {
            F.key === "Enter" && F.preventDefault();
          }),
          onClick: ze(n.onClick, (F) => {
            E((D) => wr(D) ? !0 : !D), C && (N.current = F.isPropagationStopped(), N.current || F.stopPropagation());
          })
        }
      ),
      C && /* @__PURE__ */ r.jsx(
        B2,
        {
          control: b,
          bubbles: !N.current,
          name: i,
          value: p,
          checked: P,
          required: f,
          disabled: m,
          form: v,
          style: { transform: "translateX(-100%)" },
          defaultChecked: wr(u) ? !1 : u
        }
      )
    ] });
  }
);
gx.displayName = ad;
var xx = "CheckboxIndicator", vx = w.forwardRef(
  (n, o) => {
    const { __scopeCheckbox: a, forceMount: i, ...c } = n, u = $2(xx, a);
    return /* @__PURE__ */ r.jsx(Qs, { present: i || wr(u.state) || u.state === !0, children: /* @__PURE__ */ r.jsx(
      Ve.span,
      {
        "data-state": yx(u.state),
        "data-disabled": u.disabled ? "" : void 0,
        ...c,
        ref: o,
        style: { pointerEvents: "none", ...n.style }
      }
    ) });
  }
);
vx.displayName = xx;
var B2 = (n) => {
  const { control: o, checked: a, bubbles: i = !0, defaultChecked: c, ...u } = n, f = w.useRef(null), m = Ui(a), p = Bi(o);
  w.useEffect(() => {
    const v = f.current, x = window.HTMLInputElement.prototype, S = Object.getOwnPropertyDescriptor(x, "checked").set;
    if (m !== a && S) {
      const j = new Event("click", { bubbles: i });
      v.indeterminate = wr(a), S.call(v, wr(a) ? !1 : a), v.dispatchEvent(j);
    }
  }, [m, a, i]);
  const g = w.useRef(wr(a) ? !1 : a);
  return /* @__PURE__ */ r.jsx(
    "input",
    {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: c ?? g.current,
      ...u,
      tabIndex: -1,
      ref: f,
      style: {
        ...n.style,
        ...p,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function wr(n) {
  return n === "indeterminate";
}
function yx(n) {
  return wr(n) ? "indeterminate" : n ? "checked" : "unchecked";
}
var U2 = gx, W2 = vx;
function ou({
  className: n,
  ...o
}) {
  return /* @__PURE__ */ r.jsx(
    U2,
    {
      "data-slot": "checkbox",
      className: Be(
        "peer border bg-input-background dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n
      ),
      ...o,
      children: /* @__PURE__ */ r.jsx(
        W2,
        {
          "data-slot": "checkbox-indicator",
          className: "flex items-center justify-center text-current transition-none",
          children: /* @__PURE__ */ r.jsx(Ha, { className: "size-3.5" })
        }
      )
    }
  );
}
const iu = {
  codeOfConduct: `The New Hebrew Program Code of Conduct

The New Hebrew Program is a center for the teaching of the Hebrew language and Jewish education in the spirit of Israeli culture.

The New Hebrew Program is committed to providing a safe, caring, and inclusive learning and working environment by promoting respect, responsible citizenship and academic success. A positive school climate exists when all members of the center feel safe, comfortable, and accepted.

The Standards of Behavior outlined apply to all members of the center, including students, parents and guardians, school staff, volunteers, and visitors when:
• on school property;
• participating in extra-curricular activities;
• participating in off-site school-sponsored activities;
• or engaging in an activity that will have an impact on the school climate.


A) Standards of Behavior
All members of the school community are expected to:
• respect and comply with federal, provincial, and municipal laws;
• demonstrate honesty and integrity;
• respect the rights of others and treat one another with dignity and respect at all times, regardless of economic status, race, color, national or ethnic origin, language group, religion, gender, sexual orientation, gender identity, age, or ability;
• show proper care and regard for school property and the property of others;
• take appropriate measures to help those in need;
• demonstrate the best effort during all school-based activities.


B) Inappropriate behaviors
In abiding by The New Hebrew Program's Standards of behavior, all members of the school community are expected to refrain from:
• breaking federal, provincial, or municipal laws;
• any behavior that discriminates based on economic status, race, color, national or ethnic origin, language group, religion, gender, sexual orientation, gender identity, age, or ability, such as racial, homophobic, or transphobic comments;
• any violent or bullying behavior (physical, verbal, social, electronic) that intentionally hurts (physically, socially, or emotionally) another person;
• any inappropriate use of language;
• making derogatory or hateful comments toward an individual or group of people;
• threatening an individual or group of people;
• threatening to damage or destroy property;
• injuring an individual, group of people, or property;
• using technology to intentionally abuse or bully another person;
• using technology to interfere with the positive climate of the school;
• using language that is violent, profane, or discriminatory;
• wearing clothes that depict violence, profanity, or discrimination.


C) Proactive Strategies
Expected behaviors as identified in The New Hebrew Program's Standards of behavior will be encouraged and supported through the school-wide practices listed below.
• behavioral expectations are discussed with all members of the school community during scheduled meetings.
• Standards of behavior for students are reviewed, practiced and discussed on a regularly scheduled basis and as needed.
• Standards of behavior are applied consistently by all staff.
• Students are presented with a choice of behaviors and related consequences to enable them to make an informed choice before acting.
• Appropriate behaviors are modelled by school staff.
• Appropriate student behaviors are acknowledged by staff.
• Teachers contact parents/guardians to provide feedback on student behavior and accomplishments.


D) Reactive Strategies
When inappropriate student behaviors occur, the school may employ a range of interventions and supports. These include learning opportunities for reinforcing positive behavior while helping students to make good choices. Consequences are applied within a framework that shifts the focus from one that is strictly punitive to one that is both corrective and supportive.

Appropriate options for school response to Level 1 student behaviors (those behaviors which are responded to by the teacher witnessing the behavior):
• verbal reminders
• model expected behavior
• re-teach the expected behavior
• offer choices and consequences of the choices
• communication to parent/guardian

Appropriate options for school response to Level 2 student behaviors (student behaviors which are referred to the administration) include strategies listed for Level 1 behaviors, plus:
• home contact
• natural consequences
• monitor behaviors
• Mediation
• parent/school conference
• restricted access to facilities/activities
• behavior contract
• out-of-school suspension


E) Our Locations
The general appearance of the school locations is the responsibility of the entire community. Students are expected to clean up after themselves, and leave their classroom clean and organized. Students should not use or play with any materials that are not The New Hebrew Program property. Running in the classroom and in hallways is not permitted.


F) Drop off and Pick Up
Students should arrive to and leave from class on time. Supervision outside of the scheduled class is unavailable. Parents or caregivers must remain with the student until their scheduled class starts. In case someone other than parents will pick up the student, notify The New Hebrew Program in advance.`,
  cancellationPolicy: `The New Hebrew Program Cancellation Policy

Cancellation & Withdrawal Policy

Cancellations by June 30
Full refund of the amount paid, minus a $35 processing fee.

Cancellations during July
Refund of the amount paid, minus a $35 processing fee and an $80 non-refundable materials fee.

Cancellations after August 1
No refunds will be provided. All fees paid are non-refundable, including registration fees, materials fees, and tuition payments.

Monthly Tuition
Monthly tuition payments are due on the 6th of each month. Late payments may result in removal from the program. The pre-paid last month tuition will be applied to your final month of enrollment.

Withdrawal Policy
If you need to withdraw your child from the program, you must provide written notice at least 14 days before the start of the next month to avoid being charged for that month's tuition.`,
  photoRelease: `Photo Release

I grant The New Hebrew Program permission to use photographs, videos, or other media featuring my child for promotional, educational, and marketing purposes.

This may include use on the website, social media, printed materials, and other promotional channels.

I understand that my child's name may be used alongside their image. I waive any rights to compensation or approval of the finished product.

If you do not wish your child to be photographed, please contact us separately to opt out.`
};
function H2({ students: n, onWaiversSigned: o, onContinue: a, onBack: i }) {
  const [c, u] = w.useState(""), [f, m] = w.useState(""), [p, g] = w.useState(""), [v, x] = w.useState(""), [b, S] = w.useState(!1), [j, N] = w.useState(!1), [C, P] = w.useState(!1), [E, O] = w.useState(!1), [F, D] = w.useState(!1), [Y, H] = w.useState(!1), B = w.useRef(null), re = w.useRef(null), me = w.useRef(null), J = () => b && j && C && f.trim() && p.trim() && v.trim() && E && F && Y, X = () => {
    if (!J()) return;
    const W = {
      codeOfConduct: {
        dataURL: B.current.toDataURL(),
        fullName: f
      },
      cancellation: {
        dataURL: re.current.toDataURL(),
        fullName: p
      },
      photoRelease: {
        dataURL: me.current.toDataURL(),
        fullName: v
      }
    };
    o({ medicalNotes: c, signatures: W }), a();
  };
  return /* @__PURE__ */ r.jsx("div", { className: "w-full bg-gray-50 py-8", children: /* @__PURE__ */ r.jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ r.jsxs(
      "button",
      {
        onClick: i,
        className: "flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors",
        children: [
          /* @__PURE__ */ r.jsx(Ya, { className: "w-4 h-4" }),
          /* @__PURE__ */ r.jsx("span", { className: "text-sm font-medium", children: "Back to Class Selection" })
        ]
      }
    ),
    /* @__PURE__ */ r.jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ r.jsx("h2", { className: "text-2xl font-bold text-gray-900", children: "Waivers & Policies" }),
      /* @__PURE__ */ r.jsx("p", { className: "mt-2 text-gray-600", children: "Please review and sign all required documents" })
    ] }),
    n.length > 1 && /* @__PURE__ */ r.jsxs(Me, { className: "p-6 mb-6", children: [
      /* @__PURE__ */ r.jsx(se, { htmlFor: "medicalNotes", className: "text-base font-semibold", children: "Medical Notes (Optional)" }),
      /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600 mt-1 mb-3", children: "If you have multiple children enrolled, please specify which child each note applies to." }),
      /* @__PURE__ */ r.jsx(
        Pn,
        {
          id: "medicalNotes",
          value: c,
          onChange: (W) => u(W.target.value),
          placeholder: "Example: Sarah has a peanut allergy. David uses an inhaler for asthma.",
          className: "min-h-24"
        }
      )
    ] }),
    !n.length && /* @__PURE__ */ r.jsxs(Me, { className: "p-6 mb-6", children: [
      /* @__PURE__ */ r.jsx(se, { htmlFor: "medicalNotes", className: "text-base font-semibold", children: "Medical Notes (Optional)" }),
      /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600 mt-1 mb-3", children: "Please share any allergies, medical conditions, or special needs we should be aware of." }),
      /* @__PURE__ */ r.jsx(
        Pn,
        {
          id: "medicalNotes",
          value: c,
          onChange: (W) => u(W.target.value),
          placeholder: "Example: Peanut allergy, uses inhaler for asthma",
          className: "min-h-24"
        }
      )
    ] }),
    /* @__PURE__ */ r.jsxs(Me, { className: "p-6 mb-6", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "flex items-start gap-3 mb-4", children: [
        /* @__PURE__ */ r.jsx(Ba, { className: "w-6 h-6 text-[#326389] shrink-0 mt-1" }),
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "The New Hebrew Program Code of Conduct" }),
          /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600 mt-1", children: "Required for all participants" })
        ] })
      ] }),
      /* @__PURE__ */ r.jsx("div", { className: "bg-gray-50 p-4 rounded-lg max-h-64 overflow-y-auto mb-4 text-sm text-gray-700 whitespace-pre-line", children: iu.codeOfConduct }),
      /* @__PURE__ */ r.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx(se, { htmlFor: "fullNameCodeOfConduct", children: "Full Legal Name *" }),
          /* @__PURE__ */ r.jsx(
            Pe,
            {
              id: "fullNameCodeOfConduct",
              type: "text",
              value: f,
              onChange: (W) => m(W.target.value),
              placeholder: "Your full name",
              className: "mt-1",
              required: !0
            }
          )
        ] }),
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx(se, { className: "mb-2 block", children: "Signature *" }),
          /* @__PURE__ */ r.jsx("div", { className: "border-2 border-gray-300 rounded-lg bg-white", children: /* @__PURE__ */ r.jsx(
            Os,
            {
              ref: B,
              onEnd: () => O(!0),
              canvasProps: {
                className: "w-full h-32 rounded-lg"
              }
            }
          ) }),
          /* @__PURE__ */ r.jsxs(
            Ce,
            {
              type: "button",
              variant: "ghost",
              size: "sm",
              className: "mt-2",
              onClick: () => {
                var W;
                (W = B.current) == null || W.clear(), O(!1);
              },
              children: [
                /* @__PURE__ */ r.jsx(Uc, { className: "w-4 h-4 mr-2" }),
                "Clear Signature"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-start gap-3 pt-2", children: [
          /* @__PURE__ */ r.jsx(
            ou,
            {
              id: "agreeCodeOfConduct",
              checked: b,
              onCheckedChange: (W) => S(W === !0)
            }
          ),
          /* @__PURE__ */ r.jsx(
            se,
            {
              htmlFor: "agreeCodeOfConduct",
              className: "text-sm font-normal leading-relaxed cursor-pointer",
              children: "I have read and agree to The New Hebrew Program Code of Conduct"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs(Me, { className: "p-6 mb-6", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "flex items-start gap-3 mb-4", children: [
        /* @__PURE__ */ r.jsx(Ba, { className: "w-6 h-6 text-[#326389] shrink-0 mt-1" }),
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "The New Hebrew Program Cancellation Policy" }),
          /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600 mt-1", children: "Required for all participants" })
        ] })
      ] }),
      /* @__PURE__ */ r.jsx("div", { className: "bg-gray-50 p-4 rounded-lg max-h-64 overflow-y-auto mb-4 text-sm text-gray-700 whitespace-pre-line", children: iu.cancellationPolicy }),
      /* @__PURE__ */ r.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx(se, { htmlFor: "fullNameCancellation", children: "Full Legal Name *" }),
          /* @__PURE__ */ r.jsx(
            Pe,
            {
              id: "fullNameCancellation",
              type: "text",
              value: p,
              onChange: (W) => g(W.target.value),
              placeholder: "Your full name",
              className: "mt-1",
              required: !0
            }
          )
        ] }),
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx(se, { className: "mb-2 block", children: "Signature *" }),
          /* @__PURE__ */ r.jsx("div", { className: "border-2 border-gray-300 rounded-lg bg-white", children: /* @__PURE__ */ r.jsx(
            Os,
            {
              ref: re,
              onEnd: () => D(!0),
              canvasProps: {
                className: "w-full h-32 rounded-lg"
              }
            }
          ) }),
          /* @__PURE__ */ r.jsxs(
            Ce,
            {
              type: "button",
              variant: "ghost",
              size: "sm",
              className: "mt-2",
              onClick: () => {
                var W;
                (W = re.current) == null || W.clear(), D(!1);
              },
              children: [
                /* @__PURE__ */ r.jsx(Uc, { className: "w-4 h-4 mr-2" }),
                "Clear Signature"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-start gap-3 pt-2", children: [
          /* @__PURE__ */ r.jsx(
            ou,
            {
              id: "agreeCancellation",
              checked: j,
              onCheckedChange: (W) => N(W === !0)
            }
          ),
          /* @__PURE__ */ r.jsx(
            se,
            {
              htmlFor: "agreeCancellation",
              className: "text-sm font-normal leading-relaxed cursor-pointer",
              children: "I have read and agree to The New Hebrew Program Cancellation Policy"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs(Me, { className: "p-6 mb-8", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "flex items-start gap-3 mb-4", children: [
        /* @__PURE__ */ r.jsx(Ba, { className: "w-6 h-6 text-[#326389] shrink-0 mt-1" }),
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "Photo Release" }),
          /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600 mt-1", children: "Required for all participants" })
        ] })
      ] }),
      /* @__PURE__ */ r.jsx("div", { className: "bg-gray-50 p-4 rounded-lg max-h-64 overflow-y-auto mb-4 text-sm text-gray-700 whitespace-pre-line", children: iu.photoRelease }),
      /* @__PURE__ */ r.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx(se, { htmlFor: "fullNamePhotoRelease", children: "Full Legal Name *" }),
          /* @__PURE__ */ r.jsx(
            Pe,
            {
              id: "fullNamePhotoRelease",
              type: "text",
              value: v,
              onChange: (W) => x(W.target.value),
              placeholder: "Your full name",
              className: "mt-1",
              required: !0
            }
          )
        ] }),
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx(se, { className: "mb-2 block", children: "Signature *" }),
          /* @__PURE__ */ r.jsx("div", { className: "border-2 border-gray-300 rounded-lg bg-white", children: /* @__PURE__ */ r.jsx(
            Os,
            {
              ref: me,
              onEnd: () => H(!0),
              canvasProps: {
                className: "w-full h-32 rounded-lg"
              }
            }
          ) }),
          /* @__PURE__ */ r.jsxs(
            Ce,
            {
              type: "button",
              variant: "ghost",
              size: "sm",
              className: "mt-2",
              onClick: () => {
                var W;
                (W = me.current) == null || W.clear(), H(!1);
              },
              children: [
                /* @__PURE__ */ r.jsx(Uc, { className: "w-4 h-4 mr-2" }),
                "Clear Signature"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-start gap-3 pt-2", children: [
          /* @__PURE__ */ r.jsx(
            ou,
            {
              id: "agreePhotoRelease",
              checked: C,
              onCheckedChange: (W) => P(W === !0)
            }
          ),
          /* @__PURE__ */ r.jsx(
            se,
            {
              htmlFor: "agreePhotoRelease",
              className: "text-sm font-normal leading-relaxed cursor-pointer",
              children: "I have read and agree to the Photo Release"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r.jsx(
      Ce,
      {
        onClick: X,
        disabled: !J(),
        className: "w-full h-12 bg-[#326389] hover:bg-[#326389]/90 disabled:opacity-50",
        children: "Proceed to Payment"
      }
    )
  ] }) });
}
function G2({
  students: n,
  allClasses: o,
  cartSummary: a,
  onPaymentSubmit: i,
  onPromoCodeValidate: c,
  paymentError: u,
  onBack: f
}) {
  const [m, p] = w.useState("full"), [g, v] = w.useState(!1), [x, b] = w.useState(""), [S, j] = w.useState(!1), [N, C] = w.useState(""), [P, E] = w.useState(""), [O, F] = w.useState(""), [D, Y] = w.useState(""), [H, B] = w.useState(!1), re = () => {
    x.trim() && (c(x), j(!0));
  }, me = (X) => {
    X.preventDefault(), B(!0), i(m, S ? x : void 0);
  }, J = () => a.registrationFee + a.materialsFee + a.lastMonthTuition;
  return /* @__PURE__ */ r.jsx("div", { className: "w-full bg-gray-50 py-8", children: /* @__PURE__ */ r.jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ r.jsxs(
      "button",
      {
        onClick: f,
        className: "flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors",
        children: [
          /* @__PURE__ */ r.jsx(Ya, { className: "w-4 h-4" }),
          /* @__PURE__ */ r.jsx("span", { className: "text-sm font-medium", children: "Back to Waivers" })
        ]
      }
    ),
    /* @__PURE__ */ r.jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ r.jsx("h2", { className: "text-2xl font-bold text-gray-900", children: "Checkout" }),
      /* @__PURE__ */ r.jsx("p", { className: "mt-2 text-gray-600", children: "Review your order and complete payment" })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ r.jsxs(Me, { className: "p-6", children: [
          /* @__PURE__ */ r.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: "Payment Option" }),
          /* @__PURE__ */ r.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ r.jsxs(
              "button",
              {
                type: "button",
                onClick: () => p("full"),
                className: `
                    w-full p-4 rounded-lg border-2 text-left transition-all
                    ${m === "full" ? "border-[#326389] bg-[#326389]/5" : "border-gray-200 hover:border-gray-300"}
                  `,
                children: [
                  /* @__PURE__ */ r.jsxs("div", { className: "flex items-start justify-between", children: [
                    /* @__PURE__ */ r.jsxs("div", { children: [
                      /* @__PURE__ */ r.jsx("p", { className: "font-semibold text-gray-900", children: "Pay in Full" }),
                      /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600 mt-1", children: "Pay entire program cost today" })
                    ] }),
                    m === "full" && /* @__PURE__ */ r.jsx(Ha, { className: "w-5 h-5 text-[#326389]" })
                  ] }),
                  /* @__PURE__ */ r.jsx("p", { className: "text-lg font-bold text-[#326389] mt-2", children: bt(a.total) })
                ]
              }
            ),
            /* @__PURE__ */ r.jsxs(
              "button",
              {
                type: "button",
                onClick: () => p("plan"),
                className: `
                    w-full p-4 rounded-lg border-2 text-left transition-all
                    ${m === "plan" ? "border-[#326389] bg-[#326389]/5" : "border-gray-200 hover:border-gray-300"}
                  `,
                children: [
                  /* @__PURE__ */ r.jsxs("div", { className: "flex items-start justify-between", children: [
                    /* @__PURE__ */ r.jsxs("div", { children: [
                      /* @__PURE__ */ r.jsx("p", { className: "font-semibold text-gray-900", children: "Monthly Payment Plan" }),
                      /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600 mt-1", children: "9-month program (last month prepaid + 8 monthly payments)" })
                    ] }),
                    m === "plan" && /* @__PURE__ */ r.jsx(Ha, { className: "w-5 h-5 text-[#326389]" })
                  ] }),
                  /* @__PURE__ */ r.jsxs("div", { className: "mt-2", children: [
                    /* @__PURE__ */ r.jsxs("p", { className: "text-sm text-gray-700", children: [
                      /* @__PURE__ */ r.jsx("strong", { children: "Today:" }),
                      " ",
                      bt(J())
                    ] }),
                    /* @__PURE__ */ r.jsxs("p", { className: "text-sm text-gray-700", children: [
                      /* @__PURE__ */ r.jsx("strong", { children: "Then:" }),
                      " ",
                      bt(a.monthlyPayments),
                      " × 8 months"
                    ] })
                  ] })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ r.jsxs(Me, { className: "p-6", children: [
          /* @__PURE__ */ r.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: "Order Summary" }),
          /* @__PURE__ */ r.jsxs("div", { className: "space-y-4", children: [
            a.students.map((X) => /* @__PURE__ */ r.jsxs("div", { className: "pb-4 border-b border-gray-200 last:border-0", children: [
              /* @__PURE__ */ r.jsx("p", { className: "font-semibold text-gray-900 mb-2", children: X.studentName }),
              /* @__PURE__ */ r.jsx("div", { className: "space-y-1", children: X.classes.map((W) => /* @__PURE__ */ r.jsxs("div", { className: "flex justify-between text-sm", children: [
                /* @__PURE__ */ r.jsx("span", { className: "text-gray-600", children: W.className }),
                /* @__PURE__ */ r.jsx("span", { className: "text-gray-900 font-medium", children: bt(W.price) })
              ] }, W.classId)) })
            ] }, X.studentId)),
            /* @__PURE__ */ r.jsxs("div", { className: "pt-4 space-y-2", children: [
              /* @__PURE__ */ r.jsxs("div", { className: "flex justify-between text-sm", children: [
                /* @__PURE__ */ r.jsx("span", { className: "text-gray-600", children: "Subtotal" }),
                /* @__PURE__ */ r.jsx("span", { className: "text-gray-900", children: bt(a.subtotal) })
              ] }),
              a.siblingDiscount > 0 && /* @__PURE__ */ r.jsxs("div", { className: "flex justify-between text-sm", children: [
                /* @__PURE__ */ r.jsx("span", { className: "text-green-600", children: "Sibling Discount" }),
                /* @__PURE__ */ r.jsxs("span", { className: "text-green-600", children: [
                  "-",
                  bt(a.siblingDiscount)
                ] })
              ] }),
              a.promoDiscount > 0 && /* @__PURE__ */ r.jsxs("div", { className: "flex justify-between text-sm", children: [
                /* @__PURE__ */ r.jsx("span", { className: "text-green-600", children: "Promo Code Applied" }),
                /* @__PURE__ */ r.jsxs("span", { className: "text-green-600", children: [
                  "-",
                  bt(a.promoDiscount)
                ] })
              ] }),
              /* @__PURE__ */ r.jsxs("div", { className: "flex justify-between text-sm pt-2", children: [
                /* @__PURE__ */ r.jsx("span", { className: "text-gray-600", children: "Registration Fee (per family)" }),
                /* @__PURE__ */ r.jsx("span", { className: "text-gray-900", children: bt(a.registrationFee) })
              ] }),
              /* @__PURE__ */ r.jsxs("div", { className: "flex justify-between text-sm", children: [
                /* @__PURE__ */ r.jsx("span", { className: "text-gray-600", children: "Materials Fee" }),
                /* @__PURE__ */ r.jsx("span", { className: "text-gray-900", children: bt(a.materialsFee) })
              ] }),
              m === "plan" && /* @__PURE__ */ r.jsxs("div", { className: "flex justify-between text-sm", children: [
                /* @__PURE__ */ r.jsx("span", { className: "text-gray-600", children: "Last Month Tuition (prepaid)" }),
                /* @__PURE__ */ r.jsx("span", { className: "text-gray-900", children: bt(a.lastMonthTuition) })
              ] }),
              /* @__PURE__ */ r.jsxs("div", { className: "flex justify-between pt-4 border-t border-gray-200", children: [
                /* @__PURE__ */ r.jsx("span", { className: "font-bold text-gray-900", children: m === "full" ? "Total Due Today" : "Due Today" }),
                /* @__PURE__ */ r.jsx("span", { className: "font-bold text-gray-900 text-lg", children: bt(m === "full" ? a.total : J()) })
              ] }),
              m === "plan" && /* @__PURE__ */ r.jsx("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-3 mt-4", children: /* @__PURE__ */ r.jsxs("p", { className: "text-sm text-blue-900", children: [
                /* @__PURE__ */ r.jsx("strong", { children: "Payment Schedule:" }),
                " After today's payment, you'll be charged",
                " ",
                bt(a.monthlyPayments),
                " on the 6th of each month for 8 months."
              ] }) })
            ] })
          ] })
        ] }),
        g ? /* @__PURE__ */ r.jsx(Me, { className: "p-4", children: /* @__PURE__ */ r.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ r.jsx(
            Pe,
            {
              type: "text",
              placeholder: "Enter promo code",
              value: x,
              onChange: (X) => b(X.target.value.toUpperCase()),
              className: "flex-1"
            }
          ),
          /* @__PURE__ */ r.jsx(
            Ce,
            {
              type: "button",
              variant: "outline",
              onClick: re,
              disabled: !x.trim() || S,
              children: "Apply"
            }
          )
        ] }) }) : /* @__PURE__ */ r.jsxs(
          "button",
          {
            type: "button",
            onClick: () => v(!0),
            className: "text-sm text-[#326389] hover:underline font-medium flex items-center gap-2",
            children: [
              /* @__PURE__ */ r.jsx(Pw, { className: "w-4 h-4" }),
              "Have a promo code?"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsxs(Me, { className: "p-6", children: [
        /* @__PURE__ */ r.jsxs("h3", { className: "text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ r.jsx(Oi, { className: "w-5 h-5" }),
          "Payment Information"
        ] }),
        /* @__PURE__ */ r.jsxs("form", { onSubmit: me, className: "space-y-4", children: [
          /* @__PURE__ */ r.jsxs("div", { children: [
            /* @__PURE__ */ r.jsx(se, { htmlFor: "cardName", children: "Cardholder Name *" }),
            /* @__PURE__ */ r.jsx(
              Pe,
              {
                id: "cardName",
                type: "text",
                value: D,
                onChange: (X) => Y(X.target.value),
                placeholder: "Jane Doe",
                required: !0,
                className: "mt-1"
              }
            )
          ] }),
          /* @__PURE__ */ r.jsxs("div", { children: [
            /* @__PURE__ */ r.jsx(se, { htmlFor: "cardNumber", children: "Card Number *" }),
            /* @__PURE__ */ r.jsx(
              Pe,
              {
                id: "cardNumber",
                type: "text",
                value: N,
                onChange: (X) => {
                  const W = X.target.value.replace(/\s/g, "");
                  /^\d*$/.test(W) && W.length <= 16 && C(W.replace(/(\d{4})/g, "$1 ").trim());
                },
                placeholder: "4242 4242 4242 4242",
                required: !0,
                className: "mt-1",
                maxLength: 19
              }
            )
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ r.jsxs("div", { children: [
              /* @__PURE__ */ r.jsx(se, { htmlFor: "cardExpiry", children: "Expiry Date *" }),
              /* @__PURE__ */ r.jsx(
                Pe,
                {
                  id: "cardExpiry",
                  type: "text",
                  value: P,
                  onChange: (X) => {
                    const W = X.target.value.replace(/\D/g, "");
                    if (W.length <= 4) {
                      const le = W.length >= 2 ? `${W.slice(0, 2)}/${W.slice(2)}` : W;
                      E(le);
                    }
                  },
                  placeholder: "MM/YY",
                  required: !0,
                  className: "mt-1",
                  maxLength: 5
                }
              )
            ] }),
            /* @__PURE__ */ r.jsxs("div", { children: [
              /* @__PURE__ */ r.jsx(se, { htmlFor: "cardCvc", children: "CVC *" }),
              /* @__PURE__ */ r.jsx(
                Pe,
                {
                  id: "cardCvc",
                  type: "text",
                  value: O,
                  onChange: (X) => {
                    const W = X.target.value.replace(/\D/g, "");
                    W.length <= 4 && F(W);
                  },
                  placeholder: "123",
                  required: !0,
                  className: "mt-1",
                  maxLength: 4
                }
              )
            ] })
          ] }),
          u && /* @__PURE__ */ r.jsxs("div", { className: "flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-800", children: [
            /* @__PURE__ */ r.jsx($a, { className: "w-4 h-4 shrink-0 mt-0.5" }),
            /* @__PURE__ */ r.jsxs("div", { children: [
              /* @__PURE__ */ r.jsx("p", { className: "font-semibold", children: "Payment Failed" }),
              /* @__PURE__ */ r.jsx("p", { className: "mt-1", children: u })
            ] })
          ] }),
          /* @__PURE__ */ r.jsx(
            Ce,
            {
              type: "submit",
              className: "w-full h-12 bg-[#326389] hover:bg-[#326389]/90 mt-6",
              disabled: H,
              children: H ? "Processing..." : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                "Pay ",
                bt(m === "full" ? a.total : J()),
                " & Submit Registration"
              ] })
            }
          ),
          /* @__PURE__ */ r.jsx("p", { className: "text-xs text-gray-500 text-center mt-4", children: "Your payment is secured by Stripe. We never store your card details." })
        ] })
      ] }) })
    ] })
  ] }) });
}
function q2({
  confirmation: n,
  onRegisterAnother: o,
  onGoToDashboard: a
}) {
  return /* @__PURE__ */ r.jsx("div", { className: "w-full bg-gray-50 py-12", children: /* @__PURE__ */ r.jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ r.jsx("div", { className: "inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4", children: /* @__PURE__ */ r.jsx(G0, { className: "w-12 h-12 text-green-600" }) }),
      /* @__PURE__ */ r.jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-2", children: "Registration Complete!" }),
      /* @__PURE__ */ r.jsx("p", { className: "text-lg text-gray-600", children: "Your enrollment has been successfully processed" })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex items-start gap-3", children: [
      /* @__PURE__ */ r.jsx(Us, { className: "w-5 h-5 text-blue-600 shrink-0 mt-0.5" }),
      /* @__PURE__ */ r.jsxs("div", { className: "text-sm text-blue-900", children: [
        /* @__PURE__ */ r.jsx("p", { className: "font-semibold", children: "Confirmation email sent" }),
        /* @__PURE__ */ r.jsx("p", { className: "mt-1", children: "A detailed receipt and enrollment information has been sent to your email address." })
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs(Me, { className: "p-6 mb-6", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "flex items-start gap-3 mb-6", children: [
        /* @__PURE__ */ r.jsx(Ba, { className: "w-6 h-6 text-[#326389] shrink-0 mt-1" }),
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx("h2", { className: "text-xl font-semibold text-gray-900", children: "Enrollment & Receipt Summary" }),
          /* @__PURE__ */ r.jsxs("p", { className: "text-sm text-gray-600 mt-1", children: [
            "Confirmation #",
            n.confirmationNumber
          ] })
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx("p", { className: "text-sm font-semibold text-gray-700 mb-2", children: "Students Enrolled" }),
          /* @__PURE__ */ r.jsx("div", { className: "space-y-1", children: n.studentNames.map((i, c) => /* @__PURE__ */ r.jsx("p", { className: "text-gray-900", children: i }, c)) })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "pt-4 border-t border-gray-200", children: [
          /* @__PURE__ */ r.jsx("p", { className: "text-sm font-semibold text-gray-700 mb-2", children: "Classes" }),
          /* @__PURE__ */ r.jsx("div", { className: "space-y-1", children: n.classNames.map((i, c) => /* @__PURE__ */ r.jsx("p", { className: "text-gray-900", children: i }, c)) })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "pt-4 border-t border-gray-200 grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ r.jsxs("div", { children: [
            /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600", children: "Transaction ID" }),
            /* @__PURE__ */ r.jsx("p", { className: "text-gray-900 font-medium", children: n.transactionId })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { children: [
            /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600", children: "Payment Method" }),
            /* @__PURE__ */ r.jsx("p", { className: "text-gray-900 font-medium", children: n.paymentMethod })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { children: [
            /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600", children: "Date" }),
            /* @__PURE__ */ r.jsx("p", { className: "text-gray-900 font-medium", children: new Date(n.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric"
            }) })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { children: [
            /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600", children: "Total Paid" }),
            /* @__PURE__ */ r.jsx("p", { className: "text-gray-900 font-bold text-lg", children: bt(n.totalPaid) })
          ] })
        ] }),
        n.receiptURL && /* @__PURE__ */ r.jsx("div", { className: "pt-4 border-t border-gray-200", children: /* @__PURE__ */ r.jsxs(
          "a",
          {
            href: n.receiptURL,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-[#326389] hover:underline font-medium inline-flex items-center gap-2",
            children: [
              /* @__PURE__ */ r.jsx(Ba, { className: "w-4 h-4" }),
              "Download Receipt (PDF)"
            ]
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs(Me, { className: "p-6 mb-8", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: "What's Next?" }),
      /* @__PURE__ */ r.jsxs("ul", { className: "space-y-3 text-gray-700", children: [
        /* @__PURE__ */ r.jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ r.jsx("div", { className: "w-6 h-6 rounded-full bg-[#326389] text-white flex items-center justify-center shrink-0 text-sm font-semibold", children: "1" }),
          /* @__PURE__ */ r.jsx("p", { children: "Check your email for a detailed confirmation with class schedules and first-day instructions." })
        ] }),
        /* @__PURE__ */ r.jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ r.jsx("div", { className: "w-6 h-6 rounded-full bg-[#326389] text-white flex items-center justify-center shrink-0 text-sm font-semibold", children: "2" }),
          /* @__PURE__ */ r.jsx("p", { children: "Add class dates to your calendar to ensure you don't miss any sessions." })
        ] }),
        /* @__PURE__ */ r.jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ r.jsx("div", { className: "w-6 h-6 rounded-full bg-[#326389] text-white flex items-center justify-center shrink-0 text-sm font-semibold", children: "3" }),
          /* @__PURE__ */ r.jsx("p", { children: "Visit your family dashboard to view enrollment details, update student information, and manage payments." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
      /* @__PURE__ */ r.jsxs(
        Ce,
        {
          variant: "outline",
          onClick: o,
          className: "flex-1 h-12",
          children: [
            /* @__PURE__ */ r.jsx(Ws, { className: "w-4 h-4 mr-2" }),
            "Register Another Child"
          ]
        }
      ),
      /* @__PURE__ */ r.jsxs(
        Ce,
        {
          onClick: a,
          className: "flex-1 h-12 bg-[#326389] hover:bg-[#326389]/90",
          children: [
            /* @__PURE__ */ r.jsx(yp, { className: "w-4 h-4 mr-2" }),
            "Go to Family Dashboard"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ r.jsxs("p", { className: "text-center text-sm text-gray-500 mt-8", children: [
      "Questions? Contact us at",
      " ",
      /* @__PURE__ */ r.jsx("a", { href: "mailto:support@newhebrewprogram.org", className: "text-[#326389] hover:underline", children: "support@newhebrewprogram.org" })
    ] })
  ] }) });
}
const La = {
  authComplete: (n) => {
    window.dispatchEvent(new CustomEvent("auth:complete", { detail: n }));
  },
  studentAdded: (n) => {
    window.dispatchEvent(new CustomEvent("student:added", { detail: n }));
  },
  cartUpdated: (n) => {
    window.dispatchEvent(new CustomEvent("cart:updated", { detail: n }));
  },
  waiverSigned: (n) => {
    window.dispatchEvent(new CustomEvent("waivers:signed", { detail: n }));
  },
  paymentInitiate: (n) => {
    window.dispatchEvent(new CustomEvent("payment:initiate", { detail: n }));
  },
  paymentSuccess: (n) => {
    window.dispatchEvent(new CustomEvent("payment:success", { detail: n }));
  },
  promoCodeValidate: (n) => {
    window.dispatchEvent(new CustomEvent("promo:validate", { detail: { code: n } }));
  }
}, Rs = {
  sessionLoaded: (n) => {
    const o = (a) => n(a.detail);
    return window.addEventListener("session:loaded", o), () => window.removeEventListener("session:loaded", o);
  },
  capacityUpdated: (n) => {
    const o = (a) => n(a.detail);
    return window.addEventListener("capacity:updated", o), () => window.removeEventListener("capacity:updated", o);
  },
  capacityReleased: (n) => {
    const o = (a) => n(a.detail);
    return window.addEventListener("capacity:released", o), () => window.removeEventListener("capacity:released", o);
  },
  stripeSessionReady: (n) => {
    const o = (a) => n(a.detail);
    return window.addEventListener("stripe:sessionReady", o), () => window.removeEventListener("stripe:sessionReady", o);
  },
  enrollmentConfirmed: (n) => {
    const o = (a) => n(a.detail);
    return window.addEventListener("enrollment:confirmed", o), () => window.removeEventListener("enrollment:confirmed", o);
  },
  paymentFailed: (n) => {
    const o = (a) => n(a.detail);
    return window.addEventListener("payment:failed", o), () => window.removeEventListener("payment:failed", o);
  },
  promoValidated: (n) => {
    const o = (a) => n(a.detail);
    return window.addEventListener("promo:validated", o), () => window.removeEventListener("promo:validated", o);
  }
}, Jh = 1e4;
function Ki(n, o) {
  return new Promise((a, i) => {
    const c = crypto.randomUUID(), u = `wix:response:${c}`, f = setTimeout(() => {
      window.removeEventListener(u, m), i(new Error(`Wix request "${n}" timed out after ${Jh}ms`));
    }, Jh), m = (p) => {
      clearTimeout(f), window.removeEventListener(u, m);
      const { data: g, error: v } = p.detail;
      v ? i(new Error(v)) : a(g);
    };
    window.addEventListener(u, m), window.dispatchEvent(
      new CustomEvent("wix:request", {
        detail: { eventName: n, payload: o, requestId: c }
      })
    );
  });
}
function Y2(n) {
  return Ki("getClasses", { seasonId: n });
}
function K2(n, o) {
  return Ki("submitRegistration", { parent: n, students: o });
}
function Q2(n) {
  return Ki("calculateCheckout", n);
}
function X2() {
  return Ki("getAdminOverview", {});
}
const Z2 = [
  {
    id: "cls_1",
    title: "Hebrew for Beginners",
    proficiency: "non-speaker",
    schedule: "Monday & Wednesday",
    location: "Main Campus - Room 101",
    spotsRemaining: 8,
    totalCapacity: 12,
    price: 450,
    grade: "2",
    teacher: "Morah Sarah",
    description: "Introduction to Hebrew alphabet and basic vocabulary",
    startTime: "16:00",
    endTime: "17:00",
    days: ["Monday", "Wednesday"]
  },
  {
    id: "cls_2",
    title: "Hebrew Conversation Club",
    proficiency: "speaker",
    schedule: "Tuesday & Thursday",
    location: "Main Campus - Room 102",
    spotsRemaining: 5,
    totalCapacity: 10,
    price: 480,
    grade: "2",
    teacher: "Moreh David",
    description: "Practice conversational Hebrew in a fun, interactive environment",
    startTime: "16:30",
    endTime: "17:30",
    days: ["Tuesday", "Thursday"]
  },
  {
    id: "cls_3",
    title: "Reading Adventures in Hebrew",
    proficiency: "non-speaker",
    schedule: "Monday",
    location: "Downtown Center - Room A",
    spotsRemaining: 3,
    totalCapacity: 15,
    price: 420,
    grade: "3",
    teacher: "Morah Rachel",
    description: "Build reading comprehension through stories",
    startTime: "15:00",
    endTime: "16:30",
    days: ["Monday"]
  },
  {
    id: "cls_4",
    title: "Hebrew Through Music & Art",
    proficiency: "non-speaker",
    schedule: "Friday",
    location: "Main Campus - Art Studio",
    spotsRemaining: 12,
    totalCapacity: 15,
    price: 400,
    grade: "1",
    teacher: "Morah Leah",
    description: "Learn Hebrew through creative expression",
    startTime: "14:00",
    endTime: "15:30",
    days: ["Friday"]
  }
];
function J2() {
  const [n, o] = w.useState(1), [a, i] = w.useState([]), [c, u] = w.useState(!1), [f, m] = w.useState({
    parentId: "",
    email: "",
    isReturning: !1,
    students: [],
    waivers: {
      medical: { signed: !1 },
      liability: { signed: !1 },
      media: { signed: !1 }
    }
  }), [p, g] = w.useState(0), [v, x] = w.useState([]), [b, S] = w.useState({
    subtotal: 0,
    siblingDiscount: 0,
    promoDiscount: 0,
    total: 0,
    registrationFee: 75,
    materialsFee: 50,
    lastMonthTuition: 0,
    monthlyPayments: 0,
    students: []
  }), [j, N] = w.useState(), [C, P] = w.useState();
  w.useEffect(() => {
    async function U() {
      u(!0);
      try {
        const _ = (await Y2("season-2026")).map((z) => {
          var oe, ue;
          return {
            id: z._id,
            title: z.title,
            proficiency: ((oe = z.proficiency) == null ? void 0 : oe.toLowerCase()) || "non-speaker",
            schedule: `${(ue = z.daysOfWeek) == null ? void 0 : ue.join(" & ")} ${z.startTime}`,
            location: z.location || "TBD",
            spotsRemaining: z.spotsRemaining || 0,
            totalCapacity: 12,
            price: z.price,
            grade: z.gradeLevel || "1",
            teacher: z.teacher || "Morah",
            description: "",
            startTime: z.startTime || "",
            endTime: z.endTime || "",
            days: z.daysOfWeek || []
          };
        });
        x(_);
      } catch {
        qt.error("Failed to load classes from backend"), x(Z2);
      } finally {
        u(!1);
      }
    }
    U();
  }, []);
  const E = (U, G) => {
    a.includes(U) || i((_) => [..._, U]), o(G);
  }, O = (U) => {
    o(U);
  };
  w.useEffect(() => {
    const U = Rs.sessionLoaded((ce) => {
      m((je) => ({
        ...je,
        parentId: ce.memberId,
        students: ce.existingStudents
      }));
    }), G = Rs.capacityUpdated((ce) => {
      x(
        (je) => je.map(
          (K) => K.id === ce.classId ? { ...K, spotsRemaining: ce.spotsRemaining } : K
        )
      );
    }), _ = Rs.capacityReleased((ce) => {
      qt.warning("Reservation Expired", {
        description: ce.message
      });
    }), z = Rs.enrollmentConfirmed((ce) => {
      P(ce), o("success");
    }), oe = Rs.paymentFailed((ce) => {
      N(ce.error), qt.error("Payment Failed", {
        description: ce.error
      });
    }), ue = Rs.promoValidated((ce) => {
      ce.valid ? (S((je) => ({
        ...je,
        promoDiscount: ce.discount,
        total: je.subtotal - je.siblingDiscount - ce.discount
      })), qt.success("Promo code applied!")) : qt.error("Invalid promo code");
    });
    return () => {
      U(), G(), _(), z(), oe(), ue();
    };
  }, []), w.useEffect(() => {
    async function U() {
      if (f.students.length === 0) {
        S({
          subtotal: 0,
          siblingDiscount: 0,
          promoDiscount: 0,
          total: 0,
          registrationFee: 75,
          materialsFee: 0,
          lastMonthTuition: 0,
          monthlyPayments: 0,
          students: []
        });
        return;
      }
      const G = f.students.reduce((oe, ue) => oe + ue.selectedClasses.reduce((ce, je) => {
        const K = v.find((ge) => ge.id === je.classId);
        return ce + ((K == null ? void 0 : K.price) || 0);
      }, 0), 0), z = f.students.filter(
        (oe) => oe.selectedClasses.length > 0
      ).length > 1 ? G * 0.1 : 0;
      try {
        const oe = {
          students: f.students.map((ce) => ({
            studentId: ce.id,
            classes: ce.selectedClasses.map((je) => je.classId)
          }))
        }, ue = await Q2(oe);
        S({
          subtotal: G,
          siblingDiscount: z,
          promoDiscount: b.promoDiscount || 0,
          total: ue.payInFullTotal,
          registrationFee: 75,
          materialsFee: f.students.length * 25,
          lastMonthTuition: ue.lastMonthTuition,
          monthlyPayments: ue.monthlyPayments,
          students: f.students.map((ce) => ({
            studentId: ce.id,
            studentName: `${ce.firstName} ${ce.lastName}`,
            classes: ce.selectedClasses.map((je) => {
              const K = v.find((ge) => ge.id === je.classId);
              return {
                classId: je.classId,
                className: (K == null ? void 0 : K.title) || "",
                price: (K == null ? void 0 : K.price) || 0
              };
            })
          }))
        });
      } catch {
        const ue = G - z - (b.promoDiscount || 0), ce = Math.ceil(ue / 9), je = f.students.length * 25;
        S({
          subtotal: G,
          siblingDiscount: z,
          promoDiscount: b.promoDiscount || 0,
          total: ue + 75 + je,
          registrationFee: 75,
          materialsFee: je,
          lastMonthTuition: ce,
          monthlyPayments: ce,
          students: f.students.map((K) => ({
            studentId: K.id,
            studentName: `${K.firstName} ${K.lastName}`,
            classes: K.selectedClasses.map((ge) => {
              const Ee = v.find((Ae) => Ae.id === ge.classId);
              return {
                classId: ge.classId,
                className: (Ee == null ? void 0 : Ee.title) || "",
                price: (Ee == null ? void 0 : Ee.price) || 0
              };
            })
          }))
        });
      }
    }
    U();
  }, [f.students, v, b.promoDiscount]);
  const F = (U) => {
    m((G) => ({
      ...G,
      parentId: U.memberId,
      email: U.email,
      isReturning: U.isReturning
    })), La.authComplete(U), E(0, 1);
  }, D = (U, G = !1) => {
    if (m((_) => ({
      ..._,
      students: [..._.students, U]
    })), La.studentAdded({ student: U }), G) {
      g(f.students.length);
      return;
    }
    g(f.students.length), E(1, "1b");
  }, Y = (U, G) => {
    m((_) => ({
      ..._,
      students: _.students.map(
        (z) => z.id === U ? { ...z, additionalQuestions: G } : z
      )
    })), o(1);
  }, H = (U, G) => {
    m((_) => ({
      ..._,
      students: _.students.map((z) => z.id === U ? G : z)
    }));
  }, B = (U) => {
    m((G) => ({
      ...G,
      students: G.students.filter((_) => _.id !== U)
    })), f.students.length === 1 && g(0);
  }, re = (U, G) => {
    m((_) => ({
      ..._,
      students: _.students.map(
        (z) => z.id === U ? {
          ...z,
          selectedClasses: [
            ...z.selectedClasses,
            { classId: G, reservationExpiry: Date.now() + 900 * 1e3 }
          ]
        } : z
      )
    })), La.cartUpdated({
      studentId: U,
      classIds: [G],
      subtotal: b.subtotal
    });
  }, me = (U, G) => {
    m((_) => ({
      ..._,
      students: _.students.map(
        (z) => z.id === U ? {
          ...z,
          selectedClasses: z.selectedClasses.filter((oe) => oe.classId !== G)
        } : z
      )
    }));
  }, J = () => {
    o(1);
  }, X = (U) => {
    m((G) => ({
      ...G,
      medicalNotes: U.medicalNotes,
      waiverSignatures: U.signatures
    }));
  }, W = (U, G) => {
    N(void 0), La.paymentInitiate({
      cartSummary: b,
      paymentMethod: U
    });
  }, le = (U) => {
    m((_) => ({
      ..._,
      students: _.students.map((z) => ({
        ...z,
        selectedClasses: z.selectedClasses.filter((oe) => oe.classId !== U)
      }))
    }));
    const G = v.find((_) => _.id === U);
    qt.warning("Reservation Expired", {
      description: `Your spot in "${G == null ? void 0 : G.title}" has been released. Please re-add if still available.`
    });
  }, ye = (U) => {
    La.promoCodeValidate(U);
  }, ae = () => {
    m((U) => ({
      ...U,
      students: [],
      waivers: {
        medical: { signed: !1 },
        liability: { signed: !1 },
        media: { signed: !1 }
      }
    })), o(1);
  }, de = () => {
    window.location.href = "/dashboard";
  }, M = f.students[p];
  return /* @__PURE__ */ r.jsxs("div", { className: "bg-gray-50 w-full", children: [
    /* @__PURE__ */ r.jsx(
      Dw,
      {
        currentStage: n,
        completedStages: a,
        onStageClick: O
      }
    ),
    c && /* @__PURE__ */ r.jsx("div", { className: "fixed inset-0 bg-white/50 z-50 flex items-center justify-center", children: /* @__PURE__ */ r.jsx("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-[#326389]" }) }),
    n === 0 && /* @__PURE__ */ r.jsx(b1, { onAuthComplete: F }),
    n === 1 && /* @__PURE__ */ r.jsx(
      Mj,
      {
        studentsInSession: f.students,
        onStudentAdded: D,
        onStudentUpdated: H,
        onStudentDeleted: B,
        onContinue: async () => {
          u(!0);
          try {
            await K2(
              { email: f.email, wixMemberId: f.parentId },
              f.students.map((U) => ({
                firstName: U.firstName,
                lastName: U.lastName,
                dob: U.dob,
                grade: U.grade,
                medicalNotes: U.medicalNotes
              }))
            ), E(1, 2);
          } catch {
            qt.error("Failed to sync student data. Please try again.");
          } finally {
            u(!1);
          }
        },
        onBack: f.students.length > 0 ? () => O(2) : void 0
      }
    ),
    n === "1b" && M && /* @__PURE__ */ r.jsx(
      c2,
      {
        student: M,
        onQuestionsComplete: Y,
        onBack: () => O(1)
      }
    ),
    n === 2 && M && /* @__PURE__ */ r.jsx(
      w2,
      {
        students: f.students,
        currentStudent: M,
        allClasses: v,
        onClassSelected: re,
        onClassRemoved: me,
        onContinue: () => E(2, 3),
        onAddAnotherStudent: J,
        onCapacityExpired: le,
        onBack: () => O(1)
      }
    ),
    n === 3 && /* @__PURE__ */ r.jsx(
      H2,
      {
        students: f.students,
        onWaiversSigned: X,
        onContinue: () => E(3, 4),
        onBack: () => O(2)
      }
    ),
    n === 4 && /* @__PURE__ */ r.jsx(
      G2,
      {
        students: f.students,
        allClasses: v,
        cartSummary: b,
        onPaymentSubmit: W,
        onPromoCodeValidate: ye,
        paymentError: j,
        onBack: () => O(3)
      }
    ),
    n === "success" && C && /* @__PURE__ */ r.jsx(
      q2,
      {
        confirmation: C,
        onRegisterAnother: ae,
        onGoToDashboard: de
      }
    )
  ] });
}
const ep = [
  { id: "dashboard", label: "Dashboard", icon: yp },
  { id: "register", label: "Register a New Sibling", icon: Ws },
  { id: "payment", label: "Payment Methods", icon: Oi },
  { id: "contact", label: "Contact School", icon: Us }
];
function eS({ children: n, currentView: o, onNavigate: a, parentName: i = "Maya" }) {
  var g;
  const [c, u] = w.useState(!1), f = (v) => {
    a(v), u(!1);
  }, m = ((g = ep.find((v) => v.id === o)) == null ? void 0 : g.label) ?? "Dashboard", p = () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("div", { className: "p-6 border-b border-gray-200", children: [
      /* @__PURE__ */ r.jsx("h1", { className: "text-xl font-bold text-[#326389]", children: "The New Hebrew Program" }),
      /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600 mt-1", children: "Family Portal" })
    ] }),
    /* @__PURE__ */ r.jsx("nav", { className: "flex-1 p-4", children: /* @__PURE__ */ r.jsx("ul", { className: "space-y-1", children: ep.map((v) => {
      const x = v.icon, b = o === v.id;
      return /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsxs(
        "button",
        {
          onClick: () => f(v.id),
          className: `
                    w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all
                    ${b ? "bg-[#326389] text-white shadow-sm" : "text-gray-700 hover:bg-gray-100"}
                  `,
          children: [
            /* @__PURE__ */ r.jsx(x, { className: "w-5 h-5 flex-shrink-0" }),
            /* @__PURE__ */ r.jsx("span", { children: v.label })
          ]
        }
      ) }, v.id);
    }) }) }),
    /* @__PURE__ */ r.jsxs("div", { className: "p-4 border-t border-gray-200", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-3 px-4 py-3", children: [
        /* @__PURE__ */ r.jsx("div", { className: "w-10 h-10 rounded-full bg-[#326389] flex items-center justify-center text-white font-semibold flex-shrink-0", children: i.charAt(0).toUpperCase() }),
        /* @__PURE__ */ r.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ r.jsx("p", { className: "text-sm font-medium text-gray-900 truncate", children: i }),
          /* @__PURE__ */ r.jsx("p", { className: "text-xs text-gray-600", children: "Parent Account" })
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("button", { className: "w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors mt-2", children: [
        /* @__PURE__ */ r.jsx(wp, { className: "w-4 h-4" }),
        /* @__PURE__ */ r.jsx("span", { children: "Log Out" })
      ] })
    ] })
  ] });
  return /* @__PURE__ */ r.jsxs("div", { className: "w-full bg-gray-50 flex", children: [
    /* @__PURE__ */ r.jsx("aside", { className: "hidden md:flex w-64 flex-shrink-0 bg-white border-r border-gray-200 flex-col", children: /* @__PURE__ */ r.jsx(p, {}) }),
    c && /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "fixed inset-0 bg-black/50 z-40 md:hidden",
        onClick: () => u(!1)
      }
    ),
    /* @__PURE__ */ r.jsxs(
      "aside",
      {
        className: `
          fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 flex flex-col
          transform transition-transform duration-200 ease-in-out md:hidden
          ${c ? "translate-x-0" : "-translate-x-full"}
        `,
        children: [
          /* @__PURE__ */ r.jsx("div", { className: "absolute top-3 right-3", children: /* @__PURE__ */ r.jsx(
            "button",
            {
              onClick: () => u(!1),
              className: "p-1.5 rounded-lg hover:bg-gray-100",
              "aria-label": "Close menu",
              children: /* @__PURE__ */ r.jsx(Lu, { className: "w-5 h-5 text-gray-600" })
            }
          ) }),
          /* @__PURE__ */ r.jsx(p, {})
        ]
      }
    ),
    /* @__PURE__ */ r.jsxs("div", { className: "flex-1 flex flex-col min-w-0", children: [
      /* @__PURE__ */ r.jsxs("header", { className: "md:hidden flex items-center gap-3 px-4 py-3 bg-white border-b border-gray-200", children: [
        /* @__PURE__ */ r.jsx(
          "button",
          {
            onClick: () => u(!0),
            className: "p-1.5 rounded-lg hover:bg-gray-100",
            "aria-label": "Open menu",
            children: /* @__PURE__ */ r.jsx(bp, { className: "w-5 h-5 text-gray-700" })
          }
        ),
        /* @__PURE__ */ r.jsx("h2", { className: "text-sm font-semibold text-gray-900", children: m })
      ] }),
      /* @__PURE__ */ r.jsx("main", { className: "flex-1 overflow-y-auto", children: n })
    ] })
  ] });
}
const tS = [
  {
    id: "1",
    name: "Sarah Cohen",
    grade: "2",
    enrolledClass: "Hebrew Conversation Club",
    teacher: "Moreh David",
    schedule: "Tuesdays & Thursdays, 4:30 PM - 5:30 PM",
    location: "Main Campus - Room 102"
  },
  {
    id: "2",
    name: "Benjamin Cohen",
    grade: "4",
    enrolledClass: "Reading Adventures in Hebrew",
    teacher: "Morah Rachel",
    schedule: "Mondays, 3:00 PM - 4:30 PM",
    location: "Downtown Center - Room A"
  }
], nS = [
  { title: "Registration Receipt - September 2025", date: "Sept 1, 2025", url: "#" },
  { title: "Tax Form 2025", date: "Jan 15, 2026", url: "#" },
  { title: "Enrollment Confirmation", date: "Aug 20, 2025", url: "#" },
  { title: "Class Schedule 2025-2026", date: "Aug 20, 2025", url: "#" }
];
function rS({ parentName: n = "Maya" }) {
  const [o, a] = w.useState(null);
  return /* @__PURE__ */ r.jsxs("div", { className: "p-8 space-y-8", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "bg-gradient-to-r from-[#326389] to-[#4a7ba7] text-white rounded-xl p-8 shadow-lg", children: [
      /* @__PURE__ */ r.jsxs("h1", { className: "text-4xl font-bold mb-2", children: [
        "שלום, ",
        n,
        "!"
      ] }),
      /* @__PURE__ */ r.jsx("p", { className: "text-lg text-blue-100", children: "Welcome back to your family dashboard" })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-4", children: "My Students" }),
          /* @__PURE__ */ r.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: tS.map((u) => /* @__PURE__ */ r.jsxs(Me, { className: "hover:shadow-lg transition-shadow", children: [
            /* @__PURE__ */ r.jsx(ot, { className: "pb-3", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-start justify-between", children: [
              /* @__PURE__ */ r.jsxs("div", { children: [
                /* @__PURE__ */ r.jsx(it, { className: "text-xl", children: u.name }),
                /* @__PURE__ */ r.jsxs("p", { className: "text-sm text-gray-600 mt-1", children: [
                  "Grade ",
                  u.grade
                ] })
              ] }),
              /* @__PURE__ */ r.jsx("div", { className: "w-12 h-12 rounded-full bg-[#326389] flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ r.jsx("span", { className: "text-white font-bold text-sm", children: u.name.split(" ").map((f) => f[0]).join("").slice(0, 2) }) })
            ] }) }),
            /* @__PURE__ */ r.jsxs(Ke, { className: "space-y-3", children: [
              /* @__PURE__ */ r.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ r.jsx("div", { className: "text-sm font-medium text-gray-700", children: "Enrolled Class" }),
                /* @__PURE__ */ r.jsx("div", { className: "text-base text-gray-900", children: u.enrolledClass })
              ] }),
              /* @__PURE__ */ r.jsx(
                Ce,
                {
                  onClick: () => a(u),
                  variant: "outline",
                  className: "w-full border-[#326389] text-[#326389] hover:bg-[#326389] hover:text-white",
                  children: "View Class Details"
                }
              )
            ] })
          ] }, u.id)) })
        ] }),
        /* @__PURE__ */ r.jsxs(Me, { children: [
          /* @__PURE__ */ r.jsx(ot, { children: /* @__PURE__ */ r.jsx(it, { children: "Documents & Receipts" }) }),
          /* @__PURE__ */ r.jsx(Ke, { children: /* @__PURE__ */ r.jsx("div", { className: "space-y-3", children: nS.map((u, f) => /* @__PURE__ */ r.jsxs(
            "div",
            {
              className: "flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors",
              children: [
                /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ r.jsx("div", { className: "w-10 h-10 rounded-lg bg-[#326389] bg-opacity-10 flex items-center justify-center", children: /* @__PURE__ */ r.jsx(du, { className: "w-5 h-5 text-[#326389]" }) }),
                  /* @__PURE__ */ r.jsxs("div", { children: [
                    /* @__PURE__ */ r.jsx("p", { className: "text-sm font-medium text-gray-900", children: u.title }),
                    /* @__PURE__ */ r.jsx("p", { className: "text-xs text-gray-600", children: u.date })
                  ] })
                ] }),
                /* @__PURE__ */ r.jsx(
                  Ce,
                  {
                    size: "sm",
                    variant: "ghost",
                    className: "text-[#326389] hover:text-[#2a5474]",
                    onClick: () => window.open(u.url, "_blank"),
                    children: /* @__PURE__ */ r.jsx(du, { className: "w-4 h-4" })
                  }
                )
              ]
            },
            f
          )) }) })
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ r.jsxs(Me, { className: "border-2 border-[#326389] shadow-lg", children: [
          /* @__PURE__ */ r.jsx(ot, { className: "bg-gradient-to-br from-[#326389] to-[#4a7ba7] text-white rounded-t-lg", children: /* @__PURE__ */ r.jsxs(it, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ r.jsx(bi, { className: "w-5 h-5" }),
            "Next Payment"
          ] }) }),
          /* @__PURE__ */ r.jsxs(Ke, { className: "pt-6 space-y-4", children: [
            /* @__PURE__ */ r.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2 text-gray-700", children: [
                /* @__PURE__ */ r.jsx(Tu, { className: "w-4 h-4 text-[#326389]" }),
                /* @__PURE__ */ r.jsx("span", { className: "text-sm font-medium", children: "Due Date" })
              ] }),
              /* @__PURE__ */ r.jsx("p", { className: "text-2xl font-bold text-gray-900", children: "May 6, 2026" })
            ] }),
            /* @__PURE__ */ r.jsxs("div", { className: "space-y-3 pt-4 border-t border-gray-200", children: [
              /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2 text-gray-700", children: [
                /* @__PURE__ */ r.jsx(bi, { className: "w-4 h-4 text-[#326389]" }),
                /* @__PURE__ */ r.jsx("span", { className: "text-sm font-medium", children: "Amount" })
              ] }),
              /* @__PURE__ */ r.jsx("p", { className: "text-3xl font-bold text-[#326389]", children: "$240.00" })
            ] }),
            /* @__PURE__ */ r.jsxs("div", { className: "pt-4 border-t border-gray-200", children: [
              /* @__PURE__ */ r.jsxs(Wr, { className: "bg-green-100 text-green-700 hover:bg-green-100 px-3 py-1", children: [
                /* @__PURE__ */ r.jsx(uu, { className: "w-4 h-4 mr-1" }),
                "Auto-pay is ON"
              ] }),
              /* @__PURE__ */ r.jsx("p", { className: "text-xs text-gray-600 mt-2", children: "Payment will be processed automatically on the due date" })
            ] }),
            /* @__PURE__ */ r.jsx(Ce, { className: "w-full bg-[#326389] hover:bg-[#2a5474] mt-4", children: "View Payment History" })
          ] })
        ] }),
        /* @__PURE__ */ r.jsxs(Me, { children: [
          /* @__PURE__ */ r.jsx(ot, { children: /* @__PURE__ */ r.jsx(it, { children: "Quick Actions" }) }),
          /* @__PURE__ */ r.jsxs(Ke, { className: "space-y-2", children: [
            /* @__PURE__ */ r.jsxs(Ce, { variant: "outline", className: "w-full justify-start", children: [
              /* @__PURE__ */ r.jsx(Ws, { className: "w-4 h-4 mr-2" }),
              "Register Another Child"
            ] }),
            /* @__PURE__ */ r.jsxs(Ce, { variant: "outline", className: "w-full justify-start", children: [
              /* @__PURE__ */ r.jsx(Oi, { className: "w-4 h-4 mr-2" }),
              "Update Payment Method"
            ] }),
            /* @__PURE__ */ r.jsxs(Ce, { variant: "outline", className: "w-full justify-start", children: [
              /* @__PURE__ */ r.jsx(Us, { className: "w-4 h-4 mr-2" }),
              "Contact the School"
            ] })
          ] })
        ] })
      ] })
    ] }),
    o && /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4",
        onClick: () => a(null),
        children: /* @__PURE__ */ r.jsxs(Me, { className: "w-full max-w-lg", onClick: (u) => u.stopPropagation(), children: [
          /* @__PURE__ */ r.jsxs(ot, { className: "bg-gradient-to-r from-[#326389] to-[#4a7ba7] text-white rounded-t-lg", children: [
            /* @__PURE__ */ r.jsx(it, { children: o.enrolledClass }),
            /* @__PURE__ */ r.jsxs("p", { className: "text-sm text-blue-100 mt-1", children: [
              o.name,
              " - Grade ",
              o.grade
            ] })
          ] }),
          /* @__PURE__ */ r.jsxs(Ke, { className: "pt-6 space-y-4", children: [
            /* @__PURE__ */ r.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ r.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ r.jsx("div", { className: "w-10 h-10 rounded-lg bg-[#326389] bg-opacity-10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ r.jsx(Fi, { className: "w-5 h-5 text-[#326389]" }) }),
                /* @__PURE__ */ r.jsxs("div", { children: [
                  /* @__PURE__ */ r.jsx("p", { className: "text-sm font-medium text-gray-600", children: "Teacher" }),
                  /* @__PURE__ */ r.jsx("p", { className: "text-base text-gray-900", children: o.teacher })
                ] })
              ] }),
              /* @__PURE__ */ r.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ r.jsx("div", { className: "w-10 h-10 rounded-lg bg-[#326389] bg-opacity-10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ r.jsx(Ls, { className: "w-5 h-5 text-[#326389]" }) }),
                /* @__PURE__ */ r.jsxs("div", { children: [
                  /* @__PURE__ */ r.jsx("p", { className: "text-sm font-medium text-gray-600", children: "Schedule" }),
                  /* @__PURE__ */ r.jsx("p", { className: "text-base text-gray-900", children: o.schedule })
                ] })
              ] }),
              /* @__PURE__ */ r.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ r.jsx("div", { className: "w-10 h-10 rounded-lg bg-[#326389] bg-opacity-10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ r.jsxs("svg", { className: "w-5 h-5 text-[#326389]", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: [
                  /* @__PURE__ */ r.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" }),
                  /* @__PURE__ */ r.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z" })
                ] }) }),
                /* @__PURE__ */ r.jsxs("div", { children: [
                  /* @__PURE__ */ r.jsx("p", { className: "text-sm font-medium text-gray-600", children: "Location" }),
                  /* @__PURE__ */ r.jsx("p", { className: "text-base text-gray-900", children: o.location })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ r.jsxs("div", { className: "flex gap-2 pt-4 border-t border-gray-200", children: [
              /* @__PURE__ */ r.jsx(Ce, { variant: "outline", className: "flex-1", onClick: () => a(null), children: "Close" }),
              /* @__PURE__ */ r.jsx(Ce, { className: "flex-1 bg-[#326389] hover:bg-[#2a5474]", children: "Contact Teacher" })
            ] })
          ] })
        ] })
      }
    )
  ] });
}
function sS() {
  return /* @__PURE__ */ r.jsxs("div", { className: "p-8 space-y-6", children: [
    /* @__PURE__ */ r.jsxs("div", { children: [
      /* @__PURE__ */ r.jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "Register a New Sibling" }),
      /* @__PURE__ */ r.jsx("p", { className: "text-gray-600 mt-2", children: "Add another child to your family account" })
    ] }),
    /* @__PURE__ */ r.jsx(Me, { children: /* @__PURE__ */ r.jsxs(Ke, { className: "p-12 text-center", children: [
      /* @__PURE__ */ r.jsx("div", { className: "w-16 h-16 rounded-full bg-[#326389] bg-opacity-10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ r.jsx(Ws, { className: "w-8 h-8 text-[#326389]" }) }),
      /* @__PURE__ */ r.jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: "Start New Registration" }),
      /* @__PURE__ */ r.jsx("p", { className: "text-gray-600 mb-6 max-w-md mx-auto", children: "Click below to begin the registration process for a new student. You'll automatically receive a 10% sibling discount!" }),
      /* @__PURE__ */ r.jsx(Ce, { className: "bg-[#326389] hover:bg-[#2a5474]", children: "Begin Registration Process" })
    ] }) }),
    /* @__PURE__ */ r.jsxs(Me, { children: [
      /* @__PURE__ */ r.jsx(ot, { children: /* @__PURE__ */ r.jsx(it, { children: "Sibling Discount" }) }),
      /* @__PURE__ */ r.jsx(Ke, { children: /* @__PURE__ */ r.jsx("div", { className: "bg-green-50 border border-green-200 rounded-lg p-4", children: /* @__PURE__ */ r.jsxs("p", { className: "text-sm text-green-800", children: [
        /* @__PURE__ */ r.jsx("strong", { children: "Great news!" }),
        " When you enroll 2 or more students, you'll automatically receive a 10% discount on total tuition costs."
      ] }) }) })
    ] })
  ] });
}
const aS = [
  {
    id: "1",
    type: "Visa",
    last4: "4242",
    expiryMonth: "12",
    expiryYear: "2028",
    isDefault: !0,
    isAutoPay: !0
  },
  {
    id: "2",
    type: "Mastercard",
    last4: "5555",
    expiryMonth: "06",
    expiryYear: "2027",
    isDefault: !1,
    isAutoPay: !1
  }
];
function oS() {
  return /* @__PURE__ */ r.jsxs("div", { className: "p-8 space-y-6", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "Payment Methods" }),
        /* @__PURE__ */ r.jsx("p", { className: "text-gray-600 mt-2", children: "Manage your payment cards and auto-pay settings" })
      ] }),
      /* @__PURE__ */ r.jsxs(Ce, { className: "bg-[#326389] hover:bg-[#2a5474] gap-2", children: [
        /* @__PURE__ */ r.jsx(Ts, { className: "w-4 h-4" }),
        "Add Payment Method"
      ] })
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: aS.map((n) => /* @__PURE__ */ r.jsxs(Me, { className: n.isDefault ? "border-2 border-[#326389]" : "", children: [
      /* @__PURE__ */ r.jsx(ot, { children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-start justify-between", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ r.jsx("div", { className: "w-12 h-12 rounded-lg bg-[#326389] bg-opacity-10 flex items-center justify-center", children: /* @__PURE__ */ r.jsx(Oi, { className: "w-6 h-6 text-[#326389]" }) }),
          /* @__PURE__ */ r.jsxs("div", { children: [
            /* @__PURE__ */ r.jsx(it, { className: "text-lg", children: n.type }),
            /* @__PURE__ */ r.jsxs("p", { className: "text-sm text-gray-600", children: [
              "•••• ",
              n.last4
            ] })
          ] })
        ] }),
        n.isDefault && /* @__PURE__ */ r.jsx(Wr, { className: "bg-[#326389] text-white hover:bg-[#326389]", children: "Default" })
      ] }) }),
      /* @__PURE__ */ r.jsxs(Ke, { className: "space-y-4", children: [
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600", children: "Expires" }),
          /* @__PURE__ */ r.jsxs("p", { className: "text-base font-medium text-gray-900", children: [
            n.expiryMonth,
            "/",
            n.expiryYear
          ] })
        ] }),
        n.isAutoPay && /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg", children: [
          /* @__PURE__ */ r.jsx(uu, { className: "w-4 h-4 text-green-600" }),
          /* @__PURE__ */ r.jsx("span", { className: "text-sm text-green-800 font-medium", children: "Auto-pay enabled" })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "flex gap-2 pt-2 border-t border-gray-200", children: [
          /* @__PURE__ */ r.jsx(Ce, { variant: "outline", size: "sm", className: "flex-1", children: "Edit" }),
          !n.isDefault && /* @__PURE__ */ r.jsx(Ce, { variant: "outline", size: "sm", className: "flex-1", children: "Set as Default" })
        ] })
      ] })
    ] }, n.id)) }),
    /* @__PURE__ */ r.jsxs(Me, { children: [
      /* @__PURE__ */ r.jsx(ot, { children: /* @__PURE__ */ r.jsx(it, { children: "Auto-Pay Settings" }) }),
      /* @__PURE__ */ r.jsxs(Ke, { className: "space-y-4", children: [
        /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600", children: "Auto-pay automatically charges your default payment method on the scheduled due date each month." }),
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between p-4 bg-gray-50 rounded-lg", children: [
          /* @__PURE__ */ r.jsxs("div", { children: [
            /* @__PURE__ */ r.jsx("p", { className: "font-medium text-gray-900", children: "Auto-pay Status" }),
            /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600", children: "Next payment: May 6, 2026" })
          ] }),
          /* @__PURE__ */ r.jsxs(Wr, { className: "bg-green-100 text-green-700 hover:bg-green-100", children: [
            /* @__PURE__ */ r.jsx(uu, { className: "w-4 h-4 mr-1" }),
            "Active"
          ] })
        ] }),
        /* @__PURE__ */ r.jsx(Ce, { variant: "outline", className: "w-full", children: "Manage Auto-Pay Settings" })
      ] })
    ] })
  ] });
}
function iS() {
  return /* @__PURE__ */ r.jsxs("div", { className: "p-8 space-y-6", children: [
    /* @__PURE__ */ r.jsxs("div", { children: [
      /* @__PURE__ */ r.jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "Contact School" }),
      /* @__PURE__ */ r.jsx("p", { className: "text-gray-600 mt-2", children: "Get in touch with The New Hebrew Program" })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ r.jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ r.jsxs(Me, { children: [
        /* @__PURE__ */ r.jsx(ot, { children: /* @__PURE__ */ r.jsx(it, { children: "Send a Message" }) }),
        /* @__PURE__ */ r.jsx(Ke, { children: /* @__PURE__ */ r.jsxs("form", { className: "space-y-4", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ r.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ r.jsx(se, { htmlFor: "subject", children: "Subject" }),
              /* @__PURE__ */ r.jsx(Pe, { id: "subject", placeholder: "What is this regarding?" })
            ] }),
            /* @__PURE__ */ r.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ r.jsx(se, { htmlFor: "regarding", children: "Regarding Student" }),
              /* @__PURE__ */ r.jsx(Pe, { id: "regarding", placeholder: "Select student (optional)" })
            ] })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ r.jsx(se, { htmlFor: "message", children: "Message" }),
            /* @__PURE__ */ r.jsx(
              Pn,
              {
                id: "message",
                placeholder: "Type your message here...",
                className: "min-h-[200px]"
              }
            )
          ] }),
          /* @__PURE__ */ r.jsx(Ce, { className: "w-full bg-[#326389] hover:bg-[#2a5474]", children: "Send Message" })
        ] }) })
      ] }) }),
      /* @__PURE__ */ r.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ r.jsxs(Me, { children: [
          /* @__PURE__ */ r.jsx(ot, { children: /* @__PURE__ */ r.jsx(it, { children: "Contact Information" }) }),
          /* @__PURE__ */ r.jsxs(Ke, { className: "space-y-4", children: [
            /* @__PURE__ */ r.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ r.jsx("div", { className: "w-10 h-10 rounded-lg bg-[#326389] bg-opacity-10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ r.jsx(xw, { className: "w-5 h-5 text-[#326389]" }) }),
              /* @__PURE__ */ r.jsxs("div", { children: [
                /* @__PURE__ */ r.jsx("p", { className: "text-sm font-medium text-gray-600", children: "Phone" }),
                /* @__PURE__ */ r.jsx("p", { className: "text-base text-gray-900", children: "(617) 555-0100" })
              ] })
            ] }),
            /* @__PURE__ */ r.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ r.jsx("div", { className: "w-10 h-10 rounded-lg bg-[#326389] bg-opacity-10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ r.jsx(Us, { className: "w-5 h-5 text-[#326389]" }) }),
              /* @__PURE__ */ r.jsxs("div", { children: [
                /* @__PURE__ */ r.jsx("p", { className: "text-sm font-medium text-gray-600", children: "Email" }),
                /* @__PURE__ */ r.jsx("p", { className: "text-base text-gray-900", children: "info@tnhp.org" })
              ] })
            ] }),
            /* @__PURE__ */ r.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ r.jsx("div", { className: "w-10 h-10 rounded-lg bg-[#326389] bg-opacity-10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ r.jsx(Ou, { className: "w-5 h-5 text-[#326389]" }) }),
              /* @__PURE__ */ r.jsxs("div", { children: [
                /* @__PURE__ */ r.jsx("p", { className: "text-sm font-medium text-gray-600", children: "Address" }),
                /* @__PURE__ */ r.jsxs("p", { className: "text-base text-gray-900", children: [
                  "123 Hebrew Lane",
                  /* @__PURE__ */ r.jsx("br", {}),
                  "Brookline, MA 02446"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ r.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ r.jsx("div", { className: "w-10 h-10 rounded-lg bg-[#326389] bg-opacity-10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ r.jsx(Ls, { className: "w-5 h-5 text-[#326389]" }) }),
              /* @__PURE__ */ r.jsxs("div", { children: [
                /* @__PURE__ */ r.jsx("p", { className: "text-sm font-medium text-gray-600", children: "Office Hours" }),
                /* @__PURE__ */ r.jsxs("p", { className: "text-base text-gray-900", children: [
                  "Mon-Fri: 9:00 AM - 5:00 PM",
                  /* @__PURE__ */ r.jsx("br", {}),
                  "Sun: 10:00 AM - 2:00 PM"
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ r.jsxs(Me, { children: [
          /* @__PURE__ */ r.jsx(ot, { children: /* @__PURE__ */ r.jsx(it, { children: "Frequently Asked Questions" }) }),
          /* @__PURE__ */ r.jsx(Ke, { children: /* @__PURE__ */ r.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ r.jsx(Ce, { variant: "link", className: "p-0 h-auto text-left text-[#326389] hover:text-[#2a5474]", children: "What is your cancellation policy?" }),
            /* @__PURE__ */ r.jsx(Ce, { variant: "link", className: "p-0 h-auto text-left text-[#326389] hover:text-[#2a5474]", children: "How do I update student information?" }),
            /* @__PURE__ */ r.jsx(Ce, { variant: "link", className: "p-0 h-auto text-left text-[#326389] hover:text-[#2a5474]", children: "When are school holidays?" }),
            /* @__PURE__ */ r.jsx(Ce, { variant: "link", className: "p-0 h-auto text-left text-[#326389] hover:text-[#2a5474]", children: "How can I access tax documents?" })
          ] }) })
        ] })
      ] })
    ] })
  ] });
}
function lS() {
  const [n, o] = w.useState("dashboard"), a = "Maya", i = () => {
    switch (n) {
      case "dashboard":
        return /* @__PURE__ */ r.jsx(rS, { parentName: a });
      case "register":
        return /* @__PURE__ */ r.jsx(sS, {});
      case "payment":
        return /* @__PURE__ */ r.jsx(oS, {});
      case "contact":
        return /* @__PURE__ */ r.jsx(iS, {});
      default:
        return null;
    }
  };
  return /* @__PURE__ */ r.jsx(
    eS,
    {
      currentView: n,
      onNavigate: o,
      parentName: a,
      children: i()
    }
  );
}
const tp = [
  { id: "dashboard", label: "Overview", icon: lw },
  { id: "classes", label: "Class Manager", icon: Fi },
  { id: "rosters", label: "Class Rosters", icon: Li },
  { id: "students", label: "Student Database", icon: J0 },
  { id: "financials", label: "Financial Settings", icon: bi },
  { id: "settings", label: "System Settings", icon: Nw }
];
function cS({ children: n, currentView: o, onNavigate: a }) {
  var p;
  const [i, c] = w.useState(!1), u = (g) => {
    a(g), c(!1);
  }, f = ((p = tp.find((g) => g.id === o)) == null ? void 0 : p.label) ?? "Overview", m = () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("div", { className: "p-6 border-b border-gray-200", children: [
      /* @__PURE__ */ r.jsx("h1", { className: "text-xl font-bold text-[#326389]", children: "The New Hebrew Program" }),
      /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600 mt-1", children: "Admin Dashboard" })
    ] }),
    /* @__PURE__ */ r.jsx("nav", { className: "flex-1 p-4", children: /* @__PURE__ */ r.jsx("ul", { className: "space-y-1", children: tp.map((g) => {
      const v = g.icon, x = o === g.id;
      return /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsxs(
        "button",
        {
          onClick: () => u(g.id),
          className: `
                    w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all
                    ${x ? "bg-[#326389] text-white shadow-sm" : "text-gray-700 hover:bg-gray-100"}
                  `,
          children: [
            /* @__PURE__ */ r.jsx(v, { className: "w-5 h-5 flex-shrink-0" }),
            /* @__PURE__ */ r.jsx("span", { children: g.label })
          ]
        }
      ) }, g.id);
    }) }) }),
    /* @__PURE__ */ r.jsxs("div", { className: "p-4 border-t border-gray-200", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-3 px-4 py-3", children: [
        /* @__PURE__ */ r.jsx("div", { className: "w-10 h-10 rounded-full bg-[#326389] flex items-center justify-center text-white font-semibold flex-shrink-0", children: "AD" }),
        /* @__PURE__ */ r.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ r.jsx("p", { className: "text-sm font-medium text-gray-900 truncate", children: "Admin User" }),
          /* @__PURE__ */ r.jsx("p", { className: "text-xs text-gray-600", children: "admin@tnhp.org" })
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("button", { className: "w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors mt-2", children: [
        /* @__PURE__ */ r.jsx(wp, { className: "w-4 h-4" }),
        /* @__PURE__ */ r.jsx("span", { children: "Log Out" })
      ] })
    ] })
  ] });
  return /* @__PURE__ */ r.jsxs("div", { className: "w-full bg-gray-50 flex", children: [
    /* @__PURE__ */ r.jsx("aside", { className: "hidden md:flex w-64 flex-shrink-0 bg-white border-r border-gray-200 flex-col", children: /* @__PURE__ */ r.jsx(m, {}) }),
    i && /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "fixed inset-0 bg-black/50 z-40 md:hidden",
        onClick: () => c(!1)
      }
    ),
    /* @__PURE__ */ r.jsxs(
      "aside",
      {
        className: `
          fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 flex flex-col
          transform transition-transform duration-200 ease-in-out md:hidden
          ${i ? "translate-x-0" : "-translate-x-full"}
        `,
        children: [
          /* @__PURE__ */ r.jsx("div", { className: "absolute top-3 right-3", children: /* @__PURE__ */ r.jsx(
            "button",
            {
              onClick: () => c(!1),
              className: "p-1.5 rounded-lg hover:bg-gray-100",
              "aria-label": "Close menu",
              children: /* @__PURE__ */ r.jsx(Lu, { className: "w-5 h-5 text-gray-600" })
            }
          ) }),
          /* @__PURE__ */ r.jsx(m, {})
        ]
      }
    ),
    /* @__PURE__ */ r.jsxs("div", { className: "flex-1 flex flex-col min-w-0", children: [
      /* @__PURE__ */ r.jsxs("header", { className: "md:hidden flex items-center gap-3 px-4 py-3 bg-white border-b border-gray-200", children: [
        /* @__PURE__ */ r.jsx(
          "button",
          {
            onClick: () => c(!0),
            className: "p-1.5 rounded-lg hover:bg-gray-100",
            "aria-label": "Open menu",
            children: /* @__PURE__ */ r.jsx(bp, { className: "w-5 h-5 text-gray-700" })
          }
        ),
        /* @__PURE__ */ r.jsx("h2", { className: "text-sm font-semibold text-gray-900", children: f })
      ] }),
      /* @__PURE__ */ r.jsx("main", { className: "flex-1 overflow-y-auto", children: n })
    ] })
  ] });
}
const uS = (n) => [
  {
    title: "Total Students",
    value: n.totalStudents.toString(),
    icon: Li,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    title: "Active Classes",
    value: n.activeClasses.toString(),
    icon: Fi,
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    title: "Total Revenue",
    value: `$${n.totalRevenue.toLocaleString()}`,
    icon: bi,
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    title: "Pending Autopay (May 6)",
    value: `$${n.pendingAutopay.toLocaleString()}`,
    icon: Tu,
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  }
], dS = [
  { student: "Sarah Cohen", action: "Enrolled in Hebrew Conversation", time: "2 hours ago" },
  { student: "David Levi", action: "Payment received - $450", time: "4 hours ago" },
  { student: "Rachel Goldberg", action: "Updated medical information", time: "5 hours ago" },
  { student: "Michael Katz", action: "Enrolled in Reading Adventures", time: "Yesterday" },
  { student: "Emma Shapiro", action: "Sibling discount applied", time: "Yesterday" }
], fS = [
  { family: "Cohen Family", amount: "$225", dueDate: "May 6, 2026", status: "scheduled" },
  { family: "Levi Family", amount: "$450", dueDate: "May 6, 2026", status: "scheduled" },
  { family: "Goldberg Family", amount: "$337.50", dueDate: "May 6, 2026", status: "scheduled" },
  { family: "Katz Family", amount: "$210", dueDate: "May 6, 2026", status: "pending" },
  { family: "Shapiro Family", amount: "$405", dueDate: "May 6, 2026", status: "scheduled" }
];
function mS() {
  const [n, o] = w.useState(!0), [a, i] = w.useState({
    totalStudents: 0,
    activeClasses: 0,
    totalRevenue: 0,
    pendingAutopay: 0
  });
  w.useEffect(() => {
    async function u() {
      o(!0);
      try {
        const f = await X2();
        i({
          totalStudents: f.totalStudents,
          activeClasses: f.activeClasses,
          totalRevenue: f.totalRevenue,
          pendingAutopay: f.pendingAutopay
        });
      } catch (f) {
        console.error("Failed to load admin overview:", f);
      } finally {
        o(!1);
      }
    }
    u();
  }, []);
  const c = uS(a);
  return /* @__PURE__ */ r.jsxs("div", { className: "p-8 space-y-8", children: [
    n && /* @__PURE__ */ r.jsx("div", { className: "fixed inset-0 bg-white/50 z-50 flex items-center justify-center", children: /* @__PURE__ */ r.jsx("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-[#326389]" }) }),
    /* @__PURE__ */ r.jsxs("div", { children: [
      /* @__PURE__ */ r.jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "Overview" }),
      /* @__PURE__ */ r.jsx("p", { className: "text-gray-600 mt-2", children: "Welcome back! Here's what's happening today." })
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: c.map((u) => {
      const f = u.icon;
      return /* @__PURE__ */ r.jsx(Me, { children: /* @__PURE__ */ r.jsx(Ke, { className: "p-6", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx("p", { className: "text-sm font-medium text-gray-600", children: u.title }),
          /* @__PURE__ */ r.jsx("p", { className: "text-3xl font-bold text-gray-900 mt-2", children: u.value })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: `${u.bgColor} ${u.color} p-3 rounded-lg`, children: /* @__PURE__ */ r.jsx(f, { className: "w-6 h-6" }) })
      ] }) }) }, u.title);
    }) }),
    /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ r.jsxs(Me, { children: [
        /* @__PURE__ */ r.jsx(ot, { children: /* @__PURE__ */ r.jsx(it, { children: "Recent Activity" }) }),
        /* @__PURE__ */ r.jsx(Ke, { children: /* @__PURE__ */ r.jsx("div", { className: "space-y-4", children: dS.map((u, f) => /* @__PURE__ */ r.jsxs("div", { className: "flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0", children: [
          /* @__PURE__ */ r.jsx("div", { className: "w-2 h-2 rounded-full bg-[#326389] mt-2" }),
          /* @__PURE__ */ r.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ r.jsx("p", { className: "text-sm font-medium text-gray-900", children: u.student }),
            /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600 mt-0.5", children: u.action }),
            /* @__PURE__ */ r.jsx("p", { className: "text-xs text-gray-500 mt-1", children: u.time })
          ] })
        ] }, f)) }) })
      ] }),
      /* @__PURE__ */ r.jsxs(Me, { children: [
        /* @__PURE__ */ r.jsx(ot, { children: /* @__PURE__ */ r.jsx(it, { children: "Upcoming Autopay (May 6)" }) }),
        /* @__PURE__ */ r.jsx(Ke, { children: /* @__PURE__ */ r.jsx("div", { className: "space-y-3", children: fS.map((u, f) => /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between p-3 bg-gray-50 rounded-lg", children: [
          /* @__PURE__ */ r.jsxs("div", { children: [
            /* @__PURE__ */ r.jsx("p", { className: "text-sm font-medium text-gray-900", children: u.family }),
            /* @__PURE__ */ r.jsx("p", { className: "text-xs text-gray-600 mt-0.5", children: u.dueDate })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "text-right", children: [
            /* @__PURE__ */ r.jsx("p", { className: "text-sm font-bold text-gray-900", children: u.amount }),
            /* @__PURE__ */ r.jsx(
              "span",
              {
                className: `text-xs px-2 py-0.5 rounded-full ${u.status === "scheduled" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}`,
                children: u.status
              }
            )
          ] })
        ] }, f)) }) })
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs(Me, { children: [
      /* @__PURE__ */ r.jsx(ot, { children: /* @__PURE__ */ r.jsx(it, { children: "Quick Actions" }) }),
      /* @__PURE__ */ r.jsx(Ke, { children: /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ r.jsxs("button", { className: "p-4 bg-[#326389] text-white rounded-lg hover:bg-[#2a5474] transition-colors text-left", children: [
          /* @__PURE__ */ r.jsx("p", { className: "font-semibold", children: "Export All Data" }),
          /* @__PURE__ */ r.jsx("p", { className: "text-sm text-blue-100 mt-1", children: "Download complete roster CSV" })
        ] }),
        /* @__PURE__ */ r.jsxs("button", { className: "p-4 bg-white border-2 border-[#326389] text-[#326389] rounded-lg hover:bg-blue-50 transition-colors text-left", children: [
          /* @__PURE__ */ r.jsx("p", { className: "font-semibold", children: "Email All Parents" }),
          /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600 mt-1", children: "Send announcement to families" })
        ] }),
        /* @__PURE__ */ r.jsxs("button", { className: "p-4 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-left", children: [
          /* @__PURE__ */ r.jsx("p", { className: "font-semibold", children: "Edit Registration Fees" }),
          /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600 mt-1", children: "Update pricing settings" })
        ] })
      ] }) })
    ] })
  ] });
}
var Xa = (n) => n.type === "checkbox", Br = (n) => n instanceof Date, Dt = (n) => n == null;
const wx = (n) => typeof n == "object";
var dt = (n) => !Dt(n) && !Array.isArray(n) && wx(n) && !Br(n), bx = (n) => dt(n) && n.target ? Xa(n.target) ? n.target.checked : n.target.value : n, hS = (n) => n.substring(0, n.search(/\.\d+(\.|$)/)) || n, Nx = (n, o) => n.has(hS(o)), pS = (n) => {
  const o = n.constructor && n.constructor.prototype;
  return dt(o) && o.hasOwnProperty("isPrototypeOf");
}, od = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Ct(n) {
  let o;
  const a = Array.isArray(n), i = typeof FileList < "u" ? n instanceof FileList : !1;
  if (n instanceof Date)
    o = new Date(n);
  else if (n instanceof Set)
    o = new Set(n);
  else if (!(od && (n instanceof Blob || i)) && (a || dt(n)))
    if (o = a ? [] : {}, !a && !pS(n))
      o = n;
    else
      for (const c in n)
        n.hasOwnProperty(c) && (o[c] = Ct(n[c]));
  else
    return n;
  return o;
}
var Qi = (n) => Array.isArray(n) ? n.filter(Boolean) : [], ut = (n) => n === void 0, fe = (n, o, a) => {
  if (!o || !dt(n))
    return a;
  const i = Qi(o.split(/[,[\].]+?/)).reduce((c, u) => Dt(c) ? c : c[u], n);
  return ut(i) || i === n ? ut(n[o]) ? a : n[o] : i;
}, Yt = (n) => typeof n == "boolean", id = (n) => /^\w*$/.test(n), jx = (n) => Qi(n.replace(/["|']|\]/g, "").split(/\.|\[/)), Ye = (n, o, a) => {
  let i = -1;
  const c = id(o) ? [o] : jx(o), u = c.length, f = u - 1;
  for (; ++i < u; ) {
    const m = c[i];
    let p = a;
    if (i !== f) {
      const g = n[m];
      p = dt(g) || Array.isArray(g) ? g : isNaN(+c[i + 1]) ? {} : [];
    }
    if (m === "__proto__" || m === "constructor" || m === "prototype")
      return;
    n[m] = p, n = n[m];
  }
};
const _i = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, pn = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Hn = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, gS = Te.createContext(null), ld = () => Te.useContext(gS);
var Sx = (n, o, a, i = !0) => {
  const c = {
    defaultValues: o._defaultValues
  };
  for (const u in n)
    Object.defineProperty(c, u, {
      get: () => {
        const f = u;
        return o._proxyFormState[f] !== pn.all && (o._proxyFormState[f] = !i || pn.all), a && (a[f] = !0), n[f];
      }
    });
  return c;
};
function xS(n) {
  const o = ld(), { control: a = o.control, disabled: i, name: c, exact: u } = n || {}, [f, m] = Te.useState(a._formState), p = Te.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), g = Te.useRef(c);
  return g.current = c, Te.useEffect(() => a._subscribe({
    name: g.current,
    formState: p.current,
    exact: u,
    callback: (v) => {
      !i && m({
        ...a._formState,
        ...v
      });
    }
  }), [a, i, u]), Te.useEffect(() => {
    p.current.isValid && a._setValid(!0);
  }, [a]), Te.useMemo(() => Sx(f, a, p.current, !1), [f, a]);
}
var An = (n) => typeof n == "string", Cx = (n, o, a, i, c) => An(n) ? (i && o.watch.add(n), fe(a, n, c)) : Array.isArray(n) ? n.map((u) => (i && o.watch.add(u), fe(a, u))) : (i && (o.watchAll = !0), a);
function vS(n) {
  const o = ld(), { control: a = o.control, name: i, defaultValue: c, disabled: u, exact: f } = n || {}, m = Te.useRef(i), p = Te.useRef(c);
  m.current = i, Te.useEffect(() => a._subscribe({
    name: m.current,
    formState: {
      values: !0
    },
    exact: f,
    callback: (x) => !u && v(Cx(m.current, a._names, x.values || a._formValues, !1, p.current))
  }), [a, u, f]);
  const [g, v] = Te.useState(a._getWatch(i, c));
  return Te.useEffect(() => a._removeUnmounted()), g;
}
function yS(n) {
  const o = ld(), { name: a, disabled: i, control: c = o.control, shouldUnregister: u } = n, f = Nx(c._names.array, a), m = vS({
    control: c,
    name: a,
    defaultValue: fe(c._formValues, a, fe(c._defaultValues, a, n.defaultValue)),
    exact: !0
  }), p = xS({
    control: c,
    name: a,
    exact: !0
  }), g = Te.useRef(n), v = Te.useRef(c.register(a, {
    ...n.rules,
    value: m,
    ...Yt(n.disabled) ? { disabled: n.disabled } : {}
  })), x = Te.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!fe(p.errors, a)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!fe(p.dirtyFields, a)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!fe(p.touchedFields, a)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!fe(p.validatingFields, a)
    },
    error: {
      enumerable: !0,
      get: () => fe(p.errors, a)
    }
  }), [p, a]), b = Te.useCallback((C) => v.current.onChange({
    target: {
      value: bx(C),
      name: a
    },
    type: _i.CHANGE
  }), [a]), S = Te.useCallback(() => v.current.onBlur({
    target: {
      value: fe(c._formValues, a),
      name: a
    },
    type: _i.BLUR
  }), [a, c._formValues]), j = Te.useCallback((C) => {
    const P = fe(c._fields, a);
    P && C && (P._f.ref = {
      focus: () => C.focus(),
      select: () => C.select(),
      setCustomValidity: (E) => C.setCustomValidity(E),
      reportValidity: () => C.reportValidity()
    });
  }, [c._fields, a]), N = Te.useMemo(() => ({
    name: a,
    value: m,
    ...Yt(i) || p.disabled ? { disabled: p.disabled || i } : {},
    onChange: b,
    onBlur: S,
    ref: j
  }), [a, i, p.disabled, b, S, j, m]);
  return Te.useEffect(() => {
    const C = c._options.shouldUnregister || u;
    c.register(a, {
      ...g.current.rules,
      ...Yt(g.current.disabled) ? { disabled: g.current.disabled } : {}
    });
    const P = (E, O) => {
      const F = fe(c._fields, E);
      F && F._f && (F._f.mount = O);
    };
    if (P(a, !0), C) {
      const E = Ct(fe(c._options.defaultValues, a));
      Ye(c._defaultValues, a, E), ut(fe(c._formValues, a)) && Ye(c._formValues, a, E);
    }
    return !f && c.register(a), () => {
      (f ? C && !c._state.action : C) ? c.unregister(a) : P(a, !1);
    };
  }, [a, c, f, u]), Te.useEffect(() => {
    c._setDisabledField({
      disabled: i,
      name: a
    });
  }, [i, a, c]), Te.useMemo(() => ({
    field: N,
    formState: p,
    fieldState: x
  }), [N, p, x]);
}
const np = (n) => n.render(yS(n));
var wS = (n, o, a, i, c) => o ? {
  ...a[n],
  types: {
    ...a[n] && a[n].types ? a[n].types : {},
    [i]: c || !0
  }
} : {}, Ua = (n) => Array.isArray(n) ? n : [n], rp = () => {
  let n = [];
  return {
    get observers() {
      return n;
    },
    next: (c) => {
      for (const u of n)
        u.next && u.next(c);
    },
    subscribe: (c) => (n.push(c), {
      unsubscribe: () => {
        n = n.filter((u) => u !== c);
      }
    }),
    unsubscribe: () => {
      n = [];
    }
  };
}, Ru = (n) => Dt(n) || !wx(n);
function yr(n, o) {
  if (Ru(n) || Ru(o))
    return n === o;
  if (Br(n) && Br(o))
    return n.getTime() === o.getTime();
  const a = Object.keys(n), i = Object.keys(o);
  if (a.length !== i.length)
    return !1;
  for (const c of a) {
    const u = n[c];
    if (!i.includes(c))
      return !1;
    if (c !== "ref") {
      const f = o[c];
      if (Br(u) && Br(f) || dt(u) && dt(f) || Array.isArray(u) && Array.isArray(f) ? !yr(u, f) : u !== f)
        return !1;
    }
  }
  return !0;
}
var Tt = (n) => dt(n) && !Object.keys(n).length, cd = (n) => n.type === "file", gn = (n) => typeof n == "function", Ri = (n) => {
  if (!od)
    return !1;
  const o = n ? n.ownerDocument : 0;
  return n instanceof (o && o.defaultView ? o.defaultView.HTMLElement : HTMLElement);
}, kx = (n) => n.type === "select-multiple", ud = (n) => n.type === "radio", bS = (n) => ud(n) || Xa(n), lu = (n) => Ri(n) && n.isConnected;
function NS(n, o) {
  const a = o.slice(0, -1).length;
  let i = 0;
  for (; i < a; )
    n = ut(n) ? i++ : n[o[i++]];
  return n;
}
function jS(n) {
  for (const o in n)
    if (n.hasOwnProperty(o) && !ut(n[o]))
      return !1;
  return !0;
}
function xt(n, o) {
  const a = Array.isArray(o) ? o : id(o) ? [o] : jx(o), i = a.length === 1 ? n : NS(n, a), c = a.length - 1, u = a[c];
  return i && delete i[u], c !== 0 && (dt(i) && Tt(i) || Array.isArray(i) && jS(i)) && xt(n, a.slice(0, -1)), n;
}
var Ex = (n) => {
  for (const o in n)
    if (gn(n[o]))
      return !0;
  return !1;
};
function Ai(n, o = {}) {
  const a = Array.isArray(n);
  if (dt(n) || a)
    for (const i in n)
      Array.isArray(n[i]) || dt(n[i]) && !Ex(n[i]) ? (o[i] = Array.isArray(n[i]) ? [] : {}, Ai(n[i], o[i])) : Dt(n[i]) || (o[i] = !0);
  return o;
}
function Px(n, o, a) {
  const i = Array.isArray(n);
  if (dt(n) || i)
    for (const c in n)
      Array.isArray(n[c]) || dt(n[c]) && !Ex(n[c]) ? ut(o) || Ru(a[c]) ? a[c] = Array.isArray(n[c]) ? Ai(n[c], []) : { ...Ai(n[c]) } : Px(n[c], Dt(o) ? {} : o[c], a[c]) : a[c] = !yr(n[c], o[c]);
  return a;
}
var Ia = (n, o) => Px(n, o, Ai(o));
const sp = {
  value: !1,
  isValid: !1
}, ap = { value: !0, isValid: !0 };
var _x = (n) => {
  if (Array.isArray(n)) {
    if (n.length > 1) {
      const o = n.filter((a) => a && a.checked && !a.disabled).map((a) => a.value);
      return { value: o, isValid: !!o.length };
    }
    return n[0].checked && !n[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      n[0].attributes && !ut(n[0].attributes.value) ? ut(n[0].value) || n[0].value === "" ? ap : { value: n[0].value, isValid: !0 } : ap
    ) : sp;
  }
  return sp;
}, Rx = (n, { valueAsNumber: o, valueAsDate: a, setValueAs: i }) => ut(n) ? n : o ? n === "" ? NaN : n && +n : a && An(n) ? new Date(n) : i ? i(n) : n;
const op = {
  isValid: !1,
  value: null
};
var Ax = (n) => Array.isArray(n) ? n.reduce((o, a) => a && a.checked && !a.disabled ? {
  isValid: !0,
  value: a.value
} : o, op) : op;
function ip(n) {
  const o = n.ref;
  return cd(o) ? o.files : ud(o) ? Ax(n.refs).value : kx(o) ? [...o.selectedOptions].map(({ value: a }) => a) : Xa(o) ? _x(n.refs).value : Rx(ut(o.value) ? n.ref.value : o.value, n);
}
var SS = (n, o, a, i) => {
  const c = {};
  for (const u of n) {
    const f = fe(o, u);
    f && Ye(c, u, f._f);
  }
  return {
    criteriaMode: a,
    names: [...n],
    fields: c,
    shouldUseNativeValidation: i
  };
}, Ti = (n) => n instanceof RegExp, za = (n) => ut(n) ? n : Ti(n) ? n.source : dt(n) ? Ti(n.value) ? n.value.source : n.value : n, lp = (n) => ({
  isOnSubmit: !n || n === pn.onSubmit,
  isOnBlur: n === pn.onBlur,
  isOnChange: n === pn.onChange,
  isOnAll: n === pn.all,
  isOnTouch: n === pn.onTouched
});
const cp = "AsyncFunction";
var CS = (n) => !!n && !!n.validate && !!(gn(n.validate) && n.validate.constructor.name === cp || dt(n.validate) && Object.values(n.validate).find((o) => o.constructor.name === cp)), kS = (n) => n.mount && (n.required || n.min || n.max || n.maxLength || n.minLength || n.pattern || n.validate), up = (n, o, a) => !a && (o.watchAll || o.watch.has(n) || [...o.watch].some((i) => n.startsWith(i) && /^\.\w+/.test(n.slice(i.length))));
const Wa = (n, o, a, i) => {
  for (const c of a || Object.keys(n)) {
    const u = fe(n, c);
    if (u) {
      const { _f: f, ...m } = u;
      if (f) {
        if (f.refs && f.refs[0] && o(f.refs[0], c) && !i)
          return !0;
        if (f.ref && o(f.ref, f.name) && !i)
          return !0;
        if (Wa(m, o))
          break;
      } else if (dt(m) && Wa(m, o))
        break;
    }
  }
};
function dp(n, o, a) {
  const i = fe(n, a);
  if (i || id(a))
    return {
      error: i,
      name: a
    };
  const c = a.split(".");
  for (; c.length; ) {
    const u = c.join("."), f = fe(o, u), m = fe(n, u);
    if (f && !Array.isArray(f) && a !== u)
      return { name: a };
    if (m && m.type)
      return {
        name: u,
        error: m
      };
    c.pop();
  }
  return {
    name: a
  };
}
var ES = (n, o, a, i) => {
  a(n);
  const { name: c, ...u } = n;
  return Tt(u) || Object.keys(u).length >= Object.keys(o).length || Object.keys(u).find((f) => o[f] === (!i || pn.all));
}, PS = (n, o, a) => !n || !o || n === o || Ua(n).some((i) => i && (a ? i === o : i.startsWith(o) || o.startsWith(i))), _S = (n, o, a, i, c) => c.isOnAll ? !1 : !a && c.isOnTouch ? !(o || n) : (a ? i.isOnBlur : c.isOnBlur) ? !n : (a ? i.isOnChange : c.isOnChange) ? n : !0, RS = (n, o) => !Qi(fe(n, o)).length && xt(n, o), AS = (n, o, a) => {
  const i = Ua(fe(n, a));
  return Ye(i, "root", o[a]), Ye(n, a, i), n;
}, wi = (n) => An(n);
function fp(n, o, a = "validate") {
  if (wi(n) || Array.isArray(n) && n.every(wi) || Yt(n) && !n)
    return {
      type: a,
      message: wi(n) ? n : "",
      ref: o
    };
}
var As = (n) => dt(n) && !Ti(n) ? n : {
  value: n,
  message: ""
}, mp = async (n, o, a, i, c, u) => {
  const { ref: f, refs: m, required: p, maxLength: g, minLength: v, min: x, max: b, pattern: S, validate: j, name: N, valueAsNumber: C, mount: P } = n._f, E = fe(a, N);
  if (!P || o.has(N))
    return {};
  const O = m ? m[0] : f, F = (X) => {
    c && O.reportValidity && (O.setCustomValidity(Yt(X) ? "" : X || ""), O.reportValidity());
  }, D = {}, Y = ud(f), H = Xa(f), B = Y || H, re = (C || cd(f)) && ut(f.value) && ut(E) || Ri(f) && f.value === "" || E === "" || Array.isArray(E) && !E.length, me = wS.bind(null, N, i, D), J = (X, W, le, ye = Hn.maxLength, ae = Hn.minLength) => {
    const de = X ? W : le;
    D[N] = {
      type: X ? ye : ae,
      message: de,
      ref: f,
      ...me(X ? ye : ae, de)
    };
  };
  if (u ? !Array.isArray(E) || !E.length : p && (!B && (re || Dt(E)) || Yt(E) && !E || H && !_x(m).isValid || Y && !Ax(m).isValid)) {
    const { value: X, message: W } = wi(p) ? { value: !!p, message: p } : As(p);
    if (X && (D[N] = {
      type: Hn.required,
      message: W,
      ref: O,
      ...me(Hn.required, W)
    }, !i))
      return F(W), D;
  }
  if (!re && (!Dt(x) || !Dt(b))) {
    let X, W;
    const le = As(b), ye = As(x);
    if (!Dt(E) && !isNaN(E)) {
      const ae = f.valueAsNumber || E && +E;
      Dt(le.value) || (X = ae > le.value), Dt(ye.value) || (W = ae < ye.value);
    } else {
      const ae = f.valueAsDate || new Date(E), de = (G) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + G), M = f.type == "time", U = f.type == "week";
      An(le.value) && E && (X = M ? de(E) > de(le.value) : U ? E > le.value : ae > new Date(le.value)), An(ye.value) && E && (W = M ? de(E) < de(ye.value) : U ? E < ye.value : ae < new Date(ye.value));
    }
    if ((X || W) && (J(!!X, le.message, ye.message, Hn.max, Hn.min), !i))
      return F(D[N].message), D;
  }
  if ((g || v) && !re && (An(E) || u && Array.isArray(E))) {
    const X = As(g), W = As(v), le = !Dt(X.value) && E.length > +X.value, ye = !Dt(W.value) && E.length < +W.value;
    if ((le || ye) && (J(le, X.message, W.message), !i))
      return F(D[N].message), D;
  }
  if (S && !re && An(E)) {
    const { value: X, message: W } = As(S);
    if (Ti(X) && !E.match(X) && (D[N] = {
      type: Hn.pattern,
      message: W,
      ref: f,
      ...me(Hn.pattern, W)
    }, !i))
      return F(W), D;
  }
  if (j) {
    if (gn(j)) {
      const X = await j(E, a), W = fp(X, O);
      if (W && (D[N] = {
        ...W,
        ...me(Hn.validate, W.message)
      }, !i))
        return F(W.message), D;
    } else if (dt(j)) {
      let X = {};
      for (const W in j) {
        if (!Tt(X) && !i)
          break;
        const le = fp(await j[W](E, a), O, W);
        le && (X = {
          ...le,
          ...me(W, le.message)
        }, F(le.message), i && (D[N] = X));
      }
      if (!Tt(X) && (D[N] = {
        ref: O,
        ...X
      }, !i))
        return D;
    }
  }
  return F(!0), D;
};
const TS = {
  mode: pn.onSubmit,
  reValidateMode: pn.onChange,
  shouldFocusError: !0
};
function DS(n = {}) {
  let o = {
    ...TS,
    ...n
  }, a = {
    submitCount: 0,
    isDirty: !1,
    isLoading: gn(o.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: o.errors || {},
    disabled: o.disabled || !1
  };
  const i = {};
  let c = dt(o.defaultValues) || dt(o.values) ? Ct(o.values || o.defaultValues) || {} : {}, u = o.shouldUnregister ? {} : Ct(c), f = {
    action: !1,
    mount: !1,
    watch: !1
  }, m = {
    mount: /* @__PURE__ */ new Set(),
    disabled: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, p, g = 0;
  const v = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  };
  let x = {
    ...v
  };
  const b = {
    array: rp(),
    state: rp()
  }, S = lp(o.mode), j = lp(o.reValidateMode), N = o.criteriaMode === pn.all, C = (R) => (V) => {
    clearTimeout(g), g = setTimeout(R, V);
  }, P = async (R) => {
    if (!o.disabled && (v.isValid || x.isValid || R)) {
      const V = o.resolver ? Tt((await re()).errors) : await J(i, !0);
      V !== a.isValid && b.state.next({
        isValid: V
      });
    }
  }, E = (R, V) => {
    !o.disabled && (v.isValidating || v.validatingFields || x.isValidating || x.validatingFields) && ((R || Array.from(m.mount)).forEach((q) => {
      q && (V ? Ye(a.validatingFields, q, V) : xt(a.validatingFields, q));
    }), b.state.next({
      validatingFields: a.validatingFields,
      isValidating: !Tt(a.validatingFields)
    }));
  }, O = (R, V = [], q, he, ie = !0, te = !0) => {
    if (he && q && !o.disabled) {
      if (f.action = !0, te && Array.isArray(fe(i, R))) {
        const xe = q(fe(i, R), he.argA, he.argB);
        ie && Ye(i, R, xe);
      }
      if (te && Array.isArray(fe(a.errors, R))) {
        const xe = q(fe(a.errors, R), he.argA, he.argB);
        ie && Ye(a.errors, R, xe), RS(a.errors, R);
      }
      if ((v.touchedFields || x.touchedFields) && te && Array.isArray(fe(a.touchedFields, R))) {
        const xe = q(fe(a.touchedFields, R), he.argA, he.argB);
        ie && Ye(a.touchedFields, R, xe);
      }
      (v.dirtyFields || x.dirtyFields) && (a.dirtyFields = Ia(c, u)), b.state.next({
        name: R,
        isDirty: W(R, V),
        dirtyFields: a.dirtyFields,
        errors: a.errors,
        isValid: a.isValid
      });
    } else
      Ye(u, R, V);
  }, F = (R, V) => {
    Ye(a.errors, R, V), b.state.next({
      errors: a.errors
    });
  }, D = (R) => {
    a.errors = R, b.state.next({
      errors: a.errors,
      isValid: !1
    });
  }, Y = (R, V, q, he) => {
    const ie = fe(i, R);
    if (ie) {
      const te = fe(u, R, ut(q) ? fe(c, R) : q);
      ut(te) || he && he.defaultChecked || V ? Ye(u, R, V ? te : ip(ie._f)) : ae(R, te), f.mount && P();
    }
  }, H = (R, V, q, he, ie) => {
    let te = !1, xe = !1;
    const Ue = {
      name: R
    };
    if (!o.disabled) {
      if (!q || he) {
        (v.isDirty || x.isDirty) && (xe = a.isDirty, a.isDirty = Ue.isDirty = W(), te = xe !== Ue.isDirty);
        const Xe = yr(fe(c, R), V);
        xe = !!fe(a.dirtyFields, R), Xe ? xt(a.dirtyFields, R) : Ye(a.dirtyFields, R, !0), Ue.dirtyFields = a.dirtyFields, te = te || (v.dirtyFields || x.dirtyFields) && xe !== !Xe;
      }
      if (q) {
        const Xe = fe(a.touchedFields, R);
        Xe || (Ye(a.touchedFields, R, q), Ue.touchedFields = a.touchedFields, te = te || (v.touchedFields || x.touchedFields) && Xe !== q);
      }
      te && ie && b.state.next(Ue);
    }
    return te ? Ue : {};
  }, B = (R, V, q, he) => {
    const ie = fe(a.errors, R), te = (v.isValid || x.isValid) && Yt(V) && a.isValid !== V;
    if (o.delayError && q ? (p = C(() => F(R, q)), p(o.delayError)) : (clearTimeout(g), p = null, q ? Ye(a.errors, R, q) : xt(a.errors, R)), (q ? !yr(ie, q) : ie) || !Tt(he) || te) {
      const xe = {
        ...he,
        ...te && Yt(V) ? { isValid: V } : {},
        errors: a.errors,
        name: R
      };
      a = {
        ...a,
        ...xe
      }, b.state.next(xe);
    }
  }, re = async (R) => {
    E(R, !0);
    const V = await o.resolver(u, o.context, SS(R || m.mount, i, o.criteriaMode, o.shouldUseNativeValidation));
    return E(R), V;
  }, me = async (R) => {
    const { errors: V } = await re(R);
    if (R)
      for (const q of R) {
        const he = fe(V, q);
        he ? Ye(a.errors, q, he) : xt(a.errors, q);
      }
    else
      a.errors = V;
    return V;
  }, J = async (R, V, q = {
    valid: !0
  }) => {
    for (const he in R) {
      const ie = R[he];
      if (ie) {
        const { _f: te, ...xe } = ie;
        if (te) {
          const Ue = m.array.has(te.name), Xe = ie._f && CS(ie._f);
          Xe && v.validatingFields && E([he], !0);
          const st = await mp(ie, m.disabled, u, N, o.shouldUseNativeValidation && !V, Ue);
          if (Xe && v.validatingFields && E([he]), st[te.name] && (q.valid = !1, V))
            break;
          !V && (fe(st, te.name) ? Ue ? AS(a.errors, st, te.name) : Ye(a.errors, te.name, st[te.name]) : xt(a.errors, te.name));
        }
        !Tt(xe) && await J(xe, V, q);
      }
    }
    return q.valid;
  }, X = () => {
    for (const R of m.unMount) {
      const V = fe(i, R);
      V && (V._f.refs ? V._f.refs.every((q) => !lu(q)) : !lu(V._f.ref)) && Ee(R);
    }
    m.unMount = /* @__PURE__ */ new Set();
  }, W = (R, V) => !o.disabled && (R && V && Ye(u, R, V), !yr(z(), c)), le = (R, V, q) => Cx(R, m, {
    ...f.mount ? u : ut(V) ? c : An(R) ? { [R]: V } : V
  }, q, V), ye = (R) => Qi(fe(f.mount ? u : c, R, o.shouldUnregister ? fe(c, R, []) : [])), ae = (R, V, q = {}) => {
    const he = fe(i, R);
    let ie = V;
    if (he) {
      const te = he._f;
      te && (!te.disabled && Ye(u, R, Rx(V, te)), ie = Ri(te.ref) && Dt(V) ? "" : V, kx(te.ref) ? [...te.ref.options].forEach((xe) => xe.selected = ie.includes(xe.value)) : te.refs ? Xa(te.ref) ? te.refs.length > 1 ? te.refs.forEach((xe) => (!xe.defaultChecked || !xe.disabled) && (xe.checked = Array.isArray(ie) ? !!ie.find((Ue) => Ue === xe.value) : ie === xe.value)) : te.refs[0] && (te.refs[0].checked = !!ie) : te.refs.forEach((xe) => xe.checked = xe.value === ie) : cd(te.ref) ? te.ref.value = "" : (te.ref.value = ie, te.ref.type || b.state.next({
        name: R,
        values: Ct(u)
      })));
    }
    (q.shouldDirty || q.shouldTouch) && H(R, ie, q.shouldTouch, q.shouldDirty, !0), q.shouldValidate && _(R);
  }, de = (R, V, q) => {
    for (const he in V) {
      const ie = V[he], te = `${R}.${he}`, xe = fe(i, te);
      (m.array.has(R) || dt(ie) || xe && !xe._f) && !Br(ie) ? de(te, ie, q) : ae(te, ie, q);
    }
  }, M = (R, V, q = {}) => {
    const he = fe(i, R), ie = m.array.has(R), te = Ct(V);
    Ye(u, R, te), ie ? (b.array.next({
      name: R,
      values: Ct(u)
    }), (v.isDirty || v.dirtyFields || x.isDirty || x.dirtyFields) && q.shouldDirty && b.state.next({
      name: R,
      dirtyFields: Ia(c, u),
      isDirty: W(R, te)
    })) : he && !he._f && !Dt(te) ? de(R, te, q) : ae(R, te, q), up(R, m) && b.state.next({ ...a }), b.state.next({
      name: f.mount ? R : void 0,
      values: Ct(u)
    });
  }, U = async (R) => {
    f.mount = !0;
    const V = R.target;
    let q = V.name, he = !0;
    const ie = fe(i, q), te = (xe) => {
      he = Number.isNaN(xe) || Br(xe) && isNaN(xe.getTime()) || yr(xe, fe(u, q, xe));
    };
    if (ie) {
      let xe, Ue;
      const Xe = V.type ? ip(ie._f) : bx(R), st = R.type === _i.BLUR || R.type === _i.FOCUS_OUT, Xi = !kS(ie._f) && !o.resolver && !fe(a.errors, q) && !ie._f.deps || _S(st, fe(a.touchedFields, q), a.isSubmitted, j, S), Zr = up(q, m, st);
      Ye(u, q, Xe), st ? (ie._f.onBlur && ie._f.onBlur(R), p && p(0)) : ie._f.onChange && ie._f.onChange(R);
      const Jr = H(q, Xe, st), Zi = !Tt(Jr) || Zr;
      if (!st && b.state.next({
        name: q,
        type: R.type,
        values: Ct(u)
      }), Xi)
        return (v.isValid || x.isValid) && (o.mode === "onBlur" ? st && P() : st || P()), Zi && b.state.next({ name: q, ...Zr ? {} : Jr });
      if (!st && Zr && b.state.next({ ...a }), o.resolver) {
        const { errors: es } = await re([q]);
        if (te(Xe), he) {
          const Xs = dp(a.errors, i, q), ts = dp(es, i, Xs.name || q);
          xe = ts.error, q = ts.name, Ue = Tt(es);
        }
      } else
        E([q], !0), xe = (await mp(ie, m.disabled, u, N, o.shouldUseNativeValidation))[q], E([q]), te(Xe), he && (xe ? Ue = !1 : (v.isValid || x.isValid) && (Ue = await J(i, !0)));
      he && (ie._f.deps && _(ie._f.deps), B(q, Ue, xe, Jr));
    }
  }, G = (R, V) => {
    if (fe(a.errors, V) && R.focus)
      return R.focus(), 1;
  }, _ = async (R, V = {}) => {
    let q, he;
    const ie = Ua(R);
    if (o.resolver) {
      const te = await me(ut(R) ? R : ie);
      q = Tt(te), he = R ? !ie.some((xe) => fe(te, xe)) : q;
    } else R ? (he = (await Promise.all(ie.map(async (te) => {
      const xe = fe(i, te);
      return await J(xe && xe._f ? { [te]: xe } : xe);
    }))).every(Boolean), !(!he && !a.isValid) && P()) : he = q = await J(i);
    return b.state.next({
      ...!An(R) || (v.isValid || x.isValid) && q !== a.isValid ? {} : { name: R },
      ...o.resolver || !R ? { isValid: q } : {},
      errors: a.errors
    }), V.shouldFocus && !he && Wa(i, G, R ? ie : m.mount), he;
  }, z = (R) => {
    const V = {
      ...f.mount ? u : c
    };
    return ut(R) ? V : An(R) ? fe(V, R) : R.map((q) => fe(V, q));
  }, oe = (R, V) => ({
    invalid: !!fe((V || a).errors, R),
    isDirty: !!fe((V || a).dirtyFields, R),
    error: fe((V || a).errors, R),
    isValidating: !!fe(a.validatingFields, R),
    isTouched: !!fe((V || a).touchedFields, R)
  }), ue = (R) => {
    R && Ua(R).forEach((V) => xt(a.errors, V)), b.state.next({
      errors: R ? a.errors : {}
    });
  }, ce = (R, V, q) => {
    const he = (fe(i, R, { _f: {} })._f || {}).ref, ie = fe(a.errors, R) || {}, { ref: te, message: xe, type: Ue, ...Xe } = ie;
    Ye(a.errors, R, {
      ...Xe,
      ...V,
      ref: he
    }), b.state.next({
      name: R,
      errors: a.errors,
      isValid: !1
    }), q && q.shouldFocus && he && he.focus && he.focus();
  }, je = (R, V) => gn(R) ? b.state.subscribe({
    next: (q) => R(le(void 0, V), q)
  }) : le(R, V, !0), K = (R) => b.state.subscribe({
    next: (V) => {
      PS(R.name, V.name, R.exact) && ES(V, R.formState || v, Nn, R.reRenderRoot) && R.callback({
        values: { ...u },
        ...a,
        ...V
      });
    }
  }).unsubscribe, ge = (R) => (f.mount = !0, x = {
    ...x,
    ...R.formState
  }, K({
    ...R,
    formState: x
  })), Ee = (R, V = {}) => {
    for (const q of R ? Ua(R) : m.mount)
      m.mount.delete(q), m.array.delete(q), V.keepValue || (xt(i, q), xt(u, q)), !V.keepError && xt(a.errors, q), !V.keepDirty && xt(a.dirtyFields, q), !V.keepTouched && xt(a.touchedFields, q), !V.keepIsValidating && xt(a.validatingFields, q), !o.shouldUnregister && !V.keepDefaultValue && xt(c, q);
    b.state.next({
      values: Ct(u)
    }), b.state.next({
      ...a,
      ...V.keepDirty ? { isDirty: W() } : {}
    }), !V.keepIsValid && P();
  }, Ae = ({ disabled: R, name: V }) => {
    (Yt(R) && f.mount || R || m.disabled.has(V)) && (R ? m.disabled.add(V) : m.disabled.delete(V));
  }, Oe = (R, V = {}) => {
    let q = fe(i, R);
    const he = Yt(V.disabled) || Yt(o.disabled);
    return Ye(i, R, {
      ...q || {},
      _f: {
        ...q && q._f ? q._f : { ref: { name: R } },
        name: R,
        mount: !0,
        ...V
      }
    }), m.mount.add(R), q ? Ae({
      disabled: Yt(V.disabled) ? V.disabled : o.disabled,
      name: R
    }) : Y(R, !0, V.value), {
      ...he ? { disabled: V.disabled || o.disabled } : {},
      ...o.progressive ? {
        required: !!V.required,
        min: za(V.min),
        max: za(V.max),
        minLength: za(V.minLength),
        maxLength: za(V.maxLength),
        pattern: za(V.pattern)
      } : {},
      name: R,
      onChange: U,
      onBlur: U,
      ref: (ie) => {
        if (ie) {
          Oe(R, V), q = fe(i, R);
          const te = ut(ie.value) && ie.querySelectorAll && ie.querySelectorAll("input,select,textarea")[0] || ie, xe = bS(te), Ue = q._f.refs || [];
          if (xe ? Ue.find((Xe) => Xe === te) : te === q._f.ref)
            return;
          Ye(i, R, {
            _f: {
              ...q._f,
              ...xe ? {
                refs: [
                  ...Ue.filter(lu),
                  te,
                  ...Array.isArray(fe(c, R)) ? [{}] : []
                ],
                ref: { type: te.type, name: R }
              } : { ref: te }
            }
          }), Y(R, !1, void 0, te);
        } else
          q = fe(i, R, {}), q._f && (q._f.mount = !1), (o.shouldUnregister || V.shouldUnregister) && !(Nx(m.array, R) && f.action) && m.unMount.add(R);
      }
    };
  }, Fe = () => o.shouldFocusError && Wa(i, G, m.mount), ft = (R) => {
    Yt(R) && (b.state.next({ disabled: R }), Wa(i, (V, q) => {
      const he = fe(i, q);
      he && (V.disabled = he._f.disabled || R, Array.isArray(he._f.refs) && he._f.refs.forEach((ie) => {
        ie.disabled = he._f.disabled || R;
      }));
    }, 0, !1));
  }, Nt = (R, V) => async (q) => {
    let he;
    q && (q.preventDefault && q.preventDefault(), q.persist && q.persist());
    let ie = Ct(u);
    if (b.state.next({
      isSubmitting: !0
    }), o.resolver) {
      const { errors: te, values: xe } = await re();
      a.errors = te, ie = xe;
    } else
      await J(i);
    if (m.disabled.size)
      for (const te of m.disabled)
        Ye(ie, te, void 0);
    if (xt(a.errors, "root"), Tt(a.errors)) {
      b.state.next({
        errors: {}
      });
      try {
        await R(ie, q);
      } catch (te) {
        he = te;
      }
    } else
      V && await V({ ...a.errors }, q), Fe(), setTimeout(Fe);
    if (b.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Tt(a.errors) && !he,
      submitCount: a.submitCount + 1,
      errors: a.errors
    }), he)
      throw he;
  }, bn = (R, V = {}) => {
    fe(i, R) && (ut(V.defaultValue) ? M(R, Ct(fe(c, R))) : (M(R, V.defaultValue), Ye(c, R, Ct(V.defaultValue))), V.keepTouched || xt(a.touchedFields, R), V.keepDirty || (xt(a.dirtyFields, R), a.isDirty = V.defaultValue ? W(R, Ct(fe(c, R))) : W()), V.keepError || (xt(a.errors, R), v.isValid && P()), b.state.next({ ...a }));
  }, an = (R, V = {}) => {
    const q = R ? Ct(R) : c, he = Ct(q), ie = Tt(R), te = ie ? c : he;
    if (V.keepDefaultValues || (c = q), !V.keepValues) {
      if (V.keepDirtyValues) {
        const xe = /* @__PURE__ */ new Set([
          ...m.mount,
          ...Object.keys(Ia(c, u))
        ]);
        for (const Ue of Array.from(xe))
          fe(a.dirtyFields, Ue) ? Ye(te, Ue, fe(u, Ue)) : M(Ue, fe(te, Ue));
      } else {
        if (od && ut(R))
          for (const xe of m.mount) {
            const Ue = fe(i, xe);
            if (Ue && Ue._f) {
              const Xe = Array.isArray(Ue._f.refs) ? Ue._f.refs[0] : Ue._f.ref;
              if (Ri(Xe)) {
                const st = Xe.closest("form");
                if (st) {
                  st.reset();
                  break;
                }
              }
            }
          }
        for (const xe of m.mount)
          M(xe, fe(te, xe));
      }
      u = Ct(te), b.array.next({
        values: { ...te }
      }), b.state.next({
        values: { ...te }
      });
    }
    m = {
      mount: V.keepDirtyValues ? m.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      disabled: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, f.mount = !v.isValid || !!V.keepIsValid || !!V.keepDirtyValues, f.watch = !!o.shouldUnregister, b.state.next({
      submitCount: V.keepSubmitCount ? a.submitCount : 0,
      isDirty: ie ? !1 : V.keepDirty ? a.isDirty : !!(V.keepDefaultValues && !yr(R, c)),
      isSubmitted: V.keepIsSubmitted ? a.isSubmitted : !1,
      dirtyFields: ie ? {} : V.keepDirtyValues ? V.keepDefaultValues && u ? Ia(c, u) : a.dirtyFields : V.keepDefaultValues && R ? Ia(c, R) : V.keepDirty ? a.dirtyFields : {},
      touchedFields: V.keepTouched ? a.touchedFields : {},
      errors: V.keepErrors ? a.errors : {},
      isSubmitSuccessful: V.keepIsSubmitSuccessful ? a.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, Xt = (R, V) => an(gn(R) ? R(u) : R, V), Qr = (R, V = {}) => {
    const q = fe(i, R), he = q && q._f;
    if (he) {
      const ie = he.refs ? he.refs[0] : he.ref;
      ie.focus && (ie.focus(), V.shouldSelect && gn(ie.select) && ie.select());
    }
  }, Nn = (R) => {
    a = {
      ...a,
      ...R
    };
  }, On = {
    control: {
      register: Oe,
      unregister: Ee,
      getFieldState: oe,
      handleSubmit: Nt,
      setError: ce,
      _subscribe: K,
      _runSchema: re,
      _getWatch: le,
      _getDirty: W,
      _setValid: P,
      _setFieldArray: O,
      _setDisabledField: Ae,
      _setErrors: D,
      _getFieldArray: ye,
      _reset: an,
      _resetDefaultValues: () => gn(o.defaultValues) && o.defaultValues().then((R) => {
        Xt(R, o.resetOptions), b.state.next({
          isLoading: !1
        });
      }),
      _removeUnmounted: X,
      _disableForm: ft,
      _subjects: b,
      _proxyFormState: v,
      get _fields() {
        return i;
      },
      get _formValues() {
        return u;
      },
      get _state() {
        return f;
      },
      set _state(R) {
        f = R;
      },
      get _defaultValues() {
        return c;
      },
      get _names() {
        return m;
      },
      set _names(R) {
        m = R;
      },
      get _formState() {
        return a;
      },
      get _options() {
        return o;
      },
      set _options(R) {
        o = {
          ...o,
          ...R
        };
      }
    },
    subscribe: ge,
    trigger: _,
    register: Oe,
    handleSubmit: Nt,
    watch: je,
    setValue: M,
    getValues: z,
    reset: Xt,
    resetField: bn,
    clearErrors: ue,
    unregister: Ee,
    setError: ce,
    setFocus: Qr,
    getFieldState: oe
  };
  return {
    ...On,
    formControl: On
  };
}
function dd(n = {}) {
  const o = Te.useRef(void 0), a = Te.useRef(void 0), [i, c] = Te.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: gn(n.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    validatingFields: {},
    errors: n.errors || {},
    disabled: n.disabled || !1,
    defaultValues: gn(n.defaultValues) ? void 0 : n.defaultValues
  });
  o.current || (o.current = {
    ...n.formControl ? n.formControl : DS(n),
    formState: i
  }, n.formControl && n.defaultValues && !gn(n.defaultValues) && n.formControl.reset(n.defaultValues, n.resetOptions));
  const u = o.current.control;
  return u._options = n, Te.useLayoutEffect(() => u._subscribe({
    formState: u._proxyFormState,
    callback: () => c({ ...u._formState }),
    reRenderRoot: !0
  }), [u]), Te.useEffect(() => u._disableForm(n.disabled), [u, n.disabled]), Te.useEffect(() => {
    if (u._proxyFormState.isDirty) {
      const f = u._getDirty();
      f !== i.isDirty && u._subjects.state.next({
        isDirty: f
      });
    }
  }, [u, i.isDirty]), Te.useEffect(() => {
    n.values && !yr(n.values, a.current) ? (u._reset(n.values, u._options.resetOptions), a.current = n.values, c((f) => ({ ...f }))) : u._resetDefaultValues();
  }, [n.values, u]), Te.useEffect(() => {
    n.errors && !Tt(n.errors) && u._setErrors(n.errors);
  }, [n.errors, u]), Te.useEffect(() => {
    u._state.mount || (u._setValid(), u._state.mount = !0), u._state.watch && (u._state.watch = !1, u._subjects.state.next({ ...u._formState })), u._removeUnmounted();
  }), Te.useEffect(() => {
    n.shouldUnregister && u._subjects.state.next({
      values: u._getWatch()
    });
  }, [n.shouldUnregister, u]), o.current.formState = Sx(i, u), o.current;
}
var fd = "Dialog", [Tx, Dx] = yn(fd), [MS, wn] = Tx(fd), Mx = (n) => {
  const {
    __scopeDialog: o,
    children: a,
    open: i,
    defaultOpen: c,
    onOpenChange: u,
    modal: f = !0
  } = n, m = w.useRef(null), p = w.useRef(null), [g = !1, v] = Gr({
    prop: i,
    defaultProp: c,
    onChange: u
  });
  return /* @__PURE__ */ r.jsx(
    MS,
    {
      scope: o,
      triggerRef: m,
      contentRef: p,
      contentId: Ur(),
      titleId: Ur(),
      descriptionId: Ur(),
      open: g,
      onOpenChange: v,
      onOpenToggle: w.useCallback(() => v((x) => !x), [v]),
      modal: f,
      children: a
    }
  );
};
Mx.displayName = fd;
var Ox = "DialogTrigger", Fx = w.forwardRef(
  (n, o) => {
    const { __scopeDialog: a, ...i } = n, c = wn(Ox, a), u = qe(o, c.triggerRef);
    return /* @__PURE__ */ r.jsx(
      Ve.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": c.open,
        "aria-controls": c.contentId,
        "data-state": pd(c.open),
        ...i,
        ref: u,
        onClick: ze(n.onClick, c.onOpenToggle)
      }
    );
  }
);
Fx.displayName = Ox;
var md = "DialogPortal", [OS, Lx] = Tx(md, {
  forceMount: void 0
}), Ix = (n) => {
  const { __scopeDialog: o, forceMount: a, children: i, container: c } = n, u = wn(md, o);
  return /* @__PURE__ */ r.jsx(OS, { scope: o, forceMount: a, children: w.Children.map(i, (f) => /* @__PURE__ */ r.jsx(Qs, { present: a || u.open, children: /* @__PURE__ */ r.jsx(Xu, { asChild: !0, container: c, children: f }) })) });
};
Ix.displayName = md;
var Di = "DialogOverlay", zx = w.forwardRef(
  (n, o) => {
    const a = Lx(Di, n.__scopeDialog), { forceMount: i = a.forceMount, ...c } = n, u = wn(Di, n.__scopeDialog);
    return u.modal ? /* @__PURE__ */ r.jsx(Qs, { present: i || u.open, children: /* @__PURE__ */ r.jsx(FS, { ...c, ref: o }) }) : null;
  }
);
zx.displayName = Di;
var FS = w.forwardRef(
  (n, o) => {
    const { __scopeDialog: a, ...i } = n, c = wn(Di, a);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ r.jsx(Zu, { as: br, allowPinchZoom: !0, shards: [c.contentRef], children: /* @__PURE__ */ r.jsx(
        Ve.div,
        {
          "data-state": pd(c.open),
          ...i,
          ref: o,
          style: { pointerEvents: "auto", ...i.style }
        }
      ) })
    );
  }
), Kr = "DialogContent", Vx = w.forwardRef(
  (n, o) => {
    const a = Lx(Kr, n.__scopeDialog), { forceMount: i = a.forceMount, ...c } = n, u = wn(Kr, n.__scopeDialog);
    return /* @__PURE__ */ r.jsx(Qs, { present: i || u.open, children: u.modal ? /* @__PURE__ */ r.jsx(LS, { ...c, ref: o }) : /* @__PURE__ */ r.jsx(IS, { ...c, ref: o }) });
  }
);
Vx.displayName = Kr;
var LS = w.forwardRef(
  (n, o) => {
    const a = wn(Kr, n.__scopeDialog), i = w.useRef(null), c = qe(o, a.contentRef, i);
    return w.useEffect(() => {
      const u = i.current;
      if (u) return hg(u);
    }, []), /* @__PURE__ */ r.jsx(
      $x,
      {
        ...n,
        ref: c,
        trapFocus: a.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: ze(n.onCloseAutoFocus, (u) => {
          var f;
          u.preventDefault(), (f = a.triggerRef.current) == null || f.focus();
        }),
        onPointerDownOutside: ze(n.onPointerDownOutside, (u) => {
          const f = u.detail.originalEvent, m = f.button === 0 && f.ctrlKey === !0;
          (f.button === 2 || m) && u.preventDefault();
        }),
        onFocusOutside: ze(
          n.onFocusOutside,
          (u) => u.preventDefault()
        )
      }
    );
  }
), IS = w.forwardRef(
  (n, o) => {
    const a = wn(Kr, n.__scopeDialog), i = w.useRef(!1), c = w.useRef(!1);
    return /* @__PURE__ */ r.jsx(
      $x,
      {
        ...n,
        ref: o,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (u) => {
          var f, m;
          (f = n.onCloseAutoFocus) == null || f.call(n, u), u.defaultPrevented || (i.current || (m = a.triggerRef.current) == null || m.focus(), u.preventDefault()), i.current = !1, c.current = !1;
        },
        onInteractOutside: (u) => {
          var p, g;
          (p = n.onInteractOutside) == null || p.call(n, u), u.defaultPrevented || (i.current = !0, u.detail.originalEvent.type === "pointerdown" && (c.current = !0));
          const f = u.target;
          ((g = a.triggerRef.current) == null ? void 0 : g.contains(f)) && u.preventDefault(), u.detail.originalEvent.type === "focusin" && c.current && u.preventDefault();
        }
      }
    );
  }
), $x = w.forwardRef(
  (n, o) => {
    const { __scopeDialog: a, trapFocus: i, onOpenAutoFocus: c, onCloseAutoFocus: u, ...f } = n, m = wn(Kr, a), p = w.useRef(null), g = qe(o, p);
    return Bp(), /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsx(
        Bu,
        {
          asChild: !0,
          loop: !0,
          trapped: i,
          onMountAutoFocus: c,
          onUnmountAutoFocus: u,
          children: /* @__PURE__ */ r.jsx(
            $u,
            {
              role: "dialog",
              id: m.contentId,
              "aria-describedby": m.descriptionId,
              "aria-labelledby": m.titleId,
              "data-state": pd(m.open),
              ...f,
              ref: g,
              onDismiss: () => m.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx(VS, { titleId: m.titleId }),
        /* @__PURE__ */ r.jsx(BS, { contentRef: p, descriptionId: m.descriptionId })
      ] })
    ] });
  }
), hd = "DialogTitle", Bx = w.forwardRef(
  (n, o) => {
    const { __scopeDialog: a, ...i } = n, c = wn(hd, a);
    return /* @__PURE__ */ r.jsx(Ve.h2, { id: c.titleId, ...i, ref: o });
  }
);
Bx.displayName = hd;
var Ux = "DialogDescription", Wx = w.forwardRef(
  (n, o) => {
    const { __scopeDialog: a, ...i } = n, c = wn(Ux, a);
    return /* @__PURE__ */ r.jsx(Ve.p, { id: c.descriptionId, ...i, ref: o });
  }
);
Wx.displayName = Ux;
var Hx = "DialogClose", Gx = w.forwardRef(
  (n, o) => {
    const { __scopeDialog: a, ...i } = n, c = wn(Hx, a);
    return /* @__PURE__ */ r.jsx(
      Ve.button,
      {
        type: "button",
        ...i,
        ref: o,
        onClick: ze(n.onClick, () => c.onOpenChange(!1))
      }
    );
  }
);
Gx.displayName = Hx;
function pd(n) {
  return n ? "open" : "closed";
}
var qx = "DialogTitleWarning", [zS, Yx] = N1(qx, {
  contentName: Kr,
  titleName: hd,
  docsSlug: "dialog"
}), VS = ({ titleId: n }) => {
  const o = Yx(qx), a = `\`${o.contentName}\` requires a \`${o.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${o.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${o.docsSlug}`;
  return w.useEffect(() => {
    n && (document.getElementById(n) || console.error(a));
  }, [a, n]), null;
}, $S = "DialogDescriptionWarning", BS = ({ contentRef: n, descriptionId: o }) => {
  const i = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Yx($S).contentName}}.`;
  return w.useEffect(() => {
    var u;
    const c = (u = n.current) == null ? void 0 : u.getAttribute("aria-describedby");
    o && c && (document.getElementById(o) || console.warn(i));
  }, [i, n, o]), null;
}, Kx = Mx, US = Fx, Qx = Ix, Xx = zx, Zx = Vx, Jx = Bx, ev = Wx, gd = Gx;
function tv({
  ...n
}) {
  return /* @__PURE__ */ r.jsx(Kx, { "data-slot": "dialog", ...n });
}
function WS({
  ...n
}) {
  return /* @__PURE__ */ r.jsx(Qx, { "data-slot": "dialog-portal", ...n });
}
function HS({
  className: n,
  ...o
}) {
  return /* @__PURE__ */ r.jsx(
    Xx,
    {
      "data-slot": "dialog-overlay",
      className: Be(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        n
      ),
      ...o
    }
  );
}
function nv({
  className: n,
  children: o,
  ...a
}) {
  return /* @__PURE__ */ r.jsxs(WS, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ r.jsx(HS, {}),
    /* @__PURE__ */ r.jsxs(
      Zx,
      {
        "data-slot": "dialog-content",
        className: Be(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          n
        ),
        ...a,
        children: [
          o,
          /* @__PURE__ */ r.jsxs(gd, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", children: [
            /* @__PURE__ */ r.jsx(Lu, {}),
            /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function rv({ className: n, ...o }) {
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: Be("flex flex-col gap-2 text-center sm:text-left", n),
      ...o
    }
  );
}
function sv({
  className: n,
  ...o
}) {
  return /* @__PURE__ */ r.jsx(
    Jx,
    {
      "data-slot": "dialog-title",
      className: Be("text-lg leading-none font-semibold", n),
      ...o
    }
  );
}
function av({
  className: n,
  ...o
}) {
  return /* @__PURE__ */ r.jsx(
    ev,
    {
      "data-slot": "dialog-description",
      className: Be("text-muted-foreground text-sm", n),
      ...o
    }
  );
}
const GS = ["Morah Maya", "Moreh Yael", "Morah Dana", "Moreh David"], qS = ["1", "2", "3", "4", "5", "6"], YS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Sunday"
];
function KS({ open: n, onClose: o }) {
  const [a, i] = w.useState(!1), [c, u] = w.useState("non-speaker"), [f, m] = w.useState([]), {
    register: p,
    handleSubmit: g,
    formState: { errors: v },
    watch: x,
    reset: b,
    control: S
  } = dd({
    defaultValues: {
      title: "",
      teacher: "",
      grade: "",
      location: "",
      startTime: "",
      endTime: "",
      capacity: void 0
    }
  }), j = x("startTime"), N = x("endTime"), C = !j || !N || N > j, P = (F) => {
    m(
      (D) => D.includes(F) ? D.filter((Y) => Y !== F) : [...D, F]
    );
  }, E = async (F) => {
    if (f.length === 0) {
      qt.error("Please select at least one day");
      return;
    }
    if (!C) {
      qt.error("End time must be after start time");
      return;
    }
    i(!0), await new Promise((D) => setTimeout(D, 1500)), qt.success("Class saved successfully!"), i(!1), b({
      title: "",
      teacher: "",
      grade: "",
      location: "",
      startTime: "",
      endTime: "",
      capacity: void 0
    }), u("non-speaker"), m([]), o();
  }, O = () => {
    a || (b({
      title: "",
      teacher: "",
      grade: "",
      location: "",
      startTime: "",
      endTime: "",
      capacity: void 0
    }), u("non-speaker"), m([]), o());
  };
  return /* @__PURE__ */ r.jsx(tv, { open: n, onOpenChange: O, children: /* @__PURE__ */ r.jsxs(nv, { className: "max-w-2xl max-h-[90vh] overflow-y-auto", children: [
    /* @__PURE__ */ r.jsxs(rv, { children: [
      /* @__PURE__ */ r.jsx(sv, { className: "text-2xl font-bold", children: "Create New Class" }),
      /* @__PURE__ */ r.jsx(av, { children: "Fill in the details below to create a new class for the program." })
    ] }),
    /* @__PURE__ */ r.jsxs("form", { onSubmit: g(E), className: "space-y-6 mt-4", children: [
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsxs(se, { htmlFor: "title", children: [
          "Class Title ",
          /* @__PURE__ */ r.jsx("span", { className: "text-red-500", children: "*" })
        ] }),
        /* @__PURE__ */ r.jsx(
          Pe,
          {
            id: "title",
            ...p("title", { required: "Class title is required" }),
            placeholder: "e.g., Hebrew for Beginners",
            className: "mt-1"
          }
        ),
        v.title && /* @__PURE__ */ r.jsx("p", { className: "text-sm text-red-600 mt-1", children: v.title.message })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsxs(se, { htmlFor: "teacher", children: [
          "Teacher Name ",
          /* @__PURE__ */ r.jsx("span", { className: "text-red-500", children: "*" })
        ] }),
        /* @__PURE__ */ r.jsx(
          np,
          {
            name: "teacher",
            control: S,
            rules: { required: "Teacher is required" },
            render: ({ field: F }) => /* @__PURE__ */ r.jsxs(zs, { value: F.value || "", onValueChange: F.onChange, children: [
              /* @__PURE__ */ r.jsx($s, { id: "teacher", className: "mt-1", children: /* @__PURE__ */ r.jsx(Vs, { placeholder: "Select a teacher" }) }),
              /* @__PURE__ */ r.jsx(Bs, { children: GS.map((D) => /* @__PURE__ */ r.jsx(Mt, { value: D, children: D }, D)) })
            ] })
          }
        ),
        v.teacher && /* @__PURE__ */ r.jsx("p", { className: "text-sm text-red-600 mt-1", children: v.teacher.message })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsxs(se, { htmlFor: "grade", children: [
          "Grade Level ",
          /* @__PURE__ */ r.jsx("span", { className: "text-red-500", children: "*" })
        ] }),
        /* @__PURE__ */ r.jsx(
          np,
          {
            name: "grade",
            control: S,
            rules: { required: "Grade is required" },
            render: ({ field: F }) => /* @__PURE__ */ r.jsxs(zs, { value: F.value || "", onValueChange: F.onChange, children: [
              /* @__PURE__ */ r.jsx($s, { id: "grade", className: "mt-1", children: /* @__PURE__ */ r.jsx(Vs, { placeholder: "Select grade level" }) }),
              /* @__PURE__ */ r.jsx(Bs, { children: qS.map((D) => /* @__PURE__ */ r.jsxs(Mt, { value: D, children: [
                "Grade ",
                D
              ] }, D)) })
            ] })
          }
        ),
        v.grade && /* @__PURE__ */ r.jsx("p", { className: "text-sm text-red-600 mt-1", children: v.grade.message })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsxs(se, { children: [
          "Proficiency Level ",
          /* @__PURE__ */ r.jsx("span", { className: "text-red-500", children: "*" })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "flex gap-3 mt-2", children: [
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              onClick: () => u("speaker"),
              className: `
                  flex-1 py-3 px-4 rounded-lg border-2 text-sm font-medium transition-all
                  ${c === "speaker" ? "border-[#326389] bg-[#326389]/5 text-[#326389]" : "border-gray-200 text-gray-700 hover:border-gray-300"}
                `,
              children: "Hebrew Speaker"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              onClick: () => u("non-speaker"),
              className: `
                  flex-1 py-3 px-4 rounded-lg border-2 text-sm font-medium transition-all
                  ${c === "non-speaker" ? "border-[#326389] bg-[#326389]/5 text-[#326389]" : "border-gray-200 text-gray-700 hover:border-gray-300"}
                `,
              children: "Non-Hebrew Speaker"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsxs(se, { children: [
          "Schedule (Days) ",
          /* @__PURE__ */ r.jsx("span", { className: "text-red-500", children: "*" })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "flex flex-wrap gap-2 mt-2", children: YS.map((F) => /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            onClick: () => P(F),
            className: `
                    px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all
                    ${f.includes(F) ? "border-[#326389] bg-[#326389] text-white" : "border-gray-200 text-gray-700 hover:border-gray-300"}
                  `,
            children: F.substring(0, 3)
          },
          F
        )) })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsxs(se, { htmlFor: "startTime", children: [
            "Start Time ",
            /* @__PURE__ */ r.jsx("span", { className: "text-red-500", children: "*" })
          ] }),
          /* @__PURE__ */ r.jsx(
            Pe,
            {
              id: "startTime",
              type: "time",
              ...p("startTime", { required: "Start time is required" }),
              className: "mt-1"
            }
          ),
          v.startTime && /* @__PURE__ */ r.jsx("p", { className: "text-sm text-red-600 mt-1", children: v.startTime.message })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsxs(se, { htmlFor: "endTime", children: [
            "End Time ",
            /* @__PURE__ */ r.jsx("span", { className: "text-red-500", children: "*" })
          ] }),
          /* @__PURE__ */ r.jsx(
            Pe,
            {
              id: "endTime",
              type: "time",
              ...p("endTime", { required: "End time is required" }),
              className: "mt-1"
            }
          ),
          v.endTime && /* @__PURE__ */ r.jsx("p", { className: "text-sm text-red-600 mt-1", children: v.endTime.message }),
          !C && /* @__PURE__ */ r.jsx("p", { className: "text-sm text-red-600 mt-1", children: "End time must be after start time" })
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsxs(se, { htmlFor: "location", children: [
          "Location ",
          /* @__PURE__ */ r.jsx("span", { className: "text-red-500", children: "*" })
        ] }),
        /* @__PURE__ */ r.jsx(
          Pe,
          {
            id: "location",
            ...p("location", { required: "Location is required" }),
            placeholder: "e.g., Main Campus - Room 101",
            className: "mt-1"
          }
        ),
        v.location && /* @__PURE__ */ r.jsx("p", { className: "text-sm text-red-600 mt-1", children: v.location.message })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsxs(se, { htmlFor: "capacity", children: [
          "Max Capacity ",
          /* @__PURE__ */ r.jsx("span", { className: "text-red-500", children: "*" })
        ] }),
        /* @__PURE__ */ r.jsx(
          Pe,
          {
            id: "capacity",
            type: "number",
            min: "1",
            ...p("capacity", {
              required: "Capacity is required",
              valueAsNumber: !0,
              min: { value: 1, message: "Capacity must be at least 1" }
            }),
            placeholder: "e.g., 15",
            className: "mt-1"
          }
        ),
        v.capacity && /* @__PURE__ */ r.jsx("p", { className: "text-sm text-red-600 mt-1", children: v.capacity.message })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "flex gap-3 pt-4", children: [
        /* @__PURE__ */ r.jsx(
          Ce,
          {
            type: "button",
            variant: "ghost",
            onClick: O,
            disabled: a,
            className: "flex-1",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ r.jsx(
          Ce,
          {
            type: "submit",
            disabled: a,
            className: "flex-1 bg-[#326389] hover:bg-[#326389]/90",
            children: a ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              /* @__PURE__ */ r.jsx(Mu, { className: "w-4 h-4 mr-2 animate-spin" }),
              "Saving..."
            ] }) : "Save Class"
          }
        )
      ] })
    ] })
  ] }) });
}
const QS = [
  {
    id: "1",
    title: "Hebrew for Beginners",
    teacher: "Morah Maya",
    grade: "2",
    proficiency: "non-speaker",
    schedule: "Monday, Wednesday",
    time: "4:00 PM - 5:00 PM",
    location: "Main Campus - Room 101",
    enrolled: 8,
    capacity: 12
  },
  {
    id: "2",
    title: "Hebrew Conversation Club",
    teacher: "Moreh Yael",
    grade: "3",
    proficiency: "speaker",
    schedule: "Tuesday, Thursday",
    time: "4:30 PM - 5:30 PM",
    location: "Main Campus - Room 102",
    enrolled: 10,
    capacity: 15
  },
  {
    id: "3",
    title: "Reading Adventures",
    teacher: "Morah Dana",
    grade: "1",
    proficiency: "non-speaker",
    schedule: "Friday",
    time: "3:00 PM - 4:00 PM",
    location: "Downtown Center - Room A",
    enrolled: 12,
    capacity: 12
  }
];
function XS() {
  const [n] = w.useState(QS), [o, a] = w.useState(!1);
  return /* @__PURE__ */ r.jsxs("div", { className: "p-8", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between mb-8", children: [
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "Class Management" }),
        /* @__PURE__ */ r.jsx("p", { className: "text-gray-600 mt-1", children: "Create and manage program classes" })
      ] }),
      /* @__PURE__ */ r.jsxs(
        Ce,
        {
          onClick: () => a(!0),
          className: "bg-[#326389] hover:bg-[#326389]/90",
          children: [
            /* @__PURE__ */ r.jsx(Ts, { className: "w-4 h-4 mr-2" }),
            "Create New Class"
          ]
        }
      )
    ] }),
    n.length === 0 ? /* @__PURE__ */ r.jsx(Me, { className: "p-12 text-center", children: /* @__PURE__ */ r.jsxs("div", { className: "max-w-md mx-auto", children: [
      /* @__PURE__ */ r.jsx("div", { className: "w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ r.jsx(Fi, { className: "w-8 h-8 text-gray-400" }) }),
      /* @__PURE__ */ r.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "No classes created for this season yet" }),
      /* @__PURE__ */ r.jsx("p", { className: "text-gray-600 mb-6", children: "Get started by creating your first class using the button above." }),
      /* @__PURE__ */ r.jsxs(
        Ce,
        {
          onClick: () => a(!0),
          className: "bg-[#326389] hover:bg-[#326389]/90",
          children: [
            /* @__PURE__ */ r.jsx(Ts, { className: "w-4 h-4 mr-2" }),
            "Create Your First Class"
          ]
        }
      )
    ] }) }) : /* @__PURE__ */ r.jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6", children: n.map((i) => /* @__PURE__ */ r.jsxs(Me, { className: "p-6 hover:shadow-lg transition-shadow", children: [
      /* @__PURE__ */ r.jsx("div", { className: "flex items-start justify-between mb-4", children: /* @__PURE__ */ r.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ r.jsx("h3", { className: "font-bold text-gray-900 text-lg mb-1", children: i.title }),
        /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600", children: i.teacher })
      ] }) }),
      /* @__PURE__ */ r.jsxs("div", { className: "space-y-3 mb-4", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-600", children: [
          /* @__PURE__ */ r.jsx(Ls, { className: "w-4 h-4" }),
          /* @__PURE__ */ r.jsx("span", { children: i.schedule })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-600", children: [
          /* @__PURE__ */ r.jsx(Ls, { className: "w-4 h-4" }),
          /* @__PURE__ */ r.jsx("span", { children: i.time })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-600", children: [
          /* @__PURE__ */ r.jsx(Ou, { className: "w-4 h-4" }),
          /* @__PURE__ */ r.jsx("span", { children: i.location })
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-3 pt-4 border-t border-gray-200", children: [
        /* @__PURE__ */ r.jsxs("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800", children: [
          "Grade ",
          i.grade
        ] }),
        /* @__PURE__ */ r.jsx("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800", children: i.proficiency === "speaker" ? "Speaker" : "Non-Speaker" })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "mt-4 pt-4 border-t border-gray-200", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-600", children: [
            /* @__PURE__ */ r.jsx(Li, { className: "w-4 h-4" }),
            /* @__PURE__ */ r.jsx("span", { children: "Enrollment" })
          ] }),
          /* @__PURE__ */ r.jsxs("span", { className: "text-sm font-semibold text-gray-900", children: [
            i.enrolled,
            " / ",
            i.capacity
          ] })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "bg-[#326389] h-2 rounded-full transition-all",
            style: {
              width: `${i.enrolled / i.capacity * 100}%`
            }
          }
        ) })
      ] })
    ] }, i.id)) }),
    /* @__PURE__ */ r.jsx(
      KS,
      {
        open: o,
        onClose: () => a(!1)
      }
    )
  ] });
}
const ZS = [
  {
    id: "1",
    name: "Sarah Cohen",
    grade: "2",
    class: "Hebrew Conversation Club",
    teacher: "Moreh David",
    paymentStatus: "paid",
    hasMedicalAlert: !0,
    medicalNotes: "Severe peanut allergy",
    parentEmail: "parent@cohen.com"
  },
  {
    id: "2",
    name: "David Levi",
    grade: "3",
    class: "Reading Adventures in Hebrew",
    teacher: "Morah Rachel",
    paymentStatus: "paid",
    hasMedicalAlert: !1,
    parentEmail: "parent@levi.com"
  },
  {
    id: "3",
    name: "Rachel Goldberg",
    grade: "2",
    class: "Hebrew for Beginners",
    teacher: "Morah Sarah",
    paymentStatus: "pending",
    hasMedicalAlert: !0,
    medicalNotes: "Asthma - inhaler required",
    parentEmail: "parent@goldberg.com"
  },
  {
    id: "4",
    name: "Michael Katz",
    grade: "1",
    class: "Hebrew Through Music & Art",
    teacher: "Morah Leah",
    paymentStatus: "paid",
    hasMedicalAlert: !1,
    parentEmail: "parent@katz.com"
  },
  {
    id: "5",
    name: "Emma Shapiro",
    grade: "3",
    class: "Reading Adventures in Hebrew",
    teacher: "Morah Rachel",
    paymentStatus: "pending",
    hasMedicalAlert: !1,
    parentEmail: "parent@shapiro.com"
  },
  {
    id: "6",
    name: "Jacob Rosenberg",
    grade: "2",
    class: "Hebrew Conversation Club",
    teacher: "Moreh David",
    paymentStatus: "paid",
    hasMedicalAlert: !0,
    medicalNotes: "Dairy allergy",
    parentEmail: "parent@rosenberg.com"
  },
  {
    id: "7",
    name: "Leah Schwartz",
    grade: "1",
    class: "Hebrew Through Music & Art",
    teacher: "Morah Leah",
    paymentStatus: "overdue",
    hasMedicalAlert: !1,
    parentEmail: "parent@schwartz.com"
  },
  {
    id: "8",
    name: "Noah Stein",
    grade: "2",
    class: "Hebrew for Beginners",
    teacher: "Morah Sarah",
    paymentStatus: "paid",
    hasMedicalAlert: !1,
    parentEmail: "parent@stein.com"
  }
], JS = (n) => {
  switch (n) {
    case "paid":
      return "bg-green-100 text-green-700";
    case "pending":
      return "bg-yellow-100 text-yellow-700";
    case "overdue":
      return "bg-red-100 text-red-700";
  }
};
function eC() {
  const [n, o] = w.useState(!0), [a, i] = w.useState([]), [c, u] = w.useState(""), [f, m] = w.useState("all"), [p, g] = w.useState("all");
  w.useEffect(() => {
    const j = setTimeout(() => {
      i(ZS), o(!1);
    }, 800);
    return () => clearTimeout(j);
  }, []);
  const v = () => {
    const j = [
      ["Student Name", "Grade", "Class", "Teacher", "Payment Status", "Medical Alert", "Parent Email"],
      ...a.map((E) => [
        E.name,
        E.grade,
        E.class,
        E.teacher,
        E.paymentStatus,
        E.hasMedicalAlert ? "Yes" : "No",
        E.parentEmail
      ])
    ].map((E) => E.join(",")).join(`
`), N = new Blob([j], { type: "text/csv" }), C = window.URL.createObjectURL(N), P = document.createElement("a");
    P.href = C, P.download = `tnhp-roster-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.csv`, P.click();
  }, x = () => {
    alert("Email composer would open here to send message to all parents");
  }, b = a.filter((j) => {
    const N = j.name.toLowerCase().includes(c.toLowerCase()) || j.class.toLowerCase().includes(c.toLowerCase()), C = f === "all" || j.class === f, P = p === "all" || j.paymentStatus === p;
    return N && C && P;
  }), S = Array.from(new Set(a.map((j) => j.class)));
  return /* @__PURE__ */ r.jsxs("div", { className: "p-8 space-y-6", children: [
    n && /* @__PURE__ */ r.jsx("div", { className: "fixed inset-0 bg-white/50 z-50 flex items-center justify-center", children: /* @__PURE__ */ r.jsx("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-[#326389]" }) }),
    /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "Live Roster" }),
        /* @__PURE__ */ r.jsxs("p", { className: "text-gray-600 mt-2", children: [
          b.length,
          " students across ",
          S.length,
          " classes"
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ r.jsxs(Ce, { onClick: v, variant: "outline", className: "gap-2", children: [
          /* @__PURE__ */ r.jsx(du, { className: "w-4 h-4" }),
          "Export to CSV"
        ] }),
        /* @__PURE__ */ r.jsxs(Ce, { onClick: x, className: "gap-2 bg-[#326389] hover:bg-[#2a5474]", children: [
          /* @__PURE__ */ r.jsx(Us, { className: "w-4 h-4" }),
          "Email All Parents"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r.jsx(Me, { children: /* @__PURE__ */ r.jsx(Ke, { className: "p-6", children: /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ r.jsx(Np, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }),
        /* @__PURE__ */ r.jsx(
          Pe,
          {
            placeholder: "Search students or classes...",
            value: c,
            onChange: (j) => u(j.target.value),
            className: "pl-10"
          }
        )
      ] }),
      /* @__PURE__ */ r.jsxs(zs, { value: f, onValueChange: m, children: [
        /* @__PURE__ */ r.jsx($s, { children: /* @__PURE__ */ r.jsx(Vs, { placeholder: "Filter by class" }) }),
        /* @__PURE__ */ r.jsxs(Bs, { children: [
          /* @__PURE__ */ r.jsx(Mt, { value: "all", children: "All Classes" }),
          S.map((j) => /* @__PURE__ */ r.jsx(Mt, { value: j, children: j }, j))
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs(zs, { value: p, onValueChange: g, children: [
        /* @__PURE__ */ r.jsx($s, { children: /* @__PURE__ */ r.jsx(Vs, { placeholder: "Filter by payment" }) }),
        /* @__PURE__ */ r.jsxs(Bs, { children: [
          /* @__PURE__ */ r.jsx(Mt, { value: "all", children: "All Payment Statuses" }),
          /* @__PURE__ */ r.jsx(Mt, { value: "paid", children: "Paid" }),
          /* @__PURE__ */ r.jsx(Mt, { value: "pending", children: "Pending" }),
          /* @__PURE__ */ r.jsx(Mt, { value: "overdue", children: "Overdue" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ r.jsxs(Me, { children: [
      /* @__PURE__ */ r.jsx(ot, { children: /* @__PURE__ */ r.jsx(it, { children: "Student Roster" }) }),
      /* @__PURE__ */ r.jsxs(Ke, { className: "p-0", children: [
        /* @__PURE__ */ r.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ r.jsxs("table", { className: "w-full", children: [
          /* @__PURE__ */ r.jsx("thead", { className: "bg-gray-50 border-b border-gray-200", children: /* @__PURE__ */ r.jsxs("tr", { children: [
            /* @__PURE__ */ r.jsx("th", { className: "px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider", children: "Student Name" }),
            /* @__PURE__ */ r.jsx("th", { className: "px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider", children: "Grade" }),
            /* @__PURE__ */ r.jsx("th", { className: "px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider", children: "Class" }),
            /* @__PURE__ */ r.jsx("th", { className: "px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider", children: "Teacher" }),
            /* @__PURE__ */ r.jsx("th", { className: "px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider", children: "Payment Status" }),
            /* @__PURE__ */ r.jsx("th", { className: "px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider", children: "Medical Alert" })
          ] }) }),
          /* @__PURE__ */ r.jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: b.map((j) => /* @__PURE__ */ r.jsxs("tr", { className: "hover:bg-gray-50 transition-colors", children: [
            /* @__PURE__ */ r.jsxs("td", { className: "px-6 py-4 whitespace-nowrap", children: [
              /* @__PURE__ */ r.jsx("div", { className: "font-medium text-gray-900", children: j.name }),
              /* @__PURE__ */ r.jsx("div", { className: "text-sm text-gray-500", children: j.parentEmail })
            ] }),
            /* @__PURE__ */ r.jsxs("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-700", children: [
              "Grade ",
              j.grade
            ] }),
            /* @__PURE__ */ r.jsx("td", { className: "px-6 py-4 text-sm text-gray-700", children: j.class }),
            /* @__PURE__ */ r.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-700", children: j.teacher }),
            /* @__PURE__ */ r.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ r.jsx(
              "span",
              {
                className: `px-3 py-1 rounded-full text-xs font-medium ${JS(
                  j.paymentStatus
                )}`,
                children: j.paymentStatus.charAt(0).toUpperCase() + j.paymentStatus.slice(1)
              }
            ) }),
            /* @__PURE__ */ r.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-center", children: j.hasMedicalAlert ? /* @__PURE__ */ r.jsx("div", { className: "flex items-center justify-center gap-2", children: /* @__PURE__ */ r.jsxs("div", { className: "relative group", children: [
              /* @__PURE__ */ r.jsx($a, { className: "w-5 h-5 text-red-600" }),
              j.medicalNotes && /* @__PURE__ */ r.jsxs("div", { className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10", children: [
                j.medicalNotes,
                /* @__PURE__ */ r.jsx("div", { className: "absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" })
              ] })
            ] }) }) : /* @__PURE__ */ r.jsx("span", { className: "text-gray-400", children: "—" }) })
          ] }, j.id)) })
        ] }) }),
        b.length === 0 && /* @__PURE__ */ r.jsx("div", { className: "text-center py-12", children: /* @__PURE__ */ r.jsx("p", { className: "text-gray-500", children: "No students found matching your filters." }) })
      ] })
    ] })
  ] });
}
const hp = [
  {
    id: "1",
    firstName: "Sarah",
    lastName: "Cohen",
    grade: "2",
    dob: "2018-03-15",
    enrolledClasses: 1,
    status: "active",
    parentName: "Rebecca Cohen",
    parentEmail: "rebecca@cohen.com",
    parentPhone: "(617) 555-0101"
  },
  {
    id: "2",
    firstName: "David",
    lastName: "Levi",
    grade: "3",
    dob: "2017-08-22",
    enrolledClasses: 2,
    status: "active",
    parentName: "Jonathan Levi",
    parentEmail: "jon@levi.com",
    parentPhone: "(617) 555-0102",
    medicalNotes: "None"
  },
  {
    id: "3",
    firstName: "Rachel",
    lastName: "Goldberg",
    grade: "2",
    dob: "2018-01-10",
    enrolledClasses: 1,
    status: "active",
    parentName: "Miriam Goldberg",
    parentEmail: "miriam@goldberg.com",
    parentPhone: "(617) 555-0103",
    medicalNotes: "Asthma - inhaler required"
  },
  {
    id: "4",
    firstName: "Michael",
    lastName: "Katz",
    grade: "1",
    dob: "2019-05-30",
    enrolledClasses: 1,
    status: "active",
    parentName: "Daniel Katz",
    parentEmail: "daniel@katz.com",
    parentPhone: "(617) 555-0104"
  },
  {
    id: "5",
    firstName: "Emma",
    lastName: "Shapiro",
    grade: "3",
    dob: "2017-11-18",
    enrolledClasses: 1,
    status: "active",
    parentName: "Lisa Shapiro",
    parentEmail: "lisa@shapiro.com",
    parentPhone: "(617) 555-0105"
  },
  {
    id: "6",
    firstName: "Jacob",
    lastName: "Rosenberg",
    grade: "2",
    dob: "2018-07-25",
    enrolledClasses: 1,
    status: "active",
    parentName: "Aaron Rosenberg",
    parentEmail: "aaron@rosenberg.com",
    parentPhone: "(617) 555-0106",
    medicalNotes: "Dairy allergy"
  }
];
function tC() {
  const [n, o] = w.useState(""), [a, i] = w.useState(null), c = hp.filter(
    (u) => u.firstName.toLowerCase().includes(n.toLowerCase()) || u.lastName.toLowerCase().includes(n.toLowerCase()) || u.parentEmail.toLowerCase().includes(n.toLowerCase())
  );
  return /* @__PURE__ */ r.jsxs("div", { className: "p-8 space-y-6", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "Student Database" }),
        /* @__PURE__ */ r.jsxs("p", { className: "text-gray-600 mt-2", children: [
          hp.length,
          " total students"
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs(Ce, { className: "gap-2 bg-[#326389] hover:bg-[#2a5474]", children: [
        /* @__PURE__ */ r.jsx(Ws, { className: "w-4 h-4" }),
        "Add New Student"
      ] })
    ] }),
    /* @__PURE__ */ r.jsx(Me, { children: /* @__PURE__ */ r.jsx(Ke, { className: "p-6", children: /* @__PURE__ */ r.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ r.jsx(Np, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }),
      /* @__PURE__ */ r.jsx(
        Pe,
        {
          placeholder: "Search by student name or parent email...",
          value: n,
          onChange: (u) => o(u.target.value),
          className: "pl-10"
        }
      )
    ] }) }) }),
    /* @__PURE__ */ r.jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6", children: c.map((u) => /* @__PURE__ */ r.jsxs(Me, { className: "hover:shadow-lg transition-shadow", children: [
      /* @__PURE__ */ r.jsx(ot, { className: "pb-3", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-start justify-between", children: [
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsxs(it, { className: "text-lg", children: [
            u.firstName,
            " ",
            u.lastName
          ] }),
          /* @__PURE__ */ r.jsxs("p", { className: "text-sm text-gray-600 mt-1", children: [
            "Grade ",
            u.grade
          ] })
        ] }),
        /* @__PURE__ */ r.jsx(
          Wr,
          {
            variant: u.status === "active" ? "default" : "secondary",
            className: u.status === "active" ? "bg-green-100 text-green-700" : "",
            children: u.status
          }
        )
      ] }) }),
      /* @__PURE__ */ r.jsxs(Ke, { className: "space-y-3", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ r.jsxs("div", { children: [
            /* @__PURE__ */ r.jsx("span", { className: "text-gray-600", children: "DOB:" }),
            " ",
            /* @__PURE__ */ r.jsx("span", { className: "text-gray-900", children: new Date(u.dob).toLocaleDateString() })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { children: [
            /* @__PURE__ */ r.jsx("span", { className: "text-gray-600", children: "Classes:" }),
            " ",
            /* @__PURE__ */ r.jsx("span", { className: "font-medium text-gray-900", children: u.enrolledClasses })
          ] })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "pt-3 border-t border-gray-200 space-y-2 text-sm", children: [
          /* @__PURE__ */ r.jsx("div", { className: "font-medium text-gray-700", children: "Parent/Guardian" }),
          /* @__PURE__ */ r.jsx("div", { className: "text-gray-900", children: u.parentName }),
          /* @__PURE__ */ r.jsx("div", { className: "text-gray-600", children: u.parentEmail }),
          /* @__PURE__ */ r.jsx("div", { className: "text-gray-600", children: u.parentPhone })
        ] }),
        u.medicalNotes && /* @__PURE__ */ r.jsxs("div", { className: "pt-3 border-t border-gray-200", children: [
          /* @__PURE__ */ r.jsx("div", { className: "text-xs font-medium text-red-600 mb-1", children: "Medical Notes" }),
          /* @__PURE__ */ r.jsx("div", { className: "text-sm text-gray-700", children: u.medicalNotes })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "pt-3 border-t border-gray-200 flex items-center gap-2", children: [
          /* @__PURE__ */ r.jsxs(
            Ce,
            {
              size: "sm",
              variant: "outline",
              className: "flex-1 gap-2",
              onClick: () => i(u),
              children: [
                /* @__PURE__ */ r.jsx(rw, { className: "w-3 h-3" }),
                "View"
              ]
            }
          ),
          /* @__PURE__ */ r.jsxs(Ce, { size: "sm", variant: "outline", className: "flex-1 gap-2", children: [
            /* @__PURE__ */ r.jsx(kw, { className: "w-3 h-3" }),
            "Edit"
          ] }),
          /* @__PURE__ */ r.jsx(Ce, { size: "sm", variant: "outline", className: "gap-2 text-red-600 hover:text-red-700", children: /* @__PURE__ */ r.jsx(Fu, { className: "w-3 h-3" }) })
        ] })
      ] })
    ] }, u.id)) }),
    c.length === 0 && /* @__PURE__ */ r.jsx(Me, { children: /* @__PURE__ */ r.jsx(Ke, { className: "p-12 text-center", children: /* @__PURE__ */ r.jsx("p", { className: "text-gray-500", children: "No students found matching your search." }) }) }),
    a && /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4",
        onClick: () => i(null),
        children: /* @__PURE__ */ r.jsxs(Me, { className: "w-full max-w-2xl", onClick: (u) => u.stopPropagation(), children: [
          /* @__PURE__ */ r.jsx(ot, { children: /* @__PURE__ */ r.jsxs(it, { children: [
            a.firstName,
            " ",
            a.lastName
          ] }) }),
          /* @__PURE__ */ r.jsxs(Ke, { className: "space-y-4", children: [
            /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ r.jsxs("div", { children: [
                /* @__PURE__ */ r.jsx("div", { className: "text-sm font-medium text-gray-600", children: "Grade" }),
                /* @__PURE__ */ r.jsxs("div", { className: "text-gray-900", children: [
                  "Grade ",
                  a.grade
                ] })
              ] }),
              /* @__PURE__ */ r.jsxs("div", { children: [
                /* @__PURE__ */ r.jsx("div", { className: "text-sm font-medium text-gray-600", children: "Date of Birth" }),
                /* @__PURE__ */ r.jsx("div", { className: "text-gray-900", children: new Date(a.dob).toLocaleDateString() })
              ] }),
              /* @__PURE__ */ r.jsxs("div", { children: [
                /* @__PURE__ */ r.jsx("div", { className: "text-sm font-medium text-gray-600", children: "Enrolled Classes" }),
                /* @__PURE__ */ r.jsx("div", { className: "text-gray-900", children: a.enrolledClasses })
              ] }),
              /* @__PURE__ */ r.jsxs("div", { children: [
                /* @__PURE__ */ r.jsx("div", { className: "text-sm font-medium text-gray-600", children: "Status" }),
                /* @__PURE__ */ r.jsx("div", { className: "text-gray-900", children: a.status })
              ] })
            ] }),
            /* @__PURE__ */ r.jsxs("div", { className: "pt-4 border-t", children: [
              /* @__PURE__ */ r.jsx("div", { className: "text-sm font-medium text-gray-900 mb-2", children: "Parent/Guardian" }),
              /* @__PURE__ */ r.jsxs("div", { className: "space-y-1 text-sm text-gray-700", children: [
                /* @__PURE__ */ r.jsx("div", { children: a.parentName }),
                /* @__PURE__ */ r.jsx("div", { children: a.parentEmail }),
                /* @__PURE__ */ r.jsx("div", { children: a.parentPhone })
              ] })
            ] }),
            /* @__PURE__ */ r.jsxs("div", { className: "flex justify-end gap-2", children: [
              /* @__PURE__ */ r.jsx(Ce, { variant: "outline", onClick: () => i(null), children: "Close" }),
              /* @__PURE__ */ r.jsx(Ce, { className: "bg-[#326389] hover:bg-[#2a5474]", children: "Edit Student" })
            ] })
          ] })
        ] })
      }
    )
  ] });
}
var xd = "Switch", [nC] = yn(xd), [rC, sC] = nC(xd), ov = w.forwardRef(
  (n, o) => {
    const {
      __scopeSwitch: a,
      name: i,
      checked: c,
      defaultChecked: u,
      required: f,
      disabled: m,
      value: p = "on",
      onCheckedChange: g,
      form: v,
      ...x
    } = n, [b, S] = w.useState(null), j = qe(o, (O) => S(O)), N = w.useRef(!1), C = b ? v || !!b.closest("form") : !0, [P = !1, E] = Gr({
      prop: c,
      defaultProp: u,
      onChange: g
    });
    return /* @__PURE__ */ r.jsxs(rC, { scope: a, checked: P, disabled: m, children: [
      /* @__PURE__ */ r.jsx(
        Ve.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": P,
          "aria-required": f,
          "data-state": cv(P),
          "data-disabled": m ? "" : void 0,
          disabled: m,
          value: p,
          ...x,
          ref: j,
          onClick: ze(n.onClick, (O) => {
            E((F) => !F), C && (N.current = O.isPropagationStopped(), N.current || O.stopPropagation());
          })
        }
      ),
      C && /* @__PURE__ */ r.jsx(
        aC,
        {
          control: b,
          bubbles: !N.current,
          name: i,
          value: p,
          checked: P,
          required: f,
          disabled: m,
          form: v,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
ov.displayName = xd;
var iv = "SwitchThumb", lv = w.forwardRef(
  (n, o) => {
    const { __scopeSwitch: a, ...i } = n, c = sC(iv, a);
    return /* @__PURE__ */ r.jsx(
      Ve.span,
      {
        "data-state": cv(c.checked),
        "data-disabled": c.disabled ? "" : void 0,
        ...i,
        ref: o
      }
    );
  }
);
lv.displayName = iv;
var aC = (n) => {
  const { control: o, checked: a, bubbles: i = !0, ...c } = n, u = w.useRef(null), f = Ui(a), m = Bi(o);
  return w.useEffect(() => {
    const p = u.current, g = window.HTMLInputElement.prototype, x = Object.getOwnPropertyDescriptor(g, "checked").set;
    if (f !== a && x) {
      const b = new Event("click", { bubbles: i });
      x.call(p, a), p.dispatchEvent(b);
    }
  }, [f, a, i]), /* @__PURE__ */ r.jsx(
    "input",
    {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: a,
      ...c,
      tabIndex: -1,
      ref: u,
      style: {
        ...n.style,
        ...m,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function cv(n) {
  return n ? "checked" : "unchecked";
}
var oC = ov, iC = lv;
function qn({
  className: n,
  ...o
}) {
  return /* @__PURE__ */ r.jsx(
    oC,
    {
      "data-slot": "switch",
      className: Be(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-switch-background focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n
      ),
      ...o,
      children: /* @__PURE__ */ r.jsx(
        iC,
        {
          "data-slot": "switch-thumb",
          className: Be(
            "bg-card dark:data-[state=unchecked]:bg-card-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  );
}
var uv = "AlertDialog", [lC] = yn(uv, [
  Dx
]), Xn = Dx(), dv = (n) => {
  const { __scopeAlertDialog: o, ...a } = n, i = Xn(o);
  return /* @__PURE__ */ r.jsx(Kx, { ...i, ...a, modal: !0 });
};
dv.displayName = uv;
var cC = "AlertDialogTrigger", uC = w.forwardRef(
  (n, o) => {
    const { __scopeAlertDialog: a, ...i } = n, c = Xn(a);
    return /* @__PURE__ */ r.jsx(US, { ...c, ...i, ref: o });
  }
);
uC.displayName = cC;
var dC = "AlertDialogPortal", fv = (n) => {
  const { __scopeAlertDialog: o, ...a } = n, i = Xn(o);
  return /* @__PURE__ */ r.jsx(Qx, { ...i, ...a });
};
fv.displayName = dC;
var fC = "AlertDialogOverlay", mv = w.forwardRef(
  (n, o) => {
    const { __scopeAlertDialog: a, ...i } = n, c = Xn(a);
    return /* @__PURE__ */ r.jsx(Xx, { ...c, ...i, ref: o });
  }
);
mv.displayName = fC;
var Fs = "AlertDialogContent", [mC, hC] = lC(Fs), hv = w.forwardRef(
  (n, o) => {
    const { __scopeAlertDialog: a, children: i, ...c } = n, u = Xn(a), f = w.useRef(null), m = qe(o, f), p = w.useRef(null);
    return /* @__PURE__ */ r.jsx(
      zS,
      {
        contentName: Fs,
        titleName: pv,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ r.jsx(mC, { scope: a, cancelRef: p, children: /* @__PURE__ */ r.jsxs(
          Zx,
          {
            role: "alertdialog",
            ...u,
            ...c,
            ref: m,
            onOpenAutoFocus: ze(c.onOpenAutoFocus, (g) => {
              var v;
              g.preventDefault(), (v = p.current) == null || v.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (g) => g.preventDefault(),
            onInteractOutside: (g) => g.preventDefault(),
            children: [
              /* @__PURE__ */ r.jsx(Sp, { children: i }),
              /* @__PURE__ */ r.jsx(gC, { contentRef: f })
            ]
          }
        ) })
      }
    );
  }
);
hv.displayName = Fs;
var pv = "AlertDialogTitle", gv = w.forwardRef(
  (n, o) => {
    const { __scopeAlertDialog: a, ...i } = n, c = Xn(a);
    return /* @__PURE__ */ r.jsx(Jx, { ...c, ...i, ref: o });
  }
);
gv.displayName = pv;
var xv = "AlertDialogDescription", vv = w.forwardRef((n, o) => {
  const { __scopeAlertDialog: a, ...i } = n, c = Xn(a);
  return /* @__PURE__ */ r.jsx(ev, { ...c, ...i, ref: o });
});
vv.displayName = xv;
var pC = "AlertDialogAction", yv = w.forwardRef(
  (n, o) => {
    const { __scopeAlertDialog: a, ...i } = n, c = Xn(a);
    return /* @__PURE__ */ r.jsx(gd, { ...c, ...i, ref: o });
  }
);
yv.displayName = pC;
var wv = "AlertDialogCancel", bv = w.forwardRef(
  (n, o) => {
    const { __scopeAlertDialog: a, ...i } = n, { cancelRef: c } = hC(wv, a), u = Xn(a), f = qe(o, c);
    return /* @__PURE__ */ r.jsx(gd, { ...u, ...i, ref: f });
  }
);
bv.displayName = wv;
var gC = ({ contentRef: n }) => {
  const o = `\`${Fs}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${Fs}\` by passing a \`${xv}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${Fs}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return w.useEffect(() => {
    var i;
    document.getElementById(
      (i = n.current) == null ? void 0 : i.getAttribute("aria-describedby")
    ) || console.warn(o);
  }, [o, n]), null;
}, xC = dv, vC = fv, yC = mv, wC = hv, bC = yv, NC = bv, jC = gv, SC = vv;
function CC({
  ...n
}) {
  return /* @__PURE__ */ r.jsx(xC, { "data-slot": "alert-dialog", ...n });
}
function kC({
  ...n
}) {
  return /* @__PURE__ */ r.jsx(vC, { "data-slot": "alert-dialog-portal", ...n });
}
function EC({
  className: n,
  ...o
}) {
  return /* @__PURE__ */ r.jsx(
    yC,
    {
      "data-slot": "alert-dialog-overlay",
      className: Be(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        n
      ),
      ...o
    }
  );
}
function PC({
  className: n,
  ...o
}) {
  return /* @__PURE__ */ r.jsxs(kC, { children: [
    /* @__PURE__ */ r.jsx(EC, {}),
    /* @__PURE__ */ r.jsx(
      wC,
      {
        "data-slot": "alert-dialog-content",
        className: Be(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          n
        ),
        ...o
      }
    )
  ] });
}
function _C({
  className: n,
  ...o
}) {
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: Be("flex flex-col gap-2 text-center sm:text-left", n),
      ...o
    }
  );
}
function RC({
  className: n,
  ...o
}) {
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: Be(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        n
      ),
      ...o
    }
  );
}
function AC({
  className: n,
  ...o
}) {
  return /* @__PURE__ */ r.jsx(
    jC,
    {
      "data-slot": "alert-dialog-title",
      className: Be("text-lg font-semibold", n),
      ...o
    }
  );
}
function TC({
  className: n,
  ...o
}) {
  return /* @__PURE__ */ r.jsx(
    SC,
    {
      "data-slot": "alert-dialog-description",
      className: Be("text-muted-foreground text-sm", n),
      ...o
    }
  );
}
function DC({
  className: n,
  ...o
}) {
  return /* @__PURE__ */ r.jsx(
    bC,
    {
      className: Be(zu(), n),
      ...o
    }
  );
}
function MC({
  className: n,
  ...o
}) {
  return /* @__PURE__ */ r.jsx(
    NC,
    {
      className: Be(zu({ variant: "outline" }), n),
      ...o
    }
  );
}
function OC({ open: n, onClose: o, onPromoCreated: a }) {
  const [i, c] = w.useState(!1), {
    register: u,
    handleSubmit: f,
    formState: { errors: m },
    reset: p
  } = dd(), g = async (x) => {
    c(!0), await new Promise((S) => setTimeout(S, 1500));
    const b = {
      id: Math.random().toString(36).substring(7),
      code: x.code.toUpperCase(),
      discountAmount: x.discountAmount,
      expiryDate: x.expiryDate
    };
    a(b), qt.success("Promo code created successfully!"), c(!1), p(), o();
  }, v = () => {
    i || (p(), o());
  };
  return /* @__PURE__ */ r.jsx(tv, { open: n, onOpenChange: v, children: /* @__PURE__ */ r.jsxs(nv, { className: "max-w-md", children: [
    /* @__PURE__ */ r.jsxs(rv, { children: [
      /* @__PURE__ */ r.jsx(sv, { className: "text-2xl font-bold", children: "Create Promo Code" }),
      /* @__PURE__ */ r.jsx(av, { children: "Create a promotional discount code for students to use during registration." })
    ] }),
    /* @__PURE__ */ r.jsxs("form", { onSubmit: f(g), className: "space-y-6 mt-4", children: [
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsxs(se, { htmlFor: "code", children: [
          "Promo Code ",
          /* @__PURE__ */ r.jsx("span", { className: "text-red-500", children: "*" })
        ] }),
        /* @__PURE__ */ r.jsx(
          Pe,
          {
            id: "code",
            ...u("code", {
              required: "Promo code is required",
              pattern: {
                value: /^[A-Z0-9]+$/i,
                message: "Only letters and numbers allowed"
              }
            }),
            placeholder: "e.g., SUMMER2024",
            className: "mt-1 uppercase",
            maxLength: 20
          }
        ),
        m.code && /* @__PURE__ */ r.jsx("p", { className: "text-sm text-red-600 mt-1", children: m.code.message }),
        /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600 mt-1", children: "Letters and numbers only, will be converted to uppercase" })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsxs(se, { htmlFor: "discountAmount", children: [
          "Discount Amount ",
          /* @__PURE__ */ r.jsx("span", { className: "text-red-500", children: "*" })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "relative mt-1", children: [
          /* @__PURE__ */ r.jsx("span", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-500", children: "$" }),
          /* @__PURE__ */ r.jsx(
            Pe,
            {
              id: "discountAmount",
              type: "number",
              step: "0.01",
              min: "0",
              ...u("discountAmount", {
                required: "Discount amount is required",
                min: { value: 0.01, message: "Must be greater than $0" }
              }),
              className: "pl-7",
              placeholder: "50.00"
            }
          )
        ] }),
        m.discountAmount && /* @__PURE__ */ r.jsx("p", { className: "text-sm text-red-600 mt-1", children: m.discountAmount.message }),
        /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600 mt-1", children: "Fixed dollar amount off total" })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsxs(se, { htmlFor: "expiryDate", children: [
          "Expiry Date ",
          /* @__PURE__ */ r.jsx("span", { className: "text-red-500", children: "*" })
        ] }),
        /* @__PURE__ */ r.jsx(
          Pe,
          {
            id: "expiryDate",
            type: "date",
            ...u("expiryDate", {
              required: "Expiry date is required",
              validate: (x) => {
                const b = new Date(x), S = /* @__PURE__ */ new Date();
                return S.setHours(0, 0, 0, 0), b >= S || "Expiry date must be in the future";
              }
            }),
            className: "mt-1",
            min: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
          }
        ),
        m.expiryDate && /* @__PURE__ */ r.jsx("p", { className: "text-sm text-red-600 mt-1", children: m.expiryDate.message }),
        /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600 mt-1", children: "Code will expire at end of this date" })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "flex gap-3 pt-4", children: [
        /* @__PURE__ */ r.jsx(
          Ce,
          {
            type: "button",
            variant: "ghost",
            onClick: v,
            disabled: i,
            className: "flex-1",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ r.jsx(
          Ce,
          {
            type: "submit",
            disabled: i,
            className: "flex-1 bg-[#326389] hover:bg-[#326389]/90",
            children: i ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              /* @__PURE__ */ r.jsx(Mu, { className: "w-4 h-4 mr-2 animate-spin" }),
              "Creating..."
            ] }) : "Create Promo Code"
          }
        )
      ] })
    ] })
  ] }) });
}
const FC = [
  {
    id: "1",
    code: "SUMMER2024",
    discountAmount: 50,
    expiryDate: "2024-08-31"
  },
  {
    id: "2",
    code: "WELCOME10",
    discountAmount: 10,
    expiryDate: "2024-12-31"
  }
];
function LC() {
  const [n, o] = w.useState(!1), [a, i] = w.useState(!0), [c, u] = w.useState(FC), [f, m] = w.useState(!1), [p, g] = w.useState(null), {
    register: v,
    handleSubmit: x,
    formState: { errors: b }
  } = dd({
    defaultValues: {
      registrationFee: 75,
      materialsFee: 25,
      baseMonthlyTuition: 450,
      earlyBirdDeadline: "2024-07-15",
      earlyBirdDiscount: 15
    }
  }), S = async (C) => {
    o(!0), await new Promise((P) => setTimeout(P, 1500)), qt.success("Financial settings saved successfully!"), o(!1);
  }, j = (C) => {
    u((P) => P.filter((E) => E.id !== C)), g(null), qt.success("Promo code deleted successfully");
  }, N = (C) => new Date(C).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
  return /* @__PURE__ */ r.jsxs("div", { className: "p-8", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ r.jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "Financial Settings" }),
      /* @__PURE__ */ r.jsx("p", { className: "text-gray-600 mt-1", children: "Manage fees, pricing, and promotions" })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "max-w-4xl space-y-6", children: [
      /* @__PURE__ */ r.jsxs(Me, { className: "p-6", children: [
        /* @__PURE__ */ r.jsx("h2", { className: "text-xl font-semibold text-gray-900 mb-6", children: "Global Fees" }),
        /* @__PURE__ */ r.jsxs("form", { onSubmit: x(S), className: "space-y-6", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ r.jsxs("div", { children: [
              /* @__PURE__ */ r.jsxs(se, { htmlFor: "registrationFee", children: [
                "Registration Fee ",
                /* @__PURE__ */ r.jsx("span", { className: "text-red-500", children: "*" })
              ] }),
              /* @__PURE__ */ r.jsxs("div", { className: "relative mt-1", children: [
                /* @__PURE__ */ r.jsx("span", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-500", children: "$" }),
                /* @__PURE__ */ r.jsx(
                  Pe,
                  {
                    id: "registrationFee",
                    type: "number",
                    step: "0.01",
                    min: "0",
                    ...v("registrationFee", {
                      required: "Registration fee is required",
                      min: { value: 0, message: "Must be positive" }
                    }),
                    className: "pl-7",
                    placeholder: "75.00"
                  }
                )
              ] }),
              b.registrationFee && /* @__PURE__ */ r.jsx("p", { className: "text-sm text-red-600 mt-1", children: b.registrationFee.message }),
              /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600 mt-1", children: "One-time fee per family" })
            ] }),
            /* @__PURE__ */ r.jsxs("div", { children: [
              /* @__PURE__ */ r.jsxs(se, { htmlFor: "materialsFee", children: [
                "Materials Fee ",
                /* @__PURE__ */ r.jsx("span", { className: "text-red-500", children: "*" })
              ] }),
              /* @__PURE__ */ r.jsxs("div", { className: "relative mt-1", children: [
                /* @__PURE__ */ r.jsx("span", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-500", children: "$" }),
                /* @__PURE__ */ r.jsx(
                  Pe,
                  {
                    id: "materialsFee",
                    type: "number",
                    step: "0.01",
                    min: "0",
                    ...v("materialsFee", {
                      required: "Materials fee is required",
                      min: { value: 0, message: "Must be positive" }
                    }),
                    className: "pl-7",
                    placeholder: "25.00"
                  }
                )
              ] }),
              b.materialsFee && /* @__PURE__ */ r.jsx("p", { className: "text-sm text-red-600 mt-1", children: b.materialsFee.message }),
              /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600 mt-1", children: "Per student" })
            ] })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { children: [
            /* @__PURE__ */ r.jsxs(se, { htmlFor: "baseMonthlyTuition", children: [
              "Base Monthly Tuition ",
              /* @__PURE__ */ r.jsx("span", { className: "text-red-500", children: "*" })
            ] }),
            /* @__PURE__ */ r.jsxs("div", { className: "relative mt-1", children: [
              /* @__PURE__ */ r.jsx("span", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-500", children: "$" }),
              /* @__PURE__ */ r.jsx(
                Pe,
                {
                  id: "baseMonthlyTuition",
                  type: "number",
                  step: "0.01",
                  min: "0",
                  ...v("baseMonthlyTuition", {
                    required: "Base tuition is required",
                    min: { value: 0, message: "Must be positive" }
                  }),
                  className: "pl-7",
                  placeholder: "450.00"
                }
              )
            ] }),
            b.baseMonthlyTuition && /* @__PURE__ */ r.jsx("p", { className: "text-sm text-red-600 mt-1", children: b.baseMonthlyTuition.message }),
            /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600 mt-1", children: "Default monthly tuition per student" })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "pt-6 border-t border-gray-200", children: [
            /* @__PURE__ */ r.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: "Early Bird Discount" }),
            /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ r.jsxs("div", { children: [
                /* @__PURE__ */ r.jsx(se, { htmlFor: "earlyBirdDeadline", children: "Deadline Date" }),
                /* @__PURE__ */ r.jsxs("div", { className: "relative mt-1", children: [
                  /* @__PURE__ */ r.jsx(Tu, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" }),
                  /* @__PURE__ */ r.jsx(
                    Pe,
                    {
                      id: "earlyBirdDeadline",
                      type: "date",
                      ...v("earlyBirdDeadline"),
                      className: "pl-10"
                    }
                  )
                ] }),
                /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600 mt-1", children: "Register before this date to receive discount" })
              ] }),
              /* @__PURE__ */ r.jsxs("div", { children: [
                /* @__PURE__ */ r.jsx(se, { htmlFor: "earlyBirdDiscount", children: "Discount Percentage" }),
                /* @__PURE__ */ r.jsxs("div", { className: "relative mt-1", children: [
                  /* @__PURE__ */ r.jsx(
                    Pe,
                    {
                      id: "earlyBirdDiscount",
                      type: "number",
                      step: "1",
                      min: "0",
                      max: "100",
                      ...v("earlyBirdDiscount", {
                        min: { value: 0, message: "Must be 0-100" },
                        max: { value: 100, message: "Must be 0-100" }
                      }),
                      placeholder: "15"
                    }
                  ),
                  /* @__PURE__ */ r.jsx("span", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-500", children: "%" })
                ] }),
                b.earlyBirdDiscount && /* @__PURE__ */ r.jsx("p", { className: "text-sm text-red-600 mt-1", children: b.earlyBirdDiscount.message }),
                /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600 mt-1", children: "Percentage off tuition" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ r.jsx("div", { className: "pt-4", children: /* @__PURE__ */ r.jsx(
            Ce,
            {
              type: "submit",
              disabled: n,
              className: "bg-[#326389] hover:bg-[#326389]/90",
              children: n ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                /* @__PURE__ */ r.jsx(Mu, { className: "w-4 h-4 mr-2 animate-spin" }),
                "Saving..."
              ] }) : "Save Settings"
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs(Me, { className: "p-6", children: [
        /* @__PURE__ */ r.jsx("h2", { className: "text-xl font-semibold text-gray-900 mb-6", children: "Discount Engine" }),
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between p-4 bg-gray-50 rounded-lg mb-6", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ r.jsx(se, { htmlFor: "sibling-discount", className: "text-base font-semibold", children: "Automatic Sibling Discount (10%)" }),
            /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600 mt-1", children: "Apply 10% discount when 2+ students enroll" })
          ] }),
          /* @__PURE__ */ r.jsx(
            qn,
            {
              id: "sibling-discount",
              checked: a,
              onCheckedChange: i
            }
          )
        ] }),
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ r.jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "Active Promo Codes" }),
            /* @__PURE__ */ r.jsxs(
              Ce,
              {
                onClick: () => m(!0),
                variant: "outline",
                size: "sm",
                children: [
                  /* @__PURE__ */ r.jsx(Ts, { className: "w-4 h-4 mr-2" }),
                  "Create Promo Code"
                ]
              }
            )
          ] }),
          c.length === 0 ? /* @__PURE__ */ r.jsxs("div", { className: "text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300", children: [
            /* @__PURE__ */ r.jsx("div", { className: "w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ r.jsx(Ts, { className: "w-6 h-6 text-gray-400" }) }),
            /* @__PURE__ */ r.jsx("h4", { className: "text-sm font-semibold text-gray-900 mb-1", children: "No active promo codes" }),
            /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600 mb-4", children: "Create your first promo code to offer discounts" }),
            /* @__PURE__ */ r.jsxs(
              Ce,
              {
                onClick: () => m(!0),
                variant: "outline",
                size: "sm",
                children: [
                  /* @__PURE__ */ r.jsx(Ts, { className: "w-4 h-4 mr-2" }),
                  "Create Promo Code"
                ]
              }
            )
          ] }) : /* @__PURE__ */ r.jsx("div", { className: "border border-gray-200 rounded-lg overflow-hidden", children: /* @__PURE__ */ r.jsxs("table", { className: "w-full", children: [
            /* @__PURE__ */ r.jsx("thead", { className: "bg-gray-50 border-b border-gray-200", children: /* @__PURE__ */ r.jsxs("tr", { children: [
              /* @__PURE__ */ r.jsx("th", { className: "px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider", children: "Code" }),
              /* @__PURE__ */ r.jsx("th", { className: "px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider", children: "Discount Amount" }),
              /* @__PURE__ */ r.jsx("th", { className: "px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider", children: "Expiry Date" }),
              /* @__PURE__ */ r.jsx("th", { className: "px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider", children: "Action" })
            ] }) }),
            /* @__PURE__ */ r.jsx("tbody", { className: "divide-y divide-gray-200 bg-white", children: c.map((C) => /* @__PURE__ */ r.jsxs("tr", { className: "hover:bg-gray-50", children: [
              /* @__PURE__ */ r.jsx("td", { className: "px-4 py-3 text-sm font-medium text-gray-900", children: /* @__PURE__ */ r.jsx("code", { className: "px-2 py-1 bg-gray-100 rounded text-[#326389]", children: C.code }) }),
              /* @__PURE__ */ r.jsxs("td", { className: "px-4 py-3 text-sm text-gray-700", children: [
                "$",
                C.discountAmount
              ] }),
              /* @__PURE__ */ r.jsx("td", { className: "px-4 py-3 text-sm text-gray-700", children: N(C.expiryDate) }),
              /* @__PURE__ */ r.jsx("td", { className: "px-4 py-3 text-right", children: /* @__PURE__ */ r.jsxs(
                "button",
                {
                  onClick: () => g(C.id),
                  className: "inline-flex items-center gap-1 px-3 py-1 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded transition-colors",
                  children: [
                    /* @__PURE__ */ r.jsx(Fu, { className: "w-4 h-4" }),
                    "Delete"
                  ]
                }
              ) })
            ] }, C.id)) })
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r.jsx(
      OC,
      {
        open: f,
        onClose: () => m(!1),
        onPromoCreated: (C) => {
          u((P) => [...P, C]);
        }
      }
    ),
    /* @__PURE__ */ r.jsx(CC, { open: !!p, onOpenChange: () => g(null), children: /* @__PURE__ */ r.jsxs(PC, { children: [
      /* @__PURE__ */ r.jsxs(_C, { children: [
        /* @__PURE__ */ r.jsx(AC, { children: "Delete Promo Code" }),
        /* @__PURE__ */ r.jsx(TC, { children: "Are you sure you want to delete this promo code? This action cannot be undone and students will no longer be able to use this code." })
      ] }),
      /* @__PURE__ */ r.jsxs(RC, { children: [
        /* @__PURE__ */ r.jsx(MC, { children: "Cancel" }),
        /* @__PURE__ */ r.jsx(
          DC,
          {
            onClick: () => p && j(p),
            className: "bg-red-600 hover:bg-red-700",
            children: "Delete"
          }
        )
      ] })
    ] }) })
  ] });
}
var IC = "Separator", pp = "horizontal", zC = ["horizontal", "vertical"], Nv = w.forwardRef((n, o) => {
  const { decorative: a, orientation: i = pp, ...c } = n, u = VC(i) ? i : pp, m = a ? { role: "none" } : { "aria-orientation": u === "vertical" ? u : void 0, role: "separator" };
  return /* @__PURE__ */ r.jsx(
    Ve.div,
    {
      "data-orientation": u,
      ...m,
      ...c,
      ref: o
    }
  );
});
Nv.displayName = IC;
function VC(n) {
  return zC.includes(n);
}
var $C = Nv;
function Gn({
  className: n,
  orientation: o = "horizontal",
  decorative: a = !0,
  ...i
}) {
  return /* @__PURE__ */ r.jsx(
    $C,
    {
      "data-slot": "separator-root",
      decorative: a,
      orientation: o,
      className: Be(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        n
      ),
      ...i
    }
  );
}
function BC() {
  return /* @__PURE__ */ r.jsxs("div", { className: "p-8 space-y-6", children: [
    /* @__PURE__ */ r.jsxs("div", { children: [
      /* @__PURE__ */ r.jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "System Settings" }),
      /* @__PURE__ */ r.jsx("p", { className: "text-gray-600 mt-2", children: "Manage your organization settings and preferences" })
    ] }),
    /* @__PURE__ */ r.jsxs(Me, { children: [
      /* @__PURE__ */ r.jsxs(ot, { children: [
        /* @__PURE__ */ r.jsx(it, { children: "Organization Information" }),
        /* @__PURE__ */ r.jsx(Fa, { children: "Update your organization's basic information" })
      ] }),
      /* @__PURE__ */ r.jsxs(Ke, { className: "space-y-4", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ r.jsx(se, { htmlFor: "org-name", children: "Organization Name" }),
            /* @__PURE__ */ r.jsx(Pe, { id: "org-name", defaultValue: "The New Hebrew Program" })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ r.jsx(se, { htmlFor: "org-email", children: "Primary Email" }),
            /* @__PURE__ */ r.jsx(Pe, { id: "org-email", type: "email", defaultValue: "info@tnhp.org" })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ r.jsx(se, { htmlFor: "org-phone", children: "Phone Number" }),
            /* @__PURE__ */ r.jsx(Pe, { id: "org-phone", type: "tel", defaultValue: "(617) 555-0100" })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ r.jsx(se, { htmlFor: "org-website", children: "Website" }),
            /* @__PURE__ */ r.jsx(Pe, { id: "org-website", type: "url", defaultValue: "https://tnhp.org" })
          ] })
        ] }),
        /* @__PURE__ */ r.jsx(Gn, {}),
        /* @__PURE__ */ r.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ r.jsx(se, { htmlFor: "org-address", children: "Address" }),
          /* @__PURE__ */ r.jsx(Pe, { id: "org-address", defaultValue: "123 Hebrew Lane, Brookline, MA 02446" })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ r.jsx(Ce, { className: "bg-[#326389] hover:bg-[#2a5474]", children: "Save Changes" }) })
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs(Me, { children: [
      /* @__PURE__ */ r.jsxs(ot, { children: [
        /* @__PURE__ */ r.jsx(it, { children: "Registration Settings" }),
        /* @__PURE__ */ r.jsx(Fa, { children: "Configure registration and enrollment preferences" })
      ] }),
      /* @__PURE__ */ r.jsxs(Ke, { className: "space-y-6", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "space-y-0.5", children: [
            /* @__PURE__ */ r.jsx(se, { children: "Allow New Registrations" }),
            /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600", children: "Enable or disable new family registrations" })
          ] }),
          /* @__PURE__ */ r.jsx(qn, { defaultChecked: !0 })
        ] }),
        /* @__PURE__ */ r.jsx(Gn, {}),
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "space-y-0.5", children: [
            /* @__PURE__ */ r.jsx(se, { children: "Require Medical Forms" }),
            /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600", children: "Require families to complete medical information forms" })
          ] }),
          /* @__PURE__ */ r.jsx(qn, { defaultChecked: !0 })
        ] }),
        /* @__PURE__ */ r.jsx(Gn, {}),
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "space-y-0.5", children: [
            /* @__PURE__ */ r.jsx(se, { children: "Auto-Approve Registrations" }),
            /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600", children: "Automatically approve registrations without manual review" })
          ] }),
          /* @__PURE__ */ r.jsx(qn, {})
        ] }),
        /* @__PURE__ */ r.jsx(Gn, {}),
        /* @__PURE__ */ r.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ r.jsx(se, { htmlFor: "max-students", children: "Maximum Students Per Class" }),
          /* @__PURE__ */ r.jsx(Pe, { id: "max-students", type: "number", defaultValue: "12", className: "max-w-xs" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs(Me, { children: [
      /* @__PURE__ */ r.jsxs(ot, { children: [
        /* @__PURE__ */ r.jsx(it, { children: "Payment Settings" }),
        /* @__PURE__ */ r.jsx(Fa, { children: "Configure payment and billing preferences" })
      ] }),
      /* @__PURE__ */ r.jsxs(Ke, { className: "space-y-6", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "space-y-0.5", children: [
            /* @__PURE__ */ r.jsx(se, { children: "Enable Payment Plans" }),
            /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600", children: "Allow families to pay in monthly installments" })
          ] }),
          /* @__PURE__ */ r.jsx(qn, { defaultChecked: !0 })
        ] }),
        /* @__PURE__ */ r.jsx(Gn, {}),
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "space-y-0.5", children: [
            /* @__PURE__ */ r.jsx(se, { children: "Automatic Late Fees" }),
            /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600", children: "Automatically apply late fees to overdue payments" })
          ] }),
          /* @__PURE__ */ r.jsx(qn, { defaultChecked: !0 })
        ] }),
        /* @__PURE__ */ r.jsx(Gn, {}),
        /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ r.jsx(se, { htmlFor: "late-fee", children: "Late Fee Amount" }),
            /* @__PURE__ */ r.jsx(Pe, { id: "late-fee", type: "number", defaultValue: "25", placeholder: "$" })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ r.jsx(se, { htmlFor: "grace-period", children: "Grace Period (days)" }),
            /* @__PURE__ */ r.jsx(Pe, { id: "grace-period", type: "number", defaultValue: "5" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs(Me, { children: [
      /* @__PURE__ */ r.jsxs(ot, { children: [
        /* @__PURE__ */ r.jsx(it, { children: "Email Notifications" }),
        /* @__PURE__ */ r.jsx(Fa, { children: "Configure automated email notifications" })
      ] }),
      /* @__PURE__ */ r.jsxs(Ke, { className: "space-y-6", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "space-y-0.5", children: [
            /* @__PURE__ */ r.jsx(se, { children: "Registration Confirmation" }),
            /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600", children: "Send confirmation email after registration" })
          ] }),
          /* @__PURE__ */ r.jsx(qn, { defaultChecked: !0 })
        ] }),
        /* @__PURE__ */ r.jsx(Gn, {}),
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "space-y-0.5", children: [
            /* @__PURE__ */ r.jsx(se, { children: "Payment Reminders" }),
            /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600", children: "Send reminders 3 days before payment due date" })
          ] }),
          /* @__PURE__ */ r.jsx(qn, { defaultChecked: !0 })
        ] }),
        /* @__PURE__ */ r.jsx(Gn, {}),
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "space-y-0.5", children: [
            /* @__PURE__ */ r.jsx(se, { children: "Class Updates" }),
            /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600", children: "Notify families when class information changes" })
          ] }),
          /* @__PURE__ */ r.jsx(qn, { defaultChecked: !0 })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs(Me, { children: [
      /* @__PURE__ */ r.jsxs(ot, { children: [
        /* @__PURE__ */ r.jsx(it, { children: "Data & Privacy" }),
        /* @__PURE__ */ r.jsx(Fa, { children: "Manage data retention and privacy settings" })
      ] }),
      /* @__PURE__ */ r.jsxs(Ke, { className: "space-y-4", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ r.jsx(se, { children: "Data Retention Period" }),
          /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600 mb-2", children: "How long to retain student and family data after enrollment ends" }),
          /* @__PURE__ */ r.jsx(Pe, { defaultValue: "5 years", className: "max-w-xs" })
        ] }),
        /* @__PURE__ */ r.jsx(Gn, {}),
        /* @__PURE__ */ r.jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ r.jsx(Ce, { variant: "outline", children: "Export All Data" }),
          /* @__PURE__ */ r.jsx(Ce, { variant: "outline", className: "text-red-600 hover:text-red-700", children: "Delete Inactive Accounts" })
        ] })
      ] })
    ] })
  ] });
}
function UC() {
  const [n, o] = w.useState("dashboard"), a = () => {
    switch (n) {
      case "dashboard":
        return /* @__PURE__ */ r.jsx(mS, {});
      case "classes":
        return /* @__PURE__ */ r.jsx(XS, {});
      case "rosters":
        return /* @__PURE__ */ r.jsx(eC, {});
      case "students":
        return /* @__PURE__ */ r.jsx(tC, {});
      case "financials":
        return /* @__PURE__ */ r.jsx(LC, {});
      case "settings":
        return /* @__PURE__ */ r.jsx(BC, {});
      default:
        return null;
    }
  };
  return /* @__PURE__ */ r.jsx(cS, { currentView: n, onNavigate: o, children: a() });
}
function vd(n, o) {
  return class extends HTMLElement {
    constructor() {
      super(...arguments), this.root = null, this.mountPoint = null;
    }
    static get observedAttributes() {
      return ["rpc-response"];
    }
    attributeChangedCallback(a, i, c) {
      if (c)
        try {
          const u = JSON.parse(c);
          window.dispatchEvent(
            new CustomEvent(`wix:response:${u.requestId}`, { detail: u })
          );
        } catch {
          console.error(`[TNHP:${o}] Failed to parse rpc-response attribute:`, c);
        }
    }
    connectedCallback() {
      console.log(`[TNHP:${o}] Custom Element connected to DOM.`), this.style.display = "block", this.style.width = "100%", this.style.minHeight = "100px", this.style.border = "none", this.mountPoint || (this.mountPoint = document.createElement("div"), this.mountPoint.style.width = "100%", this.mountPoint.style.height = "100%", this.mountPoint.className = "tnhp-root-container", this.mountPoint.innerHTML = "", this.appendChild(this.mountPoint)), this.relayEvents = (i) => {
        const c = i;
        this.dispatchEvent(new CustomEvent(c.type, { detail: c.detail }));
      }, [
        "wix:request",
        "auth:complete",
        "student:added",
        "cart:updated",
        "waivers:signed",
        "payment:initiate",
        "payment:success",
        "promo:validate"
      ].forEach((i) => window.addEventListener(i, this.relayEvents));
      try {
        this.root || (this.root = k0.createRoot(this.mountPoint)), this.root.render(
          /* @__PURE__ */ r.jsx(Te.StrictMode, { children: /* @__PURE__ */ r.jsx(n, {}) })
        ), console.log(`[TNHP:${o}] React render initiated.`);
      } catch (i) {
        console.error(`[TNHP:${o}] React Render Error:`, i), this.mountPoint && (this.mountPoint.innerHTML = `<div style="color: red;">React Render Error: ${i}</div>`);
      }
    }
    disconnectedCallback() {
      console.log(`[TNHP:${o}] Custom Element disconnected from DOM.`), this.relayEvents && [
        "wix:request",
        "auth:complete",
        "student:added",
        "cart:updated",
        "waivers:signed",
        "payment:initiate",
        "payment:success",
        "promo:validate"
      ].forEach((i) => window.removeEventListener(i, this.relayEvents));
    }
  };
}
customElements.define("tnhp-registration", vd(J2, "Registration"));
customElements.define("tnhp-parent", vd(lS, "ParentPortal"));
customElements.define("tnhp-admin", vd(UC, "AdminDashboard"));
