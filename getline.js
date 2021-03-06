function getline() {
    var image = document.getElementById('myImage');
		var lines = ['Skin turns sickly yellow. Open boils appear, and soft, brown-cream bruises swell upon the surface of the skin.',
					'Skin slowly loses color and warmth. It becomes lighter and lighter, and slowly resembles the color of fallen snow.',
					'Flakes of skin begin to peel off with the gentle brush of the breeze. Within minutes, piles of skin litter the ground and air, and muscle, sinew, and living veins are visible upon arms, legs, and face.',
					'The head, body, and arms slowly begin to fade from view. Soon, clothes hang loosely over a vacant shape.',
                    'Two points on each side of the scalp begin bleeding black blood. Tiny horns appear, small at first, sprouting from the bleeding skull.',
                    'A hole erupts from the torso. Blood, bone, and muscle pour from the mangled gap of flesh. First a finger, then more. An elbow, and shoulder. A full living arm has sprouted.',
                    'Fur explodes in a mangled bloody tail, from the back end. The blood drips clean, and a furry tail waves in the wind.',
                    'Lips split apart in two areas, as the canines begin to grow. Wider, longer, and curved they become. Serrated edges appear, as the tusks take their final form.',
                    'A few eyelashes fall, then some hair. Within seconds, the air is aswirl with eyebrows, fine whiskers, and the hair of the body. Seconds later, there is no hair any more.',
                    'The right leg, supporting the body, begins to look foreign. Suddenly, off balance, the leg twists. The foot, facing backwards now, shudders, and the leg falls to the ground. Smooth, pink skin marks the spot where the leg once was.',
                    'The goblet falls to the ground. Curled around the goblet is a single finger, the one used to hold the goblet. Where the finger once was, is blackened skin pulled taut at a stump.',
                    'The world, sharp and bright, begins to waver. Leaves become the green of a tree, which blends into the blue of the sky, and slowly, yet inescapably, the world fades from gray, to black.',
                    'A rasping cough shudders through the lungs. The shoulders heave, and the head snaps back as each heaving rasp leaves the body.',
                    'It started as a drip. Slowly, dark red blood begins to trickle from the nose. Over time, the flow becomes heavier, and the blood is more than just a nuisance.',
                    'Deep coughing leads to dark phlegm escaping from the mouth. It is runny, and tastes horrible.',
                    'Green goo accumulates in the corners of the eyes. It is sticky, and when dries, hurts to scrape away.',
                    'Slightly hunched, a vein of energy runs through the back, arms, and legs. Now standing straight, years of aches and pains suddenly disappear.',
                    'The washed out greens of trees turn to vibrant, individual leaves. The uniform color of the ground becomes individual blades of grass. Great distances are no longer fuzzy, but sharp as if held up in front of the face.',
                    'Clothes tighten, as the arms, legs, and abdomen swell beneath the skin. Muscles bulge and flex, and veins pump even faster. Sleeves rip, as biceps pop from beneath the fabric.',
                    'A moment ago, there were mysteries, confusion, and uncertainty. Now, solutions present themselves and the path seems obvious. Connections are quickly made between the way the world works, and how to manipulate it.',
                    'A slow burn of pain grows in the back, then shoulders and other joins. Years of stress, burden, and movement seem to appear. The back hunches, and straightening is painful.',
                    'Sharp features and detail begin to fade. Recognizable faces are now unidentifiable forms. Readble signs are now fuzzy, mistaken lines. The world has become blurred.',
                    'The skin underneath the arms begins to sag. The legs slowly soften, and feel tired. The abdomen begins to flow outward, and takes the shape of a pot. There is a new weight of the world, it seems.',
                    'Memories slowly begin to fade. Understood connections between cause and effect are now lost. Great challenge is needed to do simple arithmatic, reading, and navigation.',
                    'As droplets of sweat slide down the skin, an overpowering smell of feces stings the air. As the sweating increases, the smell becomes bolder, filling the air, and making it hard to breath.',
                    'The slightly acidic smell is unmistakable. It plays with the nostrils at first, and slowly grows into something more unpleasent. There does not seem to be a skunk nearby - what is the source of this smell?',
                    'A hand runs tentatively through hair, pushing strands from the forehead. The hand returns to the side, but it smells different. The smell is powerful, and unimstakable. Smoke.',
                    'A sensation invades the nostrils. It is immediate and potent. "Does anyone else smell fish?"',
                    'Sturdy feet were planted firm on the ground just a moment ago. Yet now, there is air in between. The ground was near, yet now it is not quite as near, and getting further still...',
                    'A noise reaches the ears, that is faint at first, but becoming louder. Others don not appear to hear it. After a moment, it is understood - the infinite, never-ending push to grow is what is being heard, from the trees, grass, and plants nearby. Would they listen, if told to stop?',
                    'The touch of the sun upon the skin loses its warmth. The burn from snuffing a candle flame is no more. The enticement and comfort from a warm hearth no longer calls. How long, and how far can this go?',
                    'Scars, cuts, scrapes, bruieses and aches begin to burn. Then, suddenly, they are no more. Pink skin covers the assaulted areas, raw and new.',
                    'The mouth opens, and an unexpected noise squawks out. Was that a chicken?',
                    'A low growl forms in the back of the throat, building in intensity. It errupts from the mouth, and a lions roar is heard for miles.',
                    'The spoken word is identical, at first. Then, slowly, the voice drops deeper, lower, until it is barely above a raspy growl.',
                    'Words are spoken as normal, before the change. Then, as the change happens, the words begin to alter. Words with meaning lose them. Commonly understood phrases, become gibberish. Language of the words, has lost its meaning.',
                    'Two pink and black stubs appear on the crown of the skull. Slowly, they push forth from the scalp. Wet, matted fur emerges from below the skin, as two cat ears are realized at the top of the head.',
                    'Blood starts streaming from the mouth, as the tongue splits down the center. It thins, yet grows longer at the same time. Within moments, the blood has stopped. A thin forked tongue now slithers where the other once was.',
                    'Long, jointed fingers begin to shrink. Knuckles disappear, as black and brown fur grows from the skin. Rough pads appear on the palm. Two paws of a large bear are attached at the end of each arm.',
                    'Loud pops and cracks are heard from the neck and shoulders. A quick turn of the head reveals that, similar to the majestic owl, the head now has almost complete circular motion around the neck.',
                    ];
		var printline = lines[Math.floor(Math.random()*lines.length)];
            document.getElementById('pline').innerHTML = printline;
        
}
