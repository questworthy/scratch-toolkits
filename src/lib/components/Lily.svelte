<script>
	import { onMount } from 'svelte';

	// interactivity mechanics --------------------------------------------

	$: innerHeight = 0;
	$: innerWidth = 0;

	let cursor = { x: 0, y: 0 };

	function mapNumRange(num, inMin, inMax, outMin, outMax) {
		return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
	}

	$: skewX = mapNumRange(cursor.x, innerWidth, 0, 0.01, -0.05);
	$: skewY = mapNumRange(cursor.y, innerHeight, 0, -0.05, 0.05);
	$: X = mapNumRange(cursor.x, innerWidth, 0, 20, -20);
	$: Y = mapNumRange(cursor.y, innerWidth, 0, 20, -20);

	export let expression = 'blank'; // or smile
</script>

<svelte:window
	bind:innerHeight
	bind:innerWidth
	on:pointermove={(e) => {
		cursor.x = e.clientX;
		cursor.y = e.clientY;
	}}
/>

<!--
<p>{cursor.x}</p>
<p>{cursor.y}</p>
-->

<svg
	role="img"
	width="100%"
	height="100%"
	viewBox="0 0 1583.3509 1640.81"
	version="1.1"
	id="svg1"
	xml:space="preserve"
	xmlns="http://www.w3.org/2000/svg"
	><defs id="defs1" /><path
		fill="#474bff"
		d="m 1187.3712,1580.9795 c -505.446,141.3692 -1454.6472,17.6347 -1116.0158,-514.4923 173.6329,-272.84755 364.4599,-91.842 640.3238,-68.8087 269.1674,22.4741 727.6862,-385.35965 836.6598,-50.7645 103.1566,316.7348 -22.9461,539.5236 -360.9678,634.0655 z"
		id="path1-1"
		style="fill:#f9a474;fill-opacity:1;stroke-width:4.89174"
	/><path
		id="path93-4-2-6-2"
		style="fill:#333333;fill-opacity:1;stroke:none;stroke-width:4.72383;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
		d="M 802.8338,0 C 128.2353,0.001 195.3615,1312.5918 591.0716,1168.8298 c 109.1401,-37.5685 723.2082,66.1821 700.4979,-153.8739 C 1219.7948,623.64441 1368.5784,33.93975 802.8338,0 Z"
	/><path
		id="path116-9-9-2-4"
		style="fill:#c3b2e7;fill-opacity:1;stroke:none;stroke-width:5.03162;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
		d="m 774.1478,1043.0774 c -179.9558,6.0394 -520.0247,202.9445 -463.2793,309.1406 48.9484,-11.3538 142.7174,16.4458 171.8281,71.291 -15.3289,52.8984 -22.7485,142.8368 15.5625,200.3145 205.5829,37.7896 479.3128,4.7161 610.0709,-23.6211 19.0021,-72.9267 21.5002,-155.4714 -5.2838,-199.5469 25.3901,-24.2032 61.5047,-36.298 128.1856,-46.377 114.5785,-105.4777 -291.3035,-316.7648 -457.084,-311.2011 z m 380.2226,546.5488 c -0.88,0.2341 -1.7393,0.4567 -2.6093,0.6855 0.8,-0.2057 1.8399,-0.4312 2.6171,-0.6347 z"
	/><path
		style="fill:#fedec5;fill-opacity:1;stroke:none;stroke-width:20;stroke-linecap:round;stroke-opacity:1"
		d="m 310.8685,1352.218 6.0472,225.3281 c 24.7413,10.5484 133.4919,35.9752 181.3434,46.2774 -38.9145,-64.3953 -31.0769,-150.7567 -15.5625,-200.3145 -29.1326,-54.8866 -122.9102,-82.7123 -171.8281,-71.291 z"
		id="path2-7"
	/><path
		style="fill:#fedec5;fill-opacity:1;stroke:none;stroke-width:20;stroke-linecap:round;stroke-opacity:1"
		d="m 1103.0461,1400.6566 c 26.794,44.092 24.3099,126.5981 5.2839,199.5458 46.1001,-7.295 116.331,-26.3637 132.6311,-35.8916 l -1.5946,-218.7719 c -66.7541,10.0824 -110.9158,30.9006 -136.3204,55.1177 z"
		id="path2-9-8"
	/><path
		style="fill:#fedec5;fill-opacity:1;stroke:none;stroke-width:20;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
		d="m 317.1104,1635.0606 178.6167,5.3048"
		id="path4"
	/><path
		id="path110-1-0-5-4"
		style="fill:#fedec5;fill-opacity:1;stroke:none;stroke-width:3.98051;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
		d="m 720.8999,227.31861 c -11.5498,18.74664 -107.782,158.01704 -152.1153,198.79041 -33.2937,19.9509 -47.8602,51.50368 -55.6558,87.25117 -0.1555,-0.012 -0.311,-0.023 -0.4666,-0.033 -36.2681,-1.6849 -66.9375,24.7321 -68.5015,59.0039 -1.5637,34.2711 26.5688,63.4187 62.8362,65.1034 0.1562,0 0.3123,0 0.4684,-0.01 14.7422,145.6137 92.7175,304.48751 148.5834,327.49821 l -8.777,192.2739 c -5.5997,122.667 47.5723,170.3968 117.2812,173.6363 69.7097,3.2392 129.5588,-39.2406 135.1584,-161.909 L 908.4884,976.65 c 85.3693,-36.8186 153.703,-174.07171 177.283,-301.25181 5.0874,1.487 10.3432,2.3862 15.6521,2.6779 36.269,1.685 66.9387,-24.7333 68.5017,-59.0059 1.5637,-34.271 -26.5689,-63.4186 -62.8363,-65.1034 -5.313,-0.2017 -10.6284,0.2064 -15.8298,1.2154 10.044,-186.22154 -177.9369,-149.38875 -370.3592,-327.86358 z"
	/><g
		id="g116-0-2-0"
		transform="matrix(0.98010302,0.04553176,-0.04513432,0.98873356,1519.3539,524.27715)"
		><ellipse
			style="fill:#2b343b;fill-opacity:1;stroke:none;stroke-width:3.84048;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
			id="path111-5-3-3"
			cx="-893.66235"
			cy="79.625076"
			rx="27.366634"
			ry="43.174522"
			transform="matrix(0.99966174,{skewY},{skewX},0.999,{X},{Y})"
		/><ellipse
			style="fill:#2b343b;fill-opacity:1;stroke:none;stroke-width:3.84048;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
			id="path111-5-3-2-6"
			cx="-568.6283"
			cy="52.975975"
			rx="27.366634"
			ry="43.174522"
			transform="matrix(0.99966174,{skewY},{skewX},0.999,{X},{Y})"
		/><ellipse
			style="fill:#fed4b3;fill-opacity:1;stroke:none;stroke-width:5;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
			id="path111-1-8-8-1"
			cx="-936.92987"
			cy="270.19171"
			rx="36.540554"
			ry="54.807766"
		/><ellipse
			style="fill:#fed4b3;fill-opacity:1;stroke:none;stroke-width:5;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
			id="path111-1-0-7-0-0"
			cx="-525.85944"
			cy="252.26068"
			rx="36.540554"
			ry="54.807766"
		/><path
			style="fill:none;fill-opacity:1;stroke:#333333;stroke-width:8.1181;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
			d="m -732.27885,104.17205 c 29.2151,14.89579 34.65514,36.29167 23.01126,55.44582"
			id="path112-0-4-6"
		/><path
			style="fill:none;fill-opacity:1;stroke:#333333;stroke-width:8.1181;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
			d="m -789.33883,291.55244 c 33.9761,24.0532 70.2188,19.505 107.8724,-2.8479"
			id="path113-4-0-3"
		/><path
			style="fill:none;fill-opacity:1;stroke:#696969;stroke-width:8.1181;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
			d="m -931.21396,-21.79559 c 24.1728,-10.60645 47.253,-23.38081 85.8854,-5.29772"
			id="path114-80-9-2"
		/><path
			style="fill:none;fill-opacity:1;stroke:#696969;stroke-width:8.1181;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
			d="m -617.16449,-43.527298 c 23.0295,-13.815 48.2046,-23.01271 85.8854,-5.29772"
			id="path114-8-4-1-0"
		/>
	</g><path
		style="fill:#efceb9;fill-opacity:1;stroke:none;stroke-width:19.709;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
		d="m 656.0487,964.9227 c 66.7179,28.4683 131.819,51.417 252.4398,11.7273 l -3.1924,69.934 c -72.265,11.2481 -120.5321,45.3482 -252.3179,-14.3964 z"
		id="path115-6-2-5"
	/><g
		id="g3-5"
		transform="rotate(15.675185,1485.7125,1774.1954)"
		style="display:{expression == 'smile' ? 'block' : 'none'}"
		><g id="g2-4" transform="rotate(-10.420288,578.64438,919.40088)"
			><path
				d="m 482.35178,1042.7722 c 12.07271,-13.4525 32.24423,-21.7805 53.73606,-22.1853 20.60183,-0.3163 39.80893,6.6921 51.63522,18.8483 147.58309,-109.23297 -236.10703,-82.075 -105.37128,3.337 z"
				style="fill:#333333;stroke-width:0.0909662;stroke-linecap:round"
				id="path138-1-5-7"
			/><path
				d="m 587.72306,1039.4352 c -12.07811,-14.8941 -31.45205,-23.7198 -52.0839,-23.7266 -21.52171,0.08 -41.44934,11.0595 -53.28738,27.0636 30.9215,24.6173 71.71698,26.449 105.37128,-3.337 z"
				style="fill:#f87171;stroke-width:0.0910979;stroke-linecap:round"
				id="path140-0-4-6"
			/></g
		></g
	><ellipse
		style="fill:none;fill-opacity:1;stroke:#f682a5;stroke-width:20;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
		id="path143-4-4-4-5"
		cx="961.36859"
		cy="536.18518"
		rx="134.00171"
		ry="135.67859"
	/><ellipse
		style="fill:none;fill-opacity:1;stroke:#f682a5;stroke-width:20;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
		id="path143-4-2-2-9-6"
		cx="642.52289"
		cy="539.39807"
		rx="134.00171"
		ry="135.67859"
	/><path
		style="fill:none;fill-opacity:1;stroke:#f682a5;stroke-width:20;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
		d="m 776.8675,537.89645 c 21.7872,-9.6425 28.0745,-13.7394 50.5659,1.1464"
		id="path144-2-9-9"
	/></svg
>
