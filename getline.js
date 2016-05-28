function getline() {
    var image = document.getElementById('myImage');
		var lines = [1, 2, 3];
		var one = ['Skin turns sickly yellow. Open boils appear, and soft, brown-cream bruises swell upon the surface of the skin.',
					'Skin slowly loses color and warmth. It becomes lighter and lighter, and slowly resembles the color of fallen snow.',
					'Flakes of skin begin to peel off with the gentle brush of the breeze. Within minutes, piles of skin litter the ground and air, and muscle, sinew, and living veins are visible upon arms, legs, and face.',
					'The head, body, and arms slowly begin to fade from view. Soon, clothes hang loosely over a vacant shape.'];
		var two = ['Two points on each side of the scalp begin bleeding black blood. Tiny horns appear, small at first, sprouting from the bleeding skull.',
					'A hole erupts from the torso. Blood, bone, and muscle pour from the mangled gap of flesh. First a finger, then more. An elbow, and shoulder. A full living arm has sprouted.',
					'Fur explodes in a mangled bloody tail, from the back end. The blood drips clean, and a furry tail waves in the wind.',
					'Lips split apart in two areas, as the canines begin to grow. Wider, longer, and curved they become. Serrated edges appear, as the tusks take their final form.'];
		var three = ['A few eyelashes fall, then some hair. Within seconds, the air is aswirl with eyebrows, fine whiskers, and the hair of the body. Seconds later, there is no hair any more.',
					'The right leg, supporting the body, begins to look foreign. Suddenly, off balance, the leg twists. The foot, facing backwards now, shudders, and the leg falls to the ground. Smooth, pink skin marks the spot where the leg once was.',
					'The goblet falls to the ground. Curled around the goblet is a single finger, the one used to hold the goblet. Where the finger once was, is blackened skin pulled taut at a stump.',
					'The world, sharp and bright, begins to waver. Leaves become the green of a tree, which blends into the blue of the sky, and slowly, yet inescapably, the world fades from gray, to black.'];
		var randomline = lines[Math.floor(Math.random()*lines.length)];
		if (randomline == 1) {
			var printline = one[Math.floor(Math.random()*one.length)];
			}
		else if (randomline == 2) {
			var printline = two[Math.floor(Math.random()*two.length)];
			}
		else if (randomline == 3) {
			var printline = three[Math.floor(Math.random()*three.length)];
			}
		document.getElementById('pline').innerHTML = printline;
}
