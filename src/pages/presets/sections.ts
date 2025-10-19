export default [
	{
		title: "multisampler",
		description: "",
		presets: [
			{
				title: "lewisham.preset",
				description: /* html */ `
					<p>
						the public piano in lewisham train station in london, england.
					<p>
						captured with an old japanese electret microphone i bought on ebay.
					<p>
						recorded at	night as trains rush by. audible carriages and footsteps.
				`,
				previews: [
					{
						art: (await import("../../assets/op-xy/lewisham.webp")).default,
						music: {
							"audio/mp4": (await import("../../assets/op-xy/lewisham.m4a"))
								.default,
						},
					},
				],
				download: (await import("../../assets/op-xy/lewisham.preset.zip"))
					.default,
			},
			{
				title: "vl-fantasy.preset",
				description: /* html */ `
					<p>
						the <span style="font-family: fantasy">fantasy</span> preset from my vl-tone
					<p>
						captured direct input to tp-7.
					<p>
						the ancient circuitry has lent a nice warm battery buzz to the lower notes.

				`,
				previews: [
					{
						art: (await import("../../assets/op-xy/vl-fantasy.webp")).default,
						music: {
							"audio/mp4": (await import("../../assets/op-xy/vl-fantasy.m4a"))
								.default,
						},
					},
				],
				download: (await import("../../assets/op-xy/vl-fantasy.preset.zip"))
					.default,
			},
			{
				title: "sw-150.preset",
				description: /* html */ `
					<p>
						the sx-150 is so NOISY. here is its sawtooth
					<p>
						captured direct input to op-xy.
					<p>
						it's a little untuned
				`,
				previews: [
					{
						art: (await import("../../assets/op-xy/sw-150.png")).default,
						music: {
							"audio/mp4": (await import("../../assets/op-xy/sw-150.m4a"))
								.default,
						},
					},
				],
				download: (await import("../../assets/op-xy/sw-150.preset.zip"))
					.default,
			},
			{
				title: "xylosuzu.preset",
				description: /* html */ `
					<p>a real life xylophone i hit with a real life stick</p>
				`,
				previews: [
					{
						art: (await import("../../assets/op-xy/xylosuzu.webp")).default,
						music: {
							"audio/mp4": (await import("../../assets/op-xy/xylosuzu.m4a"))
								.default,
						},
					},
				],
				download: (await import("../../assets/op-xy/xylosuzu.preset.zip"))
					.default,
			},
		],
	},
]
