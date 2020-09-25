
// generateColorArray returns an Array of colors based on:
// colorStart - hexadeximal starting color value
// colorEnd - hexadeximal ending color value
// colorCount - how many colors to generate from colorStart to colorEnd

let generateColorArray = (colorStart, colorEnd, colorCount) => {

	let hex = (c) => {
		let s = "0123456789abcdef";
		let i = parseInt(c);
		if (i == 0 || isNaN(c))
		  return "00";
		i = Math.round(Math.min (Math.max(0, i), 255));
		return s.charAt((i - i % 16) / 16) + s.charAt(i % 16);
	}
	  
	  /* Convert an RGB triplet to a hex string */
	let convertToHex = (rgb) => {
		return '#' + hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
	}
	  
	  /* Remove '#' in color hex string */
	let trim = (s) => { return (s.charAt(0) == '#') ? s.substring(1, 7) : s }
	  
	  /* Convert a hex string to an RGB triplet */
	let convertToRGB = (hex) => {
		let color = [];
		color[0] = parseInt ((trim(hex)).substring (0, 2), 16);
		color[1] = parseInt ((trim(hex)).substring (2, 4), 16);
		color[2] = parseInt ((trim(hex)).substring (4, 6), 16);
		return color;
	}

	let start = convertToRGB(colorStart);    
	let end   = convertToRGB(colorEnd);    

	//Alpha blending amount
	let alpha = 0.0;

	let arr = [];
	
	for (i = 0; i < colorCount; i++) {
		let c = [];
		alpha += (1.0/colorCount);
		
		c[0] = start[0] * alpha + (1 - alpha) * end[0];
		c[1] = start[1] * alpha + (1 - alpha) * end[1];
		c[2] = start[2] * alpha + (1 - alpha) * end[2];

		arr.push(convertToHex(c));
		
	}
	
	return arr.reverse();
	
}

// var colorArray = generateColorArray('#5a9bd5','#70ad46', 8);

// console.log(colorArray);